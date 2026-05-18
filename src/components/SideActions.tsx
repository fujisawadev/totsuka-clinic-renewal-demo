const DESKTOP_ACTIONS = [
  { label: "045-871-2281", href: "tel:0458712281" },
  { label: "初診相談", href: "#counseling" },
  { label: "WEB予約", href: "#" },
  { label: "アクセス", href: "#access" },
  { label: "診療時間", href: "#access" },
];

const MOBILE_ACTIONS = [
  { label: "TEL", href: "tel:0458712281" },
  { label: "WEB予約", href: "#" },
  { label: "初診相談", href: "#counseling" },
  { label: "アクセス", href: "#access" },
];

export default function SideActions() {
  return (
    <>
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-px">
        {DESKTOP_ACTIONS.map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="w-16 h-20 bg-[#f4f1ea] text-[#9a998e] hover:bg-[#e9e3d6] hover:text-[#222] transition flex items-center justify-center text-xs tracking-widest"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {a.label}
          </a>
        ))}
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-[#e3e3e3]">
        {MOBILE_ACTIONS.map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="bg-[#f4f1ea] text-[#9a998e] hover:bg-[#e9e3d6] transition flex items-center justify-center py-3 text-xs tracking-wider"
          >
            {a.label}
          </a>
        ))}
      </div>
    </>
  );
}
