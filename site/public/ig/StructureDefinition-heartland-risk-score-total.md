# HEARTLAND Risk Score Total - HEARTLAND Protocol FHIR Implementation Guide v0.2.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Risk Score Total**

## Extension: HEARTLAND Risk Score Total 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-score-total | *Version*:0.2.0 |
| Active as of 2026-09-17 | *Computable Name*:HeartlandRiskScoreTotal |

Total of the HEARTLAND risk score: an integer count of 0 to 18 points summed from ten binary inputs. This is a non-validated implementation heuristic used to assign monitoring intensity; it is a point total, not a probability, not a predicted event rate and not a validated prognostic estimate. It is carried in this extension rather than in RiskAssessment.prediction.probabilityDecimal because that element is defined in FHIR R4 as the likelihood of a specified outcome, expressed as a percentage.

**Context of Use**

**Usage info**

**Usos:**

* Usa este Extensão: [HEARTLAND Risk Assessment](StructureDefinition-heartland-risk-assessment.md)
* Exemplos para este Extensão: [RiskAssessment/RiskAssessmentExampleHigh](RiskAssessment-RiskAssessmentExampleHigh.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-risk-score-total)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-risk-score-total.csv), [Excel](StructureDefinition-heartland-risk-score-total.xlsx), [Schematron](StructureDefinition-heartland-risk-score-total.sch) 

#### Restrições



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-risk-score-total",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-score-total",
  "version" : "0.2.0",
  "name" : "HeartlandRiskScoreTotal",
  "title" : "HEARTLAND Risk Score Total",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-09-17T14:11:14-04:00",
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
  "description" : "Total of the HEARTLAND risk score: an integer count of 0 to 18 points summed from ten binary inputs. This is a non-validated implementation heuristic used to assign monitoring intensity; it is a point total, not a probability, not a predicted event rate and not a validated prognostic estimate. It is carried in this extension rather than in RiskAssessment.prediction.probabilityDecimal because that element is defined in FHIR R4 as the likelihood of a specified outcome, expressed as a percentage.",
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
    "expression" : "RiskAssessment.prediction"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "HEARTLAND Risk Score Total",
      "definition" : "Total of the HEARTLAND risk score: an integer count of 0 to 18 points summed from ten binary inputs. This is a non-validated implementation heuristic used to assign monitoring intensity; it is a point total, not a probability, not a predicted event rate and not a validated prognostic estimate. It is carried in this extension rather than in RiskAssessment.prediction.probabilityDecimal because that element is defined in FHIR R4 as the likelihood of a specified outcome, expressed as a percentage."
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-score-total"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "short" : "HEARTLAND risk score point total (0-18), a heuristic count and not a probability",
      "min" : 1,
      "type" : [{
        "code" : "integer"
      }],
      "minValueInteger" : 0,
      "maxValueInteger" : 18
    }]
  }
}

```
