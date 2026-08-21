import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import { TYPE_VISUAL } from "@/lib/typeVisual";

export const metadata = {
  title: "すきっ歯（空隙歯列）｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="歯並びの種類・症状から矯正治療を知る" enTitle="SPACED TEETH" jpTitle="すきっ歯（空隙歯列）" heroIllust={TYPE_VISUAL === "illust" ? "/photos/illust-spaced.png" : undefined}>
      <PageSection enTitle="About" jpTitle="すきっ歯とは">
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>すきっ歯とは、歯と歯の間に隙間が空いている歯並びのことを指します。空隙歯列（くうげきしれつ）とも呼ばれ、特に上の前歯の真ん中に隙間がある状態は正中離開と呼ばれます。顎の大きさに対して歯が小さい、生まれつき歯の本数が少ない、舌で前歯を押す癖があるなど、さまざまな原因で生じます。</p>
          <p>隙間に食べ物が挟まりやすく、虫歯や歯周病の原因となりやすいほか、サ行などの発音の際に空気が漏れて聞き取りにくくなることがあります。前歯の隙間は人からも目立ちやすいため、コンプレックスとなりやすい歯並びのひとつです。</p>
          <p>隙間から空気や唾液が漏れることで咀嚼や嚥下にも影響が及ぶ場合があり、見た目だけでなく機能面からも治療をおすすめします。</p>
        </div>
        <div className="mt-8 text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
