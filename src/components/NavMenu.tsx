"use client";
import { useEffect } from "react";
import { cn } from "@/lib/cn";

type Props = { open: boolean; onClose: () => void };

const SYMPTOMS = [
  "上顎前突（出っ歯）",
  "下顎前突（受け口）",
  "上下顎前突（口ゴボ）",
  "叢生（八重歯）",
  "開咬",
  "過蓋咬合",
];
const CATEGORIES = [
  "小児矯正",
  "成人矯正",
  "マウスピース型矯正",
  "ワイヤー矯正",
  "舌側矯正",
  "部分矯正",
];
const CLINIC = [
  "院長紹介",
  "院内紹介",
  "アクセス",
  "料金",
  "症例",
  "よくある質問",
];

export default function NavMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[55] bg-black/30 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden
      />
      <aside
        className={cn(
          "fixed left-0 top-0 z-[60] h-screen w-full max-w-[440px] bg-white shadow-xl transition-transform duration-[400ms] ease-out",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col overflow-y-auto px-10 py-12">
          <button
            onClick={onClose}
            aria-label="メニューを閉じる"
            className="self-end mb-8 text-[#9a998e] hover:text-[#222] transition"
          >
            <span className="text-sm tracking-widest">CLOSE ×</span>
          </button>
          <div className="space-y-10">
            <Group label="症状別 / Symptoms" links={SYMPTOMS} />
            <Group label="年齢・装置別 / Categories" links={CATEGORIES} />
            <Group label="クリニック / Clinic" links={CLINIC} />
          </div>
        </div>
      </aside>
    </>
  );
}

function Group({ label, links }: { label: string; links: string[] }) {
  return (
    <div>
      <div className="section-label mb-4">{label}</div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="link-underline text-[15px]">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
