---
name: 4Life Crédito Hipotecario
description: Tu nuevo hogar comienza aquí. Celeste de fondo, texto blanco, botón rojo.
colors:
  celeste: "#318CDD"
  celeste-deep: "#1A73C8"
  celeste-ink: "#135FA8"
  celeste-soft: "#E8F3FC"
  red: "#CF3A38"
  red-deep: "#B32F2D"
  coral: "#F3504E"
  on-color: "#FFFFFF"
  ink: "#1E1E1E"
  ink-soft: "#333333"
  ink-muted: "#5D5D5D"
  paper: "#FFFFFF"
  paper-2: "#F7F7F7"
  paper-3: "#F2F2F2"
  rule: "#E0E0E0"
  line-strong: "#7A7A7A"
  footer: "#1E1E1E"
  footer-ink: "#BFBEBE"
  disabled: "#E0E0E0"
  error: "#B3261E"
  whatsapp: "#178A43"
  logo-ink: "#231F20"
  logo-celeste: "#318CDD"
  logo-coral: "#FF595A"
typography:
  display-hero:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 3.6vw + 1rem, 5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  display:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 2.4vw + 1rem, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.2vw + 1rem, 2rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
  lead:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 0.35vw + 1rem, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.3
  small:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  btn: "6px"
  card: "8px"
  round: "50%"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-color}"
    rounded: "{rounded.btn}"
    padding: "16px 40px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.on-color}"
  button-secondary-on-celeste:
    backgroundColor: "transparent"
    textColor: "{colors.on-color}"
    rounded: "{rounded.btn}"
    padding: "14px 32px"
    height: "52px"
  button-secondary-on-paper:
    backgroundColor: "transparent"
    textColor: "{colors.celeste-deep}"
    rounded: "{rounded.btn}"
    padding: "14px 32px"
    height: "52px"
  button-disabled:
    backgroundColor: "{colors.disabled}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.btn}"
  band-celeste:
    backgroundColor: "{colors.celeste}"
    textColor: "{colors.on-color}"
    padding: "64px 0"
  band-celeste-deep:
    backgroundColor: "{colors.celeste-deep}"
    textColor: "{colors.on-color}"
    padding: "64px 0"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.card}"
    padding: "24px"
  notice:
    backgroundColor: "{colors.celeste-soft}"
    textColor: "{colors.celeste-ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "12px"
    height: "48px"
  icon-tile:
    backgroundColor: "{colors.celeste-deep}"
    textColor: "{colors.on-color}"
    rounded: "{rounded.btn}"
    size: "56px"
---

# Design System: 4Life Crédito Hipotecario

## Overview

**Creative North Star: "La sonrisa 4life"**

Todo el sistema sale del logo: la curva celeste de la sonrisa y el punto coral. El celeste es el campo donde vive la marca: amplio, luminoso, con el texto blanco encima. El rojo es el punto: aparece poco y siempre donde la persona tiene que actuar, igual que el punto sobre el 4. Cercano, cálido y simple; nada que intimide a quien está pidiendo su primer crédito.

La página se lee como una conversación tranquila: bandas celestes que cuentan la idea con titulares grandes en blanco, pausas blancas o gris claro donde se explica el detalle, y un botón rojo que dice qué hacer después. La densidad es baja, con mucho aire, porque la persona llega con dudas y el sistema le responde de a una.

Este documento reemplaza la paleta del brandbook v2 (noviembre 2026), que tomaba el azul rey #295BE9 de 4Life Seguros. Juan lo sintió poco 4life: la marca es celeste con texto blanco y botón rojo. Tipografía, forma, íconos y voz del v2 siguen vigentes; la base de componentes es el sistema `.f4v2` (FOGAES, productos), que Juan eligió sobre el Home v4.

**Key Characteristics:**
- Celeste de fondo con texto blanco como superficie principal de marca.
- Fotos con degradado celeste y texto blanco encima.
- Botón principal rojo, uno por vista.
- Asap en todo, titulares en 700 con interletrado levemente cerrado.
- Esquinas apenas redondeadas (6 y 8 px), casi sin sombras.
- Contraste WCAG AA en cada par de color.

## Colors

