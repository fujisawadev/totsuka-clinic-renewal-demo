import Placeholder from "./Placeholder";

const INFO: Array<[string, React.ReactNode]> = [
  ["住所", "〒000-0000　東京都◯◯区◯◯ 0-0-0 ◯◯ビル B1F"],
  ["アクセス", "〇〇駅 徒歩◯分"],
  ["駐車場", "近隣のコインパーキングをご利用ください"],
  ["電話番号", <a key="tel" href="tel:0300000000" className="link-underline">03-0000-0000</a>],
  ["診療時間", "平日 10:00 – 19:00 ／ 土日 9:00 – 17:00"],
  ["休診日", "水曜・祝日"],
];

function SnsCircle({ initial, label }: { initial: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-[#9a998e] text-white flex items-center justify-center text-sm hover:bg-[#b5b4a8] transition"
    >
      {initial}
    </a>
  );
}

export default function FooterAccess() {
  return (
    <section id="access" className="bg-[#f4f1ea]/30 py-24 lg:py-32">
      <div className="container-clinic">
        <div className="anim text-center mb-16 lg:mb-20">
          <h2 className="section-eyebrow">Access</h2>
          <p className="text-sm text-[#9a998e] tracking-[0.3em] mt-2">アクセス</p>
          <div className="w-12 h-px bg-[#9a998e]/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="anim">
            <Placeholder label="クリニック外観" ratio="4/3" className="w-full" />
          </div>

          <div className="anim anim-delay-1">
            <div className="mb-6">
              <p className="text-2xl tracking-[0.15em]">◯◯歯科クリニック</p>
              <p className="text-[11px] tracking-[0.25em] text-[#9a998e] mt-1">CLINIC NAME ORTHODONTIC CLINIC</p>
            </div>

            <div className="flex gap-3 mb-8">
              <SnsCircle initial="I" label="Instagram" />
              <SnsCircle initial="T" label="Tiktok" />
            </div>

            <dl className="space-y-3 text-[14px] leading-loose">
              {INFO.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[6rem_1fr] gap-4 border-b border-[#e3e3e3]/70 pb-3"
                >
                  <dt className="text-[#9a998e] tracking-wider text-[13px]">{label}</dt>
                  <dd className="text-[#222]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="inline-block bg-[#9a998e] text-white text-sm tracking-widest px-6 py-3 hover:bg-[#b5b4a8] transition"
              >
                Google Map
              </a>
              <a
                href="#"
                className="inline-block border border-[#9a998e] text-[#9a998e] text-sm tracking-widest px-6 py-3 hover:bg-[#9a998e] hover:text-white transition"
              >
                Apple Map
              </a>
            </div>
          </div>
        </div>

        <div className="anim mt-16 lg:mt-20">
          <Placeholder label="Google Map 埋込" ratio="16/6" className="w-full" />
        </div>
      </div>
    </section>
  );
}
