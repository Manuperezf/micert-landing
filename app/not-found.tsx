import Link from "next/link";
import SiteFooter from "./components/site/SiteFooter";
import SiteHeader from "./components/site/SiteHeader";

export const metadata = {
  title: "Página no encontrada | MiCert",
  description: "La página que buscas no existe o cambió de dirección.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="nf-page">
      <style>{`
        .nf-page{background:#ffffff;color:#262626;font-family:var(--font-inter-tight),system-ui,sans-serif;line-height:1.6}
        .nf-wrap{max-width:640px;margin:0 auto;padding:96px 20px 120px}
        .nf-wrap h1{font-size:36px;line-height:1.15;margin:0 0 12px;letter-spacing:-.01em}
        .nf-wrap p{margin:0 0 24px;color:#65645d;font-size:17px}
        .nf-links{display:flex;flex-wrap:wrap;gap:12px}
        .nf-links a{display:inline-block;padding:11px 20px;border-radius:10px;border:1.5px solid #262626;color:#262626;text-decoration:none;font-weight:600;font-size:15px}
        .nf-links a:first-child{background:#0c59f2;border-color:#0c59f2;color:#fff}
        .nf-links a:hover{opacity:.88}
      `}</style>

      <SiteHeader />

      <main className="nf-wrap">
        <h1>No encontramos esta página</h1>
        <p>
          La dirección puede estar mal escrita o la página cambió de lugar.
          Desde aquí puedes volver al inicio o ir directo a lo que buscabas.
        </p>
        <div className="nf-links">
          <Link href="/">Volver al inicio</Link>
          <Link href="/precios">Ver precios</Link>
          <Link href="/recursos">Guías para OTEC</Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
