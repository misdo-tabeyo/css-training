window.CSS_QUESTIONS.push({
  qid: 'M2',
  path: 'questions/m2.html',
  category: 'トランジション',
  title: 'カードの浮き上がり',
  difficulty: '中級',
  stageClass: 'stage stage--light2',
  hint: '学ぶこと: transform: translateY / 複数プロパティのtransition',
  stageHtml: `<div class="m2-card">
  <h4 class="m2-title">ホバーで浮き上がる</h4>
  <p class="m2-text">カードにマウスを乗せてみてください。</p>
</div>`,
  answerHtml: `<div class="m2-card">
  <h4 class="m2-title">ホバーで浮き上がる</h4>
  <p class="m2-text">カードにマウスを乗せてみてください。</p>
</div>`,
  answerCss: `.m2-card {
  max-width: 320px;
  padding: 24px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s, transform 0.2s;
}

.m2-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.m2-title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #222;
}

.m2-text {
  margin: 0;
  font-size: 14px;
  color: #555;
}`
});
