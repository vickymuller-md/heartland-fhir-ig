# HEARTLAND Monitoring Observation Code Value Set - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Monitoring Observation Code Value Set**

## ValueSet: HEARTLAND Monitoring Observation Code Value Set 

| | |
| :--- | :--- |
| *Official URL*:https://heartlandprotocol.org/fhir/ValueSet/heartland-monitoring-observation-code-vs | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandMonitoringObservationCodeVS |

 
LOINC codes for the four observations captured by the HEARTLAND remote monitoring kit per Module 5: body weight (digital scale), systolic and diastolic blood pressure (BP monitor), and oxygen saturation (pulse oximeter, when indicated). 

 **References** 

* [HEARTLAND Remote Monitoring Observation](StructureDefinition-heartland-remote-monitoring-observation.md)

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
  "id" : "heartland-monitoring-observation-code-vs",
  "url" : "https://heartlandprotocol.org/fhir/ValueSet/heartland-monitoring-observation-code-vs",
  "version" : "0.1.0",
  "name" : "HeartlandMonitoringObservationCodeVS",
  "title" : "HEARTLAND Monitoring Observation Code Value Set",
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
        "code" : "8481-4",
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
