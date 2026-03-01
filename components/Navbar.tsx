"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/bird", label: "Bird" },
  { href: "/sre", label: "SRE" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2">
      <div className="relative flex h-[56px] items-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-5">
        {/* Glass highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_92%_120%,rgba(255,92,0,0.1),transparent_42%)]"
          aria-hidden="true"
        />

        {/* Logo */}
        <Link href="/" className="relative z-10 shrink-0">
          <Image src="/lucilogo.svg" alt="LUCI" width={72} height={28} />
        </Link>

        {/* Spacer */}
        <div className="relative z-10 flex-1" />

        {/* Desktop Nav Links */}
        <div className="relative z-10 hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 font-sans text-[13px] tracking-wide text-white/50 transition-colors duration-200 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#ff5c00] to-transparent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="relative z-10 mx-4 hidden h-5 w-px bg-white/10 md:block" />

        {/* CTA Button */}
        <Link
          href="/signup"
          className="relative z-10 hidden rounded-xl bg-gradient-to-r from-[#ff9b26] to-[#ff0c00] px-4 py-2 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,92,0,0.35)] active:scale-[0.97] md:inline-block"
        >
          <span className="font-sans text-sm font-semibold text-white">
            Get Started
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 ml-2 flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex w-4 flex-col items-center gap-[5px]">
            <span
              className={`h-px w-full bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl transition-all duration-300 md:hidden ${mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 border-transparent"}`}
      >
        <div className="flex flex-col gap-1 p-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 font-sans text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="my-1 h-px bg-white/10" />
          <Link
            href="/signup"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg bg-gradient-to-r from-[#ff9b26] to-[#ff0c00] px-3 py-2.5 text-center font-sans text-sm font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
