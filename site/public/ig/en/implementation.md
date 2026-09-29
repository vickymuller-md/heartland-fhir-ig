# Tiers and Tracks - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* **Tiers and Tracks**

## Tiers and Tracks

### Implementation Structures and Limits

This page describes draft planning structures aligned with the Toolkit V3.4 candidate's capacity and education boundaries. It does not establish a complete or approved clinical workflow. The separate [workflow mapping](workflow.md) records the resource decisions and the limits of the current app export.

#### Facility tier

The [facility tier extension](StructureDefinition-heartland-facility-tier.md) can appear on Location, Organization or CarePlan. The [code system](CodeSystem-heartland-implementation-tier.md) retains `tier-1-minimal`, `tier-2-standard` and `tier-3-advanced`.

The [capacity questionnaire](Questionnaire-heartland-facility-tier-questionnaire.md) contains four choice items and one Boolean item about staffing, pharmacy, community-health-worker, technology and navigation capacity. It does not calculate or automatically assign a tier or establish clinical eligibility. Its choices are illustrative, not an exhaustive readiness assessment. Resource availability must not be used as a reason to lower clinical requirements.

Candidate 0.3.0 removes the unsupported majority-vote tier rule. It also changes these four literal answer values; an answer string is data, not merely a display label:

| | | |
| :--- | :--- | :--- |
| `staffing-level` | RN/MA + MD only (minimal) | RN/MA + MD |
| `staffing-level` | RN champion + PharmD (standard) | RN champion + PharmD |
| `staffing-level` | Full multidisciplinary team (RN, PharmD, social worker, CHW) (advanced) | Multidisciplinary team (RN, PharmD, social worker, CHW) |
| `chw-program` | None (rely on family or alternative) | No CHW program documented |

The questionnaire canonical URL, item link IDs, types and required flags remain stable; the answer-value contract is **not byte-identical**. All other answer options are unchanged. New responses should identify the questionnaire version. Preserve old responses and their original questionnaire definition; do not relabel or automatically translate them into the new choices. Family support is not a documented CHW program, and staffing labels confer no professional authorization. Missing information must not become a negative answer or a lowest-tier assignment.

#### Monitoring track

The [monitoring track extension](StructureDefinition-heartland-monitoring-track-ext.md) represents `digital-track-a` or `analog-track-b`. The [monitoring access questionnaire](Questionnaire-heartland-patient-track-questionnaire.md) retains its existing canonical identity and three Boolean items for smartphone/connectivity, app comfort and telephone access. It does **not** record patient preference or a shared route decision; document those separately with supported alternatives and unresolved access gaps. No initial answers or automatic route calculation are supplied.

No third hybrid code is defined. Do not transmit an invented code as though it were part of this value set. Lack of a smartphone, an unanswered item or unavailable telephone access does not imply Track B. The representation does not establish equivalent outcomes, successful contact, or delivery of a monitoring intervention.

#### Care plan

[HeartlandCarePlan](StructureDefinition-heartland-careplan.md) represents planned activities. Its cardinalities remain unchanged: inline detail is optional, and a single activity cannot carry both detail and a resource reference. A reference to a Task or ServiceRequest describes the planned activity; it is not an attestation of the eventual outcome.

The [revised Tier 2 example](CarePlan-CarePlanExampleTier2.md) retains its historical identifier but is now an explicitly synthetic **draft** plan: six coordination activities and eight education activities, all **not-started**, without invented dates, responsible clinicians or outcomes. Prior example versions are not rewritten. The example neither prescribes all drug classes within a tier-based deadline nor imposes universal sodium or fluid restrictions.

All eight domains are offered at every tier: Daily Weight, Medications, Warning Signs, Understanding Heart Failure, Sodium, Fluids, When to Call and Activity Guidance. Capacity can change format, sequence and support, not exclude a clinically relevant domain. The patient's written plan governs individualized guidance; this example introduces no new thresholds.

Patient self-assessment and professional teach-back are distinct records. Per-domain pending, completed, deferred or not applicable states require their own evidence; the last two require a reason and a named authorized decision-maker. Completion uses the applicable domain set. These education states are **not new CarePlan activity status codes** and are not fully encoded by this generic profile. An education activity's presence or not-started status does not attest learning or professional verification.

Risk-led timing takes precedence over delivery format. Document a resource gap, named coverage, supported alternative and escalation rather than silently postponing care. Neither the tier nor this example establishes a clinically safe waiting interval. [Operational resource decisions and future exchange requirements](workflow.md) remain distinct from this plan.

#### Monitoring observations

[HeartlandRemoteMonitoringObservation](StructureDefinition-heartland-remote-monitoring-observation.md) represents readings using LOINC and UCUM where appropriate. It does not calculate an alert or prove that a clinician assessed it.

| | |
| :--- | :--- |
| Body weight | 29463-7 |
| Systolic blood pressure | 8480-6 |
| Diastolic blood pressure | 8462-4 |
| Oxygen saturation | 59408-5 |

A numeric reference range must concern the same measurement and compatible units as the observation. **Body mass in kg is not a rate of change in kg/day.** Time-window comparisons require dated source observations and a separately governed clinical policy; this guide does not introduce a threshold.

Candidate 0.3.0 corrects the historical diastolic mapping to [LOINC 8462-4](https://loinc.org/8462-4). The previous code, [8481-4](https://loinc.org/8481-4), represents maximum systolic pressure over one hour. This is a terminology correction, not a change to a clinical threshold. Do not relabel existing observations without verifying the underlying measurement.

The [body-weight example](Observation-ObservationExampleWeightRedFlag.md) keeps its historical resource identifier for compatibility but now contains only a single synthetic reading. It does not establish a weight change or red flag.

#### Human review and provenance

Resource creation, a queue event, notification intent, provider acceptance, transport delivery and clinical resolution are distinct events. Do not infer one from another. This draft is not evidence that any real-world workflow or clinical review has occurred.

