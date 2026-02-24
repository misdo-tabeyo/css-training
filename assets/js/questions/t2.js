window.CSS_QUESTIONS.push({
  qid: 'T2',
  path: 'questions/t2.html',
  category: 'テキスト装飾',
  title: 'テキストの中央揃え',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: text-align: center',
  stageHtml: `<div class="t2-hero">
  <h1 class="t2-title">ようこそ</h1>
  <p class="t2-lead">これはヒーローセクションのサンプルです。</p>
</div>`,
  answerHtml: `<div class="t2-hero">
  <h1 class="t2-title">ようこそ</h1>
  <p class="t2-lead">これはヒーローセクションのサンプルです。</p>
</div>`,
  answerCss: `.t2-hero {
  text-align: center;
}

.t2-title {
  font-size: 32px;
  font-weight: 700;
  color: #222;
}

.t2-lead {
  font-size: 16px;
  color: #555;
}`
});
