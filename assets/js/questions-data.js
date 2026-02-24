window.CSS_QUESTIONS = [
  // ========================================
  // 1. テキスト装飾 (T1-T4)
  // T1: font-size, font-weight, color, line-height
  // T2: text-align（中央揃え）
  // T3: text-decoration, :hover
  // T4: list-style-type
  // ========================================
  {
    qid: 'T1',
    path: 'questions/t1.html',
    category: 'テキスト装飾',
    title: '文字の大きさと色',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: font-size / font-weight / color / line-height',
    stageHtml: `<article class="t1-article">
  <h1 class="t1-title">CSSの基本を学ぼう</h1>
  <p class="t1-body">CSSはWebページの見た目を整えるための言語です。文字の大きさや色、余白などを自由に変更できます。</p>
</article>`,
    answerHtml: `<article class="t1-article">
  <h1 class="t1-title">CSSの基本を学ぼう</h1>
  <p class="t1-body">CSSはWebページの見た目を整えるための言語です。文字の大きさや色、余白などを自由に変更できます。</p>
</article>`,
    answerCss: `.t1-title {
  font-size: 28px;
  font-weight: 700;
  color: #222;
}

.t1-body {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}`
  },
  {
    qid: 'T2',
    path: 'questions/t2.html',
    category: 'テキスト装飾',
    title: 'テキストの中央揃え',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: text-align: center',
    stageHtml: `<div class="t2-hero">
  <h1 class="t2-title">ようこそ</h1>
  <p class="t2-lead">これはヒーローセクションのサンプルです。</p>
</div>`,
    answerHtml: `<div class="t2-hero">
  <h1 class="t2-title">ようこそ</h1>
  <p class="t2-lead">これはヒーローセクションのサンプルです。</p>
</div>`,
    answerCss: `.t2-hero {
  text-align: center;
}

.t2-title {
  font-size: 32px;
  font-weight: 700;
  color: #222;
}

.t2-lead {
  font-size: 16px;
  color: #555;
}`
  },
  {
    qid: 'T3',
    path: 'questions/t3.html',
    category: 'テキスト装飾',
    title: 'リンクとホバー',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: text-decoration / color / :hover',
    stageHtml: `<nav class="t3-nav">
  <a class="t3-link" href="#">ホーム</a>
  <a class="t3-link" href="#">サービス</a>
  <a class="t3-link" href="#">お問い合わせ</a>
</nav>`,
    answerHtml: `<nav class="t3-nav">
  <a class="t3-link" href="#">ホーム</a>
  <a class="t3-link" href="#">サービス</a>
  <a class="t3-link" href="#">お問い合わせ</a>
</nav>`,
    answerCss: `.t3-link {
  color: #555;
  text-decoration: none;
}

.t3-link:hover {
  color: #0066cc;
  text-decoration: underline;
}`
  },
  {
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
  },

  // ========================================
  // 2. 余白 / ボックス (B1-B5)
  // B1: padding（内側の余白）
  // B2: margin（外側の余白）+ margin: 0 auto
  // B3: border（枠線）
  // B4: border-radius（角丸）+ box-shadow（影）
  // B5: width / height（サイズ指定）
  // ========================================
  {
    qid: 'B1',
    path: 'questions/b1.html',
    category: '余白 / ボックス',
    title: '内側の余白（padding）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: padding / background',
    stageHtml: `<div class="b1-box">
  <p class="b1-text">paddingで内側に余白を作ります。</p>
</div>`,
    answerHtml: `<div class="b1-box">
  <p class="b1-text">paddingで内側に余白を作ります。</p>
</div>`,
    answerCss: `.b1-box {
  padding: 24px;
  background: #e8f4fc;
}

.b1-text {
  color: #555;
}`
  },
  {
    qid: 'B2',
    path: 'questions/b2.html',
    category: '余白 / ボックス',
    title: '外側の余白（margin）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: margin / margin: 0 auto（中央配置）',
    stageHtml: `<div class="b2-container">
  <div class="b2-card">
    <p class="b2-text">margin: 0 autoで横方向の中央に配置できます。</p>
  </div>
  <div class="b2-card">
    <p class="b2-text">2つ目のカードです。上にmarginで余白があります。</p>
  </div>
</div>`,
    answerHtml: `<div class="b2-container">
  <div class="b2-card">
    <p class="b2-text">margin: 0 autoで横方向の中央に配置できます。</p>
  </div>
  <div class="b2-card">
    <p class="b2-text">2つ目のカードです。上にmarginで余白があります。</p>
  </div>
</div>`,
    answerCss: `.b2-card {
  max-width: 400px;
  margin: 0 auto 16px;
  padding: 20px;
  background: #e8f4fc;
}

.b2-card:last-child {
  margin-bottom: 0;
}

.b2-text {
  color: #555;
}`
  },
  {
    qid: 'B3',
    path: 'questions/b3.html',
    category: '余白 / ボックス',
    title: '枠線（border）',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: border',
    stageHtml: `<div class="b3-box">
  <p class="b3-text">borderで枠線を引きます。</p>
</div>`,
    answerHtml: `<div class="b3-box">
  <p class="b3-text">borderで枠線を引きます。</p>
</div>`,
    answerCss: `.b3-box {
  padding: 24px;
  background: #fff;
  border: 2px solid #0066cc;
}

.b3-text {
  color: #555;
}`
  },
  {
    qid: 'B4',
    path: 'questions/b4.html',
    category: '余白 / ボックス',
    title: '角丸と影',
    difficulty: '初級',
    stageClass: 'stage stage--light2',
    hint: '学ぶこと: border-radius / box-shadow',
    stageHtml: `<div class="b4-card">
  <p class="b4-text">角を丸くして、影をつけるとカードらしくなります。</p>
</div>`,
    answerHtml: `<div class="b4-card">
  <p class="b4-text">角を丸くして、影をつけるとカードらしくなります。</p>
</div>`,
    answerCss: `.b4-card {
  padding: 24px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.b4-text {
  color: #555;
}`
  },
  {
    qid: 'B5',
    path: 'questions/b5.html',
    category: '余白 / ボックス',
    title: 'サイズ指定と円',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: width / height / border-radius: 50%',
    stageHtml: `<div class="b5-avatar">田</div>`,
    answerHtml: `<div class="b5-avatar">田</div>`,
    answerCss: `.b5-avatar {
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  background: #0066cc;
  border-radius: 50%;
}`
  },

  // ========================================
  // 3. UIパーツ (U1-U3)
  // U1: cursor, border: none
  // U2: display: block, outline, :focus
  // U3: list-style: none, border-bottom, :last-child
  // ========================================
  {
    qid: 'U1',
    path: 'questions/u1.html',
    category: 'UIパーツ',
    title: 'ボタン',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: cursor / border: none（前章の復習も含む）',
    stageHtml: `<button class="u1-btn">送信する</button>`,
    answerHtml: `<button class="u1-btn">送信する</button>`,
    answerCss: `.u1-btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #0066cc;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}`
  },
  {
    qid: 'U2',
    path: 'questions/u2.html',
    category: 'UIパーツ',
    title: '入力フィールド',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: display: block / outline / :focus',
    stageHtml: `<div class="u2-form">
  <label class="u2-label">メールアドレス</label>
  <input class="u2-input" type="email" placeholder="example@mail.com" />
</div>`,
    answerHtml: `<div class="u2-form">
  <label class="u2-label">メールアドレス</label>
  <input class="u2-input" type="email" placeholder="example@mail.com" />
</div>`,
    answerCss: `.u2-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

.u2-input {
  width: 100%;
  max-width: 320px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.u2-input:focus {
  outline: none;
  border-color: #0066cc;
}`
  },
  {
    qid: 'U3',
    path: 'questions/u3.html',
    category: 'UIパーツ',
    title: '区切り線メニュー',
    difficulty: '初級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: list-style: none / border-bottom / :last-child',
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
  border-bottom: 1px solid #ddd;
}

.u3-item:last-child {
  border-bottom: none;
}`
  },

  // ========================================
  // 4. レイアウト (L1-L4)
  // L1: display: flex, gap, align-items
  // L2: justify-content: space-between / center
  // L3: flex: 1
  // L4: display: grid, grid-template-columns
  // ========================================
  {
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
  },
  {
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
  },
  {
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
  },
  {
    qid: 'L4',
    path: 'questions/l4.html',
    category: 'レイアウト',
    title: 'グリッド（2列）',
    difficulty: '中級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: display: grid / grid-template-columns / gap',
    stageHtml: `<div class="l4-grid">
  <div class="l4-item">1</div>
  <div class="l4-item">2</div>
  <div class="l4-item">3</div>
  <div class="l4-item">4</div>
</div>`,
    answerHtml: `<div class="l4-grid">
  <div class="l4-item">1</div>
  <div class="l4-item">2</div>
  <div class="l4-item">3</div>
  <div class="l4-item">4</div>
</div>`,
    answerCss: `.l4-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.l4-item {
  padding: 32px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #555;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}`
  },

  // ========================================
  // 5. 位置 (P1-P3)
  // P1: position: relative / absolute, top, right
  // P2: position: sticky, overflow-y
  // P3: inset, Flex中央配置
  // ========================================
  {
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
  },
  {
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
  },
  {
    qid: 'P3',
    path: 'questions/p3.html',
    category: '位置',
    title: 'モーダル（中央配置）',
    difficulty: '中級',
    stageClass: 'stage stage--light2',
    hint: '学ぶこと: inset / display: flex + align-items + justify-content で中央配置',
    stageHtml: `<div class="p3-demo">
  <div class="p3-overlay">
    <div class="p3-modal">
      <h3 class="p3-title">確認</h3>
      <p class="p3-text">変更を保存しますか？</p>
      <button class="p3-btn">OK</button>
    </div>
  </div>
</div>`,
    answerHtml: `<div class="p3-demo">
  <div class="p3-overlay">
    <div class="p3-modal">
      <h3 class="p3-title">確認</h3>
      <p class="p3-text">変更を保存しますか？</p>
      <button class="p3-btn">OK</button>
    </div>
  </div>
</div>`,
    answerCss: `.p3-demo {
  position: relative;
  height: 240px;
  background: #f5f5f5;
  border-radius: 8px;
}

.p3-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.p3-modal {
  width: 280px;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
}

.p3-title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #222;
}

.p3-text {
  margin: 0 0 20px;
  font-size: 14px;
  color: #555;
}

.p3-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #0066cc;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}`
  },

  // ========================================
  // 6. レスポンシブ (R1-R2)
  // R1: @media, grid-template-columns
  // R2: @media, flex-direction: column
  // ========================================
  {
    qid: 'R1',
    path: 'questions/r1.html',
    category: 'レスポンシブ',
    title: '2列から1列へ',
    difficulty: '中級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: @media (max-width: 600px) / grid-template-columns: 1fr',
    stageHtml: `<div class="r1-grid">
  <div class="r1-item">カード1</div>
  <div class="r1-item">カード2</div>
</div>`,
    answerHtml: `<div class="r1-grid">
  <div class="r1-item">カード1</div>
  <div class="r1-item">カード2</div>
</div>`,
    answerCss: `.r1-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.r1-item {
  padding: 24px;
  text-align: center;
  font-weight: 600;
  color: #555;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .r1-grid {
    grid-template-columns: 1fr;
  }
}`
  },
  {
    qid: 'R2',
    path: 'questions/r2.html',
    category: 'レスポンシブ',
    title: '横から縦へ',
    difficulty: '中級',
    stageClass: 'stage stage--light',
    hint: '学ぶこと: @media / flex-direction: column',
    stageHtml: `<nav class="r2-nav">
  <a class="r2-link" href="#">ホーム</a>
  <a class="r2-link" href="#">サービス</a>
  <a class="r2-link" href="#">お問い合わせ</a>
</nav>`,
    answerHtml: `<nav class="r2-nav">
  <a class="r2-link" href="#">ホーム</a>
  <a class="r2-link" href="#">サービス</a>
  <a class="r2-link" href="#">お問い合わせ</a>
</nav>`,
    answerCss: `.r2-nav {
  display: flex;
  gap: 16px;
}

.r2-link {
  padding: 10px 16px;
  font-size: 14px;
  color: #555;
  text-decoration: none;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
}

@media (max-width: 600px) {
  .r2-nav {
    flex-direction: column;
  }
}`
  },

  // ========================================
  // 7. トランジション (M1-M2)
  // M1: transition
  // M2: transform: translateY
  // ========================================
  {
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
  },
  {
    qid: 'M2',
    path: 'questions/m2.html',
    category: 'トランジション',
    title: 'カードの浮き上がり',
    difficulty: '中級',
    stageClass: 'stage stage--light2',
    hint: '学ぶこと: transform: translateY / 複数プロパティのtransition',
    stageHtml: `<div class="m2-card">
  <h4 class="m2-title">ホバーで浮き上がる</h4>
  <p class="m2-text">カードにマウスを乗せてみてください。</p>
</div>`,
    answerHtml: `<div class="m2-card">
  <h4 class="m2-title">ホバーで浮き上がる</h4>
  <p class="m2-text">カードにマウスを乗せてみてください。</p>
</div>`,
    answerCss: `.m2-card {
  max-width: 320px;
  padding: 24px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s, transform 0.2s;
}

.m2-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.m2-title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #222;
}

.m2-text {
  margin: 0;
  font-size: 14px;
  color: #555;
}`
  }
];
