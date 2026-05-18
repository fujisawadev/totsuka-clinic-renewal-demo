import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Placeholder from "@/components/Placeholder";

export const metadata = {
  title: "出っ歯（上顎前突）｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="歯並びの種類・症状から矯正治療を知る" enTitle="OVERBITE" jpTitle="出っ歯（上顎前突）">
      <PageSection enTitle="About" jpTitle="出っ歯とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>出っ歯は、上顎の前歯の先端部分、もしくは上顎の前歯全体が突き出ている歯並びのことを指します。反っ歯（そっぱ）とも呼ばれます。</p>
            <p>人からも目立ちやすいためコンプレックスとなりやすい一方、見た目以外にも歯磨きしても汚れを取り除きにくい、口を閉じにくいため細菌が侵入しやすい、虫歯や歯周病になりやすい、ドライマウスになりやすいなどの傾向があります。</p>
            <p>前歯で上手に咬むことができないため奥歯や顎にも負担がかかり、顎関節症の原因となる場合もあります。見た目だけでなく予防の観点からも治療をおすすめします。</p>
          </div>
          <Placeholder label="症例イメージ" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Case" jpTitle="症例" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-[12px] tracking-wider text-[#9a998e] mb-3">【主訴】出っ歯</p>
            <Placeholder label="治療前" ratio="4/3" className="w-full" />
            <p className="text-center mt-2 text-[12px] text-[#9a998e]">Before</p>
          </div>
          <div>
            <p className="text-[12px] tracking-wider text-[#9a998e] mb-3 invisible">.</p>
            <Placeholder label="治療後" ratio="4/3" className="w-full" />
            <p className="text-center mt-2 text-[12px] text-[#9a998e]">After</p>
          </div>
        </div>
        <div className="mt-8 text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ 治療費については <a href="/pricing/" className="link-underline">矯正治療料金</a> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <a href="/risk/" className="link-underline">リスク・副作用について</a> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
