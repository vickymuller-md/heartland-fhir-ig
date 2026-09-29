# HEARTLAND Points for a True Answer - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Points for a True Answer**

## Extension: HEARTLAND Points for a True Answer (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandRiskTruePoints |

Positive weight for an explicitly true Boolean answer to a risk questionnaire item. False contributes zero. Missing or unknown is not false and must not be scored by omission. This extension records a weight, not a validated outcome probability or an executable calculation.

**Context of Use**

**Usage info**

**Usages:**

* Examples for this Extension: [HeartlandRiskInputQuestionnaire](Questionnaire-heartland-risk-input-questionnaire.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/heartland.fhir.us.protocol|current/StructureDefinition/StructureDefinition-heartland-risk-true-points.json)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-heartland-risk-true-points.csv), [Excel](../StructureDefinition-heartland-risk-true-points.xlsx), [Schematron](../StructureDefinition-heartland-risk-true-points.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-risk-true-points",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
  "version" : "0.3.0",
  "name" : "HeartlandRiskTruePoints",
  "title" : "HEARTLAND Points for a True Answer",
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
  "description" : "Positive weight for an explicitly true Boolean answer to a risk questionnaire item. False contributes zero. Missing or unknown is not false and must not be scored by omission. This extension records a weight, not a validated outcome probability or an executable calculation.",
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
    "expression" : "Questionnaire.item"
  }],
  "contextInvariant" : ["type = 'boolean'",
  "extension.where(url = 'https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points').count() = 1"],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "HEARTLAND Points for a True Answer",
      "definition" : "Positive weight for an explicitly true Boolean answer to a risk questionnaire item. False contributes zero. Missing or unknown is not false and must not be scored by omission. This extension records a weight, not a validated outcome probability or an executable calculation.",
      "max" : "1",
      "constraint" : [{
        "key" : "heartland-points-value",
        "severity" : "error",
        "human" : "The weight must have an actual integer value, not only primitive extensions.",
        "expression" : "value.hasValue()",
        "source" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points"
      }]
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "integer"
      }],
      "minValueInteger" : 1,
      "maxValueInteger" : 3
    }]
  }
}

```
