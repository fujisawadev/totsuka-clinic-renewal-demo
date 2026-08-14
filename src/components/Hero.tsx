import HeroSlides from "./HeroSlides";

// ── スマホ時のファーストビュー表示（PC は常に従来の全画面） ──────────
// "image":  写真を 3:2 のまま切らずに表示し、テキストは写真下のダークパネルに置く
// "aspect": 3:4 の高さで表示（左右の切れを抑えた折衷案）
// "full":   従来どおり画面いっぱいに表示（元に戻すときはこちら）
const MOBILE_HERO: "image" | "aspect" | "full" = "image";

const SECTION_H = {
  image: "",
  aspect: "aspect-[3/4] lg:aspect-auto lg:min-h-screen lg:min-h-[720px]",
  full: "min-h-screen min-h-[720px]",
}[MOBILE_HERO];

// 写真レイヤー: image モードのみモバイルで通常フロー(3:2)、lg では常に背景化
const IMAGE_WRAP = {
  image: "relative aspect-[3/2] lg:absolute lg:inset-0 lg:aspect-auto",
  aspect: "absolute inset-0",
  full: "absolute inset-0",
}[MOBILE_HERO];

// テキストレイヤー: image モードのみモバイルでダークパネル、lg では常にオーバーレイ
const TEXT_WRAP = {
  image: "relative z-10 flex flex-col bg-[#1a1a1a] lg:bg-transparent lg:min-h-screen lg:min-h-[720px]",
  aspect: "relative z-10 flex flex-col h-full lg:h-auto lg:min-h-screen lg:min-h-[720px]",
  full: "relative z-10 flex flex-col min-h-screen min-h-[720px]",
}[MOBILE_HERO];

const TEXT_PT = MOBILE_HERO === "image" ? "pt-10 lg:pt-32" : "pt-20 lg:pt-32";
const TEXT_PB = MOBILE_HERO === "image" ? "pb-10 lg:pb-32" : "pb-20 lg:pb-32";
const SPACER = MOBILE_HERO === "image" ? "h-8 lg:h-auto lg:flex-1" : "flex-1";

export default function Hero() {
  return (
    <section
      id="top"
      className={`relative overflow-hidden text-white ${SECTION_H}`}
    >
      <div className={IMAGE_WRAP}>
        <HeroSlides />
        {MOBILE_HERO === "image" ? (
          <>
            {/* モバイル: ヘッダー文字の可読性用に上部だけ薄くグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent lg:hidden" />
            <div className="absolute inset-0 hidden lg:block bg-[rgba(26,26,26,0.45)]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[rgba(26,26,26,0.45)]" />
        )}
      </div>

      <div className={TEXT_WRAP}>
        <div className={`${TEXT_PT} px-6 lg:px-10`}>
          <p className="anim text-[12px] lg:text-[13px] tracking-[0.15em] text-white/95">戸塚駅東口より徒歩3分</p>
          <p className="anim text-[12px] lg:text-[13px] tracking-[0.15em] text-white/95">日本矯正歯科学会 認定医</p>
          <div className="w-12 h-px bg-white/70 my-4 lg:my-5" />
          <div className="anim anim-delay-1">
            <p className="text-[26px] sm:text-[32px] lg:text-[44px] tracking-[0.04em] sm:tracking-[0.1em] lg:tracking-[0.15em] leading-tight">ささき矯正歯科クリニック</p>
            <p className="text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] mt-2 text-white/85">SASAKI ORTHODONTIC CLINIC</p>
          </div>
        </div>

        <div className={SPACER} />

        <div className={`px-6 lg:px-10 ${TEXT_PB}`}>
          <h1 className="anim anim-delay-2 text-base sm:text-lg lg:text-xl leading-[2] tracking-wider text-white">
            患者さんを笑顔に導く
            <br />
            横浜市戸塚区の矯正歯科専門医院
          </h1>
        </div>
      </div>

      <div
        className="hidden lg:flex absolute right-8 bottom-10 z-10 flex-col items-center gap-3"
        aria-hidden
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase text-white/85"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Scroll
        </span>
        <div className="relative w-px h-16 overflow-hidden bg-white/30">
          <span className="hero-scroll-dot absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-4 bg-white/95" />
        </div>
      </div>

      <style>{`
        @keyframes heroScrollDot {
          0% { transform: translate(-50%, -100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translate(-50%, 400%); opacity: 0; }
        }
        .hero-scroll-dot { animation: heroScrollDot 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
      `}</style>
    </section>
  );
}
