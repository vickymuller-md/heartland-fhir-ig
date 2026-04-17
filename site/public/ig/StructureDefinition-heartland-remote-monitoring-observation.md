# HEARTLAND Remote Monitoring Observation - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Remote Monitoring Observation**

## Resource Profile: HEARTLAND Remote Monitoring Observation 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandRemoteMonitoringObservation |

 
Observation captured via the HEARTLAND remote monitoring kit (Module 5): body weight, blood pressure (systolic/diastolic), or oxygen saturation. Red-flag thresholds are encoded via Observation.referenceRange with meaning.text identifying the rule. Default thresholds (HEARTLAND v3.2 standard, configurable per program): weight gain >=2 lb (0.9 kg)/24h or >=5 lb (2.3 kg)/7d; SBP <90 or >180 mmHg; DBP <50 or >110 mmHg; SpO2 <90% on room air. Per the human filter principle, all non-emergency alerts pass through licensed clinician telephone assessment before ED referral. 

**Usos:**

* Exemplos para este Perfil: [Observation/ObservationExampleWeightRedFlag](Observation-ObservationExampleWeightRedFlag.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-remote-monitoring-observation)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-remote-monitoring-observation.csv), [Excel](StructureDefinition-heartland-remote-monitoring-observation.xlsx), [Schematron](StructureDefinition-heartland-remote-monitoring-observation.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-remote-monitoring-observation",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation",
  "version" : "0.1.0",
  "name" : "HeartlandRemoteMonitoringObservation",
  "title" : "HEARTLAND Remote Monitoring Observation",
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
  "description" : "Observation captured via the HEARTLAND remote monitoring kit (Module 5): body weight, blood pressure (systolic/diastolic), or oxygen saturation. Red-flag thresholds are encoded via Observation.referenceRange with meaning.text identifying the rule. Default thresholds (HEARTLAND v3.2 standard, configurable per program): weight gain >=2 lb (0.9 kg)/24h or >=5 lb (2.3 kg)/7d; SBP <90 or >180 mmHg; DBP <50 or >110 mmHg; SpO2 <90% on room air. Per the human filter principle, all non-emergency alerts pass through licensed clinician telephone assessment before ED referral.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation"
    },
    {
      "id" : "Observation.status",
      "path" : "Observation.status",
      "mustSupport" : true
    },
    {
      "id" : "Observation.category",
      "path" : "Observation.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Observation.category:vsCat",
      "path" : "Observation.category",
      "sliceName" : "vsCat",
      "min" : 1,
      "max" : "1",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
          "code" : "vital-signs"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "Observation.code",
      "path" : "Observation.code",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-observation-code-vs"
      }
    },
    {
      "id" : "Observation.subject",
      "path" : "Observation.subject",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient",
        "http://hl7.org/fhir/StructureDefinition/Patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.effective[x]",
      "path" : "Observation.effective[x]",
      "min" : 1,
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Period"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]",
      "path" : "Observation.value[x]",
      "type" : [{
        "code" : "Quantity"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.device",
      "path" : "Observation.device",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Device"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange",
      "path" : "Observation.referenceRange",
      "mustSupport" : true
    },
    {
      "id" : "Observation.referenceRange.text",
      "path" : "Observation.referenceRange.text",
      "mustSupport" : true
    }]
  }
}

```
