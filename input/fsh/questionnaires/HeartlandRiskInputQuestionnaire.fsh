Instance: heartland-risk-input-questionnaire
InstanceOf: Questionnaire
Title: "HEARTLAND Risk Input Questionnaire"
Description: "Captures ten weighted criteria using Boolean answers for the historical HEARTLAND risk-score definition. Each item carries HeartlandRiskTruePoints for the contribution of an explicit true answer; false contributes zero, and an absent answer is not false. Total score (0-18) maps to qualitative tiers: low (0-4), moderate (5-8), high (>=9). Item text is verbatim from manuscript/tables.R Table 1 (HEARTLAND v3.2)."
Usage: #definition

* url = "https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire"
* version = "0.3.0"
* name = "HeartlandRiskInputQuestionnaire"
* status = #draft
* experimental = true
* publisher = "Vicky Muller Ferreira, MD"
* date = "2026-09-29"
* description = "Ten weighted criteria scoring 0-18 points when all Boolean answers are present; tier cutoffs: low 0-4, moderate 5-8, high >=9."
* subjectType[0] = #Patient
* purpose = "Draft structured capture for educational and synthetic interoperability testing; no clinical validation or automatic missing-data adjudication."

* item[0].linkId = "age-75"
* item[0].text = "Age >=75 years"
* item[0].type = #boolean
* item[0].required = true
* item[0].repeats = false
* item[0].extension[HeartlandRiskTruePoints].valueInteger = 2

* item[+].linkId = "hf-hosp-6mo"
* item[=].text = "Prior heart failure hospitalization within 6 months"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 3

* item[+].linkId = "egfr-low"
* item[=].text = "eGFR <45 mL/min/1.73m^2"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 2

* item[+].linkId = "natriuretic-high"
* item[=].text = "BNP >=500 pg/mL or NT-proBNP >=1500 pg/mL"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 2

* item[+].linkId = "sbp-low"
* item[=].text = "Systolic BP <100 mmHg at admission"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 2

* item[+].linkId = "diabetes"
* item[=].text = "Diabetes mellitus"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 1

* item[+].linkId = "lvef-low"
* item[=].text = "LVEF <30%"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 2

* item[+].linkId = "ckm-stage"
* item[=].text = "Cardiovascular-kidney-metabolic (CKM) Stage 3 or 4"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 2

* item[+].linkId = "distance-far"
* item[=].text = "Distance to cardiology care >50 miles"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 1

* item[+].linkId = "social-support"
* item[=].text = "Lives alone or limited social support"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
* item[=].extension[HeartlandRiskTruePoints].valueInteger = 1
