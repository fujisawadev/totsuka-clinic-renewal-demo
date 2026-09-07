import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "矯正装置｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="治療方法" enTitle="APPLIANCE" jpTitle="矯正装置" heroSrc="/photos/appliance-hero.jpg">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-[62rem]">
          矯正装置にはさまざまな種類があり、矯正医は症例の特徴、年齢、習癖、患者さんのご希望などにより装置を選択して治療を行います。当院で用いる代表的な装置をご紹介します。
        </p>
      </PageSection>

      <PageSection enTitle="Bracket" jpTitle="ブラケット装置" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-[14px] leading-loose text-[#222]">
            <p>歯の表面にブラケットと呼ばれる小さな装置をつけ、ワイヤーの力で歯を動かす、矯正治療で最も広く用いられる装置です。1本1本の歯を3次元的に的確、精密に動かし、理想的な歯並びと咬み合わせにすることが可能です。</p>
            <p>装置は年々進化しており、より目立ちにくい審美ブラケット（透明タイプ）もご使用いただけます。カラフルなカラーリングを用いることで、ファッションの一部として治療を楽しむ患者さんも増えています。</p>
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

      <PageSection enTitle="For Children" jpTitle="小児矯正装置" bg="soft">
        <p className="text-[14px] leading-loose text-[#222]">
          お子さまの歯並びや顎の成長を整えるために使用する矯正装置です。歯をきれいに並べるためのスペースを確保したり、歯の生える位置を整えたりする目的で使用します。
        </p>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Photo src="/photos/appliance-expansion.jpg" alt="拡大床装置" ratio="4/3" className="w-full" />
            <h3 className="mt-5 text-base lg:text-lg tracking-wider">拡大床（取り外し式）</h3>
            <p className="mt-3 text-[14px] leading-loose text-[#222]">主に上あごや歯列の幅を少しずつ広げ、歯が並ぶためのスペースを作る装置です。取り外し式のため、食事や歯みがきの際には外すことができます。</p>
          </div>
          <div>
            <Photo src="/photos/appliance-lingual.jpg" alt="リンガルアーチ" ratio="4/3" className="w-full" />
            <h3 className="mt-5 text-base lg:text-lg tracking-wider">リンガルアーチ（固定式）</h3>
            <p className="mt-3 text-[14px] leading-loose text-[#222]">歯の裏側に沿って装着する固定式の装置です。ご自身で取り外すことはできませんが、装置を入れたまま使用できるため、歯列の幅を維持したり、奥歯の位置を支えたりすることができます。</p>
          </div>
        </div>
        <p className="mt-10 text-[14px] leading-loose text-[#222]">
          使用する装置は、歯並びや顎の成長、治療の目的などによって異なります。ここでご紹介した以外にもさまざまな装置がありますので、お子さま一人ひとりのお口の状態を確認したうえで、適した装置をご提案します。
        </p>
      </PageSection>

      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-4xl">
          どの装置が適しているかは、検査・診断のうえ患者さん一人ひとりに合わせてご提案します。まずは無料の初診相談でお気軽にご相談ください。
        </p>
        <div className="mt-8 text-[12px] text-[#666] leading-loose space-y-1">
          <p>※ 治療費については <Link href="/pricing/" className="link-underline">矯正治療料金</Link> をご参照ください。</p>
          <p>※ 治療等の主なリスク・副作用についての詳細は <Link href="/risk/" className="link-underline">リスク・副作用について</Link> をご参照ください。</p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
