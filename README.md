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

## Dónde vive el código

- **OneDrive** (`Trabajo Onboarding\Pagina Web 4Lifehipotecario en Zoho`) es la carpeta **principal**: el registro oficial, con fotos, PDF y funciones del CRM.
- **GitHub** (este repo) es la **copia de trabajo**: aquí se editan las páginas con Claude, una conversación por página.
- **Zoho Sites** es donde se publica.

## Cómo se publica un cambio

1. Antes de empezar: si algo cambió en OneDrive o directo en Zoho y no está aquí, subirlo primero al repo.
2. Trabajar la página en GitHub (con Claude o a mano). Cada cambio con su línea de versión y su línea en `CHANGELOG.md`.
3. Al terminar, copiar los archivos cambiados de `sitio/` a la carpeta de OneDrive (misma ruta sin `sitio/`).
4. Pegar en Zoho Sites → Publicar, y marcar "Publicado: sí" en el CHANGELOG (aquí y en OneDrive).

## Trabajar una página con Claude

Una conversación por página. Pegar al inicio:

```
/impeccable [critique|polish|…] [PÁGINA]
Repo: https://github.com/aachondo1/web-4life-zoho (rama main), copia de trabajo del sitio.
- Baja la última versión del repo antes de empezar y otra vez justo antes del commit.
- Lee PRODUCT.md, DESIGN.md y sitio/[CARPETA]/. La página publicada está en https://demo4life1.zohosites.com/[RUTA].
- Toca solo los archivos de esta página y su bloque en CSS Personalizado.
- Versión en la primera línea y una línea en CHANGELOG.md por cambio.
- Al terminar, commit en main y dime qué archivos copiar a OneDrive y pegar en Zoho.
```

| Página | Carpeta | Ruta |
|---|---|---|
| Home | `Home/` | `/` |
| Simulador | `Simulador/` | `/simular` |
| Crédito tradicional | `Credito tradicional/` | `/credito-hipotecario-tradicional` |
| FOGAES | `FOGAES/` | `/credito-hipotecario-fogaes` |
| Segunda vivienda | `Segunda vivienda/` | `/credito-hipotecario-segunda-vivienda-o-inversion` |
| Refinanciamiento | `Refinanciamiento/` | `/refinanciamiento-hipotecario` |
| Fines generales | `Fines generales/` | `/fines-generales` |
| Subsidio DS19 | `DS19/` | `/subsidio-ds19` |
| Evaluación / Gracias | `Evaluacion/`, `Gracias/` | `/evaluacion`, `/gracias` |
| Header y footer | `Tema Zoho/` | todas |

Archivos compartidos (`CSS Personalizado.txt`, `CHANGELOG.md`, `DESIGN.md`): si dos conversaciones los tocan el mismo día, bajar la última versión antes del commit para no pisar cambios. Los cambios globales de diseño, en una conversación aparte.

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
