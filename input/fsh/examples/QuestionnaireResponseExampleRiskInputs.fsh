Instance: QuestionnaireResponseExampleRiskInputs
InstanceOf: HeartlandQuestionnaireResponse
Title: "Example: Risk Input Questionnaire Response (score 11)"
Description: "Responses to the HeartlandRiskInputQuestionnaire for PatientExampleRural. Six items answered true (age >=75, prior HF hosp 6mo, SBP <100, CKM Stage 3-4, distance >50 mi, limited social support) totaling 11 points -> High Risk tier. Referenced by RiskAssessmentExampleHigh.basis[0]."
Usage: #example

* questionnaire = "https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire|0.1.0"
* status = #completed
* subject = Reference(PatientExampleRural)
* authored = "2026-04-16T14:25:00-05:00"

* item[0].linkId = "age-75"
* item[0].text = "Age >=75 years"
* item[0].answer.valueBoolean = true

* item[+].linkId = "hf-hosp-6mo"
* item[=].text = "Prior heart failure hospitalization within 6 months"
* item[=].answer.valueBoolean = true

* item[+].linkId = "egfr-low"
* item[=].text = "eGFR <45 mL/min/1.73m^2"
* item[=].answer.valueBoolean = false

* item[+].linkId = "natriuretic-high"
* item[=].text = "BNP >=500 pg/mL or NT-proBNP >=1500 pg/mL"
* item[=].answer.valueBoolean = false

* item[+].linkId = "sbp-low"
* item[=].text = "Systolic BP <100 mmHg at admission"
* item[=].answer.valueBoolean = true

* item[+].linkId = "diabetes"
* item[=].text = "Diabetes mellitus"
* item[=].answer.valueBoolean = false

* item[+].linkId = "lvef-low"
* item[=].text = "LVEF <30%"
* item[=].answer.valueBoolean = false

* item[+].linkId = "ckm-stage"
* item[=].text = "Cardiovascular-kidney-metabolic (CKM) Stage 3 or 4"
* item[=].answer.valueBoolean = true

* item[+].linkId = "distance-far"
* item[=].text = "Distance to cardiology care >50 miles"
* item[=].answer.valueBoolean = true

* item[+].linkId = "social-support"
* item[=].text = "Lives alone or limited social support"
* item[=].answer.valueBoolean = true
