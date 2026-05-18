"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const all = document.querySelectorAll<HTMLElement>(".anim");
    all.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top >= window.innerHeight) el.classList.add("anim-hide");
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("anim-hide");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    all.forEach((el) => {
      if (el.classList.contains("anim-hide")) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
