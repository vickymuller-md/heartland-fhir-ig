Instance: CarePlanExampleTier2
InstanceOf: HeartlandCarePlan
Title: "Example: Tier 2 Care Plan with Track B Monitoring"
Description: "Care plan for PatientExampleRural at a Tier 2 (Standard) FQHC. Patient was assigned Track B (analog) because rural broadband is unreliable. Plan includes target initiation of all 4 GDMT classes within 14 days, weekly follow-up calls for 4 weeks, 7-day in-person visit, and full 8-domain teach-back education."
Usage: #example

* extension[facilityTier].valueCodeableConcept = HeartlandImplementationTier#tier-2-standard "Tier 2 - Standard"
* extension[monitoringTrack].valueCodeableConcept = HeartlandMonitoringTrack#analog-track-b "Analog Track B"

* status = #active
* intent = #plan
* subject = Reference(PatientExampleRural)
* period.start = "2026-04-16"
* period.end = "2026-07-16"

* activity[0].detail.status = #not-started
* activity[0].detail.description = "Initiate all 4 GDMT classes (ARNI/ACEi/ARB, beta-blocker, MRA, SGLT2i) within 14 days per Tier 2 protocol. Prioritize SGLT2i and beta-blocker first if simultaneous initiation not feasible."
* activity[0].detail.scheduledTiming.repeat.boundsPeriod.start = "2026-04-16"
* activity[0].detail.scheduledTiming.repeat.boundsPeriod.end = "2026-04-30"

* activity[+].detail.status = #scheduled
* activity[=].detail.description = "Post-discharge contact within 48 hours by RN champion."
* activity[=].detail.scheduledTiming.repeat.boundsPeriod.start = "2026-04-16"
* activity[=].detail.scheduledTiming.repeat.boundsPeriod.end = "2026-04-18"

* activity[+].detail.status = #scheduled
* activity[=].detail.description = "7-day in-person follow-up visit at FQHC for vitals, medication reconciliation, and GDMT titration."

* activity[+].detail.status = #scheduled
* activity[=].detail.description = "Weekly follow-up phone calls x 4 weeks (Track B analog) capturing weight, blood pressure, oxygen saturation, and symptom assessment."
* activity[=].detail.scheduledTiming.repeat.frequency = 1
* activity[=].detail.scheduledTiming.repeat.period = 1
* activity[=].detail.scheduledTiming.repeat.periodUnit = #wk
* activity[=].detail.scheduledTiming.repeat.count = 4

* activity[+].detail.status = #scheduled
* activity[=].detail.description = "Full discharge teach-back covering 8 AHA-aligned domains: (1) daily weight monitoring, (2) sodium and fluid restriction (<=2 g/day Na, 1.5-2 L fluid), (3) medication adherence and timing, (4) symptom recognition (red flags), (5) activity and exercise progression, (6) when to call provider vs ED, (7) follow-up appointment plan, (8) self-care between visits."

* activity[+].detail.status = #scheduled
* activity[=].detail.description = "Patient assistance program (PAP) pursuit + Generic Bridge for medication access. Generic therapy is superior to no therapy; never delay treatment while waiting for paperwork."

* note[0].text = "Tier 2 protocol: full implementation over 12 months with phased rollout. Quality metrics: dose optimization and 30-day readmission reduction."
