"use client";
import { useEffect, useRef, useState } from "react";
import Placeholder from "./Placeholder";
import { cn } from "@/lib/cn";

const SLIDES = Array.from({ length: 6 }, (_, i) => `院内 ${i + 1}`);
const GAP = 24;

export default function Clinic() {
  const [active, setActive] = useState(0);
  const [slideW, setSlideW] = useState(450);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    function compute() {
      const w = window.innerWidth;
      setSlideW(w >= 1144 ? 450 : Math.round(w * 0.8));
    }
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActive((a) => (a + 1) % SLIDES.length);
      }
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="clinic" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="container-clinic mb-12">
        <div className="anim">
          <div className="section-label mb-4">Clinic</div>
          <h2 className="section-eyebrow">院内紹介</h2>
        </div>
      </div>

      <div
        ref={wrapRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        className="relative"
      >
        <div
          className="flex transition-transform duration-700"
          style={{
            gap: `${GAP}px`,
            paddingLeft: "max(24px, calc((100vw - 1120px) / 2))",
            transform: `translateX(-${active * (slideW + GAP)}px)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {SLIDES.map((label, i) => (
            <div
              key={label}
              className="shrink-0"
              style={{ width: slideW }}
              aria-hidden={i !== active}
            >
              <Placeholder label={label} ratio="4/3" className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="container-clinic mt-10 flex justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`スライド ${i + 1}へ`}
            className={cn(
              "h-2 w-2 rounded-full border border-[#9a998e] transition",
              i === active ? "bg-[#9a998e] w-6" : "bg-transparent"
            )}
          />
        ))}
      </div>
    </section>
  );
}
