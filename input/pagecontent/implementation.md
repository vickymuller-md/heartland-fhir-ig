### Implementation Tiers and Monitoring Tracks

HEARTLAND assigns two orthogonal designations: a **facility implementation tier** (driven by site resources) and a **patient monitoring track** (driven by patient access to technology).

#### Facility Implementation Tiers

| Component | Tier 1 - Minimal | Tier 2 - Standard | Tier 3 - Advanced |
|-|-|-|-|
| Setting | Critical Access Hospital, 1-2 nurses | FQHC, community hospital | Regional referral center |
| Risk stratification | Score at discharge | Full CKM + Score | Full CKM + Score |
| GDMT | >=2 classes, prioritize SGLT2i + beta-blocker | Target all 4 classes in 14 days | Rapid-sequence initiation |
| Monitoring | Track B (Analog) | Dual-track A/B | Track A primary + RPM |
| Discharge education | Condensed teach-back (3 domains) | Full teach-back (8 domains) | Full teach-back |
| Follow-up | 48-72 hour call, 14-day visit | 48-hour call, 7-day visit, weekly x4 | 48-hour call, 7-day visit, frequent |
| Staffing | RN/MA + MD | RN champion, MA, PharmD | Full multidisciplinary team |
| CHW program | Alternative/Family | High-risk only | Full integration |
| Financial navigation | Generic Bridge | PAP pursuit + Generic Bridge | PAP pursuit + Generic Bridge |
| Quality metrics | Contact rates + basic GDMT initiation | Dose optimization + readmission reduction | Dose optimization + readmission reduction |

Facility tier is captured via the [`heartland-facility-tier`](StructureDefinition-heartland-facility-tier.html) extension on `Location`, `Organization`, or `CarePlan`. Tier values come from the [`HeartlandImplementationTier`](CodeSystem-heartland-implementation-tier.html) code system: `tier-1-minimal` | `tier-2-standard` | `tier-3-advanced`.

#### Facility Self-Assessment

Use [`HeartlandFacilityTierQuestionnaire`](Questionnaire-heartland-facility-tier-questionnaire.html) to support tier assignment. Five categorical items cover staffing model, PharmD availability, CHW program, monitoring technology, and financial navigation capacity. Tier mapping is qualitative: predominance of `minimal` answers maps to Tier 1; `standard` to Tier 2; `advanced` to Tier 3. The source protocol does not provide a formal scored rubric; this questionnaire is an operational instrument derived from Table 2.

#### Patient Monitoring Tracks

Track A (digital) and Track B (analog) follow **identical clinical algorithms**, differing only in data collection method.

| Aspect | Track A - Digital | Track B - Analog |
|-|-|-|
| Symptom tracking | App-based, structured | Voice telephone calls |
| Devices | Bluetooth-enabled (scale, BP cuff, pulse oximeter) | Manual digital scale, BP cuff, paper diary |
| Data transmission | Automated to clinician dashboard | Manual entry by RN/MA after telephone visit |

Track is captured via the [`heartland-monitoring-track-ext`](StructureDefinition-heartland-monitoring-track-ext.html) extension on `CarePlan`, with values from the [`HeartlandMonitoringTrack`](CodeSystem-heartland-monitoring-track.html) code system: `digital-track-a` | `analog-track-b`.

#### Patient Track Assignment

Use [`HeartlandPatientTrackQuestionnaire`](Questionnaire-heartland-patient-track-questionnaire.html) at intake. Decision logic from Table 4:

- **Smartphone with reliable connectivity AND comfortable using apps** -> Track A
- **Reliable telephone access only** -> Track B
- **Smartphone without app comfort** -> Hybrid (clinical judgment)

The Hozho Trial validated Track B as a primary effective intervention, not a fallback. Patients without smartphones receive equivalent clinical benefit from telephone-based titration.

#### Care Plan Structure

The [`HeartlandCarePlan`](StructureDefinition-heartland-careplan.html) profile organizes activities across five domains:

1. **GDMT initiation/titration** — class count and cadence per facility tier.
2. **Remote monitoring schedule** — frequency aligned with risk tier and monitoring track.
3. **Post-discharge follow-up** — call timing (48-72h vs 48h) and visit timing (14-day vs 7-day).
4. **Discharge education** — 3 condensed domains (Tier 1) or 8 comprehensive domains (Tier 2/3).
5. **Patient assistance navigation** — Generic Bridge and/or PAP pursuit.

See [`CarePlanExampleTier2`](CarePlan-CarePlanExampleTier2.html) for a complete worked example.

#### Remote Monitoring Observations

The [`HeartlandRemoteMonitoringObservation`](StructureDefinition-heartland-remote-monitoring-observation.html) profile constrains `Observation` for the four parameters captured by the basic monitoring kit (~$50-150):

| Observation | LOINC | Default red-flag threshold |
|-|-|-|
| Body weight | 29463-7 | Gain >=2 lb (~0.9 kg)/24h or >=5 lb (~2.3 kg)/7d |
| Systolic BP | 8480-6 | <90 or >180 mmHg |
| Diastolic BP | 8481-4 | <50 or >110 mmHg |
| Oxygen saturation | 59408-5 | <90% on room air |

Thresholds are encoded via `Observation.referenceRange` with `referenceRange.text` describing the rule. Defaults shown above are configurable per program; programs operating in altitudes above 5,000 ft, for instance, may justify a lower SpO2 threshold.

See [`ObservationExampleWeightRedFlag`](Observation-ObservationExampleWeightRedFlag.html) for a worked example.

#### Human Filter

> All non-emergency alerts pass through licensed clinician telephone assessment before emergency department referral.

This principle prevents alert fatigue and false-positive ED cascades from raw device data. A single weight gain of 1.0 kg overnight does not auto-trigger ED transfer; it triggers a clinician call to assess the full clinical picture (intake, symptoms, recent diuretic adherence) before any escalation.
