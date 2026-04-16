# HEARTLAND Protocol FHIR Implementation Guide

**Interoperability Specification for Rural Heart Failure Management**

A FHIR R4 Implementation Guide that operationalizes the HEARTLAND Protocol — *Heart failure Evidence-based Access in Rural Treatment, Linking Advanced Network Delivery* — as a set of EHR-implementable conformance resources for primary care-led heart failure management in rural and resource-limited settings across the United States.

> **Source protocol**: Muller Ferreira V. *HEARTLAND Protocol: An Implementation Framework for Primary Care-Led Heart Failure Management in Rural Settings.* Published in Cureus (Springer Nature), indexed in PubMed, PubMed Central, Scopus, and Google Scholar.

---

### Disclaimers (read first)

> *"This Implementation Guide is a clinical decision support specification for healthcare professionals. It does not provide medical diagnoses, treatment recommendations for individual patients, or replace clinical judgment. Not intended for direct patient care. For professional use only."*

> *"The HEARTLAND Risk Stratification Framework is a proposed tool under development. It has not been validated against clinical outcomes data. Formal validation through registry data is a defined research objective."*

This IG is **not a medical device**, **not FDA-cleared**, and **not HIPAA-certified**. Examples contain **synthetic data only** — no patient health information is included.

---

### Purpose

Heart failure affects over 6.7 million Americans and drives more than 1 million hospitalizations annually. Rural populations bear a 53% higher mortality rate, exacerbated by limited cardiology access — 86% of rural U.S. counties have no cardiologist. Despite strong clinical evidence for guideline-directed medical therapy (GDMT), fewer than 20% of eligible patients receive all four recommended medication classes simultaneously.

This IG translates the eight HEARTLAND Protocol modules into FHIR R4 conformance resources — profiles, extensions, value sets, code systems, and questionnaires — that EHR vendors and rural HF programs can implement to exchange HEARTLAND-structured clinical data.

### Features

| # | Module | FHIR Artifact |
|-|-|-|
| 1 | Risk Stratification | [`HeartlandRiskAssessment`](StructureDefinition-heartland-risk-assessment.html) + [`HeartlandRiskInputQuestionnaire`](Questionnaire-heartland-risk-input-questionnaire.html) |
| 2 | GDMT Optimization | [`HeartlandCarePlan`](StructureDefinition-heartland-careplan.html) (activity rules per tier) |
| 3 | Telephone Titration | [`HeartlandMonitoringTrack`](CodeSystem-heartland-monitoring-track.html) (Track A/B) |
| 4 | Discharge Transitions | [`HeartlandCarePlan`](StructureDefinition-heartland-careplan.html) (8 AHA education domains) |
| 5 | Remote Monitoring Track | [`HeartlandPatientTrackQuestionnaire`](Questionnaire-heartland-patient-track-questionnaire.html) |
| 6 | Comorbidity Context | [`HeartlandPatient`](StructureDefinition-heartland-patient.html) extensions (distance, social support) |
| 7 | Primary Care Linkage | *Phase 2* |
| 8 | Implementation Tier Selector | [`HeartlandFacilityTierQuestionnaire`](Questionnaire-heartland-facility-tier-questionnaire.html) + [`HeartlandFacilityTier`](StructureDefinition-heartland-facility-tier.html) extension |

Cross-cutting:

- [`HeartlandRemoteMonitoringObservation`](StructureDefinition-heartland-remote-monitoring-observation.html) — weight, BP, SpO2 with red-flag thresholds (`Observation.referenceRange`)
- 4 CodeSystems labeling risk tier, implementation tier, monitoring track, evidence level
- Generic Bridge pathway encoded in CarePlan activities
- Human Filter principle (clinician triage before ED escalation)
- 4 narrative pages: [Background](background.html), [Risk Assessment](risk-assessment.html), [Tiers and Tracks](implementation.html)

### Status

| Stream | State |
|-|-|
| Cureus manuscript | Published; peer-review response in progress |
| HEARTLAND Protocol | v3.2 (February 2026) — authoritative |
| FHIR IG | v0.1.0 — initial draft, ready for vendor review |
| Zenodo IG DOI | Pending — minted at first public release via `.zenodo.json` |
| Pilot site EHR validation | Phase 3 — not yet started |
| FHIR IG Registry submission | Deferred to v0.2.0 |

### Stack

- FHIR R4 (4.0.1) — most widely adopted version in US healthcare
- Depends on [US Core 6.1.0](http://hl7.org/fhir/us/core/STU6.1)
- Authored in [FHIR Shorthand (FSH)](https://hl7.org/fhir/uv/shorthand/) compiled via [SUSHI](https://github.com/FHIR/sushi)
- Built into navigable HTML via the [HL7 IG Publisher](https://github.com/HL7/fhir-ig-publisher)
- Template: `fhir.base.template#current` (independent IG, not HL7-balloted)
- Hosting: GitHub Pages on `gh-pages` branch
- Source: [github.com/vickymuller-md/heartland-fhir-ig](https://github.com/vickymuller-md/heartland-fhir-ig)

### Local development

```bash
# Install toolchain (one-time)
brew install openjdk@17    # for IG Publisher
npm install -g fsh-sushi   # FSH compiler

# Compile FSH to FHIR JSON
sushi .

# Build navigable IG (HTML)
./_updatePublisher.sh
./_genonce.sh

# Open output/index.html in a browser
```

Tests / validation: 0 errors, 0 warnings on SUSHI; 0 errors, 7 cosmetic warnings on IG Publisher (US Core newer version available, fragment XHTMLs unused, observation performer best practice — all reviewed and accepted).

### Open science

This IG is deposited to Zenodo and OSF alongside the source protocol:

- **Cureus** (peer-reviewed, indexed PubMed/PMC/Scopus)
- **Zenodo** (protocol): [`10.5281/zenodo.18566403`](https://doi.org/10.5281/zenodo.18566403)
- **Zenodo** (FHIR IG): pending — will be minted at first public release via [`.zenodo.json`](https://github.com/vickymuller-md/heartland-fhir-ig/blob/main/.zenodo.json)
- **OSF**: [`10.17605/OSF.IO/YUSGH`](https://doi.org/10.17605/OSF.IO/YUSGH)
- **medRxiv**: three complementary systematic reviews registered in PROSPERO

### License

- IG narrative content + generated FHIR resources: [**CC-BY 4.0**](https://creativecommons.org/licenses/by/4.0/)
- Build scripts and tooling: **MIT**

The IG is free to use, modify, and redistribute for research, education, and professional clinical decision support — subject to the disclaimers above. Not a medical device.

### Author

**Vicky Muller Ferreira, MD**
Cardiologist · Implementation Science Researcher

- Email: vickymuller@heartlandprotocol.org
- ORCID: [0009-0009-1099-5690](https://orcid.org/0009-0009-1099-5690)
- Web: https://heartlandprotocol.org
