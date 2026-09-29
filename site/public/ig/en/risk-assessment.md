# Risk Assessment - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* **Risk Assessment**

## Risk Assessment

### Risk Assessment Workflow

This draft represents a proposed, unvalidated heuristic with ten weighted criteria, 0–18 points and three qualitative tiers. It is an educational implementation-support representation, not a patient-care instruction or outcome prediction.

#### Inputs (historical score definition retained for compatibility)

| | | |
| :--- | :--- | :--- |
| age-75 | Age >=75 years | 2 |
| hf-hosp-6mo | Prior heart failure hospitalization within 6 months | 3 |
| egfr-low | eGFR <45 mL/min/1.73m^2 | 2 |
| natriuretic-high | BNP >=500 pg/mL or NT-proBNP >=1500 pg/mL | 2 |
| sbp-low | Systolic BP <100 mmHg at admission | 2 |
| diabetes | Diabetes mellitus | 1 |
| lvef-low | LVEF <30% | 2 |
| ckm-stage | Cardiovascular-kidney-metabolic Stage 3 or 4 | 2 |
| distance-far | Distance to cardiology care >50 miles | 1 |
| social-support | Lives alone or limited social support | 1 |
| **Total possible** |   | **18** |

#### Tier Cutoffs

| | | |
| :--- | :--- | :--- |
| 0-4 | Low | Standard monitoring |
| 5-8 | Moderate | Enhanced monitoring bundle |
| >=9 | High | Intensive monitoring bundle |

#### FHIR Workflow

1. **Capture complete inputs**using[`HeartlandRiskInputResponse`](StructureDefinition-heartland-risk-input-response.md), referencing[`HeartlandRiskInputQuestionnaire`](Questionnaire-heartland-risk-input-questionnaire.md)with version`|0.3.0`. This specialized profile requires all ten unique link IDs in Questionnaire order, each with exactly one actual Boolean value. Nested, missing, extra and duplicate items are rejected. Status must be completed or amended; this is not clinical approval.
1. **Interpret weights by link ID**, using each item's[`HeartlandRiskTruePoints`](StructureDefinition-heartland-risk-true-points.md)extension. Explicit`true`contributes the stated weight; explicit`false`contributes zero. Missing or unknown is not false. A`_valueBoolean`containing only an absent-data extension is not an answer that can be scored. The extension allows exactly one weight, between 1 and 3, per Boolean item. These are data constraints, not an automated clinical adjudication.
1. **Map score to tier**using the cutoff table above.
1. **Create a [`HeartlandRiskAssessment`](StructureDefinition-heartland-risk-assessment.md)**with:
* `prediction.qualitativeRisk` bound to the resulting [`HeartlandRiskTier`](CodeSystem-heartland-risk-tier.md) code: `low`, `moderate` or `high`.
* the [`heartland-risk-score-total`](StructureDefinition-heartland-risk-score-total.md) extension on `prediction` carrying the integer total (0-18).
* `basis` referencing the complete response, with separately checked subject and score consistency.
* `method.text` exactly `"HEARTLAND Protocol v3.2 Risk Score"`.

#### Where the Point Total Goes

`prediction.probability[x]` is prohibited by the profile. FHIR R4 defines that element as the likelihood of a specified outcome, expressed as a percentage; the HEARTLAND total is a count of heuristic points, and writing it there would publish "11 points" as "11% chance of an event". The tier is the canonical result and lives in `prediction.qualitativeRisk`; the total lives in the `heartland-risk-score-total` extension.

Legacy `Observation` and generic `QuestionnaireResponse` references remain allowed by `RiskAssessment.basis` for compatibility. An Observation representation uses the [`HeartlandRiskScore`](CodeSystem-heartland-risk-score.md) code system, code `heartland-risk-score`, and a point total rather than a probability. A reference alone does not validate its target, confirm subject identity, recompute the total or prove conformance of an entire Bundle. Only the specialized response profile defines the complete Boolean capture contract; it does not automatically validate a separate RiskAssessment's calculation.

The method text `HEARTLAND Protocol v3.2 Risk Score` is retained as a compatibility identifier. It is not a statement that the candidate IG or current Toolkit has version 3.2. Historical resources are not rewritten.

#### Patient Extensions

Two HEARTLAND-specific Patient extensions surface the score's social determinants:

* [`heartland-distance-to-cardiology`](StructureDefinition-heartland-distance-to-cardiology.md) — Quantity in miles (`[mi_us]` UCUM)
* [`heartland-social-support-score`](StructureDefinition-heartland-social-support-score.md) — boolean (true = limited social support)

Use the [`HeartlandPatient`](StructureDefinition-heartland-patient.md) profile to bundle both.

The [`heartland-synthetic-county-code`](StructureDefinition-heartland-synthetic-county-code.md) extension belongs on `Patient.address` and carries `valueCoding` with system `https://fhir.heartlandprotocol.org/sid/synthetic-county-code` and a required actual code. Preserve the opaque code; it is not an ANSI/FIPS county GEOID, postal code or evidence of real residence. The extension also applies to unprofiled synthetic Patient resources; its definition does not certify the rest of an export.

#### Worked Example

[`PatientExampleRural`](Patient-PatientExampleRural.md) is a synthetic example with an illustrative birth date, Montana state label, distance of 87 miles and limited support. The data do not identify a real patient or establish residence in a real county.

[`QuestionnaireResponseExampleRiskInputs`](QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.md) records six of ten items as `true`:

* age-75 (+2)
* hf-hosp-6mo (+3)
* sbp-low (+2)
* ckm-stage (+2)
* distance-far (+1)
* social-support (+1)

Total = **11 points** -> **High Risk** heuristic tier. No clinical action, notification or outcome is inferred.

[`RiskAssessmentExampleHigh`](RiskAssessment-RiskAssessmentExampleHigh.md) records this result and references the questionnaire response as basis.

#### Evidence Note

The score's `pragmatic` label identifies a proposed heuristic pending validation, not established clinical utility. This guide's tests concern data representation and constraints. They do not establish discrimination, calibration, safety, clinical effectiveness or suitability for patient care.

