import type { Metadata } from "next";
import localFont from "next/font/local";
import WhatsAppFloat from "@/src/components/whatsapp-float";
import CookieConsent from "@/src/components/cookie-consent";
import "./globals.css";

// Fuentes alojadas en el repo (SIL OFL 1.1), no descargadas de Google en cada build.
// Con next/font/google, el servidor y el navegador se compilan en procesos separados
// y cada uno pedía la fuente a Google: si Google respondía distinto, el HTML y el CSS
// quedaban con nombres de fuente diferentes y el sitio caía en Times.
const interTight = localFont({
  src: "./fonts/InterTight-latin-variable.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-latin-500.woff2",
  weight: "500",
  style: "normal",
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
      "Emite certificados digitales con código QR único desde Excel, en minutos. Verificables, con trazabilidad para auditorías SENCE. Sin PDF editables ni conocimientos técnicos.",
    url: "https://micert.cl",
    siteName: "MiCert",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Certificados digitales verificables con QR, en minutos — MiCert",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className={`${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
