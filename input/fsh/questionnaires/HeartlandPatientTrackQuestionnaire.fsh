Instance: heartland-patient-track-questionnaire
InstanceOf: Questionnaire
Title: "HEARTLAND Patient Track Assignment Questionnaire"
Description: "Three boolean items derived from HEARTLAND Protocol v3.2 Table 4 (Track Assignment Form) to determine whether a patient should be enrolled in Track A (digital, app-based) or Track B (analog, telephone) remote monitoring. Decision logic: smartphone with reliable connectivity AND comfortable using apps -> Track A; reliable telephone access only -> Track B; smartphone without app comfort -> Hybrid. Both tracks follow identical clinical algorithms per Module 3."
Usage: #definition

* url = "https://fhir.heartlandprotocol.org/Questionnaire/heartland-patient-track-questionnaire"
* version = "0.1.0"
* name = "HeartlandPatientTrackQuestionnaire"
* status = #active
* experimental = false
* publisher = "Vicky Muller Ferreira, MD"
* date = "2026-04-16"
* description = "Patient-level intake form to assign Track A (digital) vs Track B (analog) remote monitoring per HEARTLAND v3.2 Table 4."
* subjectType[0] = #Patient
* purpose = "Operationalize the Track A/B/Hybrid assignment so that remote monitoring choice reflects patient access to technology rather than clinical preference."

* item[0].linkId = "smartphone-connectivity"
* item[0].text = "Smartphone with reliable connectivity?"
* item[0].type = #boolean
* item[0].required = true

* item[+].linkId = "app-comfort"
* item[=].text = "Comfortable using apps?"
* item[=].type = #boolean
* item[=].required = true

* item[+].linkId = "telephone-access"
* item[=].text = "Reliable telephone access?"
* item[=].type = #boolean
* item[=].required = true
