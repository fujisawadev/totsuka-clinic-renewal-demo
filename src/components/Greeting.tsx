import Placeholder from "./Placeholder";

export default function Greeting() {
  return (
    <section id="greeting" className="bg-white pt-24 lg:pt-32 pb-24 lg:pb-40 relative">
      <div className="container-clinic mb-8 lg:mb-12">
        <div className="anim flex items-end gap-6 lg:gap-8">
          <h2 className="section-eyebrow">Greeting</h2>
          <span className="text-[14px] text-[#9a998e] tracking-wider pb-2">院長あいさつ</span>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-6 lg:px-10">
        <div className="lg:col-span-8 relative anim">
          <Placeholder
            label="院長写真"
            ratio="16/10"
            className="w-full"
          />
          <div className="mt-6 lg:mt-8 max-w-md">
            <p className="text-xs text-[#9a998e] tracking-wider">日本矯正歯科学会 認定医</p>
            <p className="text-xs text-[#9a998e] tracking-wider">◯◯歯科クリニック 院長</p>
            <p className="mt-3 text-2xl tracking-wider">
              ◯◯ ◯◯
              <span className="ml-3 text-sm text-[#9a998e]">Family Name Given Name</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 anim anim-delay-1">
          <div
            className="text-[15px] leading-[2.4] text-[#222] tracking-wider max-h-[600px]"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <p>
              ここに院長メッセージが入ります（縦書き）。プレースホルダー本文：実際の文章は既存サイトから抽出した内容に差し替え予定です。<br />
              段落 2：診療方針や日々の想いを記述いただきます。<br />
              段落 3：締めのメッセージ。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
