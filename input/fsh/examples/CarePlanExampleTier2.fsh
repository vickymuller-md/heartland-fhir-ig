Instance: CarePlanExampleTier2
InstanceOf: HeartlandCarePlan
Title: "Example: Draft Tier 2 Plan with Track B Context"
Description: "Synthetic planning illustration aligned with the Toolkit V3.4 candidate. The historical resource identifier is retained, but no activity is scheduled or completed, no clinician is fabricated and no patient-specific prescription is issued. Tier 2 and Track B are illustrative declared context, not questionnaire-derived decisions or evidence of actual resources."
Usage: #example

* extension[facilityTier].valueCodeableConcept = HeartlandImplementationTier#tier-2-standard "Tier 2 - Standard"
* extension[monitoringTrack].valueCodeableConcept = HeartlandMonitoringTrack#analog-track-b "Analog Track B"
* status = #draft
* intent = #plan
* subject = Reference(PatientExampleRural)

* activity[0].detail.status = #not-started
* activity[0].detail.description = "Medication planning: an authorized professional reviews indications, tolerability, laboratory evidence, access and the individual plan. Facility tier does not prescribe a drug sequence or a universal initiation deadline. No medication order is represented here."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Follow-up planning: document the risk-led timing, responsible professional, named backup, supported route and escalation for unavailable coverage. No appointment, contact or response-time guarantee is asserted."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Monitoring planning: confirm telephone access and patient preference for the illustrative Track B route; document an alternative and unresolved access gap when necessary. A paper diary or attempted call does not establish review."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Examination follow-up planning: retain request, access, actual collection, result version, professional review, decision, communication and closure evidence as distinct records. This plan does not transmit an order or attest that any stage occurred."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Referral planning: identify the need, destination and accountable professional, then record acceptance, attendance, report, review and communication separately. An offered transfer is not accepted responsibility or a completed consultation."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Medication-access planning: document barriers, assistance options and the prescriber's individualized plan. Assistance application or approval is not medication obtained, adherence or therapeutic equivalence."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Education — Daily Weight: plan teaching and professional teach-back about the patient's written monitoring and contact instructions; do not infer completion from an entry."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Education — Medications: plan teaching and professional teach-back about the individualized medication plan and barriers; no dose or therapy change is ordered by this example."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Education — Warning Signs: plan teaching and professional teach-back about the written warning-sign and emergency instructions; a displayed message does not establish understanding."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Education — Understanding Heart Failure: offer an explanation suited to the patient's language and needs, with professional teach-back recorded separately."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Education — Sodium: use the individual's documented dietary guidance; this example does not impose a universal numerical restriction."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Education — Fluids: explain fluid-related symptoms and the individual's written guidance; a fluid restriction is not assumed for every patient."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Education — When to Call: plan teaching and professional teach-back about the written contact and emergency routes, including coverage gaps and supported alternatives."

* activity[+].detail.status = #not-started
* activity[=].detail.description = "Education — Activity Guidance: discuss the individual's activity plan and limitations; no universal exercise prescription or completed instruction is asserted."

* note[0].text = "Offer all eight domains at every tier; tier can change format, sequence and support, not exclude a clinically relevant domain. Patient self-assessment is not professional teach-back. Domain states pending, completed, deferred and not applicable belong to separate education records; deferred or not applicable requires a written reason and named authorized decision-maker. The denominator is the applicable domain set. No education state is inferred from these not-started planned activities."
* note[+].text = "Synthetic educational implementation-support example only. No named professional, clinical approval, care delivery, validated safe waiting interval, clinical outcome or operational export is claimed. Preserve historical example versions rather than rewriting records previously exchanged."
