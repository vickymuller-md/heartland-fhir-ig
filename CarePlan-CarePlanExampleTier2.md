# Example: Tier 2 Care Plan with Track B Monitoring - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example: Tier 2 Care Plan with Track B Monitoring**

## Example CarePlan: Example: Tier 2 Care Plan with Track B Monitoring

Perfil: [HEARTLAND Care Plan](StructureDefinition-heartland-careplan.md)

**HEARTLAND Facility Implementation Tier**: Tier 2 - Standard

**HEARTLAND Monitoring Track Assignment**: Analog Track B

**status**: Active

**intent**: Plan

**subject**: [Rural Patient Example Female, DoB: 1947-06-15 ( https://heartlandprotocol.org/fhir/sid/example-mrn#EXAMPLE-001)](Patient-PatientExampleRural.md)

**period**: 2026-04-16 --> 2026-07-16

> **activity**

### Details

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Status** | **Scheduled[x]** | **Description** |
| * | Not Started | Uma vez | Initiate all 4 GDMT classes (ARNI/ACEi/ARB, beta-blocker, MRA, SGLT2i) within 14 days per Tier 2 protocol. Prioritize SGLT2i and beta-blocker first if simultaneous initiation not feasible. |


> **activity**

### Details

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Status** | **Scheduled[x]** | **Description** |
| * | Scheduled | Uma vez | Post-discharge contact within 48 hours by RN champion. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Scheduled | 7-day in-person follow-up visit at FQHC for vitals, medication reconciliation, and GDMT titration. |


> **activity**

### Details

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Status** | **Scheduled[x]** | **Description** |
| * | Scheduled | Contagem 4 times, Uma vez por 1 week | Weekly follow-up phone calls x 4 weeks (Track B analog) capturing weight, blood pressure, oxygen saturation, and symptom assessment. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Scheduled | Full discharge teach-back covering 8 AHA-aligned domains: (1) daily weight monitoring, (2) sodium and fluid restriction (<=2 g/day Na, 1.5-2 L fluid), (3) medication adherence and timing, (4) symptom recognition (red flags), (5) activity and exercise progression, (6) when to call provider vs ED, (7) follow-up appointment plan, (8) self-care between visits. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Scheduled | Patient assistance program (PAP) pursuit + Generic Bridge for medication access. Generic therapy is superior to no therapy; never delay treatment while waiting for paperwork. |


**note**: 

> 

Tier 2 protocol: full implementation over 12 months with phased rollout. Quality metrics: dose optimization and 30-day readmission reduction.




## Resource Content

```json
{
  "resourceType" : "CarePlan",
  "id" : "CarePlanExampleTier2",
  "meta" : {
    "profile" : ["https://heartlandprotocol.org/fhir/StructureDefinition/heartland-careplan"]
  },
  "extension" : [{
    "url" : "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-facility-tier",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "https://heartlandprotocol.org/fhir/CodeSystem/heartland-implementation-tier",
        "code" : "tier-2-standard",
        "display" : "Tier 2 - Standard"
      }]
    }
  },
  {
    "url" : "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-monitoring-track-ext",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "https://heartlandprotocol.org/fhir/CodeSystem/heartland-monitoring-track",
        "code" : "analog-track-b",
        "display" : "Analog Track B"
      }]
    }
  }],
  "status" : "active",
  "intent" : "plan",
  "subject" : {
    "reference" : "Patient/PatientExampleRural"
  },
  "period" : {
    "start" : "2026-04-16",
    "end" : "2026-07-16"
  },
  "activity" : [{
    "detail" : {
      "status" : "not-started",
      "scheduledTiming" : {
        "repeat" : {
          "boundsPeriod" : {
            "start" : "2026-04-16",
            "end" : "2026-04-30"
          }
        }
      },
      "description" : "Initiate all 4 GDMT classes (ARNI/ACEi/ARB, beta-blocker, MRA, SGLT2i) within 14 days per Tier 2 protocol. Prioritize SGLT2i and beta-blocker first if simultaneous initiation not feasible."
    }
  },
  {
    "detail" : {
      "status" : "scheduled",
      "scheduledTiming" : {
        "repeat" : {
          "boundsPeriod" : {
            "start" : "2026-04-16",
            "end" : "2026-04-18"
          }
        }
      },
      "description" : "Post-discharge contact within 48 hours by RN champion."
    }
  },
  {
    "detail" : {
      "status" : "scheduled",
      "description" : "7-day in-person follow-up visit at FQHC for vitals, medication reconciliation, and GDMT titration."
    }
  },
  {
    "detail" : {
      "status" : "scheduled",
      "scheduledTiming" : {
        "repeat" : {
          "count" : 4,
          "frequency" : 1,
          "period" : 1,
          "periodUnit" : "wk"
        }
      },
      "description" : "Weekly follow-up phone calls x 4 weeks (Track B analog) capturing weight, blood pressure, oxygen saturation, and symptom assessment."
    }
  },
  {
    "detail" : {
      "status" : "scheduled",
      "description" : "Full discharge teach-back covering 8 AHA-aligned domains: (1) daily weight monitoring, (2) sodium and fluid restriction (<=2 g/day Na, 1.5-2 L fluid), (3) medication adherence and timing, (4) symptom recognition (red flags), (5) activity and exercise progression, (6) when to call provider vs ED, (7) follow-up appointment plan, (8) self-care between visits."
    }
  },
  {
    "detail" : {
      "status" : "scheduled",
      "description" : "Patient assistance program (PAP) pursuit + Generic Bridge for medication access. Generic therapy is superior to no therapy; never delay treatment while waiting for paperwork."
    }
  }],
  "note" : [{
    "text" : "Tier 2 protocol: full implementation over 12 months with phased rollout. Quality metrics: dose optimization and 30-day readmission reduction."
  }]
}

```
