# HEARTLAND Implementation Tier - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Implementation Tier**

## CodeSystem: HEARTLAND Implementation Tier 

| | |
| :--- | :--- |
| *Official URL*:https://heartlandprotocol.org/fhir/CodeSystem/heartland-implementation-tier | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandImplementationTier |
| **Copyright/Legal**: CC-BY 4.0 | |

 
Facility implementation tiers from HEARTLAND Protocol v3.2 Module 8. Tiers reflect available resources (staffing, technology, financial navigation) and dictate which protocol components are operationally feasible at a given site. 

 This Code system is referenced in the content logical definition of the following value sets: 

* [HeartlandImplementationTierVS](ValueSet-heartland-implementation-tier-vs.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "heartland-implementation-tier",
  "url" : "https://heartlandprotocol.org/fhir/CodeSystem/heartland-implementation-tier",
  "version" : "0.1.0",
  "name" : "HeartlandImplementationTier",
  "title" : "HEARTLAND Implementation Tier",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-04-16T15:03:58-04:00",
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
  "description" : "Facility implementation tiers from HEARTLAND Protocol v3.2 Module 8. Tiers reflect available resources (staffing, technology, financial navigation) and dictate which protocol components are operationally feasible at a given site.",
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
    "definition" : "Severely constrained settings, such as a small Critical Access Hospital with one to two nurses. Analog monitoring (Track B), condensed education domains, prioritized GDMT initiation."
  },
  {
    "code" : "tier-2-standard",
    "display" : "Tier 2 - Standard",
    "definition" : "Moderate-resource settings, such as a Federally Qualified Health Center (FQHC) or community hospital. Dual-track monitoring (A/B), full education, target all GDMT classes within 14 days."
  },
  {
    "code" : "tier-3-advanced",
    "display" : "Tier 3 - Advanced",
    "definition" : "Well-resourced settings, such as a regional referral center. Track A primary with RPM, full multidisciplinary team, rapid-sequence GDMT initiation."
  }]
}

```
