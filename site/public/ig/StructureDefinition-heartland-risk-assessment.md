# HEARTLAND Risk Assessment - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Risk Assessment**

## Resource Profile: HEARTLAND Risk Assessment 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-assessment | *Version*:0.1.0 |
| Active as of 2026-09-17 | *Computable Name*:HeartlandRiskAssessment |

 
Heart failure risk stratification per the HEARTLAND Protocol v3.2 risk score. The score sums up to 18 points across 10 binary inputs and maps to three qualitative tiers: low (0-4), moderate (5-8), high (>=9). It is a non-validated implementation heuristic that assigns monitoring intensity; it does not predict an outcome and has not been validated against outcome data. The basis SHALL reference a HeartlandRiskInputQuestionnaire QuestionnaireResponse capturing the 10 input variables, or an Observation carrying the point total. The tier travels in prediction.qualitativeRisk and the point total in the heartland-risk-score-total extension; probability[x] is prohibited, because a point count is not a likelihood of an outcome. 

**Usos:**

* Exemplos para este Perfil: [RiskAssessment/RiskAssessmentExampleHigh](RiskAssessment-RiskAssessmentExampleHigh.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-risk-assessment)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-risk-assessment.csv), [Excel](StructureDefinition-heartland-risk-assessment.xlsx), [Schematron](StructureDefinition-heartland-risk-assessment.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-risk-assessment",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-assessment",
  "version" : "0.1.0",
  "name" : "HeartlandRiskAssessment",
  "title" : "HEARTLAND Risk Assessment",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-09-17T14:02:25-04:00",
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
  "description" : "Heart failure risk stratification per the HEARTLAND Protocol v3.2 risk score. The score sums up to 18 points across 10 binary inputs and maps to three qualitative tiers: low (0-4), moderate (5-8), high (>=9). It is a non-validated implementation heuristic that assigns monitoring intensity; it does not predict an outcome and has not been validated against outcome data. The basis SHALL reference a HeartlandRiskInputQuestionnaire QuestionnaireResponse capturing the 10 input variables, or an Observation carrying the point total. The tier travels in prediction.qualitativeRisk and the point total in the heartland-risk-score-total extension; probability[x] is prohibited, because a point count is not a likelihood of an outcome.",
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
    "identity" : "openehr",
    "uri" : "http://openehr.org",
    "name" : "Open EHR Archetype Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "RiskAssessment",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/RiskAssessment",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "RiskAssessment",
      "path" : "RiskAssessment"
    },
    {
      "id" : "RiskAssessment.status",
      "path" : "RiskAssessment.status",
      "mustSupport" : true
    },
    {
      "id" : "RiskAssessment.method",
      "path" : "RiskAssessment.method",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RiskAssessment.method.text",
      "path" : "RiskAssessment.method.text",
      "min" : 1,
      "patternString" : "HEARTLAND Protocol v3.2 Risk Score"
    },
    {
      "id" : "RiskAssessment.subject",
      "path" : "RiskAssessment.subject",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient",
        "http://hl7.org/fhir/StructureDefinition/Patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RiskAssessment.basis",
      "path" : "RiskAssessment.basis",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
        "http://hl7.org/fhir/StructureDefinition/Observation"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RiskAssessment.prediction",
      "path" : "RiskAssessment.prediction",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "RiskAssessment.prediction.extension",
      "path" : "RiskAssessment.prediction.extension",
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
      "id" : "RiskAssessment.prediction.extension:scoreTotal",
      "path" : "RiskAssessment.prediction.extension",
      "sliceName" : "scoreTotal",
      "short" : "Total HEARTLAND risk score (0-18 heuristic points, not a probability)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-score-total"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RiskAssessment.prediction.probability[x]",
      "path" : "RiskAssessment.prediction.probability[x]",
      "max" : "0"
    },
    {
      "id" : "RiskAssessment.prediction.qualitativeRisk",
      "path" : "RiskAssessment.prediction.qualitativeRisk",
      "min" : 1,
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.heartlandprotocol.org/ValueSet/heartland-risk-tier-vs"
      }
    }]
  }
}

```
