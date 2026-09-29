# HEARTLAND Synthetic County Identifier - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Synthetic County Identifier**

## Extension: HEARTLAND Synthetic County Identifier (Experimental) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-synthetic-county-code | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandSyntheticCountyCode |

Opaque synthetic identifier emitted by HEARTLAND Synthetic, not an ANSI/FIPS county GEOID, postal code, or evidence of real residence. Preserve the code as supplied; no real-geography lookup or linkage is implied.

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [HEARTLAND Patient](StructureDefinition-heartland-patient.md)
* Examples for this Extension: [Patient/PatientExampleRural](Patient-PatientExampleRural.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/heartland.fhir.us.protocol|current/StructureDefinition/StructureDefinition-heartland-synthetic-county-code.json)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-heartland-synthetic-county-code.csv), [Excel](../StructureDefinition-heartland-synthetic-county-code.xlsx), [Schematron](../StructureDefinition-heartland-synthetic-county-code.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-synthetic-county-code",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-synthetic-county-code",
  "version" : "0.3.0",
  "name" : "HeartlandSyntheticCountyCode",
  "title" : "HEARTLAND Synthetic County Identifier",
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
  "description" : "Opaque synthetic identifier emitted by HEARTLAND Synthetic, not an ANSI/FIPS county GEOID, postal code, or evidence of real residence. Preserve the code as supplied; no real-geography lookup or linkage is implied.",
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
    "expression" : "Patient.address"
  }],
  "contextInvariant" : ["extension.where(url = 'https://fhir.heartlandprotocol.org/StructureDefinition/heartland-synthetic-county-code').count() = 1"],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "HEARTLAND Synthetic County Identifier",
      "definition" : "Opaque synthetic identifier emitted by HEARTLAND Synthetic, not an ANSI/FIPS county GEOID, postal code, or evidence of real residence. Preserve the code as supplied; no real-geography lookup or linkage is implied.",
      "max" : "1",
      "constraint" : [{
        "key" : "heartland-county-value",
        "severity" : "error",
        "human" : "The synthetic identifier must contain actual system and code values.",
        "expression" : "value.system.hasValue() and value.code.hasValue()",
        "source" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-synthetic-county-code"
      }]
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-synthetic-county-code"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "Coding"
      }]
    },
    {
      "id" : "Extension.value[x].system",
      "path" : "Extension.value[x].system",
      "min" : 1,
      "fixedUri" : "https://fhir.heartlandprotocol.org/sid/synthetic-county-code"
    },
    {
      "id" : "Extension.value[x].code",
      "path" : "Extension.value[x].code",
      "min" : 1
    }]
  }
}

```
