# Example: Synthetic Body Weight Observation - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example: Synthetic Body Weight Observation**

## Example Observation: Example: Synthetic Body Weight Observation

Profile: [HEARTLAND Remote Monitoring Observation](StructureDefinition-heartland-remote-monitoring-observation.md)

**status**: Final

**category**: Vital Signs

**code**: Body weight

**subject**: [Rural Patient Example Female, DoB: 1947-06-15 ( https://fhir.heartlandprotocol.org/sid/example-mrn#EXAMPLE-001)](Patient-PatientExampleRural.md)

**effective**: 2026-04-16 08:15:00-0500

**value**: 79.4 kg (Details: UCUM codekg = 'kg')

**note**: 

> 

This single synthetic reading does not establish a change over time. Compare dated source measurements in compatible units under a separately governed clinical policy; no alert threshold or clinical action is asserted here.




## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "ObservationExampleWeightRedFlag",
  "meta" : {
    "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation"]
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
  "note" : [{
    "text" : "This single synthetic reading does not establish a change over time. Compare dated source measurements in compatible units under a separately governed clinical policy; no alert threshold or clinical action is asserted here."
  }]
}

```
