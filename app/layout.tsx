import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
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
        <GoogleAnalytics gaId="G-V9KQKJL8X7" />
        <Script
          id="brevo-conversations"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(d, w, c) {
      w.BrevoConversationsID = '6a3d246c2595ac86c80bcbb1';
      w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
      };
      var s = d.createElement('script');
      s.async = true;
      s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
      if (d.head) d.head.appendChild(s);
  })(document, window, 'BrevoConversations');`,
          }}
        />
        <Script
          id="hs-script-loader"
          src="https://js-eu1.hs-scripts.com/148767528.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
