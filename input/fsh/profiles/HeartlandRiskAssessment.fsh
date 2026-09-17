Profile: HeartlandRiskAssessment
Parent: RiskAssessment
Id: heartland-risk-assessment
Title: "HEARTLAND Risk Assessment"
Description: "Heart failure risk stratification per the HEARTLAND Protocol v3.2 risk score. The score sums up to 18 points across 10 binary inputs and maps to three qualitative tiers: low (0-4), moderate (5-8), high (>=9). It is a non-validated implementation heuristic that assigns monitoring intensity; it does not predict an outcome and has not been validated against outcome data. The basis SHALL reference a HeartlandRiskInputQuestionnaire QuestionnaireResponse capturing the 10 input variables, or an Observation carrying the point total. The tier travels in prediction.qualitativeRisk and the point total in the heartland-risk-score-total extension; probability[x] is prohibited, because a point count is not a likelihood of an outcome."
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
* prediction.extension contains HeartlandRiskScoreTotal named scoreTotal 0..1 MS
* prediction.extension[scoreTotal] ^short = "Total HEARTLAND risk score (0-18 heuristic points, not a probability)"
* prediction.probability[x] 0..0
* basis 1..* MS
* basis only Reference(QuestionnaireResponse or Observation)
* note 0..*
