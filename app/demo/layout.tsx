import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prueba MiCert gratis con 5 certificados | MiCert",
  description:
    "Solicita tu prueba gratis de MiCert: emite 5 certificados digitales con QR con tus propias plantillas, sin costo y sin tarjeta de crédito.",
  alternates: { canonical: "/demo" },
  robots: { index: false, follow: true },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
