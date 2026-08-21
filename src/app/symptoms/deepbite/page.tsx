import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import { TYPE_VISUAL } from "@/lib/typeVisual";

export const metadata = {
  title: "過蓋咬合（ディープバイト）｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="歯並びの種類・症状から矯正治療を知る" enTitle="DEEP BITE" jpTitle="過蓋咬合（ディープバイト）" heroIllust={TYPE_VISUAL === "illust" ? "/photos/illust-deepbite.png" : undefined}>
      <PageSection enTitle="About" jpTitle="過蓋咬合とは">
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>過蓋咬合（かがいこうごう）とは、咬み合わせが深く、咬んだときに上の前歯が下の前歯に大きく被さって、下の歯がほとんど見えなくなる状態のことを指します。ディープバイトとも呼ばれます。</p>
          <p>放置していると下の前歯が上の前歯の裏側の歯ぐきに当たって傷つけたり、歯ぐきの炎症を引き起こす可能性があります。顎の動きが制限されるため顎関節に負担がかかりやすく、顎関節症の原因となる場合もあるほか、歯どうしが強く当たることで歯のすり減りや詰め物・被せ物の破損につながりやすい傾向があります。</p>
          <p>外からは歯並びの乱れが目立ちにくいため気づかれにくい不正咬合ですが、歯や顎への負担が大きいため、予防の観点からも治療をおすすめします。</p>
        </div>
        <div className="mt-8 text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
