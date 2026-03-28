# Cómo la IA puede ayudar en el proceso de Git y Pull Requests

Este documento explica, de forma práctica y sin tocar infraestructura, cómo la IA puede mejorar el flujo diario del equipo al trabajar con Git y Pull Requests.

## 1. Propósito
- Mostrar usos inmediatos de IA en redacción y revisión de PRs y commits.
- Proveer ejemplos textuales y prompts listos para usar.
- No se modifica CI/CD ni pipelines; todo es aplicable manualmente.

## 2. Conceptos clave
- **IA en PRs y commits:** Generar títulos y descripciones claras, resumir cambios, y sugerir mensajes de `commit` más descriptivos.
- **IA como reviewer:** Revisar el texto del PR, detectar inconsistencias, sugerir preguntas, y señalar riesgos obvios (p. ej. cambios en dependencias o seguridad).
- **IA en CI/CD (conceptual):** Priorizar alertas, explicar fallos y recomendar acciones—esto queda como guía conceptual.

## 3. Ejemplos prácticos (texto listo para usar)

### Título de PR
- Antes: `actualizacion`
- IA sugerencia: `feat(home): actualizar título público a 'Ronaldo Durand'`

### Descripción de PR
- Antes: `cambios en home`
- IA sugerencia:
  - **Resumen:** Actualiza el título público en la página principal de `RONALDO SMIT` a `Ronaldo Durand`.
  - **Archivos modificados:** `src/components/Home.tsx` (1 línea modificada).
  - **Impacto:** Visual; sin cambios en datos ni migraciones.
  - **Checklist:** [ ] Revisar copy en otras páginas | [ ] Verificar imagen hero en mobile.

### Comentario de review automático (ejemplo)
"Buen cambio. Observación: el `alt` de la imagen hero está vacío — considera `alt='Imagen de presentación'`. Además, valida que los enlaces externos sigan siendo correctos después del cambio de nombre." 

### Commit message sugerido
- Antes: `fix`
- IA sugerencia: `fix(home): añadir alt descriptivo y lazy-loading al hero image`

## 4. Riesgos y mitigaciones
- **Automatizar de más:** La IA puede proponer cambios contextuales que requieren criterio humano. Mitigación: incluir checklist y exigir revisión humana antes de merge.
- **Confiar en reviews ciegos:** Los comentarios automáticos ayudan, pero no sustituyen la revisión técnica. Mitigación: usar IA como primer filtro y mantener reviewers asignados.
- **Costos:** El uso de servicios IA puede implicar gastos. Mitigación: limitar su uso a generación de texto y resúmenes, evaluar ROI en un piloto.

## 5. Cómo explicarlo al equipo (30–60 segundos)
"La IA nos ayuda a redactar mejores títulos, descripciones y comentarios para Pull Requests, acorta el tiempo de preparación de PRs y destaca riesgos obvios. No reemplaza a los reviewers: su función es acelerar tareas repetitivas y mejorar claridad. Empezamos sin tocar pipelines, sólo aplicando sugerencias manualmente en PRs reales." 

## 6. Siguientes pasos (sin infraestructura)
1. Probar en 3 PRs actuales: aplicar sugerencias de IA para título/descripción/commits y recoger feedback.  
2. Crear una guía corta (1 página) con prompts recomendados para generar títulos, descripciones y comentarios.  
3. Medir impacto: comparar tiempo de creación y tiempo de revisión antes/después de 2 semanas.

## 7. Prompts recomendados (ejemplos)
- Para título y descripción del PR:
  "Resume este conjunto de cambios en un título de PR conciso y una descripción que incluya: resumen, archivos modificados, impacto y checklist. Mantén el estilo Conventional Commits."
- Para comentario de review automático:
  "Revisa esta descripción de PR y su diff: señala problemas de accesibilidad, faltas de contexto, y sugiere 2 preguntas que el reviewer debería hacer."
- Para mensaje de commit:
  "Genera un mensaje de commit claro y estilo 'conventional commits' para este cambio: <breve diff o descripción>."

---
Documento creado para uso interno: aplicar manualmente las sugerencias y mantener revisión humana.
