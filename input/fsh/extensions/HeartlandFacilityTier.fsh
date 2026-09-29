Extension: HeartlandFacilityTier
Id: heartland-facility-tier
Title: "HEARTLAND Facility Implementation Tier"
Description: "Records the declared implementation capacity tier (1 Minimal, 2 Standard, 3 Advanced) for a facility, organization or care plan. Tier guides delivery format, sequence and support; it does not authorize reduced clinical requirements, delayed risk-led follow-up or exclusion of an educational domain. A recorded tier is not validated readiness, staffing coverage or an automatic assignment."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier"
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = true
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
