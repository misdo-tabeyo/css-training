window.CSS_QUESTIONS = [
  {
    qid: 'T1',
    path: 'questions/t1.html',
    category: 'テキスト装飾',
    title: '見出し＋段落',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: 見出し・導入文・本文の強弱を作る。使うプロパティ: font-size / font-weight / line-height / color',
    stageHtml: `<div class="text-sample">
  <h1 class="text-sample-title">タイポグラフィ練習</h1>
  <p class="text-sample-lead">同じ文章でも、文字サイズ・太さ・行間を変えるだけで印象は大きく変わります。まずは導入文として、少し目立つ読みやすい文章を作ってみましょう。</p>
  <p class="text-sample-body">この問題では、本文をあえて長文にしています。行間が狭すぎると文字が詰まって読みにくくなり、逆に広すぎると視線が行ごとに飛びやすくなります。適切なline-heightを設定して、自然に読み進められる見た目を作ってください。文字色の違いも使い、見出し・導入文・本文の役割がひと目で伝わる状態を目指します。</p>
</div>`,
    answerHtml: `<div class="text-sample">
  <h1 class="text-sample-title">タイポグラフィ練習</h1>
  <p class="text-sample-lead">同じ文章でも、文字サイズ・太さ・行間を変えるだけで印象は大きく変わります。まずは導入文として、少し目立つ読みやすい文章を作ってみましょう。</p>
  <p class="text-sample-body">この問題では、本文をあえて長文にしています。行間が狭すぎると文字が詰まって読みにくくなり、逆に広すぎると視線が行ごとに飛びやすくなります。適切なline-heightを設定して、自然に読み進められる見た目を作ってください。文字色の違いも使い、見出し・導入文・本文の役割がひと目で伝わる状態を目指します。</p>
</div>`,
    answerCss: `.text-sample-title {
  font-size: 44px;
  font-weight: 900;
  color: #1d4ed8;
}

.text-sample-lead {
  color: #d97706;
  font-size: 24px;
  line-height: 1.7;
}

.text-sample-body {
  font-size: 18px;
  line-height: 2.8;
  color: #059669;
}`
  },
  {
    qid: 'T2',
    path: 'questions/t2.html',
    category: 'テキスト装飾',
    title: 'リンク文字（通常/現在地/ホバー）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: リンクの通常・現在地・ホバーを作り分ける。使うプロパティ: color / font-weight / text-decoration / text-underline-offset / :hover（「ブログ」にマウスを乗せた時だけ下線）',
    stageHtml: `<div class="text-nav">
  <a class="text-nav-link text-nav-current" href="#">ホーム</a>
  <a class="text-nav-link" href="#">ブログ</a>
  <a class="text-nav-link" href="#">お問い合わせ</a>
</div>`,
    answerHtml: `<div class="text-nav">
  <a class="text-nav-link text-nav-current" href="#">ホーム</a>
  <a class="text-nav-link" href="#">ブログ</a>
  <a class="text-nav-link" href="#">お問い合わせ</a>
</div>`,
    answerCss: `.text-nav {
  font-size: 22px;
  line-height: 1.8;
}

.text-nav-link {
  text-decoration: none;
  color: #2563eb;
  font-weight: 700;
  margin-right: 20px;
}

.text-nav-current {
  color: #e11d48;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 3px;
}

.text-nav-link:hover {
  color: #16a34a;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 3px;
}`
  },
  {
    qid: 'T3',
    path: 'questions/t3.html',
    category: 'テキスト装飾',
    title: '箇条書きテキスト（行間・強調）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: 箇条書きの読みやすさを整える（記号・行間・強調）。使うプロパティ: list-style（記号をカスタム） / margin / padding-left / line-height / color / font-weight',
    stageHtml: `<div class="text-list">
  <h2 class="text-list-title">メモ</h2>
  <ul class="text-list-items">
    <li class="text-list-item">リストの体裁を整える</li>
    <li class="text-list-item text-list-item-active">強調したい行</li>
    <li class="text-list-item">行間をそろえて読みやすくする</li>
  </ul>
</div>`,
    answerHtml: `<div class="text-list">
  <h2 class="text-list-title">メモ</h2>
  <ul class="text-list-items">
    <li class="text-list-item">リストの体裁を整える</li>
    <li class="text-list-item text-list-item-active">強調したい行</li>
    <li class="text-list-item">行間をそろえて読みやすくする</li>
  </ul>
</div>`,
    answerCss: `.text-list-title {
  font-size: 30px;
  color: #7c3aed;
}

.text-list-items {
  list-style: square;
}

.text-list-item {
  font-size: 22px;
  line-height: 2.3;
  color: #2563eb;
}

.text-list-item-active {
  color: #dc2626;
  font-weight: 900;
}`
  },
  {
    qid: 'U1',
    path: 'questions/u1.html',
    category: 'UIパーツ',
    title: 'ボタン3種',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: 3種類のボタンの見た目を作る（レイアウト指定は不要）。使うプロパティ: background / color / border / border-radius / padding / font-weight / margin',
    stageHtml: `<div class="btn-row">
  <div class="btn primary">メイン</div>
  <div class="btn ghost">ゴースト</div>
  <div class="btn danger">危険</div>
</div>`,
    answerHtml: `<div class="btn-row">
  <div class="btn primary">メイン</div>
  <div class="btn ghost">ゴースト</div>
  <div class="btn danger">危険</div>
</div>`,
    answerCss: `.btn {
  font-size: 18px;
  font-weight: 800;
  border-radius: 12px;
  padding: 12px 18px;
  border: none;
  display: inline-block;
  margin-right: 12px;
  margin-bottom: 12px;
  user-select: none;
}

.btn.primary { background: #1d4ed8; color: #fff; }
.btn.ghost { color: #7c3aed; border: 3px solid #7c3aed; }
.btn.danger { background: #dc2626; color: #fff; }`
  },
  {
    qid: 'U2',
    path: 'questions/u2.html',
    category: 'UIパーツ',
    title: 'バッジ',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: 情報の種類ごとにバッジの見た目を変える（レイアウト指定は不要）。使うプロパティ: background / color / border-radius / padding / font-size / font-weight / margin',
    stageHtml: `<div class="badge-row">
  <span class="badge ok">OK</span>
  <span class="badge info">INFO</span>
  <span class="badge ng">NG</span>
</div>`,
    answerHtml: `<div class="badge-row">
  <span class="badge ok">OK</span>
  <span class="badge info">INFO</span>
  <span class="badge ng">NG</span>
</div>`,
    answerCss: `.badge {
  font-size: 16px;
  font-weight: 900;
  border-radius: 999px;
  padding: 8px 14px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}

.badge.ok { background: #16a34a; color: #fff; }
.badge.info { background: #2563eb; color: #fff; }
.badge.ng { background: #dc2626; color: #fff; }`
  },
  {
    qid: 'U3',
    path: 'questions/u3.html',
    category: 'UIパーツ',
    title: '入力（通常/フォーカス）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: 通常状態とフォーカス状態の差を作る。使うプロパティ: border / border-radius / padding / color / background / box-shadow',
    stageHtml: `<div class="input-basic">
  <div class="field-label">メール</div>
  <input class="mail-input" type="text" value="name@example.com" readonly />
  <div class="field-label">メール（フォーカス）</div>
  <input class="mail-input is-focus" type="text" value="name@example.com" readonly />
</div>`,
    answerHtml: `<div class="input-basic">
  <div class="field-label">メール</div>
  <input class="mail-input" type="text" value="name@example.com" readonly />
  <div class="field-label">メール（フォーカス）</div>
  <input class="mail-input is-focus" type="text" value="name@example.com" readonly />
</div>`,
    answerCss: `.field-label {
  font-size: 12px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0 0 6px 0;
}

.mail-input {
  width: 100%;
  height: 50px;
  border-radius: 12px;
  border: 2px solid #9ca3af;
  padding: 0 12px;
  color: #111827;
  margin: 0 0 12px 0;
  font-size: 18px;
}

.mail-input.is-focus {
  border-color: #7c3aed;
  box-shadow: 0 0 0 6px rgba(124, 58, 237, 0.28);
}`
  },
  {
    qid: 'B1',
    path: 'questions/b1.html',
    category: '余白 / ボックス',
    title: 'カード（枠・角・影）',
    difficulty: '初級',
    stageClass: 'stage stage--light2',
    hint: '目標: カードの箱感（枠・角・影・余白）を作る。使うプロパティ: border / border-radius / padding / box-shadow / margin / line-height',
    stageHtml: `<div class="card-shadow">
  <h3 class="card-shadow-title">カード表現</h3>
  <p class="card-shadow-text">枠線・角丸・影・余白を組み合わせて、よくあるカードUIを作ります。</p>
  <div class="card-shadow-meta">
    <span>更新: 2026-02-24</span>
  </div>
</div>`,
    answerHtml: `<div class="card-shadow">
  <h3 class="card-shadow-title">カード表現</h3>
  <p class="card-shadow-text">枠線・角丸・影・余白を組み合わせて、よくあるカードUIを作ります。</p>
  <div class="card-shadow-meta">
    <span>更新: 2026-02-24</span>
  </div>
</div>`,
    answerCss: `.card-shadow {
  padding: 20px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
}


.card-shadow-title { margin: 0 0 10px 0; font-size: 20px; }

.card-shadow-text {
  color: #334155;
  line-height: 1.7;
}

.card-shadow-meta {
  margin-top: 10px;
  color: #64748b;
  font-size: 12px;
}`
  },
  {
    qid: 'B2',
    path: 'questions/b2.html',
    category: '余白 / ボックス',
    title: '設定画面（行区切り）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: 各行を区切って情報を読みやすくする。使うプロパティ: padding / border-bottom / :last-child / font-size / color',
    stageHtml: `<div class="settings-list">
  <div class="settings-card__header">アカウント設定</div>
  <div class="settings-card__body">
    <div class="settings-card__row">
      <span class="settings-card__label">ユーザー名</span><br />
      <span class="settings-card__value">taro_yamada</span>
    </div>
    <div class="settings-card__row">
      <span class="settings-card__label">メールアドレス</span><br />
      <span class="settings-card__value">taro@example.com</span>
    </div>
    <div class="settings-card__row">
      <span class="settings-card__label">言語</span><br />
      <span class="settings-card__value">日本語</span>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="settings-list">
  <div class="settings-card__header">アカウント設定</div>
  <div class="settings-card__body">
    <div class="settings-card__row">
      <span class="settings-card__label">ユーザー名</span><br />
      <span class="settings-card__value">taro_yamada</span>
    </div>
    <div class="settings-card__row">
      <span class="settings-card__label">メールアドレス</span><br />
      <span class="settings-card__value">taro@example.com</span>
    </div>
    <div class="settings-card__row">
      <span class="settings-card__label">言語</span><br />
      <span class="settings-card__value">日本語</span>
    </div>
  </div>
</div>`,
    answerCss: `.settings-list {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
}

.settings-card__header {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 800;
  font-size: 16px;
  color: #0f172a;
}

.settings-card__row {
  padding: 14px 20px;
  border-bottom: 1px solid #e5e7eb;
  color: #0f172a;
}

.settings-card__row:last-child { border-bottom: none; }
.settings-card__label { font-size: 13px; font-weight: 700; }
.settings-card__value { font-size: 13px; color: #64748b; line-height: 1.8; }`
  },
  {
    qid: 'B3',
    path: 'questions/b3.html',
    category: '余白 / ボックス',
    title: 'プロフィールカード（縦積み）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: 縦積みプロフィールカードを整える。使うプロパティ: border / border-radius / padding / width / height / text-align / margin',
    stageHtml: `<div class="profile-panel">
  <div class="profile-card__avatar">T</div>
  <p class="profile-card__name">山田太郎</p>
  <p class="profile-card__role">フロントエンドエンジニア</p>
</div>`,
    answerHtml: `<div class="profile-panel">
  <div class="profile-card__avatar">T</div>
  <p class="profile-card__name">山田太郎</p>
  <p class="profile-card__role">フロントエンドエンジニア</p>
</div>`,
    answerCss: `.profile-panel {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 22px;
  text-align: center;
}

.profile-card__avatar {
  width: 56px;
  height: 56px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: #e2e8f0;
  text-align: center;
  line-height: 56px;
  font-size: 20px;
  font-weight: 800;
  color: #475569;
}

.profile-card__name {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px 0;
}

.profile-card__role {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}`
  },
  {
    qid: 'L1',
    path: 'questions/l1.html',
    category: 'レイアウト',
    title: '3列＋折り返し',
    difficulty: '中級',
    stageClass: 'stage',
    hint: '目標: 3列で並べ、幅が足りないと折り返す。使うプロパティ: display:flex / flex-wrap / gap / flex',
    stageHtml: `<div class="flex-grid">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
  <div class="box d">D</div>
  <div class="box e">E</div>
  <div class="box f">F</div>
</div>`,
    answerHtml: `<div class="flex-grid">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
  <div class="box d">D</div>
  <div class="box e">E</div>
  <div class="box f">F</div>
</div>`,
    answerCss: `.flex-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.box {
  height: 90px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #0b1220;
  flex: 0 0 calc(33.333% - 8px);
}

.box.a { background: #60a5fa; }
.box.b { background: #34d399; }
.box.c { background: #f472b6; }
.box.d { background: #fbbf24; }
.box.e { background: #a78bfa; }
.box.f { background: #fb7185; }`
  },
  {
    qid: 'L2',
    path: 'questions/l2.html',
    category: 'レイアウト',
    title: '2カラム（左固定）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '目標: 左を固定幅、右を可変幅にする。使うプロパティ: display:flex / gap / width / flex:1',
    stageHtml: `<div class="two-col">
  <div class="side">サイド（240px）</div>
  <div class="main">メイン（可変）</div>
</div>`,
    answerHtml: `<div class="two-col">
  <div class="side">サイド（240px）</div>
  <div class="main">メイン（可変）</div>
</div>`,
    answerCss: `.two-col {
  display: flex;
  gap: 16px;
}

.side {
  width: 240px;
  height: 180px;
  border-radius: 14px;
  background: #0f172a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.main {
  flex: 1;
  height: 180px;
  border-radius: 14px;
  background: #e2e8f0;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}`
  },
  {
    qid: 'L3',
    path: 'questions/l3.html',
    category: 'レイアウト',
    title: 'タイル＋先頭横長',
    difficulty: '中級',
    stageClass: 'stage',
    hint: '目標: 2列グリッドで先頭タイルだけ横長にする。使うプロパティ: display:grid / grid-template-columns / grid-column / gap',
    stageHtml: `<div class="tile-grid">
  <div class="tile hero">A</div>
  <div class="tile b">B</div>
  <div class="tile c">C</div>
  <div class="tile d">D</div>
  <div class="tile e">E</div>
</div>`,
    answerHtml: `<div class="tile-grid">
  <div class="tile hero">A</div>
  <div class="tile b">B</div>
  <div class="tile c">C</div>
  <div class="tile d">D</div>
  <div class="tile e">E</div>
</div>`,
    answerCss: `.tile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.tile {
  height: 90px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #0b1220;
}

.tile.hero {
  grid-column: 1 / -1;
  background: #60a5fa;
}

.tile.b { background: #34d399; }
.tile.c { background: #f472b6; }
.tile.d { background: #fbbf24; }
.tile.e { background: #a78bfa; }`
  },
  {
    qid: 'P1',
    path: 'questions/p1.html',
    category: '位置',
    title: 'stickyヘッダー',
    difficulty: '中級',
    stageClass: 'stage stage--light2',
    hint: '目標: スクロールしてもヘッダーが上に残る状態を作る。使うプロパティ: position:sticky / top / height / overflow-y / border-bottom',
    stageHtml: `<div class="sticky-simple">
  <div class="sticky-simple__bar">ヘッダー（常に上に残る）</div>
  <div class="sticky-simple__body">スクロールするとヘッダーだけが上に残ります。</div>
  <div class="sticky-simple__space"></div>
</div>`,
    answerHtml: `<div class="sticky-simple">
  <div class="sticky-simple__bar">ヘッダー（常に上に残る）</div>
  <div class="sticky-simple__body">スクロールするとヘッダーだけが上に残ります。</div>
  <div class="sticky-simple__space"></div>
</div>`,
    answerCss: `.sticky-simple {
  height: 180px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, 0.10);
  overflow-y: auto;
  color: #0f172a;
}

.sticky-simple__bar {
  border-bottom: 1px solid #e5e7eb;
  padding: 14px 18px;
  font-weight: 800;
  position: sticky;
  top: 0;
}

.sticky-simple__body {
  padding: 16px 18px;
  color: #334155;
  font-size: 13px;
}

.sticky-simple__space {
  height: 180px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 70%);
}`
  },
  {
    qid: 'P2',
    path: 'questions/p2.html',
    category: '位置',
    title: '右下固定の通知',
    difficulty: '中級',
    stageClass: 'stage stage--light2',
    hint: '目標: 親要素の右下に通知を固定配置する。使うプロパティ: position:relative / position:absolute / right / bottom / box-shadow',
    stageHtml: `<div class="toast-mock">
  <div class="toast-mock-content">右下に固定されたメッセージの見本。</div>
  <div class="toast">保存しました</div>
</div>`,
    answerHtml: `<div class="toast-mock">
  <div class="toast-mock-content">右下に固定されたメッセージの見本。</div>
  <div class="toast">保存しました</div>
</div>`,
    answerCss: `.toast-mock {
  height: 220px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, 0.10);
  position: relative;
  overflow: hidden;
  color: #0f172a;
}

.toast-mock-content {
  padding: 16px;
  color: #334155;
  font-size: 12px;
}

.toast {
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 240px;
  padding: 12px;
  border-radius: 12px;
  background: #0f172a;
  color: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.25);
  font-weight: 700;
  font-size: 12px;
}`
  },
  {
    qid: 'P3',
    path: 'questions/p3.html',
    category: '位置',
    title: '中央オーバーレイ（確認ダイアログ）',
    difficulty: '中級',
    stageClass: 'stage stage--light2',
    hint: '目標: 画面全体オーバーレイの中央にダイアログを置く。使うプロパティ: position:relative / position:absolute / inset:0 / display:flex / align-items:center / justify-content:center',
    stageHtml: `<div class="overlay-mock">
  <div class="overlay-mock__bg">背景コンテンツがここに表示されています。</div>
  <div class="overlay-mock__overlay">
    <div class="overlay-mock__dialog">
      <h4 class="overlay-mock-title">本当に削除しますか？</h4>
      <p class="overlay-mock-text">この操作は取り消せません。</p>
      <button class="confirm-btn">削除する</button>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="overlay-mock">
  <div class="overlay-mock__bg">背景コンテンツがここに表示されています。</div>
  <div class="overlay-mock__overlay">
    <div class="overlay-mock__dialog">
      <h4 class="overlay-mock-title">本当に削除しますか？</h4>
      <p class="overlay-mock-text">この操作は取り消せません。</p>
      <button class="confirm-btn">削除する</button>
    </div>
  </div>
</div>`,
    answerCss: `.overlay-mock {
  height: 240px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, 0.10);
  position: relative;
  overflow: hidden;
  color: #0f172a;
}

.overlay-mock__bg {
  padding: 16px;
  color: #334155;
  font-size: 12px;
}

.overlay-mock__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-mock__dialog {
  background: #fff;
  border-radius: 14px;
  padding: 20px 24px;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.25);
  text-align: center;
  max-width: 260px;
}

.overlay-mock-title {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #0f172a;
}

.overlay-mock-text {
  font-size: 13px;
  color: #64748b;
}

.confirm-btn {
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  font-weight: 700;
  font-size: 13px;
}`
  },
  {
    qid: 'R1',
    path: 'questions/r1.html',
    category: 'レスポンシブ',
    title: '2列 → 1列（見本）',
    difficulty: '中級',
    stageClass: 'stage stage--light',
    hint: '目標: 画面幅600px以下で2列から1列に切り替える。使うプロパティ: display:grid / grid-template-columns / @media',
    stageHtml: `<div class="screens">
  <div class="screen">
    <div class="cap">wide</div>
    <div class="area">
      <div class="r-cards-wide">
        <div class="r-card a">左</div>
        <div class="r-card b">右</div>
      </div>
    </div>
  </div>
  <div class="screen">
    <div class="cap">narrow</div>
    <div class="area">
      <div class="r-cards-narrow">
        <div class="r-card a">左</div>
        <div class="r-card b">右</div>
      </div>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="r-cards">
  <div class="r-card a">左</div>
  <div class="r-card b">右</div>
</div>`,
    answerCss: `.r-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.r-card {
  height: 100px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #0b1220;
}

.r-card.a { background: #60a5fa; }
.r-card.b { background: #34d399; }

@media (max-width: 600px) {
  .r-cards {
    grid-template-columns: 1fr;
  }
}`
  },
  {
    qid: 'R2',
    path: 'questions/r2.html',
    category: 'レスポンシブ',
    title: '横並び → 縦並び（見本）',
    difficulty: '中級',
    stageClass: 'stage stage--light',
    hint: '目標: 画面幅600px以下で横並びを縦並びに切り替える。使うプロパティ: display:flex / flex-direction / gap / @media',
    stageHtml: `<div class="screens">
  <div class="screen">
    <div class="cap">wide</div>
    <div class="area">
      <div class="r-nav-wide">
        <a class="r-link" href="#">ホーム</a>
        <a class="r-link hover" href="#">ドキュメント</a>
        <a class="r-link" href="#">概要</a>
      </div>
    </div>
  </div>
  <div class="screen">
    <div class="cap">narrow</div>
    <div class="area">
      <div class="r-nav-narrow">
        <a class="r-link" href="#">ホーム</a>
        <a class="r-link hover" href="#">ドキュメント</a>
        <a class="r-link" href="#">概要</a>
      </div>
    </div>
  </div>
</div>`,
    answerHtml: `<nav class="r-nav">
  <a class="r-link" href="#">ホーム</a>
  <a class="r-link" href="#">ドキュメント</a>
  <a class="r-link" href="#">概要</a>
</nav>`,
    answerCss: `.r-nav {
  display: flex;
  gap: 14px;
}

.r-link {
  padding: 8px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #0f172a;
  font-weight: 700;
  border: 1px solid rgba(2, 6, 23, 0.10);
}

.r-link:hover { background: #f1f5f9; }

@media (max-width: 600px) {
  .r-nav {
    flex-direction: column;
    gap: 10px;
  }
}`
  },
  {
    qid: 'M1',
    path: 'questions/m1.html',
    category: 'トランジション',
    title: 'ボタン（before/after）',
    difficulty: '中級',
    stageClass: 'stage stage--light',
    hint: '目標: ホバー時に色と大きさがなめらかに変化する。使うプロパティ: transition / transform:scale() / background / :hover',
    stageHtml: `<div class="anim-pair">
  <div class="anim-state">
    <div class="cap">before</div>
    <div class="body">
      <button class="anim-btn">ホバー</button>
    </div>
  </div>
  <div class="anim-state">
    <div class="cap">after</div>
    <div class="body">
      <button class="anim-btn after">ホバー</button>
    </div>
  </div>
</div>`,
    answerHtml: `<button class="anim-btn">ホバー</button>`,
    answerCss: `.anim-btn {
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s ease;
}

.anim-btn:hover {
  background: #1d4ed8;
  transform: scale(1.03);
}`
  },
  {
    qid: 'M2',
    path: 'questions/m2.html',
    category: 'トランジション',
    title: 'カード影（before/after）',
    difficulty: '中級',
    stageClass: 'stage stage--light2',
    hint: '目標: ホバー時にカードの影がなめらかに強くなる。使うプロパティ: box-shadow / transition / :hover',
    stageHtml: `<div class="anim-pair">
  <div class="anim-state">
    <div class="cap">before</div>
    <div class="body">
      <div class="hover-card">
        <h4 class="hover-card-title">ホバーカード</h4>
        <p class="hover-card-text">影が弱い状態</p>
      </div>
    </div>
  </div>
  <div class="anim-state">
    <div class="cap">after</div>
    <div class="body">
      <div class="hover-card after">
        <h4 class="hover-card-title">ホバーカード</h4>
        <p class="hover-card-text">影が強い状態</p>
      </div>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="hover-card">
  <h4 class="hover-card-title">ホバーカード</h4>
  <p class="hover-card-text">影が変化するカード</p>
</div>`,
    answerCss: `.hover-card {
  max-width: 520px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
  transition: box-shadow 0.2s ease;
}

.hover-card:hover {
  box-shadow: 0 16px 40px rgba(2, 6, 23, 0.16);
}

.hover-card-title { margin: 0 0 8px 0; }
.hover-card-text { margin: 0; color: #334155; }`
  }
];
