import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "治療前後の比較｜ささき矯正歯科クリニック",
};

const VIEWS = [
  { key: "front", label: "正面" },
  { key: "right", label: "右側面" },
  { key: "left", label: "左側面" },
  { key: "upper", label: "上顎咬合面" },
  { key: "lower", label: "下顎咬合面" },
];

const CASES = [
  { num: "01", age: "17歳5か月", period: "2年6か月" },
  { num: "02", age: "25歳11か月", period: "2年3か月" },
];

function Pair({ caseNum, view }: { caseNum: string; view: { key: string; label: string } }) {
  const base = `/photos/ba-case${Number(caseNum)}-${view.key}`;
  return (
    <div>
      <p className="text-xs tracking-[0.3em] text-[#9a998e] mb-3">{view.label}</p>
      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        <div>
          <Photo src={`${base}-before.jpg`} alt={`症例${caseNum} ${view.label} 治療前`} ratio="3/2" className="w-full" />
          <p className="text-center mt-2 text-[12px] tracking-widest text-[#9a998e]">Before（治療前）</p>
        </div>
        <div>
          <Photo src={`${base}-after.jpg`} alt={`症例${caseNum} ${view.label} 治療後`} ratio="3/2" className="w-full" />
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
        <p className="text-[14px] leading-loose text-[#222] max-w-4xl">
          当院では治療開始前にさまざまな角度から検査を行い、痛みや不具合などの原因・要因を究明したうえでインフォームドコンセントを行っています。費用や治療期間、複数の治療法がある場合のそれぞれの説明とリスクについてもしっかりご説明したうえで、患者さんのご希望も踏まえて治療方針を決定します。
        </p>
        <p className="mt-4 text-[13px] leading-loose text-[#666] max-w-4xl">
          当院で本格的な矯正治療を行った症例をご紹介します。
        </p>
      </PageSection>

      {CASES.map((c, i) => (
        <PageSection key={c.num} enTitle={`Case ${c.num}`} jpTitle={`症例 ${c.num}`} bg={i % 2 === 0 ? "soft" : undefined}>
          <div className="flex flex-wrap gap-x-10 gap-y-2 text-[13px] tracking-wider text-[#444] mb-10">
            <p><span className="text-[#9a998e] mr-3">治療前の年齢</span>{c.age}</p>
            <p><span className="text-[#9a998e] mr-3">治療期間</span>{c.period}</p>
            <p><span className="text-[#9a998e] mr-3">治療内容</span>本格的な矯正治療</p>
          </div>
          <div className="max-w-3xl mb-10">
            <Pair caseNum={c.num} view={VIEWS[0]} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-16">
            {VIEWS.slice(1).map((v) => (
              <Pair key={v.key} caseNum={c.num} view={v} />
            ))}
          </div>
        </PageSection>
      ))}

      <PageSection>
        <div className="text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ プライバシー保護のため、個人を特定できる情報は加工のうえ掲載しています。</p>
          <p>※ 治療の結果には個人差があります。</p>
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
