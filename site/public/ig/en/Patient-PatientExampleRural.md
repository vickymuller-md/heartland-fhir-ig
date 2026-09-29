# Example: Rural HF Patient (high-distance, limited support) - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example: Rural HF Patient (high-distance, limited support)**

## Example Patient: Example: Rural HF Patient (high-distance, limited support)

Profile: [HEARTLAND Patient](StructureDefinition-heartland-patient.md)

Rural Patient Example Female, DoB: 1947-06-15 ( https://fhir.heartlandprotocol.org/sid/example-mrn#EXAMPLE-001)

-------

| | |
| :--- | :--- |
| Active: | true |
| Contact Detail | MT US (home) |
| [HEARTLAND Distance to Cardiology](StructureDefinition-heartland-distance-to-cardiology.md) | 87 mi_us (Details: UCUM code[mi_us] = '[mi_us]') |
| [HEARTLAND Social Support Score](StructureDefinition-heartland-social-support-score.md) | true |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "PatientExampleRural",
  "meta" : {
    "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient"]
  },
  "extension" : [{
    "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-distance-to-cardiology",
    "valueQuantity" : {
      "value" : 87,
      "unit" : "mi_us",
      "system" : "http://unitsofmeasure.org",
      "code" : "[mi_us]"
    }
  },
  {
    "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-social-support-score",
    "valueBoolean" : true
  }],
  "identifier" : [{
    "system" : "https://fhir.heartlandprotocol.org/sid/example-mrn",
    "value" : "EXAMPLE-001"
  }],
  "active" : true,
  "name" : [{
    "family" : "Example",
    "given" : ["Rural", "Patient"]
  }],
  "gender" : "female",
  "birthDate" : "1947-06-15",
  "address" : [{
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-synthetic-county-code",
      "valueCoding" : {
        "system" : "https://fhir.heartlandprotocol.org/sid/synthetic-county-code",
        "code" : "synthetic-example-001",
        "display" : "Synthetic county code (not an ANSI/FIPS county GEOID)"
      }
    }],
    "use" : "home",
    "state" : "MT",
    "country" : "US"
  }]
}

```
