window.CSS_QUESTIONS.push({
  qid: 'R2',
  path: 'questions/r2.html',
  category: 'レスポンシブ',
  title: '横から縦へ',
  difficulty: '中級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: @media / flex-direction: column',
  stageHtml: `<nav class="r2-nav">
  <a class="r2-link" href="#">ホーム</a>
  <a class="r2-link" href="#">サービス</a>
  <a class="r2-link" href="#">お問い合わせ</a>
</nav>`,
  answerHtml: `<nav class="r2-nav">
  <a class="r2-link" href="#">ホーム</a>
  <a class="r2-link" href="#">サービス</a>
  <a class="r2-link" href="#">お問い合わせ</a>
</nav>`,
  answerCss: `.r2-nav {
  display: flex;
  gap: 16px;
}

.r2-link {
  padding: 10px 16px;
  font-size: 14px;
  color: #555;
  text-decoration: none;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
}

@media (max-width: 600px) {
  .r2-nav {
    flex-direction: column;
  }
}`
});
