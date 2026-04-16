# HEARTLAND Patient - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Patient**

## Resource Profile: HEARTLAND Patient 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandPatient |

 
Patient profile carrying HEARTLAND-specific extensions used by the risk score: distance to cardiology and social support status. Constrains the base FHIR R4 Patient resource for use within HEARTLAND Protocol v3.2 workflows. 

**Usos:**

* Refere a este Perfil: [HEARTLAND Care Plan](StructureDefinition-heartland-careplan.md), [HEARTLAND Remote Monitoring Observation](StructureDefinition-heartland-remote-monitoring-observation.md) and [HEARTLAND Risk Assessment](StructureDefinition-heartland-risk-assessment.md)
* Exemplos para este Perfil: [Patient/PatientExampleRural](Patient-PatientExampleRural.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-patient)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-patient.csv), [Excel](StructureDefinition-heartland-patient.xlsx), [Schematron](StructureDefinition-heartland-patient.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-patient",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient",
  "version" : "0.1.0",
  "name" : "HeartlandPatient",
  "title" : "HEARTLAND Patient",
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
  "description" : "Patient profile carrying HEARTLAND-specific extensions used by the risk score: distance to cardiology and social support status. Constrains the base FHIR R4 Patient resource for use within HEARTLAND Protocol v3.2 workflows.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "loinc",
    "uri" : "http://loinc.org",
    "name" : "LOINC code for the element"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Patient",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Patient",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Patient",
      "path" : "Patient"
    },
    {
      "id" : "Patient.extension",
      "path" : "Patient.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      }
    },
    {
      "id" : "Patient.extension:distanceToCardiology",
      "path" : "Patient.extension",
      "sliceName" : "distanceToCardiology",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-distance-to-cardiology"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Patient.extension:socialSupportScore",
      "path" : "Patient.extension",
      "sliceName" : "socialSupportScore",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-social-support-score"]
      }],
      "mustSupport" : true
    }]
  }
}

```
