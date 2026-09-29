#!/usr/bin/env python3
"""Prepare a reviewed Publisher output; never upload, rewrite FHIR, or hide QA."""
import argparse
import hashlib
import gzip
import io
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import stat
import tarfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
EXCLUDE = {'package.r4b.tgz', 'package.r4b.manifest.json'}
TEXT_QA = {'qa.html', 'qa.min.html', 'qa.txt', 'qa.compare.txt', 'qa.xml', 'qa-eslintcompact.txt'}
# `file:/^` is Prism's JavaScript property + regex, not a file URI.
LOCAL = re.compile(rb'file:/(?!\^)|/Users/|/home/|/private/|/var/folders/|[A-Za-z]:[\\/]Users[\\/]', re.I)
SECRET = re.compile(rb'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|(?:sk_live_|sk-proj-|ghp_)[A-Za-z0-9]{20,}')
EXTENSIONS = {'.html', '.json', '.ttl', '.xml', '.xlsx', '.csv', '.sch', '.jpg', '.css', '.eot', '.svg', '.ttf', '.woff', '.otf', '.png', '.js', '.map', '.txt', '.zip', '.md', '.gif', '.bmp', '.tgz', '.db', '.tsv', '.pack'}


def digest(data):
    return hashlib.sha256(data).hexdigest()


def require(ok, message):
    if not ok:
        raise ValueError(message)


def safe_name(name):
    require(name and not name.startswith('/') and '\\' not in name and ':' not in name
            and all(p not in ('', '.', '..') for p in name.rstrip('/').split('/')), 'Unsafe member path')
    require(not any((p.startswith('.') and p not in ('.index.json', '.index.db') and name != '_rels/.rels') or p in ('AGENTS.md', 'CLAUDE.md', 'HANDOFF.md', 'node_modules', 'graphify-out')
                    for p in PurePosixPath(name).parts), 'Private or hidden member')
    return name


def real_directory(path):
    path = Path(os.path.abspath(path))
    for parent in [path, *path.parents]:
        require(not parent.is_symlink(), 'Symlink path is not allowed')
    require(path.is_dir(), 'Directory required')
    return path


def tree(path):
    path = real_directory(path)
    result = {}
    for item in sorted(path.rglob('*')):
        require(not item.is_symlink(), 'Symlinks are not allowed')
        if item.is_dir():
            continue
        require(item.is_file(), 'Special file is not allowed')
        name = safe_name(item.relative_to(path).as_posix())
        require(item.suffix in EXTENSIONS, f'Unexpected file type: {name}')
        result[name] = item.read_bytes()
    return result


def hashes(files):
    return {name: digest(data) for name, data in sorted(files.items())}


def scan(data, name, budget=None, depth=0):
    """Inspect containers in memory; no archive path is ever extracted."""
    budget = budget if budget is not None else [0, 0]
    budget[0] += len(data)
    budget[1] += 1
    require(depth <= 5 and budget[0] <= 512 * 1024 * 1024 and budget[1] <= 20000, 'Archive budget exceeded')
    require(not LOCAL.search(data), f'Local path remains: {name}')
    require(not SECRET.search(data), f'Credential-like content: {name}')
    if data.startswith(b'PK') or name.endswith(('.zip', '.xlsx', '.pack')):
        with zipfile.ZipFile(io.BytesIO(data)) as archive:
            names = set()
            for member in archive.infolist():
                safe_name(member.filename)
                require(member.filename not in names, 'Duplicate archive member')
                names.add(member.filename)
                mode = member.external_attr >> 16
                require(stat.S_IFMT(mode) in (0, stat.S_IFREG, stat.S_IFDIR), 'Archive link or special member')
                require(not member.flag_bits & 1 and member.file_size <= 128 * 1024 * 1024, 'Encrypted or oversized member')
                if not member.is_dir():
                    scan(archive.read(member), f'{name}!{member.filename}', budget, depth + 1)
    elif data.startswith(b'\x1f\x8b') or name.endswith('.tgz'):
        # Read through gzip's EOF/CRC, bounded before allocating an unbounded tar.
        with gzip.GzipFile(fileobj=io.BytesIO(data)) as stream:
            expanded = stream.read(128 * 1024 * 1024 + 1)
        require(len(expanded) <= 128 * 1024 * 1024, 'Oversized tar container')
        with tarfile.open(fileobj=io.BytesIO(expanded), mode='r:') as archive:
            names = set()
            for member in archive:
                # Publisher npm archives use ./package, a conventional root marker.
                normalized = member.name.removeprefix('./')
                safe_name(normalized)
                require(normalized not in names, 'Duplicate archive member')
                names.add(normalized)
                require(member.isfile() or member.isdir(), 'Archive link or special member')
                require(member.size <= 128 * 1024 * 1024, 'Oversized member')
                if member.isfile():
                    scan(archive.extractfile(member).read(), f'{name}!{normalized}', budget, depth + 1)
            require(not expanded[archive.offset:].strip(b'\0'), 'Nonzero data after TAR end')


