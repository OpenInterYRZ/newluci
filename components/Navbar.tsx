"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import {
  Briefcase,
  BookOpen,
  Lightbulb,
  Shield,
  Video,
  Brain,
  Server,
  MessageCircle,
  ArrowRight,
  Lock,
  FileText,
  Rss,
  History,
  Users,
  Mail,
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import GradientButton from "./ui/GradientButton";

/* ─── Types ─── */

interface NavItemData {
  label: string;
  href: string;
  desc?: string;
  icon?: React.ReactNode;
  badge?: string;
  external?: boolean;
}

/* ─── Use Cases dropdown data ─── */

const useCasePersonas: NavItemData[] = [
  {
    label: "Managers",
    href: "/use-cases/managers",
    desc: "Meeting memory, task follow-up, action item tracking",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    label: "Knowledge Workers",
    href: "/use-cases/knowledge-workers",
    desc: "Learning notes, video understanding, knowledge base",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    label: "Creators & Thinkers",
    href: "/use-cases/creators",
    desc: "Capture ideas, build a second brain, creative workflows",
    icon: <Lightbulb className="h-4 w-4" />,
  },
  {
    label: "Founders",
    href: "/use-cases/founders",
    desc: "Never lose client context, keep your lean team aligned",
    icon: <Shield className="h-4 w-4" />,
  },
];

/* ─── Features dropdown data ─── */

const coreFeatures: NavItemData[] = [
  {
    label: "Chat",
    href: "/features/chat",
    desc: "Chat with LUCI to get things done",
    icon: <MessageCircle className="h-4 w-4" />,
  },
  {
    label: "Memories",
    href: "/features/memories",
    desc: "Meetings, notes, chats all in one continuous memory",
    icon: <Brain className="h-4 w-4" />,
  },
  {
    label: "Integrations",
    href: "/features/integrations",
    desc: "Connect your tools, Telegram, WhatsApp & more",
    icon: <Server className="h-4 w-4" />,
  },
];

const moreFeatures: NavItemData[] = [
  {
    label: "Telegram & WhatsApp",
    href: "/features/messaging",
    desc: "Chat where you already are, no extra app needed",
    icon: <MessageCircle className="h-4 w-4" />,
  },
  {
    label: "Record → Execute",
    href: "/features/execution",
    desc: "From meeting to memory to task to action, end-to-end",
    icon: <ArrowRight className="h-4 w-4" />,
  },
  {
    label: "Open Source + Hosted",
    href: "/features/open-source",
    desc: "Transparent & auditable, with managed LLM hosting",
    icon: <Lock className="h-4 w-4" />,
  },
];

/* ─── Resources dropdown data ─── */

const resourceItems: NavItemData[] = [
  { label: "Blog", href: "/blog", icon: <Rss className="h-4 w-4" /> },
  // {
  //   label: "Documentation",
  //   href: "/docs",
  //   icon: <FileText className="h-4 w-4" />,
  // },
  {
    label: "Changelog",
    href: "/changelog",
    icon: <History className="h-4 w-4" />,
    badge: "NEW",
  },
];

/* ─── About dropdown data ─── */

const aboutItems: NavItemData[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-sales" },
];

/* ─── Nav items ─── */

