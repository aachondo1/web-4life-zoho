---
target: página Refinanciamiento
total_score: 16
max_score: 32
na_heuristics: 3,7
p0_count: 1
p1_count: 3
target_identity: "file:/home/claude/repo/sitio/Refinanciamiento/4L - Refinanciamiento.txt"
target_fingerprint: "sha256:ce5fe1ab557a28c994c76312f77ad8944e40b0d91bde7e6990214972208ef00c"
target_path: /home/claude/repo/sitio/Refinanciamiento/4L - Refinanciamiento.txt
timestamp: 2026-11-20T13-17-14Z
slug: sitio-refinanciamiento-4l-refinanciamiento-txt
---
Método: dual-agent (A: revisión de diseño · B: detector + navegador), dos subagentes aislados.

## Crítica Impeccable: Refinanciamiento (`/refinanciamiento-hipotecario`, v2026.11.18-3)

Vista previa local: snippet + CSS Personalizado + scripts globales, cabecera y pie de mentira, fotos grises con la proporción real y `FORM_URL` vacío (como está hoy en el archivo).

### Puntaje de salud del diseño

| # | Heurística | Puntaje | Problema principal |
|---|---|---|---|
| 1 | Visibilidad del estado | 2 | "Quiero refinanciar" baja al formulario y le da el foco (verificado), pero no se dice qué pasa después de enviar; en celular el formulario queda a 44–72 px del borde en vez de los 96 px del `scroll-margin` |
| 2 | Lenguaje del usuario | 2 | Explica "portabilidad hipotecaria", pero no "dividendo flexible", "CAE", "F22" ni "certificado de deuda" |
| 3 | Control y libertad | n/a | Página de lectura con formulario de Zoho embebido; nada que deshacer |
| 4 | Consistencia y estándares | 1 | Va atrás de tradicional y FOGAES: títulos en oración, 10 textos con "ejecutivo", 4 pasos en vez de 6, botones de portada en píldora |
| 5 | Prevención de errores | 1 | Con `FORM_URL` vacío los botones rojos llevan a "Estamos actualizando este formulario", que manda al simulador de compra |
| 6 | Reconocer en vez de recordar | 3 | Todo a la vista; preguntas claras |
| 7 | Flexibilidad y eficiencia | n/a | Página de aterrizaje de una visita |
| 8 | Estética y minimalismo | 2 | La bifurcación 4Life / otra institución se repite 4 veces; portada de ~870 px con una foto que no aporta |
| 9 | Recuperarse de errores | 2 | El aviso de respaldo es amable, pero apunta a la herramienta equivocada y promete "un ejecutivo te contacta" |
| 10 | Ayuda y documentación | 3 | 8 preguntas útiles; "¿Cuánto tarda?" responde "Depende de tu caso" |
| **Total** | | **16/32** | **Aceptable (50 %)**: necesita mejoras importantes |

### ¿Está hecha para 4Life?

**Revisión de diseño:** es una página genérica de la categoría, armada con piezas de 4Life. La secuencia (Qué es → Qué puedes revisar → ¿Te conviene? → Qué necesitas → Cómo → Preguntas) es la plantilla del brief SEO y serviría casi igual para cualquier banco. Lo único propio es la bifurcación "mi crédito está en 4Life / en otra institución". El argumento que 4Life tiene y un banco no, el **dividendo flexible**, cabe en media línea ("Hasta 40 años, con dividendo flexible") y nunca se explica. Para quien llega porque el dividendo le aprieta, esa es justamente la razón para cambiarse. La página es del 18-11 y nunca tuvo crítica, así que no recibió las decisiones del 19 y 20.

**Detector:**
- El snippet solo no dispara reglas (0 hallazgos). El CSS de la página dispara 1: `border-accent-on-rounded`, el filete rojo de 4 px sobre la tarjeta redondeada del formulario (CSS línea 34).
- En la vista previa salen además:
  - el mismo filete en `.v-well`, que viene de la base `.f4v2`;
  - palabras sueltas al final de las respuestas de "¿Te conviene?" ("planes.", "hoy.", "buscas.");
  - el contraste del legal del cierre en celular: 4,1:1 medido en píxeles, contra 4,85:1 calculado sobre Celeste Profundo sólido. La diferencia viene de la foto al 28 % encima. Las dos revisiones coinciden en este punto, así que lo doy por real.
