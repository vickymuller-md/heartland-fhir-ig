import importlib.util
import io
import gzip
import json
from pathlib import Path
import stat
import tarfile
import tempfile
import unittest
import warnings
import zipfile

spec = importlib.util.spec_from_file_location('prepare', Path(__file__).resolve().parents[1] / 'tools/prepare_publication.py')
p = importlib.util.module_from_spec(spec)
spec.loader.exec_module(p)


class PreparationTests(unittest.TestCase):
    def test_broken_links_are_not_hidden_by_zero_fhir_errors(self):
        qa = {'errs': 0, 'suppressed-hints': 0, 'suppressed-warnings': 0, 'ig-ver': '0.3.0', 'version': '4.0.1'}
        files = {'qa.json': json.dumps(qa).encode(), 'qa.html': b'<!-- broken links = 0, errors = 0, warnings = 14 -->'}
        p.check_qa(files)
        for html in [b'<!-- broken links = 1, errors = 0, -->', b'no summary', files['qa.html'] * 2]:
            with self.assertRaisesRegex(ValueError, 'Broken links'):
                p.check_qa({**files, 'qa.html': html})

    def test_hidden_tar_tail_or_concatenated_tar_is_rejected(self):
        out = io.BytesIO()
        with tarfile.open(fileobj=out, mode='w:') as t:
            member = tarfile.TarInfo('a.json')
            member.size = 2
            t.addfile(member, io.BytesIO(b'{}'))
        raw = out.getvalue()
        for suffix in [b'concealed payload', raw]:
            with self.assertRaisesRegex(ValueError, 'Nonzero data after TAR end'):
                p.scan(gzip.compress(raw + suffix), 'a.tgz')

    def test_known_upstream_svg_path_only_drops_export_metadata(self):
        raw = b'<svg\n   inkscape:export-filename="C:\\Users\\Philip\\Desktop\\Globe Flag.png"><path d="M0 0"/></svg>'
        fixed, changes = p.normalize('assets/images/001.svg', raw, Path('/repo'))
        self.assertEqual(fixed, b'<svg\n><path d="M0 0"/></svg>')
        self.assertEqual(changes[0]['count'], 1)
        self.assertEqual(p.normalize('assets/images/other.svg', raw, Path('/repo')), (raw, []))

    def test_locale_css_fix_preserves_embedded_image(self):
        raw = b'background-image: url(/repo/temp/pagesdata:image/png;base64,YQ==)'
        fixed, changes = p.normalize('en/index.html', raw, Path('/repo'))
        self.assertEqual(fixed, b'background-image: url(data:image/png;base64,YQ==)')
        self.assertEqual(changes, [{'kind': 'css-data-url', 'count': 1}])

    def test_diagnostic_relativization_preserves_every_other_byte(self):
        raw = b'Warning /repo/fsh-generated/resources/X.json: code ABC; unknown extension\n'
        fixed, changes = p.normalize('qa-eslintcompact.txt', raw, Path('/repo'))
        self.assertEqual(fixed, raw.replace(b'/repo/', b''))
        self.assertEqual(changes[0]['count'], 1)

    def test_fhir_never_rewritten_even_if_local_path_is_present(self):
        raw = b'{"url":"file:///Users/someone/item"}'
        fixed, changes = p.normalize('Observation-example.json', raw, Path('/Users/someone'))
        self.assertEqual((fixed, changes), (raw, []))
        with self.assertRaises(ValueError):
            p.scan(fixed, 'Observation-example.json')

    def test_unknown_local_path_and_credential_like_content_fail_closed(self):
        p.scan(b'inside:{file:/^\\w+\\.\\w+/}', 'prism.js')
        for raw in [b'/Users/another/path', b'/home/alice/test', b'file:/tmp/x', b'C:\\Users\\test\\x', b'ghp_' + b'a' * 30]:
            with self.assertRaises(ValueError):
                p.scan(raw, 'page.html')

    def test_banner_is_explicitly_candidate_not_downloaded_release(self):
        raw = b'<html><!--ReleaseHeader--><p>Downloaded Version 0.3.0</p><!--EndReleaseHeader--></html>'
        fixed, changes = p.normalize('index.html', raw, Path('/repo'))
        self.assertIn(b'draft, experimental', fixed)
        self.assertNotIn(b'Downloaded Version', fixed)
        self.assertEqual(changes[0]['count'], 1)

    def test_zip_output_is_deterministic_and_recursively_scanned(self):
        files = {'b.txt': b'b', 'a.txt': b'a'}
        self.assertEqual(p.zip_bytes(files), p.zip_bytes(dict(reversed(list(files.items())))))
        p.scan(p.zip_bytes(files), 'test.zip')
        with self.assertRaises(ValueError):
            p.scan(p.zip_bytes({'inner.zip': p.zip_bytes({'x.txt': b'/Users/private'})}), 'test.zip')

    def test_traversal_and_private_names_fail(self):
        for name in ['../x.txt', '/x.txt', 'a/../../b.txt', 'C:\\x', 'a//b', '.env', 'a/AGENTS.md']:
            with self.assertRaises(ValueError):
                p.scan(p.zip_bytes({name: b'x'}), 'test.zip')

    def test_duplicate_and_symlink_zip_members_fail(self):
        out = io.BytesIO()
        with warnings.catch_warnings():
            warnings.simplefilter('ignore', UserWarning)
            with zipfile.ZipFile(out, 'w') as z:
                z.writestr('a.txt', 'one')
                z.writestr('a.txt', 'two')
        with self.assertRaises(ValueError):
            p.scan(out.getvalue(), 'test.zip')
        out = io.BytesIO()
        with zipfile.ZipFile(out, 'w') as z:
            entry = zipfile.ZipInfo('link.txt')
            entry.external_attr = (stat.S_IFLNK | 0o777) << 16
            z.writestr(entry, '/outside')
        with self.assertRaises(ValueError):
            p.scan(out.getvalue(), 'test.zip')

    def test_invalid_or_truncated_archives_fail(self):
        for raw, name in [(b'not a zip', 'a.zip'), (p.zip_bytes({'a.txt': b'hello'})[:-20], 'a.zip'), (b'not gzip', 'a.tgz')]:
            with self.assertRaises((ValueError, OSError, zipfile.BadZipFile)):
                p.scan(raw, name)
        out = io.BytesIO()
        with tarfile.open(fileobj=out, mode='w:gz') as t:
            member = tarfile.TarInfo('package/test.json')
            member.size = 2
            t.addfile(member, io.BytesIO(b'{}'))
        p.scan(out.getvalue(), 'a.tgz')
        with self.assertRaises((OSError, EOFError)):
            p.scan(out.getvalue()[:-5], 'a.tgz')

    def test_tar_links_fail_but_publisher_indexes_are_allowed(self):
        out = io.BytesIO()
        with tarfile.open(fileobj=out, mode='w:gz') as t:
            member = tarfile.TarInfo('package/link')
            member.type = tarfile.SYMTYPE
            member.linkname = '/outside'
            t.addfile(member)
        with self.assertRaises(ValueError):
            p.scan(out.getvalue(), 'a.tgz')
        p.safe_name('package/.index.json')

    def test_tree_rejects_symlinks_private_files_and_unknown_extensions(self):
        for name, link in [('link.json', True), ('.env', False), ('unexpected.exe', False)]:
            with tempfile.TemporaryDirectory() as tmp:
                f = Path(tmp) / name
                f.symlink_to('/tmp') if link else f.write_bytes(b'x')
                expected = 'Symlinks' if link else ('Private or hidden' if name == '.env' else 'Unexpected file type')
                with self.assertRaisesRegex(ValueError, expected):
                    p.tree(Path(tmp).resolve())

    def test_regular_tree_is_read_and_parent_symlink_is_rejected(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp).resolve()
            actual = root / 'actual'
            actual.mkdir()
            (actual / 'a.json').write_bytes(b'{}')
            self.assertEqual(p.tree(actual), {'a.json': b'{}'})
            (root / 'alias').symlink_to(actual, target_is_directory=True)
            with self.assertRaisesRegex(ValueError, 'Symlink path'):
                p.tree(root / 'alias')

    def test_inventory_detects_extra_missing_and_changed_files(self):
        baseline = p.hashes({'a.txt': b'a'})
        for variant in [{'a.txt': b'a', 'b.txt': b'b'}, {}, {'a.txt': b'other'}]:
            self.assertNotEqual(p.hashes(variant), baseline)


if __name__ == '__main__':
    unittest.main()
