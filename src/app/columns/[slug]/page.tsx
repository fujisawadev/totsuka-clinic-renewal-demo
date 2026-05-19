import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import faqs from "@/content/yokohama-faqs.json";
import { notFound } from "next/navigation";

type FaqItem = { slug: string; date: string; q: string; excerpt: string };
const list = faqs as FaqItem[];

export function generateStaticParams() {
  return list.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = list.find((x) => x.slug === slug);
  return {
    title: f ? `${f.q}｜ささき矯正歯科クリニック` : "Q&A｜ささき矯正歯科クリニック",
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = list.find((x) => x.slug === slug);
  if (!f) notFound();

  // Find related (4 most recent excluding this one)
  const related = list.filter((x) => x.slug !== f.slug).slice(0, 4);

  return (
    <SubPageLayout category="矯正歯科コラム" enTitle="COLUMN" jpTitle="よくあるご質問">
      <PageSection>
        <div className="max-w-3xl">
          <p className="text-[12px] tracking-wider text-[#9a998e] mb-6">{f.date}</p>
          <div className="flex items-start gap-4 lg:gap-6 mb-8">
            <span className="text-[#9a998e] text-xl tracking-wider shrink-0">Q.</span>
            <h2 className="flex-1 text-lg lg:text-2xl leading-relaxed tracking-wider">{f.q}</h2>
          </div>
          <div className="flex items-start gap-4 lg:gap-6">
            <span className="text-[#9a998e] text-xl tracking-wider shrink-0">A.</span>
            <div className="flex-1">
              <p className="text-[14px] leading-loose text-[#222]">{f.excerpt}</p>
              <p className="mt-6 text-[12px] text-[#9a998e] tracking-wider">
                ──── このページは旧サイトからの移行枠です。実本文はコンテンツ確定後に流し込み予定。
              </p>
            </div>
          </div>
        </div>
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
