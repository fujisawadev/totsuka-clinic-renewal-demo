import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen min-h-[720px] overflow-hidden text-white"
    >
      <div className="absolute inset-0">
        <Placeholder label="メインビジュアル" className="w-full h-full" />
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.35)]" />
      </div>

      <div className="relative z-10 min-h-screen min-h-[720px] flex flex-col">
        <div className="pt-28 lg:pt-32 px-6 lg:px-10">
          <p className="anim text-[11px] lg:text-[13px] tracking-[0.15em] text-white/95">◯◯駅徒歩◯分</p>
          <p className="anim text-[11px] lg:text-[13px] tracking-[0.15em] text-white/95">日本矯正歯科学会 認定医</p>
          <div className="w-12 h-px bg-white/70 my-4 lg:my-5" />
          <div className="anim anim-delay-1">
            <p className="text-2xl lg:text-3xl tracking-[0.2em]">◯◯歯科クリニック</p>
            <p className="text-[10px] lg:text-[11px] tracking-[0.3em] mt-2 text-white/85">CLINIC NAME ORTHODONTIC CLINIC</p>
          </div>
        </div>

        <div className="flex-1" />

        <div className="px-6 lg:px-10 pb-24 lg:pb-32">
          <h1 className="anim anim-delay-2 text-base lg:text-xl leading-[2] tracking-wider text-white/95">
            ここにキャッチコピーが入ります。
            <br />
            （2〜3行・後ほど差し替え予定）
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
