import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import DemoBanner from "../components/DemoBanner";
import FaqSection from "../components/FaqSection";
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
          <span className="eyebrow">Planes</span>
          <h1>{PLANS_PAGE.heading}</h1>
          <p className="lead">{PLANS_PAGE.subheading}</p>
          <p className="lead">
            Todos los planes incluyen emisión masiva desde Excel, editor visual
            de certificados, validación pública con QR y envío de certificados
            por email. La diferencia entre planes es el volumen de certificados
            que emites al mes. Si recién partes o tienes cursos esporádicos,
            Básico te alcanza. Si emites en varios cursos al mes o trabajas con
            volumen constante, Estándar o Pro te dan holgura sin que tengas que
            estar pendiente de la cuota. Los precios no incluyen IVA.
          </p>
        </div>
      </header>

      <section className="section tight">
        <div className="wrap">
          <PlansGrid />
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
