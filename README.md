# HEARTLAND Protocol FHIR Implementation Guide

Draft FHIR R4 resources for educational implementation-support and synthetic interoperability testing. Candidate **0.3.0** is not a clinical validation, vendor certification, or assertion of full Toolkit V3.4 workflow coverage.

Public site: [fhir.heartlandprotocol.org](https://fhir.heartlandprotocol.org). The deployed pages and historical archives can lag this checkout; a local build is not a publication.

## Scope and boundary

This Implementation Guide is an educational implementation-support resource for healthcare professionals. It does not provide medical diagnoses, treatment recommendations for individual patients, or replace clinical judgment. Not intended for direct patient care. For professional use only.

The HEARTLAND Risk Stratification Framework is proposed pending validation. It has not been validated against clinical outcomes data. All bundled examples are synthetic. Do not submit real patient information to demonstrations or validation fixtures.

FHIR R4 **4.0.1**, with dependency on US Core **6.1.0**. Importing US Core does not mean every HEARTLAND profile derives from, or demonstrates conformance to, a US Core profile. A successful compiler or validator run is not evidence of EHR integration, notification delivery, clinical acceptance, or outcomes.

## Candidate changes

- Ten weighted criteria retain the existing 0–18-point heuristic and qualitative cutoffs: low 0–4, moderate 5–8, high 9–18.
- Each Boolean questionnaire item carries `HeartlandRiskTruePoints`: its explicit true-answer weight. False is zero; missing or unknown is not false.
- `HeartlandRiskInputResponse` requires exactly the ten link IDs in Questionnaire order, each with one actual Boolean value; no nested or additional items. Link IDs identify criteria; do not compute weights by array position. Only completed or amended responses satisfy this specialized contract.
- `HeartlandSyntheticCountyCode` defines the existing Synthetic export's opaque identifier. It is not an ANSI/FIPS county GEOID or postal code.
- The worked risk example consistently uses CKM stage, not eGFR, in its 11-point total.
- The body-weight example no longer compares body mass in kg with a kg/day reference range, or claims a change without a prior measurement.
- The monitoring value set corrects the diastolic LOINC code from 8481-4 (one-hour maximum systolic pressure) to 8462-4 (diastolic pressure). This corrects a mapping, not a clinical threshold; do not silently relabel historical observations.
- Existing canonical URLs, HEARTLAND risk codes and risk method text `HEARTLAND Protocol v3.2 Risk Score` remain for compatibility. This historical label is not the current Toolkit version. Historical responses are not rewritten.

## Resource inventory

| Kind | Count |
|-|-|
| Profiles | 6 |
| Extensions | 7 |
| CodeSystems | 5 |
| ValueSets | 5 |
| Questionnaires | 3 |
| Synthetic examples | 5 |
| ImplementationGuide manifest | 1 |

SUSHI therefore produces 31 resource files plus the separate IG manifest. There are four narrative pages. Conformance resources in this candidate are draft and experimental; clinical example statuses retain their resource-specific meaning.

## Build and structural checks

Use Node.js, SUSHI and Java 17 or later. The verified local compiler is SUSHI 3.19.0; do not infer equivalence from an unrecorded tool upgrade.

```sh
sushi .
node --test tests/risk-contract.test.mjs
node tests/risk-contract.test.mjs --fixtures /absolute/new/evidence-directory
```

The fixture command refuses an existing directory. Its manifest declares expected positive and negative cases. Run the official HL7 validator against the `qr-*.json`, `weight-*.json`, `county-*.json` and `risk-*.json` files with:

- FHIR version 4.0.1;
- `-ig fsh-generated/resources`;
- an explicitly recorded terminology endpoint, such as `-tx https://tx.fhir.org/r4`;
- a JSON OperationOutcome output for inspection.

Do not infer success from the validator process exit alone: inspect every OperationOutcome. Check the JSON output against the manifest with `node tests/risk-contract.test.mjs --results /absolute/evidence-directory/manifest.json /absolute/validator-output.json`. Record terminology failures separately; `-tx n/a` cannot establish terminology correctness. The verifier requires the expected error identifiers for targeted negative cases, not merely an unrelated validation failure.

Use IG Publisher 2.3.4 with Java 17 and Jekyll to build the browsable reference. `ig.ini` selects the local `heartland-template`, which pins `fhir2.base.template#0.1.0`, replacing the retired `fhir.base.template` in accordance with the [FHIR security notice](https://www.fhir.org/guides/security-notices/2026-03-npm-dependencies.html). Install FHIR content with dedicated FHIR tooling, not the standard npm client. The existing `_genonce.sh` wrapper may use an older cached Publisher and probes an HTTP terminology URL; invoke the verified Publisher explicitly with `-ig . -tx https://tx.fhir.org/r4` and inspect the QA report. Generated `output/` is separate from deployed `site/public/ig/`; publish only after reviewing the generated diff.

The local template inherits the official base unchanged except for its `fragment-pagebegin.html`: the Publisher-generated jurisdiction flag resolves through `../assets/images/` from the language subdirectories created by this pinned template. The base's optional `site.data.info.assets` is not populated in this build; other template assets are copied into each language folder, whereas the flag is only at the output root. This derived fragment retains the upstream **CC0-1.0** license (FHIR IG Translated Base Template, author `http://hl7.org/fhir`, version 0.1.0; original fragment SHA-256 `431379c0d2dabaa855c2d57f051b08e9f0d00cb23bdf70447845bf63170996f9`). The contract test reverses the sole substitution and checks that original hash. No executable template scripts are added. Compare the entire fragment against that exact cached base when upgrading; do not fix generated HTML by hand or suppress broken-link checks.

The template also appends scoped CSS: long canonical identifiers and summary metadata can wrap on narrow screens. The home page's wide dependency table has a labeled, keyboard-focusable scroll region. These changes do not alter identifier values or inherited resource definitions. Generated package indexes are ignored by git.

Use an explicit English Java locale so the generated English guide does not inherit another language from the developer's computer:

```sh
java -Duser.language=en -Duser.country=US -Xmx4g -jar input-cache/publisher-2.3.4.jar -ig . -tx https://tx.fhir.org/r4
FHIR_IG_OUTPUT=output node --test tests/risk-contract.test.mjs
```

The output check examines both FHIR errors and broken links, verifies every generated jurisdiction image, and checks the normalized R4 manifest. The raw SUSHI IG contains Publisher build parameters; the distributed IG normalizes non-R4 parameters into the official `ig-parameter` extension. Validate the resources inside the final `package.tgz`, not only the build recipe. Use `-language en -locale en` with the standalone validator.

Publisher 2.3.4 adds two internal annotations (`resource-information` and `implementationguide-page`) to each manifest resource entry. Validator 6.10.4 does not resolve their definitions even with the tooling package loaded. Keep its unfiltered report: 31 content resources can have no errors while the separate manifest retains 93 diagnostics about these annotations. This is **not** a claim that all 32 resources validate without errors. `node tests/risk-contract.test.mjs --package-results /absolute/extracted/package /absolute/validator-output.json /absolute/generated/output` verifies every reference, annotation value, page target and exact diagnostic; records resource/result hashes; and exercises negative classification checks. It neither suppresses diagnostics nor supplies invented extension definitions. The package's separate `other/validation-oo.json` is a build report, not a 33rd authored content resource. This tooling limitation remains explicit when distributing or assessing the candidate.

## Remaining integration boundary

Task/ServiceRequest/Provenance mapping of the app's newer care workflows, complete Toolkit V3.4 tier/care-plan alignment, cross-resource consistency and vendor-side testing are separate release checks. A generic `RiskAssessment.basis` reference does not certify its target or recompute a score. Generic QuestionnaireResponse and Observation representations remain permitted for compatibility; only the specialized risk response expresses the complete Boolean capture contract.

The synthetic county extension is compatible with the existing export shape, but this change does not add profile declarations to that exporter or certify the full exported Bundle. No cohort regeneration is required.

## Provenance and citation

These are different artifacts and versions:

- Article: Muller Ferreira V. *HEARTLAND Protocol: An Implementation Framework for Primary Care-Led Heart Failure Management in Rural Settings.* Cureus. 2026. [10.7759/cureus.104817](https://doi.org/10.7759/cureus.104817).
- Published Toolkit V3.3: [10.5281/zenodo.19101219](https://doi.org/10.5281/zenodo.19101219). Toolkit V3.4 remains a separate release candidate.
- Historical IG software **v0.1.1**: [10.5281/zenodo.19634998](https://doi.org/10.5281/zenodo.19634998). This DOI does not identify candidate 0.3.0.
- Technical report: *An Open FHIR R4 Implementation Guide for Structured Rural Heart-Failure Research Workflows*, **1.0**. [Version DOI](https://doi.org/10.5281/zenodo.22137122); [concept DOI](https://doi.org/10.5281/zenodo.22137121). Not a software conformance certificate.
- [OSF project](https://doi.org/10.17605/OSF.IO/YUSGH).
- Historical Software Heritage snapshot, archived 2026-08-25: [swh:1:snp:f6fb5441d0f21ea983944164fed3dbcdff6d04b0](https://archive.softwareheritage.org/swh:1:snp:f6fb5441d0f21ea983944164fed3dbcdff6d04b0/). Archival does not imply endorsement or validation.

## Author and license

Vicky Muller Ferreira, MD · [ORCID 0009-0009-1099-5690](https://orcid.org/0009-0009-1099-5690) · vickymuller@heartlandprotocol.org

Narrative and generated FHIR resources: [CC-BY 4.0](LICENSE). Build tooling: [MIT](LICENSE-CODE).
[Source and issues](https://github.com/vickymuller-md/heartland-fhir-ig). Clinical changes require the corresponding governed protocol review; technical review is not clinical approval.
