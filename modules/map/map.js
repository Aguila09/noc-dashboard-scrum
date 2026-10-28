// Módulo de Topología de Red (Equipo 1)
// Muestra nodos, enlaces, estados operativos y segmentación por zona.
(function () {
  let topology = { nodes: [], links: [] };
  let selectedId = null;
  let zoneFilter = 'ALL';
  let statusFilter = 'ALL';

  const $ = (id) => document.getElementById(id);

  // Coordenadas fijas para la topología en estrella centrada en N1
  const coords = {
    N1: { x: 300, y: 165 }, // Core Switch (Centro)
    N2: { x: 130, y: 85 },  // Firewall Edge (Perimeter)
    N3: { x: 470, y: 85 },  // Proxy (DMZ)
    N4: { x: 130, y: 265 }, // AP Internal (LAN)
    N5: { x: 470, y: 265 }, // Sensor IDS (LAN)
    N6: { x: 300, y: 295 }  // Server DB (Core)
  };

  function getTopology() {
    return window.nocData?.topology || { nodes: [], links: [] };
  }

  function renderStats() {
    const nodes = topology.nodes || [];
    const links = topology.links || [];
    const zones = new Set(nodes.map((n) => n.zone));
    const alerts = nodes.filter((n) => n.status !== 'online').length;

    $('map-stats').innerHTML = [
      ['Dispositivos activos', nodes.length],
      ['Enlaces de red', links.length],
      ['Segmentación', `${zones.size} zonas`],
      ['Nodos en alerta', alerts]
    ]
      .map(([label, val]) => `<div class="metric"><span>${label}</span><strong>${val}</strong></div>`)
      .join('');

    const overall = $('map-overall');
    if (nodes.some((n) => n.status === 'critical')) {
      overall.textContent = 'Alerta Crítica';
      overall.className = 'status-pill status-danger';
    } else if (alerts > 0) {
      overall.textContent = 'Atención Requerida';
      overall.className = 'status-pill status-warn';
    } else {
      overall.textContent = 'Sistema Estable';
      overall.className = 'status-pill status-ok';
    }
  }

  function renderZones() {
    const nodes = topology.nodes || [];
    const zones = {};
    nodes.forEach((n) => {
      zones[n.zone] = zones[n.zone] || { total: 0, critical: 0, warning: 0 };
      zones[n.zone].total++;
      if (n.status === 'critical') zones[n.zone].critical++;
      if (n.status === 'warning') zones[n.zone].warning++;
    });

    $('map-zones-summary').innerHTML = Object.entries(zones)
      .map(([zone, data]) => {
        const status = data.critical ? 'Crítica' : data.warning ? 'Alerta' : 'Estable';
        const color = data.critical ? 'var(--danger)' : data.warning ? 'var(--warning)' : 'var(--success)';
        return `
        <div class="zone-card">
          <span>Zona</span>
          <strong>${zone}</strong>
          <span style="color:${color}; font-weight:600;">${status} (${data.total} nodos)</span>
        </div>`;
      })
      .join('');
  }

  function renderZoneFilters() {
    const zones = Array.from(new Set((topology.nodes || []).map((n) => n.zone))).sort();
    $('map-zone-filters').innerHTML = [
      `<button type="button" class="map-chip ${zoneFilter === 'ALL' ? 'active' : ''}" data-zone="ALL">Todas las zonas</button>`,
      ...zones.map((z) => `<button type="button" class="map-chip ${zoneFilter === z ? 'active' : ''}" data-zone="${z}">${z}</button>`)
    ].join('');

    $('map-zone-filters').querySelectorAll('.map-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        zoneFilter = btn.dataset.zone;
        $('map-zone-filters').querySelectorAll('.map-chip').forEach((c) => c.classList.toggle('active', c === btn));
        renderSvg();
      });
    });
  }

  function renderSvg() {
    const svg = $('map-svg');
    const nodes = topology.nodes || [];
    const links = (topology.links || []).map((l) => (Array.isArray(l) ? { source: l[0], target: l[1] } : l));

    const neighbors = new Set();
    if (selectedId) {
      links.forEach((l) => {
        if (l.source === selectedId) neighbors.add(l.target);
        if (l.target === selectedId) neighbors.add(l.source);
      });
    }

    const linksHtml = links
      .map((l) => {
        const p1 = coords[l.source];
        const p2 = coords[l.target];
        if (!p1 || !p2) return '';
        const isConnected = selectedId && (l.source === selectedId || l.target === selectedId);
        const isDimmed = selectedId && !isConnected;
        const cls = isConnected ? 'active' : isDimmed ? 'dimmed' : '';
        return `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" class="map-link ${cls}" />`;
      })
      .join('');

    const nodesHtml = nodes
      .map((n) => {
        const p = coords[n.id] || { x: 300, y: 180 };
        const matchZone = zoneFilter === 'ALL' || n.zone === zoneFilter;
        const matchStatus = statusFilter === 'ALL' || n.status === statusFilter;
        if (!matchZone || !matchStatus) return '';

        const isSelected = selectedId === n.id;
        const isDimmed = selectedId && !isSelected && !neighbors.has(n.id);
        const cls = `map-node ${n.status} ${isSelected ? 'selected' : ''} ${isDimmed ? 'dimmed' : ''}`;

        return `
        <g class="${cls}" data-id="${n.id}" transform="translate(${p.x}, ${p.y})">
          <circle r="22" class="base"></circle>
          <text class="id" y="1">${n.id}</text>
          <text class="name" y="34">${n.name}</text>
          <text class="zone" y="47">[${n.zone}]</text>
        </g>`;
      })
      .join('');

    svg.innerHTML = linksHtml + nodesHtml;

    svg.querySelectorAll('.map-node').forEach((group) => {
      group.addEventListener('click', (e) => {
        e.stopPropagation();
        selectNode(group.dataset.id);
      });
    });
  }

  function selectNode(id) {
    selectedId = selectedId === id ? null : id;
    const node = (topology.nodes || []).find((n) => n.id === selectedId);
    const info = $('map-node-info');

    if (node) {
      const links = (topology.links || []).filter((l) => {
        const [s, t] = Array.isArray(l) ? l : [l.source, l.target];
        return s === node.id || t === node.id;
      });
      const badgeCls = node.status === 'critical' ? 'danger' : node.status === 'warning' ? 'warn' : 'ok';
      info.innerHTML = `
        <p><strong>Dispositivo:</strong> ${node.name} (${node.id})</p>
        <p><strong>Zona:</strong> ${node.zone}</p>
        <p><strong>Estado:</strong> <span class="status-pill status-${badgeCls}">${node.status}</span></p>
        <p><strong>Conexiones:</strong> ${links.length} enlaces activos</p>
      `;
    } else {
      info.innerHTML = 'Haz clic en un nodo para ver su estado y conexiones.';
    }
    renderSvg();
  }

  function initMapModule() {
    if (!$('map-svg')) return;
    topology = getTopology();
    selectedId = null;

    renderStats();
    renderZones();
    renderZoneFilters();
    renderSvg();

    $('map-status-filters').querySelectorAll('.map-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        statusFilter = btn.dataset.status;
        $('map-status-filters').querySelectorAll('.map-chip').forEach((c) => c.classList.toggle('active', c === btn));
        renderSvg();
      });
    });

    $('map-svg').addEventListener('click', () => {
      if (selectedId) selectNode(null);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMapModule);
  } else {
    initMapModule();
  }
})();
