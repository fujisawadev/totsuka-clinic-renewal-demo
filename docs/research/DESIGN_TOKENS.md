# Design Tokens

## Colors
- `--background`: #ffffff
- `--foreground`: #222222 (body text)
- `--muted`: #9A998E (taupe/sage — links, h2 labels)
- `--muted-hover`: #B5B4A8 (link hover, underline)
- `--border`: #e3e3e3 (hr)
- `--white`: #ffffff (h3 / on-dark)
- `--dark`: #1a1a1a (potential dark sections / overlays)
- (more to add as discovered: warm beige for backgrounds, deeper khaki for accents)

## Fonts
- Family: "Shippori Mincho", serif (entire site, Google Fonts)
- Weights observed: 400 (regular), 500 (semibold), 600 (bold for headings)
- Body: 14px / 1.714 line-height
- H2 small label: 18px / 1
- H3: 20px / 1.714, white

## Spacing
- Section vertical padding: ~120-160px desktop, ~80px mobile
- Container max-width: 1120px
- Inner gutters: 24px desktop, 16px mobile

## Breakpoints (from base.css)
- Mobile: ≤ 430px
- Tablet: 431px – 1143px
- Desktop: ≥ 1144px
- Tailwind mapping: sm=431, lg=1144 (use custom in `globals.css`)

## Border radii
- Buttons / cards: subtle (4-8px) or none (mostly square)

## Effects
- Transitions baseline: 0.3s all (links), 0.4-0.8s for reveal animations
- Easing: cubic-bezier(0.16, 1, 0.3, 1) for reveals
