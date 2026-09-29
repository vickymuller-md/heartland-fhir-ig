Invariant: heartland-risk-complete
Description: "A computable response must be completed or amended. This is not clinical approval."
Severity: #error
Expression: "status = 'completed' or status = 'amended'"

Invariant: heartland-risk-value
Description: "Each risk answer must contain an actual Boolean value, including false; a primitive with only an absent-data extension is not computable."
Severity: #error
Expression: "answer.value.hasValue()"

Profile: HeartlandRiskInputResponse
Parent: HeartlandQuestionnaireResponse
Id: heartland-risk-input-response
Title: "HEARTLAND Complete Risk Input Response"
Description: "Complete, flat, explicitly answered Boolean input contract for the candidate risk questionnaire. Link IDs identify the ten weighted criteria; response order must also match the Questionnaire. This profile does not resolve unknown clinical inputs, validate the risk heuristic, or prove a referenced RiskAssessment total."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-input-response"
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = true
* ^publisher = "Vicky Muller Ferreira, MD"
* obeys heartland-risk-complete
* questionnaire = "https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire|0.3.0" (exactly)
* item 10..10
* item ^slicing.discriminator.type = #value
* item ^slicing.discriminator.path = "linkId"
* item ^slicing.rules = #closed
* item ^slicing.ordered = true
* item obeys heartland-risk-value
* item.item 0..0
* item.answer 1..1
* item.answer.value[x] only boolean
* item.answer.valueBoolean 1..1
* item.answer.item 0..0
* item contains
    age 1..1 and hospitalization 1..1 and egfr 1..1 and natriuretic 1..1 and
    sbp 1..1 and diabetes 1..1 and lvef 1..1 and ckm 1..1 and distance 1..1 and support 1..1
* item[age].linkId = "age-75" (exactly)
* item[hospitalization].linkId = "hf-hosp-6mo" (exactly)
* item[egfr].linkId = "egfr-low" (exactly)
* item[natriuretic].linkId = "natriuretic-high" (exactly)
* item[sbp].linkId = "sbp-low" (exactly)
* item[diabetes].linkId = "diabetes" (exactly)
* item[lvef].linkId = "lvef-low" (exactly)
* item[ckm].linkId = "ckm-stage" (exactly)
* item[distance].linkId = "distance-far" (exactly)
* item[support].linkId = "social-support" (exactly)
