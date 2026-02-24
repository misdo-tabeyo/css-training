window.CSS_QUESTIONS.push({
  qid: 'U2',
  path: 'questions/u2.html',
  category: 'UIパーツ',
  title: '入力フィールド',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: width: 100% / outline / :focus',
  stageHtml: `<div class="u2-form">
  <label class="u2-label">メールアドレス</label>
  <input class="u2-input" type="email" placeholder="example@mail.com" />
</div>`,
  answerHtml: `<div class="u2-form">
  <label class="u2-label">メールアドレス</label>
  <input class="u2-input" type="email" placeholder="example@mail.com" />
</div>`,
  answerCss: `.u2-label {
  width: 100%;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

.u2-input {
  width: 100%;
  max-width: 320px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.u2-input:focus {
  outline: none;
  border-color: #0066cc;
}`
});
