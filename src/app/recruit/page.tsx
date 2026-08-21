import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "採用情報｜ささき矯正歯科クリニック",
};

const POSITIONS = [
  {
    title: "歯科衛生士",
    items: [
      ["仕事内容", "矯正治療の診療補助、歯磨き指導（TBI）、器具の滅菌・管理 など"],
      ["応募資格", "歯科衛生士免許をお持ちの方（新卒・経験者とも歓迎、ブランクのある方もご相談ください）"],
      ["雇用形態", "常勤・パート"],
    ],
  },
  {
    title: "歯科助手",
    items: [
      ["仕事内容", "診療のサポート、器具の準備・片付け、受付・電話対応 など"],
      ["応募資格", "資格不問・未経験の方も歓迎（丁寧にお教えします）"],
      ["雇用形態", "常勤・パート"],
    ],
  },
  {
    title: "受付スタッフ",
    items: [
      ["仕事内容", "受付・会計、予約管理、電話対応 など"],
      ["応募資格", "資格不問・未経験の方も歓迎"],
      ["雇用形態", "常勤・パート"],
    ],
  },
];

const CONDITIONS: Array<[string, string]> = [
  ["勤務地", "ささき矯正歯科クリニック（横浜市戸塚区上倉田町493-1 NOBオグシビル5F ／ 戸塚駅東口より徒歩3分）"],
  ["勤務時間", "診療時間に準ずるシフト制（平日 10:00〜19:00 ／ 土・日 10:00〜19:00）"],
  ["休診日", "月・木・祝"],
  ["給与・待遇", "経験・能力を考慮のうえ決定します。詳細は面談時にご説明いたします"],
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
              ささき矯正歯科クリニックでは、患者様に寄り添った診療を一緒に作り上げてくださる方を募集しています。<br />
              アットホームな雰囲気のなかで、長く活躍できる職場を目指しています。
            </p>
          </div>
          <Photo src="/photos/recruit-staff.jpg" alt="スタッフ集合写真" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Positions" jpTitle="募集職種" bg="soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSITIONS.map((p) => (
            <article key={p.title} className="bg-white p-6 lg:p-8">
              <h3 className="text-base lg:text-lg mb-4">{p.title}</h3>
              <dl className="space-y-3">
                {p.items.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] tracking-[0.2em] text-[#9a998e] mb-1">{label}</dt>
                    <dd className="text-[13px] leading-loose text-[#444]">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-white p-6 lg:p-8">
          <h3 className="text-base mb-4 text-[#9a998e] tracking-widest">共通の勤務条件</h3>
          <dl className="space-y-3 text-[14px] leading-loose">
            {CONDITIONS.map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4 border-b border-[#e3e3e3]/70 pb-3">
                <dt className="text-[#9a998e] tracking-wider text-[13px]">{label}</dt>
                <dd className="text-[#222]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </PageSection>

      <PageSection enTitle="How to apply" jpTitle="応募方法">
        <p className="text-[14px] leading-loose text-[#222] max-w-2xl">
          ご興味をお持ちの方は、お電話にてお気軽にお問い合わせください。見学のご相談も歓迎です。下記の求人媒体経由のご応募も受け付けています。
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="tel:0458712281" className="inline-block bg-[#9a998e] text-white text-sm tracking-widest px-6 py-3 hover:bg-[#b5b4a8] transition">
            045-871-2281 へ電話する
          </a>
        </div>
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
