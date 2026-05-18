import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "矯正治療について｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="矯正治療" enTitle="ABOUT ORTHODONTICS" jpTitle="矯正治療について">
      <PageSection>
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>健康で文化的な生活を送ることは現代人の誰もが望むことです。そして私たちは、健康であるとともに美しくありたいと願っています。きれいに並んだ白い歯は美しさの大きな要素です。</p>
          <p>矯正治療とは、上顎と下顎の歯の咬み合わせをよくすることによって、食物をよく咬めるようにすることを目的とした医学です。歯が正しく咬みあわないと食物はよく咬めません。その結果、胃や腸などの消化器官の負担が大きくなります。乱れた歯並びは清掃が難しく、虫歯や歯周病にかかりやすくなります。</p>
          <p>さらに悪い歯並びは、顎の正常な発育を妨げる場合もあり、発音にも関係するため心理的な負担となることもあります。矯正治療は、このような障害を取り除き、肉体的にも精神的にも健康を一段と増進させるために行われます。</p>
          <p>矯正治療は人によって期間がまちまちですが、本格的な治療期間は2〜3年、場合によっては7〜8年とお考えください。通院回数は月に1〜2回程度です。</p>
        </div>
      </PageSection>

      <PageSection enTitle="Cooperation" jpTitle="患者さん・保護者の方の協力が大切です" bg="soft">
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>現代の矯正治療の進歩は目ざましいものがあり、矯正医は子供から大人までほとんどすべての症例を正確に診断し、悪い歯並びをより早く・より効果的に治療できるようになってきています。</p>
          <p>しかし、時には顎の異常な発育により治療期間が長引いたり、治療方針が変更になることもあります。与えられた矯正装置の使用時間が短かったり使用しなかったりすると「あともどり」が起こる場合もありますし、歯磨きを怠ったために歯並びは改善したものの虫歯や歯周病になってしまうこともあります。</p>
          <p>より良い治療結果を得るためには、患者さん・保護者の方の協力が非常に大切です。担当医の指示に従い、健康で美しい歯並びのために頑張りましょう。素晴らしい笑顔で未来へ思い切りはばたいてください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
