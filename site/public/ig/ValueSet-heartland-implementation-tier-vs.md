# HEARTLAND Implementation Tier Value Set - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Implementation Tier Value Set**

## ValueSet: HEARTLAND Implementation Tier Value Set 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/ValueSet/heartland-implementation-tier-vs | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandImplementationTierVS |

 

| | | |
| :--- | :--- | :--- |
| All facility implementation tier codes (tier-1-minimal | tier-2-standard | tier-3-advanced). |

 

 **References** 

* [HEARTLAND Facility Implementation Tier](StructureDefinition-heartland-facility-tier.md)

### Logical Definition (CLD)

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "heartland-implementation-tier-vs",
  "url" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-implementation-tier-vs",
  "version" : "0.1.0",
  "name" : "HeartlandImplementationTierVS",
  "title" : "HEARTLAND Implementation Tier Value Set",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-04-16T20:13:50-04:00",
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
  "description" : "All facility implementation tier codes (tier-1-minimal | tier-2-standard | tier-3-advanced).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-implementation-tier"
    }]
  }
}

```
