Formula1 Pilotos API
==

API de los pilotos de la Formula 1 con las siguientes funcionalidades:

- CRUD completo
  - GET /Pilotos
  - GET /Pilotos/:id
  - POST /Pilotos
  - PUST /Pilotos/:id
  - DELETE /Pilotos/id
- Utiliza una base de datos SQLite (no incluida en el repositorio) que contiene una tabla `Piltos` con las columnas: `id`, `name`, `equipo`, `fecha_nacimiento`, `nº_victorias`, `mejor_tiempo`, `campeonatos` y `numero_campeonatos`
- Control de errores: 404#
- hace falta caer npm install y crear Pilotos.db
