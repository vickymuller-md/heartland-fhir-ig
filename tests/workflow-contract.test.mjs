import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('../', import.meta.url));
const canonical = 'https://fhir.heartlandprotocol.org';
const read = name => JSON.parse(readFileSync(join(root, 'fsh-generated/resources', `${name}.json`), 'utf8'));
const source = name => readFileSync(join(root, name), 'utf8');
const domains = ['Daily Weight', 'Medications', 'Warning Signs', 'Understanding Heart Failure', 'Sodium', 'Fluids', 'When to Call', 'Activity Guidance'];

// These are assertions about the bundled example, not constraints on all FHIR CarePlans.
function assertPlannedExample(plan) {
  assert.equal(plan.status, 'draft'); assert.equal(plan.intent, 'plan');
  assert.equal(plan.period, undefined); assert.equal(plan.author, undefined);
  assert.equal(plan.activity.length, 14);
  for (const activity of plan.activity) {
    assert.equal(activity.detail.status, 'not-started');
    assert.equal(activity.reference, undefined);
    assert.equal(activity.outcomeCodeableConcept, undefined);
    assert.equal(activity.outcomeReference, undefined);
    assert.equal(activity.progress, undefined);
    assert.equal(activity.detail.performer, undefined);
    assert(!Object.keys(activity.detail).some(key => key.startsWith('scheduled')));
  }
  for (const [n, name] of domains.entries()) assert(plan.activity[n + 6].detail.description.startsWith(`Education — ${name}:`), name);
  const text = JSON.stringify(plan);
  assert.match(text, /all eight domains.*every tier/i);
  assert.match(text, /self-assessment.*not.*professional teach-back/i);
  assert.match(text, /deferred.*not applicable.*reason.*authorized/i);
  assert.doesNotMatch(text, /within 14 days|1\.5-2 L|<=2 g|readmission reduction|superior to no therapy/i);
}

test('synthetic care plan is an unscheduled plan with eight educational domains at every tier', () => {
  const plan = read('CarePlan-CarePlanExampleTier2');
  assertPlannedExample(plan);
  assert.equal(plan.subject.reference, 'Patient/PatientExampleRural');
  assert.equal(plan.extension.find(e => e.url.endsWith('/heartland-facility-tier')).valueCodeableConcept.coding[0].code, 'tier-2-standard');
  assert.equal(plan.extension.find(e => e.url.endsWith('/heartland-monitoring-track-ext')).valueCodeableConcept.coding[0].code, 'analog-track-b');
});

test('example-specific safeguards reject completion, schedule, missing domain and universal restriction', () => {
  const changes = [p => { p.activity[0].detail.status = 'completed'; },
    p => { p.activity[1].detail.scheduledString = 'within 14 days'; },
    p => { p.activity.pop(); },
    p => { p.activity[10].detail.description += ' <=2 g/day'; },
    p => { p.activity[11].detail.description += ' 1.5-2 L'; },
    p => { p.activity[2].outcomeReference = [{ reference: 'Observation/fake' }]; }];
  for (const change of changes) {
    const plan = read('CarePlan-CarePlanExampleTier2'); change(plan);
    assert.throws(() => assertPlannedExample(plan));
  }
});

test('CarePlan retains optional inline detail and its existing cardinality contract', () => {
  const profile = read('StructureDefinition-heartland-careplan');
  assert.equal(profile.url, `${canonical}/StructureDefinition/heartland-careplan`);
  const e = profile.differential.element;
  assert.equal(e.find(x => x.path === 'CarePlan.activity').min, 1);
  assert(!e.some(x => x.path === 'CarePlan.activity.detail' && x.min > 0));
  // SUSHI omits constraints identical to the base; Publisher snapshot is checked below.
  assert.match(source('input/fsh/profiles/HeartlandCarePlan.fsh'), /^\* activity.detail.status 1\.\.1$/m);
  assert.equal(e.find(x => x.path === 'CarePlan.activity.detail.description').min, 1);
  assert.equal(e.find(x => x.path === 'CarePlan.activity.reference'), undefined);
});

