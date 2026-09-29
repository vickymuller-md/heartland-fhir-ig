# HEARTLAND Social Support Score - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Social Support Score**

## Extension: HEARTLAND Social Support Score (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-social-support-score | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandSocialSupportScore |

Boolean indicator of limited social support per the HEARTLAND risk score: true = patient lives alone or has limited social support, contributing 1 point. Perceived social isolation has been independently associated with a 3.74-fold increase in mortality among HF patients (HEARTLAND Protocol v3.2, Module 2).

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [HEARTLAND Patient](StructureDefinition-heartland-patient.md)
* Examples for this Extension: [Patient/PatientExampleRural](Patient-PatientExampleRural.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/heartland.fhir.us.protocol|current/StructureDefinition/StructureDefinition-heartland-social-support-score.json)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-heartland-social-support-score.csv), [Excel](../StructureDefinition-heartland-social-support-score.xlsx), [Schematron](../StructureDefinition-heartland-social-support-score.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-social-support-score",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-social-support-score",
  "version" : "0.3.0",
  "name" : "HeartlandSocialSupportScore",
  "title" : "HEARTLAND Social Support Score",
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
  "description" : "Boolean indicator of limited social support per the HEARTLAND risk score: true = patient lives alone or has limited social support, contributing 1 point. Perceived social isolation has been independently associated with a 3.74-fold increase in mortality among HF patients (HEARTLAND Protocol v3.2, Module 2).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "Patient"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "HEARTLAND Social Support Score",
      "definition" : "Boolean indicator of limited social support per the HEARTLAND risk score: true = patient lives alone or has limited social support, contributing 1 point. Perceived social isolation has been independently associated with a 3.74-fold increase in mortality among HF patients (HEARTLAND Protocol v3.2, Module 2)."
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-social-support-score"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "boolean"
      }]
    }]
  }
}

```
