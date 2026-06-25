import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import DemoBanner from "../components/DemoBanner";
import PlansGrid from "../components/PlansGrid";

export const metadata: Metadata = {
  title: "Precios y planes · MiCert",
  description:
    "Planes para los OTEC según volumen mensual de certificados: Básico, Estándar y Pro. Demo sin costo con 5 certificados, sin tarjeta de crédito.",
  openGraph: {
    title: "Precios y planes · MiCert",
    description:
      "Planes para los OTEC según volumen mensual de certificados. Prueba MiCert con 5 certificados antes de decidir.",
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
          <h1>Precios simples para los OTEC</h1>
          <p className="lead">
            Elige el volumen mensual que necesitas. Todos los planes incluyen
            verificación por QR, emisión masiva e historial completo.
          </p>
        </div>
      </header>

      <section className="section tight">
        <div className="wrap">
          <PlansGrid />
          <DemoBanner />
          <div className="plans-foot">
            <span>
              <b>Packs adicionales:</b> 25, 50 o 100 certificados, vigencia 6
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
