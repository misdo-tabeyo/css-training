window.CSS_QUESTIONS.push({
  qid: 'P1',
  path: 'questions/p1.html',
  category: '位置',
  title: '右上に配置',
  difficulty: '中級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: position: relative / position: absolute / top / right',
  stageHtml: `<div class="p1-wrapper">
  <div class="p1-icon">🔔</div>
  <span class="p1-badge">3</span>
</div>`,
  answerHtml: `<div class="p1-wrapper">
  <div class="p1-icon">🔔</div>
  <span class="p1-badge">3</span>
</div>`,
  answerCss: `.p1-wrapper {
  position: relative;
  display: inline-block;
}

.p1-icon {
  font-size: 32px;
}

.p1-badge {
  position: absolute;
  top: -4px;
  right: -8px;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  color: #fff;
  background: #e53935;
  border-radius: 100px;
}`
});
