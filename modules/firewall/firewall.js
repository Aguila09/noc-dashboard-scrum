function initFirewallModule() {
  const rules = window.nocData?.firewallRules || [];
  const container = document.getElementById('firewall-rules');

  if (!container) return;

  container.innerHTML = rules
    .map((rule) => {
      const actionClass = rule.action === 'ALLOW' ? 'allow' : 'deny';
      return `
        <li>
          <span><strong>${rule.protocol}</strong> : ${rule.port} / ${rule.source}</span>
          <span class="rule-action ${actionClass}">${rule.action}</span>
        </li>
      `;
    })
    .join('');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFirewallModule);
} else {
  initFirewallModule();
}
