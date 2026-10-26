import type { Metadata } from "next";
import ActividadesCompare from "../components/actividades/ActividadesCompare";
import ActividadesDocuments from "../components/actividades/ActividadesDocuments";
import ActividadesFaq from "../components/actividades/ActividadesFaq";
import ActividadesFinalCta from "../components/actividades/ActividadesFinalCta";
import ActividadesHero from "../components/actividades/ActividadesHero";
import ActividadesHow from "../components/actividades/ActividadesHow";
import ActividadesPricing from "../components/actividades/ActividadesPricing";
import ActividadesStage from "../components/actividades/ActividadesStage";
import ActividadesSurvey from "../components/actividades/ActividadesSurvey";
import ActividadesWhat from "../components/actividades/ActividadesWhat";
import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";
import styles from "../components/actividades/actividades.module.css";
import {
  ACTIVIDADES_BREADCRUMB_SCHEMA,
  ACTIVIDADES_DESCRIPTION,
  ACTIVIDADES_FAQ_SCHEMA,
  ACTIVIDADES_SOFTWARE_SCHEMA,
  ACTIVIDADES_TITLE,
} from "../lib/actividades";

export const metadata: Metadata = {
  title: ACTIVIDADES_TITLE,
  description: ACTIVIDADES_DESCRIPTION,
  alternates: { canonical: "/actividades" },
  openGraph: {
    title: ACTIVIDADES_TITLE,
    description: ACTIVIDADES_DESCRIPTION,
    url: "/actividades",
  },
};

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
      {ACTIVIDADES_FAQ_SCHEMA ? <JsonLd data={ACTIVIDADES_FAQ_SCHEMA} /> : null}
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
        <ActividadesFaq />
        <ActividadesFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
