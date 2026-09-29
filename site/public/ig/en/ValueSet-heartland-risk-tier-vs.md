# HEARTLAND Risk Tier Value Set - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Risk Tier Value Set**

## ValueSet: HEARTLAND Risk Tier Value Set (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/ValueSet/heartland-risk-tier-vs | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandRiskTierVS |

 

| | | |
| :--- | :--- | :--- |
| All risk tier codes from the HEARTLAND risk score (low | moderate | high). |

 

 **References** 

* [HEARTLAND Risk Assessment](StructureDefinition-heartland-risk-assessment.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "heartland-risk-tier-vs",
  "url" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-risk-tier-vs",
  "version" : "0.3.0",
  "name" : "HeartlandRiskTierVS",
  "title" : "HEARTLAND Risk Tier Value Set",
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
  "description" : "All risk tier codes from the HEARTLAND risk score (low | moderate | high).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-tier"
    }]
  }
}

```
