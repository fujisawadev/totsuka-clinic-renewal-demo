import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "成人矯正｜ささき矯正歯科クリニック",
};

const MERITS = [
  { title: "見た目の改善", body: "歯並びが整うことで口元の印象が変わり、コンプレックスの解消にもつながります。" },
  { title: "咬み合わせの改善", body: "咬み合わせのバランスが整うことで特定の歯にかかる負担が減り、歯を長持ちさせることにつながります。" },
  { title: "お手入れのしやすさ", body: "歯ブラシが届きやすくなり、虫歯や歯周病の予防がしやすくなります。" },
];

export default function Page() {
  return (
    <SubPageLayout category="矯正治療" enTitle="ADULT ORTHODONTICS" jpTitle="成人矯正" heroSrc="/photos/adult-hero.jpg">
      <PageSection enTitle="About" jpTitle="成人矯正とは">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>成人矯正とは、永久歯が生えそろい、顎の成長がほぼ完了した時期（おおよそ中学生以降）に行う矯正治療です。1本1本の歯を精密に動かし、見た目の歯並びと咬み合わせを仕上げていく、本格的な矯正治療です。</p>
            <p>小児矯正から継続して行う場合と、この時期からはじめて治療を開始する場合があります。成人になってからでも治療は可能で、当院でも20〜30代の方を中心に、近年は中高年の方まで幅広い年代の患者さんが治療を受けられています。</p>
            <p>治療を始める時期や進め方は症例によって異なりますので、まずは無料の初診相談でお気軽にご相談ください。</p>
          </div>
          <Photo src="/photos/adult-counseling.jpg" alt="カウンセリングの様子" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Merit" jpTitle="成人矯正で得られること" bg="soft">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {MERITS.map((m, i) => (
            <div key={m.title} className="bg-white border border-[#e3e3e3] p-6 lg:p-8">
              <p className="text-xs tracking-[0.3em] text-[#9a998e] mb-3">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-base lg:text-lg tracking-wider mb-3">{m.title}</h3>
              <p className="text-[13px] leading-loose text-[#222]">{m.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection enTitle="Appliance" jpTitle="成人矯正で使用する主な装置">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Photo src="/photos/appliance-bracket.jpg" alt="マルチブラケット装置" ratio="4/3" className="w-full" />
            <h3 className="mt-5 text-base lg:text-lg tracking-wider">マルチブラケット装置（ワイヤー矯正）</h3>
            <p className="mt-3 text-[14px] leading-loose text-[#222]">歯の表面にブラケットと呼ばれる小さな装置をつけ、ワイヤーの力で歯を動かす、最も広く用いられる装置です。1本1本の歯を3次元的に的確、精密に動かし、理想的な歯並びと咬み合わせを目指します。目立ちにくい審美ブラケット（透明タイプ）もご使用いただけます。</p>
          </div>
          <div>
            <Photo src="/photos/appliance-mouthpiece.jpg" alt="アライナー矯正（マウスピース矯正）" ratio="4/3" className="w-full" />
            <h3 className="mt-5 text-base lg:text-lg tracking-wider">アライナー矯正（マウスピース矯正）</h3>
            <p className="mt-3 text-[14px] leading-loose text-[#222]">透明なマウスピース型の装置（アライナー）を段階的に交換しながら、少しずつ歯並びを改善していく装置です。取り外しが可能で審美性に優れ、食事や歯磨きも普段どおり行えます。適応できるかどうかは検査・診断のうえでご案内いたします。</p>
          </div>
        </div>
        <p className="mt-10 text-[13px] leading-loose text-[#666]">装置の詳細は <Link href="/appliance/" className="link-underline">矯正装置</Link> のページをご覧ください。症例やご希望に合わせて最適な装置をご提案します。</p>
      </PageSection>

      <PageSection bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-10 items-center">
          <div>
            <p className="text-[#9a998e] text-xs tracking-[0.3em] mb-2">はじめての方へ</p>
            <p className="text-[14px] leading-loose">お子さまの時期から始める治療については <Link href="/child/" className="link-underline">小児矯正</Link> をご覧ください。治療の流れは <Link href="/process/" className="link-underline">矯正治療の進め方</Link> でご案内しています。</p>
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
