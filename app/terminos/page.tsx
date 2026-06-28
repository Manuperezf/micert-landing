import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const metadata = {
  title: "Términos y Condiciones | MiCert",
  description:
    "Términos y Condiciones de uso de la plataforma MiCert, operada por MiCert Digital SpA.",
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
  return (
    <div className="legal-page">
      <style>{`
        .legal-page{background:#ffffff;color:#262626;font-family:var(--font-inter-tight),system-ui,sans-serif;line-height:1.6}
        .legal-wrap{max-width:820px;margin:0 auto;padding:40px 20px 80px}
        .legal-wrap h1{font-size:32px;line-height:1.2;margin:0 0 6px;letter-spacing:-.01em}
        .legal-wrap .updated{color:#9a9890;font-size:14px;margin:0 0 28px}
        .legal-wrap h2{font-size:20px;margin:36px 0 10px;letter-spacing:-.01em}
        .legal-wrap h3{font-size:16px;margin:22px 0 8px}
        .legal-wrap p{margin:0 0 14px;color:#2f2f2f}
        .legal-wrap ul{margin:0 0 14px;padding-left:20px}
        .legal-wrap li{margin:0 0 7px}
        .legal-wrap a{color:#0c59f2}
        .legal-summary{background:#f2f1e9;border:1px solid #e6e4da;border-radius:14px;padding:22px 24px;margin:0 0 32px}
        .legal-summary h2{margin-top:0}
      `}</style>

      <Nav />

      <div className="legal-wrap">
        <h1>Términos y Condiciones de Uso</h1>
        <p className="updated">Última actualización: 28 de junio de 2026</p>

        <div className="legal-summary">
          <h2>En resumen</h2>
          <p>Antes del detalle legal completo, los puntos clave del acuerdo:</p>
          <ul>
            <li><strong>Quién es quién:</strong> MiCert Digital SpA opera la plataforma MiCert; tu organización es el Cliente que la contrata.</li>
            <li><strong>Qué ofrece MiCert:</strong> emisión, distribución, validación online y revocación de certificados digitales, con trazabilidad completa.</li>
            <li><strong>Cómo se valida:</strong> cada certificado lleva un código QR único que, al escanearse, abre una página pública de verificación en línea (app.micert.cl) con el estado del certificado. La verificación requiere conexión a internet.</li>
            <li><strong>Cómo se paga:</strong> mediante transferencia bancaria, según el plan contratado.</li>
            <li><strong>Cancelación:</strong> puedes cancelar cuando quieras; los planes anuales no se reembolsan proporcionalmente.</li>
            <li><strong>Tus datos:</strong> los datos personales se rigen por la Política de Privacidad.</li>
          </ul>
          <p>Lo que sigue es el desarrollo completo del acuerdo.</p>
        </div>

        <h2>1. Identificación de las Partes</h2>
        <p>Estos Términos y Condiciones constituyen un acuerdo legalmente vinculante entre:</p>
        <p>El Prestador:</p>
        <p>Razón social: MiCert Digital SpA (nombre de fantasía: MiCert), en adelante &quot;MiCert&quot; o &quot;el Prestador&quot;</p>
        <p>RUT: 78.454.247-5</p>
        <p>Domicilio: Antonio Bellet N° 193, oficina 1210, comuna de Providencia, Región Metropolitana de Santiago</p>
        <p>Email: hola@micert.cl</p>
        <p>Sitio web: www.micert.cl</p>
        <p>El Cliente: la organización (persona jurídica) que se registra en la plataforma MiCert y acepta estos Términos, identificada con los datos proporcionados durante el proceso de registro.</p>
        <p>El servicio se presta en idioma español y opera bajo legislación de la República de Chile.</p>

        <h2>2. Definiciones</h2>
        <p>CLIENTE: organización (persona jurídica) que contrata los servicios de MiCert. Típicamente un OTEC u organización capacitadora.</p>
        <p>PLAN: paquete de servicios con tarifas y funcionalidades específicas, según se publica en el sitio o se acuerda mediante propuesta comercial.</p>
        <p>CERTIFICADO DIGITAL: documento electrónico generado por la plataforma que acredita la participación o aprobación de un curso o capacitación.</p>
        <p>VERIFICACIÓN ONLINE: consulta del estado de un certificado mediante su código QR o código corto, contra la página pública de verificación de MiCert (app.micert.cl). Requiere conexión a internet.</p>
        <p>TITULAR: persona natural que recibe el certificado digital (participante del curso o capacitación).</p>
        <p>TARIFA: precio del plan contratado, expresado en pesos chilenos (CLP) más IVA cuando corresponda.</p>
        <p>DÍAS HÁBILES: días de lunes a viernes, excluyendo feriados legales en Chile.</p>
        <p>TRAZABILIDAD: registro cronológico de las acciones realizadas sobre los certificados en la plataforma.</p>

        <h2>3. Aceptación de los Términos</h2>
        <p>Al acceder o utilizar la plataforma MiCert, el Cliente acepta vincularse legalmente a estos Términos y Condiciones en su totalidad. Si no está de acuerdo con alguna parte, no debe usar el servicio.</p>
        <p>El uso de MiCert también está sujeto a:</p>
        <ul>
          <li>La Política de Privacidad disponible en www.micert.cl/privacidad</li>
          <li>Las tarifas y condiciones específicas del plan contratado</li>
          <li>El Contrato de Encargo de Tratamiento de Datos (DPA) cuando aplique</li>
        </ul>
        <h3>3.1 Forma de Aceptación</h3>
        <p>Al aceptar estos Términos durante el registro, el Cliente confirma que ha leído y comprendido estos términos, que está facultado para representar legalmente a su organización, y que su aceptación tiene carácter de firma electrónica simple conforme a la Ley N° 19.799. Esta aceptación genera el mismo efecto legal que una firma manuscrita y queda registrada con fecha y hora en los sistemas de MiCert.</p>

        <h2>4. Descripción del Servicio</h2>
        <p>MiCert es una plataforma SaaS (Software as a Service) que permite a organizaciones:</p>
        <ul>
          <li>Generar certificados digitales con códigos únicos a partir de listas en Excel</li>
          <li>Diseñar el certificado mediante un editor visual</li>
          <li>Distribuir certificados y ponerlos a disposición de los titulares</li>
          <li>Validar la autenticidad mediante una página pública de verificación en línea, accesible por código QR o código corto</li>
          <li>Revocar certificados cuando sea necesario</li>
          <li>Mantener trazabilidad de las acciones realizadas</li>
          <li>Facilitar la trazabilidad requerida para auditorías SENCE</li>
        </ul>
        <p>La validación de cada certificado se realiza en línea: al escanear el código QR con la cámara del teléfono, se abre la página pública de verificación de MiCert, que muestra el estado del certificado (vigente, vencido o anulado). Esta validación requiere conexión a internet y depende de la operación continua del servicio.</p>
        <p>El servicio se presta mediante acceso web a través de navegadores compatibles. No requiere instalación de software adicional.</p>

        <h2>5. Planes, Tarifas y Pagos</h2>
        <h3>5.1 Planes Disponibles</h3>
        <p>MiCert ofrece distintos planes según las necesidades del Cliente, incluyendo un plan de prueba (demo) con un número limitado de certificados y planes comerciales con distinta capacidad mensual. Para organizaciones con requerimientos específicos (alto volumen, integraciones u otros), MiCert puede ofrecer soluciones bajo cotización particular. Las características y eventuales límites de cada plan se publican en el sitio y pueden actualizarse periódicamente.</p>
        <h3>5.2 Facturación y Pagos</h3>
        <p>Ciclo de facturación: mensual o anual, según el plan contratado.</p>
        <p>Método de pago: transferencia bancaria a la cuenta que MiCert indique al Cliente.</p>
        <p>Moneda: pesos chilenos (CLP).</p>
        <p>Documentación tributaria: MiCert emite la documentación tributaria correspondiente (boleta o factura electrónica) por cada pago recibido, conforme a la normativa del SII.</p>
        <h3>5.3 Mora en Pagos</h3>
        <p>Ante el no pago de un período facturado, MiCert podrá aplicar el siguiente procedimiento, notificando por email a la dirección registrada:</p>
        <ul>
          <li>Día 0: vence el pago del período.</li>
          <li>Día 10 corrido: suspensión temporal del acceso a la plataforma y aviso por email.</li>
          <li>Día 30 corrido: advertencia final y bloqueo de la cuenta.</li>
          <li>Día 60 corrido: notificación de eliminación inminente de datos.</li>
          <li>Día 90 corrido: eliminación de los datos operacionales, conservando los registros legalmente requeridos según la Sección 7.5.</li>
        </ul>
        <p>El Cliente puede regularizar en cualquier momento antes del día 90 pagando el monto adeudado.</p>
        <h3>5.4 Modificaciones de Tarifas</h3>
        <p>MiCert puede modificar las tarifas con al menos 30 días corridos de aviso previo por email a los Clientes activos. Las nuevas tarifas no afectarán períodos ya pagados. Si el Cliente no está de acuerdo, puede cancelar antes de que entren en vigencia.</p>

        <h2>6. Registro y Cuenta de Usuario</h2>
        <h3>6.1 Requisitos de Registro</h3>
        <p>Para usar MiCert, la organización debe ser una persona jurídica legalmente constituida en Chile, proporcionar información verídica y actualizada (RUT, razón social, datos de contacto) y designar un usuario administrador responsable de la cuenta.</p>
        <h3>6.2 Responsabilidad de la Cuenta</h3>
        <p>El Cliente es responsable de mantener la confidencialidad de sus credenciales, de todas las actividades realizadas bajo su cuenta, de notificar inmediatamente cualquier acceso no autorizado y de mantener actualizada su información de contacto. MiCert no es responsable por pérdidas derivadas del uso no autorizado de la cuenta si el Cliente no notifica oportunamente.</p>

        <h2>7. Vigencia, Cancelación y Término</h2>
        <h3>7.1 Inicio de Vigencia</h3>
        <p>Este contrato entra en vigencia al momento de la aceptación por el Cliente y el pago de la primera cuota, cuando aplique.</p>
        <h3>7.2 Cancelación por el Cliente</h3>
        <p>El Cliente puede cancelar su suscripción en cualquier momento enviando un email a hola@micert.cl. En planes mensuales, la cancelación es efectiva al final del período ya pagado. En planes anuales, el Cliente puede cancelar, pero no proceden reembolsos proporcionales por tiempo no utilizado.</p>
        <h3>7.3 Cancelación por MiCert</h3>
        <p>MiCert puede suspender o cancelar la cuenta del Cliente si este incumple estos Términos, realiza actividades fraudulentas o ilegales, no paga las tarifas acordadas tras el procedimiento de la Sección 5.3, o si la continuidad del servicio representa un riesgo para otros clientes o para la plataforma.</p>
        <p>Cancelación por actividades fraudulentas: en caso de emisión de certificados falsos o uso fraudulento, MiCert puede revocar inmediatamente los certificados emitidos por el Cliente, incluidos los ya distribuidos, que quedarán marcados como revocados en el sistema de verificación. No proceden reembolsos y MiCert se reserva las acciones legales que correspondan.</p>
        <h3>7.4 Efectos de la Cancelación</h3>
        <p>Tras la cancelación, el Cliente pierde acceso a la plataforma. El Cliente puede solicitar la exportación de sus datos dentro de los 30 días corridos siguientes. Después de 90 días corridos, los datos operacionales pueden ser eliminados, salvo aquellos legalmente requeridos.</p>
        <h3>7.5 Permanencia de Certificados Emitidos</h3>
        <p>Los certificados emitidos durante la vigencia del servicio mantienen las siguientes características tras la cancelación:</p>
        <ul>
          <li>Descarga por el Cliente: disponible por 90 días corridos adicionales después de la cancelación, en formato PDF individual o ZIP.</li>
          <li>Verificación online: la consulta del estado de los certificados contra app.micert.cl está sujeta a la operación continua del servicio. MiCert hará esfuerzos razonables por mantenerla disponible, pero no la garantiza más allá del período en que la plataforma esté operativa.</li>
          <li>Trazabilidad histórica: los registros de trazabilidad y auditoría se conservan por los plazos que exijan las obligaciones legales aplicables —principalmente la normativa SENCE de trazabilidad y auditoría y las obligaciones tributarias asociadas, que conforme a los plazos de prescripción aplicables pueden extenderse hasta seis años— y quedan disponibles para auditorías gubernamentales. Vencidos esos plazos, los registros se anonimizan o se suprimen.</li>
        </ul>

        <h2>8. Propiedad Intelectual</h2>
        <h3>8.1 Propiedad del Software</h3>
        <p>Todos los derechos de propiedad intelectual sobre la plataforma MiCert (código, lógica, diseño, marca &quot;MiCert&quot;, logotipo, identidad visual, documentación y materiales) son de propiedad exclusiva de MiCert Digital SpA. La licencia de uso otorgada al Cliente no transfiere ningún derecho de propiedad sobre estos elementos.</p>
        <h3>8.2 Propiedad del Contenido del Cliente</h3>
        <p>Los certificados generados y el contenido ingresado por el Cliente (información de participantes, contenidos de los cursos, logos y marcas del Cliente, datos operacionales y archivos cargados) son de propiedad del Cliente. El Cliente garantiza que posee todos los derechos necesarios sobre este contenido y que su uso no infringe derechos de terceros.</p>
        <h3>8.3 Licencia de Uso del Software</h3>
        <p>Durante la vigencia del contrato, el Cliente recibe una licencia no exclusiva, no transferible, no sublicenciable, revocable y limitada a los fines descritos en la Sección 4.</p>
        <h3>8.4 Licencia de Uso del Contenido del Cliente</h3>
        <p>El Cliente otorga a MiCert una licencia limitada y gratuita para procesar y almacenar su contenido, generar certificados según sus instrucciones, ponerlos a disposición de los titulares designados, mantener respaldos de seguridad y cumplir obligaciones legales. Esta licencia no autoriza a MiCert a usar el contenido para fines publicitarios o comerciales propios, y termina cuando el Cliente solicita la eliminación de datos, salvo obligaciones legales de conservación.</p>
        <h3>8.5 Uso de la Marca MiCert por el Cliente</h3>
        <p>Mientras la suscripción esté activa, el Cliente puede mencionar públicamente que usa MiCert y vincular a www.micert.cl. El Cliente no puede usar el logo o la marca MiCert en sus propios materiales de marketing sin autorización escrita previa, presentarse como socio o partner oficial, ni registrar dominios o marcas que incluyan &quot;MiCert&quot;.</p>

        <h2>9. Disponibilidad, Soporte y Limitaciones</h2>
        <h3>9.1 Disponibilidad del Servicio</h3>
        <p>MiCert realizará esfuerzos razonables para mantener la plataforma operativa de forma continua, considerando que se trata de un servicio en línea sujeto a mantenciones, actualizaciones y eventualidades técnicas propias de este tipo de servicios. Las mejoras de seguridad y nuevas funcionalidades se incluyen en el plan del Cliente sin costo extra, salvo aquellas que correspondan a planes superiores o soluciones a medida.</p>
        <h3>9.2 Soporte Técnico</h3>
        <p>MiCert proporciona soporte para el uso de la plataforma, en idioma español, en días hábiles. El soporte incluye resolución de incidencias operativas y asistencia funcional dentro del alcance del plan contratado. No incluye desarrollo de nuevas funcionalidades ni integraciones a medida.</p>
        <h3>9.3 Exclusión de Garantías</h3>
        <p>La plataforma se provee &quot;tal cual&quot; y &quot;según disponibilidad&quot;. MiCert no garantiza que el servicio esté libre de interrupciones o errores en todo momento, que todos los defectos se corrijan de inmediato, ni que sea compatible con todos los navegadores y dispositivos. El recurso del Cliente ante insatisfacción es reportar el problema por los canales de soporte y, si persiste, cancelar la suscripción. No proceden reembolsos por insatisfacción subjetiva.</p>
        <h3>9.4 Limitación de Responsabilidad</h3>
        <p>En la máxima medida permitida por la ley chilena, la responsabilidad máxima de MiCert se limita al monto efectivamente pagado por el Cliente en el mes inmediatamente anterior al evento que generó el reclamo. MiCert no será responsable por daños indirectos, incidentales o consecuenciales; lucro cesante; daño reputacional; pérdida de datos causada por fallas del Cliente; acciones de terceros; multas o sanciones impuestas por SENCE u otras autoridades; el contenido, veracidad o validez pedagógica de los certificados; ni por caso fortuito o fuerza mayor.</p>
        <h3>9.5 Exenciones Específicas</h3>
        <p>MiCert queda eximido de responsabilidad por información incorrecta o fraudulenta proporcionada por el Cliente, fallas de conectividad o infraestructura ajenas a MiCert, ataques de terceros, uso indebido de la plataforma, infracciones del Cliente a derechos de terceros, y casos de fuerza mayor. En estos casos no proceden reembolsos ni indemnizaciones.</p>

        <h2>10. Responsabilidades del Cliente</h2>
        <p>El Cliente es responsable de la veracidad de la información en los certificados, del cumplimiento de las normativas aplicables (SENCE, Ley 19.518, entre otras), de que las capacitaciones certificadas se hayan realizado efectivamente, de obtener el consentimiento de los titulares para procesar sus datos personales conforme a la Ley N° 19.628, según su texto modificado por la Ley N° 21.719, cuando dicha base legal aplique, de mantener la confidencialidad de sus credenciales y de pagar oportunamente las tarifas acordadas.</p>
        <p>MiCert es una herramienta tecnológica para gestionar certificados y no asume responsabilidad por el contenido pedagógico de los cursos, la validez legal de los certificados ante autoridades, la aprobación de auditorías SENCE, ni la calidad o efectividad de las capacitaciones impartidas.</p>

        <h2>11. Confidencialidad y Protección de Datos</h2>
        <p>Ambas partes se comprometen a mantener confidencial la información comercial o técnica a la que accedan como resultado de este contrato.</p>
        <p>El tratamiento de datos personales se rige por la Ley N° 19.628, según su texto modificado por la Ley N° 21.719, y por la Política de Privacidad de MiCert, que forma parte integral de estos términos. Conforme a ella, MiCert actúa como Responsable respecto de los datos del Cliente-organización y su usuario administrador, y como Encargado respecto de los datos de los titulares de certificados aportados por el Cliente.</p>
        <p>Cuando MiCert actúa como Encargado, conforme al artículo 15 bis debe existir un Contrato de Encargo de Tratamiento de Datos (DPA) firmado entre el Cliente y MiCert. El Cliente puede solicitar la plantilla a hola@micert.cl.</p>

        <h2>12. Indemnización</h2>
        <p>El Cliente acepta indemnizar y mantener indemne a MiCert, sus socios, administradores y representantes frente a cualquier reclamación, pérdida o daño (incluidos honorarios razonables de abogados) derivados del incumplimiento de este contrato por el Cliente, la violación de derechos de terceros, el uso indebido de la plataforma, la emisión de certificados sin respaldo de capacitación real, la entrega de información falsa, o el incumplimiento de normativas aplicables.</p>

        <h2>13. Modificaciones</h2>
        <p>MiCert puede actualizar estos Términos ocasionalmente. Los cambios importantes se notificarán con al menos 15 días hábiles de anticipación mediante email a la dirección registrada o aviso en la plataforma al iniciar sesión. El uso continuado después de los cambios constituye aceptación. Si el Cliente no está de acuerdo, puede cancelar su cuenta antes de que entren en vigencia.</p>

        <h2>14. Resolución de Controversias</h2>
        <p>Antes de iniciar acciones judiciales, las partes intentarán resolver cualquier controversia mediante negociación directa de buena fe durante 30 días corridos. Este contrato se rige por las leyes de la República de Chile. Cualquier controversia será resuelta por los tribunales ordinarios de justicia de la ciudad de Santiago, Chile.</p>

        <h2>15. Disposiciones Generales</h2>
        <p>Estos Términos, junto con la Política de Privacidad y el Contrato de Encargo de Tratamiento de Datos cuando aplique, constituyen el acuerdo completo entre las partes. Si alguna disposición es declarada inválida, las demás permanecerán en pleno vigor. La falta de ejercicio de un derecho por parte de MiCert no constituye renuncia a dicho derecho. El Cliente no puede ceder sus derechos sin consentimiento previo por escrito de MiCert; MiCert puede ceder este contrato en caso de fusión, adquisición o venta de activos, notificando al Cliente. Las notificaciones a MiCert se envían a hola@micert.cl; al Cliente, al email registrado en la cuenta. Este contrato se redacta en español y prevalece esa versión.</p>

        <h2>16. Contacto</h2>
        <p>Para consultas sobre estos Términos y Condiciones: hola@micert.cl</p>

        <p style={{ marginTop: 28, color: "#65645d" }}>Al usar MiCert, el Cliente confirma que ha leído, comprendido y aceptado estos Términos y Condiciones en su totalidad.</p>
      </div>

      <Footer />
    </div>
  );
}
