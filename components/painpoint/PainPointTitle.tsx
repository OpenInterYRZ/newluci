"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINE1 = "Every tool promises to save you time.";
const LINE2 = "None of them talk to each other.";
const SUBTITLE =
  "Your tools are siloed. LUCI connects them so nothing falls through the cracks.";

function SplitChars({ text, className }: { text: string; className: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span key={i} className={className} style={{ color: "#3a3a44" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function PainPointTitle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const line1Chars = section.querySelectorAll(".char-l1");
      const line2Chars = section.querySelectorAll(".char-l2");
      const subtitleChars = section.querySelectorAll(".char-sub");

      // Line 1: gray → white, letter by letter
      gsap.fromTo(
        line1Chars,
        { color: "#3a3a44" },
        {
          color: "#ffffff",
          stagger: 0.03,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        },
      );

      // Line 2: gray → white, letter by letter (starts slightly later)
      gsap.fromTo(
        line2Chars,
        { color: "#3a3a44" },
        {
          color: "#ffffff",
          stagger: 0.03,
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "top 15%",
            scrub: true,
          },
        },
      );

      // Subtitle: gray → lighter gray, letter by letter
      gsap.fromTo(
        subtitleChars,
        { color: "#3a3a44" },
        {
          color: "#8a8a96",
          stagger: 0.01,
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "top 10%",
            scrub: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-16 md:pt-24 px-5 md:px-20"
      style={{ background: "#0a0a0f" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-5">
        <h2
          className="text-[28px] md:text-[48px] font-extrabold leading-[1.2]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          <span className="inline">
            <SplitChars text={LINE1} className="char-l1" />
          </span>
          <br />
          <span className="inline">
            <SplitChars text={LINE2} className="char-l2" />
          </span>
        </h2>
        <p
          ref={subtitleRef}
          className="text-sm md:text-lg leading-relaxed max-w-full md:max-w-[600px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          <SplitChars text={SUBTITLE} className="char-sub" />
        </p>
      </div>
    </section>
  );
}
