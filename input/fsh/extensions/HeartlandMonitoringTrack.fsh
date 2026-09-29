Extension: HeartlandMonitoringTrackExtension
Id: heartland-monitoring-track-ext
Title: "HEARTLAND Monitoring Track Assignment"
Description: "Records a documented CarePlan monitoring route: Track A (digital) or Track B (analog, telephone/paper). Access, patient preference and the supported local plan inform the choice; facility tier alone does not select a route. The code does not prove contact, completed monitoring or equivalent outcomes, and does not change clinical requirements. No third hybrid code is defined."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-monitoring-track-ext"
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = true
* ^publisher = "Vicky Muller Ferreira, MD"
* ^context.type = #element
* ^context.expression = "CarePlan"

* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from HeartlandMonitoringTrackVS (required)
