# Artifacts Summary - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* **Artifacts Summary**

## Artifacts Summary

This page provides a list of the FHIR artifacts defined as part of this implementation guide.

### Structures: Questionnaires 

These define forms used by systems conforming to this implementation guide to capture or expose data to end users.

| | |
| :--- | :--- |
| [ HEARTLAND Facility Tier Questionnaire  ](Questionnaire-heartland-facility-tier-questionnaire.md) | Five capacity-capture items (four choices and one Boolean) for staffing, pharmacy, community health workers, monitoring and financial navigation. This descriptive instrument does not assign a tier, establish clinical eligibility or verify readiness. Capacity gaps, responsible professionals, coverage and an agreed implementation tier require separate documentation. Candidate 0.3.0 revises four answer strings; historical responses retain their original version and values. |
| [ HEARTLAND Monitoring Access Questionnaire  ](Questionnaire-heartland-patient-track-questionnaire.md) | Three Boolean items capture smartphone/connectivity, app comfort and telephone access. They do not capture patient preference or automatically assign a monitoring route. Choice, supported alternatives and an unresolved access gap require separate documentation. Existing questionnaire identity and item link IDs are preserved. |
| [ HEARTLAND Risk Input Questionnaire  ](Questionnaire-heartland-risk-input-questionnaire.md) | Captures ten weighted criteria using Boolean answers for the historical HEARTLAND risk-score definition. Each item carries HeartlandRiskTruePoints for the contribution of an explicit true answer; false contributes zero, and an absent answer is not false. Total score (0-18) maps to qualitative tiers: low (0-4), moderate (5-8), high (>=9). Item text is verbatim from manuscript/tables.R Table 1 (HEARTLAND v3.2). |

### Structures: Resource Profiles 

These define constraints on FHIR resources for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ HEARTLAND Care Plan  ](StructureDefinition-heartland-careplan.md) | Draft planned-activity representation aligned with the HEARTLAND Toolkit V3.4 candidate. Facility tier describes delivery capacity, not clinical eligibility, treatment timing or exclusion of education domains. All eight educational domains are offered at every tier; format, sequence and support can differ. Planned activities are not evidence of professional review, completed teach-back, contact or care. Tier and monitoring-track extensions retain their existing identities. The profile does not encode the full operational journal. |
| [ HEARTLAND Complete Risk Input Response  ](StructureDefinition-heartland-risk-input-response.md) | Complete, flat, explicitly answered Boolean input contract for the candidate risk questionnaire. Link IDs identify the ten weighted criteria; response order must also match the Questionnaire. This profile does not resolve unknown clinical inputs, validate the risk heuristic, or prove a referenced RiskAssessment total. |
| [ HEARTLAND Patient  ](StructureDefinition-heartland-patient.md) | Patient profile carrying HEARTLAND-specific extensions used by the risk score: distance to cardiology and social support status. Constrains the base FHIR R4 Patient resource for use within HEARTLAND Protocol v3.2 workflows. |
| [ HEARTLAND Questionnaire Response  ](StructureDefinition-heartland-questionnaire-response.md) | Captures responses to any HEARTLAND-defined Questionnaire (risk inputs, facility tier self-assessment, or patient track assignment). Used as the basis reference for HeartlandRiskAssessment when the questionnaire is HeartlandRiskInputQuestionnaire. |
| [ HEARTLAND Remote Monitoring Observation  ](StructureDefinition-heartland-remote-monitoring-observation.md) | Draft representation of body weight, blood pressure, or oxygen saturation. This profile does not encode or validate a clinical alert algorithm. A body-mass observation must not use a rate-of-change threshold as its numeric reference range. Time-window comparisons need dated source observations, matching units, and a separately governed clinical policy. Synthetic examples do not establish alert delivery, clinical assessment, or clinical outcomes. |
| [ HEARTLAND Risk Assessment  ](StructureDefinition-heartland-risk-assessment.md) | Heart failure risk stratification per the HEARTLAND Protocol v3.2 risk score. The score sums up to 18 points across ten weighted criteria and maps to three qualitative tiers: low (0-4), moderate (5-8), high (>=9). It is a non-validated implementation heuristic that assigns monitoring intensity; it does not predict an outcome and has not been validated against outcome data. For the complete Boolean capture contract use HeartlandRiskInputResponse. Legacy Observation and generic QuestionnaireResponse basis references remain allowed for compatibility; this profile alone does not validate their content or recompute the total. The tier travels in prediction.qualitativeRisk and the point total in the heartland-risk-score-total extension; probability[x] is prohibited, because a point count is not a likelihood of an outcome. |

