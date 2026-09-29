Instance: QuestionnaireResponseExampleRiskInputs
InstanceOf: HeartlandRiskInputResponse
Title: "Example: Risk Input Questionnaire Response (score 11)"
Description: "Responses to the HeartlandRiskInputQuestionnaire for PatientExampleRural. Six items answered true (age >=75, prior HF hosp 6mo, SBP <100, CKM Stage 3-4, distance >50 mi, limited social support) totaling 11 points -> High Risk tier. Referenced by RiskAssessmentExampleHigh.basis[0]."
Usage: #example

* meta.profile[+] = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-questionnaire-response"

* questionnaire = "https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire|0.3.0"
* status = #completed
* subject = Reference(PatientExampleRural)
* authored = "2026-04-16T14:25:00-05:00"

* item[age].linkId = "age-75"
* item[age].text = "Age >=75 years"
* item[age].answer.valueBoolean = true

* item[hospitalization].linkId = "hf-hosp-6mo"
* item[hospitalization].text = "Prior heart failure hospitalization within 6 months"
* item[hospitalization].answer.valueBoolean = true

* item[egfr].linkId = "egfr-low"
* item[egfr].text = "eGFR <45 mL/min/1.73m^2"
* item[egfr].answer.valueBoolean = false

* item[natriuretic].linkId = "natriuretic-high"
* item[natriuretic].text = "BNP >=500 pg/mL or NT-proBNP >=1500 pg/mL"
* item[natriuretic].answer.valueBoolean = false

* item[sbp].linkId = "sbp-low"
* item[sbp].text = "Systolic BP <100 mmHg at admission"
* item[sbp].answer.valueBoolean = true

* item[diabetes].linkId = "diabetes"
* item[diabetes].text = "Diabetes mellitus"
* item[diabetes].answer.valueBoolean = false

* item[lvef].linkId = "lvef-low"
* item[lvef].text = "LVEF <30%"
* item[lvef].answer.valueBoolean = false

* item[ckm].linkId = "ckm-stage"
* item[ckm].text = "Cardiovascular-kidney-metabolic (CKM) Stage 3 or 4"
* item[ckm].answer.valueBoolean = true

* item[distance].linkId = "distance-far"
* item[distance].text = "Distance to cardiology care >50 miles"
* item[distance].answer.valueBoolean = true

* item[support].linkId = "social-support"
* item[support].text = "Lives alone or limited social support"
* item[support].answer.valueBoolean = true
