# 矯正歯科クリニック デモサイト

歯科医院向けのリニューアル案デモ（Next.js 15 + Tailwind v4）。

## ローカル起動

```bash
npm install
npm run dev
```

## 本番ビルド

```bash
npm run build
```

## デプロイ（Vercel）

Vercel の Git 連携でデプロイします。`main` ブランチへ push すると本番、その他のブランチ・PR はプレビューとしてビルドされます。

- 旧サイト URL からの 301 リダイレクトは `vercel.json` の `redirects` で定義
- `*.vercel.app` ドメインで配信される場合は `src/middleware.ts` が `X-Robots-Tag: noindex, nofollow` を付与（検索エンジン対策）

## 構成

- `src/app/page.tsx` — トップページ（Header / Hero / Greeting / Concept / Treatment / Counseling / Clinic / Footer）
- `src/components/` — 各セクションコンポーネント
- `src/app/globals.css` — デザイントークン（カラー、フォント、`.anim` リビールアニメ等）

## 現状

- 画像は全てプレースホルダー
- 本文は「ここに本文が入ります」等のプレースホルダー
- 動的挙動: ハンバーガーメニュー / オフキャンバスナビ / カルーセル自動送り / スクロールリビール / アンカーリンクスムーズスクロール
