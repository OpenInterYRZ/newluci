"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function CtaBannerImageSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full overflow-hidden rounded-4xl mx-auto max-w-350 my-30">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/3.webp')" }}
      />

      {/* Black overlay to darken the background */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Subtle top highlight edge */}
      <div className="absolute top-0 left-[10%] right-[10%] h-1 bg-linear-to-r from-transparent via-brand-1/40 to-transparent z-[3]" />

      {/* Content grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_30rem] min-h-80 md:min-h-112 lg:min-h-130">
        {/* Left: CTA content */}
        <div className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20">
          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter text-white mb-4">
            Start building something{" "}
            <span className="italic">truly amazing</span> today
          </h2>

          {/* Subtext */}
          <p className="font-sans text-base leading-relaxed text-white/60 max-w-115 mb-10">
            Be the first to experience LUCI —It's just like your AI assistant
            that sees, remembers, and acts. But better.
          </p>

          {/* Email input bar */}
          <div className="flex items-center w-full max-w-130 bg-web-bg-0/80 backdrop-blur-sm rounded-full border border-white/8 p-1.5 pl-5 shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
            <Mail className="w-4.5 h-4.5 text-white/30 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none text-white text-sm font-sans placeholder:text-white/30 px-3 py-2"
            />
            <button className="shrink-0 flex items-center gap-2 bg-bg-0 text-text-0 rounded-full px-6 py-3 font-sans text-sm font-semibold hover:bg-bg-0/90 transition-colors cursor-pointer">
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
