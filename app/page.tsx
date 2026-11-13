import type { Metadata } from "next";
import ActividadesHome from "./components/home/ActividadesHome";
import CasosClientes from "./components/home/CasosClientes";
import Cycle from "./components/home/Cycle";
import DataCompliance from "./components/home/DataCompliance";
import FinalCta from "./components/site/FinalCta";
import HomeFaq from "./components/home/HomeFaq";
import HomeHero from "./components/home/HomeHero";
import HomePlans from "./components/home/HomePlans";
import HowItWorks from "./components/home/HowItWorks";
import Industries from "./components/home/Industries";
import ProductBlock from "./components/home/ProductBlock";
import Statement from "./components/home/Statement";
import JsonLd from "./components/site/JsonLd";
import SiteFooter from "./components/site/SiteFooter";
import SiteHeader from "./components/site/SiteHeader";
import styles from "./components/home/home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MiCert",
  legalName: "MiCert Digital SpA",
  url: "https://micert.cl",
  logo: "https://micert.cl/logo.svg",
  email: "hola@micert.cl",
  telephone: "+56950686974",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Antonio Bellet 193, oficina 1210",
    addressLocality: "Providencia",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  sameAs: [
    "https://www.linkedin.com/company/micert/",
    "https://www.instagram.com/micert_chile/",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={ORGANIZATION_SCHEMA} />
      <SiteHeader />
      <div className={styles.home}>
        <HomeHero />
        <ProductBlock />
        <Statement />
        <HowItWorks />
        <Industries />
        <Cycle />
        <ActividadesHome />
        <DataCompliance />
        <CasosClientes />
        <HomePlans />
        <HomeFaq />
        <FinalCta />
      </div>
      <SiteFooter />
    </>
  );
}
