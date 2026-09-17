Extension: HeartlandRiskScoreTotal
Id: heartland-risk-score-total
Title: "HEARTLAND Risk Score Total"
Description: "Total of the HEARTLAND risk score: an integer count of 0 to 18 points summed from ten binary inputs. This is a non-validated implementation heuristic used to assign monitoring intensity; it is a point total, not a probability, not a predicted event rate and not a validated prognostic estimate. It is carried in this extension rather than in RiskAssessment.prediction.probabilityDecimal because that element is defined in FHIR R4 as the likelihood of a specified outcome, expressed as a percentage."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-score-total"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"
* ^context.type = #element
* ^context.expression = "RiskAssessment.prediction"

* value[x] only integer
* valueInteger 1..1
* valueInteger ^short = "HEARTLAND risk score point total (0-18), a heuristic count and not a probability"
* valueInteger ^minValueInteger = 0
* valueInteger ^maxValueInteger = 18
