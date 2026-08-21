const NEWS = [
  {
    date: "2026.05.10",
    tag: "お知らせ",
    title: "2026年 臨時休診案内",
    body: "2026/6/23（火）、6/24（水）は休診とさせていただきます。",
  },
  {
    date: "2026.03.07",
    tag: "お知らせ",
    title: "2026年 GW休診案内",
    body: "2026/4/30（木）〜 2026/5/7（木）まで休診とさせていただきます。",
  },
  {
    date: "2020.04.20",
    tag: "重要",
    title: "緊急事態宣言を受けての対応について",
    body: "コロナウイルス感染拡大防止を目的とした診療体制と患者様へのお願いをご案内しています。",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-white py-16 lg:py-20 border-b border-[#e3e3e3]/60">
      <div className="container-clinic">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3 anim">
            <h2 className="text-2xl tracking-widest">News</h2>
            <p className="text-xs text-[#9a998e] tracking-[0.3em] mt-2">お知らせ</p>
          </div>
          <ul className="lg:col-span-9 anim anim-delay-1 divide-y divide-[#e3e3e3]/70">
            {NEWS.map((n) => (
              <li key={n.title} className="py-4 grid grid-cols-1 lg:grid-cols-[8rem_5rem_1fr] gap-2 lg:gap-6 items-baseline">
                <span className="text-[12px] tracking-wider text-[#9a998e]">{n.date}</span>
                <span className="inline-block text-[10px] tracking-widest text-[#9a998e] border border-[#9a998e] px-3 py-1 w-fit">
                  {n.tag}
                </span>
                <div>
                  <a href="#" className="link-underline text-[14px]">
                    {n.title}
                  </a>
                  <p className="text-[13px] text-[#666] leading-loose mt-1">{n.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
