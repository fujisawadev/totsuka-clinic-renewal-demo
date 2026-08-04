import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "乱杭歯（叢生）｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="歯並びの種類・症状から矯正治療を知る" enTitle="CROWDED TEETH" jpTitle="乱杭歯（叢生）" heroSrc="/photos/hero-clinic.jpg">
      <PageSection enTitle="About" jpTitle="乱杭歯とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>乱杭歯とは、顎の骨のスペースと歯の大きさのアンバランスにより、歯が重なり合って生えていたり歯列から飛び出して凸凹している状態のことを指します。叢生、八重歯とも呼ばれます。</p>
            <p>日本人にもっとも多い歯列不正のひとつで、歯ブラシが届きにくいために虫歯や歯周炎になりやすい傾向にあります。歯や顎の筋肉に負担がかかることでさまざまな弊害を及ぼす可能性もあります。</p>
          </div>
          <Photo src="/photos/case-crowded-front.jpg" alt="乱杭歯の症例（治療前・正面）" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Case" jpTitle="症例" bg="soft">
        <div className="max-w-md">
          <p className="text-[12px] tracking-wider text-[#9a998e] mb-3">【主訴】上の前歯のデコボコ</p>
          <Photo src="/photos/case-crowded-side.jpg" alt="乱杭歯の症例（治療前・側面）" ratio="4/3" className="w-full" />
          <p className="mt-2 text-[12px] text-[#9a998e]">治療前（側面）</p>
        </div>
        <div className="mt-8 text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
