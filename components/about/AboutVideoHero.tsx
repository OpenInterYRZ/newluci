"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutVideoHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!section || !overlay) return;

    const ctx = gsap.context(() => {
      // Darken the hero as user scrolls
      gsap.to(overlay, {
        opacity: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Slight scale-up for parallax depth feel
      gsap.to(".about-hero-bg", {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen">
      {/* Fixed hero that stays behind */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden -z-10">
        <img
          src="/night.webp"
          alt=""
          className="about-hero-bg w-full h-full object-cover will-change-transform"
        />
        {/* Dark overlay that increases on scroll */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black opacity-0 pointer-events-none"
        />
      </div>
    </section>
  );
}
