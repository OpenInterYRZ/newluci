import { ArrowDown, Check, Play, ArrowUp } from "lucide-react";

const steps = [
  {
    num: "1",
    label: "Identify action items from meetings",
    dotBg: "#FEF3C7",
    numColor: "#D97706",
  },
  {
    num: "2",
    label: "Auto-create tasks and assign",
    dotBg: "#DBEAFE",
    numColor: "#2563EB",
  },
  {
    num: "3",
    label: "Execution complete, auto-report results",
    dotBg: "#D1FAE5",
    numColor: "#16A34A",
    done: true,
  },
];

const arrowColors = ["#D9770640", "#22C55E40"];

export default function RecordToExecuteCard() {
  return (
    <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
      {/* ─── Left: Title + Desc ─── */}
      <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
        <h3 className="text-[28px] font-bold leading-tight text-text-0">
          Closed Loop from Record to Execute
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Auto-identify tasks, auto-execute, no manual work. From meeting notes
          to done — fully automated.
        </p>
      </div>

      {/* ─── Right: Two panels side by side ─── */}
      <div
        className="flex flex-1 items-end justify-end overflow-hidden rounded-[20px] p-5 md:p-8"
        style={{
          backgroundImage: "url(/pb.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full flex-col md:flex-row gap-4">
          {/* ── Panel 1: Video analysis - dark chat style ── */}
          <div
            className="flex flex-1 flex-col overflow-hidden rounded-xl"
            style={{
              backgroundColor: "#1c1c28",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            {/* Video thumbnail area */}
            <div
              className="relative flex h-[140px] items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #2a2845 0%, #3d3570 50%, #5a4a9e 100%)",
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Play className="h-4 w-4 fill-white text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
                <div className="h-full bg-[#8B5CF6]" style={{ width: "28%" }} />
              </div>
              <span className="absolute bottom-1.5 right-2.5 text-[9px] text-white/40">
                12:38 / 45:05
              </span>
            </div>

            {/* Chat-like extraction results */}
            <div className="flex flex-col gap-3 p-4">
              {/* LUCI response bubble */}
              <div className="flex flex-col gap-2 rounded-lg bg-[#2a2840] px-3.5 py-3">
                <p className="text-[11px] leading-[1.65] text-[#c4c3ce]">
                  I found <span className="font-medium text-white">3 decisions</span> and{" "}
                  <span className="font-medium text-white">2 action items</span> in
                  this recording.
                </p>

                {/* Extracted items as inline tags */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#8B5CF6]" />
                    <span className="text-[10px] text-[#a5a4b4]">
                      Q4 budget approved
                    </span>
                    <span className="ml-auto text-[9px] text-[#5a5970]">05:12</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#E8622C]" />
                    <span className="text-[10px] text-[#a5a4b4]">
                      Li Ming → draft RFC by Friday
                    </span>
                    <span className="ml-auto text-[9px] text-[#5a5970]">12:38</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#8B5CF6]" />
                    <span className="text-[10px] text-[#a5a4b4]">
                      Launch moved Q3 → Q2
                    </span>
                    <span className="ml-auto text-[9px] text-[#5a5970]">25:40</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#E8622C]" />
                    <span className="text-[10px] text-[#a5a4b4]">
                      Wang Lei → review marketing spend
                    </span>
                    <span className="ml-auto text-[9px] text-[#5a5970]">32:05</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#3B82F6]" />
                    <span className="text-[10px] text-[#a5a4b4]">
                      Team prefers microservice
                    </span>
                    <span className="ml-auto text-[9px] text-[#5a5970]">41:20</span>
                  </div>
                </div>
              </div>

              {/* File operation rows */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 rounded-md bg-[#222133] px-3 py-1.5">
                  <span className="text-[10px] text-[#6b6a7a]">Created</span>
                  <span className="text-[10px] font-medium text-[#c4c3ce]">
                    meeting-notes-oct15.md
                  </span>
                  <Check className="ml-auto h-3 w-3 text-[#22C55E]" strokeWidth={2.5} />
                </div>
                <div className="flex items-center gap-2 rounded-md bg-[#222133] px-3 py-1.5">
                  <span className="text-[10px] text-[#6b6a7a]">Synced</span>
                  <span className="text-[10px] font-medium text-[#c4c3ce]">
                    2 tasks → project board
                  </span>
                  <Check className="ml-auto h-3 w-3 text-[#22C55E]" strokeWidth={2.5} />
                </div>
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2 rounded-lg border border-[#333248] bg-[#1c1c28] px-3 py-2">
                <span className="flex-1 text-[10px] text-[#4a4960]">
                  Ask about this meeting...
                </span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B5CF6]">
                  <ArrowUp className="h-3 w-3 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Panel 2: Execution Steps ── */}
          <div
            className="hidden md:flex w-[240px] shrink-0 flex-col justify-center gap-4 rounded-xl bg-white/95 px-5 py-6 backdrop-blur-sm"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          >
            {steps.map((step, i) => (
              <div key={step.num}>
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: step.dotBg }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: step.numColor }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <span className="text-[12px] font-medium leading-snug text-[#1A1A2E]">
                    {step.label}
                  </span>
                  {step.done && (
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#22C55E]">
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div className="py-0.5 pl-3">
                    <ArrowDown
                      className="h-3.5 w-3.5"
                      style={{ color: arrowColors[i] }}
                      strokeWidth={2}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
