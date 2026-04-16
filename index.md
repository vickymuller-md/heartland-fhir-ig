# Home - HEARTLAND Protocol FHIR Implementation Guide v0.1.0

* [**Table of Contents**](toc.md)
* **Home**

## Home

| | |
| :--- | :--- |
| *Official URL*:https://fhir.heartlandprotocol.org/ImplementationGuide/heartland.fhir.us.protocol | *Version*:0.1.0 |
| Draft as of 2026-04-16 | *Computable Name*:HeartlandProtocolIG |

# HEARTLAND Protocol FHIR Implementation Guide

**Interoperability Specification for Rural Heart Failure Management**

A FHIR R4 Implementation Guide that operationalizes the HEARTLAND Protocol — **Heart failure Evidence-based Access in Rural Treatment, Linking Advanced Network Delivery** — as a set of EHR-implementable conformance resources for primary care-led heart failure management in rural and resource-limited settings across the United States.

> **Source protocol**: Muller Ferreira V. **HEARTLAND Protocol: An Implementation Framework for Primary Care-Led Heart Failure Management in Rural Settings.** Published in Cureus (Springer Nature), indexed in PubMed, PubMed Central, Scopus, and Google Scholar.

-------

### Disclaimers (read first)

> **"This Implementation Guide is a clinical decision support specification for healthcare professionals. It does not provide medical diagnoses, treatment recommendations for individual patients, or replace clinical judgment. Not intended for direct patient care. For professional use only."**

> **"The HEARTLAND Risk Stratification Framework is a proposed tool under development. It has not been validated against clinical outcomes data. Formal validation through registry data is a defined research objective."**

This IG is **not a medical device**, **not FDA-cleared**, and **not HIPAA-certified**. Examples contain **synthetic data only** — no patient health information is included.

-------

### Purpose

Heart failure affects over 6.7 million Americans and drives more than 1 million hospitalizations annually. Rural populations bear a 53% higher mortality rate, exacerbated by limited cardiology access — 86% of rural U.S. counties have no cardiologist. Despite strong clinical evidence for guideline-directed medical therapy (GDMT), fewer than 20% of eligible patients receive all four recommended medication classes simultaneously.

This IG translates the eight HEARTLAND Protocol modules into FHIR R4 conformance resources — profiles, extensions, value sets, code systems, and questionnaires — that EHR vendors and rural HF programs can implement to exchange HEARTLAND-structured clinical data.

### Features

| | | |
| :--- | :--- | :--- |
| 1 | Risk Stratification | [`HeartlandRiskAssessment`](StructureDefinition-heartland-risk-assessment.md)+[`HeartlandRiskInputQuestionnaire`](Questionnaire-heartland-risk-input-questionnaire.md) |
| 2 | GDMT Optimization | [`HeartlandCarePlan`](StructureDefinition-heartland-careplan.md)(activity rules per tier) |
| 3 | Telephone Titration | [`HeartlandMonitoringTrack`](CodeSystem-heartland-monitoring-track.md)(Track A/B) |
| 4 | Discharge Transitions | [`HeartlandCarePlan`](StructureDefinition-heartland-careplan.md)(8 AHA education domains) |
| 5 | Remote Monitoring Track | [`HeartlandPatientTrackQuestionnaire`](Questionnaire-heartland-patient-track-questionnaire.md) |
| 6 | Comorbidity Context | [`HeartlandPatient`](StructureDefinition-heartland-patient.md)extensions (distance, social support) |
| 7 | Primary Care Linkage | **Phase 2** |
| 8 | Implementation Tier Selector | [`HeartlandFacilityTierQuestionnaire`](Questionnaire-heartland-facility-tier-questionnaire.md)+[`HeartlandFacilityTier`](StructureDefinition-heartland-facility-tier.md)extension |

Cross-cutting:

* [`HeartlandRemoteMonitoringObservation`](StructureDefinition-heartland-remote-monitoring-observation.md) — weight, BP, SpO2 with red-flag thresholds (`Observation.referenceRange`)
* 4 CodeSystems labeling risk tier, implementation tier, monitoring track, evidence level
* Generic Bridge pathway encoded in CarePlan activities
* Human Filter principle (clinician triage before ED escalation)
* 4 narrative pages: [Background](background.md), [Risk Assessment](risk-assessment.md), [Tiers and Tracks](implementation.md)

