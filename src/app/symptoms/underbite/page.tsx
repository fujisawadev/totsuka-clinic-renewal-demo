import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "うけ口（下顎前突）｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="歯並びの種類・症状から矯正治療を知る" enTitle="UNDERBITE" jpTitle="うけ口（下顎前突）" heroSrc="/photos/model-underbite-side.jpg">
      <PageSection enTitle="About" jpTitle="うけ口とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>うけ口とは、上顎の前歯より下顎の前歯のほうが前に出ている歯並びのことを指します。専門的には「下顎前突（かがくぜんとつ）」や「反対咬合（はんたいこうごう）」と呼ばれます。</p>
            <p>うけ口をそのままにしておくと、咬み合わせが悪いため食べ物をよく咬むことができず、胃への負担が大きくなりがちです。また、正しい発音がしにくくなり、日常生活でのストレスを感じることもあります。</p>
            <p>成長期には骨格の成長に合わせた治療を行うことが大切です。骨格的なズレが大きい場合は、外科的矯正治療が必要となるケースもあります。</p>
          </div>
          <Photo src="/photos/case-underbite-front.jpg" alt="うけ口の症例（治療前・正面）" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Case" jpTitle="症例" bg="soft">
        <div className="max-w-md">
          <p className="text-[12px] tracking-wider text-[#9a998e] mb-3">【主訴】受け口</p>
          <Photo src="/photos/case-underbite-side.jpg" alt="うけ口の症例（治療前・側面）" ratio="4/3" className="w-full" />
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
