# Web 4Life Crédito Hipotecario · Zoho Sites

Código propio del sitio (que se pega en Zoho Sites) y auditoría técnica automática.

- **Sitio en revisión:** https://demo4life1.zohosites.com
- **Último reporte de auditoría:** [`reportes/ultimo.md`](reportes/ultimo.md)

## Carpetas

| Carpeta | Qué hay |
|---|---|
| `sitio/` | Un subdirectorio por página con su HTML/JS (`4L - ….txt`) y su CSS. `Codigo Personalizado/` y `Tema Zoho/` son globales. |
| `auditoria/` | Script de auditoría y `paginas.txt` (lista de páginas a revisar). |
| `reportes/` | Lo escribe el robot: `ultimo.md` (resumen) y un archivo por fecha. |
| `DESIGN.md`, `PRODUCT.md`, `CHANGELOG.md` | Sistema visual, contexto de producto e historial de versiones. |

Fotos, PDF, ZIP y los scripts del CRM **no** se suben (ver `.gitignore`): el repo es público.

## Cómo se publica un cambio

1. Editar el archivo en `sitio/` (en GitHub: abrir el archivo → lápiz → *Commit changes*).
2. Copiar el contenido y pegarlo en el bloque correspondiente de Zoho Sites → Publicar.
3. La auditoría corre sola al guardar el cambio; el resultado queda en `reportes/ultimo.md`.

## Auditoría automática

Corre de lunes a viernes ~07:15, al guardar cambios en `sitio/` o `auditoria/`, y a mano desde **Actions → Auditoría técnica del sitio → Run workflow** (ahí se puede cambiar la URL, por ejemplo al pasar a 4lifehipotecario.cl).

Revisa en cada página, en escritorio y móvil:
- Accesibilidad WCAG 2.2 AA (axe-core): contraste, etiquetas, alt, ARIA, foco, tamaño de toque.
- Estructura: un H1, `<main>`, skip link que funcione.
- SEO básico: título con marca, meta description, canonical https, noindex.
- Enlaces internos rotos (detecta el 404 de Zoho).
- Texto de plantilla olvidado (`[Nombre de tu Empresa]`, lorem ipsum).
- Tipografía fuera de marca, imágenes > 80 KB, scroll horizontal en móvil.
- Lighthouse móvil: rendimiento, LCP, CLS, SEO.

El resumen muestra primero **qué apareció y qué se resolvió** desde la corrida anterior.

Para correrla en un computador: `npm ci && npx playwright install chromium && npm run auditar`.
