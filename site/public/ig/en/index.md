# Home - HEARTLAND Protocol FHIR Implementation Guide v0.3.0

* [**Table of Contents**](toc.md)
* **Home**

## Home

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/ImplementationGuide/heartland.fhir.us.protocol | *Version*:0.3.0 |
| Draft as of 2026-09-29 | *Computable Name*:HeartlandProtocolIG |

# HEARTLAND Protocol FHIR Implementation Guide

**Candidate 0.3.0 — draft, experimental FHIR R4 resources.**

An educational implementation-support specification for structured, synthetic HEARTLAND examples. This is not proof of clinical validation, vendor interoperability, or full Toolkit V3.4 workflow coverage.

The public landing page at `https://fhir.heartlandprotocol.org` and this generated reference have distinct build and publication steps. The root landing page is not a version-pinned copy of this guide.

### Browse the reference

* [Background](background.md): purpose, evidence boundary and provenance.
* [Risk assessment](risk-assessment.md): weights, complete Boolean responses and examples.
* [Tiers and tracks](implementation.md): capacity, access and an eight-domain draft care plan.
* [Workflow mapping](workflow.md): orders, tasks, communication, lineage and export boundaries.
* [Artifacts](artifacts.md): profiles, extensions, terminology and synthetic examples.

### Technical contract

| | |
| :--- | :--- |
| FHIR release | R4 4.0.1 |
| Dependency | US Core 6.1.0 |
| Canonical URL | `https://fhir.heartlandprotocol.org` |
| Candidate version | 0.3.0 |
| Conformance status | Draft and experimental |

Depending on US Core is not a claim that every profile conforms to it. Source compilation, structural validation, terminology checks, cross-resource tests and external EHR testing are distinct checks.

### Boundary

This Implementation Guide is an educational implementation-support resource for healthcare professionals. It does not provide medical diagnoses, treatment recommendations for individual patients, or replace clinical judgment. Not intended for direct patient care. For professional use only.

The HEARTLAND Risk Stratification Framework is proposed pending validation and has not been validated against clinical outcomes. Bundled examples are synthetic; no real patient information should be entered into demonstrations.

### Provenance

