import type { Metadata } from "next";
import { Sora, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heartland · FHIR Implementation Guide",
  description:
    "FHIR R4 conformance resources for the HEARTLAND Protocol — risk assessment, care plans, remote monitoring observations, questionnaires — for primary care-led heart failure management in rural and resource-limited US settings.",
  authors: [{ name: "Vicky Muller Ferreira, MD", url: "https://heartlandprotocol.org" }],
  metadataBase: new URL("https://fhir.heartlandprotocol.org"),
  openGraph: {
    title: "Heartland · FHIR Implementation Guide",
    description:
      "Interoperability specification operationalizing the HEARTLAND Protocol for rural heart failure care across US EHRs.",
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
      <body className="bg-terminal font-editorial text-cool antialiased selection:bg-alert/40 selection:text-cool min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
