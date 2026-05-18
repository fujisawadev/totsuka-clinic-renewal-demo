import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Placeholder from "@/components/Placeholder";

export const metadata = {
  title: "院内紹介・交通｜ささき矯正歯科クリニック",
};

const FACILITIES = [
  { name: "ビル1Fの看板", body: "駅から歩いてくるとシルバーの看板が見えます。" },
  { name: "アピタ側からの看板", body: "アピタ側からくると大きな看板が見えます。" },
  { name: "オグシオビル入口", body: "奥のエレベーターから5Fにお上がりください。" },
  { name: "医院入口", body: "エレベーターから降りてすぐ左です。" },
  { name: "受付", body: "小さいボックスに診察券を入れてください。" },
  { name: "待合室", body: "ウォーターサーバー完備。ご自由にお飲みください。テレビ等を見てくつろげるスペースです。" },
  { name: "歯磨きスペース", body: "矯正治療中はこちらで毎回歯磨きレッスンを行います。" },
  { name: "診療室", body: "明るい診療室です。ベッドは4台あります。" },
  { name: "レントゲン室", body: "レントゲン室にはCTスキャンを完備しております。" },
  { name: "オートクレーブ", body: "使用した器具などを滅菌する装置です。" },
  { name: "相談室", body: "治療についてのお話はこちらで行います。" },
  { name: "本棚", body: "子供向けの本を沢山ご用意しております。" },
];

const INFO: Array<[string, React.ReactNode]> = [
  ["医院名", "ささき矯正歯科クリニック"],
  ["院長", "佐々木 光司"],
  ["住所", "〒244-0816 横浜市戸塚区上倉田町493-1 NOBオグシビル5F"],
  ["TEL", <a key="t" href="tel:0458712281" className="link-underline">045-871-2281</a>],
  ["FAX", "045-871-2412"],
  ["休診日", "月・木・祝"],
  ["診療時間", <span key="h" className="leading-relaxed">平日 10:00 – 12:00 ／ 14:00 – 19:00<br />土・日 10:00 – 13:00 ／ 15:00 – 19:00</span>],
  ["アクセス", "戸塚駅東口より徒歩3分"],
];

export default function Page() {
  return (
    <SubPageLayout category="医院について" enTitle="CLINIC INFO" jpTitle="院内紹介・交通">
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Placeholder label="クリニック外観" ratio="4/3" className="w-full" />
          <dl className="space-y-3 text-[14px] leading-loose">
            {INFO.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[#e3e3e3]/70 pb-3">
                <dt className="text-[#9a998e] tracking-wider text-[13px]">{label}</dt>
                <dd className="text-[#222]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </PageSection>

      <PageSection enTitle="Parking" jpTitle="駐車場について" bg="soft">
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          当院は、アピタななめ向かいのハックドラッグ脇の立体駐車場「TY上倉田駐車場」と提携しております。駐車券をお持ちいただければ時間分のサービス券をお渡しします。駐輪場は提携がないため、近くの駐輪場をご利用ください。
        </p>
      </PageSection>

      <PageSection enTitle="Inside" jpTitle="院内紹介">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f) => (
            <article key={f.name}>
              <Placeholder label={f.name} ratio="4/3" className="w-full mb-3" />
              <h3 className="text-[14px] tracking-wider mb-1">{f.name}</h3>
              <p className="text-[12px] text-[#666] leading-loose">{f.body}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection bg="soft">
        <Placeholder label="Google Map 埋込" ratio="16/6" className="w-full" />
      </PageSection>
    </SubPageLayout>
  );
}
