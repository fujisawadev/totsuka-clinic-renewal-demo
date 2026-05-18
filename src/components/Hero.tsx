import Placeholder from "./Placeholder";

const ANCHORS = [
  { label: "Greeting", href: "#greeting" },
  { label: "Concept", href: "#concept" },
  { label: "Orthodontic Treatment", href: "#orthodontic-treatment" },
  { label: "Counseling", href: "#counseling" },
  { label: "Clinic", href: "#clinic" },
  { label: "Access", href: "#access" },
];

const H1_LINES = [
  "ここにヒーローの",
  "メインコピーが",
  "入ります（最大4行・",
  "後ほど差し替え予定）",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen min-h-[720px] overflow-hidden text-white"
    >
      <div className="absolute inset-0">
        <Placeholder label="ヒーロー背景" className="w-full h-full" />
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.45)]" />
      </div>

      <nav
        aria-label="セクション"
        className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-10"
      >
        <div className="w-px h-16 bg-white/40" />
        {ANCHORS.map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="text-[11px] tracking-[0.25em] uppercase text-white/75 hover:text-white transition"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {a.label}
          </a>
        ))}
        <div className="w-px h-16 bg-white/40" />
      </nav>

      <div className="relative z-10 min-h-screen min-h-[720px] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <p className="anim text-xs tracking-[0.3em] uppercase text-white/80 mb-8">
            ◯◯駅徒歩◯分
          </p>
          <h1 className="space-y-3 text-3xl lg:text-5xl leading-tight">
            {H1_LINES.map((line, i) => (
              <span
                key={i}
                className={`anim anim-delay-${Math.min(i + 1, 3)} block`}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="anim anim-delay-3 mt-10 text-sm lg:text-base text-white/85 leading-loose">
            （プレースホルダー本文）
            <br />
            ここに医院のメッセージが入ります。
          </p>
          <div className="anim anim-delay-3 mt-12 flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border border-white/70 flex items-center justify-center text-[11px] tracking-widest">
              認定医
            </div>
            <p className="text-[11px] tracking-widest text-white/75">
              日本矯正歯科学会 認定医
            </p>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:flex absolute right-10 bottom-10 z-10 flex-col items-center gap-3"
        aria-hidden
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase text-white/70"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Scroll
        </span>
        <div className="relative w-px h-16 overflow-hidden bg-white/30">
          <span className="hero-scroll-dot absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-4 bg-white/90" />
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
