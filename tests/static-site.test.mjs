import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { createHash } from 'node:crypto';
import test from 'node:test';

const source = name => readFileSync(new URL(`../${name}`, import.meta.url), 'utf8');
const redirect = source('heartland-template/content/assets/js/lang-redirects.js');

test('language redirect has one destination for English, Portuguese, Spanish and missing locale', () => {
  for (const language of ['en', 'en-US', 'EN-us', 'pt-BR', 'es', 'fr', undefined]) {
    const calls = [];
    runInNewContext(redirect, { langs: ['en'], navigator: { language }, window: { location: {
      pathname: '/ig/workflow.html', search: '?view=example', hash: '#evidence', replace: x => calls.push(x),
    } } });
    assert.deepEqual(calls, ['en/workflow.html?view=example#evidence']);
  }
});

test('language redirect supports folder entry and safely ignores empty or unsafe language declarations', () => {
  for (const langs of [[], ['../outside'], ['https://example.org']]) {
    runInNewContext(redirect, { langs, navigator: {}, window: { location: { replace: () => assert.fail('unsafe redirect') } } });
  }
  let target;
  runInNewContext(redirect, { langs: ['en', 'es'], navigator: { language: 'es-MX' }, window: { location: {
    pathname: '/ig/', search: '', hash: '', replace: x => { target = x; },
  } } });
  assert.equal(target, 'es/index.html');
});

test('resource finder has local navigation without a third-party search iframe or mixed-content assets', () => {
  const finder = source('heartland-template/content/searchform.html');
  assert.doesNotMatch(finder, /<iframe|file:\/\/|https?:\/\/|\{\{url\}\}/);
  for (const page of ['index', 'artifacts', 'risk-assessment', 'implementation', 'workflow', 'background']) {
    assert(finder.includes(`href="${page}.html"`));
  }
  assert.match(finder, /does not send queries/);
});

test('authored guide does not present the automatic R4B conversion as an evaluated deliverable', () => {
  const home = source('input/pagecontent/index.md');
  assert.doesNotMatch(home, /include cross-version-analysis/);
  assert.match(home, /FHIR R4 4\.0\.1 only/);
  assert.match(home, /not evaluated deliverables/);
});

test('landing exposes candidate downloads and the short guide URL has a bounded redirect', () => {
  const page = source('site/app/page.tsx');
  for (const target of ['package.tgz', 'full-ig.zip', 'qa.html', 'searchform.html']) assert(page.includes(`/ig/${target}`));
  assert.match(page, /unresolved tooling annotations/);
  assert.match(source('site/next.config.ts'), /source: "\/ig", destination: "\/ig\/index\.html", permanent: false/);
});

if (process.env.FHIR_SITE_ORIGIN) test('integrated site serves every landing IG link and byte-identical candidate downloads', async () => {
  const origin = process.env.FHIR_SITE_ORIGIN;
  const landing = await fetch(new URL('/', origin));
  assert.equal(landing.status, 200);
  const html = await landing.text();
  const links = [...new Set([...html.matchAll(/href="(\/ig\/[^"?#]+)"/g)].map(m => m[1]))];
  assert(links.includes('/ig/package.tgz') && links.includes('/ig/full-ig.zip'));
  for (const link of links) {
    const response = await fetch(new URL(link, origin));
    assert.equal(response.status, 200, link);
    const body = Buffer.from(await response.arrayBuffer());
    const expected = readFileSync(new URL(`../site/public${link}`, import.meta.url));
    assert.equal(createHash('sha256').update(body).digest('hex'), createHash('sha256').update(expected).digest('hex'), link);
  }
  const short = await fetch(new URL('/ig?check=retained', origin), { redirect: 'manual' });
  assert.equal(short.status, 307);
  assert.equal(short.headers.get('location'), '/ig/index.html?check=retained');
  for (const removed of ['package.r4b.tgz', 'package-combined.tgz']) {
    assert.equal((await fetch(new URL(`/ig/${removed}`, origin))).status, 404);
  }
});
