# HEARTLAND Facility Implementation Tier - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Facility Implementation Tier**

## Extension: HEARTLAND Facility Implementation Tier 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandFacilityTier |

Identifies the HEARTLAND Protocol v3.2 implementation tier (1 Minimal, 2 Standard, 3 Advanced) at which a facility, organization, or care plan operates. Drives which protocol activities (monitoring, GDMT cadence, education, follow-up) are operationally feasible.

**Context of Use**

**Usage info**

**Usos:**

* Usa este Extensão: [HEARTLAND Care Plan](StructureDefinition-heartland-careplan.md)
* Exemplos para este Extensão: [CarePlan/CarePlanExampleTier2](CarePlan-CarePlanExampleTier2.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-facility-tier)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-facility-tier.csv), [Excel](StructureDefinition-heartland-facility-tier.xlsx), [Schematron](StructureDefinition-heartland-facility-tier.sch) 

#### Terminologia Ligações

#### Restrições



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-facility-tier",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier",
  "version" : "0.1.0",
  "name" : "HeartlandFacilityTier",
  "title" : "HEARTLAND Facility Implementation Tier",
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
  "description" : "Identifies the HEARTLAND Protocol v3.2 implementation tier (1 Minimal, 2 Standard, 3 Advanced) at which a facility, organization, or care plan operates. Drives which protocol activities (monitoring, GDMT cadence, education, follow-up) are operationally feasible.",
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
    "expression" : "Location"
  },
  {
    "type" : "element",
    "expression" : "Organization"
  },
  {
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
      "short" : "HEARTLAND Facility Implementation Tier",
      "definition" : "Identifies the HEARTLAND Protocol v3.2 implementation tier (1 Minimal, 2 Standard, 3 Advanced) at which a facility, organization, or care plan operates. Drives which protocol activities (monitoring, GDMT cadence, education, follow-up) are operationally feasible."
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier"
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
        "valueSet" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-implementation-tier-vs"
      }
    }]
  }
}

```
