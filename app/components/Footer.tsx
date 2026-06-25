export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <a className="brand" href="/"><img className="logo" src="/logo.svg" alt="MiCert" /></a>
          <p className="foot-tag">Certificados digitales verificables para OTEC.</p>
        </div>
        <div className="foot-cols">
          <div className="foot-col">
            <h4>Producto</h4>
            <a href="/#como">Cómo funciona</a>
            <a href="/#planes">Planes</a>
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
