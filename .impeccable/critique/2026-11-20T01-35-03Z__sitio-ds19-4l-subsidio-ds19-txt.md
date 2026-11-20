---
target: critique (DS19 v-7)
total_score: 23
max_score: 32
na_heuristics: 7,9
p0_count: 0
p1_count: 2
target_identity: "file:/home/claude/web-4life-zoho/sitio/DS19/4L - Subsidio DS19.txt"
target_fingerprint: "sha256:395ddc18ed188240eb6ca70c5dab30bb9f2e6e4f8406c49249bb07b9b8171aa8"
target_path: /home/claude/web-4life-zoho/sitio/DS19/4L - Subsidio DS19.txt
timestamp: 2026-11-20T01-35-03Z
slug: sitio-ds19-4l-subsidio-ds19-txt
---
Method: dual-agent (A: revisión de diseño · B: detector y mediciones) — v2026.11.19-7

| # | Heurística | Nota | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Qué pasa al simular solo está en una nota gris, lejos del rojo de la portada |
| 2 | Lenguaje | 3 | "Dividendo", "reservas" y "hasta el tramo del 90 %" sin aclarar |
| 3 | Control y libertad | 3 | 8.625 px en móvil sin atajos |
| 4 | Consistencia | 3 | Botón de la banda celeste no va a todo el ancho en móvil |
| 5 | Prevención de errores | 2 | Ecuación de la portada sin "Ejemplo": UF 2.200 se lee como precio real |
| 6 | Reconocer | 3 | Tabla apilada con etiqueta por celda |
| 7 | Flexibilidad | n/a | Landing de persuasión |
| 8 | Minimalismo | 3 | Panel de requisitos denso; ~700 px vacíos a su izquierda en escritorio |
| 9 | Recuperación de errores | n/a | Sin campos; estados degradados bien resueltos |
| 10 | Ayuda | 3 | 7 FAQ al punto, reordenadas por zona |
| **Total** | | **23/32** | **Bueno (72 %)** |

Prioridades: [P1] la razón para elegir 4Life llega tarde (paso 3 no dice que es 4Life; dividendo flexible ausente) · [P1] salto de layout en móvil al cargar la foto de portada (CLS 0,25) · [P2] ecuación de portada sin "Ejemplo" · [P2] botón de requisitos huérfano en escritorio · [P2] foto general de Coquimbo nublada · [P3] "UF" y cifra en distinta línea; botón de la banda en móvil; etiqueta "Tu pie" sobre el corchete; fila "Tu ahorro" desalineada 6 px.
Medido: detector solo marca el rayado intencional; contraste mínimo 4,85:1; sin desbordes; portada sin foto correcta en 24 casos; mutuaria sin columna vacía; "moras" ok; CSS idéntico.
