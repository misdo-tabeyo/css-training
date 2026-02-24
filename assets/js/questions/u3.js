window.CSS_QUESTIONS.push({
  qid: 'U3',
  path: 'questions/u3.html',
  category: 'UIパーツ',
  title: '縦並びメニュー',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: list-style: none（リストの点を消す）',
  stageHtml: `<ul class="u3-menu">
  <li class="u3-item">アカウント設定</li>
  <li class="u3-item">通知設定</li>
  <li class="u3-item">ログアウト</li>
</ul>`,
  answerHtml: `<ul class="u3-menu">
  <li class="u3-item">アカウント設定</li>
  <li class="u3-item">通知設定</li>
  <li class="u3-item">ログアウト</li>
</ul>`,
  answerCss: `.u3-menu {
  max-width: 280px;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.u3-item {
  padding: 16px;
  font-size: 14px;
  color: #555;
}`
});
