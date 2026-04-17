# HEARTLAND Care Plan - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Care Plan**

## Resource Profile: HEARTLAND Care Plan 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-careplan | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandCarePlan |

 
Heart failure care plan structured per HEARTLAND Protocol v3.2. Activities are organized around five domains: GDMT initiation/titration, remote monitoring schedule, post-discharge follow-up (calls and visits), discharge education (3 condensed or 8 comprehensive domains), and patient assistance navigation. Two extensions identify the facility implementation tier and the assigned monitoring track (A digital / B analog). 

**Usos:**

* Exemplos para este Perfil: [CarePlan/CarePlanExampleTier2](CarePlan-CarePlanExampleTier2.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-careplan)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-careplan.csv), [Excel](StructureDefinition-heartland-careplan.xlsx), [Schematron](StructureDefinition-heartland-careplan.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-careplan",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-careplan",
  "version" : "0.1.0",
  "name" : "HeartlandCarePlan",
  "title" : "HEARTLAND Care Plan",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-04-16T20:13:50-04:00",
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
  "description" : "Heart failure care plan structured per HEARTLAND Protocol v3.2. Activities are organized around five domains: GDMT initiation/titration, remote monitoring schedule, post-discharge follow-up (calls and visits), discharge education (3 condensed or 8 comprehensive domains), and patient assistance navigation. Two extensions identify the facility implementation tier and the assigned monitoring track (A digital / B analog).",
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
