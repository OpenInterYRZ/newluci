import {
  TrendingUp,
  BarChart3,
  FileSearch,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  Users,
  DollarSign,
  Globe,
} from "lucide-react";

const features = [
  {
    title: "Every Pitch Deck, Meeting Note & Signal — Organized Automatically",
    desc: "You take 20 meetings a week. By Friday, half the founders blur together. Who mentioned $2M ARR? Which team had the ex-Stripe CTO? LUCI captures every meeting, indexes every deck, and builds a living profile for each company — so when a co-investor asks \"what do you think of them?\", you have the full picture in seconds.",
    bg: "/landscape/lan2.webp",
    visual: "deal-card",
  },
  {
    title: "Portfolio Health at a Glance — No More Chasing Updates",
    desc: "Monthly updates from founders arrive across email, WhatsApp, Notion, and Loom. Some don't send updates at all. Instead of manually tracking who's growing and who's burning cash, LUCI aggregates every data point into one dashboard — revenue trends, runway estimates, and red flags surfaced before they become crises.",
    bg: "/landscape/lan7.webp",
    reverse: true,
    visual: "portfolio-dashboard",
  },
  {
    title: "Due Diligence That Doesn't Take Three Weeks",
    desc: "You're interested in a deal. Now you need to cross-reference the founder's claims with market data, check prior round terms, and review comparable exits. Normally this takes days of analyst time. LUCI pulls together competitive landscapes, flags inconsistencies in financial projections, and gives you a structured brief — ready for your IC memo.",
    bg: "/landscape/lan4.webp",
    visual: "diligence-brief",
  },
];