Celeste dominante en dos tonos, rojo como única voz de acción y neutros cálidos de 4Life Seguros para el texto y las pausas.

### Primary
- **Celeste Sonrisa** (#318CDD): el celeste del logo. Fondo de bandas cuyo texto blanco es **grande** (titulares de 24 px o más, o 19 px en negrita): 3,5:1 con blanco. También el extremo claro del degradado sobre fotos y los íconos sobre blanco (3,5:1, cumple el 3:1 de íconos). Nunca para párrafos en blanco.
- **Celeste Profundo** (#1A73C8): bandas con párrafos, listas o formularios en blanco (4,9:1). Enlaces sobre blanco (4,9:1), anillo de foco, cuadros de ícono de producto, números de pasos.
- **Celeste Tinta** (#135FA8): hover de enlaces y de superficies celestes; texto sobre Celeste Bruma (5,8:1); enlaces sobre gris (#F2F2F2), donde el Celeste Profundo no alcanza (4,3:1). Extremo opaco del degradado de fotos (blanco encima: 6,5:1).
- **Celeste Bruma** (#E8F3FC): fondo de avisos, notas, acordeón abierto y opciones seleccionadas. Texto en Celeste Tinta o tinta.

### Secondary
- **Rojo Acción** (#CF3A38): botón principal y nada más grande que eso. Blanco encima: 4,9:1.
- **Rojo Hondo** (#B32F2D): hover y presionado del botón rojo (6,3:1 con blanco).

### Tertiary
- **Coral Punto** (#F3504E): solo gráfico: viñetas, puntos, íconos de lista, filetes. Nunca texto ni fondo de botón.

### Neutral
- **Tinta** (#1E1E1E): titulares sobre blanco y gris; fondo del footer.
- **Tinta Suave** (#333333): párrafos.
- **Tinta Tenue** (#5D5D5D): notas, legales, ayudas de formulario, placeholders.
- **Papel** (#FFFFFF), **Papel 2** (#F7F7F7), **Papel 3** (#F2F2F2): fondo de página, bloques suaves y bandas grises.
- **Filete** (#E0E0E0): divisores y bordes de tarjeta. **Borde Firme** (#7A7A7A): borde de inputs y casillas (4,3:1).
- **Gris Footer** (#BFBEBE): texto y enlaces del footer (9,0:1).
- **WhatsApp** (#178A43): solo el botón flotante. **Error** (#B3261E): mensajes y bordes de error.
- **Colores del logo** (#231F20, #318CDD, #FF595A): solo dentro del archivo del logo.

### Named Rules
**La Regla del Punto.** El rojo es el punto del logo: un solo botón rojo por vista, y siempre lleva al siguiente paso del funnel (casi siempre /simular). Si hay dos acciones, la segunda es contorno blanco sobre celeste o contorno celeste sobre blanco, nunca otro rojo.

**La Regla del Tamaño Blanco.** Sobre Celeste Sonrisa (#318CDD) el blanco solo va en tamaño grande. Apenas una banda lleva párrafos, botones de texto chico o formularios en blanco, el fondo pasa a Celeste Profundo (#1A73C8).

**La Regla del Azul Único.** El azul rey #295BE9 de 4Life Seguros sale del sitio: no hay dos familias de azul. Todo lo que era azul (bandas, enlaces, foco, íconos, pasos, acordeón) pasa a la familia celeste.

## Typography

**Display Font:** Asap (con ui-sans-serif, system-ui)
**Body Font:** Asap (con ui-sans-serif, system-ui)

**Character:** Una sola familia, la de 4Life Seguros: redonda y amable en 400, firme en 700. El peso hace la jerarquía; no hay segunda fuente.

### Hierarchy
- **Display hero** (700, clamp(2.75rem → 5rem), 1,08, −0,01em): titular del hero del home, en blanco sobre celeste o sobre foto con degradado.
- **Display** (700, clamp(2.25rem → 2.75rem), 1,08): h1 de páginas de producto y del hero interior.
- **Headline** (700, clamp(1.625rem → 2rem), 1,12, máximo 18ch): títulos de sección.
- **Title** (700, 1,25rem, 1,2): títulos de tarjeta, pregunta de FAQ, texto de botón.
- **Lead** (400, clamp(1.125rem → 1.3125rem), 1,5, máximo 60ch): bajada bajo el titular.
- **Body** (400, 1,0625rem, 1,55, 65–75ch): párrafos.
- **Label** (700, 0,875rem): etiquetas de formulario, sellos, chips.
- **Small** (400, 0,8125rem, 1,5): legales, notas de simulación referencial.

### Named Rules
**La Regla del Blanco Grande.** El texto blanco sobre Celeste Sonrisa se escribe en Display, Headline o Title negrita; si el texto blanco baja a Body o Small, el fondo es Celeste Profundo.

## Layout

Contenedor centrado de hasta 1312 px con margen lateral `clamp(16px, 4.4vw, 64px)`. Grillas de 2 a 3 columnas con 24 px de separación que pasan a una columna bajo 768 px. Secciones con 64 px de aire vertical en páginas de producto (96 px en el home) y 48 px en móvil.

El ritmo alterna superficies: banda celeste (idea), blanco o Papel 3 (detalle), banda celeste o foto con degradado (cierre con botón rojo). Dos bandas celestes nunca van seguidas sin una pausa clara entre ellas.

Cabecera y pie nativos del tema de Zoho; las piezas propias van en snippets chicos por sección, con estilos aislados por prefijo (`f4`, `f4v2`, `fl-`).

## Elevation & Depth

Sistema plano. La profundidad viene del cambio de superficie (celeste, blanco, gris), no de sombras. Hay una sola sombra, para tarjetas blancas que se apoyan sobre una banda celeste o una foto, y una para el botón flotante de WhatsApp.

### Shadow Vocabulary
- **Tarjeta apoyada** (`box-shadow: 0 16px 48px rgba(30,30,30,.13)`): tarjeta blanca sobre banda celeste o foto.
- **Flotante** (`box-shadow: 0 8px 16px rgba(0,0,0,.25)`): solo el botón de WhatsApp.

### Named Rules
**La Regla de lo Plano.** Nada flota sobre blanco. Si una tarjeta está sobre fondo blanco o gris, lleva filete de 1 px (#E0E0E0) y cero sombra.

## Shapes

Esquinas apenas redondeadas: 6 px en botones, inputs y cuadros de ícono; 8 px en tarjetas y paneles; 4 px en los cuadrados de redes sociales; círculo solo en WhatsApp y en los números de pasos. Filetes de 1 px para dividir y de 2 px para marcar el elemento activo.

**Fotos con degradado celeste.** Una foto de marca lleva encima un degradado lineal que va de Celeste Tinta casi opaco, del lado donde va el texto, a Celeste Sonrisa casi transparente del otro lado:

`linear-gradient(90deg, rgba(19,95,168,.92) 0%, rgba(19,95,168,.88) 45%, rgba(49,140,221,.15) 100%)`

En móvil, el degradado va de abajo hacia arriba (`0deg`) y el texto se apoya abajo. El texto blanco va solo sobre el tramo de 0 % a 45 %, donde el velo es Celeste Tinta al 88 % o más: incluso sobre la parte más clara de una foto da 5,0:1 con blanco (al 80 % bajaría a 4,2:1 y no cumple). Las caras de las personas quedan en la zona transparente.

La curva de la sonrisa y el punto no se redibujan como adorno: viven en el logo. El eco del punto en la interfaz es el rojo del botón y las viñetas coral.

## Components

### Buttons
Directos y cálidos: una acción clara, sin adornos.
- **Shape:** esquinas de 6 px, 52 px de alto mínimo (44 px en barras compactas).
- **Primario:** Rojo Acción con texto blanco en Asap 600 de 1,125–1,25rem, en oración (sin mayúsculas forzadas, como en `.f4v2`), relleno de 16 × 40 px. Uno por vista.
- **Hover / Focus:** Rojo Hondo en hover; se hunde 1 px al presionar. Foco con anillo de 2 px y 2 px de separación: blanco sobre celeste o foto, Celeste Profundo sobre blanco o gris.
- **Secundario sobre celeste:** contorno blanco de 2 px y texto blanco; hover a fondo blanco con texto Celeste Tinta.
- **Secundario sobre blanco:** contorno de 2 px y texto en Celeste Profundo; hover a Celeste Bruma.
- **Deshabilitado:** fondo #E0E0E0, texto Tinta Tenue.

### Bandas celestes
La superficie de marca.
- **Celeste Sonrisa** (#318CDD) con titular blanco grande y, como mucho, una línea de bajada en Lead negrita.
- **Celeste Profundo** (#1A73C8) cuando hay párrafos, listas, beneficios o formularios en blanco.
- Íconos de beneficio en blanco (`bi-check-circle`). El botón rojo se recorta bien sobre ambos celestes por tono.

### Hero con foto
Foto de marca a sangre con el degradado celeste de Shapes, titular Display hero en blanco, bajada en Lead blanco y un botón rojo. Sin slider automático.

### Cards / Containers
- **Corner Style:** 8 px.
- **Background:** blanco sobre gris o celeste; Papel 3 sobre blanco.
- **Shadow Strategy:** solo la Tarjeta apoyada cuando va sobre celeste o foto.
- **Border:** 1 px #E0E0E0 sobre blanco.
- **Internal Padding:** 24 px (28 px en escritorio para tarjetas de producto).

### Inputs / Fields
- **Style:** 48 px de alto, borde de 1 px #7A7A7A, esquinas de 6 px, fondo blanco, texto Tinta. El campo principal del simulador lleva borde de 2 px en Celeste Profundo.
- **Focus:** anillo de 2 px Celeste Profundo con 2 px de separación.
- **Error / Disabled:** borde y mensaje en #B3261E, con el texto exacto del error; deshabilitado al 50 % de opacidad.
- **Opción seleccionada:** borde de 2 px Celeste Profundo y fondo Celeste Bruma.

### Navigation
Cabecera nativa de Zoho sobre blanco (el logo no va nunca sobre celeste). Enlaces en Tinta, Asap 600 de 15 px; hover y página actual en Celeste Tinta con fondo Celeste Bruma. El botón de la cabecera es el rojo, apuntando a /simular. En móvil, menú hamburguesa de 44 × 44 px.

### Iconos de producto
Cuadro de 56 px en Celeste Profundo con ícono blanco de Bootstrap Icons 1.13.1, esquinas de 6 px. Íconos de lista rellenos en coral.

### Avisos y notas
Fondo Celeste Bruma, filete izquierdo de 4 px en Celeste Profundo, texto Tinta Suave o Celeste Tinta. Para la nota de simulación referencial, CAE y evaluación.

### Footer
Fondo #1E1E1E, texto #BFBEBE, logo reverso junto al de 4Life Seguros. Redes en cuadrados de 40 px en Celeste Profundo.

## Do's and Don'ts

### Do:
- **Do** usar Celeste Sonrisa (#318CDD) como fondo con texto blanco grande, y Celeste Profundo (#1A73C8) cuando el texto blanco es chico.
- **Do** poner sobre toda foto con texto el degradado celeste (Celeste Tinta 92–88 % → Celeste Sonrisa 15 %) y el texto blanco solo en el tramo opaco (0–45 %).
- **Do** usar el rojo #CF3A38 para el botón principal, uno por vista, apuntando al siguiente paso.
- **Do** usar el anillo de foco blanco sobre celeste y foto, y Celeste Profundo sobre blanco y gris.
- **Do** alternar una banda celeste con una pausa blanca o gris.
- **Do** usar fotos de casas reales y personas en su hogar, sin repetir a las mismas personas en una página.

### Don't:
- **Don't** usar el azul rey #295BE9 ni sus derivados (#4054B2, #1B3FA6, #E8EEFD): el sitio tiene una sola familia azul, la celeste.
- **Don't** poner párrafos, legales ni texto de formulario en blanco sobre #318CDD: 3,5:1 no cumple AA para texto chico.
- **Don't** poner el logo sobre celeste, rojo, coral ni foto: la sonrisa celeste se pierde.
- **Don't** usar dos botones rojos en la misma vista ni usar rojo para alertas, precios o titulares.
- **Don't** usar coral (#F3504E) como texto o fondo de botón.
- **Don't** poner fotos sin degradado detrás de texto blanco, ni degradados oscuros grises o negros: el velo es celeste.
- **Don't** redibujar la sonrisa o el punto como adorno de fondo.
