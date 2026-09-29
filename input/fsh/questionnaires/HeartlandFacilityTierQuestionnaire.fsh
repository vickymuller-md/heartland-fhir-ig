Instance: heartland-facility-tier-questionnaire
InstanceOf: Questionnaire
Title: "HEARTLAND Facility Tier Questionnaire"
Description: "Five capacity-capture items (four choices and one Boolean) for staffing, pharmacy, community health workers, monitoring and financial navigation. This descriptive instrument does not assign a tier, establish clinical eligibility or verify readiness. Capacity gaps, responsible professionals, coverage and an agreed implementation tier require separate documentation. Candidate 0.3.0 revises four answer strings; historical responses retain their original version and values."
Usage: #definition

* url = "https://fhir.heartlandprotocol.org/Questionnaire/heartland-facility-tier-questionnaire"
* version = "0.3.0"
* name = "HeartlandFacilityTierQuestionnaire"
* status = #draft
* experimental = true
* publisher = "Vicky Muller Ferreira, MD"
* date = "2026-09-29"
* description = "Descriptive facility capacity capture; it does not score or assign a tier or establish clinical eligibility. All educational domains remain available at every tier."
* subjectType[0] = #Location
* subjectType[+] = #Organization
* purpose = "Record selected implementation resources for a locally reviewed plan. No majority-vote tier algorithm, staffing authorization, clinical deadline or education exclusion is derived from these answers. The choices are illustrative and not an exhaustive readiness assessment."

* item[0].linkId = "staffing-level"
* item[0].text = "Which staffing model is available for heart failure care at your facility?"
* item[0].type = #choice
* item[0].required = true
* item[0].repeats = false
* item[0].answerOption[0].valueString = "RN/MA + MD"
* item[0].answerOption[+].valueString = "RN champion + PharmD"
* item[0].answerOption[+].valueString = "Multidisciplinary team (RN, PharmD, social worker, CHW)"

* item[+].linkId = "pharmd-available"
* item[=].text = "Is a PharmD available on-site or by consult to support GDMT titration?"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false

* item[+].linkId = "chw-program"
* item[=].text = "What level of community health worker (CHW) program does your facility have?"
* item[=].type = #choice
* item[=].required = true
* item[=].repeats = false
* item[=].answerOption[0].valueString = "No CHW program documented"
* item[=].answerOption[+].valueString = "High-risk patients only"
* item[=].answerOption[+].valueString = "Full integration across all HF patients"

* item[+].linkId = "monitoring-tech"
* item[=].text = "Which remote monitoring capability is available at your facility?"
* item[=].type = #choice
* item[=].required = true
* item[=].repeats = false
* item[=].answerOption[0].valueString = "Analog only (telephone, paper diary)"
* item[=].answerOption[+].valueString = "Dual-track (analog and digital available based on patient)"
* item[=].answerOption[+].valueString = "Digital primary plus remote patient monitoring (RPM)"

* item[+].linkId = "financial-navigation"
* item[=].text = "What financial navigation capacity does your facility have for medication access?"
* item[=].type = #choice
* item[=].required = true
* item[=].repeats = false
* item[=].answerOption[0].valueString = "Generic Bridge pathway only (low-cost generics)"
* item[=].answerOption[+].valueString = "Patient assistance program (PAP) pursuit plus Generic Bridge"
