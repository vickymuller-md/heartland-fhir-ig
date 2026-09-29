# Workflow Mapping - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* **Workflow Mapping**

## Workflow Mapping

### Workflow Mapping and Evidence Boundaries

**Design mapping, not an implemented workflow exporter.** Candidate 0.3.0 selects the R4 resource families below and aligns the illustrative CarePlan with the Toolkit V3.4 candidate. It does not add Task, ServiceRequest, Communication or Provenance profiles, a FHIR server, an order interface, or a lossless exchange of the app's operational journal.

The current app collection export contains Patient, vital-sign and effective laboratory Observations, and MedicationStatements. It does not export the operational resources discussed here. A local implementation or test is not evidence of hosted activation, clinical adoption or external interoperability.

#### Resource decisions

| | | |
| :--- | :--- | :--- |
| Planned activities | Existing[HeartlandCarePlan](StructureDefinition-heartland-careplan.md) | A plan is not an event, prescription or evidence of completion. Use either inline activity detail or an activity reference, not both on one activity. |
| Recorded laboratory or referral request | ServiceRequest, when the underlying request and its intent are evidenced | Recording a follow-up need does not establish an authorized order, ordering clinician, destination acceptance or transmission. |
| Coordination of a followed need | Task, linked to the relevant request or evidence | Operational stage, responsibility, exceptions and closure outcome are distinct dimensions; there is no direct app-status-to-Task-status conversion in this release. |
| An analyte result | Observation with actual collection time, units, source and missingness | Receipt, automated evaluation and clinical review are separate. The existing generic exporter does not claim a laboratory profile. |
| A source laboratory report | DiagnosticReport only when report identity, contents and status are known | An app grouping of results is not automatically a laboratory-issued report. Do not invent a final report from saved values. |
| Documented information exchange or failed attempt | Communication, with the evidenced participants, medium, outcome and times | This represents the communication record, not a messaging service or a patient's understanding. A planned request to communicate belongs to CommunicationRequest. |
| Resource creation or revision lineage | Provenance targeting the exact exported resource or version | It records the origin of a representation. It does not by itself certify a clinician's decision or provide a clinical-review payload. |
| Access and system processing audit | AuditEvent, separately governed | A read, delivery callback or acknowledgement is not clinical review or successful follow-up. |

