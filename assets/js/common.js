(function () {
  'use strict';

  let currentModalCode = '';
  let toastTimer = null;

  function getTextFromSource(sourceId) {
    const el = document.getElementById(sourceId);
    if (!el) return '';

    if (el.tagName === 'TEXTAREA') {
      return el.value;
    }

    return el.textContent || '';
  }

  function ensureModal() {
    if (document.getElementById('modalOverlay')) return;

    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="modal-overlay" id="modalOverlay">
        <div class="modal">
          <div class="modal__header">
            <h3 class="modal__title" id="modalTitle">解答CSS</h3>
            <button class="modal__close" id="modalCloseBtn" aria-label="閉じる">&times;</button>
          </div>
          <div class="modal__body">
            <pre class="modal__code" id="modalCode"></pre>
            <button class="modal__copy-btn" id="modalCopyBtn">CSSをコピー</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal.firstElementChild);

    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    const copyBtn = document.getElementById('modalCopyBtn');

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });

    copyBtn.addEventListener('click', copyModalCode);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  function setCopiedState(btn, defaultLabel) {
    if (!btn) return;

    btn.textContent = 'コピーしました!';
    btn.classList.add('copied');

    setTimeout(() => {
      btn.textContent = defaultLabel;
      btn.classList.remove('copied');
    }, 2000);
  }

  function ensureToast() {
    let toast = document.getElementById('copyToast');
    if (toast) return toast;

    toast = document.createElement('div');
    toast.id = 'copyToast';
    toast.className = 'copy-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = 'コピーしました';
    document.body.appendChild(toast);
    return toast;
  }

  function showCopyToast(message) {
    const toast = ensureToast();
    toast.textContent = message || 'コピーしました';
    toast.classList.add('show');

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      toastTimer = null;
    }, 1400);
  }

  function toggleHint(btn) {
    const content = btn.nextElementSibling;
    const isOpen = content.classList.toggle('open');
    btn.textContent = isOpen ? 'ヒントを隠す ▲' : 'ヒントを見る ▼';
  }

  async function copyText(sourceId, triggerBtn, defaultLabel) {
    const text = getTextFromSource(sourceId);
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopiedState(triggerBtn, defaultLabel || 'コピー');
      showCopyToast('コピーしました');
    } catch (_) {
      // クリップボード未対応時は何もしない
    }
  }

  function openInCodePen(sourceId) {
    const html = getTextFromSource(sourceId);
    if (!html) return;

    const penData = JSON.stringify({
      html,
      css: '/* ここにCSSを書いてください */\n',
      css_starter: 'neither',
      editors: '110'
    });

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://codepen.io/pen/define';
    form.target = '_blank';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = penData;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  function showCss(sourceId, title) {
    ensureModal();

    currentModalCode = getTextFromSource(sourceId);
    document.getElementById('modalTitle').textContent = title || '解答CSS';
    document.getElementById('modalCode').textContent = currentModalCode;

    const copyBtn = document.getElementById('modalCopyBtn');
    copyBtn.textContent = 'CSSをコピー';
    copyBtn.classList.remove('copied');

    document.getElementById('modalOverlay').classList.add('active');
  }

  function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
  }

  async function copyModalCode() {
    if (!currentModalCode) return;

    try {
      await navigator.clipboard.writeText(currentModalCode);
      const btn = document.getElementById('modalCopyBtn');
      setCopiedState(btn, 'CSSをコピー');
      showCopyToast('CSSをコピーしました');
    } catch (_) {
      // クリップボード未対応時は何もしない
    }
  }

  window.toggleHint = toggleHint;
  window.copyText = copyText;
  window.openInCodePen = openInCodePen;
  window.showCss = showCss;
  window.showCopyToast = showCopyToast;

  ensureModal();
})();
