---
name: 4Life Crédito Hipotecario · Simulador
description: El simulador /simular dentro del sistema .f4v2 (FOGAES): formulario a la izquierda, recibo vivo de marca a la derecha.
colors:
  field-blue: "#295be9"
  field-blue-deep: "#1b3fa6"
  field-blue-soft: "#e8eefd"
  field-blue-tint: "#c9d6fa"
  coral: "#cf3a38"
  coral-deep: "#b32f2d"
  ink: "#1e1e1e"
  ink-2: "#333333"
  muted: "#5d5d5d"
  rule: "#e0e0e0"
  field-stroke: "#8a8a8a"
  paper: "#ffffff"
  paper-2: "#f7f7f7"
  paper-3: "#f2f2f2"
  error: "#b3261e"
  placeholder: "#767676"
typography:
  display:
    fontFamily: "Asap, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(64px, 5vw + 16px, 88px)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  figure:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(40px, 3.4vw + 16px, 64px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(30px, 2.6vw + 14px, 48px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  input-figure:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.3
  input-figure-sm:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1
  title-sm:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  body-md:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.3
  fine:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  fine-xs:
    fontFamily: "Asap, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  card: "8px"
  control: "6px"
  tag: "4px"
  segment: "3px"
  chip: "22px"
  round: "50%"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "28px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "54px"
    width: "100%"
  button-primary-hover:
    backgroundColor: "{colors.coral-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-3}"
  link-action:
    textColor: "{colors.field-blue}"
    height: "44px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "6px 14px"
    height: "52px"
  amount-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.input-figure}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "64px"
  option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
    height: "52px"
  option-selected:
    backgroundColor: "{colors.field-blue-soft}"
    textColor: "{colors.field-blue-deep}"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.chip}"
    padding: "0 18px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.field-blue-soft}"
    textColor: "{colors.field-blue-deep}"
  live-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.card}"
    padding: "28px 28px 24px"
    width: "440px"
  badge:
    backgroundColor: "{colors.field-blue-soft}"
    textColor: "{colors.field-blue-deep}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  note:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
---

# Design System: 4Life Crédito Hipotecario · Simulador

## Overview

**Creative North Star: "El recibo vivo"**

El simulador es la versión de operación del sistema .f4v2 que estrenó la página FOGAES: papel blanco, tinta casi negra, el azul de marca para las cifras y la selección, y el coral reservado para lo que hace avanzar. La pantalla se organiza como un formulario con un recibo al lado: cada número que la persona escribe se reescribe, más grande y en azul, en una tarjeta blanca con filete coral que flota sobre un campo azul suave. El resultado no es una cifra más entre botones: el dividendo es la pieza más grande de la página.

La densidad es de formulario, no de landing: una sola columna de campos de 1fr, preguntas en negrita de 20px, ayudas de 14px en gris, controles de 44px o más para el pulgar. La profundidad la carga una sola tarjeta con sombra; todo lo demás es plano, separado por hairlines y bloques gris claro.

**Key Characteristics:**
- Grilla de dos columnas (1fr / 440px) con la tarjeta pegajosa a la derecha sobre un campo azul suave que sangra hasta el borde.
- Cifras en Asap 800 con tracking negativo y números tabulares; el azul de marca es el color de los números.
- Barra pie (coral) / crédito (azul) que crece en vivo y reaparece como cabecera del dividendo.
- Selección siempre expresada igual: borde azul, fondo azul suave, texto azul profundo.
- Coral solo en la acción principal, el filete superior de la tarjeta y el segmento del pie.

## Colors

Paleta de marca de dos acentos sobre neutros cálidos-grises: el azul trabaja (cifras, selección, foco, enlaces), el coral empuja (acción y pie).

### Primary
- **Azul Campo** (field-blue): cifras grandes de la tarjeta y del resultado, segmento de crédito en la barra, paso actual, borde de opción elegida, anillo de foco, enlaces y acciones de texto.
- **Azul Campo Profundo** (field-blue-deep): texto sobre azul suave (opción elegida, badge, monto del crédito, etiqueta "Crédito 80%"), hover de enlaces.
- **Azul Suave** (field-blue-soft): fondo de lo seleccionado (opciones, chips, fila de plazo elegida, consentimiento marcado), el campo que sostiene la tarjeta, banners informativos.
- **Azul Tinte** (field-blue-tint): halo de foco de 3px en campos, borde de consentimiento marcado, color de selección de texto.

### Secondary
- **Coral** (coral): botón primario, filete superior de 4px de toda tarjeta de marca, segmento del pie en la barra.
- **Coral Profundo** (coral-deep): hover y estado ocupado del botón primario; texto de la etiqueta "Pie" (coral base no alcanza AA a 13px).

