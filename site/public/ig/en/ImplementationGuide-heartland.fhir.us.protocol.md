# Resource HEARTLAND Protocol FHIR Implementation Guide



## Resource Content

```json
{
  "resourceType" : "ImplementationGuide",
  "id" : "heartland.fhir.us.protocol",
  "language" : "en",
  "url" : "https://fhir.heartlandprotocol.org/ImplementationGuide/heartland.fhir.us.protocol",
  "version" : "0.3.0",
  "name" : "HeartlandProtocolIG",
  "title" : "HEARTLAND Protocol FHIR Implementation Guide",
  "status" : "draft",
  "date" : "2026-09-29T19:00:36-04:00",
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
  "description" : "Draft FHIR R4 educational implementation-support specification for the HEARTLAND ecosystem. Profiles, extensions, questionnaires and synthetic examples support technical evaluation; clinical validation, vendor interoperability and full Toolkit V3.4 workflow coverage are not established.",
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
    "version" : "7.4.0"
  },
  {
    "id" : "hl7ext",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on the HL7 Extension Pack"
    }],
    "uri" : "http://hl7.org/fhir/extensions/ImplementationGuide/hl7.fhir.uv.extensions",
    "packageId" : "hl7.fhir.uv.extensions.r4",
    "version" : "5.3.0"
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
      "extension" : [{
        "url" : "code",
        "valueString" : "i18n-default-lang"
      },
      {
        "url" : "value",
        "valueString" : "en"
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
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "i18n-default-lang"
      },
      {
        "url" : "value",
        "valueString" : "en"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    }],
    "resource" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CarePlan"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CarePlan-CarePlanExampleTier2.html"
      }],
      "reference" : {
        "reference" : "CarePlan/CarePlanExampleTier2"
      },
      "name" : "Example: Draft Tier 2 Plan with Track B Context",
      "description" : "Synthetic planning illustration aligned with the Toolkit V3.4 candidate. The historical resource identifier is retained, but no activity is scheduled or completed, no clinician is fabricated and no patient-specific prescription is issued. Tier 2 and Track B are illustrative declared context, not questionnaire-derived decisions or evidence of actual resources.",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-careplan"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "RiskAssessment"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "RiskAssessment-RiskAssessmentExampleHigh.html"
      }],
      "reference" : {
        "reference" : "RiskAssessment/RiskAssessmentExampleHigh"
      },
      "name" : "Example: High-Risk HEARTLAND Risk Assessment",
      "description" : "Synthetic risk assessment scoring 11/18 points (>=9 = High Risk tier). Inputs: age >=75 (+2), prior HF hosp 6mo (+3), CKM Stage 3-4 (+2), BP <100 (+2), distance >50 mi (+1), limited social support (+1). Demonstrates a proposed heuristic, not a treatment instruction or validated outcome prediction.",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-assessment"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "QuestionnaireResponse"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "QuestionnaireResponse-QuestionnaireResponseExampleRiskInputs.html"
      }],
      "reference" : {
        "reference" : "QuestionnaireResponse/QuestionnaireResponseExampleRiskInputs"
      },
      "name" : "Example: Risk Input Questionnaire Response (score 11)",
      "description" : "Responses to the HeartlandRiskInputQuestionnaire for PatientExampleRural. Six items answered true (age >=75, prior HF hosp 6mo, SBP <100, CKM Stage 3-4, distance >50 mi, limited social support) totaling 11 points -> High Risk tier. Referenced by RiskAssessmentExampleHigh.basis[0].",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-risk-input-response"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Patient"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Patient-PatientExampleRural.html"
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
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ObservationExampleWeightRedFlag.html"
      }],
      "reference" : {
        "reference" : "Observation/ObservationExampleWeightRedFlag"
      },
      "name" : "Example: Synthetic Body Weight Observation",
      "description" : "Single synthetic body-mass reading. Historical resource ID retained for compatibility; this example does not establish a weight change, alert, delivery, or clinical response. A rate-of-change threshold is not a numeric reference range for body mass.",
      "exampleCanonical" : "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-careplan.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-careplan"
      },
      "name" : "HEARTLAND Care Plan",
      "description" : "Draft planned-activity representation aligned with the HEARTLAND Toolkit V3.4 candidate. Facility tier describes delivery capacity, not clinical eligibility, treatment timing or exclusion of education domains. All eight educational domains are offered at every tier; format, sequence and support can differ. Planned activities are not evidence of professional review, completed teach-back, contact or care. Tier and monitoring-track extensions retain their existing identities. The profile does not encode the full operational journal.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-risk-input-response.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-risk-input-response"
      },
      "name" : "HEARTLAND Complete Risk Input Response",
      "description" : "Complete, flat, explicitly answered Boolean input contract for the candidate risk questionnaire. Link IDs identify the ten weighted criteria; response order must also match the Questionnaire. This profile does not resolve unknown clinical inputs, validate the risk heuristic, or prove a referenced RiskAssessment total.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-distance-to-cardiology.html"
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
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-heartland-evidence-level.html"
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
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-heartland-evidence-level-vs.html"
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
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-facility-tier.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-facility-tier"
      },
      "name" : "HEARTLAND Facility Implementation Tier",
      "description" : "Records the declared implementation capacity tier (1 Minimal, 2 Standard, 3 Advanced) for a facility, organization or care plan. Tier guides delivery format, sequence and support; it does not authorize reduced clinical requirements, delayed risk-led follow-up or exclusion of an educational domain. A recorded tier is not validated readiness, staffing coverage or an automatic assignment.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Questionnaire"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Questionnaire-heartland-facility-tier-questionnaire.html"
      }],
      "reference" : {
        "reference" : "Questionnaire/heartland-facility-tier-questionnaire"
      },
      "name" : "HEARTLAND Facility Tier Questionnaire",
      "description" : "Five capacity-capture items (four choices and one Boolean) for staffing, pharmacy, community health workers, monitoring and financial navigation. This descriptive instrument does not assign a tier, establish clinical eligibility or verify readiness. Capacity gaps, responsible professionals, coverage and an agreed implementation tier require separate documentation. Candidate 0.3.0 revises four answer strings; historical responses retain their original version and values.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-heartland-implementation-tier.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/heartland-implementation-tier"
      },
      "name" : "HEARTLAND Implementation Tier",
      "description" : "Declared facility implementation capacity tiers, retaining historical code identities. Capacity informs delivery format, sequence and support; it does not determine clinical eligibility, permit delayed risk-led care or exclude educational domains. All eight domains are offered at every tier. These labels are not a scored readiness instrument or proof of actual coverage.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-heartland-implementation-tier-vs.html"
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
        "valueString" : "Questionnaire"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Questionnaire-heartland-patient-track-questionnaire.html"
      }],
      "reference" : {
        "reference" : "Questionnaire/heartland-patient-track-questionnaire"
      },
      "name" : "HEARTLAND Monitoring Access Questionnaire",
      "description" : "Three Boolean items capture smartphone/connectivity, app comfort and telephone access. They do not capture patient preference or automatically assign a monitoring route. Choice, supported alternatives and an unresolved access gap require separate documentation. Existing questionnaire identity and item link IDs are preserved.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-heartland-monitoring-observation-code-vs.html"
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
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-heartland-monitoring-track.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/heartland-monitoring-track"
      },
      "name" : "HEARTLAND Monitoring Track",
      "description" : "Documented monitoring routes with stable Track A and Track B codes. A route does not establish equivalent outcomes, successful contact, device availability or completed monitoring. Clinical requirements are not reduced by the route; access, preference and the supported local plan require separate documentation.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-monitoring-track-ext.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-monitoring-track-ext"
      },
      "name" : "HEARTLAND Monitoring Track Assignment",
      "description" : "Records a documented CarePlan monitoring route: Track A (digital) or Track B (analog, telephone/paper). Access, patient preference and the supported local plan inform the choice; facility tier alone does not select a route. The code does not prove contact, completed monitoring or equivalent outcomes, and does not change clinical requirements. No third hybrid code is defined.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-heartland-monitoring-track-vs.html"
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
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-patient.html"
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
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-risk-true-points.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-risk-true-points"
      },
      "name" : "HEARTLAND Points for a True Answer",
      "description" : "Positive weight for an explicitly true Boolean answer to a risk questionnaire item. False contributes zero. Missing or unknown is not false and must not be scored by omission. This extension records a weight, not a validated outcome probability or an executable calculation.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-questionnaire-response.html"
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
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-remote-monitoring-observation.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-remote-monitoring-observation"
      },
      "name" : "HEARTLAND Remote Monitoring Observation",
      "description" : "Draft representation of body weight, blood pressure, or oxygen saturation. This profile does not encode or validate a clinical alert algorithm. A body-mass observation must not use a rate-of-change threshold as its numeric reference range. Time-window comparisons need dated source observations, matching units, and a separately governed clinical policy. Synthetic examples do not establish alert delivery, clinical assessment, or clinical outcomes.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-risk-assessment.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-risk-assessment"
      },
      "name" : "HEARTLAND Risk Assessment",
      "description" : "Heart failure risk stratification per the HEARTLAND Protocol v3.2 risk score. The score sums up to 18 points across ten weighted criteria and maps to three qualitative tiers: low (0-4), moderate (5-8), high (>=9). It is a non-validated implementation heuristic that assigns monitoring intensity; it does not predict an outcome and has not been validated against outcome data. For the complete Boolean capture contract use HeartlandRiskInputResponse. Legacy Observation and generic QuestionnaireResponse basis references remain allowed for compatibility; this profile alone does not validate their content or recompute the total. The tier travels in prediction.qualitativeRisk and the point total in the heartland-risk-score-total extension; probability[x] is prohibited, because a point count is not a likelihood of an outcome.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Questionnaire"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Questionnaire-heartland-risk-input-questionnaire.html"
      }],
      "reference" : {
        "reference" : "Questionnaire/heartland-risk-input-questionnaire"
      },
      "name" : "HEARTLAND Risk Input Questionnaire",
      "description" : "Captures ten weighted criteria using Boolean answers for the historical HEARTLAND risk-score definition. Each item carries HeartlandRiskTruePoints for the contribution of an explicit true answer; false contributes zero, and an absent answer is not false. Total score (0-18) maps to qualitative tiers: low (0-4), moderate (5-8), high (>=9). Item text is verbatim from manuscript/tables.R Table 1 (HEARTLAND v3.2).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-heartland-risk-score.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/heartland-risk-score"
      },
      "name" : "HEARTLAND Risk Score Codes",
      "description" : "Codes identifying the HEARTLAND risk score and its tier when either is carried on an Observation rather than on a RiskAssessment — for example an Observation referenced from HeartlandRiskAssessment.basis holding the point total. The score is a non-validated implementation heuristic: the total is a point count, not a probability, and the tier assigns monitoring intensity rather than predicting an outcome.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-risk-score-total.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-risk-score-total"
      },
      "name" : "HEARTLAND Risk Score Total",
      "description" : "Total of the HEARTLAND risk score: an integer count of 0 to 18 points summed from ten weighted criteria. This is a non-validated implementation heuristic used to assign monitoring intensity; it is a point total, not a probability, not a predicted event rate and not a validated prognostic estimate. It is carried in this extension rather than in RiskAssessment.prediction.probabilityDecimal because that element is defined in FHIR R4 as the likelihood of a specified outcome, expressed as a percentage.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-heartland-risk-tier.html"
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
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-heartland-risk-tier-vs.html"
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
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-social-support-score.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-social-support-score"
      },
      "name" : "HEARTLAND Social Support Score",
      "description" : "Boolean indicator of limited social support per the HEARTLAND risk score: true = patient lives alone or has limited social support, contributing 1 point. Perceived social isolation has been independently associated with a 3.74-fold increase in mortality among HF patients (HEARTLAND Protocol v3.2, Module 2).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-heartland-synthetic-county-code.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/heartland-synthetic-county-code"
      },
      "name" : "HEARTLAND Synthetic County Identifier",
      "description" : "Opaque synthetic identifier emitted by HEARTLAND Synthetic, not an ANSI/FIPS county GEOID, postal code, or evidence of real residence. Preserve the code as supplied; no real-geography lookup or linkage is implied.",
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
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "workflow.html"
        }],
        "nameUrl" : "workflow.html",
        "title" : "Workflow Mapping",
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
