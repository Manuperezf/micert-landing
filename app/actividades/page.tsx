import type { Metadata, ResolvingMetadata } from "next";
import ActividadesCompare from "../components/actividades/ActividadesCompare";
import ActividadesDocuments from "../components/actividades/ActividadesDocuments";
import ActividadesFinalCta from "../components/actividades/ActividadesFinalCta";
import ActividadesHero from "../components/actividades/ActividadesHero";
import ActividadesHow from "../components/actividades/ActividadesHow";
import ActividadesPricing from "../components/actividades/ActividadesPricing";
import ActividadesStage from "../components/actividades/ActividadesStage";
import ActividadesSurvey from "../components/actividades/ActividadesSurvey";
import ActividadesWhat from "../components/actividades/ActividadesWhat";
import FaqAccordion from "../components/site/FaqAccordion";
import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";
import styles from "../components/actividades/actividades.module.css";
import {
  ACTIVIDADES_BREADCRUMB_SCHEMA,
  ACTIVIDADES_DESCRIPTION,
  ACTIVIDADES_FAQ,
  ACTIVIDADES_SOFTWARE_SCHEMA,
  ACTIVIDADES_TITLE,
} from "../lib/actividades";

export async function generateMetadata(
  _: Record<string, never>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const previous = await parent;
  return {
    title: ACTIVIDADES_TITLE,
    description: ACTIVIDADES_DESCRIPTION,
    alternates: { canonical: "/actividades" },
    openGraph: {
      title: ACTIVIDADES_TITLE,
      description: ACTIVIDADES_DESCRIPTION,
      url: "/actividades",
      images: previous.openGraph?.images,
    },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ActividadesPage() {
  return (
    <>
      <JsonLd data={ACTIVIDADES_BREADCRUMB_SCHEMA} />
      <JsonLd data={ACTIVIDADES_SOFTWARE_SCHEMA} />
      <SiteHeader />
      <main className={styles.page}>
        <ActividadesHero />
        <ActividadesStage />
        <ActividadesWhat />
        <ActividadesHow />
        <ActividadesSurvey />
        <ActividadesCompare />
        <ActividadesDocuments />
        <ActividadesPricing />
        <FaqAccordion
          id="actividades-faq"
          title="Preguntas frecuentes sobre asistencia y encuestas."
          items={ACTIVIDADES_FAQ.map((item) => ({
            question: item.question,
            answer: item.answer,
            schemaText: item.answer,
          }))}
        />
        <ActividadesFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
