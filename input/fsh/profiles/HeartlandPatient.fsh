Profile: HeartlandPatient
Parent: Patient
Id: heartland-patient
Title: "HEARTLAND Patient"
Description: "Patient profile carrying HEARTLAND-specific extensions used by the risk score: distance to cardiology and social support status. Constrains the base FHIR R4 Patient resource for use within HEARTLAND Protocol v3.2 workflows."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"

* extension contains
    HeartlandDistanceToCardiology named distanceToCardiology 0..1 MS and
    HeartlandSocialSupportScore named socialSupportScore 0..1 MS
