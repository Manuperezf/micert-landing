import type { Metadata } from "next";
import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";
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
      <SiteHeader />

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

      <SiteFooter />
    </>
  );
}