def normalize(name, data, repo):
    """Only identified Publisher presentation/diagnostic contexts may change."""
    changes = []
    if name in {'assets/images/001.svg', 'en/assets/images/001.svg'}:
        # Upstream Inkscape export metadata is not rendered SVG geometry.
        old = b'   inkscape:export-filename="C:\\Users\\Philip\\Desktop\\Globe Flag.png"'
        count = data.count(old)
        if count:
            data = data.replace(old, b'')
            changes.append({'kind': 'upstream-svg-export-path-metadata', 'count': count})
    if name in {'en/index.html', 'qa.html', 'qa.min.html'}:
        for suffix in ('/temp/pages', '/output'):
            old = b'url(' + str(repo).encode() + suffix.encode() + b'data:image/png;base64,'
            count = data.count(old)
            if count:
                data = data.replace(old, b'url(data:image/png;base64,')
                changes.append({'kind': 'css-data-url', 'count': count})
    if name in TEXT_QA:
        for directory in ('fsh-generated/resources/', 'fsh-generated/includes/', 'input/includes/',
                          'input/pagecontent/', 'temp/pages/_includes/', 'template/config'):
            old = str(repo).encode() + b'/' + directory.encode()
            count = data.count(old)
            if count:
                data = data.replace(old, directory.encode())
                changes.append({'kind': 'diagnostic-source-relative-path', 'count': count})
        encoded = str(repo).replace('/', '_').encode() + b'_'
        count = data.count(encoded)
        if count:
            # Matching generated href/name anchors stay paired after relativization.
            data = data.replace(encoded, b'')
            changes.append({'kind': 'diagnostic-source-anchor-prefix', 'count': count})
    if name.endswith('.html'):
        # Formal-build placeholders are presentation only, never an approval.
        pattern = rb'<!--ReleaseHeader-->.*?<!--EndReleaseHeader-->'
        candidate = (b'<!--ReleaseHeader--><p id="publish-box">HEARTLAND FHIR candidate 0.3.0 '
                     b'&mdash; draft, experimental R4 4.0.1 reference. Prepared for technical review; '
                     b'not evidence of clinical validation or vendor interoperability.</p><!--EndReleaseHeader-->')
        data, count = re.subn(pattern, candidate, data, flags=re.S)
        if count:
            require(count == 1, f'Multiple release banners: {name}')
            changes.append({'kind': 'explicit-candidate-banner', 'count': count})
    return data, changes


