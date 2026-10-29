# Equipo 1 — Map: Evidencia Día 3

## Alcance del día
- Pulir UI para demo.
- Revisar enlace con el dashboard principal.
- Preparar evidencia para PR final (este documento).

## Cambios del Día 3
| Archivo | Cambio | Motivo |
|---|---|---|
| `modules/map/map.css` | Animación de pulso en nodos `critical` + clase `.map-empty` | Hacer visible un problema crítico sin leer texto; demo más clara |
| `modules/map/map.html` | Contenedor `#map-empty` dentro del lienzo | Feedback cuando los filtros no arrojan nodos |
| `modules/map/map.js` | Toggle del mensaje vacío tras cada render | Estado vacío manejado en 2 líneas, sin lógica extra |

## Checklist DoD (Equipo 1 — map)
- [x] El mapa muestra nodos y enlaces principales.
- [x] Diferenciación visual por estado: online, warning y critical.
- [x] La vista refleja `window.nocData.topology` (mock del core).
- [x] Estructura legible y estable, con leyenda, filtros y detalle de nodo.
- [x] Solo se editaron archivos de `modules/map/`.
- [x] Probado vía Live Server: navegación Topología ↔ demás módulos sin errores en consola.

## Guion de demo (2 min)
1. Abrir el dashboard (módulo por defecto: Topología).
2. Mostrar métricas y pill de estado global.
3. Filtrar por zona y por estado (mostrar el pulso del nodo crítico).
4. Clic en un nodo → detalle de dispositivo, zona y conexiones.
5. Combinar filtros hasta el estado vacío y regresar a "Todas".
6. Cambiar a otro módulo y volver: el mapa se recarga sin errores.

## Descripción propuesta para el PR
> feat(map): pulido de UI para demo final (Día 3)
> - Pulso animado en nodos críticos y estado vacío por filtros.
> - Verificada la integración con el dashboard (carga por defecto y re-entrada limpia).
> - Evidencia y guion de demo en `modules/map/EVIDENCIA-DIA3.md`.
