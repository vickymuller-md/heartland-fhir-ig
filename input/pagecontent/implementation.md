### Implementation Structures and Limits

This page describes the available draft structures, not a complete or approved clinical workflow. The existing facility questionnaire and care-plan example preserve historical content pending full Toolkit V3.4 alignment.

#### Facility tier

The [facility tier extension](StructureDefinition-heartland-facility-tier.html) can appear on Location, Organization or CarePlan. The [code system](CodeSystem-heartland-implementation-tier.html) retains `tier-1-minimal`, `tier-2-standard` and `tier-3-advanced`.

The [self-assessment questionnaire](Questionnaire-heartland-facility-tier-questionnaire.html) records staffing, pharmacy, community-health-worker, technology and navigation capacity. It does not calculate a validated tier or establish clinical eligibility. Resource availability must not be used as a reason to lower clinical requirements.

#### Monitoring track

The [monitoring track extension](StructureDefinition-heartland-monitoring-track-ext.html) represents `digital-track-a` or `analog-track-b`. The [track questionnaire](Questionnaire-heartland-patient-track-questionnaire.html) records technology access.

No third hybrid code is defined. Do not transmit an invented code as though it were part of this value set. The representation does not establish equivalent outcomes, successful contact, or delivery of a monitoring intervention.

#### Care plan

[HeartlandCarePlan](StructureDefinition-heartland-careplan.html) can represent planned activities. The [historical Tier 2 example](CarePlan-CarePlanExampleTier2.html) is synthetic and illustrative; it is not a current prescribing schedule. The guide does not yet express the app's complete exam, communication, transfer, recovery and post-closure lifecycle.

Task, ServiceRequest and Provenance mappings, cross-resource consistency rules and full Toolkit V3.4 alignment remain release checks. A recorded plan is not evidence that an activity occurred.

#### Monitoring observations

[HeartlandRemoteMonitoringObservation](StructureDefinition-heartland-remote-monitoring-observation.html) represents readings using LOINC and UCUM where appropriate. It does not calculate an alert or prove that a clinician assessed it.

| Measurement | LOINC |
|-|-|
| Body weight | 29463-7 |
| Systolic blood pressure | 8480-6 |
| Diastolic blood pressure | 8462-4 |
| Oxygen saturation | 59408-5 |

A numeric reference range must concern the same measurement and compatible units as the observation. **Body mass in kg is not a rate of change in kg/day.** Time-window comparisons require dated source observations and a separately governed clinical policy; this guide does not introduce a threshold.

Candidate 0.3.0 corrects the historical diastolic mapping to [LOINC 8462-4](https://loinc.org/8462-4). The previous code, [8481-4](https://loinc.org/8481-4), represents maximum systolic pressure over one hour. This is a terminology correction, not a change to a clinical threshold. Do not relabel existing observations without verifying the underlying measurement.

The [body-weight example](Observation-ObservationExampleWeightRedFlag.html) keeps its historical resource identifier for compatibility but now contains only a single synthetic reading. It does not establish a weight change or red flag.

#### Human review and provenance

Resource creation, a queue event, notification intent, provider acceptance, transport delivery and clinical resolution are distinct events. Do not infer one from another. This draft is not evidence that any real-world workflow or clinical review has occurred.
