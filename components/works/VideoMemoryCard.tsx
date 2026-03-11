import { Play } from "lucide-react";

/* ── mock data ─────────────────────────────── */
const videos = [
  {
    title: "Project Alpha Kickoff",
    date: "Oct 15, 2024",
    duration: "12:15",
    tags: ["Action Items", "Decisions", "Team Updates"],
    hue: 24,
  },
  {
    title: "Weekly Sync",
    date: "Oct 22, 2024",
    duration: "08:29",
    tags: ["Strategy", "Follow-up"],
    hue: 262,
  },
  {
    title: "Client Presentation Review",
    date: "Oct 25, 2024",
    duration: "23:40",
    tags: ["Feedback", "Next Steps"],
    hue: 150,
  },
  {
    title: "Q3 Performance Review",
    date: "Nov 1, 2024",
    duration: "19:10",
    tags: ["Goals", "Achievements"],
    hue: 210,
  },
];

const bookmarks = [
  { label: "Adopt microservice arch", time: "10:15", dot: "#8B5CF6" },
  { label: "Move launch to Q2", time: "25:40", dot: "#E8622C" },
  { label: "Marketing budget +30%", time: "32:10", dot: "#3B82F6" },
  { label: "Assign eng resources", time: "45:05", dot: "#22C55E" },
];

const actionItems = [
  { text: "Draft architecture RFC", owner: "Li Ming", done: true },
  { text: "Update launch timeline", owner: "Wang Lei", done: true },
  { text: "Review marketing spend", owner: "You", done: false },
];

/* ── component ─────────────────────────────── */
export default function VideoMemoryCard() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-end gap-6 md:gap-10">
      {/* ─── Left: Title + Desc (no box) ─── */}
      <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
        <h3 className="text-[28px] font-bold leading-tight text-text-0">
          Video Understanding Memory
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Long-form and bulk video understanding, converted into a searchable
          memory library. LUCI automatically extracts key moments, decisions,
          and action items.
        </p>
      </div>

      {/* ─── Right: Mockup with background image ─── */}
      <div
        className="flex flex-1 items-end justify-end overflow-hidden rounded-[20px] p-5 md:p-10"
        style={{
          backgroundImage: "url(/pb.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex overflow-hidden rounded-tl-xl"
          style={{
            backgroundColor: "#F5F5F5",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            width: "100%",
          }}
        >
          {/* ── Video Library Panel ── */}
          <div className="flex flex-1 flex-col gap-4 bg-white p-5">
            <span className="text-lg font-bold text-[#1A1A2E]">
              Video Library
            </span>
            <div className="grid grid-cols-2 gap-3">
              {videos.map((v, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  {/* Placeholder thumbnail */}
                  <div
                    className="relative aspect-video overflow-hidden rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, hsl(${v.hue} 30% 85%) 0%, hsl(${v.hue} 20% 75%) 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm">
                        <Play className="h-3.5 w-3.5 fill-[#1A1A2E] text-[#1A1A2E]" />
                      </div>
                    </div>
                    <span className="absolute bottom-1.5 right-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
                      {v.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 px-0.5">
                    <span className="truncate text-xs font-semibold text-[#1A1A2E]">
                      {v.title}
                    </span>
                    <span className="text-[10px] text-[#9CA3AF]">{v.date}</span>
                    <div className="mt-0.5 flex flex-wrap gap-1">
                      {v.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded px-1.5 py-px text-[9px] font-medium"
                          style={{
                            backgroundColor: "#F3F4F6",
                            color: "#6B7280",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Insight Panel ── */}
          <div
            className="hidden md:flex w-[240px] shrink-0 flex-col bg-white"
            style={{ borderLeft: "1px solid #E8E8E8" }}
          >
            {/* Title */}
            <div className="px-4 pt-4 pb-3">
              <span className="text-[13px] font-semibold text-[#1A1A2E]">
                Project Alpha Kickoff
              </span>
              <p className="mt-1 text-[10px] text-[#9CA3AF]">
                45 min · Oct 15, 2024
              </p>
            </div>
            <div className="h-px w-full bg-[#F0F0F0]" />

            {/* TL;DR */}
            <div className="flex flex-col gap-1.5 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                TL;DR
              </span>
              <p className="text-[11px] leading-[1.6] text-[#374151]">
                Agreed on microservice architecture. Launch moved to Q2.
                Marketing budget increased 30%. Li Ming owns eng resourcing.
              </p>
            </div>
            <div className="h-px w-full bg-[#F0F0F0]" />

            {/* Bookmarks */}
            <div className="flex flex-col gap-1.5 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                Bookmarks
              </span>
              <div className="flex flex-col gap-1.5">
                {bookmarks.map((b) => (
                  <div key={b.label} className="flex items-start gap-2">
                    <div
                      className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: b.dot }}
                    />
                    <div className="flex flex-1 items-baseline justify-between gap-1">
                      <span className="text-[11px] text-[#374151]">
                        {b.label}
                      </span>
                      <span className="shrink-0 text-[9px] tabular-nums text-[#B0B0B8]">
                        {b.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px w-full bg-[#F0F0F0]" />

            {/* Action Items */}
            <div className="flex flex-col gap-1.5 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                Action items
              </span>
              <div className="flex flex-col gap-1.5">
                {actionItems.map((a) => (
                  <div key={a.text} className="flex items-start gap-2">
                    <div
                      className={`mt-[3px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border ${
                        a.done
                          ? "border-[#22C55E] bg-[#22C55E]"
                          : "border-[#D1D5DB] bg-white"
                      }`}
                    >
                      {a.done && (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.2 5.7L6.5 2.3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[11px] ${a.done ? "text-[#9CA3AF] line-through" : "text-[#374151]"}`}>
                        {a.text}
                      </span>
                      <span className="text-[9px] text-[#B0B0B8]">
                        {a.owner}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
