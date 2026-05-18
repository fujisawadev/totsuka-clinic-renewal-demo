const COLUMNS = [
  {
    label: "矯正治療",
    items: [
      { label: "矯正治療について", href: "#orthodontic-treatment" },
      { label: "矯正治療の進め方", href: "#" },
      { label: "矯正装置", href: "#" },
      { label: "矯正治療料金", href: "#" },
      { label: "治療前後の比較", href: "#" },
    ],
  },
  {
    label: "症状別",
    items: [
      { label: "うけ口（下顎前突）", href: "#" },
      { label: "出っ歯（上顎前突）", href: "#" },
      { label: "乱杭歯（叢生）", href: "#" },
      { label: "開咬", href: "#" },
    ],
  },
  {
    label: "その他の治療",
    items: [
      { label: "外科治療", href: "#" },
      { label: "抜歯について", href: "#" },
      { label: "アフターケア", href: "#" },
    ],
  },
  {
    label: "院について",
    items: [
      { label: "院長あいさつ", href: "#greeting" },
      { label: "院内紹介・交通", href: "#access" },
      { label: "初診の方へ", href: "#counseling" },
      { label: "よくある質問", href: "#" },
      { label: "患者さんへのお願い", href: "#" },
      { label: "治療に関するご注意", href: "#" },
      { label: "リスク・副作用について", href: "#" },
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
                    <a
                      href={i.href}
                      className="text-[14px] text-white/80 hover:text-white hover:underline underline-offset-4 transition"
                    >
                      {i.label}
                    </a>
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
