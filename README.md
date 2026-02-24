# CSS練習 — ビジュアル問題集

初心者向けのCSS練習問題集です。見本を再現するCSSを書きながら学習できます。

## 使い方

1. `index.html` を開く
2. 問題一覧から取り組みたい問題を選ぶ
3. 「CodePenで開く」でHTML雛形を開く
4. CSSを書いて見本を再現する
5. 必要に応じて「ヒントを見る」「解答CSSを見る」で確認する

## 問題カテゴリ

| 順番 | カテゴリ | 問題数 | 新しく学ぶこと |
|:----:|---------|:------:|----------------|
| 1 | テキスト装飾 | 3問 | font-size, font-weight, color, line-height, margin, text-decoration, :hover, list-style-type |
| 2 | 余白 / ボックス | 3問 | padding, border, border-radius, background, box-shadow, max-width, width, height |
| 3 | UIパーツ | 3問 | cursor, outline, :focus, :last-child, display: block, list-style: none |
| 4 | レイアウト | 3問 | display: flex, align-items, gap, flex: 1, display: grid, grid-template-columns |
| 5 | 位置 | 3問 | position (relative/absolute/sticky), top, right, inset, overflow-y |
| 6 | レスポンシブ | 2問 | @media, flex-direction: column |
| 7 | トランジション | 2問 | transition, transform: translateY |

※ 各章では前章までに学んだプロパティを使います。順番通りに進めてください。

## ファイル構成

```
css-training/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── common.css
│   └── js/
│       ├── common.js
│       ├── index-page.js
│       ├── question-page.js
│       └── questions-data.js
└── questions/
	├── t1.html ... t3.html
	├── u1.html ... u3.html
	├── b1.html ... b3.html
	├── l1.html ... l3.html
	├── p1.html ... p3.html
	├── r1.html ... r2.html
	└── m1.html ... m2.html
```

## デプロイ

GitHub Pages（静的ファイル）でそのまま公開できます。

## ライセンス

MIT
