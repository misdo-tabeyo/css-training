window.CSS_QUESTIONS.push({
  qid: 'L3',
  path: 'questions/l3.html',
  category: 'レイアウト',
  title: '2カラム（固定＋可変）',
  difficulty: '中級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: flex: 1（残り幅を埋める）',
  stageHtml: `<div class="l3-layout">
  <aside class="l3-sidebar">サイドバー</aside>
  <main class="l3-content">メインコンテンツ</main>
</div>`,
  answerHtml: `<div class="l3-layout">
  <aside class="l3-sidebar">サイドバー</aside>
  <main class="l3-content">メインコンテンツ</main>
</div>`,
  answerCss: `.l3-layout {
  display: flex;
  gap: 24px;
}

.l3-sidebar {
  width: 200px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #555;
}

.l3-content {
  flex: 1;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #555;
}`
});
