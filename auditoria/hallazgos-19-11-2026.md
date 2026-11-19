# Auditoría técnica página por página: demo4life1.zohosites.com (19-11-2026)

Método: las 11 páginas publicadas en el sitemap, medidas en vivo en el navegador (escritorio y 375 px), con revisión de enlaces internos por contenido (Zoho devuelve página de error 404), recorrido del simulador hasta la validación del paso 1 (sin enviar datos, para no crear leads en el CRM). El detector automático de Impeccable no corrió (el entorno cloud no alcanza zohosites.com).

## Puntaje del sitio

| # | Dimensión | Puntaje | Hallazgo clave |
|---|---|---|---|
| 1 | Accesibilidad | 2 | Skip link roto y sin `<main>` en las 11 páginas; REDEC y Licitaciones sin H1 |
| 2 | Rendimiento | 3 | Segunda vivienda pesa 320 KB por dos fotos de 155–162 KB; el resto bien |
| 3 | Theming | 2 | REDEC y Licitaciones usan el tema por defecto de Zoho (Cormorant Garamond morado), fuera de marca |
| 4 | Responsive | 3 | Sin scroll horizontal en ninguna página; el botón de WhatsApp tapa opciones del simulador |
| 5 | Integridad | 1 | 11 enlaces rotos en header/pie; el consentimiento del simulador enlaza a una política inexistente; texto de plantilla en REDEC |
| **Total** | | **11/20** | **Aceptable (trabajo importante pendiente)** |

## Veredicto de integridad: NO APRUEBA (aún)
Las 7 páginas construidas a medida (Home, simulador y 5 productos) son un sistema coherente y bien hecho. Lo que falla es el entorno: navegación global que lleva a 404, dos páginas con el tema por defecto de Zoho y texto legal sin completar.

## Resumen
P0: 2 · P1: 4 · P2: 5 · P3: 2

## Ficha por página

| Página | Estado | Hallazgos propios |
|---|---|---|
| `/` Home | Bien | Título "Home \| demo4life", sin meta description; CTA con dos nombres/colores |
| `/simular` | Muy bien | 60 campos, todos con etiqueta; errores con `role=alert`, `aria-invalid`, foco al primer error. Enlace de privacidad roto (P0). Título "Simular \| demo4life", sin description |
| `/evaluacion` | Bien | noindex correcto. Título sin marca |
| `/gracias` | Bien | noindex correcto. Título sin marca |
| `/credito-hipotecario-tradicional` | Bien | `ct-comprar.jpg` 106 KB. noindex+nofollow |
| `/credito-hipotecario-fogaes` | Bien | Cifra "−UF 300" con contraste 3,36:1 (pide 4,5) |
| `/credito-hipotecario-segunda-vivienda-o-inversion` | Bien | `sv-segunda.jpg` 162 KB + `sv-hero.jpg` 155 KB (320 KB página) |
| `/refinanciamiento-hipotecario` | Muy bien | Solo los hallazgos globales |
| `/fines-generales` | Bien | `gf-hero.jpg` 81 KB |
| `/formulario-redec` | Mal | Texto "[Nombre de tu Empresa]" visible; sin H1 (título es `<span>`); tipografía Zoho por defecto; captcha sin etiqueta ni alt; solo 1 campo marcado `required` |
| `/licitaciones-y-llamados` | Regular | Sin H1 (empieza en H2); tipografía Zoho por defecto; 4 enlaces "Ver documento" iguales; título "demo4life" |

## Hallazgos

**[P0] El consentimiento del simulador enlaza a una política que no existe**: el checkbox de aceptación de datos enlaza a `/politica-privacidad` → 404. La Home y el pie usan otro slug, `/privacidad-y-cookies`, también 404. Se están pidiendo datos personales sin política accesible (Ley 19.628 / 21.719). Arreglo: publicar la política (borrador en `claude/politica-privacidad-cookies-borrador.md`) en un solo slug y apuntar ambos enlaces ahí.

**[P0] Texto de plantilla en un formulario legal**: `/formulario-redec` dice "respecto de las obligaciones crediticias que **[Nombre de tu Empresa]** informa al REDEC". Reemplazar por "4Life Crédito Hipotecario S.A.". → `/impeccable clarify`

