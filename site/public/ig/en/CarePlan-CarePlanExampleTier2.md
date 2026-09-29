# Example: Draft Tier 2 Plan with Track B Context - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example: Draft Tier 2 Plan with Track B Context**

## Example CarePlan: Example: Draft Tier 2 Plan with Track B Context

Profile: [HEARTLAND Care Plan](StructureDefinition-heartland-careplan.md)

**HEARTLAND Facility Implementation Tier**: Tier 2 - Standard

**HEARTLAND Monitoring Track Assignment**: Analog Track B

**status**: Draft

**intent**: Plan

**subject**: [Rural Patient Example Female, DoB: 1947-06-15 ( https://fhir.heartlandprotocol.org/sid/example-mrn#EXAMPLE-001)](Patient-PatientExampleRural.md)

> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Medication planning: an authorized professional reviews indications, tolerability, laboratory evidence, access and the individual plan. Facility tier does not prescribe a drug sequence or a universal initiation deadline. No medication order is represented here. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Follow-up planning: document the risk-led timing, responsible professional, named backup, supported route and escalation for unavailable coverage. No appointment, contact or response-time guarantee is asserted. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Monitoring planning: confirm telephone access and patient preference for the illustrative Track B route; document an alternative and unresolved access gap when necessary. A paper diary or attempted call does not establish review. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Examination follow-up planning: retain request, access, actual collection, result version, professional review, decision, communication and closure evidence as distinct records. This plan does not transmit an order or attest that any stage occurred. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Referral planning: identify the need, destination and accountable professional, then record acceptance, attendance, report, review and communication separately. An offered transfer is not accepted responsibility or a completed consultation. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Medication-access planning: document barriers, assistance options and the prescriber's individualized plan. Assistance application or approval is not medication obtained, adherence or therapeutic equivalence. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Education — Daily Weight: plan teaching and professional teach-back about the patient's written monitoring and contact instructions; do not infer completion from an entry. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Education — Medications: plan teaching and professional teach-back about the individualized medication plan and barriers; no dose or therapy change is ordered by this example. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Education — Warning Signs: plan teaching and professional teach-back about the written warning-sign and emergency instructions; a displayed message does not establish understanding. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Education — Understanding Heart Failure: offer an explanation suited to the patient's language and needs, with professional teach-back recorded separately. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Education — Sodium: use the individual's documented dietary guidance; this example does not impose a universal numerical restriction. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Education — Fluids: explain fluid-related symptoms and the individual's written guidance; a fluid restriction is not assumed for every patient. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Education — When to Call: plan teaching and professional teach-back about the written contact and emergency routes, including coverage gaps and supported alternatives. |


> **activity**

### Details

| | | |
| :--- | :--- | :--- |
| - | **Status** | **Description** |
| * | Not Started | Education — Activity Guidance: discuss the individual's activity plan and limitations; no universal exercise prescription or completed instruction is asserted. |


**note**: , 

> 

Offer all eight domains at every tier; tier can change format, sequence and support, not exclude a clinically relevant domain. Patient self-assessment is not professional teach-back. Domain states pending, completed, deferred and not applicable belong to separate education records; deferred or not applicable requires a written reason and named authorized decision-maker. The denominator is the applicable domain set. No education state is inferred from these not-started planned activities.


> 

Synthetic educational implementation-support example only. No named professional, clinical approval, care delivery, validated safe waiting interval, clinical outcome or operational export is claimed. Preserve historical example versions rather than rewriting records previously exchanged.




## Resource Content

```json
{
  "resourceType" : "CarePlan",
  "id" : "CarePlanExampleTier2",
  "meta" : {
    "profile" : ["https://fhir.heartlandprotocol.org/StructureDefinition/heartland-careplan"]
  },
  "extension" : [{
    "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-facility-tier",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-implementation-tier",
        "code" : "tier-2-standard",
        "display" : "Tier 2 - Standard"
      }]
    }
  },
  {
    "url" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-monitoring-track-ext",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "https://fhir.heartlandprotocol.org/CodeSystem/heartland-monitoring-track",
        "code" : "analog-track-b",
        "display" : "Analog Track B"
      }]
    }
  }],
  "status" : "draft",
  "intent" : "plan",
  "subject" : {
    "reference" : "Patient/PatientExampleRural"
  },
  "activity" : [{
    "detail" : {
      "status" : "not-started",
      "description" : "Medication planning: an authorized professional reviews indications, tolerability, laboratory evidence, access and the individual plan. Facility tier does not prescribe a drug sequence or a universal initiation deadline. No medication order is represented here."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Follow-up planning: document the risk-led timing, responsible professional, named backup, supported route and escalation for unavailable coverage. No appointment, contact or response-time guarantee is asserted."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Monitoring planning: confirm telephone access and patient preference for the illustrative Track B route; document an alternative and unresolved access gap when necessary. A paper diary or attempted call does not establish review."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Examination follow-up planning: retain request, access, actual collection, result version, professional review, decision, communication and closure evidence as distinct records. This plan does not transmit an order or attest that any stage occurred."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Referral planning: identify the need, destination and accountable professional, then record acceptance, attendance, report, review and communication separately. An offered transfer is not accepted responsibility or a completed consultation."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Medication-access planning: document barriers, assistance options and the prescriber's individualized plan. Assistance application or approval is not medication obtained, adherence or therapeutic equivalence."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Education — Daily Weight: plan teaching and professional teach-back about the patient's written monitoring and contact instructions; do not infer completion from an entry."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Education — Medications: plan teaching and professional teach-back about the individualized medication plan and barriers; no dose or therapy change is ordered by this example."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Education — Warning Signs: plan teaching and professional teach-back about the written warning-sign and emergency instructions; a displayed message does not establish understanding."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Education — Understanding Heart Failure: offer an explanation suited to the patient's language and needs, with professional teach-back recorded separately."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Education — Sodium: use the individual's documented dietary guidance; this example does not impose a universal numerical restriction."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Education — Fluids: explain fluid-related symptoms and the individual's written guidance; a fluid restriction is not assumed for every patient."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Education — When to Call: plan teaching and professional teach-back about the written contact and emergency routes, including coverage gaps and supported alternatives."
    }
  },
  {
    "detail" : {
      "status" : "not-started",
      "description" : "Education — Activity Guidance: discuss the individual's activity plan and limitations; no universal exercise prescription or completed instruction is asserted."
    }
  }],
  "note" : [{
    "text" : "Offer all eight domains at every tier; tier can change format, sequence and support, not exclude a clinically relevant domain. Patient self-assessment is not professional teach-back. Domain states pending, completed, deferred and not applicable belong to separate education records; deferred or not applicable requires a written reason and named authorized decision-maker. The denominator is the applicable domain set. No education state is inferred from these not-started planned activities."
  },
  {
    "text" : "Synthetic educational implementation-support example only. No named professional, clinical approval, care delivery, validated safe waiting interval, clinical outcome or operational export is claimed. Preserve historical example versions rather than rewriting records previously exchanged."
  }]
}

```
