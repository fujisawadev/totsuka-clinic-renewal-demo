"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import NavMenu from "./NavMenu";

type Props = {
  solid?: boolean;
  homeHref?: string;
  anchorBase?: string;
};

const ANCHORS = [
  { label: "Greeting", suffix: "#greeting" },
  { label: "Concept", suffix: "#concept" },
  { label: "Orthodontic Treatment", suffix: "#orthodontic-treatment" },
  { label: "Clinic", suffix: "#clinic" },
  { label: "Access", suffix: "#access" },
];

export default function Header({ solid = false, homeHref = "#top", anchorBase = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const showSolid = solid || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          showSolid
            ? "lg:bg-white/95 lg:backdrop-blur-sm lg:border-b lg:border-[#e3e3e3]"
            : "bg-transparent"
        )}
      >
        <div className="flex items-start justify-between px-6 lg:px-10 pt-5 lg:pt-7 pb-4">
          <Link
            href={homeHref}
            className={cn(
              "hidden lg:flex flex-col transition-opacity duration-300",
              showSolid ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="トップへ"
            aria-hidden={!showSolid}
          >
            <span className="text-2xl tracking-[0.15em] text-[#222] whitespace-nowrap">
              ささき矯正歯科クリニック
            </span>
            <span className="text-[11px] tracking-[0.25em] mt-1 text-[#9a998e]">
              SASAKI ORTHODONTIC CLINIC
            </span>
          </Link>
          <span className="lg:hidden" aria-hidden />

          <nav className="hidden lg:flex items-center gap-8 mt-2">
            {ANCHORS.map((a) => (
              <Link
                key={a.label}
                href={`${anchorBase}${a.suffix}`}
                className={cn(
                  "text-[13px] tracking-[0.1em] transition-colors",
                  showSolid ? "text-[#222] hover:text-[#9a998e]" : "text-white hover:text-white/70"
                )}
              >
                {a.label}
              </Link>
            ))}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              className="relative h-[14px] w-7 flex flex-col justify-between focus:outline-none ml-4"
            >
              <span className={cn("block h-[1.5px] w-full transition-all duration-300", showSolid ? "bg-[#222]" : "bg-white", open && "translate-y-[6px] rotate-45")} />
              <span className={cn("block h-[1.5px] w-full transition-opacity duration-200", showSolid ? "bg-[#222]" : "bg-white", open && "opacity-0")} />
              <span className={cn("block h-[1.5px] w-full transition-all duration-300", showSolid ? "bg-[#222]" : "bg-white", open && "-translate-y-[6px] -rotate-45")} />
            </button>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="lg:hidden relative h-[14px] w-7 flex flex-col justify-between focus:outline-none mt-2"
          >
            <span className={cn("block h-[1.5px] w-full transition-all duration-300", showSolid ? "bg-[#222]" : "bg-white", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("block h-[1.5px] w-full transition-opacity duration-200", showSolid ? "bg-[#222]" : "bg-white", open && "opacity-0")} />
            <span className={cn("block h-[1.5px] w-full transition-all duration-300", showSolid ? "bg-[#222]" : "bg-white", open && "-translate-y-[6px] -rotate-45")} />
          </button>
        </div>
      </header>
      <NavMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
