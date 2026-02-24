(function () {
  'use strict';

  const categoryOrder = [
    'テキスト装飾',
    '余白 / ボックス',
    'UIパーツ',
    'レイアウト',
    '位置',
    'レスポンシブ',
    'トランジション'
  ];

  const difficultyClassMap = {
    初級: 'difficulty--beginner',
    中級: 'difficulty--intermediate'
  };

  function render() {
    const container = document.getElementById('categoryContainer');
    if (!container) return;

    const questions = window.CSS_QUESTIONS || [];

    const grouped = categoryOrder.map((category) => {
      return {
        category,
        items: questions.filter((q) => q.category === category)
      };
    });

    container.innerHTML = grouped
      .filter((group) => group.items.length > 0)
      .map(
        (group) => `
          <section class="category">
            <div class="category__head">
              <h2 class="category__name">${group.category}</h2>
              <div class="category__rule"></div>
            </div>
            <div class="grid">
              ${group.items
                .map(
                  (q) => `
                    <article class="question" data-qid="${q.qid}">
                      <div class="question__bar">
                        <div class="qid">${q.qid}</div>
                        <span class="difficulty ${difficultyClassMap[q.difficulty] || 'difficulty--beginner'}">${q.difficulty}</span>
                        <div class="chip">${q.title}</div>
                      </div>
                      <a class="go-link" href="${q.path}">この問題を開く →</a>
                    </article>
                  `
                )
                .join('')}
            </div>
          </section>
        `
      )
      .join('');
  }

  document.addEventListener('DOMContentLoaded', render);
})();
