import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "../components/site/FaqAccordion";
import FinalCta from "../components/site/FinalCta";
import PlanCards from "../components/site/PlanCards";
import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";
import PacksSection from "../components/precios/PacksSection";
import PlanComparison from "../components/precios/PlanComparison";
import { DEMO_URL } from "../components/home/links";
import { PLAN_INCLUDES, PRECIOS_FAQ, PRECIOS_METADATA } from "../lib/plans";
import styles from "../components/precios/precios.module.css";

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

const svgProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

function IncludeIcon({ label }: { label: string }) {
  if (label === "Editor visual de certificados") {
    return (
      <svg {...svgProps}>
        <path d="M4 20h4L19 9l-4-4L4 16z" />
        <path d="M13 7l4 4" />
      </svg>
    );
  }
  if (label === "Verificación pública con QR") {
    return (
      <svg {...svgProps}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <path d="M14 14h3v3M21 14v7h-7" />
      </svg>
    );
  }
  if (label === "Envío de certificados por correo") {
    return (
      <svg {...svgProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }
  return (
    <svg {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18" />
    </svg>
  );
}

const LINKED_ANSWERS: Record<number, ReactNode> = {
  6: (
    <>
      No. Cargas tus datos desde un Excel, eliges el diseño del certificado y
      emites. Todo desde el navegador, sin instalar nada. ¿Recién formas tu
      OTEC? Mira los{" "}
      <Link className={styles.faqLink} href="/recursos/requisitos-formar-otec-chile">
        requisitos para formar una OTEC en Chile
      </Link>
      .
    </>
  ),
  7: (
    <>
      Sí. El{" "}
      <Link className={styles.faqLink} href="/demo">
        plan Demo
      </Link>{" "}
      te permite emitir 5 certificados de prueba sin costo para que veas el
      flujo completo antes de decidir.
    </>
  ),
};

const preciosFaqItems = PRECIOS_FAQ.map((item, index) => ({
  question: item.question,
  schemaText: item.answer,
  answer: LINKED_ANSWERS[index] ?? item.answer,
}));

export default function PreciosPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <PlanCards
          eyebrow="Precios"
          titleAs="h1"
          title="Pagas según lo que emites al mes."
          subtitle="Sin instalación ni costos ocultos. Cambia de plan cuando lo necesites, según el volumen de certificados de tu OTEC."
          footer={
            <p>Todos los precios son netos, en pesos chilenos, más IVA.</p>
          }
        />

        <section className={`${styles.shell} ${styles.section}`}>
          <h2 className={styles.includesTitle}>Todos los planes incluyen</h2>
          <div className={styles.grid4}>
            {PLAN_INCLUDES.map((label) => (
              <div key={label} className={styles.cell}>
                <span className={styles.cellIcon}>
                  <IncludeIcon label={label} />
                </span>
                <span className={styles.cellLabel}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <PlanComparison />
        <PacksSection />

        <section className={styles.shell}>
          <div className={styles.trial}>
          <div className={styles.trialCopy}>
            <h2 className={styles.trialTitle}>
              ¿Prefieres probar antes de contratar?
            </h2>
            <p className={styles.trialText}>
              Emite 5 certificados reales con tus plantillas, sin costo y sin
              tarjeta de crédito.
            </p>
          </div>
          <Link
            className={`${styles.btn} ${styles.btnPrimary} ${styles.trialBtn}`}
            href={DEMO_URL}
          >
            Solicitar prueba
          </Link>
          </div>
        </section>

        <FaqAccordion
          id="precios-faq"
          title="Preguntas sobre planes y cobro."
          items={preciosFaqItems}
        />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
