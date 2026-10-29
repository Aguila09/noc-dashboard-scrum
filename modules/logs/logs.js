function initLogsModule() {
  const traffic = window.nocData?.traffic || {};

  const packets = document.getElementById('logs-packets');
  const throughput = document.getElementById('logs-throughput');
  const blocked = document.getElementById('logs-blocked');
 
  const connections = document.getElementById('logs-connections');
  const latency = document.getElementById('logs-latency');
  const health = document.getElementById('logs-health');
  const meter = document.getElementById('logs-progress');

  const totalPackets = Number(traffic.totalPackets || 0);
  const throughputValue = Number(traffic.throughputMbps || 0);
  const blockedAttempts = Number(traffic.blockedAttempts || 0);
 
  const activeConnections = Number(traffic.activeConnections || 0);
  const latencyValue = Number(traffic.latencyMs || 0);

 
  if (packets) packets.textContent = new Intl.NumberFormat('es-ES').format(totalPackets);
  if (throughput) throughput.textContent = `${throughputValue.toFixed(1)} Mbps`;
  if (blocked) blocked.textContent = String(blockedAttempts);
  
  
  if (connections) connections.textContent = String(activeConnections);
  if (latency) latency.textContent = `${latencyValue} ms`;

 
  const blockRatio = totalPackets ? (blockedAttempts / totalPackets) * 100 : 0;
  const meterWidth = Math.min(Math.max(blockRatio * 10, 15), 100); // Lógica de ejemplo

  if (meter) meter.style.width = `${meterWidth}%`;
  if (health) {
    health.textContent = blockedAttempts > 50 ? 'Atención' : 'Estable';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLogsModule);
} else {
  initLogsModule();
}