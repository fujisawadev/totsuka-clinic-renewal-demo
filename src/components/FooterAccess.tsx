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
    <section id="access" className="bg-[#f4f1ea]/25 py-24 lg:py-28">
      <div className="container-clinic">
        <div className="anim mb-16">
          <div className="section-label mb-4">Access</div>
          <h2 className="section-eyebrow">アクセス</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="anim">
            <div className="placeholder mb-6" style={{ width: 180, height: 36 }}>
              <span>クリニックロゴ</span>
            </div>

            <div className="flex gap-3 mb-10">
              <SnsCircle initial="I" label="Instagram" />
              <SnsCircle initial="T" label="Tiktok" />
            </div>

            <dl className="space-y-4 text-[14px] leading-loose">
              {INFO.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-b border-[#e3e3e3] pb-3"
                >
                  <dt className="text-[#9a998e] tracking-wider">{label}</dt>
                  <dd className="text-[#222]">{value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#"
              className="mt-8 inline-block bg-[#9a998e] text-white text-sm tracking-widest px-6 py-3 hover:bg-[#b5b4a8] transition"
            >
              Google Mapで見る
            </a>
          </div>

          <div className="space-y-6 anim anim-delay-1">
            <Placeholder label="Google Map" ratio="16/9" className="w-full" />
            <Placeholder label="クリニック外観" ratio="16/9" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
