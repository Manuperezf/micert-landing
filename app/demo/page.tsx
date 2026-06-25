"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function DemoPage() {
  useEffect(() => {
    // Carga el script de HubSpot una sola vez; el script detecta el div
    // .hs-form-frame y renderiza el formulario dentro.
    const SRC = "https://js-eu1.hsforms.net/forms/embed/148767528.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="demo-page">
      <style>{`
        .demo-page{background:#ffffff;color:#262626;font-family:var(--font-inter-tight),system-ui,sans-serif;line-height:1.6}
        .demo-wrap{max-width:1120px;margin:0 auto;padding:0 20px}
        .demo-hero{padding:56px 0 0}
        .demo-eyebrow{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#9a9890;margin:0 0 14px}
        .demo-hero h1{font-size:clamp(30px,5vw,46px);line-height:1.08;letter-spacing:-.02em;margin:0 0 16px;max-width:13ch}
        .demo-hero p.lead{font-size:18px;color:#65645d;margin:0;max-width:48ch}
        .demo-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:flex-start;padding:0 0 80px}
        .demo-points{margin:24px 0 0}
        .demo-point{display:flex;gap:12px;padding:16px 0;border-bottom:1px solid #e6e4da}
        .demo-point:last-child{border-bottom:none}
        .demo-point .n{flex:0 0 auto;width:26px;height:26px;border-radius:8px;background:#eaf0fe;color:#0c59f2;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;margin-top:2px}
        .demo-point h3{margin:0 0 3px;font-size:16px}
        .demo-point p{margin:0;color:#65645d;font-size:14.5px}
        .demo-formcard{background:#ffffff;border:1px solid #e6e4da;border-radius:16px;padding:28px;box-shadow:0 1px 2px rgba(0,0,0,.03)}
        .demo-formcard h2{margin:0 0 6px;font-size:20px;letter-spacing:-.01em}
        .demo-formcard p.sub{margin:0 0 20px;color:#65645d;font-size:14.5px}
        @media (max-width:820px){
          .demo-grid{grid-template-columns:1fr;gap:28px;padding:0 0 64px}
          .demo-hero{padding:36px 0 0}
        }
      `}</style>

      <Nav />

      <div className="demo-wrap">
        <section className="demo-hero">
          <div className="demo-grid">
            <div className="demo-col">
              <p className="demo-eyebrow">Certificados digitales para OTEC</p>
              <h1>Agenda una demo de MiCert</h1>
              <p className="lead">
                Te mostramos en una llamada corta cómo emitir certificados digitales
                verificables desde tu lista de Excel, y resolvemos tus dudas. Déjanos
                tus datos y te contactamos.
              </p>
              <div className="demo-points">
                <div className="demo-point">
                  <span className="n">1</span>
                  <div>
                    <h3>De Excel a certificado emitido</h3>
                    <p>Subes la lista de participantes y emites todos los certificados de una vez.</p>
                  </div>
                </div>
                <div className="demo-point">
                  <span className="n">2</span>
                  <div>
                    <h3>Verificación pública por QR</h3>
                    <p>Cada certificado lleva un código único que cualquiera puede validar en línea.</p>
                  </div>
                </div>
                <div className="demo-point">
                  <span className="n">3</span>
                  <div>
                    <h3>Trazabilidad para auditorías</h3>
                    <p>Registro claro de lo emitido, pensado para los requisitos de SENCE.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="demo-formcard">
              <h2>Solicita tu demo</h2>
              <p className="sub">Te respondemos dentro de 24 horas hábiles.</p>
              {/* Formulario HubSpot — el script lo renderiza dentro de este div */}
              <div
                className="hs-form-frame"
                data-region="eu1"
                data-form-id="8ef9a422-4b73-4868-a9b3-a1ae05e89e86"
                data-portal-id="148767528"
              ></div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
