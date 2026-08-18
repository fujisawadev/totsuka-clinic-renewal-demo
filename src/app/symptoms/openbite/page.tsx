import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";
import { TYPE_VISUAL } from "@/lib/typeVisual";

export const metadata = {
  title: "開咬｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="歯並びの種類・症状から矯正治療を知る" enTitle="OPEN BITE" jpTitle="開咬" heroSrc="/photos/model-openbite-side.jpg" heroIllust={TYPE_VISUAL === "illust" ? "/photos/illust-openbite.png" : undefined}>
      <PageSection enTitle="About" jpTitle="開咬とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>開咬とは不正咬合のひとつで、一般的には咬んだときに奥歯しか咬みあわず前歯が開いてしまっている前歯部開咬のことを指しますが、前歯がしっかり咬みあっても奥歯が開いてしまう状態も開咬です。</p>
            <p>放置していると咬みあう部分にのみ負荷がかかり顎の骨や筋肉を傷める可能性があります。食べ物を上手く噛めないため胃腸への悪影響や嚥下障害を引き起こす可能性もあり、発音にも影響が出ます。常に口が開いた状態のため細菌やウィルスが侵入しやすく、虫歯・歯周病・ドライマウスなどのリスクが高まります。</p>
          </div>
          <Photo src="/photos/case-openbite-front.jpg" alt="開咬の症例（治療前・正面）" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Case" jpTitle="症例" bg="soft">
        <div className="max-w-md">
          <p className="text-[12px] tracking-wider text-[#9a998e] mb-3">【主訴】前歯で物が噛めない</p>
          <Photo src="/photos/case-openbite-side.jpg" alt="開咬の症例（治療前・側面）" ratio="4/3" className="w-full" />
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
