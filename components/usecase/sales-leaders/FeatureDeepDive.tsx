import {
  Phone,
  PhoneOff,
  MessageSquare,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Every Call Recorded, Analyzed & Turned Into Revenue Intelligence",
    desc: "Your best rep closes 3x more than your worst. The difference? They ask better questions and catch buying signals. LUCI records every sales call, flags moments where prospects showed interest, hesitation, or urgency — and shows you exactly what top performers do differently.",
    bg: "/landscape/lan2.webp",
    visual: "call-insight",
  },
  {
    title: "Pipeline That Updates Itself — No More CRM Babysitting",
    desc: "Reps hate updating CRM. Managers hate chasing them. Result: your pipeline is always 2 weeks stale. LUCI listens to calls, reads follow-up emails, and auto-updates deal stages, next steps, and risk levels. Your Monday forecast meeting finally starts with real numbers.",
    bg: "/landscape/lan7.webp",
    reverse: true,
    visual: "pipeline-tracker",
  },
  {
    title: "Coaching That Scales — Without Sitting in on Every Call",
    desc: "You can't shadow 15 reps. But LUCI can. After every call, each rep gets a personalized coaching card: what they did well, where they lost the prospect, and a specific suggestion for next time. You review the summaries in 5 minutes instead of spending 5 hours on ride-alongs.",
    bg: "/landscape/lan4.webp",
    visual: "coaching-card",
  },
];

