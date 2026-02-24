(function () {
  'use strict';

  // 問題の順序（カテゴリ順）
  const QUESTION_ORDER = [
    'T1', 'T2', 'T3', 'T4',
    'B1', 'B2', 'B3', 'B4', 'B5',
    'U1', 'U2', 'U3',
    'L1', 'L2', 'L3', 'L4',
    'P1', 'P2', 'P3',
    'R1', 'R2',
    'M1', 'M2'
  ];

  const difficulties = {
    初級: 'difficulty--beginner',
    中級: 'difficulty--intermediate'
  };

  function extractColorCodes(cssText) {
    if (!cssText) return [];
    const matches = cssText.match(/#(?:[0-9a-fA-F]{3,8})\b|rgba?\([^\)]+\)/g) || [];
    const seen = new Set();
    const colors = [];

    matches.forEach((color) => {
      const normalized = color.trim();
      if (seen.has(normalized)) return;
      seen.add(normalized);
      colors.push(normalized);
    });

    return colors;
  }

  function renderColorGuide(answerCss) {
    const colors = extractColorCodes(answerCss);
    if (colors.length === 0) return '';

    return `
      <div class="color-guide">
        <div class="color-guide__title">使用カラーコード（クリックでコピー）</div>
        <div class="color-guide__list">
          ${colors
            .map(
              (color) => `
                <button type="button" class="color-guide__item" data-color="${color}" aria-label="${color} をコピー">
                  <span class="color-guide__swatch" style="background:${color}"></span>
                  <span class="color-guide__code">${color}</span>
                </button>
              `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  function bindColorGuideCopy(root) {
    if (!root) return;

    root.addEventListener('click', async (e) => {
      const item = e.target.closest('.color-guide__item');
      if (!item) return;

      const color = item.dataset.color || '';
      if (!color) return;

      try {
        await navigator.clipboard.writeText(color);
        item.classList.add('copied');
        if (typeof window.showCopyToast === 'function') {
          window.showCopyToast(`${color} をコピーしました`);
        }

        setTimeout(() => {
          item.classList.remove('copied');
        }, 1200);
      } catch (_) {
        // クリップボード未対応時は何もしない
      }
    });
  }

  function renderQuestion(question) {
    const app = document.getElementById('app');
    if (!app) return;

    const difficultyClass = difficulties[question.difficulty] || 'difficulty--beginner';
    const colorGuideHtml = renderColorGuide(question.answerCss);
    const prevNextNavHtml = renderPrevNextNav(question.qid);

    app.innerHTML = `
      <section class="question question--single" data-qid="${question.qid}">
        <div class="question__bar">
          <div class="qid-title">
            <span class="qid">${question.qid}</span>
            <span class="qid-name">${question.title}</span>
          </div>
          <span class="difficulty ${difficultyClass}">${question.difficulty}</span>
        </div>

        <div class="${question.stageClass}">
          ${question.stageHtml}
        </div>

        ${colorGuideHtml}

        <button class="hint-toggle" onclick="toggleHint(this)">ヒントを見る ▼</button>
        <div class="hint-content">
          <div class="hint-content__text">${question.hint}</div>
        </div>

        <div class="question__actions">
          <button class="action-btn action-btn--codepen" onclick="openInCodePen('answerHtml')">CodePenで開く</button>
          <button class="action-btn" onclick="copyText('answerHtml', this, 'HTMLをコピー')">HTMLをコピー</button>
          <button class="action-btn" onclick="showCss('answerCss', '${question.qid} - 解答CSS')">解答CSSを見る</button>
        </div>

        ${prevNextNavHtml}

        <textarea id="answerHtml" class="hidden-source"></textarea>
        <textarea id="answerCss" class="hidden-source"></textarea>
      </section>
    `;

    const answerHtml = document.getElementById('answerHtml');
    const answerCss = document.getElementById('answerCss');
    if (answerHtml) answerHtml.value = question.answerHtml;
    if (answerCss) answerCss.value = question.answerCss;

    const prevStyle = document.getElementById('questionAnswerStyle');
    if (prevStyle) prevStyle.remove();

    const style = document.createElement('style');
    style.id = 'questionAnswerStyle';
    style.textContent = question.answerCss || '';
    document.head.appendChild(style);

    bindColorGuideCopy(app);
  }

  function renderPrevNextNav(currentQid) {
    const index = QUESTION_ORDER.indexOf(currentQid.toUpperCase());
    if (index === -1) return '';

    const prevQid = index > 0 ? QUESTION_ORDER[index - 1] : null;
    const nextQid = index < QUESTION_ORDER.length - 1 ? QUESTION_ORDER[index + 1] : null;

    const prevLink = prevQid
      ? `<a class="prev-next-nav__btn prev-next-nav__btn--prev" href="${prevQid.toLowerCase()}.html">← 前の問題（${prevQid}）</a>`
      : `<span class="prev-next-nav__btn prev-next-nav__btn--disabled">← 前の問題</span>`;

    const nextLink = nextQid
      ? `<a class="prev-next-nav__btn prev-next-nav__btn--next" href="${nextQid.toLowerCase()}.html">次の問題（${nextQid}）→</a>`
      : `<span class="prev-next-nav__btn prev-next-nav__btn--disabled">次の問題 →</span>`;

    return `
      <nav class="prev-next-nav">
        ${prevLink}
        ${nextLink}
      </nav>
    `;
  }

  function renderNotFound() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = '<p class="notfound">問題が見つかりませんでした。トップページに戻ってください。</p>';
  }

  function init() {
    const qid = document.body.dataset.qid;
    const data = window.CSS_QUESTIONS || [];
    const question = data.find((q) => q.qid === qid);

    if (!question) {
      renderNotFound();
      return;
    }

    document.title = `${question.qid} - ${question.title} | CSS練習`;
    const breadcrumb = document.getElementById('questionBreadcrumb');
    if (breadcrumb) {
      breadcrumb.textContent = `${question.category} / ${question.qid}`;
    }

    renderQuestion(question);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
