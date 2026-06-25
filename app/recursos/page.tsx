import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import RecursosFeed from "../components/RecursosFeed";

export const metadata: Metadata = {
  title: "Recursos para los OTEC · MiCert",
  description:
    "Guías sobre software para los OTEC, certificados con QR, alternativas a Excel y preparación para auditorías SENCE.",
  openGraph: {
    title: "Recursos para los OTEC · MiCert",
    description:
      "Artículos sobre emisión de certificados, verificación QR y cumplimiento para los OTEC.",
    url: "https://micert.cl/recursos",
  },
};

export default function RecursosPage() {
  return (
    <>
      <Nav />

      <header className="hero hero-compact">
        <div className="wrap">
          <span className="eyebrow">Recursos</span>
          <h1>Guías para emitir con confianza</h1>
          <p className="lead">
            Artículos sobre producto, comparativas y normativa para los OTEC
            que quieren modernizar la emisión de certificados.
          </p>
        </div>
      </header>

      <RecursosFeed />

      <Footer />
    </>
  );
}
