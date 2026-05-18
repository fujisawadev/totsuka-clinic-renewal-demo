import Placeholder from "./Placeholder";

const FEATURES = [
  { num: "01", title: "ここに特徴 1 のタイトル" },
  { num: "02", title: "ここに特徴 2 のタイトル" },
  { num: "03", title: "ここに特徴 3 のタイトル" },
];

const CHECKLIST = [
  "チェック項目 1（プレースホルダー）",
  "チェック項目 2（プレースホルダー）",
  "チェック項目 3（プレースホルダー）",
  "チェック項目 4（プレースホルダー）",
];

export default function Concept() {
  return (
    <section id="concept" className="relative bg-white py-24 lg:py-40 overflow-hidden">
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 left-[5%] w-[280px] h-[280px] border-[14px] border-[#9a998e]/15 pointer-events-none"
      />
      <div
        aria-hidden
        className="hidden lg:block absolute top-[20%] right-[8%] w-[220px] h-[220px] border-[14px] border-[#9a998e]/15 pointer-events-none"
      />
      <div
        aria-hidden
        className="hidden lg:block absolute top-[55%] left-[18%] w-[260px] h-[260px] border-[14px] border-[#9a998e]/15 pointer-events-none"
      />

      <div className="container-clinic relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-2 anim">
            <h2 className="section-eyebrow mb-6">Concept</h2>
            <p
              className="text-[18px] tracking-[0.4em] text-[#9a998e]"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              コンセプト
            </p>
          </div>
          <div className="lg:col-span-6 anim anim-delay-1">
            <div className="space-y-5 text-[15px] leading-loose text-[#222]">
              <p>──── プレースホルダー本文 ────</p>
              <p>このセクションの導入文が入ります。読者の悩みや想いに語りかける文章を 5〜8 行程度で記述いただく想定です。実コンテンツに差し替え予定。</p>
              <p>段落 2：医院として伝えたいメッセージを記述いただきます。</p>
            </div>
            <div className="w-full h-px bg-[#e3e3e3] my-10" />
          </div>
          <div className="lg:col-span-4 anim anim-delay-2">
            <Placeholder label="コンセプト写真" ratio="3/4" className="w-full" />
          </div>
        </div>

        <div className="space-y-10 lg:space-y-12">
          {FEATURES.map((f, i) => (
            <article
              key={f.num}
              className={`anim anim-delay-${Math.min(i + 1, 3)} relative h-[260px] lg:h-[360px] overflow-hidden`}
            >
              <Placeholder label={`特徴 ${f.num}`} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-[rgba(20,20,20,0.45)]" />
              <div className="relative h-full flex flex-col justify-center px-8 lg:px-16">
                <div className="flex items-center gap-4 text-white/90 mb-4">
                  <span className="text-base tracking-widest">{f.num}</span>
                  <span className="w-px h-4 bg-white/40" />
                  <span className="text-xs tracking-[0.3em] uppercase">feature</span>
                  <span className="w-12 h-px bg-white/40" />
                </div>
                <h3 className="text-xl lg:text-3xl text-white tracking-wider">{f.title}</h3>
                <p className="text-white/85 text-[13px] lg:text-[14px] leading-loose mt-4 max-w-xl">
                  プレースホルダー本文 ── 各特徴の説明文がここに入ります（2〜3行を想定）。
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="anim mt-16 flex justify-center">
          <a href="#" className="inline-flex flex-col items-center text-sm text-[#222] hover:text-[#9a998e] transition">
            <span className="text-[11px] tracking-[0.25em] text-[#9a998e] mb-1">当院の特徴</span>
            <span className="flex items-center gap-3 text-lg tracking-wider">
              View more
              <span aria-hidden>→</span>
            </span>
          </a>
        </div>

        <div className="mt-24 lg:mt-32 bg-[#f4f1ea]/50 py-12 lg:py-16 px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
            <ul className="anim space-y-3 text-[14px]">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span aria-hidden className="inline-block mt-1 w-4 h-4 border border-[#9a998e] flex items-center justify-center text-[10px] text-[#9a998e] shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block text-[#9a998e] text-3xl">▸</div>
            <div className="anim anim-delay-1 text-[15px] leading-loose">
              <p>本当に信頼できる矯正治療をお探しのあなたへ ──</p>
              <p className="mt-2">まずは <span className="bg-[#fff7c7] px-1">無料カウンセリング</span> から、当院の矯正治療に触れてみてください。</p>
              <p className="mt-1 text-[13px] text-[#9a998e]">（プレースホルダー：実コピーに差し替え予定）</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
