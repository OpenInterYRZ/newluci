import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2">
      <div className="relative flex h-[64px] items-center rounded-[18px] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-[14px] shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-[18px]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_92%_120%,rgba(255,92,0,0.14),transparent_42%)]"
          aria-hidden="true"
        />

        {/* Logo */}
        <div className="relative z-10 text-brand font-mono text-[18px] font-semibold tracking-[3px] md:text-[20px] md:tracking-[4px]">
          LUCI
        </div>

        {/* Spacer */}
        <div className="relative z-10 h-[1px] flex-1" />

        {/* Nav Links */}
        <div className="relative z-10 hidden items-center gap-[26px] md:flex">
          <a
            href="#features"
            className="text-[#a9a9ae] font-sans text-[13px] tracking-[0.2px] transition-colors hover:text-primary"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-[#a9a9ae] font-sans text-[13px] tracking-[0.2px] transition-colors hover:text-primary"
          >
            How It Works
          </a>
          <a
            href="#compare"
            className="text-[#a9a9ae] font-sans text-[13px] tracking-[0.2px] transition-colors hover:text-primary"
          >
            Compare
          </a>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* CTA Button */}
        <button
          type="button"
          className="relative z-10 overflow-hidden rounded-[12px] border border-[#ff8448]/45 bg-[linear-gradient(160deg,#171718_0%,#0f0f10_50%,#060607_100%)] px-[18px] py-[9px] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_0_0_1px_rgba(255,120,56,0.2),0_10px_24px_rgba(0,0,0,0.55),0_0_24px_rgba(255,92,0,0.18)] transition-all duration-300 hover:border-[#ffa06f]/60 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_0_0_1px_rgba(255,143,90,0.24),0_12px_28px_rgba(0,0,0,0.6),0_0_32px_rgba(255,92,0,0.24)]"
        >
          <span
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_35%,transparent_65%,rgba(255,110,46,0.2))]"
            aria-hidden="true"
          />
          <span className="relative text-[13px] font-medium text-[#ffd8c3]">Get Started</span>
        </button>
      </div>
    </nav>
  );
}
