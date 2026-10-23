# Guía de contribución para el proyecto NOC Dashboard

## 1. Requisitos mínimos

Solo necesitas instalar la extensión `Live Server` en Visual Studio Code.

- Abrir la carpeta del proyecto en VS Code.
- Ejecutar `Go Live` desde la barra inferior o desde el menú de VS Code.
- El proyecto se servirá en un navegador local y podrás probarlo sin instalar Node.js ni dependencias adicionales.

## 2. Flujo de trabajo con ramas

Cada equipo debe trabajar en una rama de funcionalidad siguiendo esta convención:

- `feature/eq1-map`
- `feature/eq2-crypto`
- `feature/eq3-logs`
- `feature/eq4-firewall`
- `feature/eq5-alerts`
- `feature/eq6-core`

Ejemplo:

```bash
git checkout -b feature/eq1-map
```

## 3. Regla estricta de aislamiento por equipo

Cada equipo solo puede modificar archivos dentro de su propia carpeta en `/modules/`.

Ejemplos:

- Equipo 1: `/modules/map/*`
- Equipo 2: `/modules/crypto/*`
- Equipo 3: `/modules/logs/*`
- Equipo 4: `/modules/firewall/*`
- Equipo 5: `/modules/alerts/*`
- Equipo 6: `/modules/core/*`

No se permite:

- Editar archivos fuera de la carpeta del equipo.
- Modificar `index.html` o `app.js` salvo que el Product Owner lo indique.
- Hacer cambios globales que afecten a otros módulos.

> Esta regla es obligatoria para evitar conflictos de merge y mantener un flujo de trabajo ágil y seguro.

## 4. Proceso recomendado diario

1. Actualizar tu rama local desde `main`.
2. Trabajar únicamente en tu carpeta de equipo.
3. Validar visualmente en Live Server.
4. Hacer commit con mensajes claros.
5. Subir la rama al repositorio remoto.
6. Crear un Pull Request para revisión.

## 5. Cómo abrir un Pull Request (PR)

1. Haz push de tu rama:

```bash
git push origin feature/eq1-map
```

2. En GitHub, entra al repositorio.
3. Haz clic en `Compare & pull request`.
4. Selecciona la rama base `main` y la rama de trabajo.
5. Escribe un título claro, por ejemplo:

```text
[EQ1] Implementa mapa de topología de nodos
```

6. En la descripción, incluye:
   - Qué funcionalidad se agregó.
   - Qué archivos se modificaron.
   - Cómo se validó visualmente.
   - Cualquier nota para el Product Owner.
7. Solicita revisión del equipo y del Product Owner.
8. Espera aprobación antes de hacer merge.

## 6. Criterios de aceptación

- El módulo funciona en el navegador usando Live Server.
- Los archivos del equipo quedan aislados en su carpeta.
- No hay cambios no autorizados en otros módulos.
- El PR está documentado y es revisable.
