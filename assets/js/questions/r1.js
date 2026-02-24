window.CSS_QUESTIONS.push({
  qid: 'R1',
  path: 'questions/r1.html',
  category: 'レスポンシブ',
  title: '2列から1列へ',
  difficulty: '中級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: @media (max-width: 600px) / grid-template-columns: 1fr',
  stageHtml: `<div class="r1-grid">
  <div class="r1-item">カード1</div>
  <div class="r1-item">カード2</div>
</div>`,
  answerHtml: `<div class="r1-grid">
  <div class="r1-item">カード1</div>
  <div class="r1-item">カード2</div>
</div>`,
  answerCss: `.r1-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.r1-item {
  padding: 24px;
  text-align: center;
  font-weight: 600;
  color: #555;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .r1-grid {
    grid-template-columns: 1fr;
  }
}`
});
