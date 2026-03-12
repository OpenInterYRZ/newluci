import { Phone, PhoneOff, Clock, User, CalendarDays, ChevronRight, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Every Word Your Client Said — Remembered Better Than You",
    desc: "Last week a client mentioned on a call: \"Budget got cut, let's revisit in Q3.\" You noted it somewhere — a sticky note? WeChat? Your head? By the next follow-up you'd forgotten, asked again, and the client thought you weren't paying attention. Now every conversation is automatically written to memory. Before your next call, search the client's name — every detail they mentioned, every promise you made, every blocker — laid out in front of you.",
    bg: "/landscape/lan2.webp",
    visual: "client-card",
  },
  {
    title: "Three People, Zero Dropped Balls",
    desc: "The worst thing about a small team isn't being busy — it's things slipping through the cracks. Monday's meeting produced action items. By Wednesday, everyone assumed someone else was on it. You don't have a project manager and can't afford daily standups. Now meeting notes auto-extract tasks, linked to the right person with full context — who owns what, why, and by when. No more manual assigning. No more being the human reminder system.",
    bg: "/landscape/lan7.webp",
    reverse: true,
    visual: "kanban",
  },
  {
    title: "Decisions Backed by Context, Not \"I Think I Remember\"",
    desc: "\"What did we quote last time?\" \"What went wrong with that supplier?\" \"Why did we cut that feature?\" — Small teams don't have a documentation culture. Decision context lives in someone's head. When that person gets busy, forgets, or leaves, the thread breaks. Now every meeting, conversation, and note feeds into one memory. Any past decision is traceable back to the original discussion.",
    bg: "/landscape/lan4.webp",
    visual: "search-recall",
  },
];

