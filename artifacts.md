# Artifacts Summary - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* **Artifacts Summary**

## Artifacts Summary

This page provides a list of the FHIR artifacts defined as part of this implementation guide.

### Structures: Questionnaires 

These define forms used by systems conforming to this implementation guide to capture or expose data to end users.

| | |
| :--- | :--- |
| [HEARTLAND Facility Tier Questionnaire](Questionnaire-heartland-facility-tier-questionnaire.md) | Five categorical items derived from HEARTLAND Protocol v3.2 Table 2 to support facility self-assessment for implementation tier assignment (Tier 1 Minimal / Tier 2 Standard / Tier 3 Advanced). Items cover staffing model, PharmD availability, CHW program, monitoring technology, and financial navigation capacity. Tier assignment is qualitative: predominance of 'minimal' answers maps to Tier 1; 'standard' to Tier 2; 'advanced' to Tier 3. This is an operational instrument derived from Table 2; the source protocol does not provide a formal scored tool. |
| [HEARTLAND Patient Track Assignment Questionnaire](Questionnaire-heartland-patient-track-questionnaire.md) | Three boolean items derived from HEARTLAND Protocol v3.2 Table 4 (Track Assignment Form) to determine whether a patient should be enrolled in Track A (digital, app-based) or Track B (analog, telephone) remote monitoring. Decision logic: smartphone with reliable connectivity AND comfortable using apps -> Track A; reliable telephone access only -> Track B; smartphone without app comfort -> Hybrid. Both tracks follow identical clinical algorithms per Module 3. |
| [HEARTLAND Risk Input Questionnaire](Questionnaire-heartland-risk-input-questionnaire.md) | Captures the 10 binary inputs to the HEARTLAND Protocol v3.2 risk score. Each item carries an itemWeight extension with its point contribution. Total score (0-18) maps to qualitative tiers: low (0-4), moderate (5-8), high (>=9). Item text is verbatim from manuscript/tables.R Table 1 (HEARTLAND v3.2). |

### Structures: Resource Profiles 

These define constraints on FHIR resources for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [HEARTLAND Care Plan](StructureDefinition-heartland-careplan.md) | Heart failure care plan structured per HEARTLAND Protocol v3.2. Activities are organized around five domains: GDMT initiation/titration, remote monitoring schedule, post-discharge follow-up (calls and visits), discharge education (3 condensed or 8 comprehensive domains), and patient assistance navigation. Two extensions identify the facility implementation tier and the assigned monitoring track (A digital / B analog). |
| [HEARTLAND Patient](StructureDefinition-heartland-patient.md) | Patient profile carrying HEARTLAND-specific extensions used by the risk score: distance to cardiology and social support status. Constrains the base FHIR R4 Patient resource for use within HEARTLAND Protocol v3.2 workflows. |
| [HEARTLAND Questionnaire Response](StructureDefinition-heartland-questionnaire-response.md) | Captures responses to any HEARTLAND-defined Questionnaire (risk inputs, facility tier self-assessment, or patient track assignment). Used as the basis reference for HeartlandRiskAssessment when the questionnaire is HeartlandRiskInputQuestionnaire. |
| [HEARTLAND Remote Monitoring Observation](StructureDefinition-heartland-remote-monitoring-observation.md) | Observation captured via the HEARTLAND remote monitoring kit (Module 5): body weight, blood pressure (systolic/diastolic), or oxygen saturation. Red-flag thresholds are encoded via Observation.referenceRange with meaning.text identifying the rule. Default thresholds (HEARTLAND v3.2 standard, configurable per program): weight gain >=2 lb (0.9 kg)/24h or >=5 lb (2.3 kg)/7d; SBP <90 or >180 mmHg; DBP <50 or >110 mmHg; SpO2 <90% on room air. Per the human filter principle, all non-emergency alerts pass through licensed clinician telephone assessment before ED referral. |
| [HEARTLAND Risk Assessment](StructureDefinition-heartland-risk-assessment.md) | Heart failure risk stratification per the HEARTLAND Protocol v3.2 risk score. The score sums up to 18 points across 10 binary inputs and maps to three qualitative tiers: low (0-4), moderate (5-8), high (>=9). The basis SHALL reference a HeartlandRiskInputQuestionnaire QuestionnaireResponse capturing the 10 input variables. |

### Structures: Extension Definitions 

These define constraints on FHIR data types for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [HEARTLAND Distance to Cardiology](StructureDefinition-heartland-distance-to-cardiology.md) | Driving distance in miles from the patient's residence to the nearest cardiologist. Used by the HEARTLAND risk score: distance >50 miles contributes 1 point. Rural counties without a cardiologist average 87 miles to nearest cardiology care vs 16 miles in counties with one (HEARTLAND Protocol v3.2, Module 2). |
| [HEARTLAND Facility Implementation Tier](StructureDefinition-heartland-facility-tier.md) | Identifies the HEARTLAND Protocol v3.2 implementation tier (1 Minimal, 2 Standard, 3 Advanced) at which a facility, organization, or care plan operates. Drives which protocol activities (monitoring, GDMT cadence, education, follow-up) are operationally feasible. |
| [HEARTLAND Monitoring Track Assignment](StructureDefinition-heartland-monitoring-track-ext.md) | Assigns a CarePlan to either Track A (digital, app-based) or Track B (analog, telephone/paper) per HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms; the choice reflects patient access to technology and facility implementation tier. |
| [HEARTLAND Social Support Score](StructureDefinition-heartland-social-support-score.md) | Boolean indicator of limited social support per the HEARTLAND risk score: true = patient lives alone or has limited social support, contributing 1 point. Perceived social isolation has been independently associated with a 3.74-fold increase in mortality among HF patients (HEARTLAND Protocol v3.2, Module 2). |

