"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  Lightbulb,
  Shield,
  Brain,
  Server,
  MessageCircle,
  ArrowRight,
  Lock,
  Rss,
  History,
  ExternalLink,
  ChevronDown,
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
    label: "Founders",
    href: "/use-cases/founders",
    desc: "Never lose client context, keep your lean team aligned",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    label: "Investors",
    href: "/use-cases/investors",
    desc: "Deal flow tracking, portfolio insights, due diligence at scale",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    label: "Sales Leaders",
    href: "/use-cases/sales-leaders",
    desc: "Pipeline visibility, call insights, rep coaching on autopilot",
    icon: <ArrowRight className="h-4 w-4" />,
  },
  {
    label: "Explore More",
    href: "/use-cases",
    desc: "Discover all use cases for every role",
    icon: <Lightbulb className="h-4 w-4" />,
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

/* ─── Resources dropdown data ─── */

const resourceItems: NavItemData[] = [
  { label: "Blog", href: "/blog", icon: <Rss className="h-4 w-4" /> },
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

/* ─── Dropdown item data map ─── */

const dropdownDataMap: Record<string, NavItemData[]> = {
  usecases: useCasePersonas,
  features: coreFeatures,
  resources: resourceItems,
  about: aboutItems,
};

/* ─── Shared dropdown link (extracted outside component) ─── */

function DropdownLink({
  item,
  onClose,
}: {
  item: NavItemData;
  onClose: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-grey-0"
    >
      {item.icon && (
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-grey-1 bg-grey-0 text-text-2">
          {item.icon}
        </span>
      )}
      <div className="flex flex-1 items-center gap-2">
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
        {item.badge && (
          <span className="rounded-full border border-grey-1 bg-grey-0 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-text-2">
            {item.badge}
          </span>
        )}
        {item.external && (
          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-text-2" />
        )}
      </div>
    </Link>
  );
}

/* ─── Dropdown width per tab ─── */

const dropdownWidth: Record<string, string> = {
  usecases: "w-[400px]",
  features: "w-[400px]",
  resources: "w-[320px]",
  about: "w-[280px]",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const NAVBAR_H = 56;

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const darkSections = document.querySelectorAll("[data-navbar-dark]");
      let inDark = false;
      darkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
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

  /* Keyboard support: close dropdown on Escape */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeDropdown = () => setActiveDropdown(null);

  const renderDropdownContent = (key: string) => {
    const items = dropdownDataMap[key];
    if (!items) return null;
    return (
      <div className="flex flex-col gap-0.5" role="menu">
        {items.map((item) => (
          <DropdownLink key={item.href} item={item} onClose={closeDropdown} />
        ))}
      </div>
    );
  };

  const toggleMobileSection = (key: string) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isDarkSection ? "nav-dark" : ""
      } ${
        activeDropdown || scrolled
          ? "bg-web-bg-0/80 border-b border-grey-1"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-14 max-w-[1300px] items-center justify-between px-5 lg:px-5">
        {/* Logo — single image, swap src reactively */}
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

        {/* Desktop Center Nav */}
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
                    onFocus={() => openDropdown(item.key)}
                    onBlur={scheduleClose}
                    aria-expanded={activeDropdown === item.key}
                    aria-haspopup="true"
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

        {/* Right Side Actions */}
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex">
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
          aria-expanded={mobileOpen}
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
        className={`overflow-y-auto border-t bg-bg-0/60 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileOpen ? "max-h-[80dvh] opacity-100 border-grey-1" : "max-h-0 opacity-0 border-transparent"}`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item, i) => {
            const hasDropdown = !!dropdownDataMap[item.key];
            const isExpanded = mobileExpanded === item.key;
            const subItems = dropdownDataMap[item.key];

            return (
              <div
                key={item.key}
                style={{
                  transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                }}
                className="transition-all duration-200"
              >
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileSection(item.key)}
                      aria-expanded={isExpanded}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[14px] text-text-1 transition-all duration-200 hover:bg-grey-0 hover:text-text-0"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 text-text-2 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {/* Accordion content */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-0.5 pl-3 pb-1">
                          {subItems?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] text-text-2 transition-colors duration-150 hover:bg-grey-0 hover:text-text-0"
                            >
                              {sub.icon && (
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-grey-1 bg-grey-0 text-text-2">
                                  {sub.icon}
                                </span>
                              )}
                              <span>{sub.label}</span>
                              {sub.badge && (
                                <span className="rounded-full border border-grey-1 bg-grey-0 px-2 py-px text-[9px] font-semibold tracking-wider text-text-2">
                                  {sub.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href || `/${item.key}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[14px] text-text-1 transition-all duration-200 hover:bg-grey-0 hover:text-text-0"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

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
              href="/contact-sales"
              className="flex-1 rounded-2xl bg-nav-btn1 py-2.5 text-center text-[13px] font-semibold text-text-1 transition-colors hover:bg-nav-btn1-hover"
            >
              Contact sales
            </Link>
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
