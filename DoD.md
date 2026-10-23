# Definition of Done (DoD)

## 1. Propósito

La Definition of Done (DoD) define cuándo una tarea, un módulo o una entrega de la práctica académica se considera terminada y lista para ser revisada por el Product Owner o para pasar a integración.

En este proyecto, cada equipo debe cumplir esta definición antes de declarar que su trabajo está "done".

---

## 2. Criterios generales del DoD

Una tarea o módulo solo está terminado cuando se cumplen todas estas condiciones:

### 2.1 Funcionalidad

- La funcionalidad principal del módulo está implementada.
- El módulo puede visualizarse correctamente desde el dashboard principal.
- La lógica cumple con el objetivo asignado al equipo.

### 2.2 Integración

- El módulo usa los datos simulados de `window.nocData` o los del `core` cuando corresponda.
- No rompe la ejecución del proyecto general.
- El navegador carga el contenido sin errores visibles.

### 2.3 Aislamiento por equipo

- Los cambios solo se realizaron dentro de la carpeta del equipo asignado.
- No se modifican archivos de otros equipos sin autorización previa.
- No se alteran archivos globales como `index.html` ni `app.js` salvo que el Product Owner lo indique.

### 2.4 Calidad visual

- La interfaz es clara, ordenada y legible.
- Hay consistencia con la estética general del dashboard.
- Se validó la navegación y la presentación de contenido.

### 2.5 Validación

- Se probó el módulo usando Live Server.
- Se revisó que la información se renderiza correctamente.
- Se verificó que no haya errores evidentes de JavaScript o HTML.

### 2.6 Documentación y evidencia

- El equipo tiene registro del trabajo realizado en su rama.
- Hay evidencia del avance en commits o PR.
- El módulo puede explicarse brevemente durante la demo.

---

## 3. DoD por módulo

### 3.1 Equipo 1 — map

- El mapa muestra nodos y enlaces principales.
- Hay diferenciación visual por estado: online, warning y critical.
- La vista refleja los datos del mock de topología.
- La estructura visual es legible y estable.

### 3.2 Equipo 2 — crypto

- Se muestran los hashes principales (SHA-256, SHA-1, MD5).
- La información es clara y legible.
- El módulo se conecta con los datos del core.
- Hay validación de lectura y presentación de resultados.

### 3.3 Equipo 3 — logs

- Se visualizan métricas de tráfico y conexiones.
- Los datos se presentan con formato legible.
- Se refleja el estado operativo del sistema.
- No hay inconsistencias con los otros módulos.

### 3.4 Equipo 4 — firewall

- La lista de reglas se muestra correctamente.
- La diferencia entre ALLOW y DENY es visualmente clara.
- Los protocolos, puertos y orígenes aparecen de forma legible.
- El módulo representa el comportamiento esperado del firewall.

### 3.5 Equipo 5 — alerts

- Las alertas se muestran con severidad clara.
- El origen y mensaje de cada evento son visibles.
- La jerarquía de prioridad está bien definida.
- La visualización facilita la interpretación del evento.

### 3.6 Equipo 6 — core

- Los datos globales están bien estructurados.
- Los módulos pueden consumir la información sin errores.
- Se mantiene consistencia en nombres, campos y formatos.
- El mock sirve como fuente única de verdad del sistema.

---

## 4. Criterio de aprobación del Product Owner

Un módulo se considera listo para integración cuando el Product Owner verifica que:

- la funcionalidad cumple con el objetivo del equipo,
- la vista es clara y estable,
- no rompe el flujo general del dashboard,
- y se puede presentar en la demo sin explicación compleja.

---

## 5. DoD de la entrega final del proyecto

El proyecto completo estará terminado cuando:

- Los 6 equipos tienen sus módulos funcionando.
- El dashboard carga todos los módulos sin fallos visibles.
- El mock de datos global es consistente.
- Las ramas individuales están actualizadas y documentadas.
- El producto final se presenta con evidencia y demo clara.
- El Product Owner valida que la solución cumple el objetivo académico.

---

## 6. Regla simple para todos los equipos

Una tarea no está “done” solo porque el código existe.

Está “done” cuando:

- funciona,
- se ve bien,
- es consistente con el resto del proyecto,
- y está listo para ser revisado.

---

## 7. Frase guía del equipo

"Done" significa que el trabajo es usable, revisable y listo para demostrar.
