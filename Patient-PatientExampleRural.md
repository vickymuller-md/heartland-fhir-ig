# Example: Rural HF Patient (high-distance, limited support) - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example: Rural HF Patient (high-distance, limited support)**

## Example Patient: Example: Rural HF Patient (high-distance, limited support)

Perfil: [HEARTLAND Patient](StructureDefinition-heartland-patient.md)

Rural Patient Example Female, DoB: 1947-06-15 ( https://heartlandprotocol.org/fhir/sid/example-mrn#EXAMPLE-001)

-------

| | |
| :--- | :--- |
| Ativo: | true |
| Detalhes do contacto | MT US (home) |
| [HEARTLAND Distance to Cardiology](StructureDefinition-heartland-distance-to-cardiology.md) | 87 mi_us (Detalhes: UCUM código[mi_us] = '[mi_us]') |
| [HEARTLAND Social Support Score](StructureDefinition-heartland-social-support-score.md) | true |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "PatientExampleRural",
  "meta" : {
    "profile" : ["https://heartlandprotocol.org/fhir/StructureDefinition/heartland-patient"]
  },
  "extension" : [{
    "url" : "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-distance-to-cardiology",
    "valueQuantity" : {
      "value" : 87,
      "unit" : "mi_us",
      "system" : "http://unitsofmeasure.org",
      "code" : "[mi_us]"
    }
  },
  {
    "url" : "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-social-support-score",
    "valueBoolean" : true
  }],
  "identifier" : [{
    "system" : "https://heartlandprotocol.org/fhir/sid/example-mrn",
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
    "use" : "home",
    "state" : "MT",
    "country" : "US"
  }]
}

```
