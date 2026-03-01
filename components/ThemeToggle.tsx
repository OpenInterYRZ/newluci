"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative z-10 mr-[12px] h-[36px] w-[36px] rounded-[10px] border border-white/12 bg-white/8" />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative z-10 mr-[12px] h-[36px] w-[36px] overflow-hidden rounded-[10px] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/20 hover:bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
      aria-label="Toggle theme"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center justify-center">
        {theme === "dark" ? (
          <Sun className="h-[18px] w-[18px] text-[#ffd8c3] transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" />
        ) : (
          <Moon className="h-[18px] w-[18px] text-[#ffd8c3] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
        )}
      </div>
    </button>
  );
}
