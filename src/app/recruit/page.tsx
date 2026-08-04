import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "採用情報｜ささき矯正歯科クリニック",
};

const PLACEHOLDER = "プレースホルダー本文 ── 実際の募集要項に差し替え予定。";

const POSITIONS = [
  { title: "歯科衛生士", body: PLACEHOLDER },
  { title: "歯科助手", body: PLACEHOLDER },
  { title: "受付スタッフ", body: PLACEHOLDER },
];

export default function Page() {
  return (
    <SubPageLayout category="採用情報" enTitle="RECRUIT" jpTitle="採用情報">
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[#9a998e] text-xs tracking-[0.3em] mb-3">スタッフ募集</p>
            <h2 className="text-2xl lg:text-3xl tracking-wider mb-6">私たちと一緒に働きませんか？</h2>
            <p className="text-[14px] leading-loose text-[#222]">
              ささき矯正歯科クリニックでは、患者さま本位の診療を一緒に作り上げてくださる方を募集しています。<br />
              アットホームな雰囲気のなかで、長く活躍できる職場を目指しています。
            </p>
            <p className="mt-3 text-[12px] text-[#666]">
              ※ このページは設計上の枠です。具体的な募集要項・応募方法は別途ご提供いただいた内容に差し替え予定。
            </p>
          </div>
          <Photo src="/photos/recruit-staff.jpg" alt="スタッフ集合写真" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Positions" jpTitle="募集職種" bg="soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSITIONS.map((p) => (
            <article key={p.title} className="bg-white p-6 lg:p-8">
              <h3 className="text-base lg:text-lg mb-3">{p.title}</h3>
              <p className="text-[13px] leading-loose text-[#444]">{p.body}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection enTitle="How to apply" jpTitle="応募方法">
        <p className="text-[14px] leading-loose text-[#222] max-w-2xl">
          ご興味をお持ちの方は、お電話または専用フォームよりお問い合わせください。求人媒体経由のご応募も受け付けています。
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="tel:0458712281" className="inline-block bg-[#9a998e] text-white text-sm tracking-widest px-6 py-3 hover:bg-[#b5b4a8] transition">
            045-871-2281 へ電話する
          </a>
          <a href="#" className="inline-block border border-[#9a998e] text-[#9a998e] text-sm tracking-widest px-6 py-3 hover:bg-[#9a998e] hover:text-white transition">
            メールで応募する
          </a>
        </div>
        <p className="mt-4 text-[12px] text-[#666]">※ 応募フォームは別途実装予定。</p>
      </PageSection>

      <PageSection enTitle="Job media" jpTitle="求人媒体にも掲載中" bg="soft">
        <p className="text-[14px] leading-loose text-[#222] max-w-2xl mb-8">
          以下の求人媒体にも掲載しています。フォームからの応募もこちらから可能です。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://www.webqua.jp/ndh/search/45377"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="クオキャリア 新卒歯科衛生士募集ページ"
            className="block bg-white border border-[#e3e3e3] hover:border-[#9a998e] transition p-4"
          >
            <Photo src="/photos/recruit-banner-shinsotsu.jpg" alt="クオキャリア 新卒歯科衛生士募集中" className="w-full" />
            <p className="mt-3 text-[12px] text-[#9a998e] tracking-wider">外部求人サイトへ移動 →</p>
          </a>
          <a
            href="https://www.webqua.jp/dh/search/45378"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="クオキャリア 経験者歯科衛生士募集ページ"
            className="block bg-white border border-[#e3e3e3] hover:border-[#9a998e] transition p-4"
          >
            <Photo src="/photos/recruit-banner-keikensha.jpg" alt="クオキャリア 経験者歯科衛生士募集中" className="w-full" />
            <p className="mt-3 text-[12px] text-[#9a998e] tracking-wider">外部求人サイトへ移動 →</p>
          </a>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
