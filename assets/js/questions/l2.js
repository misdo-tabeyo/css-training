window.CSS_QUESTIONS.push({
  qid: 'L2',
  path: 'questions/l2.html',
  category: 'レイアウト',
  title: '両端揃え・中央揃え',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: justify-content: space-between / justify-content: center',
  stageHtml: `<header class="l2-header">
  <div class="l2-logo">ロゴ</div>
  <nav class="l2-nav">
    <a class="l2-link" href="#">メニュー1</a>
    <a class="l2-link" href="#">メニュー2</a>
  </nav>
</header>
<div class="l2-actions">
  <button class="l2-btn">キャンセル</button>
  <button class="l2-btn l2-btn--primary">保存</button>
</div>`,
  answerHtml: `<header class="l2-header">
  <div class="l2-logo">ロゴ</div>
  <nav class="l2-nav">
    <a class="l2-link" href="#">メニュー1</a>
    <a class="l2-link" href="#">メニュー2</a>
  </nav>
</header>
<div class="l2-actions">
  <button class="l2-btn">キャンセル</button>
  <button class="l2-btn l2-btn--primary">保存</button>
</div>`,
  answerCss: `.l2-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
}

.l2-logo {
  font-weight: 700;
  color: #222;
}

.l2-nav {
  display: flex;
  gap: 16px;
}

.l2-link {
  color: #555;
  text-decoration: none;
}

.l2-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.l2-btn {
  padding: 10px 20px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
}

.l2-btn--primary {
  color: #fff;
  background: #0066cc;
  border-color: #0066cc;
}`
});
