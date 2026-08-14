import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "治療前後の比較｜ささき矯正歯科クリニック",
};

const CASES = [
  {
    num: "01",
    face: { before: "/photos/ba-case1-face-before.jpg", after: "/photos/ba-case1-face-after.jpg" },
    oral: { before: "/photos/ba-case1-oral-before.jpg", after: "/photos/ba-case1-oral-after.jpg" },
  },
  {
    num: "02",
    face: { before: "/photos/ba-case2-face-before.jpg", after: "/photos/ba-case2-face-after.jpg" },
    oral: { before: "/photos/ba-case2-oral-before.jpg", after: "/photos/ba-case2-oral-after.jpg" },
  },
];

function Pair({
  before,
  after,
  ratio,
  label,
}: {
  before: string;
  after: string;
  ratio: "3/4" | "3/2";
  label: string;
}) {
  return (
    <div>
      <p className="text-xs tracking-[0.3em] text-[#9a998e] mb-3">{label}</p>
      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        <div>
          <Photo src={before} alt={`${label} 治療前`} ratio={ratio} className="w-full" />
          <p className="text-center mt-2 text-[12px] tracking-widest text-[#9a998e]">Before（治療前）</p>
        </div>
        <div>
          <Photo src={after} alt={`${label} 治療後`} ratio={ratio} className="w-full" />
          <p className="text-center mt-2 text-[12px] tracking-widest text-[#9a998e]">After（治療後）</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <SubPageLayout category="症例" enTitle="BEFORE / AFTER" jpTitle="治療前後の比較">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          当院では治療開始前にさまざまな角度から検査を行い、痛みや不具合などの原因・要因を究明したうえでインフォームドコンセントを行っています。費用や治療期間、複数の治療法がある場合のそれぞれの説明とリスクについてもしっかりご説明したうえで、患者さまのご希望も踏まえて治療方針を決定します。
        </p>
        <p className="mt-4 text-[13px] leading-loose text-[#666] max-w-3xl">
          当院で本格的な矯正治療を行った症例をご紹介します。
        </p>
      </PageSection>

      {CASES.map((c, i) => (
        <PageSection key={c.num} enTitle={`Case ${c.num}`} jpTitle={`症例 ${c.num}`} bg={i % 2 === 0 ? "soft" : undefined}>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start max-w-5xl">
            <Pair before={c.face.before} after={c.face.after} ratio="3/4" label="顔貌" />
            <Pair before={c.oral.before} after={c.oral.after} ratio="3/2" label="口腔内（正面）" />
          </div>
        </PageSection>
      ))}

      <PageSection>
        <div className="text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ プライバシー保護のため、目元を隠して掲載しています。</p>
          <p>※ 治療の結果には個人差があります。</p>
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
