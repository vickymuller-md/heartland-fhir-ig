# HEARTLAND Protocol FHIR Implementation Guide

**FHIR R4 conformance resources for the HEARTLAND Protocol v3.2**

This Implementation Guide (IG) defines the FHIR profiles, extensions, value sets, and questionnaires that EHR vendors and rural HF programs need to exchange HEARTLAND-structured clinical data.

> **Source protocol**: Muller Ferreira V. *HEARTLAND Protocol: An Implementation Framework for Primary Care-Led Heart Failure Management in Rural Settings.* Cureus, 2026. Indexed in PubMed, PubMed Central, Scopus, and Google Scholar.

**Published IG**: https://vickymuller-md.github.io/heartland-fhir-ig/
**Source protocol DOI**: [10.5281/zenodo.18566403](https://doi.org/10.5281/zenodo.18566403) | [10.17605/OSF.IO/YUSGH](https://doi.org/10.17605/OSF.IO/YUSGH)

---

## Disclaimers (read first)

> *"This Implementation Guide is a clinical decision support specification for healthcare professionals. It does not provide medical diagnoses, treatment recommendations for individual patients, or replace clinical judgment. Not intended for direct patient care. For professional use only."*

> *"The HEARTLAND Risk Stratification Framework is a proposed tool under development. It has not been validated against clinical outcomes data. Formal validation through registry data is a defined research objective."*

This IG is **not a medical device**, **not FDA-cleared**, and **not HIPAA-certified**. Examples contain **synthetic data only** — no patient health information is included.

---

## Scope

The IG covers:

- **Risk stratification** — `HeartlandRiskAssessment` profile + `HeartlandRiskInputQuestionnaire` (10 inputs, 0–18 points, 3 tiers)
- **Facility tier assignment** — `HeartlandFacilityTier` extension + `HeartlandFacilityTierQuestionnaire` (5 categorical items)
- **Patient track assignment** — `HeartlandMonitoringTrack` extension + `HeartlandPatientTrackQuestionnaire` (3 boolean items)
- **Care planning** — `HeartlandCarePlan` profile (GDMT, monitoring, follow-up, education, financial navigation)
- **Remote monitoring** — `HeartlandRemoteMonitoringObservation` profile (weight, SBP, DBP, SpO2 with red-flag thresholds)
- **Patient context** — `HeartlandPatient` profile + `HeartlandDistanceToCardiology`, `HeartlandSocialSupportScore` extensions

## Conformance

| Field | Value |
|-|-|
| FHIR version | R4 (4.0.1) |
| Dependencies | [US Core 6.1.0](http://hl7.org/fhir/us/core/STU6.1) |
| Jurisdiction | United States |
| Status | Draft (v0.1.0) |

## Artifact counts

- 4 CodeSystems (Risk Tier, Implementation Tier, Monitoring Track, Evidence Level)
- 5 ValueSets
- 9 StructureDefinitions (5 profiles + 4 extensions)
- 3 Questionnaires (Risk Input, Facility Tier, Patient Track)
- 5 Examples + ImplementationGuide manifest
- 4 narrative pages

## Build instructions

### Prerequisites

- Node.js 18+ and npm
- Java 17+ (Eclipse Temurin recommended: `brew install --cask temurin@17`)
- `npm install -g fsh-sushi` (FHIR Shorthand compiler)

### Compile FSH to FHIR JSON

```bash
sushi .
```

Produces `fsh-generated/resources/*.json` — 27 FHIR resources.

### Build the navigable IG (HTML)

```bash
./_updatePublisher.sh   # downloads publisher.jar (~50 MB) to input-cache/
./_genonce.sh           # generates output/ HTML (3-7 min first time)
```

Open `output/index.html` in a browser, or check `output/qa.html` for the QA report.

## Source of truth

- Clinical content: HEARTLAND Protocol v3.2 (`protocol/HEARTLAND_Protocol_Complete.md` in the parent project)
- 8 protocol modules covered: risk stratification, GDMT optimization, telephone titration, discharge transitions, remote monitoring, comorbidity management, primary care linkage, implementation tier guidance

## Citation

Muller Ferreira V. *HEARTLAND Protocol FHIR Implementation Guide v0.1.0*. Zenodo. 2026.

For the underlying clinical protocol:

Muller Ferreira V. *HEARTLAND Protocol: An Implementation Framework for Primary Care-Led Heart Failure Management in Rural Settings.* Cureus. 2026. DOI: [10.5281/zenodo.18566403](https://doi.org/10.5281/zenodo.18566403).

## Author

**Vicky Muller Ferreira, MD**
- Email: vickymuller@heartlandprotocol.org
- ORCID: [0009-0009-1099-5690](https://orcid.org/0009-0009-1099-5690)
- Web: https://heartlandprotocol.org

## License

- IG narrative content + generated FHIR resources: **CC-BY 4.0** (see [LICENSE](LICENSE))
- Build scripts and tooling: **MIT** (see [LICENSE-CODE](LICENSE-CODE))

## Contributing

This IG is part of the HEARTLAND Protocol ecosystem. Issues and pull requests are welcome at https://github.com/vickymuller-md/heartland-fhir-ig/issues. Substantive clinical changes must align with the published HEARTLAND Protocol v3.2 (Cureus, 2026); changes that diverge require a corresponding protocol revision.
