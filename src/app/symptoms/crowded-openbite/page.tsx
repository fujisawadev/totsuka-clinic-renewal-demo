import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Placeholder from "@/components/Placeholder";

export const metadata = {
  title: "乱杭歯・開咬｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="歯並びの種類・症状から矯正治療を知る" enTitle="CROWDED & OPEN BITE" jpTitle="乱杭歯・開咬">
      <PageSection enTitle="About" jpTitle="乱杭歯とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>乱杭歯とは、顎の骨のスペースと歯の大きさのアンバランスにより、歯が重なり合って生えていたり歯列から飛び出して凸凹している状態のことを指します。叢生、八重歯とも呼ばれます。</p>
            <p>日本人にもっとも多い歯列不正のひとつで、歯ブラシが届きにくいために虫歯や歯周炎になりやすい傾向にあります。歯や顎の筋肉に負担がかかることでさまざまな弊害を及ぼす可能性もあります。</p>
          </div>
          <Placeholder label="乱杭歯の症例" ratio="4/3" className="w-full" />
        </div>
        <div className="mt-10 text-[12px] tracking-wider text-[#9a998e]">【主訴】上の前歯のデコボコ</div>
      </PageSection>

      <PageSection enTitle="About" jpTitle="開咬とは" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>開咬とは不正咬合のひとつで、一般的には咬んだときに奥歯しか咬みあわず前歯が開いてしまっている前歯部開咬のことを指しますが、前歯がしっかり咬みあっても奥歯が開いてしまう状態も開咬です。</p>
            <p>放置していると咬みあう部分にのみ負荷がかかり顎の骨や筋肉を傷める可能性があります。食べ物を上手く噛めないため胃腸への悪影響や嚥下障害を引き起こす可能性もあり、発音にも影響が出ます。常に口が開いた状態のため細菌やウィルスが侵入しやすく、虫歯・歯周病・ドライマウスなどのリスクが高まります。</p>
          </div>
          <Placeholder label="開咬の症例" ratio="4/3" className="w-full" />
        </div>
        <div className="mt-10 text-[12px] tracking-wider text-[#9a998e]">【主訴】前歯で物が噛めない</div>
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
