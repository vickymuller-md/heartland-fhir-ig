CodeSystem: HeartlandRiskScore
Id: heartland-risk-score
Title: "HEARTLAND Risk Score Codes"
Description: "Codes identifying the HEARTLAND risk score and its tier when either is carried on an Observation rather than on a RiskAssessment — for example an Observation referenced from HeartlandRiskAssessment.basis holding the point total. The score is a non-validated implementation heuristic: the total is a point count, not a probability, and the tier assigns monitoring intensity rather than predicting an outcome."
* ^url = "https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-score"
* ^version = "0.2.0"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* ^publisher = "Vicky Muller Ferreira, MD"
* ^copyright = "CC-BY 4.0"

* #heartland-risk-score "HEARTLAND Risk Score" "Total of the HEARTLAND risk score, 0 to 18 points. Carried as Observation.valueInteger. A heuristic point count, not a probability."
* #heartland-risk-tier "HEARTLAND Risk Tier" "Qualitative tier derived from the total. Carried as a CodeableConcept drawn from the HeartlandRiskTier code system, typically as an Observation component of the score."
