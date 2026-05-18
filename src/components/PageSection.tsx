import { cn } from "@/lib/cn";

type Props = {
  enTitle?: string;
  jpTitle?: string;
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "soft";
};

export default function PageSection({ enTitle, jpTitle, children, className, bg = "white" }: Props) {
  return (
    <section className={cn("py-16 lg:py-24", bg === "soft" && "bg-[#f4f1ea]/30", className)}>
      <div className="container-clinic">
        {(enTitle || jpTitle) && (
          <div className="anim mb-10 lg:mb-12">
            {enTitle && <h2 className="section-eyebrow">{enTitle}</h2>}
            {jpTitle && <p className="text-sm text-[#9a998e] tracking-[0.3em] mt-2">{jpTitle}</p>}
            <div className="w-12 h-px bg-[#9a998e]/40 mt-5" />
          </div>
        )}
        <div className="anim anim-delay-1">{children}</div>
      </div>
    </section>
  );
}
