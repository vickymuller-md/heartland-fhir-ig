Invariant: heartland-county-value
Description: "The synthetic identifier must contain actual system and code values."
Severity: #error
Expression: "value.system.hasValue() and value.code.hasValue()"

Extension: HeartlandSyntheticCountyCode
Id: heartland-synthetic-county-code
Title: "HEARTLAND Synthetic County Identifier"
Description: "Opaque synthetic identifier emitted by HEARTLAND Synthetic, not an ANSI/FIPS county GEOID, postal code, or evidence of real residence. Preserve the code as supplied; no real-geography lookup or linkage is implied."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-synthetic-county-code"
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = true
* ^publisher = "Vicky Muller Ferreira, MD"
* ^context.type = #element
* ^context.expression = "Patient.address"
* ^contextInvariant[0] = "extension.where(url = 'https://fhir.heartlandprotocol.org/StructureDefinition/heartland-synthetic-county-code').count() = 1"
* . 0..1
* obeys heartland-county-value
* extension 0..0
* value[x] only Coding
* valueCoding 1..1
* valueCoding.system 1..1
* valueCoding.system = "https://fhir.heartlandprotocol.org/sid/synthetic-county-code" (exactly)
* valueCoding.code 1..1
