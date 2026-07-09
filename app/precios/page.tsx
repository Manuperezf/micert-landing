import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import DemoBanner from "../components/DemoBanner";
import FaqSection from "../components/FaqSection";
import PlanFeatures from "../components/PlanFeatures";
import PlansGrid from "../components/PlansGrid";
import { buildFaqPageSchema } from "../lib/faq-schema";
import { PLANS_PAGE, PRECIOS_FAQ, PRECIOS_METADATA } from "../lib/plans";

export const metadata: Metadata = {
  title: PRECIOS_METADATA.title,
  description: PRECIOS_METADATA.description,
  alternates: { canonical: "/precios" },
  openGraph: {
    title: PRECIOS_METADATA.title,
    description: PRECIOS_METADATA.description,
    url: "https://micert.cl/precios",
  },
};

const PRECIOS_FAQ_LINKED_ANSWERS: Record<number, ReactNode> = {
  4: (
    <>
      No. Cargas tus datos desde un Excel, eliges el diseño del certificado y
      emites. Todo desde el navegador, sin instalar nada. ¿Recién formas tu
      OTEC? Mira los{" "}
      <Link href="/recursos/requisitos-formar-otec-chile">
        requisitos para formar una OTEC en Chile
      </Link>
      .
    </>
  ),
  5: (
    <>
      Sí. El{" "}
      <Link href="/demo">plan Demo</Link> te permite emitir 5 certificados de
      prueba sin costo para que veas el flujo completo antes de decidir.
    </>
  ),
};

const preciosFaqItems = PRECIOS_FAQ.map((item, index) => ({
  question: item.question,
  answer: PRECIOS_FAQ_LINKED_ANSWERS[index] ?? item.answer,
}));

const preciosFaqSchema = buildFaqPageSchema(PRECIOS_FAQ);

export default function PreciosPage() {
  return (
    <>
      {preciosFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(preciosFaqSchema),
          }}
        />
      )}
      <Nav />

      <header className="hero hero-compact">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Planes</span>
              <h1>{PLANS_PAGE.heading}</h1>
            </div>
            <div className="hero-aside">
              <p className="lead">
                {PLANS_PAGE.subheading} Pagas por volumen de emisión, sin
                sorpresas en la factura.
              </p>
              <div className="hero-flex-note">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M8 16H3v5" />
                </svg>
                <p>
                  Cambia de plan mes a mes según el volumen de certificados de
                  tu OTEC. Sin permanencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section tight">
        <div className="wrap">
          <PlansGrid />
          <PlanFeatures />
          <DemoBanner />
          <div className="plans-foot">
            <span>
              <b>Packs adicionales:</b> 25, 50 o 100 certificados, vigencia 3
              meses.
            </span>
            <span>
              <b>¿Más volumen?</b> Plan a medida para alto volumen e
              integraciones.
            </span>
          </div>
        </div>
      </section>

      <FaqSection items={preciosFaqItems} />

      <Footer />
    </>
  );
}
