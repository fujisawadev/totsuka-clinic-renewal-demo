import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "矯正治療料金｜ささき矯正歯科クリニック",
  description: "ささき矯正歯科クリニックの矯正治療料金のご案内。初診相談は無料です。",
};

type Row = { name: string; price: string; note: string };

const INTRO_ROWS: Row[] = [
  { name: "初診料・矯正相談料", price: "無料", note: "お気軽にご相談ください。" },
  { name: "検査診断料", price: "¥55,000", note: "レントゲン・歯の模型・お顔とお口の中の写真など総合的な検査結果をもとに治療法（装置の種類、期間）を決定します。" },
];

// 本格的な矯正治療（内訳: 小児矯正／成人矯正。金額はすべて共通）
const FULL_CHILD_ROW: Row = { name: "小児矯正", price: "¥770,000 〜 880,000", note: "" };
const FULL_ADULT_ROWS: Row[] = [
  { name: "ワイヤー矯正（マルチブラケット装置）", price: "¥770,000 〜 880,000", note: "" },
  { name: "アライナー矯正（マウスピース矯正）", price: "¥770,000 〜 880,000", note: "ワイヤー矯正と同額です。" },
];

// 段階的な治療（旧: 一期治療／二期治療）
const STAGED_ROWS: Row[] = [
  { name: "初期治療", price: "¥385,000 〜 495,000", note: "混合歯列から永久歯列完成までの治療／約24〜36か月／通院 24〜36回" },
  { name: "仕上げ治療", price: "¥385,000 〜 495,000", note: "永久歯列になってからの治療／約20〜24か月／通院 20〜24回" },
];

const OTHER_ROWS: Row[] = [
  { name: "部分的な治療", price: "¥220,000 〜 550,000", note: "混合歯列、永久歯列の一部分のみ、上または下の歯列のみの治療／約12〜18か月／通院 12〜18回" },
  { name: "乳歯列の治療", price: "¥165,000 〜 330,000", note: "約12〜18か月／通院 12〜18回" },
  { name: "半透明の装置", price: "上下それぞれ ¥33,000", note: "約24〜30か月／通院 24〜30回" },
];

const FEE_ROWS: Row[] = [
  { name: "処置料（毎回）", price: "¥6,600", note: "毎回の治療の際にかかる費用です。通常月に1回、多い時で2回ぐらいです。装置の装着、調整、生え替わりの観察などに必要な治療費です。" },
  { name: "ブラッシング指導料", price: "¥1,100", note: "" },
  { name: "筋機能トレーニング指導料", price: "¥1,100", note: "※ ブラッシング指導料・筋機能トレーニング指導料は通常処置料に含まれますが、指導のみの来院で必要になります。" },
  { name: "スペシャルクリーニング", price: "¥6,600", note: "保護者の方の歯のクリーニングのご希望が多いため、平日午前中限定でお口の中をクリーニングします。" },
  { name: "診断書料", price: "¥5,500 〜 22,000", note: "" },
];

// デンタルローン（スルガ銀行・アプラスは現行サイトから継承、エポスは新規追加）
const LOANS = [
  { en: "Dental Loan", name: "スルガ銀行", service: "デンタルローン", href: "https://www.surugabank.co.jp/reserved/landing/dental/" },
  { en: "Dental Loan", name: "アプラス", service: "デンタルローン", href: "https://www.aplus.co.jp/loan/credit/dental/" },
  { en: "Dental Credit", name: "エポスカード（マルイ）", service: "デンタルクレジット", href: "https://www.eposcard.co.jp/dental_cre/index.html" },
];

