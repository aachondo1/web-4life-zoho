# Convención de UTMs 4life Hipotecario — acuerdo con la agencia

Nov 16, 2026 · @Juan Alberto

## Objetivo

Necesitamos una sola convención de UTMs para Meta, Google Ads y orgánico RRSS, de modo que cada prospecto que entra por el simulador de demo4life1.zohosites.com llegue a Zoho CRM con su origen exacto. Ya está decidido que Meta se identifica como fuente con `utm_source`; falta cerrar el resto del formato con la agencia.

El camino es: primero preguntamos qué formato usan hoy; si calza con las reglas de abajo, lo mantenemos y solo lo mapeamos a Zoho; si no tienen uno o no calza, adoptamos esta propuesta.

## Preguntas para la agencia

Con estas respuestas sabemos si su formato actual sirve tal cual o si adoptamos la propuesta.

1. ¿Qué formato usan hoy para nombrar campañas, conjuntos de anuncios y anuncios en Meta? Por favor, compartan 2 o 3 ejemplos reales.
2. ¿Llenan el campo "Parámetros de URL" de los anuncios de Meta? ¿Con valores fijos o dinámicos (`{{campaign.name}}`, `{{adset.name}}`, `{{ad.name}}`)?
3. En Google Ads, ¿usan auto-tagging (gclid) y un sufijo de URL final con UTMs? ¿A nivel de cuenta o de campaña?
4. En orgánico (link en bio, stories, posts con link), ¿etiquetan los enlaces? ¿Usan alguna herramienta tipo link-in-bio?
5. ¿Mantienen mayúsculas, tildes o espacios en los nombres? ¿Qué separador usan?
6. ¿El Pixel de Meta y la Conversions API están instalados en demo4life1.zohosites.com? ¿Quién los administra?
7. ¿Reportan solo desde Ads Manager / Google Ads, o también desde GA4?

**Regla para decidir:** si su formato es en minúsculas, sin tildes ni espacios, con bloques en orden fijo y se puede leer de forma automática, lo mantenemos. Si no, se adopta la convención propuesta.

## Convención propuesta

Cinco parámetros, siempre en minúsculas, sin tildes, ñ ni espacios: `_` separa bloques y `-` une palabras dentro de un bloque.

| Parámetro | Qué indica | Valores permitidos |
| --- | --- | --- |
| `utm_source` | Plataforma | `meta`, `google`, `instagram`, `facebook`, `linkedin` |
| `utm_medium` | Pagado u orgánico | `paid-social` (Meta pagado), `cpc` (Google Ads), `social` (orgánico) |
| `utm_campaign` | Campaña | `{objetivo}_{producto}_{audiencia}_{aaaamm}` |
| `utm_content` | Anuncio o pieza | `{formato}_{tema}_{version}` |
| `utm_term` | Segmentación | Meta: nombre del conjunto de anuncios. Google: palabra clave |

Valores de cada bloque de `utm_campaign`:

- **objetivo:** `lead`, `trafico`, `alcance`
  - **orgánico:** `organico_{producto}_{aaaamm}`, sin bloque de audiencia
- **producto:** `hipotecario`, `fogaes`
- **audiencia:** `prospeccion`, `lookalike`, `remarketing`
- **aaaamm:** mes de inicio, por ejemplo `202612`

Valores de `utm_content`: formato `video`, `carrusel`, `imagen`, `story`, `reel`; tema en 1 a 3 palabras (`noticia-mercado`, `simulador`, `pie`); versión `v1`, `v2`.

En Meta, el nombre de la campaña en Ads Manager debe ser igual al `utm_campaign`, así los parámetros dinámicos lo copian sin errores. `utm_source=meta` aplica solo a pauta pagada; el orgánico usa `instagram` o `facebook` para no mezclar ambos en Zoho.

## Ejemplos por canal

| Canal | utm\_source | utm\_medium | utm\_campaign | utm\_content | utm\_term |
| --- | --- | --- | --- | --- | --- |
| Meta pagado | meta | paid-social | lead\_hipotecario\_prospeccion\_202612 | reel\_simulador\_v1 | 25-40-santiago |
| Meta lookalike | meta | paid-social | lead\_fogaes\_lookalike\_202612 | carrusel\_pie\_v2 | lal-1pct-prospectos |
| Google Ads | google | cpc | lead\_hipotecario\_prospeccion\_202612 | rsa\_simulador\_v1 | credito-hipotecario |
| Instagram orgánico | instagram | social | organico\_hipotecario\_202612 | post\_noticia-mercado\_v1 | (vacío) |

**Meta: campo "Parámetros de URL"** del anuncio (dinámico, se configura una vez):

```
utm_source=meta&utm_medium=paid-social&utm_campaign={{campaign.name}}&utm_term={{adset.name}}&utm_content={{ad.name}}
```

**Google Ads: sufijo de URL final** a nivel de campaña, con auto-tagging activo para mantener el gclid:

```
utm_source=google&utm_medium=cpc&utm_campaign=lead_hipotecario_prospeccion_202612&utm_content={_anuncio}&utm_term={keyword}
```

**Orgánico:** link en bio y stories con el enlace ya armado, por ejemplo:

```
https://demo4life1.zohosites.com/?utm_source=instagram&utm_medium=social&utm_campaign=organico_hipotecario_202612&utm_content=bio_simulador_v1
```

## Registro en Zoho CRM

El formulario del simulador guarda los 5 UTMs en campos ocultos y los envía a Posibles clientes; `utm_source` + `utm_medium` definen la Fuente del posible cliente.

| utm\_source + utm\_medium | Fuente en Zoho CRM |
| --- | --- |
| meta + paid-social | Meta Ads |
| google + cpc | Google Ads |
| instagram / facebook / linkedin + social | Redes sociales orgánico |
| Sin UTMs | Directo / sin origen |

Probado el 16-11-2026: un lead con parámetros en la URL llegó a Posibles clientes con Origen Página, los 5 UTMs, Google Click ID y FBCLID completos. La captura funciona.

**Checklist de validación**

- [ ] Probar que los UTMs se conserven si el usuario entra por una página y completa el simulador en otra
- [ ] Agregar los campos ocultos al formulario del simulador en demo4life1
- [ ] Conservar los UTMs si el usuario navega entre páginas antes de completar el simulador (primer contacto)
- [ ] Regla en Zoho CRM que llene la Fuente según la tabla
- [ ] Lead de prueba por canal (Meta, Google, Instagram orgánico) y revisar que llegue completo

## Próximos pasos

- [ ] Enviar a la agencia las preguntas y la convención propuesta
- [ ] Revisar sus respuestas y decidir: mantener su formato o adoptar la propuesta
- [ ] Dejar la versión final en este documento y pedir confirmación por escrito a la agencia
- [ ] La agencia configura los parámetros en Meta y Google Ads; 4life etiqueta los links orgánicos
- [ ] Completar el checklist de Zoho CRM y validar con leads de prueba

Pregunta abierta: fecha límite para cerrar el acuerdo y responsable en la agencia.
