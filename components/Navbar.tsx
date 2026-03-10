"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Sparkles, BarChart3, Boxes } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

/* ─── Nav data matching the reference screenshot ─── */

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavItem {
  href: string;
  label: string;
  hasDropdown?: boolean;
  dropdownLeft?: DropdownItem[];
  dropdownRight?: DropdownItem[];
}

const navLinks: NavItem[] = [
  {
    href: "/features",
    label: "Products",
    hasDropdown: true,
    dropdownLeft: [
      {
        label: "Search",
        href: "/features#search",
        description: "Find any moment, when you need it",
        icon: <Sparkles className="h-4 w-4" />,
      },
      {
        label: "Analyze",
        href: "/features#analyze",
        description: "Explore video content using language",
        icon: <BarChart3 className="h-4 w-4" />,
      },
      {
        label: "Embed",
        href: "/features#embed",
        description: "Multimodal shouldn't mean multi-model",
        icon: <Boxes className="h-4 w-4" />,
      },
    ],
    dropdownRight: [
      { label: "Product Overview", href: "/features" },
      { label: "Models Overview", href: "/features#models" },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Build, launch, and grow. Only pay for what you use.",
      },
      { label: "Pricing Calculator", href: "/pricing#calculator" },
    ],
  },
  {
    href: "/enterprise",
    label: "Enterprise",
    hasDropdown: true,
    dropdownLeft: [
      {
        label: "Platform",
        href: "/enterprise#platform",
        description: "Enterprise-grade infrastructure",
        icon: <Sparkles className="h-4 w-4" />,
      },
      {
        label: "Security",
        href: "/enterprise#security",
        description: "SOC 2 compliant, end-to-end encryption",
        icon: <BarChart3 className="h-4 w-4" />,
      },
    ],
    dropdownRight: [
      { label: "Enterprise Overview", href: "/enterprise" },
      { label: "Case Studies", href: "/enterprise#cases" },
      { label: "Contact Sales", href: "/enterprise#contact" },
    ],
  },
  { href: "/research", label: "Research" },
  {
    href: "/developers",
    label: "Developers",
    hasDropdown: true,
    dropdownLeft: [
      {
        label: "API Reference",
        href: "/developers#api",
        description: "Complete API documentation",
        icon: <Sparkles className="h-4 w-4" />,
      },
      {
        label: "SDKs",
        href: "/developers#sdks",
        description: "Client libraries for every language",
        icon: <Boxes className="h-4 w-4" />,
      },
    ],
    dropdownRight: [
      { label: "Documentation", href: "/developers" },
      { label: "Quickstart", href: "/developers#quickstart" },
      { label: "Changelog", href: "/developers#changelog" },
    ],
  },
  {
    href: "/company",
    label: "Company",
    hasDropdown: true,
    dropdownLeft: [
      {
        label: "About",
        href: "/company#about",
        description: "Our mission and team",
        icon: <Sparkles className="h-4 w-4" />,
      },
      {
        label: "Careers",
        href: "/company#careers",
        description: "Join us and shape the future",
        icon: <BarChart3 className="h-4 w-4" />,
      },
    ],
    dropdownRight: [
      { label: "Blog", href: "/company#blog" },
      { label: "Press", href: "/company#press" },
      { label: "Contact", href: "/company#contact" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navValue, setNavValue] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const isDropdownOpen = navValue !== "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${isDropdownOpen || scrolled ? "bg-web-bg-0 border-grey-1" : "bg-transparent border-transparent"}`}
    >
      <div className="mx-auto flex h-13 max-w-[1300px] items-center justify-between px-5 lg:px-5">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/lucilogo-black.svg"
            alt="LUCI"
            width={80}
            height={30}
            className="block dark:hidden"
          />
          <Image
            src="/lucilogo.svg"
            alt="LUCI"
            width={80}
            height={30}
            className="hidden dark:block"
          />
        </Link>

        {/* Desktop Nav Links */}
        <NavigationMenu
          value={navValue}
          onValueChange={setNavValue}
          viewport={false}
          className="hidden md:flex"
        >
          <NavigationMenuList className="gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <NavigationMenuItem key={link.href} value={link.label}>
                  <NavigationMenuTrigger className="bg-transparent px-3.5 py-2 text-sm font-medium text-text-1 transition-colors duration-150 hover:bg-transparent hover:text-text-0 focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-text-0">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-0 top-full mt-1.5 w-[540px] rounded-xl border border-grey-1 bg-bg-0 p-0 shadow-lg data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[0.98]">
                    <div className="flex">
                      {/* Left column — icon + title + description */}
                      <div className="flex flex-col gap-1 border-r border-grey-1 p-3 w-[260px]">
                        {link.dropdownLeft?.map((item) => (
                          <NavigationMenuLink
                            key={item.href + item.label}
                            asChild
                          >
                            <Link
                              href={item.href}
                              className="flex items-start gap-3 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-grey-0"
                              onClick={() => setNavValue("")}
                            >
                              <span className="mt-0.5 text-text-2">
                                {item.icon}
                              </span>
                              <div>
                                <p className="text-[14px] font-medium text-text-0">
                                  {item.label}
                                </p>
                                {item.description && (
                                  <p className="mt-0.5 text-[13px] leading-snug text-text-2">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>

                      {/* Right column — title only (some with description) */}
                      <div className="flex flex-col gap-1 p-3 w-[280px]">
                        {link.dropdownRight?.map((item) => (
                          <NavigationMenuLink
                            key={item.href + item.label}
                            asChild
                          >
                            <Link
                              href={item.href}
                              className="rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-grey-0"
                              onClick={() => setNavValue("")}
                            >
                              <p className="text-[14px] font-medium text-text-0">
                                {item.label}
                              </p>
                              {item.description && (
                                <p className="mt-0.5 text-[13px] leading-snug text-text-2">
                                  {item.description}
                                </p>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-text-1 transition-colors duration-150 hover:text-text-0"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

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
              className="flex-1 rounded-2xl bg-nav-btn1 py-2.5 text-center text-[13px] font-semibold text-text-0 transition-colors hover:bg-nav-btn1-hover"
            >
              Try online
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
