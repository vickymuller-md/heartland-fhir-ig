# Example: Body Weight Observation with Red-Flag Threshold - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example: Body Weight Observation with Red-Flag Threshold**

## Example Observation: Example: Body Weight Observation with Red-Flag Threshold

Perfil: [HEARTLAND Remote Monitoring Observation](StructureDefinition-heartland-remote-monitoring-observation.md)

**status**: Final

**category**: Vital Signs

**code**: Body weight

**subject**: [Rural Patient Example Female, DoB: 1947-06-15 ( https://heartlandprotocol.org/fhir/sid/example-mrn#EXAMPLE-001)](Patient-PatientExampleRural.md)

**effective**: 2026-04-16 08:15:00-0500

**value**: 79.4 kg (Detalhes: UCUM códigokg = 'kg')

### ReferenceRanges

| | | |
| :--- | :--- | :--- |
| - | **High** | **Text** |
| * | 0.9 kg/d (Detalhes: UCUM códigokg/d = 'kg/d') | HEARTLAND red flag (default): weight gain >=0.9 kg (~2 lb) in 24 hours triggers clinician telephone assessment before ED referral. |



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "ObservationExampleWeightRedFlag",
  "meta" : {
    "profile" : ["https://heartlandprotocol.org/fhir/StructureDefinition/heartland-remote-monitoring-observation"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "vital-signs"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "29463-7",
      "display" : "Body weight"
    }]
  },
  "subject" : {
    "reference" : "Patient/PatientExampleRural"
  },
  "effectiveDateTime" : "2026-04-16T08:15:00-05:00",
  "valueQuantity" : {
    "value" : 79.4,
    "unit" : "kg",
    "system" : "http://unitsofmeasure.org",
    "code" : "kg"
  },
  "referenceRange" : [{
    "high" : {
      "value" : 0.9,
      "unit" : "kg/d",
      "system" : "http://unitsofmeasure.org",
      "code" : "kg/d"
    },
    "text" : "HEARTLAND red flag (default): weight gain >=0.9 kg (~2 lb) in 24 hours triggers clinician telephone assessment before ED referral."
  }]
}

```
