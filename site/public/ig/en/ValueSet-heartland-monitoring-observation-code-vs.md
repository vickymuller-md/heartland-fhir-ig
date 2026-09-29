# HEARTLAND Monitoring Observation Code Value Set - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Monitoring Observation Code Value Set**

## ValueSet: HEARTLAND Monitoring Observation Code Value Set (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-observation-code-vs | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandMonitoringObservationCodeVS |

 
LOINC codes for the four observations captured by the HEARTLAND remote monitoring kit per Module 5: body weight (digital scale), systolic and diastolic blood pressure (BP monitor), and oxygen saturation (pulse oximeter, when indicated). 

 **References** 

* [HEARTLAND Remote Monitoring Observation](StructureDefinition-heartland-remote-monitoring-observation.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "heartland-monitoring-observation-code-vs",
  "url" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-observation-code-vs",
  "version" : "0.3.0",
  "name" : "HeartlandMonitoringObservationCodeVS",
  "title" : "HEARTLAND Monitoring Observation Code Value Set",
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
  "description" : "LOINC codes for the four observations captured by the HEARTLAND remote monitoring kit per Module 5: body weight (digital scale), systolic and diastolic blood pressure (BP monitor), and oxygen saturation (pulse oximeter, when indicated).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://loinc.org",
      "concept" : [{
        "code" : "29463-7",
        "display" : "Body weight"
      },
      {
        "code" : "8480-6",
        "display" : "Systolic blood pressure"
      },
      {
        "code" : "8462-4",
        "display" : "Diastolic blood pressure"
      },
      {
        "code" : "59408-5",
        "display" : "Oxygen saturation in Arterial blood by Pulse oximetry"
      }]
    }]
  }
}

```
