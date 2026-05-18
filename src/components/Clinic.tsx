import Placeholder from "./Placeholder";

const SLIDES = Array.from({ length: 6 }, (_, i) => `院内 ${i + 1}`);

export default function Clinic() {
  const track = [...SLIDES, ...SLIDES];

  return (
    <section id="clinic" className="relative bg-white pt-12 lg:pt-16 overflow-hidden">
      <div className="relative w-full">
        <div className="clinic-track flex w-max">
          {track.map((label, i) => (
            <div
              key={i}
              className="shrink-0 w-[33.333vw] aspect-[3/2]"
            >
              <Placeholder label={label} className="w-full h-full" />
            </div>
          ))}
        </div>
        <div className="absolute left-6 lg:left-10 bottom-6 lg:bottom-8 z-10 pointer-events-none">
          <h2 className="section-eyebrow text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Clinic
          </h2>
          <p className="text-[12px] tracking-[0.3em] text-white/95 mt-1 drop-shadow">院内紹介</p>
        </div>
      </div>

      <style>{`
        @keyframes clinic-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .clinic-track { animation: clinic-scroll 36s linear infinite; }
        .clinic-track:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
