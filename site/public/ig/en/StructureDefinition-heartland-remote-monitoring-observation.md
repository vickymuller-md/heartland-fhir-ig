# HEARTLAND Remote Monitoring Observation - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Remote Monitoring Observation**

## Resource Profile: HEARTLAND Remote Monitoring Observation ( Experimental ) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandRemoteMonitoringObservation |

 
Draft representation of body weight, blood pressure, or oxygen saturation. This profile does not encode or validate a clinical alert algorithm. A body-mass observation must not use a rate-of-change threshold as its numeric reference range. Time-window comparisons need dated source observations, matching units, and a separately governed clinical policy. Synthetic examples do not establish alert delivery, clinical assessment, or clinical outcomes. 

**Usages:**

* Examples for this Profile: [Observation/ObservationExampleWeightRedFlag](Observation-ObservationExampleWeightRedFlag.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/heartland.fhir.us.protocol|current/StructureDefinition/StructureDefinition-heartland-remote-monitoring-observation.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-heartland-remote-monitoring-observation.csv), [Excel](../StructureDefinition-heartland-remote-monitoring-observation.xlsx), [Schematron](../StructureDefinition-heartland-remote-monitoring-observation.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-remote-monitoring-observation",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation",
  "version" : "0.3.0",
  "name" : "HeartlandRemoteMonitoringObservation",
  "title" : "HEARTLAND Remote Monitoring Observation",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-09-29T19:00:36-04:00",
  "publisher" : "Vicky Muller Ferreira, MD",
  "contact" : [{
    "name" : "Vicky Muller Ferreira, MD",
    "telecom" : [{
      "system" : "url",
      "value" : "https://heartlandprotocol.org"
    },
    {
      "system" : "email",
      "value" : "vickymuller@heartlandprotocol.org"
    }]
  },
  {
    "name" : "Vicky Muller Ferreira, MD",
    "telecom" : [{
      "system" : "email",
      "value" : "vickymuller@heartlandprotocol.org",
      "use" : "work"
    },
    {
      "system" : "url",
      "value" : "https://heartlandprotocol.org"
    }]
  }],
  "description" : "Draft representation of body weight, blood pressure, or oxygen saturation. This profile does not encode or validate a clinical alert algorithm. A body-mass observation must not use a rate-of-change threshold as its numeric reference range. Time-window comparisons need dated source observations, matching units, and a separately governed clinical policy. Synthetic examples do not establish alert delivery, clinical assessment, or clinical outcomes.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation"
    },
    {
      "id" : "Observation.status",
      "path" : "Observation.status",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category",
      "path" : "Observation.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:vsCat",
      "path" : "Observation.category",
      "sliceName" : "vsCat",
      "min" : 1,
      "max" : "1",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
          "code" : "vital-signs"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.code",
      "path" : "Observation.code",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-observation-code-vs"
      }
    },
    {
      "id" : "Observation.subject",
      "path" : "Observation.subject",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient",
        "http://hl7.org/fhir/StructureDefinition/Patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.effective[x]",
      "path" : "Observation.effective[x]",
      "min" : 1,
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Period"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]",
      "path" : "Observation.value[x]",
      "type" : [{
        "code" : "Quantity"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.device",
      "path" : "Observation.device",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Device"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange",
      "path" : "Observation.referenceRange",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.text",
      "path" : "Observation.referenceRange.text",
      "mustSupport" : true
    }]
  }
}

```
