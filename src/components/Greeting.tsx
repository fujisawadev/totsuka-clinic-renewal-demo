import Photo from "./Photo";

export default function Greeting() {
  return (
    <section id="greeting" className="bg-white pt-16 lg:pt-32 pb-16 lg:pb-40 relative">
      <div className="container-clinic mb-8 lg:mb-12">
        <div className="anim flex flex-col items-start gap-1 lg:flex-row lg:items-end lg:gap-8">
          <h2 className="section-eyebrow">Greeting</h2>
          <span className="text-[13px] lg:text-[14px] text-[#9a998e] tracking-wider lg:pb-2">院長あいさつ</span>
        </div>
      </div>

      {/* Mobile: photo → info → horizontal body text */}
      <div className="lg:hidden px-6">
        <div className="anim mb-8">
          <Photo src="/photos/greeting-director.jpg" alt="院長 佐々木光司" ratio="4/5" className="w-full" position="top" />
          <div className="mt-6">
            <p className="text-xs text-[#9a998e] tracking-wider">日本矯正歯科学会 認定医／歯学博士</p>
            <p className="text-xs text-[#9a998e] tracking-wider">ささき矯正歯科クリニック 院長</p>
            <p className="mt-3 text-2xl tracking-wider">
              佐々木 光司
              <span className="ml-3 text-sm text-[#9a998e]">Koji Sasaki</span>
            </p>
          </div>
        </div>
        <div className="anim anim-delay-1 space-y-5 text-[14px] leading-[2] text-[#222]">
          <p>
            歯並びや噛み合わせが悪いと、虫歯や歯周病になりやすく、咀嚼機能の低下や心理的な負担につながることもあります。私自身が不正咬合に悩んでいたこともあり、横浜市戸塚区で矯正歯科医の道を選びました。
          </p>
          <p>
            皆さんの歯並びが良くなるにつれ表情が明るく豊かになり、笑顔で通院いただけるようになるのを見るのは本当に嬉しい瞬間です。治療の際は、患者さんに我慢を強いるようなことは行いません。
          </p>
          <p>
            治療に対するご要望や不安は一人ひとり異なりますので、よく話し合い、個々に適した「患者さん本位の治療」を心掛けています。これからも地域の皆さまに信頼いただける医療を提供してまいります。
          </p>
        </div>
      </div>

      {/* Desktop: photo + info on left, tategaki on right */}
      <div className="hidden lg:grid relative lg:grid-cols-12 gap-12 px-10">
        <div className="lg:col-span-8 relative anim">
          <Photo src="/photos/greeting-director-wide.jpg" alt="院長 佐々木光司" ratio="16/10" className="w-full" />
          <div className="mt-8 max-w-md">
            <p className="text-xs text-[#9a998e] tracking-wider">日本矯正歯科学会 認定医／歯学博士</p>
            <p className="text-xs text-[#9a998e] tracking-wider">ささき矯正歯科クリニック 院長</p>
            <p className="mt-3 text-2xl tracking-wider">
              佐々木 光司
              <span className="ml-3 text-sm text-[#9a998e]">Koji Sasaki</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 anim anim-delay-1">
          <div
            className="text-[15px] leading-[2.4] text-[#222] tracking-wider max-h-[700px]"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <p>
              歯並びや噛み合わせが悪いと、虫歯や歯周病になりやすく、咀嚼機能の低下や心理的な負担につながることもあります。私自身が不正咬合に悩んでいたこともあり、横浜市戸塚区で矯正歯科医の道を選びました。
              <br />
              <br />
              皆さんの歯並びが良くなるにつれ表情が明るく豊かになり、笑顔で通院いただけるようになるのを見るのは本当に嬉しい瞬間です。治療の際は、患者さんに我慢を強いるようなことは行いません。
              <br />
              <br />
              治療に対するご要望や不安は一人ひとり異なりますので、よく話し合い、個々に適した「患者さん本位の治療」を心掛けています。これからも地域の皆さまに信頼いただける医療を提供してまいります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
