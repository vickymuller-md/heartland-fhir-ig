import Link from "next/link";
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
            href: "https://doi.org/10.5281/zenodo.18566403",
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
      <OpenScience />
      <Colophon
        currentSite="fhir"
        description="An HL7 FHIR R4 Implementation Guide that makes the peer-reviewed HEARTLAND Protocol implementable inside any US EHR. IG narrative licensed CC-BY 4.0; build scripts MIT."
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

function Hero() {
  return (
    <section className="relative overflow-hidden bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-grid bg-panel px-3.5 py-1.5 font-editorial text-[12px] tracking-tight text-cool/80">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              FHIR R4 · v0.1.0 draft · CC&#8209;BY 4.0
            </p>

            <h1 className="mt-7 text-[clamp(2.4rem,5.6vw,4.75rem)] font-editorial font-semibold leading-[1.04] tracking-[-0.025em] text-cool">
              Interoperability for heart failure care{" "}
              <span className="font-display italic font-normal text-alert">
                where there&rsquo;s
              </span>{" "}
              no cardiologist.
            </h1>

            <p className="mt-7 max-w-2xl font-editorial text-[17px] leading-[1.65] text-cool/75 md:text-[18px]">
              An HL7 FHIR R4 Implementation Guide that makes the peer-reviewed
              HEARTLAND Protocol implementable inside any US EHR. Profiles for
              risk assessment, care plans, and remote monitoring &mdash; bound
              to LOINC, layered on US Core, ready for vendor pilots.
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
                href="https://doi.org/10.5281/zenodo.18566403"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-editorial text-[15px] font-medium text-cool/85 transition-colors hover:text-alert"
              >
                Read source protocol
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <p className="mt-12 max-w-xl font-editorial text-[12.5px] leading-relaxed text-stone">
              For licensed clinicians and EHR implementers. Not a medical
              device, not FDA-cleared, not HIPAA-certified. Examples are
              synthetic; no PHI is included.
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
          <StatCard value="86%" heading="of rural counties" note="have no practicing cardiologist." />
          <StatCard value="+53%" heading="excess HF mortality" note="in rural communities versus urban." accent />
          <StatCard value="< 1%" heading="of patients" note="reach all four GDMT therapeutic targets." />
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center font-editorial text-[15.5px] leading-relaxed text-cool/75">
          GWTG-HF and ESC-HF-LT are registries. MAGGIC and SHFM are prognostic
          calculators. None ships an EHR-implementable specification of the
          rural HF workflow. <span className="text-cool">This IG does.</span>
        </p>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <Disclaimer heading="Professional use only">
            This Implementation Guide is a clinical decision support
            specification for healthcare professionals. It does not provide
            medical diagnoses, treatment recommendations for individual
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
    body: "Ten-variable HEARTLAND score including distance to cardiology and social support — variables MAGGIC and SHFM omit.",
    href: "/ig/StructureDefinition-heartland-risk-assessment.html",
    artifact: "RiskAssessment + Questionnaire",
    glyph: "M 4 18 L 9 9 L 13 14 L 17 5 L 20 11 M 4 21 H 20",
    available: true,
  },
  {
    title: "GDMT optimization",
    body: "Four pillars (ARNI/ACEi/ARB · BB · MRA · SGLT2i) with tier-specific cadence encoded as CarePlan activities.",
    href: "/ig/StructureDefinition-heartland-careplan.html",
    artifact: "CarePlan profile",
    glyph: "M 8 3 H 16 V 9 L 21 14 V 21 H 3 V 14 L 8 9 Z M 12 14 V 18",
    available: true,
  },
  {
    title: "Telephone titration",
    body: "Track A (digital, app-based) vs Track B (analog, telephone). Identical clinical algorithms; choice reflects patient access.",
    href: "/ig/CodeSystem-heartland-monitoring-track.html",
    artifact: "MonitoringTrack code system",
    glyph: "M 5 5 C 5 16 8 19 19 19 V 15 L 15 14 L 13 16 C 11 15 9 13 8 11 L 10 9 L 9 5 Z",
    available: true,
  },
  {
    title: "Discharge transitions",
    body: "Three condensed (Tier 1) or eight AHA-aligned (Tier 2/3) education domains as CarePlan activities.",
    href: "/ig/StructureDefinition-heartland-careplan.html",
    artifact: "CarePlan activity catalog",
    glyph: "M 4 4 H 16 L 20 8 V 20 H 4 Z M 16 4 V 8 H 20 M 8 13 H 16 M 8 17 H 14",
    available: true,
  },
  {
    title: "Remote monitoring",
    body: "Weight, BP, SpO2 with red-flag thresholds via referenceRange. Human filter before ED escalation.",
    href: "/ig/StructureDefinition-heartland-remote-monitoring-observation.html",
    artifact: "Observation profile + LOINC",
    glyph: "M 3 12 H 6 L 8 7 L 11 17 L 14 9 L 16 12 H 21",
    available: true,
  },
  {
    title: "Comorbidity context",
    body: "Patient profile carrying distance-to-cardiology and social-support extensions surfaced by the risk score.",
    href: "/ig/StructureDefinition-heartland-patient.html",
    artifact: "Patient profile + 2 extensions",
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
    body: "Facility self-assessment Questionnaire that returns Tier 1 / 2 / 3 with a tier-shaped CarePlan activity set.",
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
                twenty-seven FHIR resources.
              </span>
            </h2>
            <p className="mt-6 max-w-md font-editorial text-[15.5px] leading-relaxed text-cool/70">
              Each module of the published HEARTLAND Protocol maps to one or
              more FHIR R4 conformance resources. Profiles, extensions, value
              sets, code systems, questionnaires &mdash; all generated from
              FSH source via SUSHI and the HL7 IG Publisher.
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
        {m.available ? "Defined in v0.1.0" : "Coming in Phase II"}
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
  { stream: "Cureus manuscript", state: "Published; peer-review response in progress", tone: "ok" },
  { stream: "HEARTLAND Protocol", state: "v3.2 (Feb 2026) — authoritative", tone: "ok" },
  { stream: "FHIR IG", state: "v0.1.0 — initial draft, ready for vendor review", tone: "draft" },
  { stream: "Zenodo IG DOI", state: "Pending — minted at first public release", tone: "pending" },
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
              v0.1.0 is a draft release intended for vendor review and pilot
              site evaluation. Cleared SUSHI compilation and HL7 IG Publisher
              QA with zero critical errors.
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
              The protocol, this IG, the companion app, and three systematic
              reviews share an open-science footprint. Every artifact has a
              persistent identifier.
            </p>
          </div>

          <div className="md:col-span-7 space-y-3">
            <DepositRow
              kind="Protocol"
              label="Cureus (peer-reviewed)"
              href="https://doi.org/10.5281/zenodo.18566403"
              meta="indexed PubMed · PMC · Scopus · Google Scholar"
            />
            <DepositRow
              kind="Protocol"
              label="Zenodo"
              href="https://doi.org/10.5281/zenodo.18566403"
              meta="DOI 10.5281/zenodo.18566403"
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
              meta="vickymuller-md/heartland-fhir-ig · v0.1.0"
            />
            <DepositRow
              kind="FHIR IG"
              label="Zenodo (this IG)"
              href="#"
              meta="Pending first public release · CC-BY 4.0"
              pending
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
        "group flex items-center gap-4 rounded-2xl border border-grid bg-panel px-6 py-5 transition-colors " +
        (pending ? "opacity-70" : "hover:border-cool/40")
      }
      style={{ textDecoration: "none" }}
    >
      <span className="font-editorial text-[11.5px] uppercase tracking-[0.16em] text-alert min-w-[88px]">
        {kind}
      </span>
      <span className="flex-1">
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

