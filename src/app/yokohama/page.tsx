import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import faqs from "@/content/yokohama-faqs.json";

export const metadata = {
  title: "横浜の矯正歯科｜ささき矯正歯科クリニック",
  description: "横浜で矯正歯科をお探しの方へ。ささき矯正歯科クリニックの紹介と、矯正歯科に関するよくある質問集（94件）。",
};

const SECTIONS = [
  { num: "01", title: "横浜で臨床実績の豊富な歯列矯正歯科とは？" },
  { num: "02", title: "矯正歯科治療が初めての方、検討されている方へ" },
  { num: "03", title: "歯科矯正における3つのお悩みについて" },
  { num: "04", title: "矯正歯科での矯正装置の種類について" },
  { num: "05", title: "横浜市戸塚区の矯正歯科に通院される患者さんのエリアが広い理由" },
  { num: "06", title: "横浜の歯列矯正歯科の矯正治療費用の目安" },
  { num: "07", title: "横浜の歯列矯正歯科が選ばれる3つのポイント" },
  { num: "08", title: "横浜の矯正歯科クリニックと他院との違い" },
  { num: "09", title: "横浜の矯正歯科にお聞きした患者様からの相談事例" },
  { num: "10", title: "横浜の矯正歯科によくある3つの質問" },
  { num: "11", title: "歯列矯正歯科選びの注意点" },
  { num: "12", title: "歯列矯正における医療用語の解説" },
];

type FaqItem = { slug: string; date: string; q: string; excerpt: string };

export default function Page() {
  const list = faqs as FaqItem[];
  return (
    <SubPageLayout category="エリア情報" enTitle="YOKOHAMA" jpTitle="横浜の矯正歯科">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          横浜で信頼できる矯正歯科医院をお探しの方へ。
          約 30 年間で 6000 症例以上の臨床経験を持つ矯正治療専門の当クリニックでは、戸塚駅から徒歩 3 分、夜 7 時まで診察を受けられる利便性のもと、患者さま一人ひとりに最適な治療をご提案します。
          このページでは、横浜で矯正歯科をお探しの方に向けた情報と、よくある質問への回答をまとめています。
        </p>
      </PageSection>

      <PageSection enTitle="Topics" jpTitle="このページの目次" bg="soft">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map((s) => (
            <li key={s.num} className="bg-white p-5 flex items-start gap-3">
              <span className="text-[#9a998e] text-xs tracking-[0.25em] shrink-0 w-6">{s.num}</span>
              <span className="text-[13px] leading-relaxed text-[#222]">{s.title}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[12px] text-[#666]">
          ※ 各セクションの本文は、コンテンツ確定後に流し込み予定です。新サイトでは各 Q&amp;A 記事を独立ページとして移管しています。
        </p>
      </PageSection>

      <PageSection enTitle="Q&A Articles" jpTitle={`矯正歯科に関する Q&A（${list.length} 件）`}>
        <p className="text-[14px] leading-loose text-[#222] mb-8 max-w-2xl">
          矯正歯科に関する具体的なご質問について、これまでに回答した Q&amp;A 記事の一覧です。
        </p>
        <ul className="divide-y divide-[#e3e3e3]/70 border-t border-[#e3e3e3]/70">
          {list.map((f) => (
            <li key={f.slug} className="py-4 grid grid-cols-[6rem_1fr] gap-4 items-baseline">
              <span className="text-[12px] tracking-wider text-[#9a998e]">{f.date}</span>
              <a href={`/yokohama/${f.slug}/`} className="link-underline text-[14px]">
                {f.q}
              </a>
            </li>
          ))}
        </ul>
      </PageSection>
    </SubPageLayout>
  );
}
