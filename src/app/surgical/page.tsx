import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "外科治療｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="その他の治療" enTitle="SURGICAL" jpTitle="外科治療" heroSrc="/photos/surgical-hero.jpg">
      <PageSection enTitle="About" jpTitle="外科治療とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>不正咬合にもさまざまな種類がありますが、その多くは矯正歯科治療により改善を図ることが可能です。ですが、単に歯並びが悪いという問題ではなく、顎の位置がずれている・出っ張っている、バランスが悪いなど、矯正歯科治療単独では改善が難しい場合には、矯正治療に加え外科的手術が必要になります。つまり、矯正歯科治療と併用し外科的手術（顎の手術）を行うことを外科治療といいます。</p>
            <p>ちなみに、外科矯正治療は美容整形とは全く異なるもので、咬み合わせの改善のために外科治療が必要と医師が診断した時のみ受けることができる治療であり、健康保険を適応し治療を受けることが可能です。</p>
          </div>
          <Photo src="/photos/case-surgical.jpg" alt="外科治療の症例（治療前・正面）" ratio="4/3" className="w-full" />
        </div>
        <div className="mt-10 text-[12px] tracking-wider text-[#9a998e]">【主訴】受け口</div>
      </PageSection>

      <PageSection enTitle="Insurance" jpTitle="保険適用について" bg="soft">
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>矯正歯科治療は一般的には保険適用外ですが、下記の場合に限り保険診療の対象となります。</p>
          <ol className="space-y-3 list-none">
            <li className="flex items-start gap-3 border-b border-[#e3e3e3]/70 pb-3"><span className="text-[#9a998e] shrink-0">①</span><span>「別に厚生労働大臣が定める疾患」に起因した咬合異常に対する矯正歯科治療</span></li>
            <li className="flex items-start gap-3 border-b border-[#e3e3e3]/70 pb-3"><span className="text-[#9a998e] shrink-0">②</span><span>前歯及び小臼歯の永久歯のうち3歯以上の萌出不全に起因した咬合異常（埋伏歯開窓術を必要とするものに限る）に対する矯正歯科治療</span></li>
            <li className="flex items-start gap-3 border-b border-[#e3e3e3]/70 pb-3"><span className="text-[#9a998e] shrink-0">③</span><span>顎変形症（顎離断等の手術を必要とするものに限る）の手術前・後の矯正歯科治療</span></li>
          </ol>
          <p>なお、これら保険適用される矯正歯科治療を行える医療機関は、厚生労働大臣が定める施設基準に適合しているものとして地方厚生（支）局長に届け出た保険医療機関のみになります。</p>
          <p>当院では、保険矯正歯科機関及び適切な医療機関への紹介が可能です。ご相談ください。</p>
        </div>
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
