Profile: HeartlandRiskAssessment
Parent: RiskAssessment
Id: heartland-risk-assessment
Title: "HEARTLAND Risk Assessment"
Description: "Heart failure risk stratification per the HEARTLAND Protocol v3.2 risk score. The score sums up to 18 points across 10 binary inputs and maps to three qualitative tiers: low (0-4), moderate (5-8), high (>=9). The basis SHALL reference a HeartlandRiskInputQuestionnaire QuestionnaireResponse capturing the 10 input variables."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-assessment"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"

* status 1..1 MS
* subject 1..1 MS
* subject only Reference(HeartlandPatient or Patient)
* method 1..1 MS
* method.text 1..1
* method.text = "HEARTLAND Protocol v3.2 Risk Score"
* prediction 1..1 MS
* prediction.qualitativeRisk 1..1 MS
* prediction.qualitativeRisk from HeartlandRiskTierVS (required)
* prediction.probabilityDecimal 0..1
* prediction.probabilityDecimal ^short = "Total HEARTLAND risk score (0-18 integer points)"
* basis 1..* MS
* basis only Reference(QuestionnaireResponse or Observation)
* note 0..*
