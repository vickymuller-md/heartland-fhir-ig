Extension: HeartlandMonitoringTrackExtension
Id: heartland-monitoring-track-ext
Title: "HEARTLAND Monitoring Track Assignment"
Description: "Assigns a CarePlan to either Track A (digital, app-based) or Track B (analog, telephone/paper) per HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms; the choice reflects patient access to technology and facility implementation tier."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-monitoring-track-ext"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"
* ^context.type = #element
* ^context.expression = "CarePlan"

* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from HeartlandMonitoringTrackVS (required)
