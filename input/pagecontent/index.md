# HEARTLAND Protocol FHIR Implementation Guide

**FHIR R4 conformance resources for the HEARTLAND Protocol**

This Implementation Guide defines the FHIR profiles, extensions, value sets, code systems, and questionnaires that EHR vendors and rural HF programs need to exchange HEARTLAND-structured clinical data.

> **Source protocol**: Muller Ferreira V. *HEARTLAND Protocol: An Implementation Framework for Primary Care-Led Heart Failure Management in Rural Settings.* Cureus, 2026. Indexed in PubMed, PubMed Central, Scopus, and Google Scholar.

The polished landing page lives at the site root ([fhir.heartlandprotocol.org](https://fhir.heartlandprotocol.org)); this index serves as the entry point for the technical reference pages.

### Browse the IG

- **[Background](background.html)** — why HEARTLAND, the rural HF gap, evidence base
- **[Risk Assessment](risk-assessment.html)** — capture risk inputs and produce a tiered RiskAssessment
- **[Tiers and Tracks](implementation.html)** — facility tier assignment, patient track assignment, care plan structure
- **[Artifacts](artifacts.html)** — full list of profiles, extensions, value sets, code systems, and examples

### Conformance

| Field | Value |
|-|-|
| FHIR version | R4 (4.0.1) |
| Dependencies | [US Core 6.1.0](http://hl7.org/fhir/us/core/STU6.1) |
| Jurisdiction | United States |
| Status | Draft (v0.2.0) |
| Canonical URL | `https://fhir.heartlandprotocol.org` |

### Disclaimers

> *This Implementation Guide is a clinical implementation-support specification for healthcare professionals. It does not provide medical diagnoses, treatment recommendations for individual patients, or replace clinical judgment. Not intended for direct patient care. For professional use only.*

> *The HEARTLAND Risk Stratification Framework is a proposed tool under development. It has not been validated against clinical outcomes data. Formal validation through registry data is a defined research objective.*

This IG is **not a medical device**, **not FDA-cleared**, and **not HIPAA-certified**. Examples contain **synthetic data only** — no patient health information is included.

### Open science

- **Cureus** (peer-reviewed, indexed PubMed/PMC/Scopus)
- **Zenodo** (protocol): [10.5281/zenodo.18566403](https://doi.org/10.5281/zenodo.18566403)
- **OSF**: [10.17605/OSF.IO/YUSGH](https://doi.org/10.17605/OSF.IO/YUSGH)
- **Source repo**: [github.com/vickymuller-md/heartland-fhir-ig](https://github.com/vickymuller-md/heartland-fhir-ig)

### License

- IG narrative content + generated FHIR resources: [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Build scripts and tooling: MIT

### Author

**Vicky Muller Ferreira, MD** — [vickymuller@heartlandprotocol.org](mailto:vickymuller@heartlandprotocol.org) · [ORCID 0009-0009-1099-5690](https://orcid.org/0009-0009-1099-5690) · [heartlandprotocol.org](https://heartlandprotocol.org)
