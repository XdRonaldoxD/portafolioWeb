docs(quality): añadir README sobre uso de IA en PRs y procesos

Resumen
- Añade `README_IA_en_PRs.md` que muestra cómo la IA puede ayudar fuera del código: conceptos clave (IA en PRs y commits, IA como reviewer, IA en CI/CD conceptual), ejemplos prácticos (PR mejor redactado, comentario de review automático), riesgos y prompts recomendados.

Qué contiene
- Conceptos clave y ejemplos textuales listos para usar en el flujo diario del equipo.
- Ejemplos de título/description/commit y un comentario de review automático de ejemplo.
- Prompts sugeridos para generar títulos, descripciones y mensajes de commit con IA.

Impacto
- Documentación para que el equipo pruebe IA aplicándola manualmente en PRs (sin tocar pipelines ni infraestructura).
- Ayuda a estandarizar el uso de IA para redactar PRs y acelerar el proceso de preparación.

Checklist antes de merge
- [ ] Verificar redacción y ortografía del README.
- [ ] Validar que el README no exponga información sensible.
- [ ] Pedir feedback a 1–2 compañeros en el PR.
- [ ] Decidir si queremos un piloto: aplicar prompts en 3 PRs reales.

Notas para reviewers
- Este PR es documentación / demostración (no cambia código). Revisar contenido y claridad.
- Sugerencia: probar los prompts en un PR real y reportar cómo mejoran (tiempo de creación, claridad).