/* ─── Mockup 1: Client Memory Card ─── */
function ClientCardMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="flex gap-3 w-full max-w-[620px]">
        {/* Left: Phone call ended */}
        <div className="hidden md:flex flex-col w-[180px] shrink-0 rounded-2xl bg-grey-9 p-5 items-center justify-center gap-3 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
            <PhoneOff className="w-5 h-5 text-red-400" />
          </div>
          <span className="text-[13px] text-white/90 font-medium">Call Ended</span>
          <span className="text-[11px] text-white/40 font-mono">12:34</span>
          <div className="w-full h-px bg-white/10 my-1" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <User className="w-3 h-3 text-white/60" />
            </div>
            <span className="text-[11px] text-white/60">David Chen</span>
          </div>
        </div>

        {/* Right: Memory card */}
        <div className="flex-1 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
          {/* Card header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-grey-1">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-[14px] font-bold text-primary">DC</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold text-text-0">David Chen</div>
              <div className="text-[11px] text-text-3">VP of Product, Acme Corp</div>
            </div>
            <span className="text-[10px] font-medium text-text-3 bg-grey-0 px-2 py-1 rounded-full">3 calls</span>
          </div>

          {/* Timeline */}
          <div className="px-5 py-4 flex flex-col gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-text-3">Recent Context</span>

            {[
              { date: "Jun 5", text: "Initial call — interested in annual plan, asked for a case study", icon: Phone },
              { date: "Jun 12", text: "Follow-up — team loved the demo, wants API access for trial", icon: MessageSquare },
              { date: "Jun 19", text: "Budget got cut, revisit in Q3. Decision pending VP approval.", icon: Phone, highlight: true },
            ].map((entry, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="flex flex-col items-center gap-1 pt-0.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${entry.highlight ? "bg-primary/10" : "bg-grey-0"}`}>
                    <entry.icon className={`w-3 h-3 ${entry.highlight ? "text-primary" : "text-text-3"}`} />
                  </div>
                  {i < 2 && <div className="w-px h-full bg-grey-1" />}
                </div>
                <div className="flex-1 min-w-0 pb-1">
                  <span className="text-[10px] text-text-3 font-mono">{entry.date}</span>
                  <p className={`text-[12px] leading-relaxed mt-0.5 ${entry.highlight ? "text-primary font-medium" : "text-text-1"}`}>
                    {entry.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer reminder */}
          <div className="mx-5 mb-4 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10">
            <CalendarDays className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="text-[11px] font-medium text-primary">Next follow-up: Sep 1</span>
            <ChevronRight className="w-3 h-3 text-primary/40 ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup 2: Lightweight Kanban Board ─── */
function KanbanMockup() {
  const columns = [
    {
      title: "To Do",
      color: "bg-grey-3",
      cards: [
        { text: "Send updated proposal to Acme", source: "Client Call", avatar: "JL", avatarBg: "bg-blue-100 text-blue-600" },
        { text: "Research competitor pricing tier", source: "Monday Standup", avatar: "KW", avatarBg: "bg-amber-100 text-amber-600" },
      ],
    },
    {
      title: "In Progress",
      color: "bg-primary",
      cards: [
        { text: "Draft Q3 product roadmap", source: "Monday Standup", avatar: "YZ", avatarBg: "bg-purple-100 text-purple-600" },
        { text: "Fix onboarding email flow", source: "Telegram Chat", avatar: "JL", avatarBg: "bg-blue-100 text-blue-600" },
      ],
    },
    {
      title: "Done",
      color: "bg-emerald-500",
      cards: [
        { text: "Set up staging environment", source: "Telegram Chat", avatar: "KW", avatarBg: "bg-amber-100 text-amber-600" },
      ],
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[640px] rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        {/* Board header */}
        <div className="px-5 py-3.5 border-b border-grey-1 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-text-0">Team Board</span>
          <span className="text-[10px] text-text-3 font-mono">Week of Jun 17</span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-3 gap-3 p-4">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              {/* Column header */}
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-2 h-2 rounded-full ${col.color}`} />
                <span className="text-[11px] font-semibold text-text-0">{col.title}</span>
                <span className="text-[10px] text-text-3 ml-auto">{col.cards.length}</span>
              </div>

              {/* Cards */}
              {col.cards.map((card, ci) => (
                <div
                  key={ci}
                  className="rounded-xl bg-grey-0 border border-grey-1 p-3 flex flex-col gap-2"
                >
                  <p className="text-[11px] leading-snug text-text-0 font-medium">
                    {card.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-text-3 bg-white px-1.5 py-0.5 rounded-md border border-grey-1 truncate max-w-[80px]">
                      {card.source}
                    </span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold ${card.avatarBg}`}>
                      {card.avatar}
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

/* ─── Mockup 3: Decision Search / Recall ─── */
function SearchRecallMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="w-full max-w-[520px] rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        {/* Search bar */}
        <div className="px-5 py-4 border-b border-grey-1">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-grey-0 border border-grey-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text-3 shrink-0">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <span className="text-[12px] text-text-0 font-medium">Why did we drop feature X?</span>
          </div>
        </div>

        {/* Results */}
        <div className="px-5 py-4 flex flex-col gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-text-3">3 sources found</span>

          {[
            {
              type: "Meeting",
              date: "Mar 12",
              title: "Product Review — Sprint 14",
              excerpt: "\"Feature X adds complexity but only 2% of users asked for it. Let's cut it and revisit after launch.\"",
              speaker: "You",
            },
            {
              type: "Telegram",
              date: "Mar 13",
              title: "Thread with Kevin",
              excerpt: "\"Agreed on dropping feature X. Kevin said engineering effort is 3 weeks — not worth it pre-launch.\"",
              speaker: "Kevin",
            },
            {
              type: "Document",
              date: "Mar 15",
              title: "Sprint 14 Decisions Log",
              excerpt: "Feature X deprioritized. Revisit post-launch if user demand > 10%. Owner: Kevin.",
              speaker: null,
            },
          ].map((result, i) => (
            <div key={i} className="rounded-xl bg-grey-0 border border-grey-1 p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-md ${
                  result.type === "Meeting" ? "bg-purple-100 text-purple-600" :
                  result.type === "Telegram" ? "bg-blue-100 text-blue-600" :
                  "bg-amber-100 text-amber-700"
                }`}>
                  {result.type}
                </span>
                <span className="text-[10px] text-text-3 font-mono">{result.date}</span>
                <span className="text-[11px] font-medium text-text-0 ml-1 truncate">{result.title}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-text-1 italic">
                {result.excerpt}
              </p>
              {result.speaker && (
                <span className="text-[10px] text-text-3">— {result.speaker}</span>
              )}
            </div>
          ))}
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
            How LUCI Works for Founders
          </h2>
          <p className="text-base text-text-2 max-w-2xl mx-auto text-center leading-relaxed">
            A tiny team can&apos;t afford to forget. LUCI turns every
            conversation, decision, and fleeting idea into searchable
            institutional memory.
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
                <h3 className="text-[28px] font-bold leading-tight text-text-0">
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
                {f.visual === "client-card" && <ClientCardMockup />}
                {f.visual === "kanban" && <KanbanMockup />}
                {f.visual === "search-recall" && <SearchRecallMockup />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
