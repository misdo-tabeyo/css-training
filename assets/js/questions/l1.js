window.CSS_QUESTIONS.push({
  qid: 'L1',
  path: 'questions/l1.html',
  category: 'レイアウト',
  title: '横並び（Flexbox）',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: display: flex / gap / align-items',
  stageHtml: `<div class="l1-row">
  <div class="l1-icon">👤</div>
  <div class="l1-info">
    <p class="l1-name">山田 花子</p>
    <p class="l1-email">hanako@example.com</p>
  </div>
</div>`,
  answerHtml: `<div class="l1-row">
  <div class="l1-icon">👤</div>
  <div class="l1-info">
    <p class="l1-name">山田 花子</p>
    <p class="l1-email">hanako@example.com</p>
  </div>
</div>`,
  answerCss: `.l1-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.l1-icon {
  font-size: 40px;
}

.l1-name {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
  color: #222;
}

.l1-email {
  margin: 0;
  font-size: 14px;
  color: #888;
}`
});