- **Falsos positivos descartados:**
  - la caja dentro de una caja (es el aviso del iframe vacío);
  - el bajo contraste de #318CDD y el rayado (CSS de otras páginas);
  - el margen interno estrecho (heurística sobre secciones a lo ancho y el cierre global);
  - los 404 intermitentes de la vista previa.

**Superposición en navegador:** no hay navegador visible para ti en esta sesión, así que no hay overlay. Las mediciones se hicieron con Chrome headless.
- 0 desbordes a 1440 y 390 px.
- 0 textos bajo 4,5:1 en `#rf-root` (fuera del legal ya dicho).
- 0 textos bajo 14 px.
- Títulos en orden y todas las imágenes con alt.
- CLS en celular: 0,075, por un reflujo del hero al cargar la fuente Asap.

### Impresión general

La página es prudente y está bien construida por dentro, pero no convence. Le pide datos a alguien preocupado sin darle una razón concreta a cambio, y hoy el botón principal lleva a un formulario que no existe. La mayor oportunidad está en contar el dividendo flexible arriba y pasar la página por el mismo molde que FOGAES.

### Lo que funciona

1. **La bifurcación según dónde está tu crédito.** Dos tarjetas paralelas con viñetas concretas y un botón de contorno cada una. Es la idea más propia de la página.
2. **Textos prudentes.** Sin tasas, sin topes de UF, sin DICOM. "Ves la propuesta antes de decidir" y "la propuesta te muestra el dividendo, la tasa, el CAE y los costos" generan confianza. El legal está bien.
3. **Bien hecha por dentro.**
   - Las respuestas del FAQ van en el HTML y se pliegan con script.
   - `aria-expanded` funciona (probado).
   - Foco visible de 2 px.
   - El latido del formulario respeta `prefers-reduced-motion`.
   - Las UTM, gclid y fbclid viajan a Zoho Forms.

### Problemas prioritarios

**[P0] El botón principal hoy no lleva a nada útil.**
- **Qué pasa:** `FORM_URL = ""` (línea 162). Los 3 botones rojos "Quiero refinanciar" y los 2 de contorno bajan a "Estamos actualizando este formulario". El aviso manda a `/simular?producto=tradicional`, que pregunta valor de la vivienda, pie y finalidad (no sirve para refinanciar) y promete "un ejecutivo te contacta".
- **Por qué importa:** quien refinancia es la persona con más intención del sitio, y justo ahí la página se corta.
- **Arreglo:** no publicar sin `FORM_URL`. Si el formulario se demora, el aviso debe ofrecer una salida honesta (WhatsApp, por ejemplo) y no el simulador de compra, y debe sacar la promesa del ejecutivo.
- **Comando:** `/impeccable harden` + `/impeccable clarify`.

**[P1] Va atrás de tus decisiones en tradicional y FOGAES.**
- **Qué pasa:**
  - "Ejecutivo" aparece en 10 textos visibles.
  - Títulos en oración: "Qué es refinanciar…", "Qué necesitas", "Preguntas frecuentes", "Cómo refinanciar con 4Life".
  - 4 pasos en vez del camino de 6.
  - Falta el patrón "Lo que Necesitas y lo que Pagas"; los costos solo se nombran en una nota.
- **Por qué importa:** la página se ve y suena distinta a sus hermanas, y promete un ejecutivo que puede no existir.
- **Arreglo:** el mismo molde de FOGAES v2026.11.20-4:
  - 6 pasos adaptados a refinanciar;
  - "Lo que Necesitas y lo que Pagas" con los dos caminos;
  - mayúscula en cada palabra principal;
  - primera persona plural ("te acompañamos") en vez de "un ejecutivo".
- **Comando:** `/impeccable adapt` + `/impeccable clarify`.

**[P1] Falta el argumento diferenciador.**
- **Qué pasa:** el dividendo flexible solo existe en "Tu plazo" y en la pregunta 5. "Tu dividendo te queda apretado", la frase que nombra el problema de quien llega, está en la 5.ª sección, a ~2.600 px.
- **Por qué importa:** sin una razón concreta, quien llega no tiene por qué cambiarse a 4Life en vez de a cualquier banco.
- **Arreglo:**
  - una banda "Tu Dividendo, a tu Ritmo" como la de tradicional, sin cifras (crédito a 40 años, pagas el dividendo de un plazo entre 8 y 40, lo extra va a capital), en lugar de "Qué puedes revisar";
  - subir "¿Te conviene Refinanciar?" antes de "Qué es".
