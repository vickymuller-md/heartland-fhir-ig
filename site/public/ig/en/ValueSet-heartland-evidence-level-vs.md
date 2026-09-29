# HEARTLAND Evidence Level Value Set - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Evidence Level Value Set**

## ValueSet: HEARTLAND Evidence Level Value Set (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/ValueSet/heartland-evidence-level-vs | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandEvidenceLevelVS |

 

| | | |
| :--- | :--- | :--- |
| All evidence level codes (established | emerging | pragmatic). |

 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "heartland-evidence-level-vs",
  "url" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-evidence-level-vs",
  "version" : "0.3.0",
  "name" : "HeartlandEvidenceLevelVS",
  "title" : "HEARTLAND Evidence Level Value Set",
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
  "description" : "All evidence level codes (established | emerging | pragmatic).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-evidence-level"
    }]
  }
}

```
