import type { Metadata } from "next";
import { Sora, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-editorial",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heartland · FHIR Implementation Guide",
  description:
    "Draft FHIR R4 profiles, explicit risk-input weights and synthetic examples for educational implementation-support. Clinical validation and vendor interoperability are not established.",
  authors: [{ name: "Vicky Muller Ferreira, MD", url: "https://heartlandprotocol.org" }],
  metadataBase: new URL("https://fhir.heartlandprotocol.org"),
  openGraph: {
    title: "Heartland · FHIR Implementation Guide",
    description:
      "Candidate 0.3.0: draft FHIR R4 structures and synthetic examples, not evidence of clinical validation or EHR integration.",
    url: "https://fhir.heartlandprotocol.org",
    siteName: "Heartland FHIR IG",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-terminal font-editorial text-cool antialiased selection:bg-alert/40 selection:text-cool">
        {children}
      </body>
    </html>
  );
}
