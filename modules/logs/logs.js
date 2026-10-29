function initLogsModule() {
  const traffic = window.nocData?.traffic || {};

  const packets = document.getElementById('logs-packets');
  const throughput = document.getElementById('logs-throughput');
  const blocked = document.getElementById('logs-blocked');

  const totalPackets = Number(traffic.totalPackets || 0);
  const throughputValue = Number(traffic.throughputMbps || 0);
  const blockedAttempts = Number(traffic.blockedAttempts || 0);

  if (packets) packets.textContent = String(totalPackets);
  if (throughput) throughput.textContent = `${throughputValue.toFixed(1)} Mbps`;
  if (blocked) blocked.textContent = String(blockedAttempts);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLogsModule);
} else {
  initLogsModule();
}