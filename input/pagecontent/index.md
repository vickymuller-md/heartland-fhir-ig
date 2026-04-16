### HEARTLAND Protocol FHIR Implementation Guide

This Implementation Guide (IG) provides FHIR R4 conformance resources for the **HEARTLAND Protocol v3.2** — a clinical implementation toolkit for primary care-led heart failure (HF) management in rural and resource-limited settings in the United States.

**HEARTLAND** stands for *Heart failure Evidence-based Access in Rural Treatment, Linking Advanced Network Delivery*.

#### Scope

The IG defines the FHIR artifacts EHR vendors and rural HF programs need to:

- **Stratify HF risk** at discharge using the HEARTLAND 10-input score (low / moderate / high tiers).
- **Assign facility implementation tier** (1 Minimal / 2 Standard / 3 Advanced) based on staffing, technology, and financial navigation capacity.
- **Assign patient monitoring track** (A digital / B analog / Hybrid) based on access to smartphone and telephone.
- **Structure the care plan** with tier-appropriate GDMT initiation cadence, follow-up schedule, and discharge education.
- **Capture remote monitoring observations** (weight, blood pressure, oxygen saturation) with red-flag thresholds that pass through the human filter (clinician telephone assessment) before ED referral.

#### Conformance

- **FHIR version:** R4 (4.0.1)
- **Dependencies:** [US Core 6.1.0](http://hl7.org/fhir/us/core/STU6.1)
- **Jurisdiction:** United States
- **Status:** Draft (v0.1.0)

#### Audience

- EHR vendors implementing HEARTLAND in rural and Critical Access Hospital settings
- Federally Qualified Health Centers (FQHCs) and community hospitals adopting the protocol
- Health IT analysts integrating heart failure risk stratification with care planning
- Researchers extending the HEARTLAND evidence base

#### Source of Truth

- **Clinical content:** HEARTLAND Protocol v3.2 (Cureus, 2026)
- **Repositories:** [Zenodo DOI 10.5281/zenodo.18566403](https://doi.org/10.5281/zenodo.18566403) | [OSF DOI 10.17605/OSF.IO/YUSGH](https://doi.org/10.17605/OSF.IO/YUSGH)

#### Author

**Vicky Muller Ferreira, MD** — vickymuller@heartlandprotocol.org | ORCID 0009-0009-1099-5690

#### License

- IG content: [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Generated FHIR resources: [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Companion code (heartland-app): MIT

#### Navigation

- [Background](background.html) — why HEARTLAND, the rural HF gap, evidence base
- [Risk Assessment](risk-assessment.html) — how to capture risk inputs and produce a tiered RiskAssessment
- [Implementation Tiers and Tracks](implementation.html) — facility tier assignment, patient track assignment, care plan structure
- **Artifacts** — full list of profiles, extensions, value sets, code systems, and examples (see sidebar)
