# HEARTLAND Care Plan - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Care Plan**

## Resource Profile: HEARTLAND Care Plan ( Experimental ) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-careplan | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandCarePlan |

 
Draft planned-activity representation aligned with the HEARTLAND Toolkit V3.4 candidate. Facility tier describes delivery capacity, not clinical eligibility, treatment timing or exclusion of education domains. All eight educational domains are offered at every tier; format, sequence and support can differ. Planned activities are not evidence of professional review, completed teach-back, contact or care. Tier and monitoring-track extensions retain their existing identities. The profile does not encode the full operational journal. 

**Usages:**

* Examples for this Profile: [CarePlan/CarePlanExampleTier2](CarePlan-CarePlanExampleTier2.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/heartland.fhir.us.protocol|current/StructureDefinition/StructureDefinition-heartland-careplan.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-heartland-careplan.csv), [Excel](../StructureDefinition-heartland-careplan.xlsx), [Schematron](../StructureDefinition-heartland-careplan.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-careplan",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-careplan",
  "version" : "0.3.0",
  "name" : "HeartlandCarePlan",
  "title" : "HEARTLAND Care Plan",
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
  "description" : "Draft planned-activity representation aligned with the HEARTLAND Toolkit V3.4 candidate. Facility tier describes delivery capacity, not clinical eligibility, treatment timing or exclusion of education domains. All eight educational domains are offered at every tier; format, sequence and support can differ. Planned activities are not evidence of professional review, completed teach-back, contact or care. Tier and monitoring-track extensions retain their existing identities. The profile does not encode the full operational journal.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "CarePlan",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/CarePlan",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "CarePlan",
      "path" : "CarePlan"
    },
    {
      "id" : "CarePlan.extension",
      "path" : "CarePlan.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      }
    },
    {
      "id" : "CarePlan.extension:facilityTier",
      "path" : "CarePlan.extension",
      "sliceName" : "facilityTier",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.extension:monitoringTrack",
      "path" : "CarePlan.extension",
      "sliceName" : "monitoringTrack",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-monitoring-track-ext"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.status",
      "path" : "CarePlan.status",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.intent",
      "path" : "CarePlan.intent",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.subject",
      "path" : "CarePlan.subject",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient",
        "http://hl7.org/fhir/StructureDefinition/Patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.period",
      "path" : "CarePlan.period",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.author",
      "path" : "CarePlan.author",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.addresses",
      "path" : "CarePlan.addresses",
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.activity",
      "path" : "CarePlan.activity",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.activity.detail.scheduled[x]",
      "path" : "CarePlan.activity.detail.scheduled[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      }
    },
    {
      "id" : "CarePlan.activity.detail.scheduled[x]:scheduledTiming",
      "path" : "CarePlan.activity.detail.scheduled[x]",
      "sliceName" : "scheduledTiming",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Timing"
      }],
      "mustSupport" : true
    },
    {
      "id" : "CarePlan.activity.detail.description",
      "path" : "CarePlan.activity.detail.description",
      "min" : 1,
      "mustSupport" : true
    }]
  }
}

```
