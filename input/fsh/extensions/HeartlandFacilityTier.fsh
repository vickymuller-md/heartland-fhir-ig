Extension: HeartlandFacilityTier
Id: heartland-facility-tier
Title: "HEARTLAND Facility Implementation Tier"
Description: "Identifies the HEARTLAND Protocol v3.2 implementation tier (1 Minimal, 2 Standard, 3 Advanced) at which a facility, organization, or care plan operates. Drives which protocol activities (monitoring, GDMT cadence, education, follow-up) are operationally feasible."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"
* ^context[0].type = #element
* ^context[0].expression = "Location"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "CarePlan"

* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from HeartlandImplementationTierVS (required)
