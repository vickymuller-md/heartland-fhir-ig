# HEARTLAND FHIR Implementation Guide

## Parent Project

Subproject of `~/NIW-project/`. Part of the HEARTLAND Protocol ecosystem for the EB-2 NIW petition of Vicky Muller Ferreira, MD.

## Purpose

HL7 FHIR Implementation Guide defining interoperability resources for the HEARTLAND Protocol. Enables EHR vendors and health IT systems to exchange HEARTLAND-structured data (risk assessments, care plans, remote monitoring observations, questionnaire responses) using the US healthcare interoperability standard.

## NIW Role

- **Prong 2**: infrastructure-level contribution to US health IT — not just an app but a standard
- **Prong 3**: enables nationwide EHR integration; aligns with ONC Cures Act, CMS interoperability mandates, and 21st Century Cures
- **V14 Phase 3 claim**: "explore EHR integration via HL7 FHIR with select pilot sites" — the IG is the prerequisite

## Stack

- **IG Publisher**: HL7 FHIR IG Publisher (Java-based, standard toolchain)
- **Authoring**: FSH (FHIR Shorthand) — human-readable IG authoring language
- **Tools**: SUSHI (FSH compiler), GoFSH (reverse engineering)
- **Output**: HTML IG site (publishable on GitHub Pages or build.fhir.org)
- **FHIR version**: R4 (4.0.1) — most widely adopted in US healthcare

## Resources to Define

### Profiles (constrained FHIR resources)

1. **HeartlandRiskAssessment** (profile on `RiskAssessment`)
   - Subject: Patient
   - Method: HEARTLAND Protocol v3.2
   - Prediction: tier (low/moderate/high) + score (0-18)
   - Basis: references to QuestionnaireResponse with 10 input items
   - Note: aligned to v3.2 published tier set (3 tiers, not 4); the score caps at 18 points (not 10 as originally drafted)

2. **HeartlandCareplan** (profile on `CarePlan`)
   - Category: heart-failure-management
   - Activity: per-tier monitoring schedule, GDMT targets, titration frequency
   - Addresses: Condition (heart failure)

3. **HeartlandQuestionnaireResponse** (profile on `QuestionnaireResponse`)
   - Used for: Tier Selector assessment, Remote Monitoring track assignment
   - Authored by: Practitioner
   - Source: Questionnaire (defined below)

4. **HeartlandRemoteMonitoringObservation** (profile on `Observation`)
   - Category: vital-signs or activity
   - Code: weight, SBP, DBP, HR, SpO2
   - Component: red-flag-threshold extension
   - Device: Track A (digital) or Track B (analog) extension

### Questionnaires

5. **HeartlandTierSelectorQuestionnaire** (`Questionnaire`)
   - Items mapping to the facility assessment questions from Module 8
   - Scoring: Tier 1/2/3 output

6. **HeartlandRiskInputQuestionnaire** (`Questionnaire`)
   - 10 yes/no items for the risk scoring variables

### Extensions

7. **heartland-distance-to-cardiology** — Extension on Patient for distance (miles) to nearest cardiologist
8. **heartland-social-support-score** — Extension on Patient for social support assessment
9. **heartland-monitoring-track** — Extension on CarePlan for Track A/B assignment

### ValueSets & CodeSystems

10. **HeartlandRiskTier** CodeSystem — low | moderate | high | very-high
11. **HeartlandImplementationTier** CodeSystem — tier-1-minimal | tier-2-standard | tier-3-advanced
12. **HeartlandMonitoringTrack** CodeSystem — digital-track-a | analog-track-b
13. **HeartlandEvidenceLevel** CodeSystem — established | emerging | pragmatic

### Examples

- Example Patient with distance-to-cardiology and social-support extensions
- Example RiskAssessment with all 10 basis Observations
- Example CarePlan for a high-risk Tier 2 facility
- Example QuestionnaireResponse for Tier Selector

## Directory Structure

