import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "お知らせ｜ささき矯正歯科クリニック",
};

const NEWS = [
  { date: "2026.05.10", tag: "お知らせ", title: "2026年 臨時休診案内", body: "2026/6/23（火）、6/24（水）は休診とさせていただきます。" },
  { date: "2026.03.07", tag: "お知らせ", title: "2026年 GW休診案内", body: "2026/4/30（木）〜 2026/5/7（木）まで休診とさせていただきます。" },
  { date: "2020.04.20", tag: "重要", title: "緊急事態宣言を受けての対応について", body: "コロナウイルス感染拡大防止を目的とした診療体制と患者さんへのお願いをご案内しています。" },
];

export default function Page() {
  return (
    <SubPageLayout category="クリニックからのお知らせ" enTitle="NEWS" jpTitle="お知らせ">
      <PageSection>
        <ul className="divide-y divide-[#e3e3e3]/70">
          {NEWS.map((n) => (
            <li key={n.title} className="py-6 grid grid-cols-1 lg:grid-cols-[8rem_5rem_1fr] gap-2 lg:gap-6 items-baseline">
              <span className="text-[12px] tracking-wider text-[#9a998e]">{n.date}</span>
              <span className="inline-block text-[10px] tracking-widest text-[#9a998e] border border-[#9a998e] px-3 py-1 w-fit">{n.tag}</span>
              <div>
                <a href="#" className="link-underline text-[15px]">{n.title}</a>
                <p className="text-[13px] text-[#666] leading-loose mt-1">{n.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </PageSection>
    </SubPageLayout>
  );
}
