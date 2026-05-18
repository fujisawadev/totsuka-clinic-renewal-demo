import Placeholder from "./Placeholder";

export default function Counseling() {
  return (
    <section id="counseling" className="bg-white py-24 lg:py-40">
      <div className="px-6 lg:px-10">
        <div className="anim text-center mb-12 lg:mb-16">
          <h2 className="section-eyebrow">Counseling</h2>
          <p className="text-sm text-[#9a998e] tracking-[0.3em] mt-2">カウンセリング</p>
          <div className="w-12 h-px bg-[#9a998e]/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center max-w-[1400px] mx-auto">
          <div className="anim">
            <Placeholder label="カウンセリング写真 1" ratio="4/5" className="w-full max-w-md mx-auto lg:ml-auto" />
          </div>

          <div className="anim anim-delay-1 max-w-md text-center text-[14px] leading-[2] text-[#222]">
            <p>──── プレースホルダー本文 ────</p>
            <p className="mt-2">カウンセリングの導入文がここに入ります。読者の悩みや想いに語りかける文章を 4〜6 行程度で記述いただきます。</p>
            <div className="w-12 h-px bg-[#9a998e]/40 mx-auto my-6" />
            <p>段落 2：プレースホルダー本文 ── カウンセリングの流れや所要時間、メリットを記述いただきます。</p>
            <p className="mt-3">実コンテンツに差し替え予定。</p>
            <a
              href="#"
              className="mt-8 inline-block bg-[#9a998e] text-white text-sm tracking-widest px-10 py-4 hover:bg-[#b5b4a8] transition"
            >
              無料カウンセリングを予約
            </a>
          </div>

          <div className="anim anim-delay-2">
            <Placeholder label="カウンセリング写真 2" ratio="4/5" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
