"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { ChevronDown } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  hasDropdown?: boolean;
  dropdownColumns?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

const navLinks: NavItem[] = [
  {
    href: "/features",
    label: "Features",
    hasDropdown: true,
    dropdownColumns: [
      {
        title: "Features",
        links: [
          { label: "AI Memory", href: "/features#memory" },
          { label: "Auto Actions", href: "/features#actions" },
          { label: "Smart Capture", href: "/features#capture" },
          { label: "Integrations", href: "/features#integrations" },
        ],
      },
      {
        title: "Use Cases",
        links: [
          { label: "Personal", href: "/use-cases#personal" },
          { label: "Productivity", href: "/use-cases#productivity" },
          { label: "Developers", href: "/use-cases#developers" },
          { label: "Teams", href: "/use-cases#teams" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "How-to guides", href: "/faqs" },
          { label: "Changelog", href: "/company" },
          { label: "Documentation", href: "/faqs" },
        ],
      },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/company", label: "Company" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const isDropdownOpen = openDropdown !== null;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${isDropdownOpen || scrolled ? "bg-web-bg-0" : "bg-transparent border-transparent"}`}
      >
        <div className="mx-auto flex h-13 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/lucilogo.svg"
              alt="LUCI"
              width={80}
              height={30}
              className="dark:invert-0"
            />
          </Link>

          {/* Desktop Nav Links — center */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-text-1 transition-colors duration-150 hover:text-text-0"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-text-2 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-text-1 transition-colors duration-150 hover:text-text-0"
                  onMouseEnter={closeDropdown}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Right Side Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href="/"
              className="rounded-[10px] bg-nav-btn1 px-5 py-2 text-[13px] font-semibold text-text-0 transition-colors duration-150 hover:bg-nav-btn1-hover"
            >
              Try online
            </Link>
            <Link
              href="/download"
              className="rounded-[10px] bg-nav-btn2 px-5 py-2 text-[13px] font-semibold text-bg-0 transition-colors duration-150 hover:bg-nav-btn2-hover"
            >
              Download
            </Link>
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

        {/* ===== Desktop Mega Dropdown — full width, always mounted ===== */}
        {navLinks
          .filter((l) => l.hasDropdown && l.dropdownColumns)
          .map((link) => {
            const isOpen = openDropdown === link.label;
            return (
              <div
                key={link.label}
                className={`absolute left-0 right-0 top-full overflow-hidden border-b transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hidden md:block ${isOpen ? "max-h-[400px] opacity-100 border-grey-1 pointer-events-auto" : "max-h-0 opacity-0 border-transparent pointer-events-none"}`}
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`bg-bg-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-y-0" : "-translate-y-4"}`}
                >
                  <div className="mx-auto flex max-w-[1400px] gap-16 px-6 py-10 lg:px-10">
                    {link.dropdownColumns!.map((col, colIdx) => (
                      <div key={col.title} className="min-w-[180px]">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-3">
                          {col.title}
                        </p>
                        <div className="flex flex-col gap-1">
                          {col.links.map((item, itemIdx) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              className="rounded-lg px-3 py-2 text-[14px] text-text-1 transition-all duration-200 hover:bg-grey-0 hover:text-text-0"
                              style={{
                                transitionDelay: isOpen
                                  ? `${colIdx * 50 + itemIdx * 30}ms`
                                  : "0ms",
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen
                                  ? "translateY(0)"
                                  : "translateY(-8px)",
                              }}
                              onClick={closeDropdown}
                            >
                              {item.label}
                            </Link>
                          ))}
                          <Link
                            href={link.href}
                            className="mt-2 px-3 text-[13px] font-medium text-primary transition-colors hover:underline"
                            style={{
                              transitionDelay: isOpen
                                ? `${colIdx * 50 + col.links.length * 30}ms`
                                : "0ms",
                              opacity: isOpen ? 1 : 0,
                            }}
                            onClick={closeDropdown}
                          >
                            View all →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

        {/* ===== Mobile Dropdown ===== */}
        <div
          className={`overflow-hidden border-t bg-bg-0/60 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileOpen ? "max-h-[600px] opacity-100 border-grey-1" : "max-h-0 opacity-0 border-transparent"}`}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[14px] text-text-1 transition-all duration-200 hover:bg-grey-0 hover:text-text-0"
                style={{
                  transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                }}
              >
                {link.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-grey-1" />

            <div
              className="flex items-center gap-3 transition-all duration-200"
              style={{
                transitionDelay: mobileOpen
                  ? `${navLinks.length * 40 + 40}ms`
                  : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <Link
                href="/"
                className="flex-1 rounded-2xl  bg-nav-btn1 py-2.5 text-center text-[13px] font-semibold text-text-0 transition-colors hover:bg-nav-btn1-hover"
              >
                Try online
              </Link>
              <Link
                href="/download"
                className="flex-1 rounded-2xl  bg-nav-btn2 py-2.5 text-center text-[13px] font-semibold text-bg-0 transition-colors hover:bg-nav-btn2-hover"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== Full-screen backdrop — desktop dropdown & mobile menu ===== */}
      <div
        className={`fixed inset-0 z-40 bg-bg-0/40 backdrop-blur-md transition-all duration-300 ${isDropdownOpen || mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ top: "64px" }}
        onClick={() => {
          setOpenDropdown(null);
          setMobileOpen(false);
        }}
        aria-hidden
      />
    </>
  );
}
