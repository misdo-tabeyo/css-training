window.CSS_QUESTIONS.push({
  qid: 'B2',
  path: 'questions/b2.html',
  category: '余白 / ボックス',
  title: '外側の余白（margin）',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: margin-top（要素の外側に余白を作る）',
  stageHtml: `<div class="b2-wrapper">
  <div class="b2-box">1つ目のボックス</div>
  <div class="b2-box b2-box--second">2つ目のボックス</div>
</div>`,
  answerHtml: `<div class="b2-wrapper">
  <div class="b2-box">1つ目のボックス</div>
  <div class="b2-box b2-box--second">2つ目のボックス</div>
</div>`,
  answerCss: `.b2-wrapper {
  width: 100%;
}

.b2-box {
  padding: 20px;
  background: #e8f4fc;
  color: #555;
}

.b2-box--second {
  margin-top: 16px;
}`
});