### Neutral
- **Tinta** (ink): titulares, preguntas, valores en filas, texto de entrada.
- **Tinta 2** (ink-2): cuerpo, texto de consentimientos y notas, borde del botón secundario.
- **Gris Medio** (muted): ayudas, etiquetas de tarjeta, prefijos UF/$, pasos inactivos.
- **Hairline** (rule): separadores de filas, borde de opciones, chips y steppers en reposo.
- **Trazo de Campo** (field-stroke): borde de 1.5px de inputs en reposo (los inputs llevan un trazo más oscuro que las opciones, porque se escriben).
- **Papel** (paper), **Papel 2** (paper-2: hover de filas, inputs de solo lectura), **Papel 3** (paper-3: notas, sub-bloques, consentimientos, toggle UF/$, steps inactivos).
- **Error** (error): borde e inline de validación; nunca coral.

### Named Rules
**The Coral Empuja Rule.** El coral aparece en exactamente tres lugares: la acción principal, el filete superior de la tarjeta y el segmento del pie. Un error, un aviso o un adorno nunca es coral.

**The Números Son Azules Rule.** Toda cifra que la persona está construyendo (crédito, dividendo, plazo elegido) va en azul de marca; las cifras de contexto (valor, pie en filas) van en tinta.

## Typography

**Display Font:** Asap (con ui-sans-serif, system-ui)
**Body Font:** Asap
**Label Font:** Asap

**Character:** Una sola familia del brandbook en cuatro pesos (400, 600, 700, 800); el contraste lo hacen el peso y el tamaño, no la mezcla de familias. Números tabulares en todo el bloque para que las cifras no bailen mientras se escriben.

### Hierarchy
- **Display** (800, clamp 64–88px, 0.85): el dividendo del resultado, con el signo $ a media altura.
- **Figure** (800, clamp 40–64px, 0.95): la cifra de la tarjeta en vivo (crédito en UF). 40px fijo bajo 520px.
- **Headline** (700, clamp 30–48px, 1.08, balance): h1 de cada pantalla.
- **Input figure** (800, 28px): el monto que se escribe en los campos de valor y pie (24px en móvil).
- **Title** (700, 20px, 1.3): cada pregunta del formulario; 18px en legend y productos.
- **Body** (400, 17px, 1.5; 16px en móvil): lead 18px en gris; filas de tarjeta 15px.
- **Label** (600, 14px): etiqueta de la tarjeta, ayudas (400 14/20), botón de texto 15px 700.
- **Fine** (13px, 18px de interlínea): subtítulos de filas, notas bajo cifras, legal mínimo 12px.
- **Pasos intermedios** (registrados el 18-11): 24px para la cifra de los campos en móvil; 18px (title-sm) en legend, nombres de producto y bajada; 16px (body-md) para el cuerpo en móvil y el botón secundario; 15px (body-sm) para filas de tarjeta, pasos y enlaces de acción; 12px (fine-xs) solo para el legal mínimo. Radio de 3px solo en los segmentos del progreso de detalle. Placeholder #767676 (4,5:1 sobre blanco). La hoja impresa A4 usa además 11px (encabezado de tabla) y 10px (notas legales) para caber en una página.
- **Hoja descargable (PDF):** misma familia Asap y paleta; cifra en azul de campo sobre azul suave con filete coral, botón coral.

### Named Rules
**The Sin Mayúsculas Rule.** Ningún botón, etiqueta ni título va en mayúsculas o con tracking abierto; las etiquetas son frases en caja normal ("Crédito que necesitas").

## Layout

Contenedor de 1120px máximo con 24px de margen lateral (16px bajo 520px) y 72px de aire al pie. Las pantallas de cálculo y resultado usan una grilla `1fr / 440px` con 72px de calle y 28px de ritmo vertical; la tarjeta es sticky a 96px del borde superior. Detrás de la columna derecha corre un campo azul suave que empieza 24px antes de la tarjeta, sangra 24px a la derecha y baja 72px bajo el contenido. Las pantallas de datos van en una sola columna centrada de 640px.

Ritmo: 28px entre bloques de formulario, 10px entre etiqueta y control, 16px entre campos en grilla, 14px entre piezas de la tarjeta. El progreso es una fila de tres pasos con subrayado azul de 3px sobre hairline; los cuatro pasos de detalle usan segmentos de 6px.

Responsive: bajo 900px todo es una columna de 640px, el campo azul desaparece y la tarjeta baja inmediatamente después de los campos (en el resultado, sube antes del selector de plazo). Bajo 520px la tarjeta se compacta (sin filas, cifra de 40px), los pasos inactivos esconden su texto, los chips forman una grilla 2x2 y la tabla de plazos baja el enlace "Detalle" a su propia línea.

## Elevation & Depth

Plano por defecto, con una sola elevación de marca. La tarjeta en vivo y el diálogo de detalle de plazo son las únicas superficies con sombra; el resto separa por hairline de 1px, bloques papel-3 o el campo azul suave. Las listas desplegables (autocompletar comuna) usan una sombra menor propia.

