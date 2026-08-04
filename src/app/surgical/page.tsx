import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Placeholder from "@/components/Placeholder";

export const metadata = {
  title: "外科治療｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="その他の治療" enTitle="SURGICAL" jpTitle="外科治療" heroSrc="/photos/surgical-hero.jpg">
      <PageSection enTitle="About" jpTitle="外科治療とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>不正咬合の多くは矯正歯科治療により改善を図ることが可能ですが、単に歯並びが悪いという問題ではなく、顎の位置がずれている・出っ張っている、バランスが悪いなど、矯正歯科治療単独では改善が難しい場合には、矯正治療に加え外科的手術が必要となります。</p>
            <p>矯正歯科治療と併用し外科的手術（顎の手術）を行うことを外科治療といいます。外科矯正治療は美容整形とは全く異なるもので、咬み合わせの改善のために外科治療が必要と医師が診断した時のみ受けることができる治療です。健康保険を適用して受けることが可能です。</p>
          </div>
          <Placeholder label="外科治療の症例" ratio="4/3" className="w-full" />
        </div>
        <div className="mt-10 text-[12px] tracking-wider text-[#9a998e]">【主訴】受け口</div>
      </PageSection>

      <PageSection>
        <div className="text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
