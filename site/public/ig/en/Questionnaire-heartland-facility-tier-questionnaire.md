# HEARTLAND Facility Tier Questionnaire - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Facility Tier Questionnaire**

## Questionnaire: HEARTLAND Facility Tier Questionnaire (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/Questionnaire/heartland-facility-tier-questionnaire | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandFacilityTierQuestionnaire |

 
Descriptive facility capacity capture; it does not score or assign a tier or establish clinical eligibility. All educational domains remain available at every tier. 

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
  "id" : "heartland-facility-tier-questionnaire",
  "url" : "https://fhir.heartlandprotocol.org/Questionnaire/heartland-facility-tier-questionnaire",
  "version" : "0.3.0",
  "name" : "HeartlandFacilityTierQuestionnaire",
  "title" : "HEARTLAND Facility Tier Questionnaire",
  "status" : "draft",
  "experimental" : true,
  "subjectType" : ["Location", "Organization"],
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
  "description" : "Descriptive facility capacity capture; it does not score or assign a tier or establish clinical eligibility. All educational domains remain available at every tier.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "purpose" : "Record selected implementation resources for a locally reviewed plan. No majority-vote tier algorithm, staffing authorization, clinical deadline or education exclusion is derived from these answers. The choices are illustrative and not an exhaustive readiness assessment.",
  "item" : [{
    "linkId" : "staffing-level",
    "text" : "Which staffing model is available for heart failure care at your facility?",
    "type" : "choice",
    "required" : true,
    "repeats" : false,
    "answerOption" : [{
      "valueString" : "RN/MA + MD"
    },
    {
      "valueString" : "RN champion + PharmD"
    },
    {
      "valueString" : "Multidisciplinary team (RN, PharmD, social worker, CHW)"
    }]
  },
  {
    "linkId" : "pharmd-available",
    "text" : "Is a PharmD available on-site or by consult to support GDMT titration?",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "linkId" : "chw-program",
    "text" : "What level of community health worker (CHW) program does your facility have?",
    "type" : "choice",
    "required" : true,
    "repeats" : false,
    "answerOption" : [{
      "valueString" : "No CHW program documented"
    },
    {
      "valueString" : "High-risk patients only"
    },
    {
      "valueString" : "Full integration across all HF patients"
    }]
  },
  {
    "linkId" : "monitoring-tech",
    "text" : "Which remote monitoring capability is available at your facility?",
    "type" : "choice",
    "required" : true,
    "repeats" : false,
    "answerOption" : [{
      "valueString" : "Analog only (telephone, paper diary)"
    },
    {
      "valueString" : "Dual-track (analog and digital available based on patient)"
    },
    {
      "valueString" : "Digital primary plus remote patient monitoring (RPM)"
    }]
  },
  {
    "linkId" : "financial-navigation",
    "text" : "What financial navigation capacity does your facility have for medication access?",
    "type" : "choice",
    "required" : true,
    "repeats" : false,
    "answerOption" : [{
      "valueString" : "Generic Bridge pathway only (low-cost generics)"
    },
    {
      "valueString" : "Patient assistance program (PAP) pursuit plus Generic Bridge"
    }]
  }]
}

```
