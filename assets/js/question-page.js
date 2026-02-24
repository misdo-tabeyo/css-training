(function () {
  'use strict';

  const difficulties = {
    初級: 'difficulty--beginner',
    中級: 'difficulty--intermediate'
  };

  function renderQuestion(question) {
    const app = document.getElementById('app');
    if (!app) return;

    const difficultyClass = difficulties[question.difficulty] || 'difficulty--beginner';

    app.innerHTML = `
      <section class="question question--single" data-qid="${question.qid}">
        <div class="question__bar">
          <div class="qid">${question.qid}</div>
          <span class="difficulty ${difficultyClass}">${question.difficulty}</span>
          <div class="chip">${question.title}</div>
        </div>

        <div class="${question.stageClass}">
          ${question.stageHtml}
        </div>

        <button class="hint-toggle" onclick="toggleHint(this)">ヒントを見る ▼</button>
        <div class="hint-content">${question.hint}</div>

        <div class="question__actions">
          <button class="action-btn action-btn--codepen" onclick="openInCodePen('answerHtml')">CodePenで開く</button>
          <button class="action-btn" onclick="copyText('answerHtml', this, 'HTMLをコピー')">HTMLをコピー</button>
          <button class="action-btn" onclick="showCss('answerCss', '${question.qid} - 解答CSS')">解答CSSを見る</button>
        </div>

        <textarea id="answerHtml" class="hidden-source"></textarea>
        <textarea id="answerCss" class="hidden-source"></textarea>
      </section>
    `;

    const answerHtml = document.getElementById('answerHtml');
    const answerCss = document.getElementById('answerCss');
    if (answerHtml) answerHtml.value = question.answerHtml;
    if (answerCss) answerCss.value = question.answerCss;
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
