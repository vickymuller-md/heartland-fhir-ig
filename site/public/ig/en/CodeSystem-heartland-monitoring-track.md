# HEARTLAND Monitoring Track - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Monitoring Track**

## CodeSystem: HEARTLAND Monitoring Track (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/CodeSystem/heartland-monitoring-track | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandMonitoringTrack |
| **Copyright/Legal**: CC-BY 4.0 | |

 
Documented monitoring routes with stable Track A and Track B codes. A route does not establish equivalent outcomes, successful contact, device availability or completed monitoring. Clinical requirements are not reduced by the route; access, preference and the supported local plan require separate documentation. 

This Code system is referenced in the definition of the following value sets:

* [HEARTLAND Monitoring Track Value Set](ValueSet-heartland-monitoring-track-vs.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "heartland-monitoring-track",
  "url" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-monitoring-track",
  "version" : "0.3.0",
  "name" : "HeartlandMonitoringTrack",
  "title" : "HEARTLAND Monitoring Track",
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
  "description" : "Documented monitoring routes with stable Track A and Track B codes. A route does not establish equivalent outcomes, successful contact, device availability or completed monitoring. Clinical requirements are not reduced by the route; access, preference and the supported local plan require separate documentation.",
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
    "code" : "digital-track-a",
    "display" : "Digital Track A",
    "definition" : "A planned digital route, such as app-based entries. This code alone does not assert Bluetooth devices, automatic transmission or reliable connectivity."
  },
  {
    "code" : "analog-track-b",
    "display" : "Analog Track B",
    "definition" : "A planned analog route, such as telephone contact and a paper diary. This code alone does not assert telephone access, staff entry, successful contact or review."
  }]
}

```
