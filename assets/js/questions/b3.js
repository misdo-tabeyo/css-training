window.CSS_QUESTIONS.push({
  qid: 'B3',
  path: 'questions/b3.html',
  category: '余白 / ボックス',
  title: '枠線（border）',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: border',
  stageHtml: `<div class="b3-box">
  <p class="b3-text">borderで枠線を引きます。</p>
</div>`,
  answerHtml: `<div class="b3-box">
  <p class="b3-text">borderで枠線を引きます。</p>
</div>`,
  answerCss: `.b3-box {
  padding: 24px;
  background: #fff;
  border: 2px solid #0066cc;
}

.b3-text {
  color: #555;
}`
});
