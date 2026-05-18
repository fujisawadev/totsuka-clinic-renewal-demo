"use client";
import { useState } from "react";
import { cn } from "@/lib/cn";

const ITEMS = [
  {
    q: "歯並びが悪いとどういう影響がありますか？",
    a: "不正咬合の状態や程度により影響は異なりますが、虫歯や歯肉炎・歯周病になりやすくなる、咀嚼能率が劣る、発音に影響を与えるなどの可能性があります。",
  },
  {
    q: "矯正治療はいつ頃から開始したらいいですか？",
    a: "原因や状態、程度は個人によって全く異なるため、開始時期も一定ではありません。上下の顎の骨にズレがある受け口や出っ歯は乳歯の時期から治療が必要となることもあります。気づいた時点で早めにご相談ください。",
  },
  {
    q: "矯正治療は大人になってもできますか？",
    a: "基本的には大人になってからでも可能です。ほとんど年齢制限はありません。当院では中高年の方も増えています。",
  },
  {
    q: "矯正治療の期間と費用はどのくらいですか？",
    a: "状態や年齢、難易度により異なります。部分的な治療は1〜2年、歯並び全体の治療は2〜3年、成長発育に関連する治療は7〜8年かかることがあります。費用は料金ページをご覧ください。",
  },
  {
    q: "どのくらいの間隔で通院するのですか？",
    a: "装置が入ってからは、だいたい月に1回、多い時期で2回程度が普通です。予約日を守ることが治療期間の短縮につながります。",
  },
  {
    q: "矯正治療中、痛みはありますか？食事は普通にできますか？",
    a: "装置が入ってから2〜3日は歯が浮いた感じや咬む時の痛みがありますが、4〜5日で慣れます。固い食べ物や粘着性のあるガム・キャラメル等は装置を壊しやすいので避けてください。",
  },
  {
    q: "矯正治療中、虫歯になりやすくはありませんか？",
    a: "矯正装置には歯垢がたまりやすいため、清掃を怠ると虫歯や歯ぐきの病気の原因になります。教わった方法で今まで以上に丁寧に磨きましょう。",
  },
  {
    q: "スポーツや吹奏楽器は続けられますか？",
    a: "ほとんどの楽器は続けることが可能です。相撲やラグビーなどぶつかり合うスポーツは注意が必要ですが、激しいものでなければ問題ありません。",
  },
  {
    q: "治療途中に転居した場合はどうなりますか？",
    a: "転居先付近の矯正歯科医あるいは大学病院矯正科をご紹介いたします。海外赴任の場合も治療継続は可能です。資料や紹介状をお渡ししますので早めにお申し出ください。",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-[#e3e3e3]/70">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-5 lg:py-6 flex items-start gap-4 lg:gap-6 hover:text-[#9a998e] transition"
        aria-expanded={open}
      >
        <span className="text-[#9a998e] text-base tracking-wider shrink-0">Q.</span>
        <span className="flex-1 text-[14px] lg:text-[15px] leading-relaxed">{q}</span>
        <span
          aria-hidden
          className={cn(
            "shrink-0 w-4 h-4 mt-1 relative transition-transform",
            open && "rotate-45"
          )}
        >
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#9a998e]" />
          <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[#9a998e]" />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="flex items-start gap-4 lg:gap-6 pb-6 text-[#666]">
            <span className="text-[#9a998e] text-base tracking-wider shrink-0">A.</span>
            <p className="flex-1 text-[13px] lg:text-[14px] leading-loose">{a}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="container-clinic">
        <div className="anim text-center mb-12 lg:mb-16">
          <h2 className="section-eyebrow">FAQ</h2>
          <p className="text-sm text-[#9a998e] tracking-[0.3em] mt-2">よくある質問</p>
          <div className="w-12 h-px bg-[#9a998e]/40 mx-auto mt-6" />
        </div>

        <ul className="anim anim-delay-1 max-w-3xl mx-auto">
          {ITEMS.map((it) => (
            <Item key={it.q} {...it} />
          ))}
        </ul>
      </div>
    </section>
  );
}
