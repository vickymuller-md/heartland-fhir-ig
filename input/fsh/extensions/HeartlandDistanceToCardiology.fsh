Extension: HeartlandDistanceToCardiology
Id: heartland-distance-to-cardiology
Title: "HEARTLAND Distance to Cardiology"
Description: "Driving distance in miles from the patient's residence to the nearest cardiologist. Used by the HEARTLAND risk score: distance >50 miles contributes 1 point. Rural counties without a cardiologist average 87 miles to nearest cardiology care vs 16 miles in counties with one (HEARTLAND Protocol v3.2, Module 2)."
* ^url = "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-distance-to-cardiology"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"
* ^context.type = #element
* ^context.expression = "Patient"

* value[x] only Quantity
* valueQuantity 1..1
* valueQuantity.value 1..1
* valueQuantity.unit 1..1
* valueQuantity.unit = "mi_us"
* valueQuantity.system 1..1
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code 1..1
* valueQuantity.code = #[mi_us]
