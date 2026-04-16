Profile: HeartlandQuestionnaireResponse
Parent: QuestionnaireResponse
Id: heartland-questionnaire-response
Title: "HEARTLAND Questionnaire Response"
Description: "Captures responses to any HEARTLAND-defined Questionnaire (risk inputs, facility tier self-assessment, or patient track assignment). Used as the basis reference for HeartlandRiskAssessment when the questionnaire is HeartlandRiskInputQuestionnaire."
* ^url = "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-questionnaire-response"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"

* questionnaire 1..1 MS
* questionnaire ^short = "Canonical URL of one of: HeartlandRiskInputQuestionnaire | HeartlandFacilityTierQuestionnaire | HeartlandPatientTrackQuestionnaire"
* status 1..1 MS
* subject 1..1 MS
* authored 1..1 MS
* author 0..1 MS
* item 1..* MS
