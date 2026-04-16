# HEARTLAND Facility Tier Questionnaire - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Facility Tier Questionnaire**

## Questionnaire: HEARTLAND Facility Tier Questionnaire 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/Questionnaire/heartland-facility-tier-questionnaire | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandFacilityTierQuestionnaire |

 
Facility self-assessment for HEARTLAND implementation tier (1/2/3). Qualitative scoring; see narrative for tier mapping. 

 
Help heart failure programs identify the HEARTLAND implementation tier their site can sustainably operate at, given current staffing, technology, and resources. 



## Resource Content

```json
{
  "resourceType" : "Questionnaire",
  "id" : "heartland-facility-tier-questionnaire",
  "url" : "https://fhir.heartlandprotocol.org/Questionnaire/heartland-facility-tier-questionnaire",
  "version" : "0.1.0",
  "name" : "HeartlandFacilityTierQuestionnaire",
  "title" : "HEARTLAND Facility Tier Questionnaire",
  "status" : "active",
  "experimental" : false,
  "subjectType" : ["Location", "Organization"],
  "date" : "2026-04-16",
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
  "description" : "Facility self-assessment for HEARTLAND implementation tier (1/2/3). Qualitative scoring; see narrative for tier mapping.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "purpose" : "Help heart failure programs identify the HEARTLAND implementation tier their site can sustainably operate at, given current staffing, technology, and resources.",
  "item" : [{
    "linkId" : "staffing-level",
    "text" : "Which staffing model is available for heart failure care at your facility?",
    "type" : "choice",
    "required" : true,
    "answerOption" : [{
      "valueString" : "RN/MA + MD only (minimal)"
    },
    {
      "valueString" : "RN champion + PharmD (standard)"
    },
    {
      "valueString" : "Full multidisciplinary team (RN, PharmD, social worker, CHW) (advanced)"
    }]
  },
  {
    "linkId" : "pharmd-available",
    "text" : "Is a PharmD available on-site or by consult to support GDMT titration?",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "chw-program",
    "text" : "What level of community health worker (CHW) program does your facility have?",
    "type" : "choice",
    "required" : true,
    "answerOption" : [{
      "valueString" : "None (rely on family or alternative)"
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
    "answerOption" : [{
      "valueString" : "Generic Bridge pathway only (low-cost generics)"
    },
    {
      "valueString" : "Patient assistance program (PAP) pursuit plus Generic Bridge"
    }]
  }]
}

```
