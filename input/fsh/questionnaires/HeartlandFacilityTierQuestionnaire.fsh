Instance: heartland-facility-tier-questionnaire
InstanceOf: Questionnaire
Title: "HEARTLAND Facility Tier Questionnaire"
Description: "Five categorical items derived from HEARTLAND Protocol v3.2 Table 2 to support facility self-assessment for implementation tier assignment (Tier 1 Minimal / Tier 2 Standard / Tier 3 Advanced). Items cover staffing model, PharmD availability, CHW program, monitoring technology, and financial navigation capacity. Tier assignment is qualitative: predominance of 'minimal' answers maps to Tier 1; 'standard' to Tier 2; 'advanced' to Tier 3. This is an operational instrument derived from Table 2; the source protocol does not provide a formal scored tool."
Usage: #definition

* url = "https://heartlandprotocol.org/fhir/Questionnaire/heartland-facility-tier-questionnaire"
* version = "0.1.0"
* name = "HeartlandFacilityTierQuestionnaire"
* status = #active
* experimental = false
* publisher = "Vicky Muller Ferreira, MD"
* date = "2026-04-16"
* description = "Facility self-assessment for HEARTLAND implementation tier (1/2/3). Qualitative scoring; see narrative for tier mapping."
* subjectType[0] = #Location
* subjectType[+] = #Organization
* purpose = "Help heart failure programs identify the HEARTLAND implementation tier their site can sustainably operate at, given current staffing, technology, and resources."

* item[0].linkId = "staffing-level"
* item[0].text = "Which staffing model is available for heart failure care at your facility?"
* item[0].type = #choice
* item[0].required = true
* item[0].answerOption[0].valueString = "RN/MA + MD only (minimal)"
* item[0].answerOption[+].valueString = "RN champion + PharmD (standard)"
* item[0].answerOption[+].valueString = "Full multidisciplinary team (RN, PharmD, social worker, CHW) (advanced)"

* item[+].linkId = "pharmd-available"
* item[=].text = "Is a PharmD available on-site or by consult to support GDMT titration?"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "chw-program"
* item[=].text = "What level of community health worker (CHW) program does your facility have?"
* item[=].type = #choice
* item[=].required = true
* item[=].answerOption[0].valueString = "None (rely on family or alternative)"
* item[=].answerOption[+].valueString = "High-risk patients only"
* item[=].answerOption[+].valueString = "Full integration across all HF patients"

* item[+].linkId = "monitoring-tech"
* item[=].text = "Which remote monitoring capability is available at your facility?"
* item[=].type = #choice
* item[=].required = true
* item[=].answerOption[0].valueString = "Analog only (telephone, paper diary)"
* item[=].answerOption[+].valueString = "Dual-track (analog and digital available based on patient)"
* item[=].answerOption[+].valueString = "Digital primary plus remote patient monitoring (RPM)"

* item[+].linkId = "financial-navigation"
* item[=].text = "What financial navigation capacity does your facility have for medication access?"
* item[=].type = #choice
* item[=].required = true
* item[=].answerOption[0].valueString = "Generic Bridge pathway only (low-cost generics)"
* item[=].answerOption[+].valueString = "Patient assistance program (PAP) pursuit plus Generic Bridge"
