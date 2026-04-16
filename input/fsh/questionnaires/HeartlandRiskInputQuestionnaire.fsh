Instance: heartland-risk-input-questionnaire
InstanceOf: Questionnaire
Title: "HEARTLAND Risk Input Questionnaire"
Description: "Captures the 10 binary inputs to the HEARTLAND Protocol v3.2 risk score. Each item carries an itemWeight extension with its point contribution. Total score (0-18) maps to qualitative tiers: low (0-4), moderate (5-8), high (>=9). Item text is verbatim from manuscript/tables.R Table 1 (HEARTLAND v3.2)."
Usage: #definition

* url = "https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire"
* version = "0.1.0"
* name = "HeartlandRiskInputQuestionnaire"
* status = #active
* experimental = false
* publisher = "Vicky Muller Ferreira, MD"
* date = "2026-04-16"
* description = "Ten yes/no items scoring 0-18 points; tier cutoffs: low 0-4, moderate 5-8, high >=9."
* subjectType[0] = #Patient
* purpose = "Standardized capture of HEARTLAND risk score inputs to enable interoperable risk stratification across rural and resource-limited US heart failure programs."

* item[0].linkId = "age-75"
* item[0].text = "Age >=75 years"
* item[0].type = #boolean
* item[0].required = true

* item[+].linkId = "hf-hosp-6mo"
* item[=].text = "Prior heart failure hospitalization within 6 months"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "egfr-low"
* item[=].text = "eGFR <45 mL/min/1.73m^2"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "natriuretic-high"
* item[=].text = "BNP >=500 pg/mL or NT-proBNP >=1500 pg/mL"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "sbp-low"
* item[=].text = "Systolic BP <100 mmHg at admission"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "diabetes"
* item[=].text = "Diabetes mellitus"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "lvef-low"
* item[=].text = "LVEF <30%"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "ckm-stage"
* item[=].text = "Cardiovascular-kidney-metabolic (CKM) Stage 3 or 4"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "distance-far"
* item[=].text = "Distance to cardiology care >50 miles"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "social-support"
* item[=].text = "Lives alone or limited social support"
* item[=].type = #boolean
* item[=].required = true
