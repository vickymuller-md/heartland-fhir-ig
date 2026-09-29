Instance: heartland-patient-track-questionnaire
InstanceOf: Questionnaire
Title: "HEARTLAND Monitoring Access Questionnaire"
Description: "Three Boolean items capture smartphone/connectivity, app comfort and telephone access. They do not capture patient preference or automatically assign a monitoring route. Choice, supported alternatives and an unresolved access gap require separate documentation. Existing questionnaire identity and item link IDs are preserved."
Usage: #definition

* url = "https://fhir.heartlandprotocol.org/Questionnaire/heartland-patient-track-questionnaire"
* version = "0.3.0"
* name = "HeartlandPatientTrackQuestionnaire"
* status = #draft
* experimental = true
* publisher = "Vicky Muller Ferreira, MD"
* date = "2026-09-29"
* description = "Patient-level monitoring access capture, not an automatic Track A/B assignment. Missing information or lack of a smartphone does not establish telephone access."
* subjectType[0] = #Patient
* purpose = "Record three access facts; record patient preference and the shared monitoring-route decision separately. Do not default an unanswered item to false or assign Track B when no supported route is available."

* item[0].linkId = "smartphone-connectivity"
* item[0].text = "Smartphone with reliable connectivity?"
* item[0].type = #boolean
* item[0].required = true
* item[0].repeats = false

* item[+].linkId = "app-comfort"
* item[=].text = "Comfortable using apps?"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false

* item[+].linkId = "telephone-access"
* item[=].text = "Reliable telephone access?"
* item[=].type = #boolean
* item[=].required = true
* item[=].repeats = false
