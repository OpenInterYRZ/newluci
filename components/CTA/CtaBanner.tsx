"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full bg-web-bg-0 ">
      <section
        className="relative w-full overflow-hidden rounded-[24px] mx-auto max-w-[1360px]"
        style={{
          backgroundImage: "url(/pb.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center px-10 py-24 text-center">
          {/* Heading */}
          <h2 className="text-[44px] font-bold leading-tight text-text-0 max-w-3xl mb-4">
            Ready to meet LUCI?
          </h2>

          {/* Subtext */}
          <p className="text-[16px] leading-relaxed text-text-2 max-w-[480px] mb-10">
            Be the first to experience LUCI — your AI assistant that sees,
            remembers, and acts. But better.
          </p>

          {/* Email input bar */}
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10 w-full max-w-[460px]">
            <Mail className="w-[18px] h-[18px] text-text-2 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none text-text-0 text-[15px] placeholder:text-text-2 px-2 py-1.5"
            />
            <button className="shrink-0 flex items-center gap-2 bg-white text-text-0 rounded-full px-5 py-2.5 text-[13px] font-semibold hover:bg-white/90 transition-colors cursor-pointer">
              Join Waitlist
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
