"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import NavMenu from "./NavMenu";

const ANCHORS = [
  { label: "Greeting", href: "#greeting" },
  { label: "Concept", href: "#concept" },
  { label: "Orthodontic Treatment", href: "#orthodontic-treatment" },
  { label: "Clinic", href: "#clinic" },
  { label: "Access", href: "#access" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          scrolled ? "bg-white/95 backdrop-blur-sm border-b border-[#e3e3e3]" : "bg-transparent"
        )}
      >
        <div className="flex items-start justify-between px-6 lg:px-10 pt-5 lg:pt-7 pb-4">
          <a href="#top" className="flex flex-col" aria-label="トップへ">
            <span
              className={cn(
                "text-xl lg:text-2xl tracking-[0.15em] transition-colors",
                scrolled ? "text-[#222]" : "text-white"
              )}
            >
              ささき矯正歯科クリニック
            </span>
            <span
              className={cn(
                "text-[10px] lg:text-[11px] tracking-[0.25em] mt-1 transition-colors",
                scrolled ? "text-[#9a998e]" : "text-white/80"
              )}
            >
              SASAKI ORTHODONTIC CLINIC
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 mt-2">
            {ANCHORS.map((a) => (
              <a
                key={a.label}
                href={a.href}
                className={cn(
                  "text-[13px] tracking-[0.1em] transition-colors",
                  scrolled ? "text-[#222] hover:text-[#9a998e]" : "text-white hover:text-white/70"
                )}
              >
                {a.label}
              </a>
            ))}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              className="relative h-[14px] w-7 flex flex-col justify-between focus:outline-none ml-4"
            >
              <span className={cn("block h-[1.5px] w-full transition-all duration-300", scrolled ? "bg-[#222]" : "bg-white", open && "translate-y-[6px] rotate-45")} />
              <span className={cn("block h-[1.5px] w-full transition-opacity duration-200", scrolled ? "bg-[#222]" : "bg-white", open && "opacity-0")} />
              <span className={cn("block h-[1.5px] w-full transition-all duration-300", scrolled ? "bg-[#222]" : "bg-white", open && "-translate-y-[6px] -rotate-45")} />
            </button>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="lg:hidden relative h-[14px] w-7 flex flex-col justify-between focus:outline-none mt-2"
          >
            <span className={cn("block h-[1.5px] w-full transition-all duration-300", scrolled ? "bg-[#222]" : "bg-white", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("block h-[1.5px] w-full transition-opacity duration-200", scrolled ? "bg-[#222]" : "bg-white", open && "opacity-0")} />
            <span className={cn("block h-[1.5px] w-full transition-all duration-300", scrolled ? "bg-[#222]" : "bg-white", open && "-translate-y-[6px] -rotate-45")} />
          </button>
        </div>
      </header>
      <NavMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
