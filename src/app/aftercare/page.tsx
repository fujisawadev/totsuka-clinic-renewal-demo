import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "アフターケア｜ささき矯正歯科クリニック",
};

const RETAINERS = [
  { title: "マウスピース型の保定装置", body: "ほとんど目立たず取り外しが可能で、歯を全体的に覆うためしっかりとおさえることができます。きちんと歯磨きをしてから装着しないと、比較的虫歯になりやすい欠点があります。" },
  { title: "床タイプの保定装置", body: "取り外しができるため清掃性に優れていますが、使用時間が短いと「あともどり」を起こします。" },
  { title: "固定式保定装置", body: "歯を裏側から固定するため、ほとんど目立たずしっかりと固定できます。比較的汚れが残りやすく、しっかりと歯磨きをしないと虫歯や歯周病になりやすい欠点があります。" },
];

export default function Page() {
  return (
    <SubPageLayout category="治療について" enTitle="AFTERCARE" jpTitle="アフターケア" heroSrc="/photos/aftercare-hero.jpg">
      <PageSection enTitle="Retention" jpTitle="保定治療（あともどりを防ぐために）">
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>本格的な治療が終わって、望んだところに歯が移動し、顔や口もとが改善されても、矯正治療は終わりにはなりません。</p>
          <p>なぜならば、一度動かされた歯や顎は「あともどり」をする傾向があるからです。木を植えたあと根が完全にしっかりするまで「ささえ」が必要なように、動かされた歯が新しい場所に落ちつくまで矯正医は観察を続ける必要があります。</p>
          <p>また、患者様はこの期間も簡単な装置を付けることが必要です。これは矯正治療で歯を動かすことと同じくらい重要なことです。担当医の指示通りに装置を使用しないと、長い期間かけて治療したことが無駄になってしまうことがあります。ただし、この期間の通院はそれほど頻繁ではありません。</p>
        </div>
      </PageSection>

      <PageSection enTitle="Retainers" jpTitle="保定装置について" bg="soft">
        <p className="text-[14px] leading-loose text-[#222] mb-8 max-w-2xl">あともどりを防止するための大切な装置です。</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {RETAINERS.map((r) => (
            <div key={r.title} className="bg-white p-6 lg:p-8">
              <h3 className="text-base mb-3 text-[#9a998e]">{r.title}</h3>
              <p className="text-[13px] leading-loose text-[#444]">{r.body}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
