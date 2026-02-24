window.CSS_QUESTIONS.push({
  qid: 'P2',
  path: 'questions/p2.html',
  category: '位置',
  title: 'スクロール固定',
  difficulty: '中級',
  stageClass: 'stage stage--light2',
  hint: '学ぶこと: position: sticky / top / overflow-y: auto',
  stageHtml: `<div class="p2-box">
  <header class="p2-header">ヘッダー</header>
  <div class="p2-content">
    <p>スクロールしてみてください。</p>
    <p>ヘッダーは上部に固定されます。</p>
    <p>コンテンツ...</p>
    <p>コンテンツ...</p>
    <p>コンテンツ...</p>
    <p>コンテンツ...</p>
  </div>
</div>`,
  answerHtml: `<div class="p2-box">
  <header class="p2-header">ヘッダー</header>
  <div class="p2-content">
    <p>スクロールしてみてください。</p>
    <p>ヘッダーは上部に固定されます。</p>
    <p>コンテンツ...</p>
    <p>コンテンツ...</p>
    <p>コンテンツ...</p>
    <p>コンテンツ...</p>
  </div>
</div>`,
  answerCss: `.p2-box {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.p2-header {
  position: sticky;
  top: 0;
  padding: 16px;
  font-weight: 600;
  color: #fff;
  background: #0066cc;
}

.p2-content {
  padding: 16px;
  color: #555;
  line-height: 1.8;
}`
});
