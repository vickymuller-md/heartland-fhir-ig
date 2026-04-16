CodeSystem: HeartlandRiskTier
Id: heartland-risk-tier
Title: "HEARTLAND Risk Tier"
Description: "Qualitative risk stratification tiers from the HEARTLAND Protocol v3.2 risk score (0-18 points). Used in HeartlandRiskAssessment.prediction.qualitativeRisk."
* ^url = "https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-tier"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* ^publisher = "Vicky Muller Ferreira, MD"
* ^copyright = "CC-BY 4.0"

* #low "Low Risk" "Low Risk (0-4 points). Standard monitoring per HEARTLAND Protocol v3.2."
* #moderate "Moderate Risk" "Moderate Risk (5-8 points). Enhanced monitoring bundle per HEARTLAND Protocol v3.2."
* #high "High Risk" "High Risk (>=9 points). Intensive monitoring bundle per HEARTLAND Protocol v3.2."
