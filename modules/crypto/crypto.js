async function sha256Hex(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}



async function sha1Hex(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function looksLikeHash(value) {
  return /^[a-f0-9]{32,64}$/i.test(value);
}

function initCryptoModule() {
  const hashes = window.nocData?.hashSamples || {};

  const sha256 = document.getElementById('crypto-sha256');
  const md5 = document.getElementById('crypto-md5');
  const sha1 = document.getElementById('crypto-sha1');
  const input = document.getElementById('crypto-input');
  const checkButton = document.getElementById('crypto-check');
  const result = document.getElementById('crypto-result');

  if (sha256) sha256.textContent = hashes.sha256 || 'Sin dato';
  if (md5) md5.textContent = hashes.md5 || 'Sin dato';
  if (sha1) sha1.textContent = hashes.sha1 || 'Sin dato';

  if (input) {
    input.value = '';
    input.addEventListener('focus', () => {
      if (input.value && looksLikeHash(input.value.trim())) {
        input.value = '';
      }
    });
  }

  if (!checkButton || !result) return;

  checkButton.addEventListener('click', async () => {
    const value = input ? input.value.trim() : '';
    if (!value) {
      result.textContent = 'Ingrese un texto antes de validar.';
      result.style.color = '#fbbf24';
      return;
    }

    if (looksLikeHash(value)) {
      result.textContent = 'Ingresa texto plano para comparar. Los hashes no son legibles.';
      result.style.color = '#fbbf24';
      return;
    }

    const sha256Value = await sha256Hex(value);
    const sha1Value = await sha1Hex(value);
    const matches = {
      sha256: sha256Value === (hashes.sha256 || '').toLowerCase(),
      sha1: sha1Value === (hashes.sha1 || '').toLowerCase()
    };

    result.textContent = `SHA-256: ${matches.sha256 ? 'coincide' : 'no coincide'} • SHA-1: ${matches.sha1 ? 'coincide' : 'no coincide'}`;
    result.style.color = matches.sha256 || matches.sha1 ? '#34d399' : '#fbbf24';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCryptoModule);
} else {
  initCryptoModule();
}
