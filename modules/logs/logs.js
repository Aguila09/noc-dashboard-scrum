function initLogsModule() {
  const traffic = window.nocData?.traffic || {};

  const packets = document.getElementById('logs-packets');
  const throughput = document.getElementById('logs-throughput');
  const blocked = document.getElementById('logs-blocked');

  if (packets) packets.textContent = new Intl.NumberFormat('es-ES').format(traffic.totalPackets || 0);
  if (throughput) throughput.textContent = `${traffic.throughputMbps || 0} Mbps`;
  if (blocked) blocked.textContent = String(traffic.blockedAttempts || 0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLogsModule);
} else {
  initLogsModule();
}
