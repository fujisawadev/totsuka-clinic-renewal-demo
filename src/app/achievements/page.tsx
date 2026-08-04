import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "年別症例件数｜ささき矯正歯科クリニック",
};

const DECADES = [
  {
    label: "1989〜1998",
    total: 2276,
    rows: [
      ["1989年", 139],
      ["1990年", 226],
      ["1991年", 251],
      ["1992年", 246],
      ["1993年", 221],
      ["1994年", 225],
      ["1995年", 242],
      ["1996年", 270],
      ["1997年", 235],
      ["1998年", 221],
    ] as Array<[string, number]>,
  },
  {
    label: "1999〜2008",
    total: 1640,
    rows: [
      ["1999年", 190],
      ["2000年", 149],
      ["2001年", 142],
      ["2002年", 159],
      ["2003年", 171],
      ["2004年", 159],
      ["2005年", 143],
      ["2006年", 156],
      ["2007年", 188],
      ["2008年", 183],
    ] as Array<[string, number]>,
  },
  {
    label: "2009〜2018",
    total: 1778,
    rows: [
      ["2009年", 162],
      ["2010年", 166],
      ["2011年", 167],
      ["2012年", 179],
      ["2013年", 183],
      ["2014年", 196],
      ["2015年", 193],
      ["2016年", 160],
      ["2017年", 172],
      ["2018年", 200],
    ] as Array<[string, number]>,
  },
];

export default function Page() {
  const grandTotal = DECADES.reduce((s, d) => s + d.total, 0);
  return (
    <SubPageLayout category="医院について" enTitle="ACHIEVEMENTS" jpTitle="年別症例件数" heroSrc="/photos/feature-director-desk.jpg">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] mb-8 max-w-2xl">
          1987 年の開業以来、矯正専門の歯科医院として多くの症例を診療してまいりました。以下は 10 年毎に区切った 30 年間の推移です。
        </p>
        <div className="bg-[#f4f1ea]/40 p-8 lg:p-10 mb-12 text-center">
          <p className="text-[#9a998e] text-xs tracking-[0.3em] mb-2">合計症例件数（30年間）</p>
          <p className="text-5xl lg:text-6xl tracking-wider">{grandTotal.toLocaleString()}<span className="text-lg ml-2 text-[#9a998e]">件</span></p>
        </div>
      </PageSection>

      <PageSection bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DECADES.map((d) => (
            <div key={d.label} className="bg-white p-6 lg:p-8">
              <p className="text-[#9a998e] text-xs tracking-[0.25em] mb-1">{d.label}</p>
              <p className="text-2xl tracking-wider mb-4">合計 {d.total.toLocaleString()}<span className="text-sm ml-1 text-[#9a998e]">件</span></p>
              <table className="w-full text-[13px]">
                <tbody>
                  {d.rows.map(([y, n]) => (
                    <tr key={y} className="border-b border-[#e3e3e3]/70">
                      <td className="py-2 text-[#9a998e]">{y}</td>
                      <td className="py-2 text-right">{n}<span className="text-[#9a998e] text-xs ml-1">件</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[12px] text-[#666]">※ 開業 1987 年。約 30 年間の推移。</p>
      </PageSection>
    </SubPageLayout>
  );
}
