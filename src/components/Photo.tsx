import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  position?: string;
};

export default function Photo({ src, alt, ratio, className, position }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={cn("block object-cover", className)}
      style={{
        ...(ratio ? { aspectRatio: ratio } : undefined),
        ...(position ? { objectPosition: position } : undefined),
      }}
    />
  );
}
