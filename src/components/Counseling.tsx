import Placeholder from "./Placeholder";

export default function Counseling() {
  return (
    <section id="counseling">
      <div className="bg-white py-24 lg:py-40">
        <div className="container-clinic">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5 anim">
              <div className="section-label mb-4">Counseling</div>
              <h2 className="section-eyebrow mb-8">カウンセリング</h2>
              <h3 className="section-title leading-snug">
                ここにカウンセリングの
                <br />
                リード文が入ります。
              </h3>
            </div>
            <div className="lg:col-span-7 anim anim-delay-1 space-y-5 text-[15px] leading-loose text-[#444]">
              <p>
                ──── プレースホルダー本文 ────<br />
                カウンセリングの内容、所要時間、流れ等を説明するエリアです。実コンテンツに差し替え予定。
              </p>
              <p>
                段落 2：カウンセリングで相談できる内容、患者さまにとってのメリットを記述いただきます。
              </p>
              <p>
                段落 3：申込み方法、来院前の準備など、補足情報を記述いただきます。
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Placeholder
              label="カウンセリング1"
              ratio="3/4"
              className="anim w-full"
            />
            <Placeholder
              label="カウンセリング2"
              ratio="3/4"
              className="anim anim-delay-2 w-full mt-12"
            />
          </div>
        </div>
      </div>

      <div className="relative h-[520px] overflow-hidden">
        <Placeholder
          label="カウンセリング背景"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-white/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="anim text-xs tracking-[0.3em] uppercase text-[#9a998e] mb-6">
            Free Counseling
          </p>
          <h3 className="anim anim-delay-1 text-2xl lg:text-4xl mb-6 leading-snug">
            無料カウンセリング受付中
          </h3>
          <p className="anim anim-delay-2 text-[14px] lg:text-[15px] leading-loose text-[#444] max-w-xl mb-10">
            ──── プレースホルダー本文 ────
            <br />
            CTA セクションのリード文がここに入ります。
          </p>
          <a
            href="#"
            className="anim anim-delay-3 inline-block bg-[#9a998e] text-white text-sm tracking-widest px-10 py-4 hover:bg-[#b5b4a8] transition"
          >
            カウンセリングを予約する
          </a>
        </div>
      </div>
    </section>
  );
}
