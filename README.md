# 矯正歯科クリニック デモサイト

歯科医院向けのリニューアル案デモ（Next.js 15 + Tailwind v4 静的エクスポート）。

## ローカル起動

```bash
npm install
npm run dev
```

## 本番ビルド（GitHub Pages 用）

```bash
npm run build
# out/ に静的ファイルが書き出される
```

`out/` をそのまま静的ホスティングに置けば動きます。

## デプロイ

`main` ブランチへ push すると `.github/workflows/deploy.yml` が走り、GitHub Pages に自動デプロイされます。

リポジトリ設定で **Settings > Pages > Source: GitHub Actions** を選択してください。

## 構成

- `src/app/page.tsx` — トップページ（Header / Hero / Greeting / Concept / Treatment / Counseling / Clinic / Footer）
- `src/components/` — 各セクションコンポーネント
- `src/app/globals.css` — デザイントークン（カラー、フォント、`.anim` リビールアニメ等）

## 現状

- 画像は全てプレースホルダー
- 本文は「ここに本文が入ります」等のプレースホルダー
- 動的挙動: ハンバーガーメニュー / オフキャンバスナビ / カルーセル自動送り / スクロールリビール / アンカーリンクスムーズスクロール
