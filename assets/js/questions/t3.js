window.CSS_QUESTIONS.push({
  qid: 'T3',
  path: 'questions/t3.html',
  category: 'テキスト装飾',
  title: 'リンクとホバー',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: text-decoration / color / :hover',
  stageHtml: `<nav class="t3-nav">
  <a class="t3-link" href="#">ホーム</a>
  <a class="t3-link" href="#">サービス</a>
  <a class="t3-link" href="#">お問い合わせ</a>
</nav>`,
  answerHtml: `<nav class="t3-nav">
  <a class="t3-link" href="#">ホーム</a>
  <a class="t3-link" href="#">サービス</a>
  <a class="t3-link" href="#">お問い合わせ</a>
</nav>`,
  answerCss: `.t3-link {
  color: #555;
  text-decoration: none;
}

.t3-link:hover {
  color: #0066cc;
  text-decoration: underline;
}`
});
