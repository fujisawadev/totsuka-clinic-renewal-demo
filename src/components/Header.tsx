"use client";
import { useState } from "react";
import { cn } from "@/lib/cn";
import NavMenu from "./NavMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e3e3e3]">
        <div className="flex items-center justify-between h-16 lg:h-20 px-6 lg:px-10">
          <a href="#top" className="flex items-center" aria-label="トップへ">
            <div
              className="placeholder text-[10px] tracking-widest"
              style={{ width: 160, height: 32 }}
            >
              <span>クリニックロゴ</span>
            </div>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="relative h-[18px] w-6 flex flex-col justify-between focus:outline-none"
          >
            <span
              className={cn(
                "block h-[2px] w-full bg-[#222] transition-all duration-300 origin-center",
                open && "translate-y-[8px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-full bg-[#222] transition-opacity duration-200",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-full bg-[#222] transition-all duration-300 origin-center",
                open && "-translate-y-[8px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>
      <NavMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
