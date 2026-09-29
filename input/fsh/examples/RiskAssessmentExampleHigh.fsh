Instance: RiskAssessmentExampleHigh
InstanceOf: HeartlandRiskAssessment
Title: "Example: High-Risk HEARTLAND Risk Assessment"
Description: "Synthetic risk assessment scoring 11/18 points (>=9 = High Risk tier). Inputs: age >=75 (+2), prior HF hosp 6mo (+3), CKM Stage 3-4 (+2), BP <100 (+2), distance >50 mi (+1), limited social support (+1). Demonstrates a proposed heuristic, not a treatment instruction or validated outcome prediction."
Usage: #example

* status = #final
* subject = Reference(PatientExampleRural)
* occurrenceDateTime = "2026-04-16T14:30:00-05:00"
* method.text = "HEARTLAND Protocol v3.2 Risk Score"
* prediction.qualitativeRisk = HeartlandRiskTier#high "High Risk"
* prediction.extension[scoreTotal].valueInteger = 11
* basis[0] = Reference(QuestionnaireResponseExampleRiskInputs)
* note[0].text = "Synthetic educational example of an unvalidated heuristic; not an instruction for patient care."
