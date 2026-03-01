"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full overflow-hidden rounded-[32px] mx-auto max-w-[1400px]">
      {/* Background gradient — orange core fading to black edges */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 100% at 70% 50%, #ff5c00 0%, #c44500 25%, #6b2500 50%, #1a0a00 75%, #0a0a0b 100%)",
          ].join(","),
        }}
      />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 z-1 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Subtle top highlight edge */}
      <div className="absolute top-0 left-[10%] right-[10%] h-1 bg-linear-to-r from-transparent via-brand-light/40 to-transparent z-2" />

      {/* Content grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_480px] min-h-[520px]">
        {/* Left: CTA content */}
        <div className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20">
          {/* Eyebrow */}
          <p className="font-mono text-[13px] font-medium tracking-[2px] uppercase text-[#ffb88c] mb-6">
            Join the waitlist
          </p>

          {/* Heading */}
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-1.5px] text-white mb-4">
            Start building something{" "}
            <span className="italic">truly amazing</span> today
          </h2>

          {/* Subtext */}
          <p className="font-sans text-[16px] leading-[1.6] text-white/60 max-w-[460px] mb-10">
            Be the first to experience LUCI —It's just like your AI assistant
            that sees, remembers, and acts. But better.
          </p>

          {/* Email input bar */}
          <div className="flex items-center w-full max-w-[520px] bg-[#0a0a0b]/80 backdrop-blur-sm rounded-full border border-white/[0.08] p-[5px] pl-5 shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
            <Mail className="w-[18px] h-[18px] text-white/30 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none text-white text-[15px] font-sans placeholder:text-white/30 px-3 py-2"
            />
            <button className="shrink-0 flex items-center gap-2 bg-white text-[#0a0a0b] rounded-full px-6 py-3 font-sans text-[14px] font-semibold hover:bg-white/90 transition-colors cursor-pointer">
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Lanyard 3D component */}
      </div>
    </section>
  );
}