test('facility and track codes retain identities without care exclusion or automatic selection', () => {
  const tier = read('CodeSystem-heartland-implementation-tier');
  const track = read('CodeSystem-heartland-monitoring-track');
  assert.equal(tier.url, `${canonical}/CodeSystem/heartland-implementation-tier`);
  assert.equal(track.url, `${canonical}/CodeSystem/heartland-monitoring-track`);
  assert.deepEqual(tier.concept.map(c => c.code), ['tier-1-minimal', 'tier-2-standard', 'tier-3-advanced']);
  assert.deepEqual(track.concept.map(c => c.code), ['digital-track-a', 'analog-track-b']);
  const text = JSON.stringify([tier, track, read('StructureDefinition-heartland-facility-tier'), read('StructureDefinition-heartland-monitoring-track-ext')]);
  assert.doesNotMatch(text, /condensed education|within 14 days|rapid-sequence|identical clinical algorithms|dictate which protocol components|Drives which protocol activities/i);
  assert.match(tier.description, /does not.*eligibility/i);
  assert.match(track.description, /does not.*outcomes/i);
});

test('capacity questionnaire preserves item identities and types without an assignment algorithm', () => {
  const q = read('Questionnaire-heartland-facility-tier-questionnaire');
  assert.equal(q.url, `${canonical}/Questionnaire/heartland-facility-tier-questionnaire`);
  assert.deepEqual(q.item.map(i => [i.linkId, i.type, i.required]), [
    ['staffing-level', 'choice', true], ['pharmd-available', 'boolean', true],
    ['chw-program', 'choice', true], ['monitoring-tech', 'choice', true], ['financial-navigation', 'choice', true],
  ]);
  assert.match(q.description, /does not.*assign/i);
  assert.deepEqual(q.item.map(i => i.answerOption?.map(a => a.valueString) ?? null), [
    ['RN/MA + MD', 'RN champion + PharmD', 'Multidisciplinary team (RN, PharmD, social worker, CHW)'], null,
    ['No CHW program documented', 'High-risk patients only', 'Full integration across all HF patients'],
    ['Analog only (telephone, paper diary)', 'Dual-track (analog and digital available based on patient)', 'Digital primary plus remote patient monitoring (RPM)'],
    ['Generic Bridge pathway only (low-cost generics)', 'Patient assistance program (PAP) pursuit plus Generic Bridge'],
  ]);
  assert.doesNotMatch(JSON.stringify(q), /predominance|qualitative scoring|rely on family|minimal\)|standard\)|advanced\)/i);
  for (const i of q.item) { assert.equal(i.initial, undefined); assert.equal(i.repeats, false); }
});

test('track questionnaire preserves three Boolean inputs without claiming to capture preference', () => {
  const q = read('Questionnaire-heartland-patient-track-questionnaire');
  assert.equal(q.url, `${canonical}/Questionnaire/heartland-patient-track-questionnaire`);
  assert.deepEqual(q.item.map(i => i.linkId), ['smartphone-connectivity', 'app-comfort', 'telephone-access']);
  assert.match(q.purpose, /preference.*separately/i);
  assert.doesNotMatch(JSON.stringify(q), /Hybrid|Decision logic|identical clinical algorithms/i);
  for (const i of q.item) {
    assert.equal(i.type, 'boolean'); assert.equal(i.required, true); assert.equal(i.repeats, false);
    assert.equal(i.initial, undefined); assert.equal(i.answerOption, undefined);
  }
});

