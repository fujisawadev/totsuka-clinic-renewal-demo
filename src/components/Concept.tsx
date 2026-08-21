import Link from "next/link";
import Photo from "./Photo";

const FEATURES = [
  { num: "01", title: "1987年開業以来、地域に根ざした安心安全な矯正歯科治療", body: "開業から続く実績と臨床経験をもとに、地域の皆さまに寄り添いながら、患者様一人ひとりに安心・安全な治療をご提案します。", src: "/photos/feature-exterior.jpg" },
  { num: "02", title: "7,000症例以上の臨床実績を持つ矯正専門医院", body: "矯正治療に特化した専門医院として、開業以来7,000症例を超える臨床実績。学会でも積極的に症例を発表しています。", src: "/photos/feature-director-desk.jpg" },
  { num: "03", title: "日本矯正歯科学会認定医による診療", body: "歯学博士・日本矯正歯科学会認定医の院長が診療を担当。大学病院で臨床教授を務めた経験をもとに、患者様に寄り添った治療をご提供します。", src: "/photos/feature-certificates.jpg" },
];

const CHECKLIST = [
  "歯並び・噛み合わせが気になる方",
  "お子さまの矯正治療を検討中の方",
  "大人になってから矯正を考え始めた方",
  "他院で相談したが踏み出せなかった方",
];

export default function Concept() {
  return (
    <section id="concept" className="relative bg-white py-16 lg:py-40 overflow-hidden">
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
            <h2 className="section-eyebrow mb-2 lg:mb-6">Concept</h2>
            <p className="text-sm tracking-[0.3em] text-[#9a998e] lg:hidden">コンセプト</p>
            <p
              className="hidden lg:block text-[18px] tracking-[0.4em] text-[#9a998e]"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              コンセプト
            </p>
          </div>
          <div className="lg:col-span-6 anim anim-delay-1">
            <div className="space-y-5 text-[15px] leading-loose text-[#222]">
              <p>
                ささき矯正歯科クリニックは、矯正専門の歯科医院です。1987年の開業以来、地域に根ざし、矯正専門の歯科医として大学病院での勤務経験と長年の臨床経験をもとに、患者様一人ひとりに最適な矯正治療をご提供しています。
              </p>
              <p>
                アットホームな雰囲気のなかで、患者様に寄り添った診療を行っておりますので、安心して通院いただけます。
              </p>
            </div>
            <div className="w-full h-px bg-[#e3e3e3] my-10" />
          </div>
          <div className="lg:col-span-4 anim anim-delay-2">
            <Photo src="/photos/concept-counseling.jpg" alt="患者様と対話する院長" ratio="3/4" className="w-full" />
          </div>
        </div>

        <div className="space-y-10 lg:space-y-12">
          {FEATURES.map((f, i) => (
            <article
              key={f.num}
              className={`anim anim-delay-${Math.min(i + 1, 3)} relative h-[220px] sm:h-[280px] lg:h-[360px] overflow-hidden`}
            >
              <Photo src={f.src} alt={f.title} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-[rgba(20,20,20,0.5)]" />
              <div className="relative h-full flex flex-col justify-center px-6 lg:px-16">
                <div className="flex items-center gap-3 lg:gap-4 text-white/90 mb-3 lg:mb-4">
                  <span className="text-sm lg:text-base tracking-widest">{f.num}</span>
                  <span className="w-px h-4 bg-white/40" />
                  <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase">feature</span>
                  <span className="w-8 lg:w-12 h-px bg-white/40" />
                </div>
                <h3 className="text-lg lg:text-3xl text-white tracking-wider leading-snug">{f.title}</h3>
                <p className="text-white/85 text-[12px] lg:text-[14px] leading-loose mt-3 lg:mt-4 max-w-xl">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="anim mt-16 flex justify-center">
          <Link href="/treatment/" className="inline-flex flex-col items-center text-sm text-[#222] hover:text-[#9a998e] transition">
            <span className="text-[11px] tracking-[0.25em] text-[#9a998e] mb-1">当院の特徴</span>
            <span className="flex items-center gap-3 text-lg tracking-wider">
              View more
              <span aria-hidden>→</span>
            </span>
          </Link>
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
              <p>まずは <span className="bg-[#fff7c7] px-1">無料の初診相談</span> で、ご相談ください。</p>
              <p className="mt-2 text-[13px] text-[#666]">お電話 <a href="tel:0458712281" className="link-underline">045-871-2281</a>、または <Link href="/first-visit/" className="link-underline">初診の方へ</Link> ページよりお申し込みいただけます。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
