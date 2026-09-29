# HEARTLAND Protocol FHIR Implementation Guide

**Candidate 0.3.0 — draft, experimental FHIR R4 resources.**

An educational implementation-support specification for structured, synthetic HEARTLAND examples. This is not proof of clinical validation, vendor interoperability, or full Toolkit V3.4 workflow coverage.

The public landing page at `https://fhir.heartlandprotocol.org` and this generated reference have distinct build and publication steps. The root landing page is not a version-pinned copy of this guide.

### Browse the reference

- [Background](background.html): purpose, evidence boundary and provenance.
- [Risk assessment](risk-assessment.html): weights, complete Boolean responses and examples.
- [Tiers and tracks](implementation.html): capacity, access and an eight-domain draft care plan.
- [Workflow mapping](workflow.html): orders, tasks, communication, lineage and export boundaries.
- [Artifacts](artifacts.html): profiles, extensions, terminology and synthetic examples.

### Technical contract

| Field | Value |
|-|-|
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

- [Cureus article](https://doi.org/10.7759/cureus.104817).
- [Published Toolkit V3.3](https://doi.org/10.5281/zenodo.19101219), distinct from the V3.4 candidate.
- [Historical IG software v0.1.1](https://doi.org/10.5281/zenodo.19634998), not this candidate.
- [Technical report version 1.0](https://doi.org/10.5281/zenodo.22137122).
- [Source repository](https://github.com/vickymuller-md/heartland-fhir-ig).

### Author and license

Vicky Muller Ferreira, MD · [ORCID 0009-0009-1099-5690](https://orcid.org/0009-0009-1099-5690) · [vickymuller@heartlandprotocol.org](mailto:vickymuller@heartlandprotocol.org).

Narrative and generated resources: CC-BY 4.0. Build tooling: MIT.

### Terminology licensing

{% include ip-statements.xhtml %}

### Dependencies and cross-version information

<div class="heartland-table-region" role="region" aria-label="Package dependencies; scroll horizontally on narrow screens" tabindex="0">
{% include dependency-table.xhtml %}
</div>

This candidate's evaluated contract is **FHIR R4 4.0.1 only**. The Publisher can automatically produce R4B conversions; these are not evaluated deliverables and are not included in the prepared website downloads. Automatic conversion is not evidence of R4B interoperability.

{% include globals-table.xhtml %}