/* ─── Mockup 1: Deal Profile Card ─── */
function DealCardMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="flex gap-3 w-full max-w-[620px]">
        {/* Left: Meeting summary */}
        <div className="hidden md:flex flex-col w-[180px] shrink-0 rounded-2xl bg-grey-9 p-5 items-center justify-center gap-3 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <span className="text-[13px] text-white/90 font-medium">
            Meeting Ended
          </span>
          <span className="text-[11px] text-white/40 font-mono">45 min</span>
          <div className="w-full h-px bg-white/10 my-1" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Building2 className="w-3 h-3 text-white/60" />
            </div>
            <span className="text-[11px] text-white/60">NovaPay Inc.</span>
          </div>
        </div>

        {/* Right: Deal card */}
        <div className="flex-1 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-grey-1">
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
              <span className="text-[14px] font-bold text-emerald-600">NP</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold text-text-0">
                NovaPay Inc.
              </div>
              <div className="text-[11px] text-text-3">
                Series A · Fintech · San Francisco
              </div>
            </div>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              High Interest
            </span>
          </div>

          <div className="px-5 py-4 flex flex-col gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-text-3">
              Key Signals
            </span>

            {[
              {
                label: "ARR",
                value: "$2.1M",
                trend: "up",
                note: "Growing 18% MoM",
              },
              {
                label: "Runway",
                value: "14 mo",
                trend: "neutral",
                note: "Raising to extend to 24 mo",
              },
              {
                label: "Ask",
                value: "$8M",
                trend: "neutral",
                note: "At $40M pre-money",
              },
            ].map((signal, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl bg-grey-0 px-4 py-3"
              >
                <span className="text-[11px] font-medium text-text-3 w-14">
                  {signal.label}
                </span>
                <span className="text-[14px] font-bold text-text-0">
                  {signal.value}
                </span>
                {signal.trend === "up" && (
                  <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                )}
                <span className="text-[11px] text-text-2 ml-auto">
                  {signal.note}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-5 mb-4 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10">
            <FileSearch className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="text-[11px] font-medium text-primary">
              3 comparable exits found · View diligence brief
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup 2: Portfolio Dashboard ─── */
function PortfolioDashboardMockup() {
  const companies = [
    {
      name: "NovaPay",
      initials: "NP",
      bg: "bg-emerald-50 text-emerald-600",
      arr: "$2.1M",
      change: "+18%",
      up: true,
      status: "Growing",
      statusColor: "text-emerald-600 bg-emerald-50",
    },
    {
      name: "DataForge",
      initials: "DF",
      bg: "bg-blue-50 text-blue-600",
      arr: "$840K",
      change: "+9%",
      up: true,
      status: "On Track",
      statusColor: "text-blue-600 bg-blue-50",
    },
    {
      name: "CloudMesh",
      initials: "CM",
      bg: "bg-amber-50 text-amber-600",
      arr: "$3.6M",
      change: "-4%",
      up: false,
      status: "Needs Attention",
      statusColor: "text-amber-600 bg-amber-50",
    },
    {
      name: "PixelAI",
      initials: "PA",
      bg: "bg-purple-50 text-purple-600",
      arr: "$520K",
      change: "+32%",
      up: true,
      status: "Breakout",
      statusColor: "text-purple-600 bg-purple-50",
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[580px] rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-grey-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-[13px] font-semibold text-text-0">
              Portfolio Overview
            </span>
          </div>
          <span className="text-[10px] text-text-3 font-mono">
            Updated 2h ago
          </span>
        </div>

        {/* Summary row */}
        <div className="grid grid-cols-3 gap-3 px-5 py-4 border-b border-grey-1">
          {[
            { label: "Total Companies", value: "12" },
            { label: "Avg. MoM Growth", value: "+14%" },
            { label: "Flagged", value: "2" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-[10px] text-text-3 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
              <span className="text-[18px] font-bold text-text-0">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Company list */}
        <div className="flex flex-col">
          {companies.map((co) => (
            <div
              key={co.name}
              className="flex items-center gap-3 px-5 py-3 border-b border-grey-1 last:border-b-0"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${co.bg}`}
              >
                {co.initials}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[12px] font-medium text-text-0">
                  {co.name}
                </span>
              </div>
              <span className="text-[12px] font-bold text-text-0 tabular-nums w-16 text-right">
                {co.arr}
              </span>
              <div className="flex items-center gap-0.5 w-14 justify-end">
                {co.up ? (
                  <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 text-amber-500" />
                )}
                <span
                  className={`text-[11px] font-medium tabular-nums ${co.up ? "text-emerald-600" : "text-amber-600"}`}
                >
                  {co.change}
                </span>
              </div>
              <span
                className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${co.statusColor}`}
              >
                {co.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup 3: Due Diligence Brief ─── */
function DiligenceBriefMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="w-full max-w-[520px] rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-grey-1 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <FileSearch className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-[13px] font-semibold text-text-0">
              Due Diligence Brief — NovaPay
            </div>
            <div className="text-[10px] text-text-3">
              Auto-generated · 8 sources analyzed
            </div>
          </div>
        </div>

        <div className="px-5 py-4 flex flex-col gap-4">
          {/* Market */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3 text-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-3">
                Market Analysis
              </span>
            </div>
            <p className="text-[12px] leading-relaxed text-text-1">
              B2B payments market projected at $1.9T by 2028 (CAGR 9.4%).
              NovaPay targets mid-market — underserved segment with 3 direct
              competitors, none with NovaPay&apos;s embedded compliance angle.
            </p>
          </div>

          {/* Flags */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-3">
                Key Findings
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                {
                  flag: "positive",
                  text: "Revenue claims match bank statement data",
                },
                {
                  flag: "positive",
                  text: "Team: 2 of 3 founders have prior exits",
                },
                {
                  flag: "caution",
                  text: "Customer concentration — top 3 clients = 62% of revenue",
                },
                {
                  flag: "caution",
                  text: "Burn rate increased 40% last quarter (new hires)",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 rounded-lg px-3 py-2 ${
                    item.flag === "positive"
                      ? "bg-emerald-50 border border-emerald-100"
                      : "bg-amber-50 border border-amber-100"
                  }`}
                >
                  <span
                    className={`text-[10px] mt-0.5 ${item.flag === "positive" ? "text-emerald-500" : "text-amber-500"}`}
                  >
                    {item.flag === "positive" ? "+" : "!"}
                  </span>
                  <span className="text-[11px] text-text-1">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparables */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-grey-0 border border-grey-1">
            <DollarSign className="w-4 h-4 text-text-3" />
            <div className="flex-1">
              <span className="text-[11px] font-medium text-text-0">
                3 comparable exits analyzed
              </span>
              <span className="text-[10px] text-text-3 block">
                Median: 8.2x revenue multiple · Range: 5.4x – 12.1x
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureDeepDive() {
  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-28">
        {/* ─── Header ─── */}
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-center text-text-0">
            How LUCI Works for Investors
          </h2>
          <p className="text-base text-text-2 max-w-2xl mx-auto text-center leading-relaxed">
            From deal sourcing to portfolio monitoring, LUCI turns information
            overload into actionable intelligence — so you focus on the deals
            that matter.
          </p>
        </div>

        {/* ─── Feature Cards ─── */}
        <div className="flex flex-col gap-16 md:gap-32">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col ${f.reverse ? "xl:flex-row-reverse" : "xl:flex-row"} xl:items-end gap-6 xl:gap-10`}
            >
              {/* Text */}
              <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
                <h3 className="text-2xl md:text-[28px] font-semibold md:font-bold leading-tight text-text-0">
                  {f.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-text-2">
                  {f.desc}
                </p>
              </div>

              {/* Visual */}
              <div
                className="relative flex flex-1 overflow-hidden rounded-[20px] min-h-[420px]"
                style={{
                  backgroundImage: `url(${f.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {f.visual === "deal-card" && <DealCardMockup />}
                {f.visual === "portfolio-dashboard" && (
                  <PortfolioDashboardMockup />
                )}
                {f.visual === "diligence-brief" && <DiligenceBriefMockup />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
