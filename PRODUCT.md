# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Sitio existente en **Zoho Sites** (Zoho One), sitio "demo4life" (demo4life1.zohosites.com), aún no lanzado en 4lifehipotecario.cl. Las páginas se arman con snippets HTML propios y chicos por sección, con estilos aislados por prefijo de clase (`f4` / `fl-`), más un Custom CSS global (`custom-css-4life.css`). Cabecera y pie nativos del tema. Prospectos a **Zoho CRM** (función `sim4life_registro`). Fuente única del código: carpeta OneDrive "Trabajo Onboarding\Pagina Web 4Lifehipotecario en Zoho" (no GitHub).

## Users

**Usuario principal:** la persona que llega sola al sitio (desde Google, Meta o directo) buscando financiar su vivienda: comprar (primera o segunda vivienda, inversión), refinanciar un crédito vigente o pedir un crédito de fines generales con garantía de su propiedad. Llega con dudas sobre cuánto pagaría y si califica; su trabajo es saber su dividendo y dar el siguiente paso sin hablar todavía con nadie.

**Audiencia secundaria:** inmobiliarias y brokers, con su propia página. Clientes vigentes (servicio al cliente) y otras instituciones (Portabilidad financiera) tienen rutas propias, separadas del camino del prospecto.

## Product Purpose

**4Life Crédito Hipotecario** es una mutuaria chilena del grupo 4Life Seguros de Vida que otorga créditos hipotecarios. El sitio reemplaza a la web React actual (sin SEO, sin control de marketing) por una que marketing edita sin TI, que Google y los motores de IA pueden leer, y que convierte.

**Éxito:** que **10 créditos al mes** nazcan del sitio. El indicador es créditos originados, no volumen de prospectos. El sitio tiene **una sola acción principal medible: el simulador** (/simular).

## Positioning

Lo que 4Life puede decir y un banco no:

- **Evaluación flexible:** evalúa caso a caso según el origen del ingreso, incluidos casos que el banco no toma (boletas de honorarios, ingresos variables). Sin hablar de "perfiles de ingreso complejo".
- **Dividendo flexible:** el crédito es a 40 años, pero se puede pagar cualquier dividendo equivalente a un plazo entre 8 y 40 años, con amortización directa a capital.
- **Simulación 100% digital:** la persona ve su dividendo al instante y sin compromiso antes de que entre un ejecutivo.

## Operating Context

- **Funnel (decisión de Juan):** primero los números (valor y pie), luego los datos de contacto, y recién ahí la simulación. Elegible → /evaluacion; no elegible o sin respuesta del motor → /gracias. El simulador muestra 3 escenarios de plazo.
- **Escalera de compromiso:** cada vez que se pide algo, se entrega algo. El ejecutivo entra tarde, no en el primer contacto.
- La lógica de negocio (productos, límites, avisos) vive en el **motor** (proyecto aparte), no en la página. La pantalla del simulador es flexible.
- Ecosistema: Sani (core), Credibid + ClaveÚnica (evaluación), Upago/Servipag (pagos), Lidz (IA de WhatsApp, solo responde), sitio privado de clientes, onboarding en subdominio aparte. Medición vía GTM (Pixel de Meta, GA4); UTM, gclid y fbclid llegan al CRM.
- 7 ejecutivos comerciales con correo Microsoft 365; no son usuarios Zoho.
- Estructura del sitio en familias: Financiar mi hogar (crédito tradicional, segunda vivienda o inversión, FOGAES), Comprar con subsidio (DS1, DS19: futuros, aún no se ofrecen), Soluciones financieras (refinanciamiento, fines generales), Inmobiliarias y brokers. Más una página de licitaciones de seguros y resultados.

## Capabilities and Constraints

