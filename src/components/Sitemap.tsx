const COLUMNS = [
  {
    label: "症状から探す",
    items: ["上顎前突", "下顎前突", "上下顎前突", "叢生", "開咬", "過蓋咬合"],
  },
  {
    label: "年齢から探す",
    items: ["小児矯正", "成人矯正", "シニア矯正"],
  },
  {
    label: "装置・方法",
    items: [
      "マウスピース型矯正",
      "ワイヤー矯正",
      "舌側矯正",
      "部分矯正",
      "表側ワイヤー",
    ],
  },
  {
    label: "クリニック",
    items: ["院長紹介", "院内設備", "料金", "症例", "アクセス", "よくある質問"],
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
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[14px] text-white/80 hover:text-white hover:underline underline-offset-4 transition"
                    >
                      {i}
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
