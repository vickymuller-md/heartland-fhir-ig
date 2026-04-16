Extension: HeartlandSocialSupportScore
Id: heartland-social-support-score
Title: "HEARTLAND Social Support Score"
Description: "Boolean indicator of limited social support per the HEARTLAND risk score: true = patient lives alone or has limited social support, contributing 1 point. Perceived social isolation has been independently associated with a 3.74-fold increase in mortality among HF patients (HEARTLAND Protocol v3.2, Module 2)."
* ^url = "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-social-support-score"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"
* ^context.type = #element
* ^context.expression = "Patient"

* value[x] only boolean
* valueBoolean 1..1
