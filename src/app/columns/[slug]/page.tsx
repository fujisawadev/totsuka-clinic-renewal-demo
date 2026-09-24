import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import faqs from "@/content/yokohama-faqs.json";
import { notFound } from "next/navigation";

type FaqItem = {
  slug: string;
  date: string;
  q: string; // 旧ページの <title>（メタタイトル・一覧用）
  heading: string; // ページ内の質問見出し
  excerpt: string;
  question: string[];
  answerTitle: string;
  answer: string[];
};
const list = faqs as FaqItem[];

export function generateStaticParams() {
  return list.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = list.find((x) => x.slug === slug);
  return {
    title: f ? `${f.q}｜ささき矯正歯科クリニック` : "Q&A｜ささき矯正歯科クリニック",
    description: f ? `${f.heading} ${f.answerTitle}。横浜市戸塚区のささき矯正歯科クリニックがお答えします。` : undefined,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = list.find((x) => x.slug === slug);
  if (!f) notFound();

  // Find related (4 most recent excluding this one)
  const related = list.filter((x) => x.slug !== f.slug).slice(0, 4);

  return (
    <SubPageLayout category="矯正歯科コラム" enTitle="COLUMN" jpTitle="よくあるご質問" heroSrc="/photos/facility-books.jpg">
      <PageSection>
        <article className="max-w-3xl">
          <p className="text-[12px] tracking-wider text-[#9a998e] mb-6">{f.date}</p>

          {/* 質問 */}
          <div className="flex items-start gap-4 lg:gap-6 mb-6">
            <span className="text-[#9a998e] text-xl tracking-wider shrink-0">Q.</span>
            <h2 className="flex-1 text-lg lg:text-2xl leading-relaxed tracking-wider">{f.heading}</h2>
          </div>
          <div className="pl-9 lg:pl-12 mb-12">
            {f.question.map((p, i) => (
              <p key={i} className="text-[14px] leading-loose text-[#555] mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          {/* 回答 */}
          <div className="flex items-start gap-4 lg:gap-6 mb-6">
            <span className="text-[#9a998e] text-xl tracking-wider shrink-0">A.</span>
            <h3 className="flex-1 text-base lg:text-xl leading-relaxed tracking-wider text-[#222]">{f.answerTitle}</h3>
          </div>
          <div className="pl-9 lg:pl-12">
            {f.answer.map((p, i) => (
              <p key={i} className="text-[14px] leading-loose text-[#222] mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </article>
      </PageSection>

      <PageSection enTitle="Related" jpTitle="関連するコラム" bg="soft">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {related.map((r) => (
            <li key={r.slug} className="bg-white p-5">
              <p className="text-[11px] tracking-wider text-[#9a998e] mb-2">{r.date}</p>
              <Link href={`/columns/${r.slug}/`} className="link-underline text-[14px]">
                {r.q}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link href="/columns/" className="inline-block border border-[#9a998e] text-[#9a998e] text-sm tracking-widest px-8 py-3 hover:bg-[#9a998e] hover:text-white transition">
            コラム一覧に戻る
          </Link>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
