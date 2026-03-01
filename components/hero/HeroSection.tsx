"use client";

import { useRef } from "react";
import Badge from "../Badge";
import ProductMockup from "../ProductMockup";

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!backgroundRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const maxOffset = 14;
    const offsetX = x * maxOffset;
    const offsetY = y * maxOffset;

    backgroundRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!backgroundRef.current) return;
    backgroundRef.current.style.transform = "translate3d(0, 0, 0) scale(1.05)";
  };

  return (
    <section
      className="bg-bg-0 relative w-full overflow-hidden flex flex-col items-center gap-[48px] py-[100px] px-[80px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-center bg-cover transition-transform duration-300 ease-out"
        style={{ backgroundImage: "url('/3.webp')", transform: "scale(1.05)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-bg-0/55 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full flex flex-col items-center gap-[48px]">
        {/* Badge */}
        <Badge text="Personal AI Assistant" />

        {/* Hero Title */}
        <h1 className="text-text-0 font-serif text-[72px] tracking-[-1px] text-center">
          See, Remember & Act
        </h1>

        {/* Hero Subtitle */}
        <p className="text-text-1 font-sans text-[20px] leading-[1.6] text-center max-w-[800px]">
          LUCI remembers everything, then gets things done automatically.
          <br />
          Not just a note-taking tool — it&apos;s a personal AI assistant that
          builds memory and executes tasks.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-[16px]">
          {/* Primary CTA */}
          <div className="bg-primary rounded-[8px] py-[14px] px-[32px] flex gap-[8px] hover:bg-primary-hover transition-colors cursor-pointer">
            <span className="text-white font-sans text-[15px] font-medium">
              Sign Up for Cloud
            </span>
            <span className="text-white font-sans text-[15px] font-medium">
              →
            </span>
          </div>

          {/* Secondary CTA */}
          <div className="rounded-[8px] py-[14px] px-[32px] flex gap-[8px] hover:bg-bg-1 transition-colors cursor-pointer border border-grey-2">
            <span className="text-text-1 font-sans text-[15px] font-medium">
              Download Local
            </span>
            <span className="text-text-1 font-sans text-[15px] font-medium">
              ↓
            </span>
          </div>
        </div>

        {/* Product Mockup */}
        <ProductMockup />

        {/* Trust Row */}
        <div className="flex items-center justify-center gap-[40px] w-full pt-[40px]">
          <span className="text-text-3 font-sans text-[12px] font-medium tracking-[0.5px]">
            Built on open source
          </span>
          <div className="h-[16px] w-[1px] bg-grey-2" />
          <span className="text-text-2 font-mono text-[13px] font-medium">
            OpenClaw
          </span>
          <div className="h-[16px] w-[1px] bg-grey-2" />
          <span className="text-text-2 font-mono text-[13px] font-medium">
            Memories.ai
          </span>
          <div className="h-[16px] w-[1px] bg-grey-2" />
          <span className="text-text-2 font-mono text-[13px] font-medium">
            Self-hosted
          </span>
        </div>
      </div>
    </section>
  );
}
