import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import DemoBanner from "../components/DemoBanner";
import PlansGrid from "../components/PlansGrid";
import { PLANS_PAGE, PRECIOS_METADATA } from "../lib/plans";

export const metadata: Metadata = {
  title: PRECIOS_METADATA.title,
  description: PRECIOS_METADATA.description,
  openGraph: {
    title: PRECIOS_METADATA.title,
    description: PRECIOS_METADATA.description,
    url: "https://micert.cl/precios",
  },
};

export default function PreciosPage() {
  return (
    <>
      <Nav />

      <header className="hero hero-compact">
        <div className="wrap">
          <span className="eyebrow">Planes</span>
          <h1>{PLANS_PAGE.heading}</h1>
          <p className="lead">{PLANS_PAGE.subheading}</p>
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

      <Footer />
    </>
  );
}
