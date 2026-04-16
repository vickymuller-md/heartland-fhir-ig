# HEARTLAND Patient Track Assignment Questionnaire - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Patient Track Assignment Questionnaire**

## Questionnaire: HEARTLAND Patient Track Assignment Questionnaire 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/Questionnaire/heartland-patient-track-questionnaire | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandPatientTrackQuestionnaire |

 
Patient-level intake form to assign Track A (digital) vs Track B (analog) remote monitoring per HEARTLAND v3.2 Table 4. 

 
Operationalize the Track A/B/Hybrid assignment so that remote monitoring choice reflects patient access to technology rather than clinical preference. 



## Resource Content

```json
{
  "resourceType" : "Questionnaire",
  "id" : "heartland-patient-track-questionnaire",
  "url" : "https://fhir.heartlandprotocol.org/Questionnaire/heartland-patient-track-questionnaire",
  "version" : "0.1.0",
  "name" : "HeartlandPatientTrackQuestionnaire",
  "title" : "HEARTLAND Patient Track Assignment Questionnaire",
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
  "description" : "Patient-level intake form to assign Track A (digital) vs Track B (analog) remote monitoring per HEARTLAND v3.2 Table 4.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "purpose" : "Operationalize the Track A/B/Hybrid assignment so that remote monitoring choice reflects patient access to technology rather than clinical preference.",
  "item" : [{
    "linkId" : "smartphone-connectivity",
    "text" : "Smartphone with reliable connectivity?",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "app-comfort",
    "text" : "Comfortable using apps?",
    "type" : "boolean",
    "required" : true
  },
  {
    "linkId" : "telephone-access",
    "text" : "Reliable telephone access?",
    "type" : "boolean",
    "required" : true
  }]
}

```
