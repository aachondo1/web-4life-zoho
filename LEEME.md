# Sitio 4life Crédito Hipotecario en Zoho Sites: código fuente

Esta carpeta es la **fuente única** del código del sitio (decidido el 13-11-2026). Lo que está aquí es lo que está publicado en Zoho Sites, o lo que está listo para publicarse (ver `CHANGELOG.md`).

- Sitio de trabajo: `demo4life1.zohosites.com` (dominio final: `4lifehipotecario.cl`, cambio de DNS pendiente)
- El motor de cálculo **no** está aquí: vive en `Trabajo Onboarding\Motor Hipotecaria` (ver su `VERSION.md`).
- Documento de arquitectura: `Proyectos 4Life\arquitectura-zoho-4life.md`.

## Estructura

| Carpeta | Dónde va en Zoho | Contenido |
|---|---|---|
| `Codigo Personalizado/` | Zoho Sites → Configuración → Código personalizado | `Código Encabezado.txt` (fuentes e íconos), `Codigo Pie de Página.txt` (script global: CFG de contacto, UTM, botones de evaluación, menú, slider, dataLayer), `CSS Personalizado.txt` (brandbook v2 y estilos del simulador) |
| `Scripts Globales/` | Snippets globales | `4L - Global Header`, `4L - Global Footer`, `4L - Global CTA` |
| `Home/` | Página `/` | `4L Home - Hero`, `Servicios`, `Proceso`, `Preguntas` |
| `Simulador/` | Página `/simular` | `4L - Simulador` (formulario completo), `4L - Simulador Scroll`, `4L - tyc` (texto legal, snippet "4L - TyC datos") |
| `Evaluacion/` | Página `/evaluacion` | `4L - evaluacion` |
| `Gracias/` | Página `/gracias` | `4L - gracias` |
| `CRM/` | Zoho CRM → Configuración → Funciones | Funciones Deluge: `sim4life_registro.deluge`, `asignar_ejecutivo.deluge` (falta el workflow Normalizar RUT) |
| `Legal/` | Páginas legales | `TyCo Sitio Web 4LifeHipotecario al 10-10-2025 (1).pdf` (versión vigente, anterior a la Ley 21.719). La política nueva se pidió a Fiscalía |

Una página nueva = una carpeta con el nombre de la página y un archivo por snippet, con el mismo nombre que tiene en Zoho.

## Reglas

1. **Nombres fijos.** El archivo se llama igual que el snippet en Zoho. Nada de `-v2`, `-final` o `(1)`: OneDrive/SharePoint guarda el historial.
2. **Versión en la primera línea** de cada archivo, como comentario: `<!-- v2026.11.16 -->` en HTML o `/* v2026.11.16 */` en CSS. Si hay dos cambios el mismo día: `v2026.11.16-2`. El simulador además tiene `VERSION_SIM` y la escribe en la consola: `[4L-Simulador] vAAAA.MM.DD`.
3. **Cada cambio deja una línea en `CHANGELOG.md`**: fecha, archivo, versión, qué cambió, proyecto de Claude donde se hizo, y si está publicado.
4. **Publicar** = copiar y pegar en Zoho, y cambiar la línea del CHANGELOG a "Publicado: sí".
5. **Si se edita algo directo en Zoho**, se copia de vuelta aquí el mismo día.
6. **Lo que no es fuente** (copias dentro de proyectos de Claude, zips de entrega) puede estar desactualizado. Ante la duda, manda esta carpeta.

## Pendientes de la carpeta

- Agregar la línea de versión a todos los archivos y `VERSION_SIM` al simulador (al próximo cambio de cada uno).
- Copiar a `CRM/` el workflow Normalizar RUT.
- Agregar a `Legal/` la nueva Política de Privacidad y Cookies (Ley 21.719) cuando llegue de Fiscalía.
