import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "抜歯について｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="治療について" enTitle="EXTRACTION" jpTitle="抜歯について" heroSrc="/photos/treatment-hero.jpg">
      <PageSection>
        <div className="max-w-3xl space-y-4 text-[14px] leading-loose text-[#222]">
          <p>矯正治療を進めるにあたって、ご理解いただきたいことがあります。それは、矯正治療のために永久歯を抜く場合があることです。</p>
          <p>歯の大きさと顎の骨の大きさが明らかに釣り合わず、通常の歯の数ではどうしても良い咬み合わせや調和のとれた顔かたちを得ることができない場合に抜歯が行われます。</p>
          <p>分かりやすく例えると、9人掛けの長椅子に10人の人が座ると、それぞれが窮屈になってしまいます。ゆったりと正しい姿勢で座るためには、やはり9人である必要があります。これが矯正治療における抜歯の目的です。</p>
          <p>つまり、それぞれの顎の大きさにあった理想的な歯の数に調整するとお考えください。歯の数を減らすことが、咬む力を弱めたり身体に害を及ぼすことは決してありません。</p>
          <p>歯を抜くことは不愉快なことに違いありませんが、矯正治療を進める上でどうしても必要な場合があることをご了承ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
