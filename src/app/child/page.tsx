import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "小児矯正｜ささき矯正歯科クリニック",
};

const PURPOSES = [
  { title: "顎の成長をコントロール", body: "成長期にしかできないアプローチで、上下の顎のバランスを整えます。" },
  { title: "歯並びの改善", body: "永久歯が正しい位置に生えそろうよう、歯列を導きます。" },
  { title: "将来のトラブルを予防", body: "不正咬合を早期に改善することで、虫歯・歯周病などのリスクを減らします。" },
  { title: "抜歯リスクの軽減", body: "永久歯の生えるスペースを確保し、将来的に健康な歯を抜く可能性を減らします。" },
];

const CHECKLIST = [
  "うけ口・出っ歯が気になる",
  "歯がデコボコに生えている",
  "前歯が閉じない（開咬）",
  "指しゃぶりや舌のクセがある",
  "口呼吸をしていることが多い",
  "食べ物を上手に噛めていない",
];

export default function Page() {
  return (
    <SubPageLayout category="矯正治療" enTitle="CHILD ORTHODONTICS" jpTitle="小児矯正">
      <PageSection enTitle="About" jpTitle="小児矯正とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>小児矯正とは、乳歯と永久歯が混在する時期（おおよそ6〜12歳頃）に行う矯正治療です。単に見た目の歯並びを整えるだけでなく、顎の成長を正しい方向へ導き、永久歯がきれいに生えそろうための土台をつくる「将来のための準備」という側面を持ちます。この時期に土台を整えることで、その後の本格的な矯正治療の負担を軽くしたり、抜歯を回避できる可能性が高まります。</p>
            <p>不正咬合の状態は、お子さま一人ひとりによって千差万別です。どのような症例もすぐに治療を始めた方がよいというわけではなく、当院ではまず検査・診断のうえで、治療を始める適切な時期を見極めます。経過観察が適している場合は、3ヶ月〜6ヶ月おきの定期診査で成長を見守ります。</p>
            <p>お子さまの歯並びで気になることがあれば、まずは無料の初診相談でお気軽にご相談ください。</p>
          </div>
          <Photo src="/photos/child-image.jpg" alt="歯磨きをするお子さま" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Purpose" jpTitle="小児矯正の目的" bg="soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {PURPOSES.map((p, i) => (
            <div key={p.title} className="bg-white border border-[#e3e3e3] p-6 lg:p-8">
              <p className="text-xs tracking-[0.3em] text-[#9a998e] mb-3">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-base lg:text-lg tracking-wider mb-3">{p.title}</h3>
              <p className="text-[13px] leading-loose text-[#222]">{p.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection enTitle="Appliance" jpTitle="小児矯正で使用する主な装置">
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          お子さまの歯並びや顎の成長を整えるために使用する矯正装置です。歯をきれいに並べるためのスペースを確保したり、歯の生える位置を整えたりする目的で使用します。
        </p>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Photo src="/photos/appliance-expansion.jpg" alt="拡大床装置" ratio="4/3" className="w-full" />
            <h3 className="mt-5 text-base lg:text-lg tracking-wider">拡大床（取り外し式）</h3>
            <p className="mt-3 text-[14px] leading-loose text-[#222]">拡大床は、主に上あごや歯列の幅を少しずつ広げ、歯が並ぶためのスペースを作る装置です。取り外し式のため、食事や歯みがきの際には外すことができます。</p>
          </div>
          <div>
            <Photo src="/photos/appliance-lingual.jpg" alt="リンガルアーチ" ratio="4/3" className="w-full" />
            <h3 className="mt-5 text-base lg:text-lg tracking-wider">リンガルアーチ（固定式）</h3>
            <p className="mt-3 text-[14px] leading-loose text-[#222]">リンガルアーチは、歯の裏側に沿って装着する固定式の装置です。ご自身で取り外すことはできませんが、装置を入れたまま使用できるため、歯列の幅を維持したり、奥歯の位置を支えたりすることができます。</p>
          </div>
        </div>
        <p className="mt-10 text-[14px] leading-loose text-[#222] max-w-3xl">
          どちらの装置を使用するかは、歯並びや顎の成長、治療の目的などによって異なります。お子さま一人ひとりのお口の状態を確認したうえで、適した装置をご提案します。
        </p>
      </PageSection>

      <PageSection enTitle="Check" jpTitle="こんなお子さまはご相談ください" bg="soft">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-[14px] max-w-3xl">
          {CHECKLIST.map((c) => (
            <li key={c} className="flex items-start gap-3 border-b border-[#e3e3e3]/70 pb-3">
              <span aria-hidden className="inline-block mt-1 w-4 h-4 border border-[#9a998e] flex items-center justify-center text-[10px] text-[#9a998e] shrink-0">✓</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[13px] leading-loose text-[#666]">指しゃぶり・舌癖・口呼吸などの習癖は、開咬をはじめとする不正咬合の要因となることがあります。早めにご相談いただくことで、治療の選択肢が広がります。</p>
      </PageSection>

      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-10 items-center">
          <div>
            <p className="text-[#9a998e] text-xs tracking-[0.3em] mb-2">小児矯正のあとは</p>
            <p className="text-[14px] leading-loose">永久歯が生えそろったあとの仕上げの治療については <Link href="/adult/" className="link-underline">成人矯正</Link> をご覧ください。治療の流れは <Link href="/process/" className="link-underline">矯正治療の進め方</Link> で詳しくご案内しています。</p>
          </div>
          <Link href="/first-visit/" className="inline-block bg-[#9a998e] text-white text-sm tracking-widest px-6 py-3 hover:bg-[#b5b4a8] transition w-fit lg:justify-self-end">
            初診の方へ
          </Link>
        </div>
        <div className="mt-10 text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
