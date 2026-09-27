import type { Metadata } from "next";
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
import SiteFooter from "./components/site/SiteFooter";
import SiteHeader from "./components/site/SiteHeader";
import styles from "./components/home/home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className={styles.home}>
        <HomeHero />
        <ProductBlock />
        <Statement />
        <HowItWorks />
        <Industries />
        <Cycle />
        <DataCompliance />
        <HomePlans />
        <HomeFaq />
        <FinalCta />
      </div>
      <SiteFooter />
    </>
  );
}
