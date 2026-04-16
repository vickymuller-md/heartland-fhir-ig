# HEARTLAND Risk Tier - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Risk Tier**

## CodeSystem: HEARTLAND Risk Tier 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-tier | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandRiskTier |
| **Copyright/Legal**: CC-BY 4.0 | |

 
Qualitative risk stratification tiers from the HEARTLAND Protocol v3.2 risk score (0-18 points). Used in HeartlandRiskAssessment.prediction.qualitativeRisk. 

 This Code system is referenced in the content logical definition of the following value sets: 

* [HeartlandRiskTierVS](ValueSet-heartland-risk-tier-vs.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "heartland-risk-tier",
  "url" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-tier",
  "version" : "0.1.0",
  "name" : "HeartlandRiskTier",
  "title" : "HEARTLAND Risk Tier",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-04-16T15:20:02-04:00",
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
  "description" : "Qualitative risk stratification tiers from the HEARTLAND Protocol v3.2 risk score (0-18 points). Used in HeartlandRiskAssessment.prediction.qualitativeRisk.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "copyright" : "CC-BY 4.0",
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 3,
  "concept" : [{
    "code" : "low",
    "display" : "Low Risk",
    "definition" : "Low Risk (0-4 points). Standard monitoring per HEARTLAND Protocol v3.2."
  },
  {
    "code" : "moderate",
    "display" : "Moderate Risk",
    "definition" : "Moderate Risk (5-8 points). Enhanced monitoring bundle per HEARTLAND Protocol v3.2."
  },
  {
    "code" : "high",
    "display" : "High Risk",
    "definition" : "High Risk (>=9 points). Intensive monitoring bundle per HEARTLAND Protocol v3.2."
  }]
}

```
