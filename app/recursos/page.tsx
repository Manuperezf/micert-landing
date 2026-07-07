import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import RecursosFeed from "../components/RecursosFeed";
import { RECURSOS_HUB_METADATA } from "../lib/recursos";

export const metadata: Metadata = {
  title: RECURSOS_HUB_METADATA.title,
  description: RECURSOS_HUB_METADATA.description,
  alternates: { canonical: "/recursos" },
  openGraph: {
    title: RECURSOS_HUB_METADATA.title,
    description: RECURSOS_HUB_METADATA.description,
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
