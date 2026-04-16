Instance: PatientExampleRural
InstanceOf: HeartlandPatient
Title: "Example: Rural HF Patient (high-distance, limited support)"
Description: "A 78-year-old patient living alone in a rural county without a local cardiologist (87 miles to nearest cardiology care). Demonstrates use of HeartlandDistanceToCardiology and HeartlandSocialSupportScore extensions. Modeled on the cohort described in HEARTLAND Protocol v3.2 background data."
Usage: #example

* extension[distanceToCardiology].valueQuantity.value = 87
* extension[distanceToCardiology].valueQuantity.unit = "mi_us"
* extension[distanceToCardiology].valueQuantity.system = "http://unitsofmeasure.org"
* extension[distanceToCardiology].valueQuantity.code = #[mi_us]

* extension[socialSupportScore].valueBoolean = true

* identifier[0].system = "https://fhir.heartlandprotocol.org/sid/example-mrn"
* identifier[0].value = "EXAMPLE-001"
* active = true
* name[0].family = "Example"
* name[0].given[0] = "Rural"
* name[0].given[1] = "Patient"
* gender = #female
* birthDate = "1947-06-15"
* address[0].state = "MT"
* address[0].country = "US"
* address[0].use = #home
