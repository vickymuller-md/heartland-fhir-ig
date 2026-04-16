# HEARTLAND Monitoring Track Value Set - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Monitoring Track Value Set**

## ValueSet: HEARTLAND Monitoring Track Value Set 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-track-vs | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandMonitoringTrackVS |

 

| | |
| :--- | :--- |
| All remote monitoring track codes (digital-track-a | analog-track-b). |

 

 **References** 

* [HEARTLAND Monitoring Track Assignment](StructureDefinition-heartland-monitoring-track-ext.md)

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
  "id" : "heartland-monitoring-track-vs",
  "url" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-track-vs",
  "version" : "0.1.0",
  "name" : "HeartlandMonitoringTrackVS",
  "title" : "HEARTLAND Monitoring Track Value Set",
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
