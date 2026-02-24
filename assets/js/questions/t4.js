window.CSS_QUESTIONS.push({
  qid: 'T4',
  path: 'questions/t4.html',
  category: 'テキスト装飾',
  title: '箇条書きリスト',
  difficulty: '初級',
  stageClass: 'stage stage--light',
  hint: '学ぶこと: list-style-type / padding-left',
  stageHtml: `<div class="t4-feature">
  <h2 class="t4-title">サービスの特徴</h2>
  <ul class="t4-list">
    <li>初期費用無料</li>
    <li>24時間サポート対応</li>
    <li>30日間返金保証</li>
  </ul>
</div>`,
  answerHtml: `<div class="t4-feature">
  <h2 class="t4-title">サービスの特徴</h2>
  <ul class="t4-list">
    <li>初期費用無料</li>
    <li>24時間サポート対応</li>
    <li>30日間返金保証</li>
  </ul>
</div>`,
  answerCss: `.t4-title {
  font-size: 20px;
  font-weight: 700;
  color: #222;
}

.t4-list {
  padding-left: 20px;
  line-height: 2;
  color: #555;
  list-style-type: square;
}`
});