### Shadow Vocabulary
- **Tarjeta de marca** (`0 16px 48px rgba(30,30,30,.13)`): tarjeta en vivo y diálogo; siempre junto al filete coral superior.
- **Lista flotante** (`0 12px 32px rgba(30,30,30,.14)`): autocompletar.
- **Toggle activo** (`0 1px 3px rgba(30,30,30,.18)`): la pastilla elegida del toggle UF/$.

### Named Rules
**The Una Tarjeta Rule.** Una pantalla tiene una sola tarjeta elevada. Si algo más necesita destacarse, va en azul suave, no con otra sombra.

## Shapes

Esquinas contenidas: 8px en tarjetas y sub-bloques, 6px en controles, notas y botones, 4px en badges y la barra. La tarjeta de marca es cuadrada arriba (el filete coral de 4px corta recto) y redondeada abajo (`0 0 8px 8px`). Los chips de porcentaje son la única forma de píldora (22px); los marcadores de paso y radios son círculos. Bordes de 1.5px en todo control interactivo, 1px en separadores.

## Components

### Buttons
- **Shape:** esquinas de 6px, ancho completo dentro de su columna.
- **Primary:** coral con texto blanco, 700 18px, 54px de alto. Una sola por pantalla.
- **Hover / Active:** pasa a coral profundo; al presionar baja 1px. Ocupado: coral profundo al 75% con cursor de progreso.
- **Secondary:** blanco con borde de 1.5px tinta-2, 700 16px, 50px; hover papel-3. Para acciones de apoyo (Descargar simulación).
- **Acción de texto:** azul, 700 15px, subrayado con offset de 3px, 44px de zona táctil (Cambiar, Editar, Detalle, Volver).

### Chips
- **Style:** píldora de 44px, borde hairline 1.5px, 600 15px tinta-2.
- **State:** elegido = borde azul, fondo azul suave, texto azul profundo 700; deshabilitado al 45%.

### Cards / Containers
- **Tarjeta en vivo:** blanca, filete coral 4px arriba, `0 0 8px 8px`, sombra de marca, padding 28/28/24 (18 en móvil). Contiene etiqueta gris, cifra azul, equivalencia en pesos, barra pie/crédito, filas con hairline y la acción principal.
- **Nota / sub-bloque:** papel-3, 6–8px, sin borde ni sombra.
- **Banner de crédito:** azul suave con monto en azul profundo.

### Inputs / Fields
- **Style:** blanco, borde 1.5px trazo de campo, 6px, 52px de alto, 17px; hover oscurece a tinta-2.
- **Campo de monto:** 64px de alto, prefijo UF/$ gris 600 22px, cifra 800 28px, flanqueado por steppers de 64px (−/+ con el paso escrito debajo) y un toggle UF/$ en papel-3.
- **Focus:** borde azul + halo de 3px azul tinte.
- **Error / Disabled:** borde rojo error y mensaje 600 14px debajo; solo lectura en papel-2 con texto gris.

### Options
- **Style:** radios con apariencia de botón, 52px, borde hairline 1.5px, 600 16px centrado; variante con ícono SVG azul de 30px en columna; productos como filas grandes con chevron azul.
- **State:** elegido = borde azul doble (inset), azul suave, texto azul profundo 700. Foco con anillo azul de 2px.

### Navigation
- **Pasos:** tres pasos numerados en círculos de 24px; actual = círculo azul, texto 700 tinta, subrayado azul 3px; completado = círculo azul suave.
- **Detalle:** "Detalle n de 4" en 600 14px gris sobre cuatro segmentos de 6px.

### Barra pie / crédito (signature)
Barra de 14px y 4px de radio: segmento coral (pie) que anima su ancho en 350ms con `cubic-bezier(.16,1,.3,1)` sobre un fondo azul (crédito), con etiquetas 700 13px en coral profundo y azul profundo. Vacía: fondo papel-3 y etiquetas grises. En el resultado encabeza el dividendo.

### Tabla de plazos (signature)
Filete azul de 2px arriba; filas de 18px de padding con radio, plazo 700 18px, dividendo 800 22px a la derecha y enlace Detalle. Fila elegida en azul suave con radio relleno de 7px azul y cifra en azul profundo.

## Do's and Don'ts

### Do:
- **Do** poner cada cifra que la persona construye en Asap 800 azul con tracking negativo y números tabulares.
- **Do** expresar toda selección igual: borde azul, fondo azul suave (#e8eefd), texto azul profundo.
- **Do** mantener zonas táctiles de 44px mínimo, incluidas las acciones de texto.
- **Do** coronar la tarjeta de marca con el filete coral de 4px y esquinas solo abajo.
- **Do** separar filas con hairline de 1px y agrupar ayudas en bloques papel-3 antes que agregar bordes.

### Don't:
- **Don't** usar coral fuera de la acción principal, el filete y el pie; los errores van en rojo error.
- **Don't** poner una segunda tarjeta con sombra en la misma pantalla.
- **Don't** pasar botones o etiquetas a mayúsculas con tracking abierto.
- **Don't** dejar el resultado como una cifra más entre botones; el dividendo es la pieza más grande de la página.
