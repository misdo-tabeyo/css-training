window.CSS_QUESTIONS.push({
  qid: 'L4',
  path: 'questions/l4.html',
  category: 'レイアウト',
  title: 'グリッド（2列）',
  difficulty: '中級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: display: grid / grid-template-columns / gap',
  stageHtml: `<div class="l4-grid">
  <div class="l4-item">1</div>
  <div class="l4-item">2</div>
  <div class="l4-item">3</div>
  <div class="l4-item">4</div>
</div>`,
  answerHtml: `<div class="l4-grid">
  <div class="l4-item">1</div>
  <div class="l4-item">2</div>
  <div class="l4-item">3</div>
  <div class="l4-item">4</div>
</div>`,
  answerCss: `.l4-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.l4-item {
  padding: 32px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #555;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}`
});
