# Page Topology — shinagawa-ortho.com クローン

Reference site: https://shinagawa-ortho.com/
Total page height: ~11235px @ 1440 viewport

## Top-level structure (top → bottom)

| # | Section | Selector | Approx height | Notes |
|---|---------|----------|---------------|-------|
| – | Slide-out nav | `.nav-menu` (off-canvas, top: -900) | full vh | Triggered by hamburger; contains 症状別/カテゴリリンク |
| – | Floating header | `header` (fixed) | ~80px | Logo + ハンバーガー + CTA |
| – | Floating side actions | `.action` (fixed right) | 376px | TEL / 初診相談 / WEB予約 / メール / LINE / 診療時間 |
| 1 | Hero | `.hero` | 900px | Side label nav (Greeting / Concept / Treatment / Clinic / Access) + 大見出し + 認定医バッジ |
| 2 | Greeting | `section#greeting.top-greeting` | 1317px | 院長挨拶。図1 (large) + 図2 (small offset) |
| 3 | Concept | `section#concept.top-concept` | 2073px | S/O/C シンボル + 縦長メイン画像 + コンセプト 3 項目 |
| 4 | Orthodontic Treatment | `section#orthodontic-treatment.top-orthodontic-treatment` | 2523px | 3 sub-blocks: 年齢別 (2), 装置・方法 (4), 不正咬合 (6) |
| 5 | Counseling | `section.top-counseling` | 1629px | parallax bg, 重ね写真2枚 + 大写真 |
| 6 | Clinic | `div#clinic` | 450px | slick カルーセル (6 images, facility) |
| 7 | Footer Access | `section#access.about-clinic` | 805px | 住所 / アクセス / 診療時間 / SNS / Google Maps embed |
| 8 | Sitemap | `section.sitemap` | 670px | カテゴリ別リンク一覧 |
| 9 | Copyright | `footer .copyright` | – | コピーライト |

## Layout characteristics

- Container max-width: 1120px (.container)
- Heading display labels in English (Greeting / Concept / Orthodontic Treatment / Counseling / Clinic / Access) with Japanese subtitles
- Heavy use of `.anim` class on elements that fade/slide in on viewport entry
- Slick slider for facility images (autoplay, infinite)
- Hamburger menu opens off-canvas nav from left
- Fixed right-side action column (vertical, ~80px wide)
