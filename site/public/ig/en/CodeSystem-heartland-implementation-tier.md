# HEARTLAND Implementation Tier - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Implementation Tier**

## CodeSystem: HEARTLAND Implementation Tier (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/CodeSystem/heartland-implementation-tier | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandImplementationTier |
| **Copyright/Legal**: CC-BY 4.0 | |

 
Declared facility implementation capacity tiers, retaining historical code identities. Capacity informs delivery format, sequence and support; it does not determine clinical eligibility, permit delayed risk-led care or exclude educational domains. All eight domains are offered at every tier. These labels are not a scored readiness instrument or proof of actual coverage. 

This Code system is referenced in the definition of the following value sets:

* [HEARTLAND Implementation Tier Value Set](ValueSet-heartland-implementation-tier-vs.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "heartland-implementation-tier",
  "url" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-implementation-tier",
  "version" : "0.3.0",
  "name" : "HeartlandImplementationTier",
  "title" : "HEARTLAND Implementation Tier",
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
  "description" : "Declared facility implementation capacity tiers, retaining historical code identities. Capacity informs delivery format, sequence and support; it does not determine clinical eligibility, permit delayed risk-led care or exclude educational domains. All eight domains are offered at every tier. These labels are not a scored readiness instrument or proof of actual coverage.",
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
    "code" : "tier-1-minimal",
    "display" : "Tier 1 - Minimal",
    "definition" : "Resource-constrained capacity. Adapt format, sequence and support; document gaps, named coverage, alternatives and escalation without omitting required care or relevant education."
  },
  {
    "code" : "tier-2-standard",
    "display" : "Tier 2 - Standard",
    "definition" : "Intermediate implementation capacity with locally documented staffing, monitoring routes and navigation support. Capacity alone does not establish treatment sequence or deadlines."
  },
  {
    "code" : "tier-3-advanced",
    "display" : "Tier 3 - Advanced",
    "definition" : "Expanded implementation capacity, potentially including multidisciplinary and digital support. The label alone does not prove availability, coverage, patient access or better outcomes."
  }]
}

```
