import { cn } from "@/lib/cn";

type Props = {
  /** YouTube の動画 ID（watch?v=XXXX の XXXX） */
  videoId: string;
  title: string;
  className?: string;
};

/**
 * YouTube 動画の埋め込み。
 * プライバシー強化モード（youtube-nocookie.com）+ 遅延読み込み。
 */
export default function YouTubeEmbed({ videoId, title, className }: Props) {
  return (
    <div className={cn("w-full aspect-video bg-[#f4f1ea]", className)}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        className="w-full h-full border-0"
        loading="lazy"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