function assertExampleLinks(resources) {
  const byRef = new Map(resources.map(r => [`${r.resourceType}/${r.id}`, r]));
  assert.equal(byRef.size, resources.length);
  const patient = 'Patient/PatientExampleRural';
  assert.equal(byRef.get(patient)?.resourceType, 'Patient');
  for (const r of resources.filter(r => r.resourceType !== 'Patient')) assert.equal(r.subject?.reference, patient);
  const risk = byRef.get('RiskAssessment/RiskAssessmentExampleHigh');
  assert.equal(risk.basis.length, 1);
  const qr = byRef.get(risk.basis[0].reference); assert.equal(qr?.resourceType, 'QuestionnaireResponse');
  const q = read('Questionnaire-heartland-risk-input-questionnaire');
  assert.equal(qr.questionnaire, `${q.url}|${q.version}`);
  const seen = new Set(); let total = 0;
  for (const item of qr.item) {
    assert(!seen.has(item.linkId)); seen.add(item.linkId);
    const definition = q.item.find(i => i.linkId === item.linkId); assert(definition);
    assert.equal(item.answer.length, 1); assert.equal(typeof item.answer[0].valueBoolean, 'boolean');
    const weight = definition.extension.find(e => e.url === `${canonical}/StructureDefinition/heartland-risk-true-points`).valueInteger;
    total += item.answer[0].valueBoolean ? weight : 0;
  }
  assert.equal(seen.size, q.item.length);
  assert.equal(total, 11);
  assert.equal(risk.prediction.length, 1);
  assert.equal(risk.prediction[0].extension.find(e => e.url.endsWith('/heartland-risk-score-total')).valueInteger, total);
  assert.equal(risk.prediction[0].qualitativeRisk.coding[0].code, 'high');
  assert.equal(risk.prediction[0].qualitativeRisk.coding[0].system, `${canonical}/CodeSystem/heartland-risk-tier`);
}
const examples = () => ['Patient-PatientExampleRural', 'CarePlan-CarePlanExampleTier2', 'Observation-ObservationExampleWeightRedFlag',
  'RiskAssessment-RiskAssessmentExampleHigh', 'QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs'].map(read);
test('all five examples share the synthetic subject and linked risk inputs actually total 11', () => assertExampleLinks(examples()));
test('cross-example checks reject foreign subject, missing basis, wrong total and duplicate item', () => {
  for (const change of [r => { r[1].subject.reference = 'Patient/foreign'; }, r => { r[3].basis[0].reference = 'QuestionnaireResponse/missing'; },
    r => { r[3].prediction[0].extension[0].valueInteger = 12; }, r => { r[4].item[1].linkId = r[4].item[0].linkId; }]) {
    const resources = examples(); change(resources); assert.throws(() => assertExampleLinks(resources));
  }
});

test('workflow map is discoverable and expressly not an operational exporter or new profile', () => {
  const narrative = source('input/pagecontent/workflow.md');
  assert.match(narrative, /Design mapping, not an implemented workflow exporter/);
  for (const resource of ['Task', 'ServiceRequest', 'Communication', 'Provenance', 'AuditEvent']) assert(narrative.includes(resource));
  for (const boundary of ['close_without_completion', 'Post-closure', 'same-patient', 'same-organization', 'precision', 'lossless']) assert(narrative.includes(boundary));
  assert.match(source('sushi-config.yaml'), /workflow\.md:/);
  assert.match(source('input/pagecontent/index.md'), /\(workflow\.html\)/);
  assert.match(source('input/pagecontent/implementation.md'), /\(workflow\.html\)/);
  assert.match(source('site/app/page.tsx'), /\/ig\/workflow\.html/);
});

if (process.env.FHIR_IG_OUTPUT) test('rendered guide contains the new mapping and revised eight-domain plan', () => {
  const output = process.env.FHIR_IG_OUTPUT;
  const map = readFileSync(join(output, 'en/workflow.html'), 'utf8');
  assert.match(map, /Design mapping, not an implemented workflow exporter/);
  assert.match(map, /Never map every closed item to Task.completed/);
  assert.equal([...map.matchAll(/<table\b/g)].length, 2, 'mapping tables must render, not remain raw markdown');
  assert.doesNotMatch(map, /\|-\|-\|-\|/);
  const implementation = readFileSync(join(output, 'en/implementation.html'), 'utf8');
  assert.equal([...implementation.matchAll(/<table\b/g)].length, 2, 'answer changes and observation codes');
  assert.doesNotMatch(implementation, /\|-\|-\|-\|/);
  const care = JSON.parse(readFileSync(join(output, 'CarePlan-CarePlanExampleTier2.json'), 'utf8'));
  assertPlannedExample(care);
  const profile = JSON.parse(readFileSync(join(output, 'StructureDefinition-heartland-careplan.json'), 'utf8'));
  const elements = profile.snapshot.element;
  assert.equal(elements.find(e => e.path === 'CarePlan.activity.detail').min, 0);
  assert.equal(elements.find(e => e.path === 'CarePlan.activity.detail.status').min, 1);
  const activity = elements.find(e => e.path === 'CarePlan.activity');
  assert.equal(activity.constraint.find(c => c.key === 'cpl-3').expression, 'detail.empty() or reference.empty()');
});
