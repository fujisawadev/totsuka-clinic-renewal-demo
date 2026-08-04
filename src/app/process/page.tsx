import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "矯正治療の進め方｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="矯正治療" enTitle="PROCESS" jpTitle="矯正治療の進め方" heroSrc="/photos/process-hero.jpg">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          矯正医は不正咬合についての相談を受けた場合、治療に先がけて様々な検査を行います。単に口や歯の状態を見ただけでは診断がつかないからです。
          検査内容は通常、レントゲン写真、顔や歯の写真、上下の歯のかたをとること、いろいろな計測などです。
          これらの資料を検討して、治療の進め方、料金、治療期間などをご説明いたします。
        </p>
      </PageSection>

      <PageSection enTitle="Flow" jpTitle="治療の流れ" bg="soft">
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>不正咬合は個々によって千差万別です。そのため、どのような症例もすぐに矯正治療を始めた方がよいというわけではありません。特に患者さんがお子さんの場合、矯正医は治療を始める適当な時期を決定します。その方がより効果的な治療が行えるからです。このような場合は、3〜6か月おきの定期診査だけで結構です。</p>
          <p>一方で、できるだけ早く治療を始めた方がよく、長期間の治療をしなければ効果のない場合もあります。前の歯の乱れや一部の歯の不正だけの治療をして歯の生え代わりを待ち、その後本格的な治療をする「2段がまえ」の治療が望ましい場合もあります。</p>
          <p>矯正装置をつけた本格的な治療が始まると、患者さんは月に1回、時には2回の来院が必要となります。いろいろな矯正装置がありますが、いずれにしても月に最低1回の調節がぜひ必要です。調節しない矯正装置は、ガソリンの切れた自動車と同じで、歯を動かす役には立ちません。</p>
        </div>
      </PageSection>

      <PageSection enTitle="Duration" jpTitle="治療期間について">
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>矯正治療は人によって期間がまちまちですが、本格的な矯正治療をする期間は2〜3年、場合によっては7〜8年とお考えください。</p>
          <p>このように治療に長期間を必要とする理由は、不正な関係にある上下の顎の成長発育の経路を正常な軌道にのせること、また歯の生え代わる時期に起こってくる咬み合わせの不正を正常な方向に導くことも矯正治療の重要な目的だからです。</p>
          <p>そして、顎の骨の中に植っている歯を、歯やそのまわりの部分に障害を与えないように徐々に移動させようとするので時間がかかります。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
