import Photo from "./Photo";
import GoogleMap from "./GoogleMap";

const INFO: Array<[string, React.ReactNode]> = [
  ["医院名", "ささき矯正歯科クリニック"],
  ["院長", "佐々木 光司"],
  ["住所", "〒244-0816 横浜市戸塚区上倉田町493-1 NOBオグシビル5F"],
  ["アクセス", "戸塚駅東口より徒歩3分"],
  ["TEL", <a key="tel" href="tel:0458712281" className="link-underline">045-871-2281</a>],
  ["FAX", "045-871-2412"],
  [
    "診療時間",
    <span key="hours" className="leading-relaxed">
      平日 10:00 – 12:00 ／ 14:00 – 19:00
      <br />
      土・日 10:00 – 13:00 ／ 15:00 – 19:00
    </span>,
  ],
  ["休診日", "月・木・祝"],
  [
    "駐車場",
    <span key="park" className="leading-relaxed">
      TY上倉田駐車場（アピタななめ向かい・ハックドラッグ脇）と提携。
      <br />
      時間分のサービス券をお渡しします。駐輪場は近隣をご利用ください。
    </span>,
  ],
];

export default function FooterAccess() {
  return (
    <section id="access" className="bg-[#f4f1ea]/30 py-16 lg:py-32 pb-20 lg:pb-32">
      <div className="container-clinic">
        <div className="anim text-center mb-10 lg:mb-20">
          <h2 className="section-eyebrow">Access</h2>
          <p className="text-xs sm:text-sm text-[#9a998e] tracking-[0.3em] mt-2">アクセス</p>
          <div className="w-10 h-px bg-[#9a998e]/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="anim">
            <Photo src="/photos/footer-exterior.jpg" alt="クリニックが入るビルの外観" ratio="4/3" className="w-full" />
          </div>

          <div className="anim anim-delay-1">
            <div className="mb-6">
              <p className="text-xl lg:text-2xl tracking-[0.15em]">ささき矯正歯科クリニック</p>
              <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#9a998e] mt-1">SASAKI ORTHODONTIC CLINIC</p>
            </div>

            <dl className="space-y-3 text-[13px] sm:text-[14px] leading-loose">
              {INFO.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[5rem_1fr] sm:grid-cols-[5.5rem_1fr] gap-3 sm:gap-4 border-b border-[#e3e3e3]/70 pb-3"
                >
                  <dt className="text-[#9a998e] tracking-wider text-[12px] sm:text-[13px]">{label}</dt>
                  <dd className="text-[#222]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex gap-3 flex-wrap">
              <a
                href="https://www.google.com/maps?q=横浜市戸塚区上倉田町493-1"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block bg-[#9a998e] text-white text-sm tracking-widest px-6 py-3 hover:bg-[#b5b4a8] transition"
              >
                Google Map
              </a>
              <a
                href="tel:0458712281"
                className="inline-block border border-[#9a998e] text-[#9a998e] text-sm tracking-widest px-6 py-3 hover:bg-[#9a998e] hover:text-white transition"
              >
                電話で問い合わせる
              </a>
            </div>
          </div>
        </div>

        <div className="anim mt-16 lg:mt-20">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}
