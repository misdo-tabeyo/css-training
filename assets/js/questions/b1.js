window.CSS_QUESTIONS.push({
  qid: 'B1',
  path: 'questions/b1.html',
  category: '余白 / ボックス',
  title: '内側の余白（padding）',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: padding / background',
  stageHtml: `<div class="b1-box">
  <p class="b1-text">paddingで内側に余白を作ります。</p>
</div>`,
  answerHtml: `<div class="b1-box">
  <p class="b1-text">paddingで内側に余白を作ります。</p>
</div>`,
  answerCss: `.b1-box {
  padding: 24px;
  background: #e8f4fc;
}

.b1-text {
  color: #555;
}`
});
