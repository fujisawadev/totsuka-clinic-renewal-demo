"use client";
import { useEffect } from "react";
import { cn } from "@/lib/cn";

type Props = { open: boolean; onClose: () => void };

const SYMPTOMS = [
  { label: "うけ口（下顎前突）", href: "/symptoms/underbite/" },
  { label: "出っ歯（上顎前突）", href: "/symptoms/overbite/" },
  { label: "乱杭歯・開咬", href: "/symptoms/crowded-openbite/" },
];
const TREATMENT = [
  { label: "矯正治療について", href: "/treatment/" },
  { label: "矯正治療の進め方", href: "/process/" },
  { label: "矯正装置", href: "/appliance/" },
  { label: "外科治療", href: "/surgical/" },
  { label: "抜歯について", href: "/extraction/" },
  { label: "アフターケア", href: "/aftercare/" },
  { label: "治療前後の比較", href: "/before-after/" },
];
const CLINIC = [
  { label: "院長紹介", href: "/doctor/" },
  { label: "年別症例件数", href: "/achievements/" },
  { label: "院内紹介・交通", href: "/access-info/" },
  { label: "初診の方へ", href: "/first-visit/" },
  { label: "矯正治療料金", href: "/pricing/" },
  { label: "採用情報", href: "/recruit/" },
];
const INFO = [
  { label: "よくある質問", href: "/faq/" },
  { label: "横浜の矯正歯科 Q&A", href: "/yokohama/" },
  { label: "お知らせ", href: "/news/" },
  { label: "リンク集", href: "/links/" },
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
            <Group label="症状別 / Symptoms" items={SYMPTOMS} />
            <Group label="矯正治療 / Treatment" items={TREATMENT} />
            <Group label="医院について / Clinic" items={CLINIC} />
            <Group label="情報・その他 / Info" items={INFO} />
          </div>
        </div>
      </aside>
    </>
  );
}

function Group({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="section-label mb-4">{label}</div>
      <ul className="space-y-3">
        {items.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="link-underline text-[15px]">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
