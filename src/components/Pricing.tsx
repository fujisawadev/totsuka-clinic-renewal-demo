const ROWS = [
  {
    name: "初診料・矯正相談料",
    price: "無料",
    note: "お気軽にご相談ください。",
  },
  {
    name: "検査診断料",
    price: "¥55,000",
    note: "レントゲン・歯型・写真等の総合検査をもとに治療法を決定します。",
  },
  {
    name: "A：本格的な矯正治療",
    price: "¥770,000 〜 880,000",
    note: "上下歯列全体／約24〜30か月／通院 24〜30回",
  },
  {
    name: "B：段階的な治療（一期）",
    price: "¥385,000 〜 495,000",
    note: "混合歯列〜永久歯列完成まで／約24〜36か月／通院 24〜36回",
  },
  {
    name: "B：段階的な治療（二期）",
    price: "¥385,000 〜 495,000",
    note: "永久歯列になってからの治療／約20〜24か月／通院 20〜24回",
  },
  {
    name: "C：部分的な治療",
    price: "¥220,000 〜 550,000",
    note: "歯列の一部のみ・上または下のみ／約12〜18か月",
  },
  {
    name: "D：乳歯列の治療",
    price: "¥165,000 〜 330,000",
    note: "約12〜18か月／通院 12〜18回",
  },
  {
    name: "E：半透明の装置",
    price: "上下それぞれ ¥33,000",
    note: "約24〜30か月／通院 24〜30回",
  },
  {
    name: "処置料（毎回）",
    price: "¥6,600",
    note: "通院ごとの調整料。",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f4f1ea]/30 py-24 lg:py-32">
      <div className="container-clinic">
        <div className="anim text-center mb-12 lg:mb-16">
          <h2 className="section-eyebrow">Pricing</h2>
          <p className="text-sm text-[#9a998e] tracking-[0.3em] mt-2">矯正治療料金</p>
          <div className="w-12 h-px bg-[#9a998e]/40 mx-auto mt-6" />
        </div>

        <p className="anim text-center text-[13px] text-[#666] max-w-2xl mx-auto mb-12">
          矯正歯科治療は公的医療保険の適用外の実費（自由）診療となります。料金は税込み表記です。
        </p>

        <div className="anim anim-delay-1 bg-white divide-y divide-[#e3e3e3]/70 border border-[#e3e3e3]/70">
          {ROWS.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_2fr] gap-2 lg:gap-6 p-5 lg:p-6 items-baseline"
            >
              <div className="text-[14px] lg:text-[15px] tracking-wider text-[#222]">{r.name}</div>
              <div className="text-[15px] tracking-wider text-[#9a998e]">{r.price}</div>
              <div className="text-[12px] text-[#666] leading-loose">{r.note}</div>
            </div>
          ))}
        </div>

        <div className="anim mt-8 space-y-2 text-[12px] text-[#666] leading-loose">
          <p>※ 装置がお口の中に装着されてから、Aの場合は1年以内、BCDの場合は6か月以内に矯正施術料を分割または一括で納入いただきます。</p>
          <p>※ スルガ銀行のデンタルローン（分割払い）もご利用いただけます。</p>
          <p>※ 詳細は <a href="#counseling" className="link-underline">初診相談</a> にてご説明いたします。</p>
        </div>
      </div>
    </section>
  );
}
