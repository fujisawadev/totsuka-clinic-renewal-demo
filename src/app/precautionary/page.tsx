import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "治療に関するご注意｜ささき矯正歯科クリニック",
};

const ITEMS = [
  "矯正治療によって歯の根の先が丸くなる（歯根吸収）ことがあります。多くはわずかな吸収ですが、人によっては大きく吸収することもあります。はっきりとした原因は現在のところわかっておりません。",
  "矯正治療中に歯ぐきが下がり、歯が長く見えたり歯と歯の間に隙間が生じたように見えることがあります。加齢により生じることもあり、日常生活に支障はありません。",
  "矯正治療中にまれに歯の中の神経が障害を受け（歯髄壊死）、歯の色が変色することや、歯と骨がくっつくこと（骨性癒着）があります。",
  "矯正治療中に顎の関節部で音がしたり、口が開きにくくなったり、顎関節症様の症状を示す場合があります。顎関節症は矯正治療とは関係なく発症すると言われておりますが、このような症状を生じた場合には早めに担当医にご相談ください。",
];

export default function Page() {
  return (
    <SubPageLayout category="治療に関するご注意" enTitle="PRECAUTIONARY" jpTitle="治療に関するご注意">
      <PageSection>
        <h2 className="text-lg lg:text-xl tracking-wider mb-8">矯正治療における医学的不利益および不快事項について</h2>
        <ol className="space-y-4 max-w-3xl">
          {ITEMS.map((t, i) => (
            <li key={i} className="flex items-start gap-4 border-b border-[#e3e3e3]/70 pb-4">
              <span className="text-[#9a998e] text-sm tracking-widest shrink-0 w-8">{i + 1}.</span>
              <p className="text-[14px] leading-loose text-[#222]">{t}</p>
            </li>
          ))}
        </ol>
      </PageSection>
    </SubPageLayout>
  );
}
