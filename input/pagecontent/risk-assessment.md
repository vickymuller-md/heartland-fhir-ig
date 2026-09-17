### Risk Assessment Workflow

The HEARTLAND risk score stratifies HF patients at discharge into three tiers using ten binary inputs.

#### Inputs (HEARTLAND v3.2 Risk Score)

| linkId | Item text | Points |
|-|-|-|
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
| **Total possible** | | **18** |

#### Tier Cutoffs

| Total score | Tier | Recommended bundle |
|-|-|-|
| 0-4 | Low | Standard monitoring |
| 5-8 | Moderate | Enhanced monitoring bundle |
| >=9 | High | Intensive monitoring bundle |

#### FHIR Workflow

1. **Capture inputs** as a [`HeartlandQuestionnaireResponse`](StructureDefinition-heartland-questionnaire-response.html) instance referencing the [`HeartlandRiskInputQuestionnaire`](Questionnaire-heartland-risk-input-questionnaire.html) canonical URL.
2. **Compute total score** by summing the point values of items answered `true`.
3. **Map score to tier** using the cutoff table above.
4. **Create a [`HeartlandRiskAssessment`](StructureDefinition-heartland-risk-assessment.html)** with:
   - `prediction.qualitativeRisk` bound to the resulting [`HeartlandRiskTier`](CodeSystem-heartland-risk-tier.html) code (`low` | `moderate` | `high`).
   - the [`heartland-risk-score-total`](StructureDefinition-heartland-risk-score-total.html) extension on `prediction` carrying the integer total (0-18).
   - `basis` referencing the `HeartlandQuestionnaireResponse`.
   - `method.text` exactly `"HEARTLAND Protocol v3.2 Risk Score"`.

#### Where the Point Total Goes

`prediction.probability[x]` is prohibited by the profile. FHIR R4 defines that element as the likelihood of a specified outcome, expressed as a percentage; the HEARTLAND total is a count of heuristic points, and writing it there would publish "11 points" as "11% chance of an event". The tier is the canonical result and lives in `prediction.qualitativeRisk`; the total lives in the `heartland-risk-score-total` extension.

Implementations that already carry the total on an `Observation` — for example a generator that references the Observation from `basis` instead of populating the extension — should code that Observation with the [`HeartlandRiskScore`](CodeSystem-heartland-risk-score.html) code system (`https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-score`), using code `heartland-risk-score` with `valueInteger` for the total and, where a component repeats the tier, code `heartland-risk-tier` with a `HeartlandRiskTier` coding. Both representations are conformant; neither expresses a probability.

#### Patient Extensions

Two HEARTLAND-specific Patient extensions surface the score's social determinants:

- [`heartland-distance-to-cardiology`](StructureDefinition-heartland-distance-to-cardiology.html) — Quantity in miles (`[mi_us]` UCUM)
- [`heartland-social-support-score`](StructureDefinition-heartland-social-support-score.html) — boolean (true = limited social support)

Use the [`HeartlandPatient`](StructureDefinition-heartland-patient.html) profile to bundle both.

#### Worked Example

[`PatientExampleRural`](Patient-PatientExampleRural.html) is a 78-year-old female in rural Montana, 87 miles from the nearest cardiologist, living alone.

[`QuestionnaireResponseExampleRiskInputs`](QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.html) records six of ten items as `true`:

- age-75 (+2)
- hf-hosp-6mo (+3)
- sbp-low (+2)
- ckm-stage (+2)
- distance-far (+1)
- social-support (+1)

Total = **11 points** -> **High Risk** tier -> **Intensive monitoring bundle**.

[`RiskAssessmentExampleHigh`](RiskAssessment-RiskAssessmentExampleHigh.html) records this result and references the questionnaire response as basis.

#### Evidence Note

The HEARTLAND Risk Score is labeled `pragmatic` per the [`HeartlandEvidenceLevel`](CodeSystem-heartland-evidence-level.html) code system: developed for clinical utility without formal external statistical validation. It is intended as a triage tool to assign monitoring intensity, not as a survival predictor like MAGGIC. Programs using HEARTLAND should consider concurrent validation in their local population.
