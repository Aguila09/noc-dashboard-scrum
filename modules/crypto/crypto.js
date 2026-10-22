function initCryptoModule() {
  const hashes = window.nocData?.hashSamples || {};

  const sha256 = document.getElementById('crypto-sha256');
  const md5 = document.getElementById('crypto-md5');
  const sha1 = document.getElementById('crypto-sha1');

  if (sha256) sha256.textContent = hashes.sha256 || 'Sin dato';
  if (md5) md5.textContent = hashes.md5 || 'Sin dato';
  if (sha1) sha1.textContent = hashes.sha1 || 'Sin dato';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCryptoModule);
} else {
  initCryptoModule();
}
