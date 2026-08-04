import { cn } from "@/lib/cn";

const MAP_QUERY = encodeURIComponent("ささき矯正歯科クリニック 横浜市戸塚区上倉田町493-1");

export default function GoogleMap({ className }: { className?: string }) {
  return (
    <div className={cn("w-full aspect-[4/3] lg:aspect-[16/6]", className)}>
      <iframe
        src={`https://www.google.com/maps?q=${MAP_QUERY}&z=17&output=embed`}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ささき矯正歯科クリニック 地図"
        allowFullScreen
      />
    </div>
  );
}
