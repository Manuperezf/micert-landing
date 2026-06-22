import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://micert.cl"),
  title: "MiCert — Certificados digitales verificables para OTEC",
  description:
    "Emite certificados digitales con código QR único desde Excel, en minutos. Verificables, con trazabilidad para auditorías SENCE. Sin PDF editables ni conocimientos técnicos.",
  openGraph: {
    title: "MiCert — Certificados digitales verificables para OTEC",
    description:
      "Emite certificados digitales con código QR único desde Excel, en minutos. Verificables y con trazabilidad para auditorías SENCE.",
    url: "https://micert.cl",
    siteName: "MiCert",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className={`${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
