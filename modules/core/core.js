function initCoreModule() {
  const data = window.nocData || {};
  const meta = data.meta || {};
  const summary = data.summary || {};

  const version = document.getElementById('core-version');
  const environment = document.getElementById('core-environment');
  const updated = document.getElementById('core-updated');
  const health = document.getElementById('core-health');
  const incidents = document.getElementById('core-incidents');
  const zones = document.getElementById('core-zones');
  const region = document.getElementById('core-region');

  if (version) version.textContent = String(meta.version || 'N/A');
  if (environment) environment.textContent = String(meta.environment || 'N/A');
  if (updated) updated.textContent = String(meta.generatedAt || 'N/A');
  if (health) health.textContent = String(summary.systemHealth || 'Sin datos');
  if (incidents) incidents.textContent = String(summary.activeIncidents || 0);
  if (zones) zones.textContent = `${summary.segmentation || 0} zonas`;
  if (region) region.textContent = String(meta.region || 'N/A');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCoreModule);
} else {
  initCoreModule();
}
