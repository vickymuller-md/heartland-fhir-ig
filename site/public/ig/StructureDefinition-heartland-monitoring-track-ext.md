# HEARTLAND Monitoring Track Assignment - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Monitoring Track Assignment**

## Extension: HEARTLAND Monitoring Track Assignment 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-monitoring-track-ext | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandMonitoringTrackExtension |

Assigns a CarePlan to either Track A (digital, app-based) or Track B (analog, telephone/paper) per HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms; the choice reflects patient access to technology and facility implementation tier.

**Context of Use**

**Usage info**

**Usos:**

* Usa este Extensão: [HEARTLAND Care Plan](StructureDefinition-heartland-careplan.md)
* Exemplos para este Extensão: [CarePlan/CarePlanExampleTier2](CarePlan-CarePlanExampleTier2.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-monitoring-track-ext)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-monitoring-track-ext.csv), [Excel](StructureDefinition-heartland-monitoring-track-ext.xlsx), [Schematron](StructureDefinition-heartland-monitoring-track-ext.sch) 

#### Terminologia Ligações

#### Restrições



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-monitoring-track-ext",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-monitoring-track-ext",
  "version" : "0.1.0",
  "name" : "HeartlandMonitoringTrackExtension",
  "title" : "HEARTLAND Monitoring Track Assignment",
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
  "description" : "Assigns a CarePlan to either Track A (digital, app-based) or Track B (analog, telephone/paper) per HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms; the choice reflects patient access to technology and facility implementation tier.",
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
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "CarePlan"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "HEARTLAND Monitoring Track Assignment",
      "definition" : "Assigns a CarePlan to either Track A (digital, app-based) or Track B (analog, telephone/paper) per HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms; the choice reflects patient access to technology and facility implementation tier."
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-monitoring-track-ext"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-monitoring-track-vs"
      }
    }]
  }
}

```
