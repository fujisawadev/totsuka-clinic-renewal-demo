import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Placeholder from "@/components/Placeholder";
import Photo from "@/components/Photo";

export const metadata = {
  title: "矯正装置｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="治療方法" enTitle="APPLIANCE" jpTitle="矯正装置" heroSrc="/photos/appliance-hero.jpg">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          矯正装置にはさまざまな種類があり、矯正医は症例の特徴、年齢、習癖、患者さまのご希望などにより装置を選択して治療を行います。当院で用いる代表的な装置をご紹介します。
        </p>
      </PageSection>

      <PageSection enTitle="Bracket" jpTitle="ブラケット装置" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>歯の表面にブラケットと呼ばれる小さな装置をつけ、ワイヤーの力で歯を動かす、矯正治療で最も広く用いられる装置です。1本1本の歯を3次元的に的確、精密に動かし、理想的な歯並びと咬み合わせにすることが可能です。</p>
            <p>装置は年々進化しており、より目立ちにくい審美ブラケット（透明タイプ）もご使用いただけます。カラフルなカラーリングを用いることで、ファッションの一部として治療を楽しむ患者さまも増えています。</p>
          </div>
          <Photo src="/photos/appliance-bracket.jpg" alt="ブラケット装置の模型" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Mouthpiece" jpTitle="マウスピース型矯正装置（アライナー）">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>透明なマウスピース型の装置（アライナー）を段階的に交換しながら、少しずつ歯を動かしていく矯正装置です。装置が目立ちにくく、食事や歯磨きの際にはご自身で取り外せるため、清掃性に優れています。</p>
            <p>一方で、決められた装着時間を守らないと十分な効果が得られず、歯の移動が大きい症例には不向きな場合があります。適応できるかどうかは検査・診断のうえでご案内いたします。</p>
          </div>
          <Photo src="/photos/appliance-mouthpiece.jpg" alt="マウスピース型矯正装置（アライナー）" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection enTitle="Fixed Appliance" jpTitle="固定装置" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>歯に固定して使用する装置で、取り外しができないぶん、確実に歯を動かしたり、永久歯が生えるためのスペースを確保したりすることができます。</p>
            <p>歯列の内側から歯を動かす装置や、歯列の幅を広げる装置など種類はさまざまで、症例やお口の状態に合わせて、主にブラケット装置による治療と組み合わせて使用します。</p>
          </div>
          <Placeholder label="固定装置" ratio="4/3" className="w-full" />
        </div>
      </PageSection>

      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl">
          どの装置が適しているかは、検査・診断のうえ患者さま一人ひとりに合わせてご提案します。まずは無料の初診相談でお気軽にご相談ください。
        </p>
        <div className="mt-8 text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
