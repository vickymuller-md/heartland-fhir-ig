# HEARTLAND Complete Risk Input Response - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Complete Risk Input Response**

## Resource Profile: HEARTLAND Complete Risk Input Response ( Experimental ) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-input-response | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandRiskInputResponse |

 
Complete, flat, explicitly answered Boolean input contract for the candidate risk questionnaire. Link IDs identify the ten weighted criteria; response order must also match the Questionnaire. This profile does not resolve unknown clinical inputs, validate the risk heuristic, or prove a referenced RiskAssessment total. 

**Usages:**

* Examples for this Profile: [QuestionnaireResponse/QuestionnaireResponseExampleRiskInputs](QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/heartland.fhir.us.protocol|current/StructureDefinition/StructureDefinition-heartland-risk-input-response.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-heartland-risk-input-response.csv), [Excel](../StructureDefinition-heartland-risk-input-response.xlsx), [Schematron](../StructureDefinition-heartland-risk-input-response.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-risk-input-response",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-input-response",
  "version" : "0.3.0",
  "name" : "HeartlandRiskInputResponse",
  "title" : "HEARTLAND Complete Risk Input Response",
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
  "description" : "Complete, flat, explicitly answered Boolean input contract for the candidate risk questionnaire. Link IDs identify the ten weighted criteria; response order must also match the Questionnaire. This profile does not resolve unknown clinical inputs, validate the risk heuristic, or prove a referenced RiskAssessment total.",
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
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "QuestionnaireResponse",
  "baseDefinition" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-questionnaire-response",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "QuestionnaireResponse",
      "path" : "QuestionnaireResponse",
      "constraint" : [{
        "key" : "heartland-risk-complete",
        "severity" : "error",
        "human" : "A computable response must be completed or amended. This is not clinical approval.",
        "expression" : "status = 'completed' or status = 'amended'",
        "source" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-input-response"
      }]
    },
    {
      "id" : "QuestionnaireResponse.questionnaire",
      "path" : "QuestionnaireResponse.questionnaire",
      "fixedCanonical" : "https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire|0.3.0"
    },
    {
      "id" : "QuestionnaireResponse.item",
      "path" : "QuestionnaireResponse.item",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "linkId"
        }],
        "ordered" : true,
        "rules" : "closed"
      },
      "min" : 10,
      "max" : "10",
      "constraint" : [{
        "key" : "heartland-risk-value",
        "severity" : "error",
        "human" : "Each risk answer must contain an actual Boolean value, including false; a primitive with only an absent-data extension is not computable.",
        "expression" : "answer.value.hasValue()",
        "source" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-input-response"
      }]
    },
    {
      "id" : "QuestionnaireResponse.item.answer",
      "path" : "QuestionnaireResponse.item.answer",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item.answer.value[x]",
      "path" : "QuestionnaireResponse.item.answer.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "boolean"
      }]
    },
    {
      "id" : "QuestionnaireResponse.item.answer.item",
      "path" : "QuestionnaireResponse.item.answer.item",
      "max" : "0"
    },
    {
      "id" : "QuestionnaireResponse.item.item",
      "path" : "QuestionnaireResponse.item.item",
      "max" : "0"
    },
    {
      "id" : "QuestionnaireResponse.item:age",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "age",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:age.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "age-75"
    },
    {
      "id" : "QuestionnaireResponse.item:hospitalization",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "hospitalization",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:hospitalization.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "hf-hosp-6mo"
    },
    {
      "id" : "QuestionnaireResponse.item:egfr",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "egfr",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:egfr.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "egfr-low"
    },
    {
      "id" : "QuestionnaireResponse.item:natriuretic",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "natriuretic",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:natriuretic.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "natriuretic-high"
    },
    {
      "id" : "QuestionnaireResponse.item:sbp",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "sbp",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:sbp.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "sbp-low"
    },
    {
      "id" : "QuestionnaireResponse.item:diabetes",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "diabetes",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:diabetes.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "diabetes"
    },
    {
      "id" : "QuestionnaireResponse.item:lvef",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "lvef",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:lvef.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "lvef-low"
    },
    {
      "id" : "QuestionnaireResponse.item:ckm",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "ckm",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:ckm.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "ckm-stage"
    },
    {
      "id" : "QuestionnaireResponse.item:distance",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "distance",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:distance.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "distance-far"
    },
    {
      "id" : "QuestionnaireResponse.item:support",
      "path" : "QuestionnaireResponse.item",
      "sliceName" : "support",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "QuestionnaireResponse.item:support.linkId",
      "path" : "QuestionnaireResponse.item.linkId",
      "fixedString" : "social-support"
    }]
  }
}

```