**[P1] 11 enlaces rotos en navegación global**: `/contacto`, `/inmobiliarias-y-brokers`, `/privacidad-y-cookies`, `/politica-privacidad`, `/formas-de-pago`, `/alzamiento-de-garantias`, `/retraso-en-pago-de-cuotas`, `/denuncio-de-siniestro`, `/portabilidad-financiera`, `/documentacion-de-interes`, `/terminos-y-condiciones`. Están en header/pie, así que aparecen en todas las páginas. Arreglo: crear las páginas o quitar los enlaces hasta tenerlas. `/inmobiliarias-y-brokers` es nuevo respecto del inventario del 18-11 (tarjeta de la Home).

**[P1] Skip link roto y sin `<main>` en las 11 páginas** (tema Zoho): `#thememaincontent` no existe; texto en inglés. WCAG 2.4.1 / 1.3.1. → `/impeccable harden`

**[P1] REDEC y Licitaciones sin H1 y fuera de marca**: títulos como `<span>`/`<h2>`, tipografía Cormorant Garamond morado (#512E66) del tema base. Arreglo: rehacer con los estilos del sitio (Heebo/Asap, tokens `--color-*`) y un H1 real. → `/impeccable polish`

**[P1] Captcha de REDEC inaccesible**: imagen sin `alt`, campo sin etiqueta, sin alternativa de audio. Un usuario con lector de pantalla no puede enviar su solicitud de derechos. WCAG 1.1.1 / 3.3.2. Arreglo: etiquetar el campo y evaluar reemplazar el captcha (honeypot como el del simulador, `s4-web`). → `/impeccable harden`

**[P2] Indexación inconsistente**: las 5 páginas de producto tienen `noindex,nofollow`; Home, Simular, REDEC y Licitaciones no. En el dominio demo está bien no indexar, pero hay que decidir y quitarlo al pasar a 4lifehipotecario.cl. Canonical en `http://` en todas.

**[P2] Títulos y descripciones**: Home, Simular y Licitaciones dicen "demo4life"; Evaluación/Gracias/REDEC sin marca; 6 páginas sin meta description.

**[P2] Fotos pesadas**: segunda vivienda (162 + 155 KB), tradicional (106 KB), home-inmobiliarias (96 KB), home-santiago (87 KB), fines generales (81 KB). Pasar a WebP ~1200 px máx. → `/impeccable optimize`

**[P2] Botón de WhatsApp tapa el simulador en móvil**: queda sobre los botones de pie "30%/40%". Ocultarlo dentro de `/simular` o subir el margen inferior del formulario. → `/impeccable adapt`

**[P2] Contraste en FOGAES**: "−UF 300" a 3,36:1 (18 px, requiere 4,5:1).

**[P3] Enlaces genéricos en Licitaciones**: cuatro "Ver documento" iguales; agregar el nombre del documento (o `aria-label`).

**[P3] Botones de % del pie sin `aria-pressed`** en el simulador (los de UF/$ sí lo tienen).

## Lo que está bien
- El simulador es lo mejor del sitio: etiquetas en 60 campos, `autocomplete` correcto (nombre, correo, teléfono), `inputmode` decimal/numérico, errores anunciados y foco al primer error, pasos con `aria-current`, honeypot anti-spam.
- Cero fallas de contraste en 10 de 11 páginas; alt descriptivos en todas las fotos.
- Sin scroll horizontal a 375 px en ninguna página.
- Los 5 PDF de licitaciones responden bien.
- `/evaluacion` y `/gracias` con `noindex`, como corresponde.

## Acciones recomendadas
1. **[P0]** Publicar la política de privacidad y unificar el slug (simulador + pie). Corregir "[Nombre de tu Empresa]" en REDEC.
2. **[P1]** Crear o retirar las 11 páginas enlazadas desde header/pie.
3. **[P1] `/impeccable harden`**: skip link + `<main>` en el tema; captcha de REDEC.
4. **[P1] `/impeccable polish`**: REDEC y Licitaciones al sistema visual del sitio, con H1.
5. **[P2] `/impeccable optimize`**: fotos a WebP.
6. **[P2] `/impeccable adapt`**: WhatsApp vs simulador en móvil.
7. **[P2]** SEO: títulos, descriptions, canonical https, decisión de noindex para el lanzamiento.
