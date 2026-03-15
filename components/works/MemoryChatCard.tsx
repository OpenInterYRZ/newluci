import { Calendar, Lock, ChevronDown, Image as ImageIcon } from "lucide-react";

/* ── timeline mock data ────────────────────── */
const slots = [
  {
    time: "4:00 PM",
    entry: {
      type: "pending" as const,
      title: "Temporary Memory",
      body: "Meeting with Director Zhang discussing Q4 financial report. Data verification with Li Ming, budget review with Wang Lei. Due to company impacts, all data pre-audit must be completed before year-end.",
      badge: "Private memory",
      hasEmbed: false,
    },
  },
  {
    time: "5:00 PM",
    entry: {
      type: "thought" as const,
      title: "Video Insight",
      body: "Analyzed Q3 product review meeting video. Team decided to move launch date to Q2, need to reallocate dev resources with Li Ming",
      badge: null,
      hasEmbed: true,
      embed: {
        title: "Q3 Performance Review — 05:56",
        desc: "Key point: Team decided to move launch date to Q2, need to reallocate resources",
      },
    },
  },
  {
    time: "6:00 PM",
    entry: {
      type: "thought" as const,
      title: "Thought",
      body: "Product big data security standards optimization is in progress. Need to focus on data protection standards review. Passed relevant documents on mid-term ownership claim.",
      badge: null,
      hasEmbed: false,
    },
  },
  {
    time: "7:00 PM",
    entry: {
      type: "preference" as const,
      title: "Preference",
      body: "Client cache optimization for product ecosystem. Use product security data labels, display needs interface cache optimization settings.",
      badge: null,
      hasEmbed: false,
    },
  },
];

const titleColorMap = {
  pending: "#F59E0B",
  thought: "#8B5CF6",
  preference: "#3B82F6",
};

/* ── component ─────────────────────────────── */
export default function MemoryChatCard() {
  return (
    <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
      {/* ─── Left: Title + Desc (no box) ─── */}
      <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
        <h3 className="text-2xl md:text-[28px] font-semibold md:font-bold leading-tight text-text-0">
          Memory + Chat Unified
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Meetings, notes, and conversations unified in one memory. LUCI
          automatically categorizes fragmented information into a coherent work
          memory chain.
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
          className="flex flex-col overflow-hidden rounded-tl-xl bg-white"
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            width: "100%",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 pt-7 pb-5">
            <span
              className="text-[28px] font-bold text-[#1A1A2E]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Memories
            </span>
            <div className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2">
              <Calendar className="h-3.5 w-3.5 text-[#6B7280]" />
              <span className="text-sm text-[#1A1A2E]">Feb 6, 2026</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Timeline slots */}
          <div className="flex flex-col px-8 pb-6">
            {slots.map((slot, si) => {
              return (
                <div key={si} className="flex items-start gap-4 ">
                  {/* Time label + line */}
                  <div className="flex shrink-0 items-center gap-3 pt-4">
                    <span className="w-14 text-xs text-[#9CA3AF]">
                      {slot.time}
                    </span>
                    <div className="h-px w-8 bg-[#E5E7EB]" />
                  </div>

                  {/* Entry card */}
                  <div className="flex-1 pb-5 bg-white/60 rounded-xl backdrop-blur-md">
                    <div className="flex flex-col gap-2 rounded-xl px-4 py-3 ">
                      {/* Type label */}
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: titleColorMap[slot.entry.type] }}
                      >
                        {slot.entry.title}
                      </span>

                      {/* Body text */}
                      <p className="text-[13px] leading-relaxed text-[#374151]">
                        {slot.entry.body}
                      </p>

                      {/* Embed card (if present) */}
                      {slot.entry.hasEmbed && slot.entry.embed && (
                        <div className="mt-1 flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5">
                          <div className="flex h-10 w-14 shrink-0 items-center justify-center rounded bg-[#F3F4F6]">
                            <ImageIcon className="h-4 w-4 text-[#D1D5DB]" />
                          </div>
                          <div className="flex flex-col gap-0.5 overflow-hidden">
                            <span className="truncate text-xs font-semibold text-[#1A1A2E]">
                              {slot.entry.embed.title}
                            </span>
                            <span className="truncate text-[11px] text-[#6B7280]">
                              {slot.entry.embed.desc}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Badge */}
                      {slot.entry.badge && (
                        <div className="flex items-center gap-1.5 pt-0.5">
                          <Lock className="h-3 w-3 text-[#9CA3AF]" />
                          <span className="text-[11px] text-[#9CA3AF]">
                            {slot.entry.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
