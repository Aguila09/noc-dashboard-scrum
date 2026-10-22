# Plan de trabajo por equipo, día y rol

## 1. Modelo de trabajo

Se trabajará con Scrum of Scrums durante 3 días

Cada equipo tendrá:

- 1 Scrum Master / Facilitador
- 1 Desarrollador principal / Encargado de lógica
- 1 QA / Integrador / Documentador

La coordinación global se hará a través de un Scrum of Scrums diario, donde cada equipo aporta:

- Qué hizo ayer
- Qué hará hoy
- Qué bloqueadores tiene

---

## 2. Equipo 1 — map: Mapa de Topología de Nodos

### Roles

- Integrante 1: Scrum Master / Coordinador del equipo
  - Organiza tareas, revisa progreso y reporta en Scrum of Scrums.
- Integrante 2: Desarrollador Frontend / Lógica visual
  - Diseña la topología, nodos, conexiones y estados visuales.
- Integrante 3: QA / Integrador de datos
  - Valida que los datos de `window.nocData.topology` se muestren correctamente.

### Entregable esperado

- Mapa visual con nodos, enlaces y estados: online, warning, critical.
- Uso de datos simulados del core.

### Tareas por día

#### Día 1

- Crear estructura del módulo `modules/map/`
- Definir HTML base y CSS visual
- Leer `window.nocData.topology`
- Crear mock inicial del mapa

#### Día 2

- Mejorar estilos del mapa y sus indicadores
- Mostrar estados por zona
- Validar comportamiento con datos reales del mock

#### Día 3

- Pulir UI para demo
- Revisar enlace con el dashboard principal
- Preparar evidencia para PR final

---

## 3. Equipo 2 — crypto: Herramientas de Criptografía (Hashing)

### Roles

- Integrante 1: Scrum Master / Comunicador
  - Coordina sprint local y comparte bloqueadores.
- Integrante 2: Lógica de hashing / Desarrollador principal
  - Implementa generación y comparación de hashes.
- Integrante 3: QA / Documentador
  - Valida entradas, resultados y explica el uso del módulo.

### Entregable esperado

- Módulo para mostrar hashes SHA-256, SHA-1 y MD5 con datos del core.
- Interfaz sencilla y legible.

### Tareas por día

#### Día 1

- Crear módulo base y layout
- Definir cómo mostrar hashes en pantalla
- Conectar con `window.nocData.hashSamples`

#### Día 2

- Desarrollar comparación entre texto ingresado y hash esperado
- Mejorar la validación visual de resultados
- Probar casos: normal, vacío, inválido

#### Día 3

- Finalizar interfaz y mensajes de status
- Revisar consistencia con los demás módulos
- Preparar presentación del módulo

---

## 4. Equipo 3 — logs: Analizador de Tráfico en Tiempo Real

### Roles

- Integrante 1: Scrum Master / Reportero
  - Reporta avances al Scrum of Scrums.
- Integrante 2: Lógica de monitoreo / Desarrollador principal
  - Procesa tráfico, throughput, conexiones y bloqueos.
- Integrante 3: QA / Visualización
  - Revisa métricas y organiza la presentación de resultados.

### Entregable esperado

- Panel con paquetes, throughput, conexiones y bloqueos activos.

### Tareas por día

#### Día 1

- Diseñar estructura del módulo de logs
- Conectar con `window.nocData.traffic`
- Crear tarjetas métricas

#### Día 2

- Agregar formato legible de números
- Mejorar visualización de estado operativo
- Detectar inconsistencias con datos globales

#### Día 3

- Ajustar gráficos o indicadores simples
- Validar navegación dentro del dashboard
- Preparar la demo final

---

## 5. Equipo 4 — firewall: Editor de Reglas de Firewall

### Roles

- Integrante 1: Scrum Master / Coordinador de reglas
  - Organiza prioridades de reglas y seguimiento.
- Integrante 2: Desarrollador de lógica de políticas
  - Maneja la estructura de reglas y los estados ALLOW/DENY.
- Integrante 3: QA / Validación funcional
  - Verifica que los datos del firewall muestren correctamente la lista.

### Entregable esperado

- Editor o visualizador de reglas con protocolo, puerto, origen y acción.

### Tareas por día

#### Día 1

- Crear módulo base y estructura visual
- Leer `window.nocData.firewallRules`
- Diseñar lista de reglas

#### Día 2

