# HEARTLAND Questionnaire Response - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **HEARTLAND Questionnaire Response**

## Resource Profile: HEARTLAND Questionnaire Response 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/StructureDefinition/heartland-questionnaire-response | *Version*:0.1.0 |
| Active as of 2026-04-16 | *Computable Name*:HeartlandQuestionnaireResponse |

 
Captures responses to any HEARTLAND-defined Questionnaire (risk inputs, facility tier self-assessment, or patient track assignment). Used as the basis reference for HeartlandRiskAssessment when the questionnaire is HeartlandRiskInputQuestionnaire. 

**Usos:**

* Exemplos para este Perfil: [QuestionnaireResponse/QuestionnaireResponseExampleRiskInputs](QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/heartland.fhir.us.protocol|current/StructureDefinition/heartland-questionnaire-response)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-heartland-questionnaire-response.csv), [Excel](StructureDefinition-heartland-questionnaire-response.xlsx), [Schematron](StructureDefinition-heartland-questionnaire-response.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "heartland-questionnaire-response",
  "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-questionnaire-response",
  "version" : "0.1.0",
  "name" : "HeartlandQuestionnaireResponse",
  "title" : "HEARTLAND Questionnaire Response",
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
  "description" : "Captures responses to any HEARTLAND-defined Questionnaire (risk inputs, facility tier self-assessment, or patient track assignment). Used as the basis reference for HeartlandRiskAssessment when the questionnaire is HeartlandRiskInputQuestionnaire.",
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
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "QuestionnaireResponse",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "QuestionnaireResponse",
      "path" : "QuestionnaireResponse"
    },
    {
      "id" : "QuestionnaireResponse.questionnaire",
      "path" : "QuestionnaireResponse.questionnaire",
      "short" : "Canonical URL of one of: HeartlandRiskInputQuestionnaire | HeartlandFacilityTierQuestionnaire | HeartlandPatientTrackQuestionnaire",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "QuestionnaireResponse.status",
      "path" : "QuestionnaireResponse.status",
      "mustSupport" : true
    },
    {
      "id" : "QuestionnaireResponse.subject",
      "path" : "QuestionnaireResponse.subject",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "QuestionnaireResponse.authored",
      "path" : "QuestionnaireResponse.authored",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "QuestionnaireResponse.author",
      "path" : "QuestionnaireResponse.author",
      "mustSupport" : true
    },
    {
      "id" : "QuestionnaireResponse.item",
      "path" : "QuestionnaireResponse.item",
      "min" : 1,
      "mustSupport" : true
    }]
  }
}

```
