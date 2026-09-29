# HEARTLAND Risk Input Questionnaire - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Risk Input Questionnaire**

## Questionnaire: HEARTLAND Risk Input Questionnaire (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandRiskInputQuestionnaire |

 
Ten weighted criteria scoring 0-18 points when all Boolean answers are present; tier cutoffs: low 0-4, moderate 5-8, high >=9. 

*  [Tree view](#tabs-tree) 
*  [Sample Rendering](#tabs-sample) 
*  [Form Logic](#tabs-logic) 

### Test this Questionnaire

### Responses for this Questionnaire

There are currently no QuestionnaireResponse instances for this Questionnaire defined in this IG.



## Resource Content

```json
{
  "resourceType" : "Questionnaire",
  "id" : "heartland-risk-input-questionnaire",
  "url" : "https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire",
  "version" : "0.3.0",
  "name" : "HeartlandRiskInputQuestionnaire",
  "title" : "HEARTLAND Risk Input Questionnaire",
  "status" : "draft",
  "experimental" : true,
  "subjectType" : ["Patient"],
  "date" : "2026-09-29",
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
  "description" : "Ten weighted criteria scoring 0-18 points when all Boolean answers are present; tier cutoffs: low 0-4, moderate 5-8, high >=9.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "purpose" : "Draft structured capture for educational and synthetic interoperability testing; no clinical validation or automatic missing-data adjudication.",
  "item" : [{
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 2
    }],
    "linkId" : "age-75",
    "text" : "Age >=75 years",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 3
    }],
    "linkId" : "hf-hosp-6mo",
    "text" : "Prior heart failure hospitalization within 6 months",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 2
    }],
    "linkId" : "egfr-low",
    "text" : "eGFR <45 mL/min/1.73m^2",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 2
    }],
    "linkId" : "natriuretic-high",
    "text" : "BNP >=500 pg/mL or NT-proBNP >=1500 pg/mL",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 2
    }],
    "linkId" : "sbp-low",
    "text" : "Systolic BP <100 mmHg at admission",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 1
    }],
    "linkId" : "diabetes",
    "text" : "Diabetes mellitus",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 2
    }],
    "linkId" : "lvef-low",
    "text" : "LVEF <30%",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 2
    }],
    "linkId" : "ckm-stage",
    "text" : "Cardiovascular-kidney-metabolic (CKM) Stage 3 or 4",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 1
    }],
    "linkId" : "distance-far",
    "text" : "Distance to cardiology care >50 miles",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-true-points",
      "valueInteger" : 1
    }],
    "linkId" : "social-support",
    "text" : "Lives alone or limited social support",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  }]
}

```
