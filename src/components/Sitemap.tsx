import Link from "next/link";

const COLUMNS = [
  {
    label: "矯正治療",
    items: [
      { label: "矯正治療について", href: "/treatment/" },
      { label: "小児矯正", href: "/child/" },
      { label: "成人矯正", href: "/adult/" },
      { label: "矯正治療の進め方", href: "/process/" },
      { label: "矯正装置", href: "/appliance/" },
      { label: "矯正治療料金", href: "/pricing/" },
      { label: "治療前後の比較", href: "/before-after/" },
    ],
  },
  {
    label: "症状別",
    items: [
      { label: "うけ口（下顎前突）", href: "/symptoms/underbite/" },
      { label: "出っ歯（上顎前突）", href: "/symptoms/overbite/" },
      { label: "乱杭歯（叢生）", href: "/symptoms/crowded/" },
      { label: "開咬", href: "/symptoms/openbite/" },
      { label: "外科治療", href: "/surgical/" },
      { label: "抜歯について", href: "/extraction/" },
      { label: "アフターケア", href: "/aftercare/" },
    ],
  },
  {
    label: "医院について",
    items: [
      { label: "医師・スタッフ紹介", href: "/doctor/" },
      { label: "年別症例件数", href: "/achievements/" },
      { label: "院内紹介・交通", href: "/access-info/" },
      { label: "初診の方へ", href: "/first-visit/" },
      { label: "採用情報", href: "/recruit/" },
    ],
  },
  {
    label: "情報・その他",
    items: [
      { label: "よくある質問", href: "/faq/" },
      { label: "矯正歯科コラム", href: "/columns/" },
      { label: "お知らせ", href: "/news/" },
      { label: "患者様へのお願い", href: "/notice/" },
      { label: "治療に関するご注意", href: "/precautionary/" },
      { label: "リスク・副作用について", href: "/risk/" },
      { label: "リンク集", href: "/links/" },
    ],
  },
];

export default function Sitemap() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20">
      <div className="container-clinic">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {COLUMNS.map((c) => (
            <div key={c.label}>
              <div className="text-xs tracking-[0.25em] uppercase text-white/60 mb-5">
                {c.label}
              </div>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      href={i.href}
                      className="text-[14px] text-white/80 hover:text-white hover:underline underline-offset-4 transition"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
