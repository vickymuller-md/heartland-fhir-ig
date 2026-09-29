### Background and Evidence Boundary

HEARTLAND proposes an implementation framework for primary care-led heart-failure workflows in rural and resource-limited settings. This guide explores how selected concepts can be represented as FHIR R4 resources.

The purpose of the IG is technical: explicit data structures, named codes, reproducible examples and testable constraints. It does not establish that the framework improves clinical outcomes, that a delivery model is equivalent to another, or that a vendor has implemented the guide.

#### What the candidate adds

Candidate 0.3.0 defines an opaque synthetic county identifier and explicit true-answer weights for the existing ten-criterion heuristic. A specialized response profile distinguishes a complete Boolean response from an unanswered or unknown item. Neither change validates the clinical heuristic or resolves missing clinical information.

Weights, cutoffs, existing codes and the historical method label are retained. The method label references the historical score definition, not the candidate guide's release or the latest Toolkit version.

#### Resources, staffing and clinical decisions

Facility resources and communication methods can be represented for implementation planning. They must not be interpreted as a machine-generated prescription, a reason to reduce required clinical care, or proof that a proposed workflow has been completed. Resource presence does not prove contact, comprehension, delivery or clinician review.

The facility and care-plan artifacts now reflect the Toolkit V3.4 candidate's capacity and education boundaries; the [implementation page](implementation.html) identifies changed answer values and preserved identities. The [workflow map](workflow.html) selects resource families and states what a future operational exchange must preserve. It is not a Task, order, communication or provenance exporter, and does not claim full workflow coverage.

#### Evidence and publication layers

The published protocol article, versioned Toolkit, IG software and technical report are separate artifacts. Peer review of an article is not peer review or clinical validation of every software release.

- Article: Muller Ferreira V. *HEARTLAND Protocol: An Implementation Framework for Primary Care-Led Heart Failure Management in Rural Settings.* Cureus. 2026. [10.7759/cureus.104817](https://doi.org/10.7759/cureus.104817).
- Published Toolkit V3.3: [10.5281/zenodo.19101219](https://doi.org/10.5281/zenodo.19101219).
- Historical IG software v0.1.1: [10.5281/zenodo.19634998](https://doi.org/10.5281/zenodo.19634998).
- Technical report version 1.0: [10.5281/zenodo.22137122](https://doi.org/10.5281/zenodo.22137122).

No new software archive is implied by a successful local build. All examples are synthetic and for educational implementation-support only.
