# Dynamic Behaviors — shinagawa-ortho.com クローン

## Site loader
- Element: `#site-loader` with `.loader-logo` (PNG symbol)
- On page load, fades out after the page is ready
- Implementation: client-side useEffect; remove loader on mount with opacity transition

## Header (fixed top)
- Position: fixed, top:0, z-index high
- Logo on left, hamburger right
- Hamburger toggles `.nav-menu` slide-in from left (transform: translateX(-100%) → 0)
- Implementation: useState for open, CSS transition transform 0.4s ease

## Side action column (fixed right)
- Position: fixed, right:0, top center
- Vertical stack of buttons (TEL, 初診相談, WEB予約, メール, LINE, 診療時間)
- Always visible at desktop; on mobile collapses to bottom bar

## Off-canvas navigation
- Position: fixed, left:0, top:0, height:100vh, width:~440px
- transform: translateX(-100%) by default; .open → translateX(0)
- transition: transform 0.4s ease
- Contains nested links categorized: 症状別 / カテゴリ別 / その他

## `.anim` reveal on scroll
- Class `.anim` on multiple elements (figures, sections, blocks)
- On IntersectionObserver entry (e.g., threshold ~0.15), add `.is-visible` class
- Default state: opacity:0, transform: translateY(40px)
- Visible state: opacity:1, transform: none
- Transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)
- Stagger child elements within `.anim` containers using delays

## Counseling parallax
- `.img-wrap` background image with `top-parallax-bg_v2.jpg`
- Behavior: background-attachment: fixed (or transform on scroll for mobile compat)
- On scroll, image translates Y at slower rate than scroll

## Clinic slider
- Class `.figure.slick-slide` inside slick container
- Autoplay infinite, ~4s per slide, fade or slide transition
- Pattern: center-mode true, ~3 visible slides at desktop, 1 at mobile
- Implementation: replace slick with custom embla-style or pure-CSS scroll-snap carousel

## Anchor scroll
- Hero side-nav labels (Greeting / Concept / ...) act as scroll anchors to their respective sections
- Behavior: smooth scroll on click; consider passive observer for active-state highlight

## Link hover
- Underline grows from right-to-left (width 0% → 100%, switch from right to left anchor)
- Color shift: #9A998E → #B5B4A8

## Button hover
- Various subtle hover states (background fade, arrow translate)
