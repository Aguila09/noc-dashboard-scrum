window.nocData = {
  meta: {
    version: '1.0',
    generatedAt: '2026-10-21T00:00:00Z',
    environment: 'sandbox',
    owner: 'NOC Operations',
    region: 'Santiago Central'
  },
  summary: {
    systemHealth: 'estable',
    activeIncidents: 3,
    criticalNodes: 1,
    segmentation: 4
  },
  topology: {
    title: 'Topología de red',
    nodes: [
      { id: 'N1', name: 'Core Switch', zone: 'DMZ', status: 'online', ip: '10.0.0.1' },
      { id: 'N2', name: 'Firewall Edge', zone: 'Perimeter', status: 'online', ip: '172.16.0.1' },
      { id: 'N3', name: 'Proxy', zone: 'DMZ', status: 'warning', ip: '10.0.0.22' },
      { id: 'N4', name: 'AP Internal', zone: 'LAN', status: 'online', ip: '10.1.0.17' },
      { id: 'N5', name: 'Sensor IDS', zone: 'LAN', status: 'online', ip: '10.1.0.33' },
      { id: 'N6', name: 'Server DB', zone: 'Core', status: 'critical', ip: '10.5.0.9' }
    ],
    links: [
      ['N1', 'N2'],
      ['N1', 'N3'],
      ['N1', 'N4'],
      ['N1', 'N5'],
      ['N1', 'N6']
    ]
  },
  alerts: [
    { id: 'A-101', severity: 'Alta', source: 'IDS-01', message: 'Intento de escaneo en puerto 22' },
    { id: 'A-102', severity: 'Media', source: 'Proxy-02', message: 'Fallo de autenticación repetida' },
    { id: 'A-103', severity: 'Baja', source: 'Firewall', message: 'Bloqueo de tráfico externo sospechoso' }
  ],
  traffic: {
    totalPackets: 128454,
    throughputMbps: 482.3,
    blockedAttempts: 37,
    activeConnections: 128,
    latencyMs: 24
  },
  firewallRules: [
    { id: 1, action: 'ALLOW', protocol: 'TCP', port: 443, source: 'Any' },
    { id: 2, action: 'ALLOW', protocol: 'TCP', port: 22, source: 'AdminNet' },
    { id: 3, action: 'DENY', protocol: 'UDP', port: 161, source: 'Any' },
    { id: 4, action: 'ALLOW', protocol: 'ICMP', port: '*', source: 'Internal' },
    { id: 5, action: 'DENY', protocol: 'TCP', port: 3389, source: 'Any' }
  ],
  hashSamples: {
    sha256: 'c9b6b4f8a8dbb0f1f5a2ce2ce8d95cc1ed5a7d1cf79531e8d0caae1cf6b9a4c1',
    md5: '8b1a9953c4611296a827abf8c47804d7',
    sha1: '4c5a4c1f7d222d0d2d5d0d4c8c0f0f7d6f845f3'
  }
};