function PriceRow({ r, indent = 0 }: { r: Row; indent?: 0 | 1 | 2 }) {
  const indentClass =
    indent === 2
      ? "lg:pl-20 border-l-4 border-[#d8d7cd]"
      : indent === 1
        ? "lg:pl-12 border-l-4 border-[#d8d7cd]"
        : "";
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_2fr] gap-2 lg:gap-6 p-5 lg:p-6 items-baseline ${indentClass}`}>
      <div className="text-[14px] lg:text-[15px] tracking-wider text-[#222]">{r.name}</div>
      <div className="text-[15px] tracking-wider text-[#9a998e]">{r.price}</div>
      <div className="text-[12px] text-[#666] leading-loose">{r.note}</div>
    </div>
  );
}

function GroupHeader({ name, note, indent = false }: { name: string; note?: string; indent?: boolean }) {
  return (
    <div className={`p-5 lg:p-6 ${indent ? "lg:pl-12 border-l-4 border-[#d8d7cd] bg-[#fbfbf9]" : "bg-[#f7f7f4]"}`}>
      <p className="text-[14px] lg:text-[15px] tracking-wider text-[#222]">{name}</p>
      {note && <p className="mt-1 text-[12px] text-[#666] leading-loose">{note}</p>}
    </div>
  );
}

export default function Page() {
  return (
    <SubPageLayout category="料金のご案内" enTitle="PRICING" jpTitle="矯正治療料金" heroSrc="/photos/facility-reception.jpg">
      <PageSection bg="soft">
        <p className="text-[14px] leading-loose text-[#444] mb-10 max-w-2xl">
          矯正歯科治療は公的医療保険の適用外の実費（自由）診療となります。料金は税込み表記です。
        </p>

        {/* 初診・検査 */}
        <div className="bg-white divide-y divide-[#e3e3e3]/70 border border-[#e3e3e3]/70">
          {INTRO_ROWS.map((r) => (
            <PriceRow key={r.name} r={r} />
          ))}
        </div>

        {/* 矯正施術料 */}
        <h3 className="mt-12 mb-2 text-base lg:text-lg tracking-widest text-[#222]">矯正施術料</h3>
        <p className="mb-5 text-[12px] text-[#666] leading-loose">施術料は矯正治療の難易度、治療期間によって異なります。</p>
        <div className="bg-white divide-y divide-[#e3e3e3]/70 border border-[#e3e3e3]/70">
          <GroupHeader name="本格的な矯正治療" note="上下歯列全体を対象とした治療／約24〜30か月／通院 24〜30回" />
          <PriceRow r={FULL_CHILD_ROW} indent={1} />
          <GroupHeader name="成人矯正" note="装置はワイヤー矯正・アライナー矯正からお選びいただけます（同額）。" indent />
          {FULL_ADULT_ROWS.map((r) => (
            <PriceRow key={r.name} r={r} indent={2} />
          ))}

          <GroupHeader name="段階的な治療" note="初期治療としてまず悪いところを治し、保定をしながら生え変わりを定期的にチェックします。永久歯列になって治療が必要な場合は仕上げ治療を行います。" />
          {STAGED_ROWS.map((r) => (
            <PriceRow key={r.name} r={r} indent={1} />
          ))}

          {OTHER_ROWS.map((r) => (
            <PriceRow key={r.name} r={r} />
          ))}
        </div>
        <p className="mt-4 text-[12px] text-[#666] leading-loose">
          ※ 矯正施術料は装置がお口の中に装着されてから、本格的な矯正治療の場合は1年以内（その他の治療の場合は6か月以内）に全額を納入いただきます。分割も可能ですが、6か月以内に50%（その他の治療の場合は3か月）を目安に納入をお願いいたします。一括の場合も6か月以内となります。
        </p>

        {/* 処置料・その他 */}
        <div className="mt-12 bg-white divide-y divide-[#e3e3e3]/70 border border-[#e3e3e3]/70">
          {FEE_ROWS.map((r) => (
            <PriceRow key={r.name} r={r} />
          ))}
        </div>

        <div className="mt-8 space-y-2 text-[12px] text-[#666] leading-loose">
          <p>※ 上記の治療費には消費税が含まれております。</p>
        </div>

        {/* デンタルローン */}
        <h3 className="mt-12 mb-2 text-base lg:text-lg tracking-widest text-[#222]">デンタルローンのご案内</h3>
        <p className="mb-5 text-[12px] text-[#666] leading-loose">
          治療費のお支払いには、下記のデンタルローン・デンタルクレジット（分割払い）もご利用いただけます。詳しくは各社の公式サイトをご確認ください。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
          {LOANS.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-[#e3e3e3]/70 p-5 lg:p-6 transition-colors hover:border-[#9a998e]/60"
            >
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#9a998e]">{l.en}</p>
              <p className="mt-2 text-[15px] tracking-wider text-[#222]">{l.name}</p>
              <p className="mt-1 text-[12px] text-[#666]">{l.service}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-[#9a998e] group-hover:text-[#666] transition-colors">
                公式サイトへ<span aria-hidden>↗</span>
              </span>
            </a>
          ))}
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
