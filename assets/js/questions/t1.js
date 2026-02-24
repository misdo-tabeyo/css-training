window.CSS_QUESTIONS.push({
  qid: 'T1',
  path: 'questions/t1.html',
  category: 'テキスト装飾',
  title: '文字の大きさと色',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: font-size / font-weight / color / line-height',
  stageHtml: `<article class="t1-article">
  <h1 class="t1-title">CSSの基本を学ぼう</h1>
  <p class="t1-body">CSSはWebページの見た目を整えるための言語です。文字の大きさや色、余白などを自由に変更できます。</p>
</article>`,
  answerHtml: `<article class="t1-article">
  <h1 class="t1-title">CSSの基本を学ぼう</h1>
  <p class="t1-body">CSSはWebページの見た目を整えるための言語です。文字の大きさや色、余白などを自由に変更できます。</p>
</article>`,
  answerCss: `.t1-title {
  font-size: 28px;
  font-weight: 700;
  color: #222;
}

.t1-body {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}`
});
