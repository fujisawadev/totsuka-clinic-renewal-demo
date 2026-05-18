import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Placeholder from "@/components/Placeholder";

export const metadata = {
  title: "治療前後の比較｜ささき矯正歯科クリニック",
};

const CASES = [
  { title: "受け口", body: "上の前歯よりも下の前歯が出てしまう受け口は、成長期に急激に大きく成長する特徴があり、骨の成長に合わせて治療を行うことが大切です。" },
  { title: "出っ歯", body: "上顎の前歯の先や上顎の歯全体が前方に飛び出ている状態。見た目だけでなく、歯磨きしにくく虫歯・歯周病のリスクが高まる、奥歯や顎にも負担がかかるなど様々なトラブルにつながります。" },
  { title: "乱杭歯", body: "歯ブラシがしにくく虫歯や歯周病になりやすい傾向に。食事の際に顎にも負担がかかるため、顎関節症の可能性が高まります。" },
  { title: "開咬", body: "咬みあう部分にのみ負荷がかかってしまう状態。長期の指しゃぶり・舌癖・爪を噛む癖などが要因となります。早期に治療を開始するほど効果的です。" },
];

export default function Page() {
  return (
    <SubPageLayout category="症例" enTitle="BEFORE / AFTER" jpTitle="治療前後の比較">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl mb-12">
          当院では治療開始前にさまざまな角度から検査を行い、痛みや不具合などの原因・要因を究明したうえでインフォームドコンセントを行っています。費用や治療期間、複数の治療法がある場合のそれぞれの説明とリスクについてもしっかりご説明したうえで、患者さまのご希望も踏まえて治療方針を決定します。
        </p>
        <div className="space-y-12">
          {CASES.map((c) => (
            <article key={c.title} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
              <div>
                <h3 className="text-xl tracking-wider mb-3">{c.title}</h3>
                <p className="text-[13px] leading-loose text-[#444]">{c.body}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Placeholder label={`${c.title} 治療前`} ratio="4/3" className="w-full" />
                  <p className="text-center mt-2 text-[12px] text-[#9a998e]">Before</p>
                </div>
                <div>
                  <Placeholder label={`${c.title} 治療後`} ratio="4/3" className="w-full" />
                  <p className="text-center mt-2 text-[12px] text-[#9a998e]">After</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
