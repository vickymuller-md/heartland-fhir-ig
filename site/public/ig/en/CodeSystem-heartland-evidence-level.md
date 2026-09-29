# HEARTLAND Evidence Level - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Evidence Level**

## CodeSystem: HEARTLAND Evidence Level (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/CodeSystem/heartland-evidence-level | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandEvidenceLevel |
| **Copyright/Legal**: CC-BY 4.0 | |

 
Three-tiered transparency labels distinguishing evidence strength behind HEARTLAND Protocol v3.2 recommendations, helping clinicians calibrate clinical decisions. 

This Code system is referenced in the definition of the following value sets:

* [HEARTLAND Evidence Level Value Set](ValueSet-heartland-evidence-level-vs.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "heartland-evidence-level",
  "url" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-evidence-level",
  "version" : "0.3.0",
  "name" : "HeartlandEvidenceLevel",
  "title" : "HEARTLAND Evidence Level",
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
  "description" : "Three-tiered transparency labels distinguishing evidence strength behind HEARTLAND Protocol v3.2 recommendations, helping clinicians calibrate clinical decisions.",
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
    "code" : "established",
    "display" : "Established Evidence",
    "definition" : "Interventions with strong guideline support, such as SGLT2i for all HF phenotypes endorsed by the 2022 AHA/ACC/HFSA guideline."
  },
  {
    "code" : "emerging",
    "display" : "Emerging Evidence",
    "definition" : "Recent trial findings not yet fully incorporated into guidelines, such as finerenone for HFpEF based on the FINEARTS-HF trial."
  },
  {
    "code" : "pragmatic",
    "display" : "Pragmatic Heuristic",
    "definition" : "Tools developed for clinical utility without formal statistical validation, such as the HEARTLAND Risk Score itself."
  }]
}

```