def zip_bytes(files):
    out = io.BytesIO()
    with zipfile.ZipFile(out, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for name, data in sorted(files.items()):
            entry = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            entry.compress_type = zipfile.ZIP_DEFLATED
            entry.external_attr = (stat.S_IFREG | 0o644) << 16
            archive.writestr(entry, data)
    return out.getvalue()


def check_qa(files):
    qa = json.loads(files['qa.json'])
    require(qa['errs'] == 0 and qa['suppressed-hints'] == qa['suppressed-warnings'] == 0, 'Publisher QA gate failed')
    require(qa['ig-ver'] == '0.3.0' and qa['version'] == '4.0.1', 'Unexpected candidate/version')
    summary = re.findall(rb'<!-- broken links = (\d+), errors = (\d+),', files['qa.html'])
    require(summary == [(b'0', b'0')], 'Broken links or missing/ambiguous Publisher QA summary')


def prepare(files, repo):
    require(EXCLUDE <= files.keys(), 'Expected R4B artifacts not found; review changed Publisher output')
    check_qa(files)
    require(b'endsWith' not in files['assets/js/lang-redirects.js'] and
            b'window.location.search + window.location.hash' in files['assets/js/lang-redirects.js'], 'Missing locale override')
    require(b'<iframe' not in files['searchform.html'] and b'Find resources' in files['searchform.html'], 'Missing finder override')
    with tarfile.open(fileobj=io.BytesIO(files['package.tgz']), mode='r:gz') as package:
        metadata = json.load(package.extractfile('package/package.json'))
        require(metadata['url'] == 'https://fhir.heartlandprotocol.org/ig', 'Use official local build with public target URL')
        require(metadata['version'] == '0.3.0' and metadata['fhirVersions'] == ['4.0.1'], 'Package version mismatch')
    prepared, transforms = {}, {}
    for name, data in files.items():
        if name in EXCLUDE or name == 'full-ig.zip':
            continue
        prepared[name], changes = normalize(name, data, repo)
        if changes:
            transforms[name] = changes
        scan(prepared[name], name)
    require(prepared['package.tgz'] == files['package.tgz'], 'FHIR package was modified')
    require(prepared['qa.json'] == files['qa.json'], 'QA counts were modified')
    # Inspect the original ZIP's structure first; its known raw presentation paths
    # are checked against the corresponding raw output, not suppressed by scanning.
    with zipfile.ZipFile(io.BytesIO(files['full-ig.zip'])) as archive:
        seen, wrappers = set(), {}
        for member in archive.infolist():
            name = safe_name(member.filename)
            require(name not in seen, 'Duplicate full-IG member')
            seen.add(name)
            require(stat.S_IFMT(member.external_attr >> 16) in (0, stat.S_IFREG, stat.S_IFDIR), 'Full-IG special member')
            require(not member.flag_bits & 1 and member.file_size <= 128 * 1024 * 1024, 'Unsafe full-IG member')
            if member.is_dir():
                continue
            data = archive.read(member)
            if name == 'index.html':
                scan(data, name)
                require(b'site/index.html' in data, 'Unexpected offline wrapper')
                wrappers[name] = data
            else:
                require(name.startswith('site/'), 'Unexpected full-IG root entry')
                relative = name[len('site/'):]
                require(relative in files and data == files[relative], f'Archive/output mismatch: {relative}')
        require(set(wrappers) == {'index.html'}, 'Missing offline wrapper')
    prepared['full-ig.zip'] = zip_bytes({**wrappers, **{'site/' + k: v for k, v in prepared.items()}})
    scan(prepared['full-ig.zip'], 'full-ig.zip')
    transforms['full-ig.zip'] = [{'kind': 'rebuild-from-prepared-files', 'count': len(prepared)}]
    return prepared, transforms


def write_new(path, data):
    with Path(path).open('xb') as target:
        target.write(data)


def json_bytes(value):
    return (json.dumps(value, indent=2, sort_keys=True) + '\n').encode()


def difference(before, after):
    return {'added': sorted(after.keys() - before.keys()), 'removed': sorted(before.keys() - after.keys()),
            'changed': sorted(k for k in before.keys() & after.keys() if before[k] != after[k])}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('action', choices=['inventory', 'prepare', 'apply'])
    parser.add_argument('--inventory', type=Path, required=True)
    parser.add_argument('--stage', type=Path)
    parser.add_argument('--receipt', type=Path)
    parser.add_argument('--backup', type=Path)
    args = parser.parse_args()
    source, destination = ROOT / 'output', ROOT / 'site/public/ig'
    if args.action == 'inventory':
        write_new(args.inventory, json_bytes(hashes(tree(source))))
        print('Inventory created. Review it before preparation.')
        return
    require(args.stage is not None and args.receipt is not None, 'Stage and receipt required')
    inventory = json.loads(args.inventory.read_bytes())
    if args.action == 'prepare':
        raw = tree(source)
        require(hashes(raw) == inventory, 'Output differs from reviewed inventory')
        prepared, transforms = prepare(raw, ROOT)
        receipt = {'source': inventory, 'prepared': hashes(prepared), 'before': hashes(tree(destination)),
                   'transformations': transforms, 'excluded': sorted(EXCLUDE), 'qa': json.loads(raw['qa.json'])}
        receipt['diff'] = difference(receipt['before'], receipt['prepared'])
        require(not args.receipt.exists() and not args.stage.exists(), 'Use new stage/receipt paths')
        real_directory(args.stage.parent)
        args.stage.mkdir()
        for name, data in prepared.items():
            target = args.stage / name
            target.parent.mkdir(parents=True, exist_ok=True)
            write_new(target, data)
        require(hashes(tree(args.stage)) == receipt['prepared'], 'Staging readback mismatch')
        write_new(args.receipt, json_bytes(receipt))
        print(json.dumps({'files': len(prepared), 'diff': {k: len(v) for k, v in receipt['diff'].items()}, 'qa': receipt['qa']}))
        return
    receipt = json.loads(args.receipt.read_bytes())
    require(inventory == receipt['source'], 'Inventory/receipt mismatch')
    staged, current = tree(args.stage), tree(destination)
    require(hashes(staged) == receipt['prepared'] and hashes(current) == receipt['before'], 'Stage or destination changed; stop')
    require(receipt['diff'] == difference(receipt['before'], receipt['prepared']), 'Invalid change list')
    require(args.backup is not None and not args.backup.exists(), 'New backup directory required')
    real_directory(args.backup.parent)
    require(not args.backup.resolve().is_relative_to(destination), 'Backup cannot be inside destination')
    shutil.copytree(destination, args.backup)
    require(hashes(tree(args.backup)) == receipt['before'], 'Backup readback mismatch')
    # Exact, receipted file targets only. No recursive delete or rsync --delete.
    for name in receipt['diff']['added'] + receipt['diff']['changed']:
        target = destination / name
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(staged[name])
    for name in receipt['diff']['removed']:
        (destination / name).unlink()
    require(hashes(tree(destination)) == receipt['prepared'], 'Destination readback mismatch; preserved backup available')
    print(json.dumps({'applied': True, 'files': len(staged), 'recoverable_backup': str(args.backup)}))


if __name__ == '__main__':
    main()
