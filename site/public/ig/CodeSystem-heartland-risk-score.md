# HEARTLAND Risk Score Codes - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Risk Score Codes**

## CodeSystem: HEARTLAND Risk Score Codes 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-score | *Version*:0.1.0 |
| Active as of 2026-09-17 | *Computable Name*:HeartlandRiskScore |
| **Copyright/Legal**: CC-BY 4.0 | |

 
Codes identifying the HEARTLAND risk score and its tier when either is carried on an Observation rather than on a RiskAssessment — for example an Observation referenced from HeartlandRiskAssessment.basis holding the point total. The score is a non-validated implementation heuristic: the total is a point count, not a probability, and the tier assigns monitoring intensity rather than predicting an outcome. 

 This Code system is referenced in the content logical definition of the following value sets: 

* Este CodeSystem não é utilizado aqui; pode ser utilizado noutro local (por exemplo, em especificações e/ou implementações que utilizem este conteúdo)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "heartland-risk-score",
  "url" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-score",
  "version" : "0.1.0",
  "name" : "HeartlandRiskScore",
  "title" : "HEARTLAND Risk Score Codes",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-09-17T14:02:25-04:00",
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
  "description" : "Codes identifying the HEARTLAND risk score and its tier when either is carried on an Observation rather than on a RiskAssessment — for example an Observation referenced from HeartlandRiskAssessment.basis holding the point total. The score is a non-validated implementation heuristic: the total is a point count, not a probability, and the tier assigns monitoring intensity rather than predicting an outcome.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "copyright" : "CC-BY 4.0",
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 2,
  "concept" : [{
    "code" : "heartland-risk-score",
    "display" : "HEARTLAND Risk Score",
    "definition" : "Total of the HEARTLAND risk score, 0 to 18 points. Carried as Observation.valueInteger. A heuristic point count, not a probability."
  },
  {
    "code" : "heartland-risk-tier",
    "display" : "HEARTLAND Risk Tier",
    "definition" : "Qualitative tier derived from the total. Carried as a CodeableConcept drawn from the HeartlandRiskTier code system, typically as an Observation component of the score."
  }]
}

```
