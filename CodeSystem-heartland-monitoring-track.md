# HEARTLAND Monitoring Track - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Monitoring Track**

## CodeSystem: HEARTLAND Monitoring Track 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/CodeSystem/heartland-monitoring-track | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandMonitoringTrack |
| **Copyright/Legal**: CC-BY 4.0 | |

 
Patient-level remote monitoring track assignment from HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms, differing only in data collection method. 

 This Code system is referenced in the content logical definition of the following value sets: 

* [HeartlandMonitoringTrackVS](ValueSet-heartland-monitoring-track-vs.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "heartland-monitoring-track",
  "url" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-monitoring-track",
  "version" : "0.1.0",
  "name" : "HeartlandMonitoringTrack",
  "title" : "HEARTLAND Monitoring Track",
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
  "description" : "Patient-level remote monitoring track assignment from HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms, differing only in data collection method.",
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
    "definition" : "App-based symptom tracking, Bluetooth-enabled devices, automated data transmission."
  },
  {
    "code" : "analog-track-b",
    "display" : "Analog Track B",
    "definition" : "Voice telephone calls, paper symptom diaries, manual data entry by staff."
  }]
}

```
