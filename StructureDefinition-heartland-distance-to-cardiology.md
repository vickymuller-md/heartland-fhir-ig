# HEARTLAND Distance to Cardiology - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Distance to Cardiology**

## Extension: HEARTLAND Distance to Cardiology 

| | |
| :--- | :--- |
| *Official URL*:https://heartlandprotocol.org/fhir/StructureDefinition/heartland-distance-to-cardiology | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandDistanceToCardiology |

Driving distance in miles from the patient's residence to the nearest cardiologist. Used by the HEARTLAND risk score: distance >50 miles contributes 1 point. Rural counties without a cardiologist average 87 miles to nearest cardiology care vs 16 miles in counties with one (HEARTLAND Protocol v3.2, Module 2).

**Context of Use**

**Usage info**

**Usos:**

* Usa este Extensão: [HEARTLAND Patient](StructureDefinition-heartland-patient.md)
* Exemplos para este Extensão: [Patient/PatientExampleRural](Patient-PatientExampleRural.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-distance-to-cardiology)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-distance-to-cardiology.csv), [Excel](StructureDefinition-heartland-distance-to-cardiology.xlsx), [Schematron](StructureDefinition-heartland-distance-to-cardiology.sch) 

#### Terminologia Ligações

#### Restrições



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-distance-to-cardiology",
  "url" : "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-distance-to-cardiology",
  "version" : "0.1.0",
  "name" : "HeartlandDistanceToCardiology",
  "title" : "HEARTLAND Distance to Cardiology",
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
  "description" : "Driving distance in miles from the patient's residence to the nearest cardiologist. Used by the HEARTLAND risk score: distance >50 miles contributes 1 point. Rural counties without a cardiologist average 87 miles to nearest cardiology care vs 16 miles in counties with one (HEARTLAND Protocol v3.2, Module 2).",
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
    "expression" : "Patient"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "HEARTLAND Distance to Cardiology",
      "definition" : "Driving distance in miles from the patient's residence to the nearest cardiologist. Used by the HEARTLAND risk score: distance >50 miles contributes 1 point. Rural counties without a cardiologist average 87 miles to nearest cardiology care vs 16 miles in counties with one (HEARTLAND Protocol v3.2, Module 2)."
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-distance-to-cardiology"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "Quantity"
      }]
    },
    {
      "id" : "Extension.value[x].value",
      "path" : "Extension.value[x].value",
      "min" : 1
    },
    {
      "id" : "Extension.value[x].unit",
      "path" : "Extension.value[x].unit",
      "min" : 1,
      "patternString" : "mi_us"
    },
    {
      "id" : "Extension.value[x].system",
      "path" : "Extension.value[x].system",
      "min" : 1,
      "patternUri" : "http://unitsofmeasure.org"
    },
    {
      "id" : "Extension.value[x].code",
      "path" : "Extension.value[x].code",
      "min" : 1,
      "patternCode" : "[mi_us]"
    }]
  }
}

```
