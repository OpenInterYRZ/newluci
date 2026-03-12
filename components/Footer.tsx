"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/* ── Footer link data ── */

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Updates", href: "/updates" },
      { label: "Careers", href: "/company#careers" },
      { label: "Community", href: "/community" },
      { label: "Manifesto", href: "/manifesto" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Teams", href: "/teams" },
      { label: "Sales", href: "/sales" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Affiliates", href: "/affiliates" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Docs", href: "/docs" },
      { label: "Support", href: "/support" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Brand", href: "/brand" },
      { label: "Status", href: "/status" },
    ],
  },
];

/* ── Social icons ── */

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.8732.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

const locales: { code: string; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  function pick(code: string) {
    setOpen(false);
    if (code !== locale) router.replace(pathname, { locale: code });
  }

  return (
    <div ref={ref} className="relative">
      {/* trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-2.5 rounded-full bg-white/[0.06] px-4 py-2 text-[13px] text-white/60 backdrop-blur-sm border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.1] hover:border-white/[0.16] hover:text-white/90"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="opacity-50 group-hover:opacity-80 transition-opacity duration-300"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="font-medium">{current.label}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`opacity-40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </button>

      {/* dropdown */}
      <div
        className={`absolute bottom-full mb-2 right-0 w-[180px] rounded-xl border border-white/[0.08] bg-[#1a1a1f]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-1 pointer-events-none"
        }`}
      >
        <div className="p-1.5">
          {locales.map((l) => {
            const active = l.code === locale;
            return (
              <button
                key={l.code}
                onClick={() => pick(l.code)}
                className={`group/item w-full flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition-all duration-200 ${
                  active
                    ? "bg-white/[0.08] text-white"
                    : "text-white/50 hover:bg-white/[0.05] hover:text-white/80"
                }`}
              >
                <span className="text-base leading-none">{l.flag}</span>
                <span className="flex-1 text-left font-medium">{l.label}</span>
                {active && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/60"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const socialLinks = [
  { icon: <XIcon />, href: "https://x.com", label: "X" },
  {
    icon: <InstagramIcon />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  { icon: <YouTubeIcon />, href: "https://youtube.com", label: "YouTube" },
  { icon: <TikTokIcon />, href: "https://tiktok.com", label: "TikTok" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <DiscordIcon />, href: "https://discord.com", label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/footervid.mp4" />
      </video> */}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1A1A19]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1300px] px-8 py-10 flex flex-col gap-8">
        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:items-start">
          {/* Left: Logo + copyright */}
          <div className="flex items-start gap-3 md:w-[340px] shrink-0">
            <Image
              src="/lucilogo.svg"
              alt="LUCI"
              width={36}
              height={36}
              className="opacity-80"
            />
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] text-white/70">
                Copyright © 2026
              </span>
              <span className="text-[13px] text-white/70">
                All rights reserved.
              </span>
            </div>
          </div>

          {/* Right: 3 link columns */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2.5">
                <h3 className="text-[13px] font-semibold text-white">
                  {col.title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {col.links.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="text-[13px] text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom: Social icons + Language switcher ── */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/50">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
