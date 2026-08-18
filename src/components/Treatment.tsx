import Link from "next/link";
import Placeholder from "./Placeholder";
import Photo from "./Photo";
import { TYPE_VISUAL } from "@/lib/typeVisual";

const BY_TYPE = [
  { tag: "crowded", title: "乱杭歯（叢生）", href: "/symptoms/crowded/", src: "/photos/model-crowded-front.jpg", illust: "/photos/illust-crowded.png" },
  { tag: "overbite", title: "出っ歯（上顎前突）", href: "/symptoms/overbite/", src: "/photos/model-overbite-front.jpg", illust: "/photos/illust-overbite.png" },
  { tag: "underbite", title: "うけ口（下顎前突）", href: "/symptoms/underbite/", src: "/photos/model-underbite-front.jpg", illust: "/photos/illust-underbite.png" },
  { tag: "open bite", title: "開咬", href: "/symptoms/openbite/", src: "/photos/model-openbite-front.jpg", illust: "/photos/illust-openbite.png" },
];

const RELATED = [
  { tag: "appliance", title: "矯正装置", href: "/appliance/", src: "/photos/appliance-bracket.jpg" },
  { tag: "process", title: "矯正治療の進め方", href: "/process/", src: "/photos/process-hero.jpg" },
  { tag: "achievements", title: "年別症例件数", href: "/achievements/", src: "/photos/achievements-hero.jpg" },
  { tag: "doctor & staff", title: "医師・スタッフ紹介", href: "/doctor/", src: "/photos/hero-team.jpg" },
];

function DarkCard({
  tag,
  title,
  body,
  href = "#",
  ratio = "3/2",
  index = 0,
  size = "lg",
  src,
}: {
  tag: string;
  title: string;
  body?: string;
  href?: string;
  ratio?: string;
  index?: number;
  size?: "lg" | "sm";
  src?: string;
}) {
  const isLg = size === "lg";
  return (
    <Link
      href={href}
      className={`anim anim-delay-${Math.min((index % 3) + 1, 3)} group relative block overflow-hidden`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Photo src={src} alt={title} className="absolute inset-0 w-full h-full" />
      ) : (
        <Placeholder label={title} className="absolute inset-0 w-full h-full" />
      )}
      <div className={`absolute inset-0 transition ${src ? "bg-[rgba(20,20,20,0.35)] group-hover:bg-[rgba(20,20,20,0.15)]" : "bg-[rgba(20,20,20,0.55)] group-hover:bg-[rgba(20,20,20,0.35)]"}`} />
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

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function IllustCard({
  tag,
  title,
  href,
  illust,
  index = 0,
}: {
  tag: string;
  title: string;
  href: string;
  illust: string;
  index?: number;
}) {
  return (
    <Link
      href={href}
      className={`anim anim-delay-${Math.min((index % 3) + 1, 3)} group flex flex-col overflow-hidden bg-[#f4f1ea] transition-colors hover:bg-[#ece7db]`}
      style={{ aspectRatio: "1/1" }}
    >
      <div className="relative flex-1 min-h-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE}${illust}`}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain p-2 lg:p-4 transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-2 pb-4 lg:pb-5 text-center">
        <h4 className="text-[13px] lg:text-lg tracking-wider text-[#222]">{title}</h4>
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a998e] mt-1">{tag}</div>
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
            {BY_TYPE.map((c, i) =>
              TYPE_VISUAL === "illust" ? (
                <IllustCard key={c.tag} tag={c.tag} title={c.title} href={c.href} illust={c.illust} index={i} />
              ) : (
                <DarkCard key={c.tag} tag={c.tag} title={c.title} href={c.href} src={c.src} ratio="1/1" index={i} size="sm" />
              )
            )}
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
