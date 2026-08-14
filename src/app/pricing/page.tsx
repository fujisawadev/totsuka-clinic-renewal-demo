import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "矯正治療料金｜ささき矯正歯科クリニック",
  description: "ささき矯正歯科クリニックの矯正治療料金のご案内。初診相談は無料です。",
};

type Row = { name: string; price: string; note: string };

const ROWS: Row[] = [
  { name: "初診料・矯正相談料", price: "無料", note: "お気軽にご相談ください。" },
  { name: "検査診断料", price: "¥55,000", note: "レントゲン・歯型・写真等の総合検査をもとに治療法を決定します。" },
];

const MAIN_ROWS: Row[] = [
  { name: "小児矯正", price: "¥385,000 〜 495,000", note: "混合歯列期〜永久歯列完成までの治療／約24〜36か月／通院 24〜36回" },
  { name: "成人矯正｜ワイヤー矯正（マルチブラケット装置）", price: "¥770,000 〜 880,000", note: "上下歯列全体を対象とした治療／約24〜30か月／通院 24〜30回" },
  { name: "成人矯正｜アライナー矯正（マウスピース矯正）", price: "¥770,000 〜 880,000", note: "ワイヤー矯正と同額です／約24〜30か月／通院 24〜30回" },
  { name: "小児矯正から継続して治療する場合", price: "¥385,000 〜 495,000", note: "永久歯列になってからの仕上げの治療／約20〜24か月／通院 20〜24回" },
];

const OTHER_ROWS: Row[] = [
  { name: "部分的な治療", price: "¥220,000 〜 550,000", note: "歯列の一部のみ・上または下のみ／約12〜18か月" },
  { name: "乳歯列の治療", price: "¥165,000 〜 330,000", note: "約12〜18か月／通院 12〜18回" },
  { name: "半透明の装置", price: "上下それぞれ ¥33,000", note: "目立ちにくい審美ブラケットをご希望の場合" },
  { name: "処置料（毎回）", price: "¥6,600", note: "通院ごとの調整料。" },
];

export default function Page() {
  return (
    <SubPageLayout category="料金のご案内" enTitle="PRICING" jpTitle="矯正治療料金" heroSrc="/photos/facility-reception.jpg">
      <PageSection bg="soft">
        <p className="text-[14px] leading-loose text-[#444] mb-10 max-w-2xl">
          矯正歯科治療は公的医療保険の適用外の実費（自由）診療となります。料金は税込み表記です。
        </p>
        <div className="bg-white divide-y divide-[#e3e3e3]/70 border border-[#e3e3e3]/70">
          {ROWS.map((r) => (
            <div key={r.name} className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_2fr] gap-2 lg:gap-6 p-5 lg:p-6 items-baseline">
              <div className="text-[14px] lg:text-[15px] tracking-wider text-[#222]">{r.name}</div>
              <div className="text-[15px] tracking-wider text-[#9a998e]">{r.price}</div>
              <div className="text-[12px] text-[#666] leading-loose">{r.note}</div>
            </div>
          ))}
          <div className="p-5 lg:p-6 bg-[#f7f7f4]">
            <p className="text-[14px] lg:text-[15px] tracking-wider text-[#222]">本格的な矯正治療（矯正施術料）</p>
            <p className="mt-1 text-[12px] text-[#666] leading-loose">施術料は矯正治療の難易度、治療期間によって異なります。</p>
          </div>
          {MAIN_ROWS.map((r) => (
            <div key={r.name} className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_2fr] gap-2 lg:gap-6 p-5 lg:p-6 lg:pl-10 items-baseline">
              <div className="text-[14px] lg:text-[15px] tracking-wider text-[#222]">{r.name}</div>
              <div className="text-[15px] tracking-wider text-[#9a998e]">{r.price}</div>
              <div className="text-[12px] text-[#666] leading-loose">{r.note}</div>
            </div>
          ))}
          {OTHER_ROWS.map((r) => (
            <div key={r.name} className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_2fr] gap-2 lg:gap-6 p-5 lg:p-6 items-baseline">
              <div className="text-[14px] lg:text-[15px] tracking-wider text-[#222]">{r.name}</div>
              <div className="text-[15px] tracking-wider text-[#9a998e]">{r.price}</div>
              <div className="text-[12px] text-[#666] leading-loose">{r.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-2 text-[12px] text-[#666] leading-loose">
          <p>※ 装置がお口の中に装着されてから、本格的な矯正治療（成人矯正）の場合は1年以内、その他の治療の場合は6か月以内に矯正施術料を分割または一括で納入いただきます。</p>
          <p>※ スルガ銀行・アプラスのデンタルローン（分割払い）もご利用いただけます。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
