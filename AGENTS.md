# Instrucciones para asistentes de IA

Contexto para cualquier IA (Claude, ChatGPT, Gemini, Copilot…) que trabaje en este repo.

## Qué es
Todo el código del sitio vive en `sitio/` (una carpeta por página). Sitio de **4Life Crédito Hipotecario** (Chile), construido en **Zoho Sites**. Zoho no se conecta a GitHub: cada archivo de este repo se **copia y pega a mano** en Zoho. Escribe código que funcione pegado tal cual.

## Reglas de Zoho Sites
- Cada página tiene uno o más bloques "Código" (HTML + `<script>`) → archivos `4L - ….txt`.
- El sitio tiene **un solo CSS personalizado global** (`sitio/Codigo Personalizado/CSS Personalizado.txt`); los `CSS ….txt` de cada carpeta de `sitio/` se anexan ahí. Todo CSS de una página debe quedar **acotado a su contenedor raíz** (ej. `#sv-root`, `#gf-root`, `.f4v2`) para no romper otras páginas.
- Tokens de color y tipografía en `:root` (`--color-*`). Usar tokens, no colores fijos.
- Colores, tipografía (Asap) y componentes: seguir `DESIGN.md`. Producto, público y tono: `PRODUCT.md`. Si algo choca con estos archivos, mandan ellos.
- Sin dependencias externas nuevas salvo Google Fonts y Bootstrap Icons (ya cargados en `sitio/Codigo Personalizado/Código Encabezado.txt`).

## Contenido y legal
- Español de Chile, tuteo siempre (nunca "usted"). Crédito hipotecario: no prometer tasas ni aprobación; la simulación es orientativa.
- Formularios que piden datos personales deben enlazar a la política de privacidad y cumplir Ley 19.628 / 21.719.
- No inventar cifras, requisitos ni condiciones de producto: preguntar.

## Calidad
- Accesibilidad WCAG 2.2 AA: un H1 por página, etiquetas en todos los campos, foco visible, contraste ≥ 4,5:1, `prefers-reduced-motion`.
- Móvil primero (375 px sin scroll horizontal).
- La auditoría automática (`reportes/ultimo.md`) muestra los problemas actuales del sitio publicado; revisarla antes de proponer cambios.

## Al entregar cambios
- Indicar **qué archivo** y **en qué bloque de Zoho** se pega.
- Anotar el cambio en `CHANGELOG.md` con fecha y versión.