### Status

| | |
| :--- | :--- |
| Cureus manuscript | Published; peer-review response in progress |
| HEARTLAND Protocol | v3.2 (February 2026) — authoritative |
| FHIR IG | v0.1.0 — initial draft, ready for vendor review |
| Zenodo IG DOI | Pending — minted at first public release via`.zenodo.json` |
| Pilot site EHR validation | Phase 3 — not yet started |
| FHIR IG Registry submission | Deferred to v0.2.0 |

### Stack

* FHIR R4 (4.0.1) — most widely adopted version in US healthcare
* Depends on [US Core 6.1.0](http://hl7.org/fhir/us/core/STU6.1)
* Authored in [FHIR Shorthand (FSH)](https://hl7.org/fhir/uv/shorthand/) compiled via [SUSHI](https://github.com/FHIR/sushi)
* Built into navigable HTML via the [HL7 IG Publisher](https://github.com/HL7/fhir-ig-publisher)
* Template: `fhir.base.template#current` (independent IG, not HL7-balloted)
* Hosting: GitHub Pages on `gh-pages` branch
* Source: [github.com/vickymuller-md/heartland-fhir-ig](https://github.com/vickymuller-md/heartland-fhir-ig)

### Local development

```
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

* **Cureus** (peer-reviewed, indexed PubMed/PMC/Scopus)
* **Zenodo** (protocol): [`10.5281/zenodo.18566403`](https://doi.org/10.5281/zenodo.18566403)
* **Zenodo** (FHIR IG): pending — will be minted at first public release via [`.zenodo.json`](https://github.com/vickymuller-md/heartland-fhir-ig/blob/main/.zenodo.json)
* **OSF**: [`10.17605/OSF.IO/YUSGH`](https://doi.org/10.17605/OSF.IO/YUSGH)
* **medRxiv**: three complementary systematic reviews registered in PROSPERO

### License

* IG narrative content + generated FHIR resources: [**CC-BY 4.0**](https://creativecommons.org/licenses/by/4.0/)
* Build scripts and tooling: **MIT**

The IG is free to use, modify, and redistribute for research, education, and professional clinical decision support — subject to the disclaimers above. Not a medical device.

### Author

**Vicky Muller Ferreira, MD** Cardiologist · Implementation Science Researcher

* Email: vickymuller@heartlandprotocol.org
* ORCID: [0009-0009-1099-5690](https://orcid.org/0009-0009-1099-5690)
* Web: https://heartlandprotocol.org



## Resource Content

```json
{
  "resourceType" : "ImplementationGuide",
  "id" : "heartland.fhir.us.protocol",
  "url" : "https://fhir.heartlandprotocol.org/ImplementationGuide/heartland.fhir.us.protocol",
  "version" : "0.1.0",
  "name" : "HeartlandProtocolIG",
  "title" : "HEARTLAND Protocol FHIR Implementation Guide",
  "status" : "draft",
  "date" : "2026-04-16T15:20:02-04:00",
  "publisher" : "Vicky Muller Ferreira, MD",
  "contact" : [{
    "name" : "Vicky Muller Ferreira, MD",
    "telecom" : [{
      "system" : "url",
      "value" : "https://heartlandprotocol.org"
    },
    {
      "system" : "email",
      "value" : "vickymuller@heartlandprotocol.org"
    }]
  },
  {
    "name" : "Vicky Muller Ferreira, MD",
    "telecom" : [{
      "system" : "email",
      "value" : "vickymuller@heartlandprotocol.org",
      "use" : "work"
    },
    {
      "system" : "url",
      "value" : "https://heartlandprotocol.org"
    }]
  }],
  "description" : "FHIR R4 Implementation Guide for the HEARTLAND Protocol v3.2 — a clinical implementation toolkit for primary care-led heart failure management in rural and resource-limited US settings. Defines profiles, extensions, questionnaires, and value sets enabling EHR vendors to exchange HEARTLAND-structured data (risk assessments, care plans, remote monitoring observations).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US"
    }]
  }],
  "packageId" : "heartland.fhir.us.protocol",
  "license" : "CC-BY-4.0",
  "fhirVersion" : ["4.0.1"],
  "dependsOn" : [{
    "id" : "hl7tx",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on HL7 Terminology"
    }],
    "uri" : "http://terminology.hl7.org/ImplementationGuide/hl7.terminology",
    "packageId" : "hl7.terminology.r4",
    "version" : "7.1.0"
  },
  {
    "id" : "hl7ext",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on the HL7 Extension Pack"
    }],
    "uri" : "http://hl7.org/fhir/extensions/ImplementationGuide/hl7.fhir.uv.extensions",
    "packageId" : "hl7.fhir.uv.extensions.r4",
    "version" : "5.2.0"
  },
  {
    "id" : "hl7_fhir_us_core",
    "uri" : "http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core",
    "packageId" : "hl7.fhir.us.core",
    "version" : "6.1.0"
  }],
  "definition" : {
    "extension" : [{
      "extension" : [{
        "url" : "code",
        "valueString" : "copyrightyear"
      },
      {
        "url" : "value",
        "valueString" : "2026+"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "releaselabel"
      },
      {
        "url" : "value",
        "valueString" : "ci-build"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "show-inherited-invariants"
      },
      {
        "url" : "value",
        "valueString" : "false"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-jurisdiction"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-publisher"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-contact"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-version"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "autoload-resources"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "template/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "input/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-qa"
      },
      {
        "url" : "value",
        "valueString" : "temp/qa"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-temp"
      },
      {
        "url" : "value",
        "valueString" : "temp/pages"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-output"
      },
      {
        "url" : "value",
        "valueString" : "output"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-suppressed-warnings"
      },
      {
        "url" : "value",
        "valueString" : "input/ignoreWarnings.txt"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-history"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.heartlandprotocol.org/history.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "template-html"
      },
      {
        "url" : "value",
        "valueString" : "template-page.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "template-md"
      },
      {
        "url" : "value",
        "valueString" : "template-page-md.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-context"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-copyright"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-license"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-wg"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "active-tables"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "fmm-definition"
      },
      {
        "url" : "value",
        "valueString" : "http://hl7.org/fhir/versions.html#maturity"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "propagate-status"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "excludelogbinaryformat"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "tabbed-snapshots"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-internal-dependency",
      "valueCode" : "hl7.fhir.uv.tools.r4#1.1.2"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "copyrightyear"
      },
      {
        "url" : "value",
        "valueString" : "2026+"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "releaselabel"
      },
      {
        "url" : "value",
        "valueString" : "ci-build"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "show-inherited-invariants"
      },
      {
        "url" : "value",
        "valueString" : "false"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-jurisdiction"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-publisher"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-contact"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-version"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "autoload-resources"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "template/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "input/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-qa"
      },
      {
        "url" : "value",
        "valueString" : "temp/qa"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-temp"
      },
      {
        "url" : "value",
        "valueString" : "temp/pages"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-output"
      },
      {
        "url" : "value",
        "valueString" : "output"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-suppressed-warnings"
      },
      {
        "url" : "value",
        "valueString" : "input/ignoreWarnings.txt"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-history"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.heartlandprotocol.org/history.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-html"
      },
      {
        "url" : "value",
        "valueString" : "template-page.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-md"
      },
      {
        "url" : "value",
        "valueString" : "template-page-md.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-context"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-copyright"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-license"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-wg"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "active-tables"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "fmm-definition"
      },
      {
        "url" : "value",
        "valueString" : "http://hl7.org/fhir/versions.html#maturity"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "propagate-status"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "excludelogbinaryformat"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "tabbed-snapshots"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    }],
    "resource" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/ObservationExampleWeightRedFlag"
      },
      "name" : "Example: Body Weight Observation with Red-Flag Threshold",
      "description" : "Body weight observation for PatientExampleRural captured via Track B (telephone-reported) showing a +1.2 kg gain in 24 hours. Reference range encodes the HEARTLAND default red-flag threshold (>=0.9 kg in 24 hours triggers clinician outreach per the human filter principle).",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "RiskAssessment"
      }],
      "reference" : {
        "reference" : "RiskAssessment/RiskAssessmentExampleHigh"
      },
      "name" : "Example: High-Risk HEARTLAND Risk Assessment",
      "description" : "Risk assessment for PatientExampleRural scoring 11/18 points (>=9 = High Risk tier). Inputs: age >=75 (+2), prior HF hosp 6mo (+3), eGFR <45 (+2), BP <100 (+2), distance >50 mi (+1), limited social support (+1). Triggers Intensive Bundle per HEARTLAND v3.2.",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-assessment"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "QuestionnaireResponse"
      }],
      "reference" : {
        "reference" : "QuestionnaireResponse/QuestionnaireResponseExampleRiskInputs"
      },
      "name" : "Example: Risk Input Questionnaire Response (score 11)",
      "description" : "Responses to the HeartlandRiskInputQuestionnaire for PatientExampleRural. Six items answered true (age >=75, prior HF hosp 6mo, SBP <100, CKM Stage 3-4, distance >50 mi, limited social support) totaling 11 points -> High Risk tier. Referenced by RiskAssessmentExampleHigh.basis[0].",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-questionnaire-response"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Patient"
      }],
      "reference" : {
        "reference" : "Patient/PatientExampleRural"
      },
      "name" : "Example: Rural HF Patient (high-distance, limited support)",
      "description" : "A 78-year-old patient living alone in a rural county without a local cardiologist (87 miles to nearest cardiology care). Demonstrates use of HeartlandDistanceToCardiology and HeartlandSocialSupportScore extensions. Modeled on the cohort described in HEARTLAND Protocol v3.2 background data.",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-patient"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CarePlan"
      }],
      "reference" : {
        "reference" : "CarePlan/CarePlanExampleTier2"
      },
      "name" : "Example: Tier 2 Care Plan with Track B Monitoring",
      "description" : "Care plan for PatientExampleRural at a Tier 2 (Standard) FQHC. Patient was assigned Track B (analog) because rural broadband is unreliable. Plan includes target initiation of all 4 GDMT classes within 14 days, weekly follow-up calls for 4 weeks, 7-day in-person visit, and full 8-domain teach-back education.",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-careplan"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-careplan"
      },
      "name" : "HEARTLAND Care Plan",
      "description" : "Heart failure care plan structured per HEARTLAND Protocol v3.2. Activities are organized around five domains: GDMT initiation/titration, remote monitoring schedule, post-discharge follow-up (calls and visits), discharge education (3 condensed or 8 comprehensive domains), and patient assistance navigation. Two extensions identify the facility implementation tier and the assigned monitoring track (A digital / B analog).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-distance-to-cardiology"
      },
      "name" : "HEARTLAND Distance to Cardiology",
      "description" : "Driving distance in miles from the patient's residence to the nearest cardiologist. Used by the HEARTLAND risk score: distance >50 miles contributes 1 point. Rural counties without a cardiologist average 87 miles to nearest cardiology care vs 16 miles in counties with one (HEARTLAND Protocol v3.2, Module 2).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/heartland-evidence-level"
      },
      "name" : "HEARTLAND Evidence Level",
      "description" : "Three-tiered transparency labels distinguishing evidence strength behind HEARTLAND Protocol v3.2 recommendations, helping clinicians calibrate clinical decisions.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/heartland-evidence-level-vs"
      },
      "name" : "HEARTLAND Evidence Level Value Set",
      "description" : "All evidence level codes (established | emerging | pragmatic).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-facility-tier"
      },
      "name" : "HEARTLAND Facility Implementation Tier",
      "description" : "Identifies the HEARTLAND Protocol v3.2 implementation tier (1 Minimal, 2 Standard, 3 Advanced) at which a facility, organization, or care plan operates. Drives which protocol activities (monitoring, GDMT cadence, education, follow-up) are operationally feasible.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Questionnaire"
      }],
      "reference" : {
        "reference" : "Questionnaire/heartland-facility-tier-questionnaire"
      },
      "name" : "HEARTLAND Facility Tier Questionnaire",
      "description" : "Five categorical items derived from HEARTLAND Protocol v3.2 Table 2 to support facility self-assessment for implementation tier assignment (Tier 1 Minimal / Tier 2 Standard / Tier 3 Advanced). Items cover staffing model, PharmD availability, CHW program, monitoring technology, and financial navigation capacity. Tier assignment is qualitative: predominance of 'minimal' answers maps to Tier 1; 'standard' to Tier 2; 'advanced' to Tier 3. This is an operational instrument derived from Table 2; the source protocol does not provide a formal scored tool.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/heartland-implementation-tier"
      },
      "name" : "HEARTLAND Implementation Tier",
      "description" : "Facility implementation tiers from HEARTLAND Protocol v3.2 Module 8. Tiers reflect available resources (staffing, technology, financial navigation) and dictate which protocol components are operationally feasible at a given site.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/heartland-implementation-tier-vs"
      },
      "name" : "HEARTLAND Implementation Tier Value Set",
      "description" : "All facility implementation tier codes (tier-1-minimal | tier-2-standard | tier-3-advanced).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/heartland-monitoring-observation-code-vs"
      },
      "name" : "HEARTLAND Monitoring Observation Code Value Set",
      "description" : "LOINC codes for the four observations captured by the HEARTLAND remote monitoring kit per Module 5: body weight (digital scale), systolic and diastolic blood pressure (BP monitor), and oxygen saturation (pulse oximeter, when indicated).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/heartland-monitoring-track"
      },
      "name" : "HEARTLAND Monitoring Track",
      "description" : "Patient-level remote monitoring track assignment from HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms, differing only in data collection method.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-monitoring-track-ext"
      },
      "name" : "HEARTLAND Monitoring Track Assignment",
      "description" : "Assigns a CarePlan to either Track A (digital, app-based) or Track B (analog, telephone/paper) per HEARTLAND Protocol v3.2 Module 5. Both tracks follow identical clinical algorithms; the choice reflects patient access to technology and facility implementation tier.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/heartland-monitoring-track-vs"
      },
      "name" : "HEARTLAND Monitoring Track Value Set",
      "description" : "All remote monitoring track codes (digital-track-a | analog-track-b).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-patient"
      },
      "name" : "HEARTLAND Patient",
      "description" : "Patient profile carrying HEARTLAND-specific extensions used by the risk score: distance to cardiology and social support status. Constrains the base FHIR R4 Patient resource for use within HEARTLAND Protocol v3.2 workflows.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Questionnaire"
      }],
      "reference" : {
        "reference" : "Questionnaire/heartland-patient-track-questionnaire"
      },
      "name" : "HEARTLAND Patient Track Assignment Questionnaire",
      "description" : "Three boolean items derived from HEARTLAND Protocol v3.2 Table 4 (Track Assignment Form) to determine whether a patient should be enrolled in Track A (digital, app-based) or Track B (analog, telephone) remote monitoring. Decision logic: smartphone with reliable connectivity AND comfortable using apps -> Track A; reliable telephone access only -> Track B; smartphone without app comfort -> Hybrid. Both tracks follow identical clinical algorithms per Module 3.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-questionnaire-response"
      },
      "name" : "HEARTLAND Questionnaire Response",
      "description" : "Captures responses to any HEARTLAND-defined Questionnaire (risk inputs, facility tier self-assessment, or patient track assignment). Used as the basis reference for HeartlandRiskAssessment when the questionnaire is HeartlandRiskInputQuestionnaire.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-remote-monitoring-observation"
      },
      "name" : "HEARTLAND Remote Monitoring Observation",
      "description" : "Observation captured via the HEARTLAND remote monitoring kit (Module 5): body weight, blood pressure (systolic/diastolic), or oxygen saturation. Red-flag thresholds are encoded via Observation.referenceRange with meaning.text identifying the rule. Default thresholds (HEARTLAND v3.2 standard, configurable per program): weight gain >=2 lb (0.9 kg)/24h or >=5 lb (2.3 kg)/7d; SBP <90 or >180 mmHg; DBP <50 or >110 mmHg; SpO2 <90% on room air. Per the human filter principle, all non-emergency alerts pass through licensed clinician telephone assessment before ED referral.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-risk-assessment"
      },
      "name" : "HEARTLAND Risk Assessment",
      "description" : "Heart failure risk stratification per the HEARTLAND Protocol v3.2 risk score. The score sums up to 18 points across 10 binary inputs and maps to three qualitative tiers: low (0-4), moderate (5-8), high (>=9). The basis SHALL reference a HeartlandRiskInputQuestionnaire QuestionnaireResponse capturing the 10 input variables.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Questionnaire"
      }],
      "reference" : {
        "reference" : "Questionnaire/heartland-risk-input-questionnaire"
      },
      "name" : "HEARTLAND Risk Input Questionnaire",
      "description" : "Captures the 10 binary inputs to the HEARTLAND Protocol v3.2 risk score. Each item carries an itemWeight extension with its point contribution. Total score (0-18) maps to qualitative tiers: low (0-4), moderate (5-8), high (>=9). Item text is verbatim from manuscript/tables.R Table 1 (HEARTLAND v3.2).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/heartland-risk-tier"
      },
      "name" : "HEARTLAND Risk Tier",
      "description" : "Qualitative risk stratification tiers from the HEARTLAND Protocol v3.2 risk score (0-18 points). Used in HeartlandRiskAssessment.prediction.qualitativeRisk.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/heartland-risk-tier-vs"
      },
      "name" : "HEARTLAND Risk Tier Value Set",
      "description" : "All risk tier codes from the HEARTLAND risk score (low | moderate | high).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-social-support-score"
      },
      "name" : "HEARTLAND Social Support Score",
      "description" : "Boolean indicator of limited social support per the HEARTLAND risk score: true = patient lives alone or has limited social support, contributing 1 point. Perceived social isolation has been independently associated with a 3.74-fold increase in mortality among HF patients (HEARTLAND Protocol v3.2, Module 2).",
      "exampleBoolean" : false
    }],
    "page" : {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
        "valueUrl" : "toc.html"
      }],
      "nameUrl" : "toc.html",
      "title" : "Table of Contents",
      "generation" : "html",
      "page" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "index.html"
        }],
        "nameUrl" : "index.html",
        "title" : "Home",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "background.html"
        }],
        "nameUrl" : "background.html",
        "title" : "Background",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "risk-assessment.html"
        }],
        "nameUrl" : "risk-assessment.html",
        "title" : "Risk Assessment",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "implementation.html"
        }],
        "nameUrl" : "implementation.html",
        "title" : "Tiers and Tracks",
        "generation" : "markdown"
      }]
    },
    "parameter" : [{
      "code" : "path-resource",
      "value" : "input/capabilities"
    },
    {
      "code" : "path-resource",
      "value" : "input/examples"
    },
    {
      "code" : "path-resource",
      "value" : "input/extensions"
    },
    {
      "code" : "path-resource",
      "value" : "input/models"
    },
    {
      "code" : "path-resource",
      "value" : "input/operations"
    },
    {
      "code" : "path-resource",
      "value" : "input/profiles"
    },
    {
      "code" : "path-resource",
      "value" : "input/resources"
    },
    {
      "code" : "path-resource",
      "value" : "input/vocabulary"
    },
    {
      "code" : "path-resource",
      "value" : "input/maps"
    },
    {
      "code" : "path-resource",
      "value" : "input/testing"
    },
    {
      "code" : "path-resource",
      "value" : "input/history"
    },
    {
      "code" : "path-resource",
      "value" : "fsh-generated/resources"
    },
    {
      "code" : "path-pages",
      "value" : "template/config"
    },
    {
      "code" : "path-pages",
      "value" : "input/images"
    },
    {
      "code" : "path-tx-cache",
      "value" : "input-cache/txcache"
    }]
  }
}

```
