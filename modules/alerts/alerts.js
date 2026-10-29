function initAlertsModule() {
  const alerts = window.nocData?.alerts || [];
  const container = document.getElementById('alerts-list');
  const summary = document.getElementById('alerts-summary');

  if (!container) return;

  const counts = { Alta: 0, Media: 0, Baja: 0 };
  alerts.forEach((alert) => {
    const severity = alert.severity || 'Baja';
    if (counts[severity] !== undefined) counts[severity] += 1;
  });

  if (summary) {
    summary.innerHTML = [
      { label: 'Alta', value: counts.Alta },
      { label: 'Media', value: counts.Media },
      { label: 'Baja', value: counts.Baja }
    ]
      .map(
        (item) => `
          <div class="alert-pill">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </div>
        `
      )
      .join('');
  }

  if (!alerts.length) {
    container.innerHTML = '<li class="alert-empty">Sin alertas activas. El sistema se encuentra estable.</li>';
    return;
  }

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