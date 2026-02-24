window.CSS_QUESTIONS.push({
  qid: 'B4',
  path: 'questions/b4.html',
  category: '余白 / ボックス',
  title: '角丸と影',
  difficulty: '初級',
  stageClass: 'stage stage--light2',
  hint: '学ぶこと: border-radius / box-shadow',
  stageHtml: `<div class="b4-card">
  <p class="b4-text">角を丸くして、影をつけるとカードらしくなります。</p>
</div>`,
  answerHtml: `<div class="b4-card">
  <p class="b4-text">角を丸くして、影をつけるとカードらしくなります。</p>
</div>`,
  answerCss: `.b4-card {
  padding: 24px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.b4-text {
  color: #555;
}`
});