### Structures: Extension Definitions 

These define constraints on FHIR data types for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ HEARTLAND Distance to Cardiology  ](StructureDefinition-heartland-distance-to-cardiology.md) | Driving distance in miles from the patient's residence to the nearest cardiologist. Used by the HEARTLAND risk score: distance >50 miles contributes 1 point. Rural counties without a cardiologist average 87 miles to nearest cardiology care vs 16 miles in counties with one (HEARTLAND Protocol v3.2, Module 2). |
| [ HEARTLAND Facility Implementation Tier  ](StructureDefinition-heartland-facility-tier.md) | Records the declared implementation capacity tier (1 Minimal, 2 Standard, 3 Advanced) for a facility, organization or care plan. Tier guides delivery format, sequence and support; it does not authorize reduced clinical requirements, delayed risk-led follow-up or exclusion of an educational domain. A recorded tier is not validated readiness, staffing coverage or an automatic assignment. |
| [ HEARTLAND Monitoring Track Assignment  ](StructureDefinition-heartland-monitoring-track-ext.md) | Records a documented CarePlan monitoring route: Track A (digital) or Track B (analog, telephone/paper). Access, patient preference and the supported local plan inform the choice; facility tier alone does not select a route. The code does not prove contact, completed monitoring or equivalent outcomes, and does not change clinical requirements. No third hybrid code is defined. |
| [ HEARTLAND Points for a True Answer  ](StructureDefinition-heartland-risk-true-points.md) | Positive weight for an explicitly true Boolean answer to a risk questionnaire item. False contributes zero. Missing or unknown is not false and must not be scored by omission. This extension records a weight, not a validated outcome probability or an executable calculation. |
| [ HEARTLAND Risk Score Total  ](StructureDefinition-heartland-risk-score-total.md) | Total of the HEARTLAND risk score: an integer count of 0 to 18 points summed from ten weighted criteria. This is a non-validated implementation heuristic used to assign monitoring intensity; it is a point total, not a probability, not a predicted event rate and not a validated prognostic estimate. It is carried in this extension rather than in RiskAssessment.prediction.probabilityDecimal because that element is defined in FHIR R4 as the likelihood of a specified outcome, expressed as a percentage. |
| [ HEARTLAND Social Support Score  ](StructureDefinition-heartland-social-support-score.md) | Boolean indicator of limited social support per the HEARTLAND risk score: true = patient lives alone or has limited social support, contributing 1 point. Perceived social isolation has been independently associated with a 3.74-fold increase in mortality among HF patients (HEARTLAND Protocol v3.2, Module 2). |
| [ HEARTLAND Synthetic County Identifier  ](StructureDefinition-heartland-synthetic-county-code.md) | Opaque synthetic identifier emitted by HEARTLAND Synthetic, not an ANSI/FIPS county GEOID, postal code, or evidence of real residence. Preserve the code as supplied; no real-geography lookup or linkage is implied. |

### Terminology: Value Sets 

These define sets of codes used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ HEARTLAND Evidence Level Value Set  ](ValueSet-heartland-evidence-level-vs.md) | 
| | | |
| :--- | :--- | :--- |
| All evidence level codes (established | emerging | pragmatic). |
 |
| [ HEARTLAND Implementation Tier Value Set  ](ValueSet-heartland-implementation-tier-vs.md) | 
| | | |
| :--- | :--- | :--- |
| All facility implementation tier codes (tier-1-minimal | tier-2-standard | tier-3-advanced). |
 |
| [ HEARTLAND Monitoring Observation Code Value Set  ](ValueSet-heartland-monitoring-observation-code-vs.md) | LOINC codes for the four observations captured by the HEARTLAND remote monitoring kit per Module 5: body weight (digital scale), systolic and diastolic blood pressure (BP monitor), and oxygen saturation (pulse oximeter, when indicated). |
| [ HEARTLAND Monitoring Track Value Set  ](ValueSet-heartland-monitoring-track-vs.md) | 
| | |
| :--- | :--- |
| All remote monitoring track codes (digital-track-a | analog-track-b). |
 |
