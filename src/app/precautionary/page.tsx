import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "治療に関するご注意｜ささき矯正歯科クリニック",
};

const MEDICAL = [
  "矯正治療によって歯の根の先が丸くなる（歯根吸収）ことがあります。多くはわずかな吸収ですが、人によっては大きく吸収することもあります。はっきりとした原因は現在のところわかっておりません。",
  "矯正治療中に歯ぐきが下がり、歯が長く見えたり歯と歯の間に隙間が生じたように見えることがあります。加齢により生じることもあり、日常生活に支障はありません。",
  "矯正治療中にまれに歯の中の神経が障害を受け（歯髄壊死）、歯の色が変色することや、歯と骨がくっつくこと（骨性癒着）があります。",
  "矯正治療中に顎の関節部で音がしたり、口が開きにくくなったり、顎関節症様の症状を示す場合があります。顎関節症は矯正治療とは関係なく発症すると言われておりますが、このような症状を生じた場合には早めに担当医にご相談ください。",
  "矯正装置を入れると痛みや違和感を生じることがあります。痛みの程度は患者様によって異なりますが、通常 1 週間くらいでおさまります。",
  "矯正装置を入れると、一時的に咬み合わせが不安定になることや、器具によって傷や口内炎ができることがあります。ご了承ください。",
];

const RETENTION = [
  "矯正治療後、きれいで機能的な歯並びに改善された後も歯並びは一生を通じて変化します。治療後の歯並びを保つために保定装置（リテーナー）を必ず使用します。保定装置の使用方法については必ず担当医の指示に従い、定期的に検診を受けてください。",
  "保定装置を使用しても、顎の異常な成長、歯周病、口腔周囲の悪い癖、鼻咽喉疾患などによる口呼吸、歯ぎしり、加齢変化などによってあと戻りが生じることがあります。",
  "定期的に通院し、保定装置を担当医の指示通りに装着していただいても、あと戻りが生じることがあります。再治療をご希望される場合は、その症状によっては対応できることもありますので、担当医にご相談ください。",
];

export default function Page() {
  return (
    <SubPageLayout category="治療に関するご注意" enTitle="PRECAUTIONARY" jpTitle="治療に関するご注意" heroSrc="/photos/clinic-sterilization.jpg">
      <PageSection enTitle="Medical Notes" jpTitle="矯正治療における医学的不利益および不快事項について">
        <ol className="space-y-4 max-w-3xl">
          {MEDICAL.map((t, i) => (
            <li key={i} className="flex items-start gap-4 border-b border-[#e3e3e3]/70 pb-4">
              <span className="text-[#9a998e] text-sm tracking-widest shrink-0 w-8">{i + 1}.</span>
              <p className="text-[14px] leading-loose text-[#222]">{t}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection enTitle="Growth" jpTitle="成長期のお子さんについて" bg="soft">
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          成長期のお子さんの治療では、顎の予期せぬ成長などが生じることがあります（予測はできません）。その場合には治療方法や治療期間の変更が必要になることがあります。
        </p>
      </PageSection>

      <PageSection enTitle="Retention" jpTitle="保定およびあと戻りについて">
        <ol className="space-y-4 max-w-3xl">
          {RETENTION.map((t, i) => (
            <li key={i} className="flex items-start gap-4 border-b border-[#e3e3e3]/70 pb-4">
              <span className="text-[#9a998e] text-sm tracking-widest shrink-0 w-8">{i + 1}.</span>
              <p className="text-[14px] leading-loose text-[#222]">{t}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection enTitle="Retreatment" jpTitle="再治療について" bg="soft">
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          再治療につきましては、定期的に通院し保定装置を指示通り装着していた場合に限り行います。なお、患者様のご希望に基づき保定装置を除去した後に行う再治療につきましては、保証の対象とはなりませんのでご注意ください。
        </p>
      </PageSection>

      <PageSection enTitle="Discontinuation" jpTitle="矯正治療の中止について">
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          治療途中において患者様自身の判断で来院しなくなった場合、施術料の返却やその後のトラブルについては一切責任を負いかねます。また、最終来院時から 5 年以上経過した場合には初診として扱うことになり、改めて治療費をいただくことになりますのでご注意ください。
        </p>
      </PageSection>
    </SubPageLayout>
  );
}