These decisions use the base [R4 CarePlan](https://hl7.org/fhir/R4/careplan.html), [Task](https://hl7.org/fhir/R4/task.html), [ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html), [Observation](https://hl7.org/fhir/R4/observation.html), [DiagnosticReport](https://hl7.org/fhir/R4/diagnosticreport.html), [Communication](https://hl7.org/fhir/R4/communication.html), [CommunicationRequest](https://hl7.org/fhir/R4/communicationrequest.html), [Provenance](https://hl7.org/fhir/R4/provenance.html) and [AuditEvent](https://hl7.org/fhir/R4/auditevent.html) definitions. No R5 element or automatic US Core upgrade is introduced.

#### Request and ownership are different facts

The app's request contract records `laboratory_order`, `referral` or `medication_access`, declared source, purpose, evidence, occurrence and next review time. Its receipt explicitly leaves external transmission and acceptance unconfirmed. The label `laboratory_order` is not sufficient to generate `ServiceRequest.intent = order`: the named ordering professional, actual authorization, request identity and intended service need their own evidence. A medication-access follow-up is not a MedicationRequest or proof of dispensing.

For a future exporter, preserve an external request's identity separately from the app work identifier and command identifier. One ServiceRequest describes one service: an analyte set must not be turned into an invented panel code. Represent distinct services separately, or use an evidenced panel definition, with explicit grouping where appropriate. Do not substitute the recorder's identity for the requester. Unknown request status must not become active or completed simply because a record was saved.

The work record holds organization, patient, current assignee, acceptance, pending transfer and an ownership revision. The clinical-workflow revision is a different sequence. A transfer offer does not discharge the current accepted owner. An app profile identifier is not independently verified professional licensure, and it must not be expanded into invented Practitioner or PractitionerRole credentials.

#### Stages, exceptions and closure

| | | |
| :--- | :--- | :--- |
| `requested`,`scheduled`,`collected`,`result_received` | Laboratory coordination stage, with dated evidence | Scheduled does not mean collected; a received result does not mean reviewed. |
| Referral`accepted`,`attended`,`report_received` | Destination acceptance, attendance and report receipt are separate | Destination acceptance is not the work owner's acceptance or a completed consultation. |
| `assistance_requested`,`response_received`,`obtained` | Assistance steps and the declared evidence of medication acquisition | Program approval is not medication obtained, adherence or therapeutic equivalence. |
| `record_review` | Named authorized actor, decision, limitations and exact evidence basis | Queue acknowledgement is not review; a newer source can make an earlier basis stale. |
| `record_contact` | Declared recipient, route, occurrence, outcome and optional exact reviewed decision | A reached person alone does not establish that a particular decision was addressed or understood. |
| `close_success` | Explicit documented workflow-completion attestation with its current review/contact basis | Not independently established patient outcome, treatment success or comprehension. |
| `close_without_completion` | Explicit non-success disposition, reason and outstanding obligations | Never map every closed item to Task.completed. Transfer disposition is not proof of accepted handoff. |
| Post-closure source change and routing | New linked follow-up need; unchanged prior closure and historical evidence | Routing is not review, clinical resolution, automatic acceptance or reopening the predecessor. |

Task can coordinate work with its own status, responsible party and history. A future mapping must specify the exact task scope before selecting status: completing an administrative routing task would not complete the patient's underlying care need. Preserve the app's factual stage separately from review currentness, unresolved exceptions, accepted ownership and completion outcome. Private command preparation is not Task.draft, receipt acknowledgement is not Task.accepted, and an overdue review is not automatically Task.failed. There is no new clinical urgency classification, response-time guarantee or universal laboratory-expiry interval here.

#### Time, source versions and human evidence

Collection time, event occurrence, server recording, review and contact must remain distinguishable. A historic sample entered today must not acquire today's collection time. A date-only appointment must not become an invented midnight UTC appointment; preserve its precision and any actually recorded timezone. Large revision integers and laboratory decimals must not be rounded through a JavaScript number.

Corrections preserve the previous values and the exact versions used for earlier decisions. An app workflow revision is not a FHIR server's `meta.versionId`; do not invent `/_history/` endpoints for a server that does not exist. Exported identifiers or references need an explicit, resolvable version strategy. Missing classification is not Normal, unknown status is not final, and a cancelled or missing source must not become a zero-valued observation.

The app review basis includes exact source/composition identities, values, collection times, quality and processing evidence, or the exact referral/access fact. A future clinical-review representation needs a defined payload and link to that frozen basis; Provenance alone is insufficient. Its agent must distinguish the author or recorder from any actually evidenced reviewing professional. An Observation performer must not be filled with an unrelated reviewer solely to remove a warning.

Communication records must distinguish recorder from actual sender and named recipient. Preserve `human_reached`, `no_answer`, `refused` and `unable_to_contact` and their evidence; no blind mapping of all applied commands to Communication.completed. The app command records contact but sends nothing. A transport receipt, read flag, audio playback or patient quiz is not a contact attestation. A clinical encounter or billable call must not be fabricated from a free-text contact reference.

#### Compatibility and acceptance before operational exchange

The app's reviewed implementation contracts and `lib/care-workflow/{types,step-command,human-types,composition-types,postclosure-types}.ts` establish the source meanings above. The existing collection exporter is `lib/interoperability/fhir-r4.ts`; it intentionally has a narrower scope. This map does not replace those contracts or declare every Toolkit requirement implemented.

Before adding operational profiles or an exporter, a separately versioned producer/consumer contract must define all of the following:

1. Stable identities, same-patient and same-organization references, exact source/version lineage, and what to do when references cannot be resolved.
1. Request intent and actor authority; ownership and transfer acceptance; status mapping that preserves non-completion and separate exceptions.
1. A clinical-review payload, contact evidence and actual participants, rather than inferring these from Provenance, message delivery or a closed flag.
1. Decimal, timestamp, date-only and revision precision; known missingness; complete pagination; consistent reads or an explicit non-snapshot boundary; no silent partial success.
1. Authorization, session changes, data minimization and retention at both ends. FHIR format, UUIDs and a collection Bundle do not provide access control or anonymization.
1. Positive and negative round trips covering correction, stale review, failed contact, refused transfer, non-success closure, unresolved barriers and post-closure changes. Test with the actual receiving implementation before claiming interoperability.

The current guide tests its own generated structures, synthetic example references and selected risk arithmetic. It does not execute the proposed operational mapping or certify a third-party EHR. Technical review is not clinical acceptance. Patient-pilot validation remains a separate, unperformed activity.

