import Link from "next/link";
import Photo from "./Photo";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Props = {
  category: string;
  enTitle: string;
  jpTitle: string;
  heroSrc?: string;
  heroPosition?: string;
  /** 指定すると写真の代わりにイラスト（透過PNG）を淡い背景で表示する */
  heroIllust?: string;
};

export default function SubPageHero({ category, enTitle, jpTitle, heroSrc = "/photos/subpage-hero.jpg", heroPosition, heroIllust }: Props) {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[360px] lg:min-h-[640px] bg-white">
      {heroIllust ? (
        <div className="hidden lg:block relative bg-[#f4f1ea]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE}${heroIllust}`}
            alt=""
            className="absolute inset-0 w-full h-full object-contain p-16 xl:p-24"
          />
        </div>
      ) : (
        <div className="hidden lg:block relative">
          <Photo src={heroSrc} alt="" position={heroPosition} className="absolute inset-0 w-full h-full" />
        </div>
      )}

      <div className="relative flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-24">
        <div className="anim">
          <p className="text-[12px] sm:text-[13px] text-[#9a998e] tracking-wider text-center lg:text-left">
            {category}
          </p>
          <div className="w-10 lg:w-12 h-px bg-[#9a998e]/40 my-4 lg:my-5 mx-auto lg:mx-0" />
          <p className="text-[11px] sm:text-[12px] tracking-[0.35em] uppercase text-[#9a998e] text-center lg:text-left">
            {enTitle}
          </p>
          <h1 className="mt-3 lg:mt-4 text-2xl sm:text-3xl lg:text-5xl tracking-[0.1em] text-[#222] text-center lg:text-left leading-snug">
            {jpTitle}
          </h1>
        </div>

        <div className="anim anim-delay-1 mt-10 lg:mt-20 flex items-center justify-center lg:justify-start gap-3 text-[11px] sm:text-[12px] tracking-wider text-[#9a998e]">
          <Link href="/" className="link-underline">HOME</Link>
          <span aria-hidden className="text-[#9a998e]">◆</span>
          <span>{jpTitle}</span>
        </div>

        <span
          aria-hidden
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-[#9a998e]/15 text-[88px] tracking-[0.2em] leading-none select-none pointer-events-none"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          SOC
        </span>
      </div>
    </section>
  );
}
