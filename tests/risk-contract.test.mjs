import assert from 'node:assert/strict';
import { readFileSync, readdirSync, mkdirSync, writeFileSync, statSync } from 'node:fs';
import { resolve, join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const generated = join(root, 'fsh-generated/resources');
const canonical = 'https://fhir.heartlandprotocol.org';
const weights = { 'age-75': 2, 'hf-hosp-6mo': 3, 'egfr-low': 2, 'natriuretic-high': 2, 'sbp-low': 2, diabetes: 1, 'lvef-low': 2, 'ckm-stage': 2, 'distance-far': 1, 'social-support': 1 };
const read = (name) => JSON.parse(readFileSync(join(generated, `${name}.json`), 'utf8'));
const structure = (id) => read(`StructureDefinition-${id}`).differential.element;
const questionnaire = () => read('Questionnaire-heartland-risk-input-questionnaire');
const response = () => read('QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs');
const pointsUrl = `${canonical}/StructureDefinition/heartland-risk-true-points`;
const countyUrl = `${canonical}/StructureDefinition/heartland-synthetic-county-code`;
const profileUrl = `${canonical}/StructureDefinition/heartland-risk-input-response`;

if (!['--fixtures', '--results', '--parity', '--package-results'].some(flag => process.argv.includes(flag))) {
  test('all 26 conformance resources share the draft experimental candidate version', () => {
    const resources = readdirSync(generated).filter(n => /^(StructureDefinition|Questionnaire-|CodeSystem|ValueSet)/.test(n)).map(n => JSON.parse(readFileSync(join(generated, n))));
    assert.equal(resources.length, 26);
    for (const r of resources) { assert.equal(r.version, '0.3.0', r.id); assert.equal(r.status, 'draft', r.id); assert.equal(r.experimental, true, r.id); }
  });
  test('ten required non-repeating Boolean items carry exact true weights and no default', () => {
    const q = questionnaire();
    assert.equal(q.item.length, 10);
    assert.deepEqual(q.item.map(i => i.linkId).sort(), Object.keys(weights).sort());
    for (const i of q.item) {
      assert.equal(i.type, 'boolean'); assert.equal(i.required, true); assert.equal(i.repeats, false);
      assert.equal(i.initial, undefined); assert.equal(i.answerOption, undefined);
      assert.deepEqual(i.extension.filter(e => e.url === pointsUrl), [{ url: pointsUrl, valueInteger: weights[i.linkId] }]);
    }
  });
  test('weight extension has bounded integer and Boolean item context', () => {
    const d = read('StructureDefinition-heartland-risk-true-points');
    assert.deepEqual(d.context, [{ type: 'element', expression: 'Questionnaire.item' }]);
    assert.deepEqual(d.contextInvariant, ["type = 'boolean'", `extension.where(url = '${pointsUrl}').count() = 1`]);
    const elements = d.differential.element;
    assert.equal(elements.find(e => e.id === 'Extension').max, '1');
    const v = elements.find(e => e.path === 'Extension.value[x]');
    assert.deepEqual(v.type, [{ code: 'integer' }]); assert.equal(v.min, 1);
    assert.equal(v.minValueInteger, 1); assert.equal(v.maxValueInteger, 3);
  });
  test('county extension is a required coded synthetic identifier, never a geographic assertion', () => {
    const d = read('StructureDefinition-heartland-synthetic-county-code');
    assert.deepEqual(d.context, [{ type: 'element', expression: 'Patient.address' }]);
    assert.deepEqual(d.contextInvariant, [`extension.where(url = '${countyUrl}').count() = 1`]);
    const e = d.differential.element;
    assert.equal(e.find(i => i.path === 'Extension.value[x].system').fixedUri, `${canonical}/sid/synthetic-county-code`);
    assert.equal(e.find(i => i.path === 'Extension.value[x].code').min, 1);
    assert.equal(e.find(i => i.id === 'Extension').max, '1');
  });
  test('specialized response closes slices, nesting, multiplicity and primitive missingness', () => {
    const e = structure('heartland-risk-input-response');
    const item = e.find(i => i.id === 'QuestionnaireResponse.item');
    assert.equal(item.min, 10); assert.equal(item.max, '10'); assert.equal(item.slicing.rules, 'closed');
    assert.equal(item.slicing.ordered, true);
    assert.deepEqual(e.filter(i => i.path === 'QuestionnaireResponse.item.linkId').map(i => i.fixedString).filter(Boolean).sort(), Object.keys(weights).sort());
    assert.equal(e.filter(i => i.sliceName).length, 10);
    for (const i of e.filter(i => i.sliceName)) { assert.equal(i.min, 1); assert.equal(i.max, '1'); }
    assert.equal(e.find(i => i.id === 'QuestionnaireResponse.item.item').max, '0');
    assert.equal(e.find(i => i.id === 'QuestionnaireResponse.item.answer.item').max, '0');
    assert.equal(e.find(i => i.id === 'QuestionnaireResponse.item.answer').min, 1);
    assert.equal(e.find(i => i.id === 'QuestionnaireResponse.item.answer').max, '1');
    assert(item.constraint.some(c => c.expression === 'answer.value.hasValue()'));
    assert(e[0].constraint.some(c => c.expression === "status = 'completed' or status = 'amended'"));
  });
  test('worked example is 11 points with CKM, exact canonical version and specialized profile', () => {
    const q = response(); assert(q.meta.profile.includes(profileUrl));
    assert.equal(q.questionnaire, `${questionnaire().url}|0.3.0`);
    assert.equal(q.item.reduce((sum, i) => sum + (i.answer[0].valueBoolean ? weights[i.linkId] : 0), 0), 11);
    assert.equal(q.item.find(i => i.linkId === 'egfr-low').answer[0].valueBoolean, false);
    assert.equal(q.item.find(i => i.linkId === 'ckm-stage').answer[0].valueBoolean, true);
  });
  test('risk probability remains prohibited and historical method stays compatible', () => {
    const e = structure('heartland-risk-assessment');
    assert.equal(e.find(i => i.path === 'RiskAssessment.prediction.probability[x]').max, '0');
    assert.equal(e.find(i => i.path === 'RiskAssessment.method.text').patternString, 'HEARTLAND Protocol v3.2 Risk Score');
  });
  test('weight example does not compare body mass with a rate reference range', () => {
    const o = read('Observation-ObservationExampleWeightRedFlag');
    assert.equal(o.valueQuantity.code, 'kg'); assert.equal(o.referenceRange, undefined);
    assert.match(o.note[0].text, /does not establish/i);
  });
  test('monitoring terminology uses diastolic 8462-4, not one-hour maximum systolic 8481-4', () => {
    const codes = read('ValueSet-heartland-monitoring-observation-code-vs').compose.include.find(i => i.system === 'http://loinc.org').concept;
    assert.equal(codes.find(c => c.display === 'Diastolic blood pressure').code, '8462-4');
    assert(!codes.some(c => c.code === '8481-4'));
  });
  test('public source and optional rendered landing page keep candidate and evidence boundaries', () => {
    const paths = ['README.md', 'site/app/page.tsx', 'site/app/layout.tsx', ...['index', 'background', 'risk-assessment', 'implementation', 'workflow'].map(n => `input/pagecontent/${n}.md`)];
    if (process.env.FHIR_SITE_HTML) paths.push(process.env.FHIR_SITE_HTML);
    for (const name of paths) {
      const text = readFileSync(resolve(root, name), 'utf8');
      assert.doesNotMatch(text, /any US EHR|FDA-cleared|HIPAA-certified|not a medical device|zero critical errors|equivalent clinical benefit|Clinical Decision Support/i, name);
    }
    const page = readFileSync(join(root, 'site/app/page.tsx'), 'utf8');
    assert.match(page, /0\.3\.0/); assert.doesNotMatch(page, /0\.2\.0/);
    assert.match(page, /candidate not archived/); assert.match(page, /weighted criteria/);
  });
  test('guide pins the replacement template rather than the retired base template', () => {
    const ini = readFileSync(join(root, 'ig.ini'), 'utf8');
    assert.match(ini, /^template = #heartland-template$/m);
    const template = JSON.parse(readFileSync(join(root, 'heartland-template/package/package.json'), 'utf8'));
    assert.equal(template.base, 'fhir2.base.template');
    assert.deepEqual(template.dependencies, { 'fhir2.base.template': '0.1.0' });
    const fragment = readFileSync(join(root, 'heartland-template/includes/fragment-pagebegin.html'), 'utf8');
    assert.match(fragment, /src="\.\.\/assets\/images\/{{jurisdiction\.flag}}\.svg"/);
    assert.doesNotMatch(fragment, /src="assets\/images\/{{jurisdiction\.flag}}\.svg"/);
    const upstream = fragment.replace('src="../assets/images/{{jurisdiction.flag}}.svg"', 'src="assets/images/{{jurisdiction.flag}}.svg"');
    assert.equal(createHash('sha256').update(upstream).digest('hex'), '431379c0d2dabaa855c2d57f051b08e9f0d00cb23bdf70447845bf63170996f9');
    assert.doesNotMatch(ini, /^template = fhir\.base\.template/m);
  });
  if (process.env.FHIR_IG_OUTPUT) test('generated guide has no errors or broken links and every jurisdiction flag resolves', () => {
    const output = resolve(process.env.FHIR_IG_OUTPUT);
    const qa = JSON.parse(readFileSync(join(output, 'qa.json'), 'utf8'));
    assert.equal(qa.errs, 0);
    assert.equal(qa['ig-ver'], '0.3.0');
    assert.match(readFileSync(join(output, 'qa.html'), 'utf8'), /<!-- broken links = 0, errors = 0,/);
    let flags = 0;
    for (const name of readdirSync(output, { recursive: true }).filter(n => n.endsWith('.html') && !basename(n).startsWith('qa'))) {
      const file = join(output, name);
      for (const tag of readFileSync(file, 'utf8').matchAll(/<img\b[^>]*\bsrc="([^"]*\/usa\.svg)"[^>]*>/g)) {
        assert.equal(name.split('/').length, 2, `unsupported language depth: ${name}`);
        assert.equal(tag[1], '../assets/images/usa.svg', name);
        assert(statSync(resolve(dirname(file), tag[1])).isFile(), name);
        flags++;
      }
    }
    assert(flags >= 219, `expected all generated flag images; found ${flags}`);
    const ig = JSON.parse(readFileSync(join(output, 'ImplementationGuide-heartland.fhir.us.protocol.json'), 'utf8'));
    const nativeCodes = new Set(['apply', 'path-resource', 'path-pages', 'path-tx-cache', 'expansion-parameter', 'rule-broken-links', 'generate-xml', 'generate-json', 'generate-turtle', 'html-template']);
    assert(ig.definition.parameter.every(p => nativeCodes.has(p.code)));
    assert(ig.definition.extension.some(e => e.url === 'http://hl7.org/fhir/tools/StructureDefinition/ig-parameter'));
    const riskPage = readFileSync(join(output, 'en/risk-assessment.html'), 'utf8');
    assert.equal([...riskPage.matchAll(/<table\b/g)].length, 2, 'only input weights and tier cutoffs are tables');
    assert.match(riskPage, /Local Development build/);
    assert.doesNotMatch(riskPage, /Compilação de desenvolvimento local/);
  });
} else if (process.argv.includes('--fixtures')) {
  // Exclusive evidence directory: never overwrite a previous run or source files.
  const target = resolve(process.argv[process.argv.indexOf('--fixtures') + 1]);
  mkdirSync(target, { recursive: false });
  const manifest = [];
  const add = (id, base, change, valid) => {
    const r = structuredClone(base); r.id = id; change(r);
    writeFileSync(join(target, `${id}.json`), JSON.stringify(r, null, 2) + '\n', { flag: 'wx' });
    manifest.push({ id, valid });
  };
  const qr = response();
  add('qr-eleven', qr, () => {}, true);
  add('qr-all-false', qr, r => r.item.forEach(i => i.answer[0].valueBoolean = false), true);
  add('qr-all-true', qr, r => r.item.forEach(i => i.answer[0].valueBoolean = true), true);
  add('qr-permuted', qr, r => r.item.reverse(), false);
  add('qr-amended', qr, r => r.status = 'amended', true);
  add('qr-missing-item', qr, r => r.item.pop(), false);
  add('qr-duplicate-link', qr, r => r.item[9].linkId = r.item[0].linkId, false);
  add('qr-unknown-link', qr, r => r.item[9].linkId = 'unknown', false);
  add('qr-missing-answer', qr, r => delete r.item[0].answer, false);
  add('qr-multiple-answer', qr, r => r.item[0].answer.push({ valueBoolean: false }), false);
  add('qr-wrong-type', qr, r => r.item[0].answer = [{ valueString: 'false' }], false);
  add('qr-absent-value', qr, r => r.item[0].answer = [{ _valueBoolean: { extension: [{ url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason', valueCode: 'unknown' }] } }], false);
  add('qr-nested-item', qr, r => r.item[0].item = [{ linkId: 'nested', answer: [{ valueBoolean: true }] }], false);
  add('qr-nested-answer', qr, r => r.item[0].answer[0].item = [{ linkId: 'nested', answer: [{ valueBoolean: true }] }], false);
  for (const status of ['in-progress', 'stopped', 'entered-in-error']) add(`qr-${status}`, qr, r => r.status = status, false);
  add('qr-old-version', qr, r => r.questionnaire = r.questionnaire.replace('|0.3.0', '|0.2.0'), false);
  const q = questionnaire();
  for (const w of [0, 1, 3, 4]) add(`weight-${w}`, q, r => r.item[0].extension = [{ url: pointsUrl, valueInteger: w }], w >= 1 && w <= 3);
  add('weight-wrong-type', q, r => r.item[0].extension = [{ url: pointsUrl, valueString: '2' }], false);
  add('weight-absent-value', q, r => r.item[0].extension = [{ url: pointsUrl, _valueInteger: { extension: [{ url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason', valueCode: 'unknown' }] } }], false);
  add('weight-duplicate', q, r => r.item[0].extension.push(structuredClone(r.item[0].extension[0])), false);
  add('weight-wrong-context', q, r => r.item[0].type = 'string', false);
  const p = read('Patient-PatientExampleRural');
  add('county-valid', p, () => {}, true);
  add('county-unprofiled', p, r => delete r.meta, true);
  if (process.argv.includes('--synthetic-patient')) {
    const actual = JSON.parse(readFileSync(process.argv[process.argv.indexOf('--synthetic-patient') + 1], 'utf8'));
    assert.equal(actual.resourceType, 'Patient'); assert.equal(actual.meta?.profile, undefined);
    const code = actual.address[0].extension.find(e => e.url === countyUrl).valueCoding;
    assert.equal(code.system, `${canonical}/sid/synthetic-county-code`); assert.equal(typeof code.code, 'string');
    add('county-exported-patient', actual, () => {}, true);
  }
  add('county-duplicate-unprofiled', p, r => { delete r.meta; r.address[0].extension.push(structuredClone(r.address[0].extension[0])); }, false);
  for (const key of ['system', 'code']) add(`county-missing-${key}`, p, r => delete r.address[0].extension.find(e => e.url === countyUrl).valueCoding[key], false);
  add('county-wrong-system', p, r => r.address[0].extension.find(e => e.url === countyUrl).valueCoding.system = 'https://example.org/real-fips', false);
  add('county-absent-code', p, r => {
    const c = r.address[0].extension.find(e => e.url === countyUrl).valueCoding;
    delete c.code; c._code = { extension: [{ url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason', valueCode: 'unknown' }] };
  }, false);
  const ra = read('RiskAssessment-RiskAssessmentExampleHigh');
  add('risk-valid', ra, () => {}, true);
  add('risk-probability', ra, r => r.prediction[0].probabilityDecimal = 0.11, false);
  writeFileSync(join(target, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
  console.log(JSON.stringify({ target, cases: manifest.length, positive: manifest.filter(c => c.valid).length, negative: manifest.filter(c => !c.valid).length }));
} else if (process.argv.includes('--parity')) {
  const directory = resolve(process.argv[process.argv.indexOf('--parity') + 1]);
  const sha = p => createHash('sha256').update(readFileSync(p)).digest('hex');
  const proof = JSON.parse(readFileSync(join(directory, 'completion.json')));
  assert.equal(proof.all_ok, true); assert.equal(proof.combinations, 1024);
  for (const [p, hash] of Object.entries(proof.hashes)) assert.equal(sha(resolve(root, '..', p)), hash, `changed port source: ${p}`);
  for (const [p, hash] of Object.entries(proof.evidence_hashes)) assert.equal(sha(join(directory, p)), hash, `changed evidence: ${p}`);
  const fixtures = JSON.parse(readFileSync(join(directory, 'fixtures.json'))).fixtures;
  const results = JSON.parse(readFileSync(join(directory, 'results.json')));
  const mapping = { 'age-75': 'ageOver75', 'hf-hosp-6mo': 'priorHfHospitalization', 'egfr-low': 'egfrBelow45', 'natriuretic-high': 'elevatedNatriuretic', 'sbp-low': 'sbpBelow100', diabetes: 'diabetes', 'lvef-low': 'lvefBelow30', 'ckm-stage': 'ckmStage3or4', 'distance-far': 'distanceOver50Miles', 'social-support': 'livesAloneOrLimitedSupport' };
  const q = questionnaire(); assert.equal(q.item.length, 10);
  assert.equal(fixtures.length, 1024); assert.equal(results.length, 1024);
  assert.equal(new Set(fixtures.map(f => f.mask)).size, 1024);
  for (const [i, f] of fixtures.entries()) {
    assert.equal(f.mask, i); assert.equal(results[i].mask, i);
    const total = q.item.reduce((sum, item) => {
      const value = f.input[mapping[item.linkId]]; assert.equal(typeof value, 'boolean');
      const extensions = item.extension.filter(e => e.url === pointsUrl); assert.equal(extensions.length, 1);
      return sum + (value ? extensions[0].valueInteger : 0);
    }, 0);
    const actual = { total, tier: total <= 4 ? 'low' : total <= 8 ? 'moderate' : 'high' };
    for (const port of ['app', 'scoring', 'synthetic']) assert.deepEqual(actual, results[i][port], `${port} differs at ${i}`);
  }
  console.log(JSON.stringify({ all_ok: true, combinations: 1024, prior_evidence: directory,
    questionnaire_sha256: sha(join(generated, 'Questionnaire-heartland-risk-input-questionnaire.json')),
    source_hashes_rechecked: Object.keys(proof.hashes).length, clinical_validation: false,
    missing_data_policy_validated: false, essi_equivalence: false, dataset_regenerated: false }, null, 2));
} else if (process.argv.includes('--package-results')) {
  // Classify known Publisher metadata diagnostics; never suppress or relabel them as valid.
  const at = process.argv.indexOf('--package-results');
  const directory = resolve(process.argv[at + 1]);
  const resultPath = resolve(process.argv[at + 2]);
  const output = resolve(process.argv[at + 3]);
  const results = JSON.parse(readFileSync(resultPath, 'utf8'));
  const resources = new Map();
  const hashes = {};
  const sha = file => createHash('sha256').update(readFileSync(file)).digest('hex');
  for (const name of readdirSync(directory, { recursive: true }).filter(n => n.endsWith('.json'))) {
    const file = resolve(directory, name);
    const r = JSON.parse(readFileSync(file, 'utf8'));
    if (name === 'other/validation-oo.json') { assert.equal(r.resourceType, 'Bundle'); continue; }
    if (!r.resourceType) continue;
    const key = `${r.resourceType}/${r.id}`;
    assert(!resources.has(key), `duplicate resource: ${key}`);
    resources.set(key, { file, resource: r }); hashes[name] = sha(file);
  }
  assert.equal(resources.size, 32);
  const igKey = 'ImplementationGuide/heartland.fhir.us.protocol';
  const ig = resources.get(igKey).resource;
  const infoUrl = 'http://hl7.org/fhir/tools/StructureDefinition/resource-information';
  const pageUrl = 'http://hl7.org/fhir/StructureDefinition/implementationguide-page';
  const classify = (manifest, bundle) => {
    assert.equal(manifest.version, '0.3.0');
    assert.equal(manifest.definition.resource.length, 31);
    const expected = new Map();
    const refs = new Set();
    for (const [i, r] of manifest.definition.resource.entries()) {
      const ref = r.reference.reference;
      assert(ref !== igKey && resources.has(ref) && !refs.has(ref), `invalid reference: ${ref}`);
      refs.add(ref);
      const target = resources.get(ref).resource;
      const info = target.resourceType === 'StructureDefinition' ? `StructureDefinition:${target.type === 'Extension' ? 'extension' : target.kind}` : target.resourceType;
      const page = ref.replace('/', '-') + '.html';
      assert.deepEqual(r.extension, [{ url: infoUrl, valueString: info }, { url: pageUrl, valueUri: page }]);
      assert(statSync(join(output, 'en', page)).isFile());
      const prefix = `ImplementationGuide.definition.resource[${i}].extension`;
      expected.set(`${prefix}[0].url`, ['Type_Specific_Checks_DT_URL_Resolve', `No definition could be found for URL value '${infoUrl}'`]);
      expected.set(`${prefix}[1]`, ['Extension_EXT_Unknown_NotHere', `The extension ${pageUrl} could not be found so is not allowed here`]);
      expected.set(`${prefix}[1].url`, ['Type_Specific_Checks_DT_URL_Resolve', `No definition could be found for URL value '${pageUrl}'`]);
    }
    assert.equal(bundle.resourceType, 'Bundle'); assert.equal(bundle.entry.length, 32);
    const byFile = new Map([...resources.values()].map(r => [r.file, r.resource]));
    const seen = new Set(); let diagnostics = 0; let content = 0;
    for (const { resource: r } of bundle.entry) {
      assert.equal(r.resourceType, 'OperationOutcome');
      const file = r.extension.find(e => e.url === 'http://hl7.org/fhir/StructureDefinition/operationoutcome-file')?.valueString;
      assert(byFile.has(file) && !seen.has(file), `missing, duplicate or foreign outcome: ${file}`); seen.add(file);
      const errors = (r.issue ?? []).filter(i => ['error', 'fatal'].includes(i.severity));
      if (file !== resources.get(igKey).file) { assert.equal(errors.length, 0, file); content++; continue; }
      assert.equal(errors.length, 93);
      for (const issue of errors) {
        assert.equal(issue.severity, 'error'); assert.equal(issue.expression.length, 1);
        const path = issue.expression[0], match = expected.get(path); assert(match, `unexpected diagnostic: ${path}`);
        const id = issue.extension.find(e => e.url === 'http://hl7.org/fhir/StructureDefinition/operationoutcome-message-id')?.valueCode;
        assert.deepEqual([id, issue.details?.text], match); expected.delete(path); diagnostics++;
      }
    }
    assert.equal(expected.size, 0); assert.equal(content, 31);
    return { content_resources_without_errors: content, manifest_known_diagnostics: diagnostics, manifest_validated_without_errors: false };
  };
  const classification = classify(ig, results);
  const urlChanged = structuredClone(ig); urlChanged.definition.resource[0].extension[0].url += '-unknown';
  assert.throws(() => classify(urlChanged, results));
  const valueChanged = structuredClone(ig); valueChanged.definition.resource[0].extension[1].valueUri = '../missing.html';
  assert.throws(() => classify(valueChanged, results));
  const extraError = structuredClone(results);
  const clinicalOutcome = extraError.entry.find(e => e.resource.extension[0].valueString !== resources.get(igKey).file);
  clinicalOutcome.resource.issue.push({ severity: 'error', details: { text: 'Clinical content failure must not be accepted' } });
  assert.throws(() => classify(ig, extraError));
  const changedMessage = structuredClone(results);
  changedMessage.entry.find(e => e.resource.issue.some(i => i.severity === 'error')).resource.issue.find(i => i.severity === 'error').details.text += '-unknown';
  assert.throws(() => classify(ig, changedMessage));
  console.log(JSON.stringify({ ...classification, negative_classifier_checks: 4, no_suppression: true,
    result_sha256: sha(resultPath), resource_hashes: hashes }, null, 2));
} else {
  const at = process.argv.indexOf('--results');
  const manifest = JSON.parse(readFileSync(process.argv[at + 1], 'utf8'));
  const result = JSON.parse(readFileSync(process.argv[at + 2], 'utf8'));
  assert.equal(result.resourceType, 'Bundle');
  const outcomes = new Map();
  for (const { resource: r } of result.entry) {
    assert.equal(r.resourceType, 'OperationOutcome');
    const file = r.extension.find(e => e.url.endsWith('/operationoutcome-file')).valueString;
    const id = basename(file, '.json'); assert(!outcomes.has(id), `duplicate result: ${id}`);
    outcomes.set(id, r.issue ?? []);
  }
  assert.equal(outcomes.size, manifest.length, 'missing or unexpected result');
  const evidence = [];
  const expected = {
    'qr-absent-value': 'heartland-risk-value', 'weight-absent-value': 'heartland-points-value',
    'county-absent-code': 'heartland-county-value', 'weight-duplicate': 'Profile_EXT_Not_Here',
    'weight-wrong-context': 'Profile_EXT_Not_Here', 'weight-0': 'Type_Specific_Checks_DT_Integer_LT',
    'county-duplicate-unprofiled': 'Profile_EXT_Not_Here',
    'weight-4': 'Type_Specific_Checks_DT_Integer_GT', 'qr-permuted': 'Questionnaire_QR_Item_Order',
    'qr-in-progress': 'heartland-risk-complete', 'qr-stopped': 'heartland-risk-complete',
    'qr-entered-in-error': 'heartland-risk-complete', 'qr-old-version': '_DT_Fixed_Wrong',
    'county-wrong-system': '_DT_Fixed_Wrong', 'risk-probability': 'Validation_VAL_Profile_Maximum',
    'qr-missing-item': 'Validation_VAL_Profile_Minimum', 'qr-duplicate-link': 'Validation_VAL_Profile_Maximum',
    'qr-unknown-link': 'Validation_VAL_Profile_NotSlice', 'qr-missing-answer': 'Validation_VAL_Profile_Minimum',
    'qr-multiple-answer': 'Validation_VAL_Profile_Maximum', 'qr-wrong-type': 'Extension_PROF_Type',
    'qr-nested-item': 'Validation_VAL_Profile_Maximum', 'qr-nested-answer': 'Validation_VAL_Profile_Maximum',
    'weight-wrong-type': 'Extension_EXT_Type', 'county-missing-system': 'Validation_VAL_Profile_Minimum',
    'county-missing-code': 'Validation_VAL_Profile_Minimum',
  };
  for (const c of manifest) {
    const issues = outcomes.get(c.id); assert(issues, `missing ${c.id}`);
    const errors = issues.filter(i => ['error', 'fatal'].includes(i.severity));
    const ids = errors.flatMap(i => i.extension?.filter(e => e.url.endsWith('/operationoutcome-message-id')).map(e => e.valueCode) ?? []);
    assert.equal(errors.length === 0, c.valid, `${c.id}: ${JSON.stringify(errors)}`);
    if (!c.valid) { assert(expected[c.id], `missing expected failure: ${c.id}`); assert(ids.some(id => id.includes(expected[c.id])), `${c.id}: wrong failure ${ids}`); }
    evidence.push({ ...c, errors: errors.length, warnings: issues.filter(i => i.severity === 'warning').length, errorIds: ids });
  }
  console.log(JSON.stringify({ passed: evidence.length, cases: evidence }, null, 2));
}
