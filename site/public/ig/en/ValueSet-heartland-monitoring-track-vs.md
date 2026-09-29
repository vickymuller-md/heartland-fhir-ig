# HEARTLAND Monitoring Track Value Set - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Monitoring Track Value Set**

## ValueSet: HEARTLAND Monitoring Track Value Set (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-track-vs | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandMonitoringTrackVS |

 

| | |
| :--- | :--- |
| All remote monitoring track codes (digital-track-a | analog-track-b). |

 

 **References** 

* [HEARTLAND Monitoring Track Assignment](StructureDefinition-heartland-monitoring-track-ext.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "heartland-monitoring-track-vs",
  "url" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-track-vs",
  "version" : "0.3.0",
  "name" : "HeartlandMonitoringTrackVS",
  "title" : "HEARTLAND Monitoring Track Value Set",
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
  "description" : "All remote monitoring track codes (digital-track-a | analog-track-b).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-monitoring-track"
    }]
  }
}

```
