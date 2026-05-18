import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen min-h-[720px] overflow-hidden text-white"
    >
      <div className="absolute inset-0">
        <Placeholder label="メインビジュアル" className="w-full h-full" />
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.45)]" />
      </div>

      <div className="relative z-10 min-h-screen min-h-[720px] flex flex-col">
        <div className="pt-20 lg:pt-32 px-6 lg:px-10">
          <p className="anim text-[12px] lg:text-[13px] tracking-[0.15em] text-white/95">戸塚駅東口より徒歩3分</p>
          <p className="anim text-[12px] lg:text-[13px] tracking-[0.15em] text-white/95">日本矯正歯科学会 認定医</p>
          <div className="w-12 h-px bg-white/70 my-4 lg:my-5" />
          <div className="anim anim-delay-1">
            <p className="text-[26px] sm:text-[32px] lg:text-[44px] tracking-[0.04em] sm:tracking-[0.1em] lg:tracking-[0.15em] leading-tight">ささき矯正歯科クリニック</p>
            <p className="text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] mt-2 text-white/85">SASAKI ORTHODONTIC CLINIC</p>
          </div>
        </div>

        <div className="flex-1" />

        <div className="px-6 lg:px-10 pb-20 lg:pb-32">
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