### Terminology: Value Sets 

These define sets of codes used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [HEARTLAND Evidence Level Value Set](ValueSet-heartland-evidence-level-vs.md) | 
| | | |
| :--- | :--- | :--- |
| All evidence level codes (established | emerging | pragmatic). |
 |
| [HEARTLAND Implementation Tier Value Set](ValueSet-heartland-implementation-tier-vs.md) | 
| | | |
| :--- | :--- | :--- |
| All facility implementation tier codes (tier-1-minimal | tier-2-standard | tier-3-advanced). |
 |
| [HEARTLAND Monitoring Observation Code Value Set](ValueSet-heartland-monitoring-observation-code-vs.md) | LOINC codes for the four observations captured by the HEARTLAND remote monitoring kit per Module 5: body weight (digital scale), systolic and diastolic blood pressure (BP monitor), and oxygen saturation (pulse oximeter, when indicated). |
| [HEARTLAND Monitoring Track Value Set](ValueSet-heartland-monitoring-track-vs.md) | 
| | |
| :--- | :--- |
| All remote monitoring track codes (digital-track-a | analog-track-b). |
 |
| [HEARTLAND Risk Tier Value Set](ValueSet-heartland-risk-tier-vs.md) | 
| | | |
| :--- | :--- | :--- |
| All risk tier codes from the HEARTLAND risk score (low | moderate | high). |
 |

### Terminology: Code Systems 

These define new code systems used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [HEARTLAND Evidence Level](CodeSystem-heartland-evidence-level.md) | Three-tiered transparency labels distinguishing evidence strength behind HEARTLAND Protocol v3.2 recommendations, helping clinicians calibrate clinical decisions. |
| [HEARTLAND Implementation Tier](CodeSystem-heartland-implementation-tier.md) | Facility implementation tiers from HEARTLAND Protocol v3.2 Module 8. Tiers reflect available resources (staffing, technology, financial navigation) and dictate which protocol components are operationally feasible at a given site. |
| [HEARTLAND Monitoring Track](CodeSystem-heartland-monitoring-track.md) | Patient-level remote monitoring track assignment from HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms, differing only in data collection method. |
| [HEARTLAND Risk Tier](CodeSystem-heartland-risk-tier.md) | Qualitative risk stratification tiers from the HEARTLAND Protocol v3.2 risk score (0-18 points). Used in HeartlandRiskAssessment.prediction.qualitativeRisk. |

### Example: Example Instances 

These are example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.

| | |
| :--- | :--- |
| [Example: Body Weight Observation with Red-Flag Threshold](Observation-ObservationExampleWeightRedFlag.md) | Body weight observation for PatientExampleRural captured via Track B (telephone-reported) showing a +1.2 kg gain in 24 hours. Reference range encodes the HEARTLAND default red-flag threshold (>=0.9 kg in 24 hours triggers clinician outreach per the human filter principle). |
| [Example: High-Risk HEARTLAND Risk Assessment](RiskAssessment-RiskAssessmentExampleHigh.md) | Risk assessment for PatientExampleRural scoring 11/18 points (>=9 = High Risk tier). Inputs: age >=75 (+2), prior HF hosp 6mo (+3), eGFR <45 (+2), BP <100 (+2), distance >50 mi (+1), limited social support (+1). Triggers Intensive Bundle per HEARTLAND v3.2. |
| [Example: Risk Input Questionnaire Response (score 11)](QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.md) | Responses to the HeartlandRiskInputQuestionnaire for PatientExampleRural. Six items answered true (age >=75, prior HF hosp 6mo, SBP <100, CKM Stage 3-4, distance >50 mi, limited social support) totaling 11 points -> High Risk tier. Referenced by RiskAssessmentExampleHigh.basis[0]. |
| [Example: Rural HF Patient (high-distance, limited support)](Patient-PatientExampleRural.md) | A 78-year-old patient living alone in a rural county without a local cardiologist (87 miles to nearest cardiology care). Demonstrates use of HeartlandDistanceToCardiology and HeartlandSocialSupportScore extensions. Modeled on the cohort described in HEARTLAND Protocol v3.2 background data. |
| [Example: Tier 2 Care Plan with Track B Monitoring](CarePlan-CarePlanExampleTier2.md) | Care plan for PatientExampleRural at a Tier 2 (Standard) FQHC. Patient was assigned Track B (analog) because rural broadband is unreliable. Plan includes target initiation of all 4 GDMT classes within 14 days, weekly follow-up calls for 4 weeks, 7-day in-person visit, and full 8-domain teach-back education. |

