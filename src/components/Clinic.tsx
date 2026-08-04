import Photo from "./Photo";

const SLIDES = [
  { label: "受付", src: "/photos/clinic-reception.jpg" },
  { label: "待合室", src: "/photos/clinic-waiting.jpg" },
  { label: "診療室", src: "/photos/clinic-treatment-room.jpg" },
  { label: "歯磨きスペース", src: "/photos/clinic-brushing.jpg" },
  { label: "レントゲン室", src: "/photos/clinic-xray.jpg" },
  { label: "滅菌設備", src: "/photos/clinic-sterilization.jpg" },
];

export default function Clinic() {
  const track = [...SLIDES, ...SLIDES];

  return (
    <section id="clinic" className="relative bg-white pt-12 lg:pt-16 overflow-hidden">
      <div className="relative w-full">
        <div className="clinic-track flex w-max">
          {track.map((s, i) => (
            <div
              key={i}
              className="shrink-0 w-[70vw] sm:w-[50vw] lg:w-[33.333vw] aspect-[3/2]"
            >
              <Photo src={s.src} alt={s.label} className="w-full h-full" />
            </div>
          ))}
        </div>
        <div className="absolute left-6 lg:left-10 bottom-6 lg:bottom-8 z-10 pointer-events-none">
          <h2 className="section-eyebrow text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Clinic
          </h2>
          <p className="text-[12px] tracking-[0.3em] text-white/95 mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">院内紹介</p>
        </div>
      </div>

      <style>{`
        @keyframes clinic-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .clinic-track { animation: clinic-scroll 48s linear infinite; }
        .clinic-track:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