/* ─── Mockup 1: Call Insight Card ─── */
function CallInsightMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="flex gap-3 w-full max-w-[620px]">
        {/* Left: Call ended */}
        <div className="hidden md:flex flex-col w-[180px] shrink-0 rounded-2xl bg-grey-9 p-5 items-center justify-center gap-3 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
            <PhoneOff className="w-5 h-5 text-red-400" />
          </div>
          <span className="text-[13px] text-white/90 font-medium">
            Call Ended
          </span>
          <span className="text-[11px] text-white/40 font-mono">32:18</span>
          <div className="w-full h-px bg-white/10 my-1" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Users className="w-3 h-3 text-white/60" />
            </div>
            <span className="text-[11px] text-white/60">Sarah + Acme VP</span>
          </div>
        </div>

        {/* Right: Insight card */}
        <div className="flex-1 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-grey-1">
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
              <Phone className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold text-text-0">
                Discovery Call — Acme Corp
              </div>
              <div className="text-[11px] text-text-3">
                Rep: Sarah Chen · 32 min
              </div>
            </div>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              Strong Signal
            </span>
          </div>

          <div className="px-5 py-4 flex flex-col gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-text-3">
              Buying Signals Detected
            </span>

            {[
              {
                time: "08:42",
                text: '"We need to solve this by end of quarter"',
                type: "Urgency",
                color: "text-red-600 bg-red-50",
              },
              {
                time: "15:20",
                text: '"Can you send pricing for the enterprise tier?"',
                type: "Intent",
                color: "text-emerald-600 bg-emerald-50",
              },
              {
                time: "24:11",
                text: '"Our CEO asked me to evaluate 3 vendors this week"',
                type: "Competition",
                color: "text-amber-600 bg-amber-50",
              },
            ].map((signal, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl bg-grey-0 px-4 py-3"
              >
                <span className="text-[10px] text-text-3 font-mono mt-0.5 w-10 shrink-0">
                  {signal.time}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-text-0 font-medium italic">
                    {signal.text}
                  </p>
                </div>
                <span
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${signal.color}`}
                >
                  {signal.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup 2: Pipeline Tracker ─── */
function PipelineTrackerMockup() {
  const stages = [
    {
      name: "Discovery",
      color: "bg-blue-500",
      deals: [
        {
          name: "Acme Corp",
          value: "$85K",
          risk: "low",
          rep: "SC",
          repBg: "bg-blue-100 text-blue-600",
        },
        {
          name: "TechNova",
          value: "$42K",
          risk: "medium",
          rep: "MJ",
          repBg: "bg-purple-100 text-purple-600",
        },
      ],
    },
    {
      name: "Proposal",
      color: "bg-primary",
      deals: [
        {
          name: "GlobalFin",
          value: "$120K",
          risk: "low",
          rep: "SC",
          repBg: "bg-blue-100 text-blue-600",
        },
        {
          name: "MedCore",
          value: "$67K",
          risk: "high",
          rep: "AK",
          repBg: "bg-amber-100 text-amber-600",
        },
      ],
    },
    {
      name: "Negotiation",
      color: "bg-emerald-500",
      deals: [
        {
          name: "RetailMax",
          value: "$210K",
          risk: "low",
          rep: "MJ",
          repBg: "bg-purple-100 text-purple-600",
        },
      ],
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[640px] rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-grey-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-[13px] font-semibold text-text-0">
              Live Pipeline
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-text-3">Total:</span>
            <span className="text-[12px] font-bold text-text-0">$524K</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 p-4">
          {stages.map((stage) => (
            <div key={stage.name} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-2 h-2 rounded-full ${stage.color}`} />
                <span className="text-[11px] font-semibold text-text-0">
                  {stage.name}
                </span>
                <span className="text-[10px] text-text-3 ml-auto">
                  {stage.deals.length}
                </span>
              </div>

              {stage.deals.map((deal, di) => (
                <div
                  key={di}
                  className="rounded-xl bg-grey-0 border border-grey-1 p-3 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] leading-snug text-text-0 font-medium">
                      {deal.name}
                    </p>
                    <span className="text-[11px] font-bold text-text-0">
                      {deal.value}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {deal.risk === "high" && (
                        <AlertTriangle className="w-3 h-3 text-amber-500" />
                      )}
                      <span
                        className={`text-[9px] font-medium px-1.5 py-0.5 rounded-md ${
                          deal.risk === "low"
                            ? "text-emerald-600 bg-emerald-50"
                            : deal.risk === "medium"
                              ? "text-blue-600 bg-blue-50"
                              : "text-amber-600 bg-amber-50"
                        }`}
                      >
                        {deal.risk} risk
                      </span>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold ${deal.repBg}`}
                    >
                      {deal.rep}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup 3: Coaching Card ─── */
function CoachingCardMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="w-full max-w-[520px] rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="px-5 py-4 border-b border-grey-1 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-[12px] font-bold text-purple-600">MJ</span>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-text-0">
              Coaching Card — Mike Johnson
            </div>
            <div className="text-[10px] text-text-3">
              Based on 6 calls this week
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[11px] font-bold text-primary">72</span>
            <span className="text-[10px] text-text-3">/100</span>
          </div>
        </div>

        <div className="px-5 py-4 flex flex-col gap-4">
          {/* What went well */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3" />
              What went well
            </span>
            <div className="flex flex-col gap-1.5">
              {[
                "Strong opening — asked about business impact before features",
                "Good discovery: uncovered budget timeline in 4 of 6 calls",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2"
                >
                  <span className="text-[11px] text-emerald-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas to improve */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3" />
              Areas to improve
            </span>
            <div className="flex flex-col gap-1.5">
              {[
                "Talk-to-listen ratio: 68% talking vs 32% listening (target: 40/60)",
                "Missed 2 competitor mentions — didn't probe further",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-100 px-3 py-2"
                >
                  <span className="text-[11px] text-amber-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestion */}
          <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10">
            <MessageSquare className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-semibold text-primary">
                Try this next call:
              </span>
              <p className="text-[11px] text-text-1 mt-1">
                After the prospect mentions a competitor, ask: &quot;What would
                make you choose them over us?&quot; — this surfaces objections
                early.
              </p>
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
            How LUCI Works for Sales Leaders
          </h2>
          <p className="text-base text-text-2 max-w-2xl mx-auto text-center leading-relaxed">
            From call intelligence to automated coaching, LUCI gives you full
            pipeline visibility — without micromanaging your team.
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
                {f.visual === "call-insight" && <CallInsightMockup />}
                {f.visual === "pipeline-tracker" && <PipelineTrackerMockup />}
                {f.visual === "coaching-card" && <CoachingCardMockup />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