const navItems = [
  { label: "Use Cases", key: "usecases" },
  { label: "Features", key: "features" },

  { label: "Resources", key: "resources" },
  { label: "About", key: "about" },
  { label: "Pricing", key: "pricing", href: "/pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const NAVBAR_H = 56; // h-14 = 56px

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Check if navbar overlaps any dark section
      const darkSections = document.querySelectorAll("[data-navbar-dark]");
      let inDark = false;
      darkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Section top is above navbar bottom AND section bottom is below navbar top
        if (rect.top < NAVBAR_H && rect.bottom > 0) {
          inDark = true;
        }
      });
      setIsDarkSection(inDark);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = useCallback((key: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(key);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeDropdown = () => setActiveDropdown(null);

  const renderDropdownContent = (key: string) => {
    switch (key) {
      case "usecases":
        return (
          <div className="flex flex-col gap-0.5">
            {useCasePersonas.map((item) => (
              <IconLink key={item.href} item={item} />
            ))}
          </div>
        );
      case "features":
        return (
          <div className="flex flex-col gap-0.5">
            {coreFeatures.map((item) => (
              <IconLink key={item.href} item={item} />
            ))}
          </div>
        );
      case "resources":
        return (
          <div className="flex flex-col gap-0.5 py-1">
            {resourceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDropdown}
                className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-grey-0"
              >
                {item.icon && (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-grey-1 bg-grey-0 text-text-2">
                    {item.icon}
                  </span>
                )}
                <span className="text-[14px] font-medium text-text-0">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="rounded-full border border-grey-1 bg-grey-0 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-text-2">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        );
      case "about":
        return (
          <div className="flex flex-col gap-0.5 py-1">
            {aboutItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDropdown}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-grey-0"
              >
                <span className="text-[14px] font-medium text-text-0">
                  {item.label}
                </span>
                {item.external && (
                  <ExternalLink className="h-3.5 w-3.5 text-text-2" />
                )}
              </Link>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  /* ── Shared icon-link component (with description) ── */
  const IconLink = ({ item }: { item: NavItemData }) => (
    <Link
      href={item.href}
      onClick={closeDropdown}
      className="flex items-start gap-3 rounded-lg py-2.5 transition-colors duration-150 hover:bg-grey-0"
    >
      {item.icon && (
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-grey-1 bg-grey-0 text-text-2">
          {item.icon}
        </span>
      )}
      <div>
        <span className="text-[14px] font-medium text-text-0">
          {item.label}
        </span>
        {item.desc && (
          <p className="mt-0.5 text-[12px] leading-snug text-text-2">
            {item.desc}
          </p>
        )}
      </div>
    </Link>
  );

  /* ── Dropdown width per tab ── */
  const dropdownWidth: Record<string, string> = {
    usecases: "w-[400px]",
    features: "w-[400px]",
    resources: "w-[320px]",
    about: "w-[280px]",
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkSection ? "nav-dark" : ""
      } ${
        activeDropdown || scrolled
          ? "bg-web-bg-0 border-b border-grey-1"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-14 max-w-[1300px] items-center justify-between px-5 lg:px-5">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/lucilogo-black.svg"
            alt="LUCI"
            width={80}
            height={30}
            className={`dark:hidden transition-opacity duration-300 ${isDarkSection ? "hidden" : "block"}`}
          />
          <Image
            src="/lucilogo.svg"
            alt="LUCI"
            width={80}
            height={30}
            className={`hidden dark:block transition-opacity duration-300 ${isDarkSection ? "!block" : ""}`}
          />
        </Link>

        {/* Desktop Center Nav — pill style, 居中 */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center">
          <div className="flex items-center gap-1">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.key}
                  href={item.href}
                  onMouseEnter={() => {
                    if (closeTimer.current) clearTimeout(closeTimer.current);
                    setActiveDropdown(null);
                  }}
                  className="rounded-full px-4 py-1.5 text-sm font-medium text-text-1 hover:text-text-0 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.key} className="relative">
                  <button
                    onMouseEnter={() => openDropdown(item.key)}
                    onMouseLeave={scheduleClose}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                      activeDropdown === item.key
                        ? "bg-grey-1 text-text-0"
                        : "text-text-1 hover:text-text-0"
                    }`}
                  >
                    {item.label}
                  </button>

                  {/* Dropdown */}
                  <div
                    onMouseEnter={() => openDropdown(item.key)}
                    onMouseLeave={scheduleClose}
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 ${dropdownWidth[item.key] || "w-[320px]"} transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      activeDropdown === item.key
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-2xl border border-grey-1 bg-web-bg-0 p-6 shadow-2xl">
                      {renderDropdownContent(item.key)}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Right Side Actions — absolute */}
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex">
          {/* <ThemeToggle /> */}
          <Link
            href="/contact-sales"
            className="rounded-[10px] bg-nav-btn1 px-5 py-2 text-[13px] font-semibold text-text-1 transition-colors duration-150 hover:bg-nav-btn1-hover"
          >
            Contact sales
          </Link>
          <GradientButton href="/download" text="Download" download />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-grey-0 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex w-4 flex-col items-center gap-[5px]">
            <span
              className={`h-[1.5px] w-full bg-text-0 transition-all duration-300 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.5px] w-full bg-text-0 transition-all duration-300 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`overflow-hidden border-t bg-bg-0/60 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileOpen ? "max-h-[600px] opacity-100 border-grey-1" : "max-h-0 opacity-0 border-transparent"}`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item, i) => (
            <Link
              key={item.key}
              href={
                item.href ||
                `/${item.key === "usecases" ? "use-cases" : item.key}`
              }
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[14px] text-text-1 transition-all duration-200 hover:bg-grey-0 hover:text-text-0"
              style={{
                transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
              }}
            >
              {item.label}
            </Link>
          ))}

          <div className="my-2 h-px bg-grey-1" />

          <div
            className="flex items-center gap-3 transition-all duration-200"
            style={{
              transitionDelay: mobileOpen
                ? `${navItems.length * 40 + 40}ms`
                : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <Link
              href="/download"
              className="flex-1 rounded-2xl bg-nav-btn2 py-2.5 text-center text-[13px] font-semibold text-bg-0 transition-colors hover:bg-nav-btn2-hover"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
