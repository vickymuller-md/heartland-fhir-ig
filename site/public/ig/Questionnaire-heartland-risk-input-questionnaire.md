# HEARTLAND Risk Input Questionnaire - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Risk Input Questionnaire**

## Questionnaire: HEARTLAND Risk Input Questionnaire 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandRiskInputQuestionnaire |

 
Ten yes/no items scoring 0-18 points; tier cutoffs: low 0-4, moderate 5-8, high >=9. 

 
Standardized capture of HEARTLAND risk score inputs to enable interoperable risk stratification across rural and resource-limited US heart failure programs. 



## Resource Content

```json
{
  "resourceType" : "Questionnaire",
  "id" : "heartland-risk-input-questionnaire",
  "url" : "https://fhir.heartlandprotocol.org/Questionnaire/heartland-risk-input-questionnaire",
  "version" : "0.1.0",
  "name" : "HeartlandRiskInputQuestionnaire",
  "title" : "HEARTLAND Risk Input Questionnaire",
  "status" : "active",
  "experimental" : false,
  "subjectType" : ["Patient"],
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
  "description" : "Ten yes/no items scoring 0-18 points; tier cutoffs: low 0-4, moderate 5-8, high >=9.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "purpose" : "Standardized capture of HEARTLAND risk score inputs to enable interoperable risk stratification across rural and resource-limited US heart failure programs.",
  "item" : [{
    "linkId" : "age-75",
    "text" : "Age >=75 years",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "hf-hosp-6mo",
    "text" : "Prior heart failure hospitalization within 6 months",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "egfr-low",
    "text" : "eGFR <45 mL/min/1.73m^2",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "natriuretic-high",
    "text" : "BNP >=500 pg/mL or NT-proBNP >=1500 pg/mL",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "sbp-low",
    "text" : "Systolic BP <100 mmHg at admission",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "diabetes",
    "text" : "Diabetes mellitus",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "lvef-low",
    "text" : "LVEF <30%",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "ckm-stage",
    "text" : "Cardiovascular-kidney-metabolic (CKM) Stage 3 or 4",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "distance-far",
    "text" : "Distance to cardiology care >50 miles",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "social-support",
    "text" : "Lives alone or limited social support",
    "type" : "boolean",
    "required" : true
  }]
}

```
