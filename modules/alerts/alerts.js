function initAlertsModule() {
  const alerts = window.nocData?.alerts || [];
  const container = document.getElementById('alerts-list');

  if (!container) return;

  container.innerHTML = alerts
    .map((alert) => {
      const severityClass = (alert.severity || 'baja').toLowerCase();
      return `
        <li>
          <div class="alert-header">
            <strong>${alert.id}</strong>
            <span class="severity ${severityClass}">${alert.severity}</span>
          </div>
          <div>${alert.message}</div>
          <small>Origen: ${alert.source}</small>
        </li>
      `;
    })
    .join('');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAlertsModule);
} else {
  initAlertsModule();
}
