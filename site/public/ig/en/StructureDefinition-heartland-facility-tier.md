# HEARTLAND Facility Implementation Tier - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Facility Implementation Tier**

## Extension: HEARTLAND Facility Implementation Tier (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandFacilityTier |

Records the declared implementation capacity tier (1 Minimal, 2 Standard, 3 Advanced) for a facility, organization or care plan. Tier guides delivery format, sequence and support; it does not authorize reduced clinical requirements, delayed risk-led follow-up or exclusion of an educational domain. A recorded tier is not validated readiness, staffing coverage or an automatic assignment.

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [HEARTLAND Care Plan](StructureDefinition-heartland-careplan.md)
* Examples for this Extension: [CarePlan/CarePlanExampleTier2](CarePlan-CarePlanExampleTier2.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/heartland.fhir.us.protocol|current/StructureDefinition/StructureDefinition-heartland-facility-tier.json)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-heartland-facility-tier.csv), [Excel](../StructureDefinition-heartland-facility-tier.xlsx), [Schematron](../StructureDefinition-heartland-facility-tier.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-facility-tier",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier",
  "version" : "0.3.0",
  "name" : "HeartlandFacilityTier",
  "title" : "HEARTLAND Facility Implementation Tier",
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
  "description" : "Records the declared implementation capacity tier (1 Minimal, 2 Standard, 3 Advanced) for a facility, organization or care plan. Tier guides delivery format, sequence and support; it does not authorize reduced clinical requirements, delayed risk-led follow-up or exclusion of an educational domain. A recorded tier is not validated readiness, staffing coverage or an automatic assignment.",
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
      "definition" : "Records the declared implementation capacity tier (1 Minimal, 2 Standard, 3 Advanced) for a facility, organization or care plan. Tier guides delivery format, sequence and support; it does not authorize reduced clinical requirements, delayed risk-led follow-up or exclusion of an educational domain. A recorded tier is not validated readiness, staffing coverage or an automatic assignment."
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