* [Cureus article](https://doi.org/10.7759/cureus.104817).
* [Published Toolkit V3.3](https://doi.org/10.5281/zenodo.19101219), distinct from the V3.4 candidate.
* [Historical IG software v0.1.1](https://doi.org/10.5281/zenodo.19634998), not this candidate.
* [Technical report version 1.0](https://doi.org/10.5281/zenodo.22137122).
* [Source repository](https://github.com/vickymuller-md/heartland-fhir-ig).

### Author and license

Vicky Muller Ferreira, MD · [ORCID 0009-0009-1099-5690](https://orcid.org/0009-0009-1099-5690) · [vickymuller@heartlandprotocol.org](mailto:vickymuller@heartlandprotocol.org).

Narrative and generated resources: CC-BY 4.0. Build tooling: MIT.

### Terminology licensing

This publication includes IP covered under the following statements.

* CC-BY 4.0

* [HEARTLAND Evidence Level](CodeSystem-heartland-evidence-level.md): [HeartlandEvidenceLevelVS](ValueSet-heartland-evidence-level-vs.md)
* [HEARTLAND Implementation Tier](CodeSystem-heartland-implementation-tier.md): [CarePlan/CarePlanExampleTier2](CarePlan-CarePlanExampleTier2.md), [HeartlandFacilityTier](StructureDefinition-heartland-facility-tier.md) and [HeartlandImplementationTierVS](ValueSet-heartland-implementation-tier-vs.md)
* [HEARTLAND Monitoring Track](CodeSystem-heartland-monitoring-track.md): [CarePlan/CarePlanExampleTier2](CarePlan-CarePlanExampleTier2.md), [HeartlandMonitoringTrackExtension](StructureDefinition-heartland-monitoring-track-ext.md) and [HeartlandMonitoringTrackVS](ValueSet-heartland-monitoring-track-vs.md)
* [HEARTLAND Risk Tier](CodeSystem-heartland-risk-tier.md): [HeartlandRiskAssessment](StructureDefinition-heartland-risk-assessment.md), [HeartlandRiskTierVS](ValueSet-heartland-risk-tier-vs.md) and [RiskAssessment/RiskAssessmentExampleHigh](RiskAssessment-RiskAssessmentExampleHigh.md)


* ISO Maintains the copyright on the country codes, and controls it's use carefully. For futher details see the ISO 3166 web page: [https://www.iso.org/iso-3166-country-codes.html](https://www.iso.org/iso-3166-country-codes.html)

* [ISO 3166-1 Codes for the representation of names of countries and their subdivisions — Part 1: Country code](http://terminology.hl7.org/5.0.0/CodeSystem-ISO3166Part1.html): [HeartlandCarePlan](StructureDefinition-heartland-careplan.md), [HeartlandDistanceToCardiology](StructureDefinition-heartland-distance-to-cardiology.md)... Show 25 more, [HeartlandEvidenceLevel](CodeSystem-heartland-evidence-level.md), [HeartlandEvidenceLevelVS](ValueSet-heartland-evidence-level-vs.md), [HeartlandFacilityTier](StructureDefinition-heartland-facility-tier.md), [HeartlandFacilityTierQuestionnaire](Questionnaire-heartland-facility-tier-questionnaire.md), [HeartlandImplementationTier](CodeSystem-heartland-implementation-tier.md), [HeartlandImplementationTierVS](ValueSet-heartland-implementation-tier-vs.md), [HeartlandMonitoringObservationCodeVS](ValueSet-heartland-monitoring-observation-code-vs.md), [HeartlandMonitoringTrack](CodeSystem-heartland-monitoring-track.md), [HeartlandMonitoringTrackExtension](StructureDefinition-heartland-monitoring-track-ext.md), [HeartlandMonitoringTrackVS](ValueSet-heartland-monitoring-track-vs.md), [HeartlandPatient](StructureDefinition-heartland-patient.md), [HeartlandPatientTrackQuestionnaire](Questionnaire-heartland-patient-track-questionnaire.md), [HeartlandProtocolIG](index.md), [HeartlandQuestionnaireResponse](StructureDefinition-heartland-questionnaire-response.md), [HeartlandRemoteMonitoringObservation](StructureDefinition-heartland-remote-monitoring-observation.md), [HeartlandRiskAssessment](StructureDefinition-heartland-risk-assessment.md), [HeartlandRiskInputQuestionnaire](Questionnaire-heartland-risk-input-questionnaire.md), [HeartlandRiskInputResponse](StructureDefinition-heartland-risk-input-response.md), [HeartlandRiskScore](CodeSystem-heartland-risk-score.md), [HeartlandRiskScoreTotal](StructureDefinition-heartland-risk-score-total.md), [HeartlandRiskTier](CodeSystem-heartland-risk-tier.md), [HeartlandRiskTierVS](ValueSet-heartland-risk-tier-vs.md), [HeartlandRiskTruePoints](StructureDefinition-heartland-risk-true-points.md), [HeartlandSocialSupportScore](StructureDefinition-heartland-social-support-score.md) and [HeartlandSyntheticCountyCode](StructureDefinition-heartland-synthetic-county-code.md)


* The UCUM codes, UCUM table (regardless of format), and UCUM Specification are copyright 1999-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. [https://ucum.org/trac/wiki/TermsOfUse](https://ucum.org/trac/wiki/TermsOfUse)

* [Unified Code for Units of Measure (UCUM)](http://terminology.hl7.org/5.0.0/CodeSystem-v3-ucum.html): [Observation/ObservationExampleWeightRedFlag](Observation-ObservationExampleWeightRedFlag.md) and [Patient/PatientExampleRural](Patient-PatientExampleRural.md)


* This material contains content from [LOINC](http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the [license](http://loinc.org/license). LOINC® is a registered United States trademark of Regenstrief Institute, Inc.

* [LOINC](http://terminology.hl7.org/5.0.0/CodeSystem-v3-loinc.html): [HeartlandMonitoringObservationCodeVS](ValueSet-heartland-monitoring-observation-code-vs.md), [HeartlandRemoteMonitoringObservation](StructureDefinition-heartland-remote-monitoring-observation.md) and [Observation/ObservationExampleWeightRedFlag](Observation-ObservationExampleWeightRedFlag.md)


* This material derives from the HL7 Terminology (THO). THO is copyright ©1989+ Health Level Seven International and is made available under the CC0 designation. For more licensing information see: [https://terminology.hl7.org/license.html](https://terminology.hl7.org/license.html)

* [Observation Category Codes](http://terminology.hl7.org/7.4.0/CodeSystem-observation-category.html): [HeartlandRemoteMonitoringObservation](StructureDefinition-heartland-remote-monitoring-observation.md) and [Observation/ObservationExampleWeightRedFlag](Observation-ObservationExampleWeightRedFlag.md)


### Dependencies and cross-version information








This candidate's evaluated contract is **FHIR R4 4.0.1 only**. The Publisher can automatically produce R4B conversions; these are not evaluated deliverables and are not included in the prepared website downloads. Automatic conversion is not evidence of R4B interoperability.

*There are no Global profiles defined*

