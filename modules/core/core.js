function initCoreModule() {
  const meta = window.nocData?.meta || {};

  const version = document.getElementById('core-version');
  const environment = document.getElementById('core-environment');
  const updated = document.getElementById('core-updated');

  if (version) version.textContent = String(meta.version || 'N/A');
  if (environment) environment.textContent = String(meta.environment || 'N/A');
  if (updated) updated.textContent = String(meta.generatedAt || 'N/A');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCoreModule);
} else {
  initCoreModule();
}
