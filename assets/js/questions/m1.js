window.CSS_QUESTIONS.push({
  qid: 'M1',
  path: 'questions/m1.html',
  category: 'トランジション',
  title: 'ボタンの色変化',
  difficulty: '中級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: transition（なめらかに変化）',
  stageHtml: `<button class="m1-btn">ホバーしてみて</button>`,
  answerHtml: `<button class="m1-btn">ホバーしてみて</button>`,
  answerCss: `.m1-btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #0066cc;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.m1-btn:hover {
  background: #0052a3;
}`
});
