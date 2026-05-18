import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Placeholder from "@/components/Placeholder";

export const metadata = {
  title: "矯正装置｜ささき矯正歯科クリニック",
};

const APPLIANCES = [
  { name: "金属ブラケット", body: "矯正装置として最もポピュラーな装置です。" },
  { name: "審美ブラケット", body: "透明なブラケットを用いることにより、比較的目立たなくなります。強度・耐久性ともに通常の装置と差はありません。" },
  { name: "カラーリング", body: "ワイヤーを止めるゴムをカラーにして様々なバリエーションを楽しめます。ゴムは毎回別の色に取り替えることができます。" },
  { name: "チンキャップ装置", body: "成長期の受け口の治療に用いる装置で、主に就寝中に使用します。下顎の成長に作用します。" },
  { name: "ヘッドギア装置", body: "成長期で永久歯が生えてくるスペースが足りない症例や、出っ歯の治療に用いる装置。主に就寝中に使用し、大臼歯を後方に移動させスペースを作ったり上顎の成長に作用します。" },
  { name: "リンガルアーチ装置", body: "主に受け口の治療に用いる装置で、上顎の前歯を前に出します。固定式の装置で取り外しはできません。" },
  { name: "クワドへリックス装置", body: "歯茎の幅が狭く永久歯の生えてくるスペースが不足している場合に、歯茎を横に広げる装置。固定式のため確実な歯の移動が可能です。" },
  { name: "床矯正装置", body: "歯茎が狭い患者さんに用いる取り外し可能なタイプ。歯磨き時に外せるため清掃性に優れていますが、使用時間によって効果に差が出るため確実性に欠ける面があります。" },
  { name: "ラピッドエクスパンジョン装置", body: "上顎自体が狭く、より積極的な拡大が必要な場合に用います。上顎自体が広がり永久歯が生えるための十分なスペースを作ることができます。" },
  { name: "バイヘリックス装置", body: "下顎の歯茎の幅が狭く永久歯の生えてくるスペースが不足している場合に用いる、下顎の緩徐拡大装置です。" },
];

export default function Page() {
  return (
    <SubPageLayout category="治療方法" enTitle="APPLIANCE" jpTitle="矯正装置">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl mb-12">
          矯正装置は代表的なタイプだけでも数十種類があり、矯正医は症例の特徴、年齢、習癖、患者さまのご希望などにより装置を選択して治療を行います。以下にいくつかの矯正装置をご紹介します。
        </p>

        <h3 className="text-xl tracking-wider mb-6">マルチブラケット装置</h3>
        <p className="text-[14px] leading-loose text-[#444] max-w-3xl mb-8">
          矯正治療を行うにあたって最も大切なことの一つは、正しい咬み合わせの獲得です。この装置は1本1本の歯を3次元的に的確、精密に動かし、理想的な歯並びと咬み合わせにすることが可能です。通常の矯正装置も年々進化し、より目立ちにくい審美ブラケット（透明タイプ）もご使用いただけます。カラフルなカラーリングを用いることでファッションの一部として治療を楽しむ患者さまも増えています。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLIANCES.map((a) => (
            <article key={a.name} className="bg-[#f4f1ea]/40 p-6">
              <Placeholder label={a.name} ratio="4/3" className="w-full mb-4" />
              <h4 className="text-base mb-2 text-[#222]">{a.name}</h4>
              <p className="text-[13px] leading-loose text-[#444]">{a.body}</p>
            </article>
          ))}
        </div>
      </PageSection>
    </SubPageLayout>
  );
}
