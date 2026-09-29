# HEARTLAND Risk Score Codes - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Risk Score Codes**

## CodeSystem: HEARTLAND Risk Score Codes (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-score | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandRiskScore |
| **Copyright/Legal**: CC-BY 4.0 | |

 
Codes identifying the HEARTLAND risk score and its tier when either is carried on an Observation rather than on a RiskAssessment — for example an Observation referenced from HeartlandRiskAssessment.basis holding the point total. The score is a non-validated implementation heuristic: the total is a point count, not a probability, and the tier assigns monitoring intensity rather than predicting an outcome. 

This Code system is referenced in the definition of the following value sets:

* This CodeSystem is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "heartland-risk-score",
  "url" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-score",
  "version" : "0.3.0",
  "name" : "HeartlandRiskScore",
  "title" : "HEARTLAND Risk Score Codes",
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
