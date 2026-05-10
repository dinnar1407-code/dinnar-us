// @ts-nocheck
"use client";
import { useEffect } from "react";

// Initializes GSAP ScrollTrigger fade-in animations for all sections except the hero.
// Section titles slide up first, then grid cards stagger in with a slight delay.
export function ScrollAnimations() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const sections = document.querySelectorAll("main section:not(:first-child)");

      sections.forEach((section) => {
        const title = section.querySelector(".section-title");
        const cards = section.querySelectorAll(".grid > *");

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: { trigger: section, start: "top 88%", once: true },
            }
          );
        }

        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.09,
              delay: title ? 0.2 : 0,
              ease: "power2.out",
              scrollTrigger: { trigger: section, start: "top 85%", once: true },
            }
          );
        }
      });

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    })();

    return () => cleanup?.();
  }, []);

  return null;
}
