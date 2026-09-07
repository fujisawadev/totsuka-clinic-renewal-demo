"use client";
import { useEffect, useState } from "react";
import Photo from "./Photo";

const SLIDES = [
  { src: "/photos/hero-clinic.jpg", alt: "ささき矯正歯科クリニックの診療室" },
  { src: "/photos/hero-smile.jpg", alt: "患者さんと笑顔で話す院長" },
  { src: "/photos/hero-treatment.jpg", alt: "患者さんを診療する副院長" },
];

export default function HeroSlides() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {SLIDES.map((s, i) => (
        <Photo
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1800ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
