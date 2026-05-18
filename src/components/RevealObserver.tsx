"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
