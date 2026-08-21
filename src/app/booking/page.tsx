import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "初診相談 WEB予約｜ささき矯正歯科クリニック",
  description: "ささき矯正歯科クリニックの初診相談予約フォーム。カレンダーから日時を選択してご予約いただけます。",
};

// 仮の日付/時間データ（実際は予約システムから取得）
const DAYS = [
  { date: "12/2", weekday: "火", status: "available" },
  { date: "12/3", weekday: "水", status: "closed" },
  { date: "12/4", weekday: "木", status: "closed" },
  { date: "12/5", weekday: "金", status: "available" },
  { date: "12/6", weekday: "土", status: "available" },
  { date: "12/7", weekday: "日", status: "few" },
  { date: "12/8", weekday: "月", status: "closed" },
];

const TIMES = ["10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

function StatusMark({ status }: { status: string }) {
  if (status === "closed") return <span className="text-[#bbb]">／</span>;
  if (status === "few") return <span className="text-[#c89b4a]">△</span>;
  return <span className="text-[#6e8c5a]">○</span>;
}

export default function Page() {
  return (
    <SubPageLayout category="初診の方へ" enTitle="BOOKING" jpTitle="初診相談 WEB予約" heroSrc="/photos/clinic-reception.jpg">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl mb-8">
          初診相談は無料です。下記のカレンダーから日時を選択してご予約ください。
          <br />
          ご相談には 40 分ほどお時間をいただいているため、ネット予約枠が限られている場合があります。ご希望のお時間が「／」の場合でも、お電話なら調整できる可能性がございますので、一度お電話にてお問合せください。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
          <div className="bg-[#f4f1ea]/60 p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#9a998e] text-white flex items-center justify-center text-xs shrink-0">1</span>
            <div>
              <p className="text-[13px] tracking-wider text-[#222]">日付を選ぶ</p>
              <p className="text-[11px] text-[#666] mt-1">○ が空きあり、△ が残りわずか、／ が休診日</p>
            </div>
          </div>
          <div className="bg-[#f4f1ea]/60 p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#9a998e] text-white flex items-center justify-center text-xs shrink-0">2</span>
            <div>
              <p className="text-[13px] tracking-wider text-[#222]">時間を選ぶ</p>
              <p className="text-[11px] text-[#666] mt-1">空き時間帯を選択します</p>
            </div>
          </div>
          <div className="bg-[#f4f1ea]/60 p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#9a998e] text-white flex items-center justify-center text-xs shrink-0">3</span>
            <div>
              <p className="text-[13px] tracking-wider text-[#222]">お客様情報を入力</p>
              <p className="text-[11px] text-[#666] mt-1">お名前・連絡先を入力して送信</p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection enTitle="Step 1" jpTitle="日付を選ぶ" bg="soft">
        <div className="bg-white p-6 lg:p-10 overflow-x-auto">
          <p className="text-[12px] text-[#9a998e] tracking-wider mb-4">2026 年 12 月（仮）</p>
          <table className="w-full text-center min-w-[640px]">
            <thead>
              <tr>
                {DAYS.map((d) => (
                  <th key={d.date} className="pb-3 border-b border-[#e3e3e3]">
                    <div className="text-[11px] text-[#9a998e]">{d.weekday}</div>
                    <div className="text-[14px] text-[#222] mt-1">{d.date}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {DAYS.map((d) => (
                  <td key={d.date} className="pt-4 pb-2">
                    <button
                      type="button"
                      className="block mx-auto text-2xl hover:scale-110 transition"
                      disabled={d.status === "closed"}
                    >
                      <StatusMark status={d.status} />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <div className="mt-6 flex gap-3 justify-center">
            <button type="button" className="text-[#9a998e] text-xs tracking-widest hover:text-[#222] transition">← 前の週</button>
            <span className="text-[#e3e3e3]">|</span>
            <button type="button" className="text-[#9a998e] text-xs tracking-widest hover:text-[#222] transition">次の週 →</button>
          </div>
        </div>
        <p className="mt-4 text-[12px] text-[#666]">※ 現状の予約システム（<span className="font-mono">/yoyaku/</span>）の機能を踏襲した暫定 UI です。本番ではバックエンドの予約データと連携します。</p>
      </PageSection>

      <PageSection enTitle="Step 2" jpTitle="時間を選ぶ">
        <p className="text-[13px] text-[#9a998e] tracking-wider mb-6">選択日：2026 年 12 月 5 日（金）（仮）</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {TIMES.map((t, i) => (
            <button
              key={t}
              type="button"
              className={`p-4 text-[14px] tracking-wider transition border ${
                i === 2 ? "bg-[#9a998e] text-white border-[#9a998e]" : "bg-white text-[#222] border-[#e3e3e3] hover:border-[#9a998e]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </PageSection>

      <PageSection enTitle="Step 3" jpTitle="お客様情報の入力" bg="soft">
        <form className="bg-white p-6 lg:p-10 grid grid-cols-1 gap-5 max-w-2xl mx-auto">
          <div>
            <label className="block text-[12px] tracking-wider text-[#9a998e] mb-2">お名前 <span className="text-[#c89b4a]">*</span></label>
            <input type="text" className="w-full border border-[#e3e3e3] p-3 text-[14px]" placeholder="山田 太郎" />
          </div>
          <div>
            <label className="block text-[12px] tracking-wider text-[#9a998e] mb-2">フリガナ <span className="text-[#c89b4a]">*</span></label>
            <input type="text" className="w-full border border-[#e3e3e3] p-3 text-[14px]" placeholder="ヤマダ タロウ" />
          </div>
          <div>
            <label className="block text-[12px] tracking-wider text-[#9a998e] mb-2">電話番号 <span className="text-[#c89b4a]">*</span></label>
            <input type="tel" className="w-full border border-[#e3e3e3] p-3 text-[14px]" placeholder="090-0000-0000" />
          </div>
          <div>
            <label className="block text-[12px] tracking-wider text-[#9a998e] mb-2">メールアドレス <span className="text-[#c89b4a]">*</span></label>
            <input type="email" className="w-full border border-[#e3e3e3] p-3 text-[14px]" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-[12px] tracking-wider text-[#9a998e] mb-2">ご相談内容</label>
            <textarea rows={4} className="w-full border border-[#e3e3e3] p-3 text-[14px]" placeholder="（任意）気になる症状などをご記入ください" />
          </div>
          <button type="button" className="bg-[#9a998e] text-white text-sm tracking-widest py-4 hover:bg-[#b5b4a8] transition">
            送信する
          </button>
        </form>
        <p className="mt-6 text-[12px] text-[#666] max-w-2xl mx-auto">
          ※ このフォームは現時点ではダミーです。本番では、現行予約システム <span className="font-mono">/yoyaku/</span> と同等のバックエンド処理（管理画面への登録／医院へのメール通知／患者様への確認メール）を実装します。
        </p>
      </PageSection>

      <PageSection>
        <div className="bg-[#f4f1ea]/40 p-6 lg:p-8 border-l-4 border-[#9a998e]">
          <p className="text-[12px] tracking-widest text-[#9a998e] uppercase mb-2">For Vendors</p>
          <p className="text-[14px] leading-loose text-[#222]">
            このページは予約フローの UI 設計を示す暫定実装です。本実装にあたっては、現行予約システム <span className="font-mono">/yoyaku/</span> のバックエンド仕様（カレンダー枠の管理方法、送信先メール、確認メール、医院側管理画面）を引き継ぐか、外部 SaaS（Apotool・ジニー予約等）に置換するかの方針確認が必要です。
          </p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
