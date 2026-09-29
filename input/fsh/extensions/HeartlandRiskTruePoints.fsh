Invariant: heartland-points-value
Description: "The weight must have an actual integer value, not only primitive extensions."
Severity: #error
Expression: "value.hasValue()"

Extension: HeartlandRiskTruePoints
Id: heartland-risk-true-points
Title: "HEARTLAND Points for a True Answer"
Description: "Positive weight for an explicitly true Boolean answer to a risk questionnaire item. False contributes zero. Missing or unknown is not false and must not be scored by omission. This extension records a weight, not a validated outcome probability or an executable calculation."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points"
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = true
* ^publisher = "Vicky Muller Ferreira, MD"
* ^context.type = #element
* ^context.expression = "Questionnaire.item"
* ^contextInvariant[0] = "type = 'boolean'"
* ^contextInvariant[1] = "extension.where(url = 'https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points').count() = 1"
* . 0..1
* obeys heartland-points-value
* extension 0..0
* value[x] only integer
* valueInteger 1..1
* valueInteger ^minValueInteger = 1
* valueInteger ^maxValueInteger = 3
