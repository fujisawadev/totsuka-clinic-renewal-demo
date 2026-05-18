import Placeholder from "./Placeholder";

export default function Greeting() {
  return (
    <section id="greeting" className="bg-white py-24 lg:py-40">
      <div className="container-clinic">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 anim">
            <div className="section-label mb-4">Greeting</div>
            <h2 className="section-eyebrow mb-8">院長あいさつ</h2>
            <h3 className="section-title mb-8 leading-snug">
              ここに院長メッセージの
              <br />
              キャッチコピーが入ります。
            </h3>
            <div className="space-y-5 text-[15px] leading-loose text-[#444]">
              <p>
                ──── プレースホルダー本文 ────<br />
                ここには院長からのメッセージが入ります。実際の文章は、既存サイトから抽出した内容に差し替え予定です。
              </p>
              <p>
                段落 2：診療方針や、どのような想いで日々診療されているかを記述いただく想定です。
              </p>
              <p>
                段落 3：締めのメッセージ。患者さまへ向けたコメントなどが入ります。
              </p>
            </div>
            <p className="mt-10 text-sm tracking-wider text-[#9a998e]">
              院長　◯◯ ◯◯
            </p>
          </div>

          <div className="lg:col-span-7 relative">
            <Placeholder
              label="院長写真"
              ratio="16/10"
              className="anim w-full"
            />
            <Placeholder
              label="診療風景"
              ratio="4/3"
              className="anim anim-delay-2 absolute -bottom-10 -left-6 lg:-left-16 w-2/5 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
