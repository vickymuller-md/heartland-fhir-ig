# HEARTLAND Monitoring Access Questionnaire - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Monitoring Access Questionnaire**

## Questionnaire: HEARTLAND Monitoring Access Questionnaire (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/Questionnaire/heartland-patient-track-questionnaire | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandPatientTrackQuestionnaire |

 
Patient-level monitoring access capture, not an automatic Track A/B assignment. Missing information or lack of a smartphone does not establish telephone access. 

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
  "id" : "heartland-patient-track-questionnaire",
  "url" : "https://fhir.heartlandprotocol.org/Questionnaire/heartland-patient-track-questionnaire",
  "version" : "0.3.0",
  "name" : "HeartlandPatientTrackQuestionnaire",
  "title" : "HEARTLAND Monitoring Access Questionnaire",
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
  "description" : "Patient-level monitoring access capture, not an automatic Track A/B assignment. Missing information or lack of a smartphone does not establish telephone access.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "purpose" : "Record three access facts; record patient preference and the shared monitoring-route decision separately. Do not default an unanswered item to false or assign Track B when no supported route is available.",
  "item" : [{
    "linkId" : "smartphone-connectivity",
    "text" : "Smartphone with reliable connectivity?",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "linkId" : "app-comfort",
    "text" : "Comfortable using apps?",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  },
  {
    "linkId" : "telephone-access",
    "text" : "Reliable telephone access?",
    "type" : "boolean",
    "required" : true,
    "repeats" : false
  }]
}

```
