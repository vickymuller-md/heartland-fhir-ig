# Example: High-Risk HEARTLAND Risk Assessment - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example: High-Risk HEARTLAND Risk Assessment**

## Example RiskAssessment: Example: High-Risk HEARTLAND Risk Assessment

Perfil: [HEARTLAND Risk Assessment](StructureDefinition-heartland-risk-assessment.md)

**status**: Final

**method**: HEARTLAND Protocol v3.2 Risk Score

**subject**: [Rural Patient Example Female, DoB: 1947-06-15 ( https://heartlandprotocol.org/fhir/sid/example-mrn#EXAMPLE-001)](Patient-PatientExampleRural.md)

**occurrence**: 2026-04-16 14:30:00-0500

**basis**: [Resposta ao questionário '->HEARTLAND Risk Input Questionnaire' sobre '->Rural Patient Example Female, DoB: 1947-06-15 ( https://heartlandprotocol.org/fhir/sid/example-mrn#EXAMPLE-001)'](QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.md)

### Predictions

| | | |
| :--- | :--- | :--- |
| - | **Probability[x]** | **QualitativeRisk** |
| * | 11 | High Risk |

**note**: 

> 

Pragmatic heuristic per HEARTLAND Evidence Level. Intensive monitoring bundle indicated.




## Resource Content

```json
{
  "resourceType" : "RiskAssessment",
  "id" : "RiskAssessmentExampleHigh",
  "meta" : {
    "profile" : ["https://heartlandprotocol.org/fhir/StructureDefinition/heartland-risk-assessment"]
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
    "probabilityDecimal" : 11,
    "qualitativeRisk" : {
      "coding" : [{
        "system" : "https://heartlandprotocol.org/fhir/CodeSystem/heartland-risk-tier",
        "code" : "high",
        "display" : "High Risk"
      }]
    }
  }],
  "note" : [{
    "text" : "Pragmatic heuristic per HEARTLAND Evidence Level. Intensive monitoring bundle indicated."
  }]
}

```