| [ HEARTLAND Risk Tier Value Set  ](ValueSet-heartland-risk-tier-vs.md) | 
| | | |
| :--- | :--- | :--- |
| All risk tier codes from the HEARTLAND risk score (low | moderate | high). |
 |

### Terminology: Code Systems 

These define new code systems used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ HEARTLAND Evidence Level  ](CodeSystem-heartland-evidence-level.md) | Three-tiered transparency labels distinguishing evidence strength behind HEARTLAND Protocol v3.2 recommendations, helping clinicians calibrate clinical decisions. |
| [ HEARTLAND Implementation Tier  ](CodeSystem-heartland-implementation-tier.md) | Declared facility implementation capacity tiers, retaining historical code identities. Capacity informs delivery format, sequence and support; it does not determine clinical eligibility, permit delayed risk-led care or exclude educational domains. All eight domains are offered at every tier. These labels are not a scored readiness instrument or proof of actual coverage. |
| [ HEARTLAND Monitoring Track  ](CodeSystem-heartland-monitoring-track.md) | Documented monitoring routes with stable Track A and Track B codes. A route does not establish equivalent outcomes, successful contact, device availability or completed monitoring. Clinical requirements are not reduced by the route; access, preference and the supported local plan require separate documentation. |
| [ HEARTLAND Risk Score Codes  ](CodeSystem-heartland-risk-score.md) | Codes identifying the HEARTLAND risk score and its tier when either is carried on an Observation rather than on a RiskAssessment — for example an Observation referenced from HeartlandRiskAssessment.basis holding the point total. The score is a non-validated implementation heuristic: the total is a point count, not a probability, and the tier assigns monitoring intensity rather than predicting an outcome. |
| [ HEARTLAND Risk Tier  ](CodeSystem-heartland-risk-tier.md) | Qualitative risk stratification tiers from the HEARTLAND Protocol v3.2 risk score (0-18 points). Used in HeartlandRiskAssessment.prediction.qualitativeRisk. |

### Example: Example Instances 

These are example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.

| | |
| :--- | :--- |
| [ Example: Draft Tier 2 Plan with Track B Context  ](CarePlan-CarePlanExampleTier2.md) | Synthetic planning illustration aligned with the Toolkit V3.4 candidate. The historical resource identifier is retained, but no activity is scheduled or completed, no clinician is fabricated and no patient-specific prescription is issued. Tier 2 and Track B are illustrative declared context, not questionnaire-derived decisions or evidence of actual resources. |
| [ Example: High-Risk HEARTLAND Risk Assessment  ](RiskAssessment-RiskAssessmentExampleHigh.md) | Synthetic risk assessment scoring 11/18 points (>=9 = High Risk tier). Inputs: age >=75 (+2), prior HF hosp 6mo (+3), CKM Stage 3-4 (+2), BP <100 (+2), distance >50 mi (+1), limited social support (+1). Demonstrates a proposed heuristic, not a treatment instruction or validated outcome prediction. |
| [ Example: Risk Input Questionnaire Response (score 11)  ](QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.md) | Responses to the HeartlandRiskInputQuestionnaire for PatientExampleRural. Six items answered true (age >=75, prior HF hosp 6mo, SBP <100, CKM Stage 3-4, distance >50 mi, limited social support) totaling 11 points -> High Risk tier. Referenced by RiskAssessmentExampleHigh.basis[0]. |
| [ Example: Rural HF Patient (high-distance, limited support)  ](Patient-PatientExampleRural.md) | A 78-year-old patient living alone in a rural county without a local cardiologist (87 miles to nearest cardiology care). Demonstrates use of HeartlandDistanceToCardiology and HeartlandSocialSupportScore extensions. Modeled on the cohort described in HEARTLAND Protocol v3.2 background data. |
| [ Example: Synthetic Body Weight Observation  ](Observation-ObservationExampleWeightRedFlag.md) | Single synthetic body-mass reading. Historical resource ID retained for compatibility; this example does not establish a weight change, alert, delivery, or clinical response. A rate-of-change threshold is not a numeric reference range for body mass. |