- **Producto tradicional:** pie mínimo 20 %; plazo 40 años con dividendo flexible; financia en todo Chile; propiedades usadas sin antigüedad máxima si están en buen estado; seguros obligatorios y licitados; el cliente paga gastos operacionales (el excedente se devuelve). Las políticas de crédito dependen del momento: no calificar hoy no impide calificar después.
- **Refinanciamiento:** de cualquier banco o mutuaria, y de 4Life. "Portabilidad" para personas = refinanciamiento.
- **Fines generales:** libre disposición (unir deudas, remodelar, negocio, educación), propiedad a nombre del solicitante.
- **FOGAES:** activo al lanzamiento, solo primera vivienda, rebaja de tasa del programa, plazo hasta 30 años con dividendo flexible.
- **No publicar:** tasas propias, números propios de costeo, el tope de UF 30.000, costos o comisión de prepago en refinanciamiento. No destacar el pie de 20 %. No vincular DS1/DS19 a un crédito 4Life mientras no se ofrezcan.
- **Contacto:** en páginas de producto el único camino es el simulador. No mostrar correos; usar una página con formulario de contacto. No repetir en páginas de producto preguntas de calificación que el simulador vuelve a hacer. WhatsApp vs simulador en el home: **sin decidir**.
- **Datos personales:** se quedan en la herramienta que los captura (Zoho CRM), sin servidores intermedios. Un solo canal de desuscripción para comunicaciones comerciales.
- **Legal:** Ley 19.628 y Ley 21.719 (dic 2026): consentimiento, banner de cookies, política de privacidad en reescritura. Toda simulación es referencial, sujeta a evaluación y tasación, y muestra la CAE. Textos claros y no engañosos (CMF/SERNAC).
- UF del sitio desde la CMF.
- No tocar lo que Juan marca como terminado (p. ej. snippet "4L - Simulador").
- Títulos de sección con mayúscula en cada palabra principal (decidido 19-11-2026).
- Hero del home: foto fija, sin slider (decidido 19-11-2026).
- El simulador se pasa a la paleta celeste solo en colores (bloque `#s4l-sim` del CSS), sin tocar el snippet ni su lógica (autorizado 19-11-2026).
- **Sin decidir:** fecha de DNS.

## Brand Commitments

- Nombre: **4Life Crédito Hipotecario** (negrita la primera vez en texto).
- Lema vigente: **"Tu nuevo hogar comienza aquí"** (reemplaza a "Tu hogar, nuestro compromiso").
- Voz: español de Chile, **tuteo siempre** (nunca "usted" ni "vos"), primera persona plural cuando actúa la marca. Experto que acompaña: cercano, claro, explica cada término en una frase. Conecta con el hogar y la tranquilidad, no con el producto financiero. Cifras en formato chileno (UF 1.000, 75 %). Sin emojis ni urgencia artificial.
- Marca hermana de 4Life Seguros de Vida: comparte identidad. Existe un **brandbook v2** (design system "4life", contraste AA) y logos color y reverso. Su paleta de azul rey #295BE9 quedó reemplazada (19-11-2026) por la celeste de DESIGN.md: celeste de fondo con texto blanco, degradado celeste sobre fotos y botón rojo; el logo nunca va sobre azul, coral ni fotos cargadas.
- El brandbook v3 rige para todo 4life (sitio, correos, redes, folletos, presentaciones); piezas fuera de la paleta, como el folleto azul marino y dorado, quedan fuera de marca.
- Juan prefirió el sistema visual `.f4v2` (página FOGAES, simulador) sobre el Home v4, que no publicó.

## Evidence on Hand

- **Respaldo del grupo 4Life Seguros de Vida.**
- **Fotos de marca:** OneDrive "Marketing y RRSS\Fotos Stock\4 Life fotos" (60 fotos, pocas personas: no repetir a las mismas personas en una página).
- Brandbook v2 y logos.
- **No hay** cifras propias publicables, testimonios reales ni logos de inmobiliarias socias. **No inventarlos** (ni años de operación, ni créditos otorgados, ni reseñas).

## Product Principles

1. **Una sola acción principal:** todo camino del prospecto lleva al simulador; cero enlaces muertos.
2. **Dar antes de pedir:** cada dato que se pide devuelve algo concreto (número, simulación, evaluación).
3. **Prudencia en las afirmaciones:** solo lo que es verdad hoy y no cambia con la política del momento; nada que asuste a quien tiene una evaluación sencilla.
4. **Marketing edita sin TI:** piezas chicas, aisladas y fáciles de mantener por una sola persona.
5. **Legible para Google y motores de IA:** contenido real en HTML, una URL por producto o intención.

## Accessibility & Inclusion

WCAG 2.2 AA: contraste 4,5:1 en texto y 3:1 en íconos y bordes, foco de teclado visible, `aria-live` en resultados dinámicos (dividendo), mínimo 44 px en controles. Lenguaje simple con la jerga hipotecaria explicada.
