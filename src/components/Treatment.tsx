import Placeholder from "./Placeholder";

const PLACEHOLDER_BODY = "プレースホルダー本文 ── このカードの説明文が入ります。";

const BY_AGE = [
  { tag: "child", title: "小児矯正（6〜12歳）", body: PLACEHOLDER_BODY },
  { tag: "adult", title: "成人矯正", body: PLACEHOLDER_BODY },
];

const BY_DEVICE = [
  { tag: "mouth piece", title: "マウスピース型矯正装置", body: PLACEHOLDER_BODY },
  { tag: "wire", title: "ワイヤー矯正", body: PLACEHOLDER_BODY },
  { tag: "lingual", title: "舌側矯正", body: PLACEHOLDER_BODY },
  { tag: "partial", title: "部分矯正", body: PLACEHOLDER_BODY },
];

const BY_TYPE = [
  { tag: "crowded", title: "ガタガタ（叢生）" },
  { tag: "overbite", title: "出っ歯（上顎前突）" },
  { tag: "underbite", title: "受け口（下顎前突）" },
  { tag: "spaced", title: "口ゴボ" },
  { tag: "open", title: "開咬" },
  { tag: "deep", title: "過蓋咬合" },
];

function Card({
  tag,
  title,
  body,
  ratio = "3/2",
  index = 0,
}: {
  tag: string;
  title: string;
  body?: string;
  ratio?: string;
  index?: number;
}) {
  return (
    <a
      href="#"
      className={`anim anim-delay-${Math.min((index % 3) + 1, 3)} group block`}
    >
      <Placeholder label={title} ratio={ratio} className="w-full mb-5" />
      <div className="text-[11px] tracking-[0.25em] uppercase text-[#9a998e] mb-2">
        {tag}
      </div>
      <h4 className="text-base lg:text-lg leading-snug mb-3 group-hover:text-[#9a998e] transition">
        {title}
      </h4>
      {body && <p className="text-[13px] leading-loose text-[#555] mb-3">{body}</p>}
      <span className="view-more">View more</span>
    </a>
  );
}

function SubHeader({
  num,
  en,
  jp,
}: {
  num: string;
  en: string;
  jp: string;
}) {
  return (
    <div className="anim mb-10">
      <div className="flex items-baseline gap-4 mb-2">
        <span className="text-xs tracking-[0.25em] text-[#9a998e]">{num}</span>
        <span className="text-xs tracking-[0.25em] uppercase text-[#9a998e]">
          {en}
        </span>
      </div>
      <h3 className="text-2xl lg:text-3xl text-[#222]">{jp}</h3>
    </div>
  );
}

export default function Treatment() {
  return (
    <section
      id="orthodontic-treatment"
      className="bg-white py-24 lg:py-40"
    >
      <div className="container-clinic">
        <div className="anim mb-20">
          <div className="section-label mb-4">Orthodontic Treatment</div>
          <h2 className="section-eyebrow">矯正治療について</h2>
        </div>

        <div className="mb-20">
          <SubHeader num="01" en="By Age" jp="年齢別で探す" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {BY_AGE.map((c, i) => (
              <Card key={c.tag} {...c} ratio="3/2" index={i} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <SubHeader num="02" en="By Device" jp="装置・方法から探す" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {BY_DEVICE.map((c, i) => (
              <Card key={c.tag} {...c} ratio="3/2" index={i} />
            ))}
          </div>
        </div>

        <div>
          <SubHeader num="03" en="By Type" jp="不正咬合の種類から探す" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {BY_TYPE.map((c, i) => (
              <Card key={c.tag} {...c} ratio="1/1" index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
