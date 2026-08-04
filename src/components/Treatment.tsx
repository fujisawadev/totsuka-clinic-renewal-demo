import Link from "next/link";
import Placeholder from "./Placeholder";
import Photo from "./Photo";

const BY_TYPE = [
  { tag: "crowded", title: "乱杭歯（叢生）", href: "/symptoms/crowded/" },
  { tag: "overbite", title: "出っ歯（上顎前突）", href: "/symptoms/overbite/" },
  { tag: "underbite", title: "うけ口（下顎前突）", href: "/symptoms/underbite/" },
  { tag: "open bite", title: "開咬", href: "/symptoms/openbite/" },
];

const RELATED = [
  { tag: "appliance", title: "矯正装置", href: "/appliance/" },
  { tag: "extraction", title: "抜歯について", href: "/extraction/" },
  { tag: "aftercare", title: "アフターケア", href: "/aftercare/" },
  { tag: "before/after", title: "治療前後の比較", href: "/before-after/" },
];

function DarkCard({
  tag,
  title,
  body,
  href = "#",
  ratio = "3/2",
  index = 0,
  size = "lg",
}: {
  tag: string;
  title: string;
  body?: string;
  href?: string;
  ratio?: string;
  index?: number;
  size?: "lg" | "sm";
}) {
  const isLg = size === "lg";
  return (
    <Link
      href={href}
      className={`anim anim-delay-${Math.min((index % 3) + 1, 3)} group relative block overflow-hidden`}
      style={{ aspectRatio: ratio }}
    >
      <Placeholder label={title} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[rgba(20,20,20,0.55)] group-hover:bg-[rgba(20,20,20,0.35)] transition" />
      <div className="relative h-full flex flex-col items-center justify-center text-white px-6 text-center">
        <h4 className={`tracking-wider ${isLg ? "text-2xl lg:text-3xl" : "text-base lg:text-xl"}`}>{title}</h4>
        <div className="text-[11px] tracking-[0.3em] uppercase text-white/75 mt-2">{tag}</div>
        {body && isLg && (
          <p className="mt-5 text-[13px] leading-loose text-white/90 max-w-xs">{body}</p>
        )}
        {isLg && (
          <div className="mt-6 inline-flex items-center gap-3 text-[12px] tracking-[0.25em] text-white/95">
            View more
            <span aria-hidden className="w-8 h-px bg-white/70" />
            <span aria-hidden>→</span>
          </div>
        )}
      </div>
    </Link>
  );
}

function SubHeader({ jp }: { jp: string }) {
  return (
    <div className="anim mb-8 lg:mb-10">
      <h3 className="text-lg lg:text-xl tracking-wider relative inline-block pb-2">
        {jp}
        <span className="absolute left-0 bottom-0 w-12 h-px bg-[#9a998e]" />
      </h3>
    </div>
  );
}

export default function Treatment() {
  return (
    <section id="orthodontic-treatment" className="bg-white pb-16 lg:pb-40">
      <Photo src="/photos/treatment-hero.jpg" alt="ささき矯正歯科クリニックの診療室" className="w-full aspect-[16/8] sm:aspect-[16/6] lg:aspect-[16/4]" />

      <div className="container-clinic pt-12 lg:pt-24">
        <div className="anim flex flex-col items-start gap-1 lg:flex-row lg:items-end lg:gap-8 mb-12 lg:mb-20">
          <h2 className="section-eyebrow">Orthodontic Treatment</h2>
          <span className="text-[13px] lg:text-[14px] text-[#9a998e] tracking-wider lg:pb-2">矯正治療について</span>
        </div>

        <div className="mb-14 lg:mb-20">
          <SubHeader jp="不正咬合の種類から探す" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {BY_TYPE.map((c, i) => (
              <DarkCard key={c.tag} {...c} ratio="1/1" index={i} size="sm" />
            ))}
          </div>
        </div>

        <div>
          <SubHeader jp="関連メニュー" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {RELATED.map((c, i) => (
              <DarkCard key={c.tag} {...c} ratio="1/1" index={i} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
