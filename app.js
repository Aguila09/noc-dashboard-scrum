const moduleConfig = {
  map: {
    label: 'Topología',
    html: 'modules/map/map.html',
    css: 'modules/map/map.css',
    js: 'modules/map/map.js'
  },
  crypto: {
    label: 'Criptografía',
    html: 'modules/crypto/crypto.html',
    css: 'modules/crypto/crypto.css',
    js: 'modules/crypto/crypto.js'
  },
  logs: {
    label: 'Logs',
    html: 'modules/logs/logs.html',
    css: 'modules/logs/logs.css',
    js: 'modules/logs/logs.js'
  },
  firewall: {
    label: 'Firewall',
    html: 'modules/firewall/firewall.html',
    css: 'modules/firewall/firewall.css',
    js: 'modules/firewall/firewall.js'
  },
  alerts: {
    label: 'Alertas',
    html: 'modules/alerts/alerts.html',
    css: 'modules/alerts/alerts.css',
    js: 'modules/alerts/alerts.js'
  },
  core: {
    label: 'Core / Datos',
    html: 'modules/core/core.html',
    css: 'modules/core/core.css',
    js: 'modules/core/core.js'
  }
};

let activeModuleName = 'map';

function setActiveNav(moduleName) {
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach((button) => {
    const isActive = button.dataset.module === moduleName;
    button.classList.toggle('active', isActive);
  });
}

function loadCss(href) {
  const existing = document.querySelector(`link[data-module-css="${href}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.moduleCss = href;
  document.head.appendChild(link);
}

function removeOldModuleAssets() {
  const oldScript = document.querySelector('script[data-module-script]');
  if (oldScript) oldScript.remove();

  const oldStyles = document.querySelectorAll('link[data-module-css]');
  oldStyles.forEach((style) => style.remove());
}

async function loadModule(moduleName) {
  const config = moduleConfig[moduleName];
  if (!config) return;

  activeModuleName = moduleName;
  setActiveNav(moduleName);

  const appContent = document.getElementById('app-content');
  const response = await fetch(config.html);
  const html = await response.text();

  removeOldModuleAssets();
  appContent.innerHTML = html;
  loadCss(config.css);

  const script = document.createElement('script');
  script.src = config.js;
  script.dataset.moduleScript = moduleName;
  document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      loadModule(button.dataset.module);
    });
  });

  loadModule(activeModuleName);
});
