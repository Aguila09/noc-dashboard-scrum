function initMapModule() {
  const topology = window.nocData?.topology || {
    nodes: [],
    links: []
  };

  const activeNodes = document.getElementById('map-active-nodes');
  const criticalLinks = document.getElementById('map-critical-links');
  const segmentation = document.getElementById('map-segmentation');

  if (activeNodes) {
    activeNodes.textContent = String(topology.nodes.length || 0);
  }

  if (criticalLinks) {
    criticalLinks.textContent = String(topology.links.length || 0);
  }

  if (segmentation) {
    const zones = new Set((topology.nodes || []).map((node) => node.zone));
    segmentation.textContent = `${zones.size || 0} zonas`;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMapModule);
} else {
  initMapModule();
}
