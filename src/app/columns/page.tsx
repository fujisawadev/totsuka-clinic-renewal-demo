import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import faqs from "@/content/yokohama-faqs.json";

export const metadata = {
  title: "矯正歯科コラム｜ささき矯正歯科クリニック",
  description: "矯正歯科に関するよくあるご質問・コラム記事を 94 本まとめています。横浜・戸塚エリアで矯正歯科をお探しの方の参考にどうぞ。",
};

const SECTIONS = [
  { num: "01", title: "横浜で臨床実績の豊富な歯列矯正歯科とは？" },
  { num: "02", title: "矯正歯科治療が初めての方、検討されている方へ" },
  { num: "03", title: "歯科矯正における 3 つのお悩みについて" },
  { num: "04", title: "矯正歯科での矯正装置の種類について" },
  { num: "05", title: "横浜市戸塚区の矯正歯科に通院される患者さんのエリアが広い理由" },
  { num: "06", title: "横浜の歯列矯正歯科の矯正治療費用の目安" },
  { num: "07", title: "横浜の歯列矯正歯科が選ばれる 3 つのポイント" },
  { num: "08", title: "横浜の矯正歯科クリニックと他院との違い" },
  { num: "09", title: "横浜の矯正歯科にお聞きした患者様からの相談事例" },
  { num: "10", title: "横浜の矯正歯科によくある 3 つの質問" },
  { num: "11", title: "歯列矯正歯科選びの注意点" },
  { num: "12", title: "歯列矯正における医療用語の解説" },
];

type FaqItem = { slug: string; date: string; q: string; excerpt: string };

export default function Page() {
  const list = faqs as FaqItem[];
  return (
    <SubPageLayout category="コラム・お役立ち情報" enTitle="COLUMNS" jpTitle="矯正歯科コラム" heroSrc="/photos/facility-books.jpg">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          矯正歯科に関するよくあるご質問や、矯正治療を検討中の方に役立つ情報をコラム形式でまとめています。横浜・戸塚エリアで矯正歯科をお探しの方の参考になれば幸いです。
        </p>
      </PageSection>

      <PageSection enTitle="Topics" jpTitle="主要トピック" bg="soft">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map((s) => (
            <li key={s.num} className="bg-white p-5 flex items-start gap-3">
              <span className="text-[#9a998e] text-xs tracking-[0.25em] shrink-0 w-6">{s.num}</span>
              <span className="text-[13px] leading-relaxed text-[#222]">{s.title}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[12px] text-[#666]">
          ※ 各トピックの本文は、コンテンツ確定後に流し込み予定です。
        </p>
      </PageSection>

      <PageSection enTitle="Articles" jpTitle={`コラム記事一覧（${list.length} 件）`}>
        <p className="text-[14px] leading-loose text-[#222] mb-8 max-w-2xl">
          矯正歯科に関するご質問について、これまで回答した記事の一覧です。新しいものから順にご覧いただけます。
        </p>
        <ul className="divide-y divide-[#e3e3e3]/70 border-t border-[#e3e3e3]/70">
          {list.map((f) => (
            <li key={f.slug} className="py-4 grid grid-cols-[6rem_1fr] gap-4 items-baseline">
              <span className="text-[12px] tracking-wider text-[#9a998e]">{f.date}</span>
              <Link href={`/columns/${f.slug}/`} className="link-underline text-[14px]">
                {f.q}
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </SubPageLayout>
  );
}
