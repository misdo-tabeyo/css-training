window.CSS_QUESTIONS = [
  {
    qid: 'T1',
    path: 'questions/t1.html',
    category: 'テキスト装飾',
    title: '見出し＋段落',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '使うプロパティ: font-size / font-weight / margin / line-height / color / border / border-radius / padding',
    stageHtml: `<div class="typoCard">
  <h1>タイポグラフィ練習</h1>
  <p class="lead">見出しの強弱・本文の読みやすさ・余白のリズムを揃えます。</p>
  <p class="body">この見た目と同じになるように、CSSだけで再現してください。</p>
</div>`,
    answerHtml: `<div class="typoCard">
  <h1>タイポグラフィ練習</h1>
  <p class="lead">見出しの強弱・本文の読みやすさ・余白のリズムを揃えます。</p>
  <p class="body">この見た目と同じになるように、CSSだけで再現してください。</p>
</div>`,
    answerCss: `.typoCard {
  width: min(720px, 100%);
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  background: #fff;
}

.typoCard h1 {
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 12px 0;
}

.typoCard .lead {
  color: #475569;
  line-height: 1.7;
  margin: 0 0 12px 0;
}

.typoCard .body {
  line-height: 1.8;
  margin: 0;
  color: #0f172a;
}`
  },
  {
    qid: 'T2',
    path: 'questions/t2.html',
    category: 'テキスト装飾',
    title: 'リンク（通常/現在地/ホバー）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '使うプロパティ: display:flex / justify-content / text-decoration / color / font-weight / :hover',
    stageHtml: `<div class="navBar">
  <div class="brand">マイサイト</div>
  <div class="nav">
    <a class="current" href="#">ホーム</a>
    <a class="hintHover" href="#">ブログ</a>
    <a href="#">お問い合わせ</a>
  </div>
</div>`,
    answerHtml: `<div class="navBar">
  <div class="brand">マイサイト</div>
  <div class="nav">
    <a class="current" href="#">ホーム</a>
    <a href="#">ブログ</a>
    <a href="#">お問い合わせ</a>
  </div>
</div>`,
    answerCss: `.navBar {
  width: min(900px, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
  color: #0f172a;
}

.navBar .brand { font-weight: 800; }

.navBar .nav {
  display: flex;
  gap: 14px;
  align-items: center;
}

.navBar a {
  text-decoration: none;
  color: #475569;
  padding: 6px 8px;
  font-weight: 500;
}

.navBar a.current {
  color: #0f172a;
  font-weight: 700;
}

.navBar a:hover {
  color: #0f172a;
  text-decoration: underline;
  text-underline-offset: 6px;
}`
  },
  {
    qid: 'T3',
    path: 'questions/t3.html',
    category: 'テキスト装飾',
    title: 'リスト行（区切り＋ホバー）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '使うプロパティ: list-style / padding / border-bottom / border-radius / background / :hover',
    stageHtml: `<div class="listCard">
  <h2>メモ</h2>
  <ul>
    <li>リストの体裁を整える</li>
    <li class="active">ホバー中の行</li>
    <li>区切り線のリズム</li>
  </ul>
</div>`,
    answerHtml: `<div class="listCard">
  <h2>メモ</h2>
  <ul>
    <li>リストの体裁を整える</li>
    <li>ホバー中の行</li>
    <li>区切り線のリズム</li>
  </ul>
</div>`,
    answerCss: `.listCard {
  width: min(600px, 100%);
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 18px 18px 8px;
  background: #fff;
}

.listCard h2 {
  margin: 0 0 12px 0;
  font-size: 20px;
}

.listCard ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listCard li {
  padding: 12px 10px;
  border-bottom: 1px solid #e5e7eb;
}

.listCard li:hover {
  background: #f1f5f9;
  border-radius: 10px;
  border-bottom-color: transparent;
}`
  },
  {
    qid: 'U1',
    path: 'questions/u1.html',
    category: 'UIパーツ',
    title: 'ボタン3種',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '使うプロパティ: background / color / border / border-radius / padding / font-weight',
    stageHtml: `<div class="btnRow">
  <div class="btn primary">メイン</div>
  <div class="btn ghost">ゴースト</div>
  <div class="btn danger">危険</div>
</div>`,
    answerHtml: `<div class="btnRow">
  <div class="btn primary">メイン</div>
  <div class="btn ghost">ゴースト</div>
  <div class="btn danger">危険</div>
</div>`,
    answerCss: `.btnRow {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  font-size: 14px;
  font-weight: 700;
  border-radius: 12px;
  padding: 10px 14px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  user-select: none;
}

.btn.primary { background: #2563eb; color: #fff; }
.btn.ghost { background: transparent; color: #0f172a; border: 1px solid #cbd5e1; }
.btn.danger { background: #ef4444; color: #fff; }`
  },
  {
    qid: 'U2',
    path: 'questions/u2.html',
    category: 'UIパーツ',
    title: 'バッジ',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '使うプロパティ: background / color / border-radius / padding / font-size / font-weight',
    stageHtml: `<div class="badgeRow">
  <span class="badge ok">OK</span>
  <span class="badge info">INFO</span>
  <span class="badge ng">NG</span>
</div>`,
    answerHtml: `<div class="badgeRow">
  <span class="badge ok">OK</span>
  <span class="badge info">INFO</span>
  <span class="badge ng">NG</span>
</div>`,
    answerCss: `.badgeRow {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.badge {
  font-size: 12px;
  font-weight: 700;
  border-radius: 999px;
  padding: 6px 10px;
  display: inline-block;
}

.badge.ok { background: #dcfce7; color: #166534; }
.badge.info { background: #dbeafe; color: #1d4ed8; }
.badge.ng { background: #fee2e2; color: #b91c1c; }`
  },
  {
    qid: 'U3',
    path: 'questions/u3.html',
    category: 'UIパーツ',
    title: '入力（通常/フォーカス）',
    difficulty: '中級',
    stageClass: 'stage stage--light',
    hint: '使うプロパティ: border / border-radius / padding / display:flex / align-items / justify-content / box-shadow',
    stageHtml: `<div class="inputWrap">
  <div class="fieldLabel">メール</div>
  <div class="field">
    <span class="ph">name@example.com</span>
    <span class="kbd">⌘K</span>
  </div>
  <div class="fieldLabel">メール（フォーカス）</div>
  <div class="field focus">
    <span class="ph">name@example.com</span>
    <span class="kbd">⌘K</span>
  </div>
</div>`,
    answerHtml: `<div class="inputWrap">
  <div class="fieldLabel">メール</div>
  <div class="field">
    <span class="ph">name@example.com</span>
    <span class="kbd">⌘K</span>
  </div>
  <div class="fieldLabel">メール（フォーカス）</div>
  <div class="field focus">
    <span class="ph">name@example.com</span>
    <span class="kbd">⌘K</span>
  </div>
</div>`,
    answerCss: `.inputWrap {
  width: min(720px, 100%);
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.fieldLabel {
  font-size: 12px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.field {
  height: 44px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0f172a;
  background: #fff;
}

.field .ph { color: #64748b; }

.field .kbd {
  font-size: 11px;
  font-weight: 800;
  color: #334155;
  border: 1px solid #cbd5e1;
  padding: 4px 8px;
  border-radius: 999px;
  background: #f8fafc;
}

.field.focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.20);
}`
  },
  {
    qid: 'B1',
    path: 'questions/b1.html',
    category: '余白 / ボックス',
    title: 'カード（枠・角・影）',
    difficulty: '初級',
    stageClass: 'stage stage--light2',
    hint: '使うプロパティ: border / border-radius / padding / box-shadow / margin / text-decoration',
    stageHtml: `<div class="cardShadow">
  <h3>カード表現</h3>
  <p>枠線・角丸・影・余白を組み合わせて、よくあるカードUIを作ります。</p>
  <div class="footer">
    <span class="link">通常リンク</span>
    <span class="link hover">ホバー中リンク</span>
  </div>
</div>`,
    answerHtml: `<div class="cardShadow">
  <h3>カード表現</h3>
  <p>枠線・角丸・影・余白を組み合わせて、よくあるカードUIを作ります。</p>
  <div class="footer">
    <span class="link">通常リンク</span>
    <span class="link hover">ホバー中リンク</span>
  </div>
</div>`,
    answerCss: `.cardShadow {
  width: min(680px, 100%);
  padding: 20px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
}

.cardShadow h3 { margin: 0 0 10px 0; font-size: 20px; }

.cardShadow p {
  margin: 0 0 14px 0;
  color: #334155;
  line-height: 1.7;
}

.cardShadow .footer {
  margin-top: 10px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.cardShadow .link {
  color: #2563eb;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: transparent;
}

.cardShadow .link:hover { text-decoration-color: currentColor; }`
  },
  {
    qid: 'B2',
    path: 'questions/b2.html',
    category: '余白 / ボックス',
    title: '設定画面（行区切り＋余白）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '使うプロパティ: padding / border-bottom / display:flex / justify-content:space-between / :last-child',
    stageHtml: `<div class="settingsCard">
  <div class="settingsCard__header">アカウント設定</div>
  <div class="settingsCard__body">
    <div class="settingsCard__row">
      <span class="settingsCard__label">ユーザー名</span>
      <span class="settingsCard__value">taro_yamada</span>
    </div>
    <div class="settingsCard__row">
      <span class="settingsCard__label">メールアドレス</span>
      <span class="settingsCard__value">taro@example.com</span>
    </div>
    <div class="settingsCard__row">
      <span class="settingsCard__label">言語</span>
      <span class="settingsCard__value">日本語</span>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="settingsCard">
  <div class="settingsCard__header">アカウント設定</div>
  <div class="settingsCard__body">
    <div class="settingsCard__row">
      <span class="settingsCard__label">ユーザー名</span>
      <span class="settingsCard__value">taro_yamada</span>
    </div>
    <div class="settingsCard__row">
      <span class="settingsCard__label">メールアドレス</span>
      <span class="settingsCard__value">taro@example.com</span>
    </div>
    <div class="settingsCard__row">
      <span class="settingsCard__label">言語</span>
      <span class="settingsCard__value">日本語</span>
    </div>
  </div>
</div>`,
    answerCss: `.settingsCard {
  width: min(720px, 100%);
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
}

.settingsCard__header {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 800;
  font-size: 16px;
  color: #0f172a;
}

.settingsCard__row {
  padding: 14px 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0f172a;
}

.settingsCard__row:last-child { border-bottom: none; }
.settingsCard__label { font-size: 14px; font-weight: 600; }
.settingsCard__value { font-size: 13px; color: #64748b; }`
  },
  {
    qid: 'B3',
    path: 'questions/b3.html',
    category: '余白 / ボックス',
    title: 'プロフィールカード',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '使うプロパティ: display:flex / align-items:center / gap / border-radius:50% / width / height',
    stageHtml: `<div class="profileCard">
  <div class="profileCard__avatar">T</div>
  <div>
    <p class="profileCard__name">山田太郎</p>
    <p class="profileCard__role">フロントエンドエンジニア</p>
  </div>
</div>`,
    answerHtml: `<div class="profileCard">
  <div class="profileCard__avatar">T</div>
  <div>
    <p class="profileCard__name">山田太郎</p>
    <p class="profileCard__role">フロントエンドエンジニア</p>
  </div>
</div>`,
    answerCss: `.profileCard {
  width: min(500px, 100%);
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.profileCard__avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #e2e8f0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: #475569;
}

.profileCard__name {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
}

.profileCard__role {
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
    hint: '使うプロパティ: display:flex / flex-wrap / gap / flex',
    stageHtml: `<div class="flexGrid">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
  <div class="box d">D</div>
  <div class="box e">E</div>
  <div class="box f">F</div>
</div>`,
    answerHtml: `<div class="flexGrid">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
  <div class="box d">D</div>
  <div class="box e">E</div>
  <div class="box f">F</div>
</div>`,
    answerCss: `.flexGrid {
  width: 100%;
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
    hint: '使うプロパティ: display:flex / gap / width / flex:1',
    stageHtml: `<div class="twoCol">
  <div class="side">サイド（240px）</div>
  <div class="main">メイン（可変）</div>
</div>`,
    answerHtml: `<div class="twoCol">
  <div class="side">サイド（240px）</div>
  <div class="main">メイン（可変）</div>
</div>`,
    answerCss: `.twoCol {
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: stretch;
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
    hint: '使うプロパティ: display:grid / grid-template-columns / grid-column / gap',
    stageHtml: `<div class="tileGrid">
  <div class="tile hero">A</div>
  <div class="tile b">B</div>
  <div class="tile c">C</div>
  <div class="tile d">D</div>
  <div class="tile e">E</div>
</div>`,
    answerHtml: `<div class="tileGrid">
  <div class="tile hero">A</div>
  <div class="tile b">B</div>
  <div class="tile c">C</div>
  <div class="tile d">D</div>
  <div class="tile e">E</div>
</div>`,
    answerCss: `.tileGrid {
  width: 100%;
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
    title: '上に残るヘッダー（見本）',
    difficulty: '中級',
    stageClass: 'stage stage--light2',
    hint: '使うプロパティ: position:sticky / top / border-bottom / display:flex / justify-content',
    stageHtml: `<div class="stickyMock">
  <div class="bar">
    <div class="logo">ヘッダー</div>
    <div class="links">
      <a href="#">概要</a>
      <a class="hover" href="#">料金</a>
      <a href="#">FAQ</a>
    </div>
  </div>
  <div class="body">スクロール領域の見本</div>
  <div class="fakeScroll"></div>
</div>`,
    answerHtml: `<div class="stickyMock">
  <div class="bar">
    <div class="logo">ヘッダー</div>
    <div class="links">
      <a href="#">概要</a>
      <a href="#">料金</a>
      <a href="#">FAQ</a>
    </div>
  </div>
  <div class="body">スクロール領域の見本</div>
  <div class="fakeScroll"></div>
</div>`,
    answerCss: `.stickyMock {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, 0.10);
  overflow: hidden;
  background: #fff;
  color: #0f172a;
}

.stickyMock .bar {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
}

.stickyMock .logo { font-weight: 800; }
.stickyMock .links { display: flex; gap: 14px; }

.stickyMock .links a {
  color: #334155;
  text-decoration: none;
  padding: 6px 8px;
}

.stickyMock .links a:hover {
  text-decoration: underline;
  text-underline-offset: 6px;
}

.stickyMock .body {
  padding: 16px 18px;
  color: #334155;
  font-size: 12px;
}

.stickyMock .fakeScroll {
  height: 70px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 60%);
  border-top: 1px dashed rgba(2, 6, 23, 0.10);
}`
  },
  {
    qid: 'P2',
    path: 'questions/p2.html',
    category: '位置',
    title: '右下固定の通知',
    difficulty: '中級',
    stageClass: 'stage stage--light2',
    hint: '使うプロパティ: position:relative / position:absolute / right / bottom / box-shadow',
    stageHtml: `<div class="toastMock">
  <div class="content">右下に固定されたメッセージの見本。</div>
  <div class="toast">保存しました</div>
</div>`,
    answerHtml: `<div class="toastMock">
  <div class="content">右下に固定されたメッセージの見本。</div>
  <div class="toast">保存しました</div>
</div>`,
    answerCss: `.toastMock {
  width: 100%;
  height: 220px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, 0.10);
  background: #fff;
  position: relative;
  overflow: hidden;
  color: #0f172a;
}

.toastMock .content {
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
    hint: '使うプロパティ: position:relative / position:absolute / inset:0 / display:flex / align-items:center / justify-content:center',
    stageHtml: `<div class="overlayMock">
  <div class="overlayMock__bg">背景コンテンツがここに表示されています。</div>
  <div class="overlayMock__overlay">
    <div class="overlayMock__dialog">
      <h4>本当に削除しますか？</h4>
      <p>この操作は取り消せません。</p>
      <button class="confirmBtn">削除する</button>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="overlayMock">
  <div class="overlayMock__bg">背景コンテンツがここに表示されています。</div>
  <div class="overlayMock__overlay">
    <div class="overlayMock__dialog">
      <h4>本当に削除しますか？</h4>
      <p>この操作は取り消せません。</p>
      <button class="confirmBtn">削除する</button>
    </div>
  </div>
</div>`,
    answerCss: `.overlayMock {
  width: 100%;
  height: 240px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, 0.10);
  background: #fff;
  position: relative;
  overflow: hidden;
  color: #0f172a;
}

.overlayMock__bg {
  padding: 16px;
  color: #334155;
  font-size: 12px;
}

.overlayMock__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlayMock__dialog {
  background: #fff;
  border-radius: 14px;
  padding: 20px 24px;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.25);
  text-align: center;
  max-width: 260px;
  width: 100%;
}

.overlayMock__dialog h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #0f172a;
}

.overlayMock__dialog p {
  margin: 0 0 14px 0;
  font-size: 13px;
  color: #64748b;
}

.confirmBtn {
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
    hint: '使うプロパティ: display:grid / grid-template-columns / @media',
    stageHtml: `<div class="screens">
  <div class="screen">
    <div class="cap">wide</div>
    <div class="area">
      <div class="rCardsWide">
        <div class="rCard a">左</div>
        <div class="rCard b">右</div>
      </div>
    </div>
  </div>
  <div class="screen">
    <div class="cap">narrow</div>
    <div class="area">
      <div class="rCardsNarrow">
        <div class="rCard a">左</div>
        <div class="rCard b">右</div>
      </div>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="rCards">
  <div class="rCard a">左</div>
  <div class="rCard b">右</div>
</div>`,
    answerCss: `.rCards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.rCard {
  height: 100px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #0b1220;
}

.rCard.a { background: #60a5fa; }
.rCard.b { background: #34d399; }

@media (max-width: 600px) {
  .rCards {
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
    hint: '使うプロパティ: display:flex / flex-direction / gap / @media',
    stageHtml: `<div class="screens">
  <div class="screen">
    <div class="cap">wide</div>
    <div class="area">
      <div class="rNavWide">
        <a class="rLink" href="#">ホーム</a>
        <a class="rLink hover" href="#">ドキュメント</a>
        <a class="rLink" href="#">概要</a>
      </div>
    </div>
  </div>
  <div class="screen">
    <div class="cap">narrow</div>
    <div class="area">
      <div class="rNavNarrow">
        <a class="rLink" href="#">ホーム</a>
        <a class="rLink hover" href="#">ドキュメント</a>
        <a class="rLink" href="#">概要</a>
      </div>
    </div>
  </div>
</div>`,
    answerHtml: `<nav class="rNav">
  <a class="rLink" href="#">ホーム</a>
  <a class="rLink" href="#">ドキュメント</a>
  <a class="rLink" href="#">概要</a>
</nav>`,
    answerCss: `.rNav {
  display: flex;
  gap: 14px;
}

.rLink {
  padding: 8px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #0f172a;
  font-weight: 700;
  background: transparent;
  border: 1px solid rgba(2, 6, 23, 0.10);
}

.rLink:hover { background: #f1f5f9; }

@media (max-width: 600px) {
  .rNav {
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
    hint: '使うプロパティ: transition / transform:scale() / background / :hover',
    stageHtml: `<div class="animPair">
  <div class="animState">
    <div class="cap">before</div>
    <div class="body">
      <button class="animBtn">ホバー</button>
    </div>
  </div>
  <div class="animState">
    <div class="cap">after</div>
    <div class="body">
      <button class="animBtn after">ホバー</button>
    </div>
  </div>
</div>`,
    answerHtml: `<button class="animBtn">ホバー</button>`,
    answerCss: `.animBtn {
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

.animBtn:hover {
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
    hint: '使うプロパティ: box-shadow / transition / :hover',
    stageHtml: `<div class="animPair">
  <div class="animState">
    <div class="cap">before</div>
    <div class="body">
      <div class="hoverCard">
        <h4>ホバーカード</h4>
        <p>影が弱い状態</p>
      </div>
    </div>
  </div>
  <div class="animState">
    <div class="cap">after</div>
    <div class="body">
      <div class="hoverCard after">
        <h4>ホバーカード</h4>
        <p>影が強い状態</p>
      </div>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="hoverCard">
  <h4>ホバーカード</h4>
  <p>影が変化するカード</p>
</div>`,
    answerCss: `.hoverCard {
  max-width: 520px;
  width: 100%;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  padding: 18px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
  transition: box-shadow 0.2s ease;
}

.hoverCard:hover {
  box-shadow: 0 16px 40px rgba(2, 6, 23, 0.16);
}

.hoverCard h4 { margin: 0 0 8px 0; }
.hoverCard p { margin: 0; color: #334155; }`
  }
];
