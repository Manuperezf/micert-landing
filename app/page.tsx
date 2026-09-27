import type { Metadata } from "next";
import Footer from "./components/Footer";
import Cycle from "./components/home/Cycle";
import DataCompliance from "./components/home/DataCompliance";
import HomeHeader from "./components/home/HomeHeader";
import HomeHero from "./components/home/HomeHero";
import HowItWorks from "./components/home/HowItWorks";
import Industries from "./components/home/Industries";
import ProductBlock from "./components/home/ProductBlock";
import Statement from "./components/home/Statement";
import styles from "./components/home/home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <HomeHeader />
        <HomeHero />
        <ProductBlock />
        <Statement />
        <HowItWorks />
        <Industries />
        <Cycle />
        <DataCompliance />
      </div>
      <Footer />
    </>
  );
}
