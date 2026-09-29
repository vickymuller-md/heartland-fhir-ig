import { Masthead, Colophon } from "@heartland/ui";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Brand primitives -- local glyph only; Masthead/Colophon/Mark come from   */
/*  the shared @heartland/ui package.                                        */
/* ────────────────────────────────────────────────────────────────────────── */

function Glyph({ d }: { d: string }) {
  return (
    <svg
      className="h-7 w-7 text-alert"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                      */
/* ────────────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Masthead
        currentSite="fhir"
        navItems={[
          {
            label: "Browse IG",
            href: "/ig/artifacts.html",
          },
          {
            label: "Research",
            href: "https://doi.org/10.5281/zenodo.19101219",
            external: true,
          },
        ]}
        cta={{
          label: "View source",
          href: "https://github.com/vickymuller-md/heartland-fhir-ig",
          external: true,
        }}
      />
      <Hero />
      <WhyExists />
      <Modules />
      <Status />
      <Downloads />
      <OpenScience />
      <Colophon
        currentSite="fhir"
        description="Draft FHIR R4 structures and synthetic examples for educational implementation-support. Clinical validation and vendor interoperability are not established. Narrative CC-BY 4.0; tooling MIT."
        extraBlocks={[
          {
            title: "IG Artifacts",
            links: [
              { label: "Browse IG", href: "/ig/artifacts.html" },
              {
                label: "GitHub",
                href: "https://github.com/vickymuller-md/heartland-fhir-ig",
                external: true,
              },
            ],
          },
        ]}
      />
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */

function Downloads() {
  return (
    <section aria-labelledby="downloads-heading" className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 id="downloads-heading" className="font-editorial text-3xl font-semibold tracking-tight text-cool">
          Explore the candidate files
        </h2>
        <p className="mt-4 max-w-3xl font-editorial leading-relaxed text-cool/75">
          Version 0.3.0 is draft and experimental, for technical evaluation with synthetic examples.
          These files are separate from the historical Zenodo archives. R4B conversions are not included.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href="/ig/package.tgz" download className="rounded-full bg-cool px-6 py-3 font-editorial text-sm font-medium text-terminal hover:bg-signal focus-visible:outline-2 focus-visible:outline-offset-4">
            Download R4 package (.tgz)
          </a>
          <a href="/ig/full-ig.zip" download className="rounded-full border border-cool px-6 py-3 font-editorial text-sm font-medium text-cool hover:bg-panel focus-visible:outline-2 focus-visible:outline-offset-4">
            Download offline guide (.zip)
          </a>
          <a href="/ig/searchform.html" className="rounded-full border border-grid px-6 py-3 font-editorial text-sm font-medium text-cool hover:bg-panel focus-visible:outline-2 focus-visible:outline-offset-4">
            Find a resource
          </a>
        </div>
        <p className="mt-6 max-w-3xl font-editorial text-sm leading-relaxed text-cool/70">
          The <a href="/ig/qa.html" className="underline">Publisher QA report</a> is included.
          The standalone validator separately reports unresolved tooling annotations in the IG manifest;
          see the <a href="https://github.com/vickymuller-md/heartland-fhir-ig#build-and-structural-checks" className="underline">documented limitation</a>.
          Neither check establishes clinical validation or vendor interoperability.
        </p>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-grid bg-panel px-3.5 py-1.5 font-editorial text-[12px] tracking-tight text-cool/80">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              FHIR R4 · v0.3.0 draft · CC&#8209;BY 4.0
            </p>

            <h1 className="mt-7 text-[clamp(2.4rem,5.6vw,4.75rem)] font-editorial font-semibold leading-[1.04] tracking-[-0.025em] text-cool">
              Structured data for heart failure care{" "}
              <span className="font-display italic font-normal text-alert">
                where there&rsquo;s
              </span>{" "}
              no cardiologist.
            </h1>

            <p className="mt-7 max-w-2xl font-editorial text-[17px] leading-[1.65] text-cool/75 md:text-[18px]">
              A draft FHIR R4 specification for structured HEARTLAND examples.
              Explicit risk-input weights, complete-response checks, and synthetic
              identifiers support technical evaluation. Vendor interoperability
              and clinical validation are not established.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="/ig/artifacts.html"
                className="group inline-flex items-center gap-3 rounded-full bg-cool px-7 py-4 font-editorial text-[15px] font-medium text-terminal transition-colors hover:bg-alert hover:text-cool"
              >
                Browse the IG
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/ig/background.html"
                className="group inline-flex items-center gap-2 font-editorial text-[15px] font-medium text-cool/85 transition-colors hover:text-alert"
              >
                Read background
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://doi.org/10.5281/zenodo.19101219"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-editorial text-[15px] font-medium text-cool/85 transition-colors hover:text-alert"
              >
                Read source protocol
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <p className="mt-12 max-w-xl font-editorial text-[12.5px] leading-relaxed text-stone">
              For professional educational use, not direct patient care.
              Examples are synthetic. Do not enter real patient information.
              Candidate 0.3.0 is separate from historical software archives.
            </p>
          </div>

          <div className="md:col-span-4">
            <HeroIllustration className="mx-auto h-auto w-full max-w-[360px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 520" fill="none" aria-hidden="true">
      <ellipse cx="270" cy="270" rx="240" ry="232" fill="currentColor" opacity="0.55" className="text-panel-hi" />
      <path d="M 20 360 Q 130 320 260 350 T 510 340" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-cool/35" />
      <path d="M 20 405 Q 150 370 280 395 T 510 388" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-cool/20" />
      {/* Document grid representing FHIR resources */}
      <g transform="translate(125 110)">
        <rect width="230" height="260" rx="16" fill="currentColor" className="text-panel" stroke="currentColor" strokeWidth="1.4" />
        <rect x="20" y="28" width="120" height="10" rx="3" fill="currentColor" className="text-cool/65" />
        <rect x="20" y="50" width="170" height="6" rx="2" fill="currentColor" className="text-cool/25" />
        <rect x="20" y="64" width="150" height="6" rx="2" fill="currentColor" className="text-cool/25" />
        <rect x="20" y="78" width="160" height="6" rx="2" fill="currentColor" className="text-cool/25" />
        <rect x="20" y="105" width="190" height="1.4" fill="currentColor" className="text-grid-hi" />
        <rect x="20" y="120" width="60" height="14" rx="4" fill="currentColor" className="text-alert" opacity="0.85" />
        <rect x="90" y="120" width="60" height="14" rx="4" fill="currentColor" className="text-signal" opacity="0.85" />
        <rect x="20" y="148" width="190" height="6" rx="2" fill="currentColor" className="text-cool/30" />
        <rect x="20" y="160" width="170" height="6" rx="2" fill="currentColor" className="text-cool/30" />
        <rect x="20" y="172" width="180" height="6" rx="2" fill="currentColor" className="text-cool/30" />
        <rect x="20" y="184" width="140" height="6" rx="2" fill="currentColor" className="text-cool/30" />
        <rect x="20" y="210" width="190" height="1.4" fill="currentColor" className="text-grid-hi" />
        {/* mini ECG */}
        <path d="M 20 235 H 50 L 56 222 L 62 252 L 68 215 L 76 245 L 82 235 H 130 L 136 226 L 142 248 L 148 218 L 156 238 H 210" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-alert" />
      </g>
      {/* Sun arc */}
      <path d="M 380 130 a 38 38 0 1 1 -76 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" className="text-signal" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */

function WhyExists() {
  return (
    <section className="border-y border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-alert">
            Why this IG exists
          </p>
          <h2 className="mt-5 text-[clamp(1.85rem,3.5vw,2.85rem)] font-editorial font-semibold leading-[1.15] tracking-[-0.015em] text-cool">
            The protocol is published. The{" "}
            <span className="font-display italic font-normal text-alert">EHR pieces</span>{" "}
            are not. This IG is the bridge.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <StatCard value="10" heading="weighted criteria" note="Explicit true-answer weights; missing is not false." />
          <StatCard value="0–18" heading="heuristic points" note="A proposed framework pending validation, not an outcome probability." accent />
          <StatCard value="R4" heading="FHIR 4.0.1" note="Draft profiles and examples for reproducible technical evaluation." />
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center font-editorial text-[15.5px] leading-relaxed text-cool/75">
          A structured resource is only one part of an implementation.
          Compilation, terminology checks, cross-resource consistency and
          external EHR testing are separate checks. None proves clinical benefit.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <Disclaimer heading="Professional use only">
            This Implementation Guide is an educational
            implementation-support resource for healthcare professionals. It
            does not provide medical diagnoses, treatment recommendations for individual
            patients, or replace clinical judgment. Not intended for direct
            patient care. For professional use only.
          </Disclaimer>
          <Disclaimer heading="Framework in development">
            The HEARTLAND Risk Stratification Framework is a proposed tool
            under development. It has not been validated against clinical
            outcomes data. Formal validation through registry data is a
            defined research objective.
          </Disclaimer>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  heading,
  note,
  accent,
}: {
  value: string;
  heading: string;
  note: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-grid bg-terminal p-8 transition-colors hover:border-cool/40">
      <p
        className={
          "font-editorial text-5xl font-semibold leading-none tracking-[-0.02em] md:text-6xl " +
          (accent ? "text-alert" : "text-cool")
        }
      >
        {value}
      </p>
      <p className="mt-5 font-editorial text-[15.5px] font-medium text-cool">{heading}</p>
      <p className="mt-1.5 font-editorial text-[14px] leading-relaxed text-cool/65">{note}</p>
    </div>
  );
}

function Disclaimer({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <aside role="note" className="rounded-2xl border border-grid bg-terminal p-6">
      <p className="font-editorial text-[12.5px] uppercase tracking-[0.14em] text-alert">{heading}</p>
      <p className="mt-3 font-editorial text-[14px] leading-relaxed text-cool/75">{children}</p>
    </aside>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */

type ModuleEntry = {
  title: string;
  body: string;
  href: string | null;
  artifact: string;
  glyph: string;
  available: boolean;
};

const MODULES: ModuleEntry[] = [
  {
    title: "Risk stratification",
    body: "Ten weighted criteria, explicit true-answer weights and a complete Boolean response profile; missing inputs are not zero.",
    href: "/ig/StructureDefinition-heartland-risk-assessment.html",
    artifact: "RiskAssessment + Questionnaire",
    glyph: "M 4 18 L 9 9 L 13 14 L 17 5 L 20 11 M 4 21 H 20",
    available: true,
  },
  {
    title: "Medication planning",
    body: "A draft care plan aligned with the Toolkit candidate. Tier does not prescribe treatment timing; a plan is not an authorized medication order.",
    href: "/ig/StructureDefinition-heartland-careplan.html",
    artifact: "CarePlan profile",
    glyph: "M 8 3 H 16 V 9 L 21 14 V 21 H 3 V 14 L 8 9 Z M 12 14 V 18",
    available: true,
  },
  {
    title: "Monitoring route",
    body: "Digital and analog track codes record communication context; they do not prove contact, delivery or equivalent outcomes.",
    href: "/ig/CodeSystem-heartland-monitoring-track.html",
    artifact: "MonitoringTrack code system",
    glyph: "M 5 5 C 5 16 8 19 19 19 V 15 L 15 14 L 13 16 C 11 15 9 13 8 11 L 10 9 L 9 5 Z",
    available: true,
  },
  {
    title: "Discharge transitions",
    body: "Eight education domains at every tier, plus a workflow resource map. The map is not an operational exporter or proof of completed care.",
    href: "/ig/workflow.html",
    artifact: "CarePlan + workflow mapping",
    glyph: "M 4 4 H 16 L 20 8 V 20 H 4 Z M 16 4 V 8 H 20 M 8 13 H 16 M 8 17 H 14",
    available: true,
  },
  {
    title: "Remote monitoring",
    body: "Draft body-weight, BP and oxygen-saturation observations. A single reading does not prove a change, alert or clinical response.",
    href: "/ig/StructureDefinition-heartland-remote-monitoring-observation.html",
    artifact: "Observation profile + LOINC",
    glyph: "M 3 12 H 6 L 8 7 L 11 17 L 14 9 L 16 12 H 21",
    available: true,
  },
  {
    title: "Comorbidity context",
    body: "Patient context plus an opaque synthetic county identifier; the identifier is not a real county GEOID.",
    href: "/ig/StructureDefinition-heartland-patient.html",
    artifact: "Patient and synthetic identifier",
    glyph: "M 12 3 C 16 7 19 11 19 14 a 7 7 0 0 1 -14 0 C 5 11 8 7 12 3 Z",
    available: true,
  },
  {
    title: "Primary-care linkage",
    body: "Warm-handoff protocol: roles, triggers, and shared documentation between discharge and longitudinal primary care.",
    href: null,
    artifact: "Phase 2",
    glyph: "M 8 7 a 3 3 0 1 0 0 -0.1 Z M 16 7 a 3 3 0 1 0 0 -0.1 Z M 4 19 c 0 -3 2 -5 4 -5 c 2 0 4 2 4 5 M 12 19 c 0 -3 2 -5 4 -5 c 2 0 4 2 4 5",
    available: false,
  },
  {
    title: "Implementation tier",
    body: "Facility capacity questionnaire and tier codes; no validated automatic assignment or permission to reduce clinical requirements.",
    href: "/ig/Questionnaire-heartland-facility-tier-questionnaire.html",
    artifact: "FacilityTierQuestionnaire + ext.",
    glyph: "M 4 20 V 12 H 9 V 20 Z M 9 20 V 8 H 15 V 20 Z M 15 20 V 4 H 20 V 20 Z",
    available: true,
  },
];

function Modules() {
  return (
    <section className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-alert">
              What&rsquo;s inside
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-editorial font-semibold leading-[1.05] tracking-[-0.02em] text-cool">
              Eight protocol modules,{" "}
              <span className="font-display italic font-normal text-cool/70">
                selected draft FHIR structures.
              </span>
            </h2>
            <p className="mt-6 max-w-md font-editorial text-[15.5px] leading-relaxed text-cool/70">
              Six profiles, seven extensions, five code systems, five value sets,
              three questionnaires and five synthetic examples, plus the IG
              manifest. Newer workflow coverage remains incomplete; the cards
              distinguish existing structures from planned work.
            </p>
          </div>
          <div className="md:col-span-7" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <ModuleCard key={m.title} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ m }: { m: ModuleEntry }) {
  const inner = (
    <>
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-alert/10">
        <Glyph d={m.glyph} />
      </div>
      <h3 className="font-editorial text-[17px] font-semibold tracking-tight text-cool">
        {m.title}
      </h3>
      <p className="mt-2 grow font-editorial text-[14px] leading-relaxed text-cool/70">
        {m.body}
      </p>
      <p className="mt-4 font-editorial text-[12px] text-cool/55">{m.artifact}</p>
      <p
        className={
          "mt-3 inline-flex items-center gap-1.5 font-editorial text-[12px] " +
          (m.available ? "text-signal" : "text-stone")
        }
      >
        <span
          aria-hidden
          className={
            "h-1.5 w-1.5 rounded-full " + (m.available ? "bg-signal" : "bg-stone")
          }
        />
        {m.available ? "Draft structure in v0.3.0" : "Not yet represented"}
      </p>
    </>
  );
  if (!m.href) {
    return (
      <article className="flex h-full flex-col rounded-2xl border border-grid bg-panel p-6 opacity-75">
        {inner}
      </article>
    );
  }
  return (
    <a
      href={m.href}
      className="group flex h-full flex-col rounded-2xl border border-grid bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-cool/40"
      style={{ textDecoration: "none" }}
    >
      {inner}
    </a>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */

const STATUS_ROWS: Array<{ stream: string; state: string; tone: "ok" | "draft" | "pending" }> = [
  { stream: "Cureus article", state: "Published article; separate from software validation", tone: "ok" },
  { stream: "HEARTLAND Toolkit", state: "V3.3 published; V3.4 release candidate", tone: "draft" },
  { stream: "FHIR IG", state: "v0.3.0 candidate — draft and experimental", tone: "draft" },
  { stream: "Zenodo archives", state: "Historical software v0.1.1 and report 1.0; candidate not archived", tone: "draft" },
  { stream: "Pilot site EHR validation", state: "Phase 3 — not yet started", tone: "pending" },
];

function Status() {
  return (
    <section className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-alert">
              Current state
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-editorial font-semibold leading-[1.05] tracking-[-0.02em] text-cool">
              Where the IG{" "}
              <span className="font-display italic font-normal text-cool/70">
                stands today.
              </span>
            </h2>
            <p className="mt-6 max-w-md font-editorial text-[15.5px] leading-relaxed text-cool/70">
              v0.3.0 is a technical candidate, not an assertion of deployment
              readiness or clinical approval. Tier and education content is aligned
              with the Toolkit candidate; operational exchange and external EHR
              validation remain separate checks.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-grid bg-terminal">
              <table className="w-full font-editorial text-[14.5px]">
                <tbody>
                  {STATUS_ROWS.map((row, i) => (
                    <tr key={row.stream} className={i !== STATUS_ROWS.length - 1 ? "border-b border-grid" : ""}>
                      <td className="w-[44%] py-4 px-5 font-medium text-cool">{row.stream}</td>
                      <td className="py-4 px-5 text-cool/75">
                        <StatusPill tone={row.tone}>{row.state}</StatusPill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({
  tone,
  children,
}: {
  tone: "ok" | "draft" | "pending";
  children: React.ReactNode;
}) {
  const dot =
    tone === "ok" ? "bg-signal" : tone === "draft" ? "bg-alert" : "bg-stone";
  const text =
    tone === "ok" ? "text-signal" : tone === "draft" ? "text-alert" : "text-stone";
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden />
      <span className={`font-editorial text-[14px] ${text}`}>{children}</span>
    </span>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */

function OpenScience() {
  return (
    <section className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-alert">
              Open science
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-editorial font-semibold leading-[1.05] tracking-[-0.02em] text-cool">
              Citable across{" "}
              <span className="font-display italic font-normal text-cool/70">every layer.</span>
            </h2>
            <p className="mt-6 max-w-md font-editorial text-[15.5px] leading-relaxed text-cool/70">
              The article, Toolkit, historical software and technical report
              have different versions and identifiers. These links do not
              identify or validate every later local software change.
            </p>
          </div>

          <div className="md:col-span-7 space-y-3">
            <DepositRow
              kind="Protocol"
              label="Cureus (peer-reviewed)"
              href="https://doi.org/10.7759/cureus.104817"
              meta="Article DOI 10.7759/cureus.104817; distinct from software"
            />
            <DepositRow
              kind="Protocol"
              label="Zenodo"
              href="https://doi.org/10.5281/zenodo.19101219"
              meta="Published Toolkit V3.3 · DOI 10.5281/zenodo.19101219"
            />
            <DepositRow
              kind="Protocol"
              label="OSF"
              href="https://doi.org/10.17605/OSF.IO/YUSGH"
              meta="DOI 10.17605/OSF.IO/YUSGH"
            />
            <DepositRow
              kind="FHIR IG"
              label="GitHub source"
              href="https://github.com/vickymuller-md/heartland-fhir-ig"
              meta="vickymuller-md/heartland-fhir-ig · v0.3.0"
            />
            <DepositRow
              kind="FHIR IG"
              label="Software Heritage"
              href="https://archive.softwareheritage.org/swh:1:snp:f6fb5441d0f21ea983944164fed3dbcdff6d04b0/"
              meta="swh:1:snp:f6fb5441d0f21ea983944164fed3dbcdff6d04b0"
            />
            <DepositRow
              kind="FHIR IG"
              label="Zenodo software archive"
              href="https://doi.org/10.5281/zenodo.19634998"
              meta="Historical software v0.1.1 · not candidate 0.3.0"
            />
            <DepositRow
              kind="Technical report"
              label="Zenodo report"
              href="https://doi.org/10.5281/zenodo.22137121"
              meta="Concept DOI 10.5281/zenodo.22137121 · v1.0 DOI 10.5281/zenodo.22137122"
            />
            <DepositRow
              kind="Companion app"
              label="app.heartlandprotocol.org"
              href="https://app.heartlandprotocol.org"
              meta="Eight interactive modules · MIT"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DepositRow({
  kind,
  label,
  href,
  meta,
  pending,
}: {
  kind: string;
  label: string;
  href: string;
  meta: string;
  pending?: boolean;
}) {
  const Wrapper = pending ? "div" : "a";
  return (
    <Wrapper
      {...(!pending && { href, target: "_blank", rel: "noopener noreferrer" })}
      className={
        "group flex flex-wrap items-center gap-4 rounded-2xl border border-grid bg-panel px-6 py-5 transition-colors " +
        (pending ? "opacity-70" : "hover:border-cool/40")
      }
      style={{ textDecoration: "none" }}
    >
      <span className="font-editorial text-[11.5px] uppercase tracking-[0.16em] text-alert min-w-[88px]">
        {kind}
      </span>
      <span className="min-w-0 flex-1 basis-40 break-words [overflow-wrap:anywhere]">
        <span className="block font-editorial text-[15px] font-medium text-cool group-hover:text-alert">
          {label}
        </span>
        <span className="block font-editorial text-[12.5px] text-cool/60">{meta}</span>
      </span>
      {!pending && (
        <span className="font-editorial text-[18px] text-cool/40 transition-transform group-hover:translate-x-1 group-hover:text-alert">
          →
        </span>
      )}
    </Wrapper>
  );
}