```
fhir-ig/
├── CLAUDE.md                  # this file
├── ig.ini                     # IG publisher config
├── sushi-config.yaml          # SUSHI/FSH configuration
├── input/
│   ├── fsh/
│   │   ├── profiles/          # .fsh profile definitions
│   │   ├── extensions/        # .fsh extension definitions
│   │   ├── questionnaires/    # .fsh questionnaire definitions
│   │   ├── codesystems/       # .fsh code system definitions
│   │   ├── valuesets/         # .fsh value set definitions
│   │   └── examples/          # .fsh example instances
│   ├── pagecontent/           # Markdown narrative pages
│   │   ├── index.md
│   │   ├── background.md
│   │   ├── risk-assessment.md
│   │   └── implementation.md
│   └── images/
├── output/                    # Generated IG HTML (gitignored)
├── .zenodo.json
├── LICENSE
└── README.md
```

## DOI Strategy

- GitHub repo: `vickymuller-md/heartland-fhir-ig` (public)
- Zenodo DOI via GitHub integration
- Also consider registration on FHIR IG Registry (registry.fhir.org)

## Prerequisites

- Java 17+ (for IG Publisher)
- Node.js (for SUSHI)
- `npm install -g fsh-sushi`

## Build

```bash
# Compile FSH → FHIR JSON
sushi .

# Run IG Publisher (generates HTML)
./_genonce.sh   # or java -jar publisher.jar -ig ig.ini

# Output in output/ directory
open output/index.html
```

## Rules

- English only
- All clinical content must match HEARTLAND Protocol v3.2 text exactly
- FHIR R4 (4.0.1) — do NOT use R5 (not widely adopted in US yet)
- Follow US Core IG conventions where applicable
- Author: Vicky Muller Ferreira, MD
- License: MIT (code) + CC-BY 4.0 (narrative content)
- Include must-support flags on clinically critical elements

## Execution Plan

### Session 1: Scaffold + core profiles — DONE (2026-04-16)
1. Init SUSHI project (sushi-config.yaml, ig.ini) — done
2. Define CodeSystems and ValueSets (4 code systems) — done
3. Define RiskAssessment profile + risk input Questionnaire — done
4. Define extensions (distance, social-support, monitoring-track) — done
5. Write examples — done
6. Compile with SUSHI, fix errors — 0 errors, 1 warning (menu)

### Session 2: Remaining resources + narrative — DONE (2026-04-16)
1. CarePlan profile + HeartlandFacilityTier extension — done
2. QuestionnaireResponse profile — done
3. RemoteMonitoringObservation profile + LOINC value set — done
4. Two questionnaires: HeartlandFacilityTierQuestionnaire (5 items) + HeartlandPatientTrackQuestionnaire (3 items) — done
5. Narrative pages (index, background, risk-assessment, implementation) + menu — done
6. Three new examples (CarePlan, Observation with red flag, QR for risk inputs) — done

### Session 3: Publish + deploy
1. Install Java 17+ + IG Publisher
2. Run IG Publisher, fix QA errors
3. README + LICENSE + .zenodo.json
4. Authenticate gh as vickymuller-md (per memory note)
5. Push to vickymuller-md/heartland-fhir-ig
6. Deploy to GitHub Pages
7. Create release → Zenodo DOI
8. (Optional) Submit to FHIR IG Registry

## Timeline

2–3 sessions estimated. Sessions 1 + 2 done 2026-04-16; Session 3 (publish) pending.

## Status (2026-04-16)

- 21 FSH source files in `input/fsh/` across codesystems, valuesets, extensions, profiles, questionnaires, examples
- 4 narrative pages in `input/pagecontent/`
- SUSHI compile target: 0 errors, 0 warnings (Sessions 1+2)
- Generated: 4 CodeSystems, 5 ValueSets, 8 StructureDefinitions, 6 Instances (3 Questionnaires + 3 examples) + ImplementationGuide
- Source-of-truth coverage: HEARTLAND Protocol v3.2 risk score, 3 tiers, 2 tracks, Tabela 2 (full), Tabela 4 (full), Module 5 monitoring observations
