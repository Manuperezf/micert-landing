export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <a className="brand" href="/"><img className="logo" src="/logo.svg" alt="MiCert" /></a>
          <p className="foot-tag">Certificados digitales verificables para OTEC.</p>
          <div className="foot-social">
            <a href="https://www.instagram.com/micert_chile/" target="_blank" rel="noopener noreferrer" aria-label="MiCert en Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/micert/" target="_blank" rel="noopener noreferrer" aria-label="MiCert en LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div className="foot-cols">
          <div className="foot-col">
            <h4>Producto</h4>
            <a href="/#como">Cómo funciona</a>
            <a href="/precios">Precios</a>
            <a href="/recursos">Recursos</a>
          </div>
          <div className="foot-col">
            <h4>Empresa</h4>
            <a href="/demo">Contacto</a>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <a href="/privacidad">Privacidad</a>
            <a href="/terminos">Términos y Condiciones</a>
          </div>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2026 MiCert. Todos los derechos reservados.</span>
        <span>Hecho en Chile</span>
      </div>
    </footer>
  );
}
