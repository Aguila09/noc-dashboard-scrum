# NOC Dashboard - Práctica Scrum

## Descripción del Proyecto
Este proyecto es una aplicación web front-end estructurada de forma modular, diseñada para simular el panel de control de un Centro de Operaciones de Red (NOC). 

Su objetivo principal es servir como un entorno de simulación realista para la implementación de la metodología ágil **Scrum distribuido**. El proyecto se desarrolla de forma asíncrona mediante **6 equipos de desarrollo** (3 integrantes por equipo) a lo largo de un ciclo intensivo de **3 días (Sprints de 1 día)**.

## Arquitectura y Módulos
La aplicación está construida con componentes web clásicos (HTML, CSS, JavaScript) y no requiere Node.js ni dependencias adicionales complejas. Todo se sirve de forma estática.

El código base está dividido estrictamente en 6 módulos independientes. Cada equipo es dueño de un módulo y **tiene prohibido editar archivos fuera de su directorio asignado**:

1. **Equipo 1 (`/modules/map/`)**: Mapa de Topología de Nodos.
2. **Equipo 2 (`/modules/crypto/`)**: Herramientas de Criptografía y Hashing.
3. **Equipo 3 (`/modules/logs/`)**: Analizador de Tráfico en Tiempo Real.
4. **Equipo 4 (`/modules/firewall/`)**: Editor de Reglas de Firewall.
5. **Equipo 5 (`/modules/alerts/`)**: Centro de Alertas de Intrusión.
6. **Equipo 6 (`/modules/core/`)**: Simulador de Datos (Mock Data) y Lógica Global.

## Instrucciones de Instalación y Uso
Para mantener el flujo de trabajo ágil, el entorno de desarrollo es extremadamente ligero:

1. Clona este repositorio: `git clone https://github.com/Aguila09/noc-dashboard-scrum.git`
2. Abre la carpeta del proyecto en **Visual Studio Code**.
3. Instala la extensión **Live Server** en VS Code.
4. Haz clic en el botón `Go Live` en la barra inferior. El dashboard se abrirá automáticamente en tu navegador local.

## Documentación Ágil (Obligatoria)
Este repositorio opera bajo reglas estrictas de desarrollo colaborativo. Todo integrante debe leer los siguientes documentos antes de escribir código:

* **[Backlog.md](./Backlog.md):** Contiene el plan de trabajo detallado por equipo, los roles esperados (Scrum Master, Developer, QA) y los objetivos funcionales para los 3 días de Sprints.
* **[CONTRIBUTING.md](./CONTRIBUTING.md):** Define las reglas de aislamiento de código, la nomenclatura obligatoria de las ramas (`feature/eqX-modulo`) y el flujo exacto para abrir y aprobar un Pull Request (PR).
* **[DoD.md](./DoD.md):** Establece la *Definition of Done*. Define los criterios exactos de calidad, integración y presentación que un módulo debe cumplir para ser considerado como "terminado".

## Ecosistema de Gestión y Tableros
La coordinación del proyecto se realiza utilizando una combinación de GitHub y herramientas en la nube para el trabajo asíncrono:

1. **Sprint Backlog (GitHub Projects):** Tablero Kanban oficial en la pestaña `Projects` de este repositorio. Aquí se controlan las tareas diarias mediante Issues asignados a cada equipo y organizados por Milestones (Sprints).
2. **Daily Scrum (Google Docs):** Cada equipo cuenta con un documento propio para responder asíncronamente a las 3 preguntas diarias (Qué hice, Qué haré, Impedimentos).
3. **Scrum of Scrums (Google Docs):** Un documento centralizado donde los 6 Scrum Masters reportan diariamente el estatus general de su módulo y las dependencias técnicas con otros equipos.
4. **Retrospectiva (Google Docs):** Documento por equipo para reflexionar al final de cada Sprint sobre qué salió bien y qué se debe mejorar.

*(Nota: Pide a tu Scrum Master los enlaces de acceso a los documentos de Google Docs correspondientes a tu equipo).*

## Contacto
**Project Owner / Coordinador General:** Víctor Rivera  
**Email:** [victorrivera0309@gmail.com](mailto:victorrivera0309@gmail.com)