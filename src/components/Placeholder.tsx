import { cn } from "@/lib/cn";

type Props = {
  label?: string;
  ratio?: string;
  className?: string;
  rounded?: boolean;
};

export default function Placeholder({ label = "画像", ratio, className, rounded }: Props) {
  return (
    <div
      className={cn("placeholder", rounded && "rounded-md", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}
