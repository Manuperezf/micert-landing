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
        <p className="updated">Última actualización: 9 de agosto de 2026</p>

        <div className="legal-summary">
          <h2>En resumen</h2>
          <p>Antes del detalle legal completo, los puntos clave del acuerdo:</p>
          <ul>
            <li><strong>Quién es quién:</strong> MiCert Digital SpA opera la plataforma MiCert; tu organización es el Cliente que la contrata.</li>
            <li><strong>Qué ofrece MiCert:</strong> emisión masiva, diseño, distribución, validación pública y revocación de certificados digitales, con trazabilidad completa.</li>
            <li><strong>Cómo se valida:</strong> cada certificado lleva un código QR y un código corto únicos que abren una página pública de verificación en línea (app.micert.cl) con los datos del certificado y su estado actual. La verificación requiere conexión a internet.</li>
            <li><strong>Los certificados no se editan:</strong> una vez emitido, un certificado queda fijo. Para corregirlo se revoca y se emite uno nuevo.</li>
            <li><strong>Cómo se paga:</strong> mediante transferencia bancaria, según el plan contratado.</li>
            <li><strong>Cancelación:</strong> si firmaste un Contrato de Prestación de Servicios, mandan sus plazos. Si no, puedes cancelar cuando quieras y la baja rige al final del período ya pagado. Los planes anuales no se reembolsan proporcionalmente.</li>
            <li><strong>Si tienes contrato firmado, ese contrato manda</strong> sobre estos Términos cuando digan cosas distintas.</li>
            <li><strong>Tus datos:</strong> los datos personales se rigen por la Política de Privacidad y, cuando corresponda, por el DPA.</li>
          </ul>
          <p>Lo que sigue es el desarrollo completo del acuerdo.</p>
        </div>

        <h2>1. Identificación de las Partes</h2>
        <p>Estos Términos y Condiciones constituyen un acuerdo legalmente vinculante entre:</p>
        <p><strong>El Prestador:</strong></p>
        <p><strong>Razón social:</strong> MiCert Digital SpA (nombre de fantasía: MiCert), en adelante &quot;MiCert&quot; o &quot;el Prestador&quot;</p>
        <p><strong>RUT:</strong> 78.454.247-5</p>
        <p><strong>Domicilio:</strong> Antonio Bellet N° 193, oficina 1210, comuna de Providencia, Región Metropolitana de Santiago</p>
        <p><strong>Email:</strong> hola@micert.cl</p>
        <p><strong>Sitio web:</strong> www.micert.cl</p>
        <p><strong>El Cliente:</strong> la organización (persona jurídica) que se registra en la plataforma MiCert y acepta estos Términos, identificada con los datos proporcionados durante el proceso de registro.</p>
        <p>El servicio se presta en idioma español y opera bajo legislación de la República de Chile.</p>

        <h2>2. Definiciones</h2>
        <p>CLIENTE: organización (persona jurídica) que contrata los servicios de MiCert. Típicamente un OTEC u organización capacitadora.</p>
        <p>PLAN: paquete de servicios con tarifas, cuota de emisión y funcionalidades específicas, según se publica en el sitio o se acuerda mediante propuesta comercial.</p>
        <p>CUOTA DE EMISIÓN: número de certificados que el Cliente puede mantener vigentes en un período conforme a su Plan.</p>
        <p>PAQUETE ADICIONAL: certificados que el Cliente adquiere por sobre la cuota de su Plan, con vigencia limitada.</p>
        <p>USUARIOS: las personas que el Cliente habilita para acceder a su cuenta. La plataforma contempla roles con permisos diferenciados, y el número de usuarios habilitables depende del Plan.</p>
        <p>CERTIFICADO DIGITAL: documento electrónico generado por la plataforma que acredita la participación o aprobación de un curso o capacitación. Sus datos quedan fijados al momento de la emisión.</p>
        <p>REEMISIÓN: operación por la cual se revoca un certificado vigente y se emite uno nuevo en su reemplazo, con los datos corregidos y un nuevo código de verificación.</p>
        <p>EMPRESA MANDANTE: organización por cuya cuenta el Cliente imparte una capacitación y que el Cliente puede registrar y asociar a sus cursos.</p>
        <p>VERIFICACIÓN ONLINE: consulta de un certificado mediante su código QR o código corto, contra la página pública de verificación de MiCert (app.micert.cl). Requiere conexión a internet.</p>
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
          <li>El Contrato de Prestación de Servicios y su Anexo A, cuando el Cliente haya suscrito uno</li>
          <li>El Contrato de Encargo de Tratamiento de Datos (DPA) cuando aplique</li>
        </ul>
        <h3>3.1 Forma de Aceptación</h3>
        <p>Al aceptar estos Términos durante el registro, el Cliente confirma que ha leído y comprendido estos términos, que está facultado para representar legalmente a su organización, y que su aceptación tiene carácter de firma electrónica simple conforme a la Ley N° 19.799. Esta aceptación genera el mismo efecto legal que una firma manuscrita y queda registrada con fecha y hora en los sistemas de MiCert.</p>
        <h3>3.2 Prelación de Documentos</h3>
        <p>Cuando el Cliente haya suscrito un Contrato de Prestación de Servicios con MiCert, ese contrato y sus Anexos <strong>prevalecen sobre estos Términos</strong> en todo lo que resulte contradictorio, en particular en materia de plazos, vigencia, renovación, cancelación, tarifas y límites de responsabilidad. Estos Términos se aplican en lo no regulado por el contrato y rigen íntegramente para quienes usan la plataforma sin contrato suscrito, incluidas las cuentas de prueba.</p>
        <p>En materia de protección de datos personales prevalece siempre el Contrato de Encargo de Tratamiento de Datos (DPA) y, en su defecto, la Política de Privacidad.</p>

        <h2>4. Descripción del Servicio</h2>
        <p>MiCert es una plataforma SaaS (Software as a Service) que permite a organizaciones:</p>
        <ul>
          <li>Cargar participantes desde una planilla Excel y generar certificados digitales con códigos únicos</li>
          <li>Diseñar el certificado mediante un editor visual, con campos arrastrables, logos, firmas y sellos</li>
          <li>Identificar a cada participante por su cédula nacional de identidad (RUT) o por su número de pasaporte</li>
          <li>Descargar los certificados individualmente en PDF o el curso completo en un archivo ZIP</li>
          <li>Distribuir los certificados por correo electrónico y ponerlos a disposición de los titulares</li>
          <li>Validar la autenticidad mediante una página pública de verificación en línea, accesible por código QR o código corto</li>
          <li>Administrar la vigencia y la caducidad de los certificados</li>
          <li>Revocar certificados y reemitirlos cuando sea necesario</li>
          <li>Registrar empresas mandantes y asociarlas a sus cursos</li>
          <li>Generar anexos con los resultados por módulo de evaluación</li>
          <li>Mantener trazabilidad de las acciones realizadas y acceder a reportes de su actividad</li>
          <li>Facilitar la trazabilidad requerida para auditorías SENCE</li>
        </ul>
        <p>El alcance funcional disponible depende del Plan contratado. MiCert solo compromete las funcionalidades efectivamente disponibles en la plataforma y no compromete funcionalidades futuras salvo que se pacten por escrito.</p>
        <h3>4.1 Qué muestra la verificación pública</h3>
        <p>Al escanear el código QR con la cámara del teléfono, o al ingresar el código corto, se abre la página pública de verificación de MiCert. Esa página muestra el nombre del titular, su documento de identidad, la actividad de capacitación, sus fechas y horas, el estado del certificado —vigente, por vencer, vencido o anulado—, la identificación del Cliente como emisor y, cuando el Cliente lo haya configurado, la empresa mandante del curso.</p>
        <p>El acceso exige conocer el enlace o el código único del certificado. La plataforma no ofrece listados, índices ni buscadores públicos que permitan recorrer los certificados emitidos por un Cliente.</p>
        <p><strong>La verificación por terceros es parte esencial del servicio.</strong> El Cliente reconoce que emitir un certificado a través de MiCert implica ponerlo a disposición para su verificación en los términos descritos, y se obliga a informar de ello a los titulares. Esta validación requiere conexión a internet y depende de la operación continua del servicio.</p>
        <h3>4.2 Inmutabilidad de los certificados emitidos</h3>
        <p>Los datos de un certificado quedan fijados al momento de su emisión, de modo que la página de verificación refleje exactamente lo que el Cliente certificó. <strong>Un certificado emitido no admite edición.</strong> Toda corrección se efectúa mediante reemisión: la plataforma revoca el certificado vigente y emite uno nuevo con los datos corregidos y un nuevo código de verificación.</p>
        <p>Los cambios posteriores en la configuración, el diseño o las reglas del Cliente no afectan los certificados ya emitidos. La plataforma opera además bajo un principio de archivado: los registros no se eliminan físicamente, sino que se archivan, preservando la trazabilidad.</p>
        <h3>4.3 Envío de correos</h3>
        <p>Las notificaciones a los titulares se envían desde un dominio de MiCert a través de un proveedor de correo transaccional. MiCert registra el estado del envío, pero la recepción efectiva en la bandeja del destinatario depende de terceros y de las políticas de su proveedor de correo, por lo que no puede garantizarse. El Cliente siempre puede descargar los certificados y entregarlos por sus propios medios.</p>
        <p>El servicio se presta mediante acceso web a través de navegadores compatibles. No requiere instalación de software adicional.</p>

        <h2>5. Planes, Tarifas y Pagos</h2>
        <h3>5.1 Planes Disponibles</h3>
        <p>MiCert ofrece distintos planes según las necesidades del Cliente, incluyendo un plan de prueba (demo) con un número limitado de certificados y planes comerciales con distinta cuota mensual y distinto número de usuarios habilitables. Para organizaciones con requerimientos específicos (alto volumen, integraciones u otros), MiCert puede ofrecer soluciones bajo cotización particular. Las características y eventuales límites de cada plan se publican en el sitio y pueden actualizarse periódicamente.</p>
        <h3>5.2 Cuota de Emisión y Paquetes Adicionales</h3>
        <ul>
          <li>Cada emisión consume una unidad de la cuota del Plan o del paquete adicional que corresponda.</li>
          <li><strong>La cuota se calcula sobre los certificados vigentes:</strong> la revocación de un certificado libera la unidad consumida dentro del mismo período. La revocación es, en todo caso, definitiva —un certificado revocado no puede reactivarse— y la liberación de la unidad no da derecho a devolución de dinero alguna.</li>
          <li>Como consecuencia de lo anterior, corregir un certificado mediante reemisión no aumenta el consumo neto de la cuota, porque la revocación libera la unidad que la nueva emisión consume.</li>
          <li>El consumo se imputa primero a la cuota del Plan del período en curso. Agotada esta, se imputa a los paquetes adicionales vigentes, comenzando por el de vencimiento más próximo.</li>
          <li>No consumen cuota la descarga de certificados, el reenvío de correos, la generación de anexos ni las consultas de verificación pública.</li>
          <li>Salvo pacto en contrario, la cuota no utilizada en un período no se acumula para períodos siguientes.</li>
        </ul>
        <h3>5.3 Facturación y Pagos</h3>
        <p><strong>Ciclo de facturación:</strong> mensual o anual, según el plan contratado.</p>
        <p><strong>Método de pago:</strong> transferencia bancaria a la cuenta que MiCert indique al Cliente.</p>
        <p><strong>Moneda:</strong> pesos chilenos (CLP).</p>
        <p><strong>Documentación tributaria:</strong> MiCert emite la documentación tributaria correspondiente (boleta o factura electrónica) por cada pago recibido, conforme a la normativa del SII.</p>
        <h3>5.4 Mora en Pagos</h3>
        <p>Ante el no pago de un período facturado, MiCert podrá aplicar el siguiente procedimiento, notificando por email a la dirección registrada:</p>
        <ul>
          <li><strong>Día 0:</strong> vence el pago del período.</li>
          <li><strong>Día 10 corrido:</strong> suspensión temporal del acceso a la plataforma y aviso por email.</li>
          <li><strong>Día 30 corrido:</strong> advertencia final y bloqueo de la cuenta.</li>
          <li><strong>Día 60 corrido:</strong> notificación de eliminación inminente de datos.</li>
          <li><strong>Día 90 corrido:</strong> eliminación de los datos operacionales, conservando los registros legalmente requeridos según la Sección 7.5.</li>
        </ul>
        <p>El Cliente puede regularizar en cualquier momento antes del día 90 pagando el monto adeudado.</p>
        <p><strong>La eliminación de datos operacionales por mora no alcanza a los certificados ya emitidos ni a su verificación pública.</strong> Un titular que recibió un certificado no es parte de este contrato y no puede quedar afectado por una deuda de su OTEC. Los certificados emitidos y sus registros de trazabilidad se conservan y siguen siendo verificables conforme a la Sección 7.5.</p>
        <h3>5.5 Modificaciones de Tarifas</h3>
        <p>MiCert puede modificar las tarifas con al menos 30 días corridos de aviso previo por email a los Clientes activos. Las nuevas tarifas no afectarán períodos ya pagados. Si el Cliente no está de acuerdo, puede cancelar antes de que entren en vigencia.</p>

        <h2>6. Registro y Cuentas de Usuario</h2>
        <h3>6.1 Requisitos de Registro</h3>
        <p>Para usar MiCert, la organización debe ser una persona jurídica legalmente constituida en Chile, proporcionar información verídica y actualizada (RUT, razón social, datos de contacto) y designar al menos un usuario responsable de la cuenta.</p>
        <h3>6.2 Usuarios y Roles</h3>
        <p>El Cliente puede habilitar usuarios adicionales hasta el número que permita su Plan, asignándoles el rol que corresponda entre los disponibles en la plataforma. El Cliente es responsable de mantener actualizada esa lista y de dar de baja a quienes dejen de necesitar acceso.</p>
        <h3>6.3 Responsabilidad de la Cuenta</h3>
        <p>El Cliente es responsable de mantener la confidencialidad de las credenciales de sus usuarios, de todas las actividades realizadas bajo su cuenta, de notificar inmediatamente cualquier acceso no autorizado y de mantener actualizada su información de contacto. MiCert no es responsable por pérdidas derivadas del uso no autorizado de la cuenta si el Cliente no notifica oportunamente.</p>

        <h2>7. Vigencia, Cancelación y Término</h2>
        <h3>7.1 Inicio de Vigencia</h3>
        <p>Este contrato entra en vigencia al momento de la aceptación por el Cliente y el pago de la primera cuota, cuando aplique.</p>
        <h3>7.2 Cancelación por el Cliente</h3>
        <p>Si el Cliente suscribió un Contrato de Prestación de Servicios, la vigencia, la renovación y el término se rigen por ese contrato y su Anexo A, conforme a la Sección 3.2.</p>
        <p>A falta de contrato suscrito, el Cliente puede cancelar su suscripción en cualquier momento enviando un email a hola@micert.cl. En planes mensuales, la cancelación es efectiva al final del período ya pagado. En planes anuales, el Cliente puede cancelar, pero no proceden reembolsos proporcionales por tiempo no utilizado.</p>
        <h3>7.3 Cancelación por MiCert</h3>
        <p>MiCert puede suspender o cancelar la cuenta del Cliente si este incumple estos Términos, realiza actividades fraudulentas o ilegales, no paga las tarifas acordadas tras el procedimiento de la Sección 5.4, o si la continuidad del servicio representa un riesgo para otros clientes o para la plataforma.</p>
        <p><strong>Cancelación por actividades fraudulentas:</strong> en caso de emisión de certificados falsos o uso fraudulento, MiCert puede revocar inmediatamente los certificados emitidos por el Cliente, incluidos los ya distribuidos, que quedarán marcados como revocados en el sistema de verificación. No proceden reembolsos y MiCert se reserva las acciones legales que correspondan.</p>
        <h3>7.4 Efectos de la Cancelación</h3>
        <p>Tras la cancelación, el Cliente pierde acceso a la plataforma. Durante los 30 días corridos siguientes, el Cliente puede solicitar la exportación de sus datos y de sus certificados en un formato de uso común. Los días 31 a 90 constituyen un período de gracia. A partir del día 90, los datos operacionales pueden ser eliminados, salvo aquellos cuya conservación exija la ley o resulte necesaria conforme a la Sección 7.5.</p>
        <h3>7.5 Permanencia de Certificados Emitidos</h3>
        <p>Los certificados emitidos durante la vigencia del servicio mantienen las siguientes características tras la cancelación:</p>
        <ul>
          <li><strong>Exportación por el Cliente:</strong> disponible dentro del plazo de la Sección 7.4, en formato PDF individual o ZIP.</li>
          <li><strong>Verificación online:</strong> la consulta del estado de los certificados contra app.micert.cl está sujeta a la operación continua del servicio. MiCert hará esfuerzos razonables por mantenerla disponible, pero no la garantiza más allá del período en que la plataforma esté operativa.</li>
          <li><strong>Certificados revocados:</strong> la revocación es un cambio de estado y no una eliminación. El registro se conserva revocado para que quien consulte su código pueda constatar que el certificado dejó de ser válido.</li>
          <li><strong>Trazabilidad histórica:</strong> los registros de trazabilidad y auditoría se conservan por los plazos que exijan las obligaciones legales aplicables —principalmente la normativa SENCE de trazabilidad y auditoría y las obligaciones tributarias asociadas, que conforme a los plazos de prescripción aplicables pueden extenderse hasta seis años— y quedan disponibles para auditorías gubernamentales. Vencidos esos plazos, los registros se anonimizan o se suprimen.</li>
        </ul>
        <h3>7.6 Continuidad ante Cese de Operaciones</h3>
        <p>En caso de cese definitivo de operaciones de MiCert o de discontinuación de la plataforma, MiCert avisará al Cliente con la mayor anticipación posible y pondrá a su disposición un mecanismo de exportación de sus datos y de los certificados emitidos, en un formato de uso común, dentro de un plazo no inferior a 30 días corridos.</p>

        <h2>8. Propiedad Intelectual</h2>
        <h3>8.1 Propiedad del Software</h3>
        <p>Todos los derechos de propiedad intelectual sobre la plataforma MiCert (código, lógica, diseño, marca &quot;MiCert&quot;, logotipo, identidad visual, documentación y materiales) son de propiedad exclusiva de MiCert Digital SpA. La licencia de uso otorgada al Cliente no transfiere ningún derecho de propiedad sobre estos elementos.</p>
        <h3>8.2 Propiedad del Contenido del Cliente</h3>
        <p>Los certificados generados y el contenido ingresado por el Cliente (información de participantes, contenidos de los cursos, logos y marcas del Cliente, datos operacionales y archivos cargados) son de propiedad del Cliente. El Cliente garantiza que posee todos los derechos necesarios sobre este contenido y que su uso no infringe derechos de terceros.</p>
        <h3>8.3 Licencia de Uso del Software</h3>
        <p>Durante la vigencia del contrato, el Cliente recibe una licencia no exclusiva, no transferible, no sublicenciable, revocable y limitada a los fines descritos en la Sección 4.</p>
        <h3>8.4 Licencia de Uso del Contenido del Cliente</h3>
        <p>El Cliente otorga a MiCert una licencia limitada y gratuita para procesar y almacenar su contenido, generar certificados según sus instrucciones, ponerlos a disposición de los titulares y de quien consulte su código de verificación, mantener respaldos de seguridad y cumplir obligaciones legales. Esta licencia no autoriza a MiCert a usar el contenido para fines publicitarios o comerciales propios, y termina cuando el Cliente solicita la eliminación de datos, salvo obligaciones legales de conservación y salvo la permanencia de los certificados emitidos conforme a la Sección 7.5.</p>
        <h3>8.5 Uso de la Marca MiCert por el Cliente</h3>
        <p>Mientras la suscripción esté activa, el Cliente puede mencionar públicamente que usa MiCert y vincular a www.micert.cl. El Cliente no puede usar el logo o la marca MiCert en sus propios materiales de marketing sin autorización escrita previa, presentarse como socio o partner oficial, ni registrar dominios o marcas que incluyan &quot;MiCert&quot;.</p>
        <h3>8.6 Referencia Comercial</h3>
        <p>MiCert podrá mencionar al Cliente como usuario de la plataforma e incorporar su nombre y logotipo en su sitio web y material comercial, con el solo objeto de identificarlo como cliente. El Cliente podrá revocar esta autorización en cualquier momento mediante comunicación escrita a hola@micert.cl, y MiCert retirará la mención dentro de los 30 días corridos siguientes. Cualquier referencia que incluya datos de operación del Cliente requerirá su aprobación previa y por escrito.</p>

        <h2>9. Disponibilidad, Soporte y Limitaciones</h2>
        <h3>9.1 Disponibilidad del Servicio</h3>
        <p>MiCert realizará esfuerzos razonables para mantener la plataforma operativa de forma continua, considerando que se trata de un servicio en línea sujeto a mantenciones, actualizaciones y eventualidades técnicas propias de este tipo de servicios. Las mejoras de seguridad y nuevas funcionalidades se incluyen en el plan del Cliente sin costo extra, salvo aquellas que correspondan a planes superiores o soluciones a medida.</p>
        <h3>9.2 Soporte Técnico</h3>
        <p>MiCert proporciona soporte para el uso de la plataforma, en idioma español, en días hábiles, por correo electrónico a hola@micert.cl. El soporte incluye resolución de incidencias operativas y asistencia funcional dentro del alcance del plan contratado. No incluye desarrollo de nuevas funcionalidades ni integraciones a medida.</p>
        <h3>9.3 Exclusión de Garantías</h3>
        <p>La plataforma se provee &quot;tal cual&quot; y &quot;según disponibilidad&quot;. MiCert no garantiza que el servicio esté libre de interrupciones o errores en todo momento, que todos los defectos se corrijan de inmediato, ni que sea compatible con todos los navegadores y dispositivos. El recurso del Cliente ante insatisfacción es reportar el problema por los canales de soporte y, si persiste, cancelar la suscripción. No proceden reembolsos por insatisfacción subjetiva.</p>
        <h3>9.4 Limitación de Responsabilidad</h3>
        <p>En la máxima medida permitida por la ley chilena, la responsabilidad total de MiCert por cualquier concepto relacionado con el servicio se limita al monto efectivamente pagado por el Cliente durante los doce (12) meses anteriores al hecho que origina la responsabilidad. MiCert no será responsable por daños indirectos, incidentales o consecuenciales; lucro cesante; daño reputacional; pérdida de datos causada por fallas del Cliente; acciones de terceros; multas o sanciones impuestas por SENCE u otras autoridades; el contenido, veracidad o validez pedagógica de los certificados; ni por caso fortuito o fuerza mayor. Estas limitaciones no aplican en caso de dolo o culpa grave.</p>
        <h3>9.5 Exenciones Específicas</h3>
        <p>MiCert queda eximido de responsabilidad por información incorrecta o fraudulenta proporcionada por el Cliente, fallas de conectividad o infraestructura ajenas a MiCert, ataques de terceros, uso indebido de la plataforma, infracciones del Cliente a derechos de terceros, y casos de fuerza mayor. En estos casos no proceden reembolsos ni indemnizaciones.</p>

        <h2>10. Responsabilidades del Cliente</h2>
        <p>El Cliente es responsable de:</p>
        <ul>
          <li>La veracidad y exactitud de la información contenida en los certificados que emite.</li>
          <li>Declarar correctamente el tipo de documento de identidad de cada participante —cédula nacional de identidad o pasaporte— y revisar la exactitud de los datos antes de emitir, atendido que el certificado emitido es inmutable y su corrección exige reemisión conforme a la Sección 4.2.</li>
          <li>Informar a los titulares que el certificado emitido será verificable por terceros mediante su código único, en los términos de la Sección 4.1.</li>
          <li>Abstenerse de incorporar datos sensibles o datos innecesarios para la finalidad del servicio en los campos de texto libre del diseño del certificado.</li>
          <li>El cumplimiento de las normativas aplicables (SENCE, Ley N° 19.518, entre otras) y de que las capacitaciones certificadas se hayan realizado efectivamente.</li>
          <li>Contar con una base de licitud válida para tratar los datos personales de los titulares conforme a la Ley N° 19.628, según su texto modificado por la Ley N° 21.719, e informar a los titulares conforme a la ley.</li>
          <li>Mantener la confidencialidad de las credenciales de sus usuarios y pagar oportunamente las tarifas acordadas.</li>
        </ul>
        <p>MiCert es una herramienta tecnológica para gestionar certificados y no asume responsabilidad por el contenido pedagógico de los cursos, la validez legal de los certificados ante autoridades, la aprobación de auditorías SENCE, ni la calidad o efectividad de las capacitaciones impartidas.</p>

        <h2>11. Confidencialidad y Protección de Datos</h2>
        <p>Ambas partes se comprometen a mantener confidencial la información comercial o técnica a la que accedan como resultado de este contrato.</p>
        <p>El tratamiento de datos personales se rige por la Ley N° 19.628, según su texto modificado por la Ley N° 21.719, y por la Política de Privacidad de MiCert, que forma parte integral de estos términos. Conforme a ella, MiCert actúa como <strong>Responsable</strong> respecto de los datos de la organización Cliente y de los usuarios que esta habilita en la plataforma, y como <strong>Encargado</strong> respecto de los datos de los titulares de certificados y de las demás personas cuyos datos el Cliente incorpore al servicio.</p>
        <p>Cuando MiCert actúa como Encargado, conforme al artículo 15 bis debe existir un Contrato de Encargo de Tratamiento de Datos (DPA) firmado entre el Cliente y MiCert. El Cliente puede solicitar la plantilla a hola@micert.cl. En caso de discrepancia en materia de protección de datos entre el DPA, la Política de Privacidad y estos Términos, prevalece el DPA.</p>

        <h2>12. Indemnización</h2>
        <p>El Cliente acepta indemnizar y mantener indemne a MiCert, sus socios, administradores y representantes frente a cualquier reclamación, pérdida o daño (incluidos honorarios razonables de abogados) derivados del incumplimiento de este contrato por el Cliente, la violación de derechos de terceros, el uso indebido de la plataforma, la emisión de certificados sin respaldo de capacitación real, la entrega de información falsa, o el incumplimiento de normativas aplicables.</p>

        <h2>13. Modificaciones</h2>
        <p>MiCert puede actualizar estos Términos ocasionalmente. Los cambios importantes se notificarán con al menos 15 días hábiles de anticipación mediante email a la dirección registrada o aviso en la plataforma al iniciar sesión. El uso continuado después de los cambios constituye aceptación. Si el Cliente no está de acuerdo, puede cancelar su cuenta antes de que entren en vigencia.</p>

        <h2>14. Resolución de Controversias</h2>
        <p>Antes de iniciar acciones judiciales, las partes intentarán resolver cualquier controversia mediante negociación directa de buena fe durante 30 días corridos. Este contrato se rige por las leyes de la República de Chile. Cualquier controversia será resuelta por los tribunales ordinarios de justicia de la ciudad de Santiago, Chile.</p>

        <h2>15. Disposiciones Generales</h2>
        <p>Estos Términos, junto con la Política de Privacidad, el Contrato de Prestación de Servicios cuando exista y el Contrato de Encargo de Tratamiento de Datos cuando aplique, constituyen el acuerdo completo entre las partes, con el orden de prelación establecido en la Sección 3.2. Si alguna disposición es declarada inválida, las demás permanecerán en pleno vigor. La falta de ejercicio de un derecho por parte de MiCert no constituye renuncia a dicho derecho. El Cliente no puede ceder sus derechos sin consentimiento previo por escrito de MiCert; MiCert puede ceder este contrato en caso de fusión, adquisición o venta de activos, notificando al Cliente. Las notificaciones a MiCert se envían a hola@micert.cl; al Cliente, al email registrado en la cuenta. Este contrato se redacta en español y prevalece esa versión.</p>

        <h2>16. Contacto</h2>
        <p>Para consultas sobre estos Términos y Condiciones: hola@micert.cl</p>

        <p style={{ marginTop: 28, color: "#65645d" }}>Al usar MiCert, el Cliente confirma que ha leído, comprendido y aceptado estos Términos y Condiciones en su totalidad.</p>
      </div>

      <Footer />
    </div>
  );
}