- Implementar filtros o diferenciación por acción
- Agregar estados visuales para regla permitida vs bloqueada
- Validar orden y legibilidad

#### Día 3

- Mejorar UX del editor
- Probar con casos reales de firewall
- Preparar entrega final y PR

---

## 6. Equipo 5 — alerts: Centro de Alertas de Intrusión

### Roles

- Integrante 1: Scrum Master / Enlace de priorización
  - Define urgencias y facilita coordinación.
- Integrante 2: Procesamiento de eventos / Desarrollador principal
  - Organiza alertas por severidad e impacto.
- Integrante 3: QA / UX de alertas
  - Verifica mensajes, colores e claridad de notificación.

### Entregable esperado

- Panel con lista de alertas, severidad, origen y mensajes.

### Tareas por día

#### Día 1

- Crear módulo `alerts`
- Conectar con `window.nocData.alerts`
- Diseñar tarjetas con severidad visual

#### Día 2

- Mejorar jerarquía de alertas: alta, media, baja
- Añadir mensajes claros de origen y contexto
- Validar consistencia visual

#### Día 3

- Pulir la navegación del panel
- Revisar caso límite sin alertas
- Presentar resultado final

---

## 7. Equipo 6 — core: Simulador de Datos y Lógica Global

### Roles

- Integrante 1: Scrum Master / Coordinador del core
  - Organiza y sincroniza la fuente de verdad del proyecto.
- Integrante 2: Desarrollador de datos / Lógica global
  - Define el mock data principal y estructura JSON.
- Integrante 3: QA / Integrador global
  - Valida que todos los módulos consuman los mismos datos.

### Entregable esperado

- Archivo `modules/core/data.js` con datos consistentes para todos los módulos.
- Mantener modelo limpio y reutilizable.

### Tareas por día

#### Día 1

- Definir estructura JSON del sistema
- Crear datos para topology, alerts, firewall, traffic y hashes
- Asegurar que all los módulos puedan leerlo

#### Día 2

- Ajustar nombres, formatos y valores para evitar errores de consumo
- Verificar compatibilidad cross-module
- Documentar la API simulada

#### Día 3

- Revisión final de consistencia del mock
- Corregir inconsistencias
- Preparar integración con dashboard final

---

## 8. Calendario de 3 días

### Día 1 — Base y comprensión

Objetivo: levantar la estructura mínima y definir la convivencia del módulo.

Tareas globales:

- Crear la base del módulo de cada equipo
- Definir HTML, CSS y JS iniciales
- Conectar con `window.nocData`
- Hacer validación visual sin conflictos

Criterio de entrega del día:

- Cada equipo tiene su módulo cargado base
- Al menos una vista funcional simple
- Cada miembro del equipo entiende el alcance del módulo

### Día 2 — Desarrollo funcional

Objetivo: dejar la funcionalidad principal operativa.

Tareas globales:

- Implementar la lógica principal por equipo
- Conectar entradas y salidas con datos mock
- Resolver errores de integración entre módulo y dashboard

Criterio de entrega del día:

- Cada módulo funciona con contenido real y visible
- El dashboard carga cada sección correctamente
- Hay al menos 1 validación de QA por módulo

### Día 3 — Pulido, pruebas y demo

Objetivo: cerrar la práctica con calidad de entrega.

Tareas globales:

- Corregir bugs visibles
- Mejorar estilo y consistencia visual
- Preparar presentación final
- Crear PR o entrega final al Product Owner

Criterio de entrega del día:

- Dashboard navegable y coherente
- Todos los módulos renderizan datos esperados
- Demo final preparada para evaluación

---

## 9. Reglas de coordinación Scrum of Scrums

Cada equipo tendrá un representante para el Scrum of Scrums diario.

Cada representante responde:

- Qué hizo el equipo
- Qué hará hoy
- Qué bloqueos tiene
- Qué necesita de otro equipo

Recomendación:

- 10 a 15 minutos diarios
- Se reporta solo lo relevante para la integración global
- Los bloqueos más importantes se resuelven en la reunión de coordinación

---

## 10. Sugerencia final para la organización

Para que la práctica sea más realista, cada equipo debe actuar como si fuera un mini-equipo de desarrollo ágil, con:

- backlog local
- definición de tareas
- revisión por pares
- entrega incremental
- demo final

Esto hará que la práctica de DAS sea mucho más auténtica y útil
