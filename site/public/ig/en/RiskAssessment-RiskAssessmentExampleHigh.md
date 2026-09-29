# Example: High-Risk HEARTLAND Risk Assessment - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example: High-Risk HEARTLAND Risk Assessment**

## Example RiskAssessment: Example: High-Risk HEARTLAND Risk Assessment

Profile: [HEARTLAND Risk Assessment](StructureDefinition-heartland-risk-assessment.md)

**status**: Final

**method**: HEARTLAND Protocol v3.2 Risk Score

**subject**: [Rural Patient Example Female, DoB: 1947-06-15 ( https://fhir.heartlandprotocol.org/sid/example-mrn#EXAMPLE-001)](Patient-PatientExampleRural.md)

**occurrence**: 2026-04-16 14:30:00-0500

**basis**: [Response to Questionnaire '->HEARTLAND Risk Input Questionnaire' about '->Rural Patient Example Female, DoB: 1947-06-15 ( https://fhir.heartlandprotocol.org/sid/example-mrn#EXAMPLE-001)'](QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.md)

### Predictions

| | | |
| :--- | :--- | :--- |
| - | **Extension** | **QualitativeRisk** |
| * |  | High Risk |

**note**: 

> 

Synthetic educational example of an unvalidated heuristic; not an instruction for patient care.




## Resource Content

```json
{
  "resourceType" : "RiskAssessment",
  "id" : "RiskAssessmentExampleHigh",
  "meta" : {
    "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-assessment"]
  },
  "status" : "final",
  "method" : {
    "text" : "HEARTLAND Protocol v3.2 Risk Score"
  },
  "subject" : {
    "reference" : "Patient/PatientExampleRural"
  },
  "occurrenceDateTime" : "2026-04-16T14:30:00-05:00",
  "basis" : [{
    "reference" : "QuestionnaireResponse/QuestionnaireResponseExampleRiskInputs"
  }],
  "prediction" : [{
    "extension" : [{
      "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-score-total",
      "valueInteger" : 11
    }],
    "qualitativeRisk" : {
      "coding" : [{
        "system" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-risk-tier",
        "code" : "high",
        "display" : "High Risk"
      }]
    }
  }],
  "note" : [{
    "text" : "Synthetic educational example of an unvalidated heuristic; not an instruction for patient care."
  }]
}

```
