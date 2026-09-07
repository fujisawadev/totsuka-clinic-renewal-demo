import type { ReactNode } from "react";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "矯正治療の進め方｜ささき矯正歯科クリニック",
};

const ROUTES = [
  { label: "すぐに本格的治療を始める場合", steps: ["本格的治療"] },
  { label: "段階を分けて治療する場合", steps: ["前の歯・一部の歯だけの治療", "観察", "本格的治療"] },
  { label: "時期を見きわめて治療する場合", steps: ["観察（経過観察）", "本格的治療"] },
  { label: "外科的な処置が必要な場合", steps: ["外科的処理を伴う治療"] },
];

function Chip({ children, tone = "plain" }: { children: ReactNode; tone?: "plain" | "accent" }) {
  return (
    <span
      className={
        tone === "accent"
          ? "inline-block bg-[#9a998e] text-white text-[13px] tracking-wider px-4 py-2.5 text-center"
          : "inline-block bg-white border border-[#e3e3e3] text-[#222] text-[13px] tracking-wider px-4 py-2.5 text-center"
      }
    >
      {children}
    </span>
  );
}

function Arrow() {
  return <span aria-hidden className="text-[#9a998e] text-sm shrink-0">→</span>;
}

function DownArrow() {
  return <div aria-hidden className="my-2 ml-6 text-[#9a998e]">↓</div>;
}

function FlowDiagram() {
  return (
    <div className="max-w-3xl">
      {/* 共通ステップ（縦につないで診断まで一本の流れにする） */}
      <div className="flex flex-col items-start">
        <Chip tone="accent">初診・矯正相談</Chip>
        <DownArrow />
        <Chip>検査</Chip>
        <DownArrow />
        <Chip>診断</Chip>
        <DownArrow />
      </div>
      <p className="text-[13px] leading-loose text-[#666] mb-4">
        診断の結果に応じて、主に次のいずれかの進め方をご提案します。
      </p>

      {/* 4つの経路 */}
      <div className="space-y-3">
        {ROUTES.map((r) => (
          <div key={r.label} className="border border-[#e3e3e3] bg-white/60 p-4 lg:p-5">
            <p className="text-[11px] tracking-[0.2em] text-[#9a998e] mb-3">{r.label}</p>
            <div className="flex flex-wrap items-center gap-3">
              {r.steps.map((s, i) => (
                <span key={s} className="contents">
                  {i > 0 && <Arrow />}
                  <Chip>{s}</Chip>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div aria-hidden className="mt-4 mb-2 ml-6 text-[#9a998e]">↓</div>

      {/* 共通の仕上げ */}
      <div className="flex flex-wrap items-center gap-3">
        <Chip>あともどりを防ぐ治療（保定）</Chip>
        <Arrow />
        <Chip tone="accent">治療終了</Chip>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <SubPageLayout category="矯正治療" enTitle="PROCESS" jpTitle="矯正治療の進め方" heroSrc="/photos/process-hero.jpg">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-4xl">
          矯正医は不正咬合についての相談を受けた場合、治療に先がけて様々な検査を行います。単に口や歯の状態を見ただけでは診断がつかないからです。
          検査内容は通常、レントゲン写真、顔や歯の写真、上下の歯のかたをとること、いろいろな計測などです。
          これらの資料を検討して、治療の進め方、料金、治療期間などをご説明いたします。
        </p>
      </PageSection>

      <PageSection enTitle="Flow" jpTitle="治療の流れ" bg="soft">
        <FlowDiagram />
        <div className="mt-12 max-w-4xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>不正咬合は個々によって千差万別です。そのため、どのような症例もすぐに矯正治療を始めた方がよいというわけではありません。特に患者さんがお子さんの場合、矯正医は治療を始める適当な時期を決定します。その方がより効果的な治療が行えるからです。このような場合は、3〜6か月おきの定期診査だけで結構です。</p>
          <p>一方で、できるだけ早く治療を始めた方がよく、長期間の治療をしなければ効果のない場合もあります。前の歯の乱れや一部の歯の不正だけの治療をして歯の生え代わりを待ち、その後本格的な治療をする「2段がまえ」の治療が望ましい場合もあります。</p>
          <p>矯正装置をつけた本格的な治療が始まると、患者さんは月に1回、時には2回の来院が必要となります。いろいろな矯正装置がありますが、いずれにしても月に最低1回の調節がぜひ必要です。調節しない矯正装置は、ガソリンの切れた自動車と同じで、歯を動かす役には立ちません。</p>
        </div>
      </PageSection>

      <PageSection enTitle="Duration" jpTitle="治療期間について">
        <div className="max-w-4xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>矯正治療は人によって期間がまちまちですが、本格的な矯正治療をする期間は2〜3年、場合によっては7〜8年とお考えください。</p>
          <p>このように治療に長期間を必要とする理由は、不正な関係にある上下の顎の成長発育の経路を正常な軌道にのせること、また歯の生え代わる時期に起こってくる咬み合わせの不正を正常な方向に導くことも矯正治療の重要な目的だからです。</p>
          <p>そして、顎の骨の中に植っている歯を、歯やそのまわりの部分に障害を与えないように徐々に移動させようとするので時間がかかります。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
