Instance: RiskAssessmentExampleHigh
InstanceOf: HeartlandRiskAssessment
Title: "Example: High-Risk HEARTLAND Risk Assessment"
Description: "Risk assessment for PatientExampleRural scoring 11/18 points (>=9 = High Risk tier). Inputs: age >=75 (+2), prior HF hosp 6mo (+3), eGFR <45 (+2), BP <100 (+2), distance >50 mi (+1), limited social support (+1). Triggers Intensive Bundle per HEARTLAND v3.2."
Usage: #example

* status = #final
* subject = Reference(PatientExampleRural)
* occurrenceDateTime = "2026-04-16T14:30:00-05:00"
* method.text = "HEARTLAND Protocol v3.2 Risk Score"
* prediction.qualitativeRisk = HeartlandRiskTier#high "High Risk"
* prediction.probabilityDecimal = 11
* basis[0] = Reference(QuestionnaireResponseExampleRiskInputs)
* note[0].text = "Pragmatic heuristic per HEARTLAND Evidence Level. Intensive monitoring bundle indicated."
