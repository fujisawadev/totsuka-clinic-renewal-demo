import Placeholder from "./Placeholder";

const CARDS = [
  {
    letter: "S",
    num: "01",
    title: "Section",
    jp: "ここに見出しが入ります",
    body: "プレースホルダー本文 ── このコンセプトの説明文が入ります（2〜3行程度を想定）。",
  },
  {
    letter: "O",
    num: "02",
    title: "Section",
    jp: "ここに見出しが入ります",
    body: "プレースホルダー本文 ── このコンセプトの説明文が入ります（2〜3行程度を想定）。",
  },
  {
    letter: "C",
    num: "03",
    title: "Section",
    jp: "ここに見出しが入ります",
    body: "プレースホルダー本文 ── このコンセプトの説明文が入ります（2〜3行程度を想定）。",
  },
];

export default function Concept() {
  return (
    <section
      id="concept"
      className="relative bg-[#f4f1ea]/40 py-24 lg:py-40 overflow-hidden"
    >
      <div className="container-clinic">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 anim">
            <div className="section-label mb-4">Concept</div>
            <h2 className="section-eyebrow mb-10">コンセプト</h2>
            <h3 className="section-title mb-8 leading-snug">
              ここにコンセプトの
              <br />
              リード文が入ります。
            </h3>
            <div className="space-y-5 text-[15px] leading-loose text-[#444]">
              <p>
                ──── プレースホルダー本文 ────<br />
                医院のコンセプト・治療方針を記述するエリアです。実コンテンツに差し替え予定。
              </p>
              <p>
                段落 2：患者さま視点での導入文や、医院として大切にしていることを記述いただく想定です。
              </p>
              <p>
                段落 3：このセクションで伝えたいメッセージの結びを記述いただきます。
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 anim anim-delay-2">
            <Placeholder
              label="コンセプトメイン"
              ratio="3/4"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CARDS.map((c, i) => (
            <article
              key={c.letter}
              className={`anim anim-delay-${Math.min(i + 1, 3)} relative bg-white p-8 lg:p-10 overflow-hidden`}
            >
              <span
                className="absolute -right-2 -top-6 text-[#9a998e]/20 leading-none select-none pointer-events-none"
                style={{ fontSize: 160 }}
              >
                {c.letter}
              </span>
              <Placeholder
                label={`コンセプト${i + 1}`}
                ratio="4/3"
                className="w-full mb-6"
              />
              <div className="relative">
                <div className="text-xs tracking-[0.25em] text-[#9a998e] mb-2">
                  {c.num} / {c.title}
                </div>
                <h4 className="text-lg leading-snug mb-3">{c.jp}</h4>
                <p className="text-[13px] leading-loose text-[#555]">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