- **Comando:** `/impeccable distill` + `/impeccable layout`.

**[P1] Rojo usado como adorno.**
- **Qué pasa:** el rojo aparece en:
  - el filete superior y el latido de la tarjeta del formulario;
  - los íconos de "Qué puedes revisar";
  - los íconos de los botones de portada;
  - el punto del paso 1.

  En la primera pantalla, lo más rojo es un borde, no una acción.
- **Por qué importa:** rompe la regla de un rojo por vista, solo para el siguiente paso.
- **Arreglo:**
  - tarjeta sin filete (la sombra basta);
  - íconos de beneficio en cuadro Celeste Profundo con ícono blanco;
  - paso 1 en coral, como FOGAES.
- **Comando:** `/impeccable colorize`.

**[P2] Legal del cierre en celular bajo 4,5:1.**
- **Qué pasa:** bajo 60rem la foto queda al 28 % sobre Celeste Profundo, y el texto blanco de 14 px mide 4,1–4,3:1 (con la foto real puede ser peor).
- **Por qué importa:** es texto legal y debe poder leerse.
- **Arreglo:** como tradicional, foto en franja arriba y texto sobre Celeste Profundo sólido.
- **Comando:** `/impeccable polish`.

### Señales de alerta por persona

- **Carolina, crédito en otro banco y dividendo apretado** (sección Users de PRODUCT.md):
  - No ve su problema hasta la 5.ª sección.
  - Toca "Mi crédito está en otra institución", baja a una tarjeta y el botón la devuelve arriba: va y vuelve sin ganar nada.
  - En el formulario encuentra "Estamos actualizando"; si acepta simular, le preguntan el pie de una compra.
  - Nunca ve una idea concreta de cuánto podría bajar su dividendo. Se le piden datos sin darle nada antes.
- **Don Ramón, cliente vigente de 4Life:**
  - Su opción va primera en la portada, aunque PRODUCT.md dice que los clientes vigentes tienen ruta propia.
  - Recibe el mismo formulario de prospecto, sin enlace al portal de clientes.
  - "Actualizar tu documentación básica" no le dice qué documentos.
- **Jordan, primera vez:** "CAE", "F22", "certificado de deuda" y "dividendo flexible" sin explicar.
- **Casey, en el celular:**
  - Con el formulario vacío, la caja punteada ocupa una pantalla entera.
  - El primer botón rojo aparece a los 4.722 de 8.122 px.
  - El WhatsApp flotante tapa el borde de la tarjeta (global, ya conocido).

### Observaciones menores

- **Puntuación:** la pregunta 8 debería ser "Si hoy no califico, ¿puedo volver a intentarlo?".
- **Cierre:** "Tu nuevo crédito comienza aquí" se aparta del lema "Tu nuevo hogar comienza aquí".
- **Cifra sin validar:** "6 liquidaciones de sueldo" en "Qué necesitas". Tradicional no detalla documentos por tipo de ingreso.
- **Fotos:** según los alt, la portada y `rf-cliente.jpg` muestran el folleto de refinanciamiento. Revisa si es el folleto azul marino y dorado, que el brandbook v3 deja fuera de marca.
- **Jerarquía:** en "Qué es", el H2 y la frase azul tienen el mismo tamaño (32 px) y compiten.
- **Botones de portada:** píldoras con borde celeste al 35 % (~1,5:1). Parecen filtros, pero son enlaces que bajan en la página.
- **CLS:** 0,075 en celular por la carga de la fuente en el hero.
- **Comentarios viejos:** los del snippet y del CSS todavía hablan de "filete coral" y "tarjeta del 10 % de FOGAES".
- **Palabras sueltas:** quedan al final de las respuestas de "¿Te conviene?" (falta `text-wrap: pretty`).

### Preguntas para pensar

1. El simulador es la acción principal del sitio. ¿Por qué el producto con más intención es el único sin simulador? ¿Y si el simulador tuviera una entrada "Mi crédito actual" (saldo, dividendo de hoy)?
2. ¿El cliente vigente debería estar en esta página, o en el portal de clientes? Hoy media página le habla a alguien que PRODUCT.md manda a otra ruta.
3. Si tapas el logo, ¿qué frase dice que esto es 4Life y no un banco cualquiera? ¿No debería la portada abrir con el dividendo flexible?
4. ¿Qué gana la persona a cambio de sus datos? Si la respuesta es "te llamamos", es la escalera de compromiso al revés.
