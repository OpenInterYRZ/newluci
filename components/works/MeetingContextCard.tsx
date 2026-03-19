import Image from "next/image";
import { Check, Plus, Calendar } from "lucide-react";

const features = [
  "Automatic sentiment analysis of past interactions",
  "Cross-referencing with project milestones",
];

const tasks = [
  { title: "Sales Review with Alex", subtitle: "Q3 Projections & Logistics" },
  { title: "Editorial Sync", subtitle: "Content Calendar Review" },
];

export default function MeetingContextCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      {/* ─── Left: Title + Desc ─── */}
      <div className="flex w-full flex-1 md:shrink-0 flex-col gap-4 pb-0 md:pb-6">
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-text-0">
          Context-Aware Meeting Prep
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Your Second Brain understands the nuances of your professional
          landscape. It anticipates your needs by weaving together disparate
          threads of communication into a cohesive, ready-to-act briefing.
        </p>

        {/* Feature checklist */}
        <div className="flex flex-col gap-3 mt-2">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <Check
                  className="h-3.5 w-3.5 text-emerald-500"
                  strokeWidth={2.5}
                />
              </span>
              <span className="text-[15px] text-text-1">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Right: Card with landscape background ─── */}
      <div className="relative flex-1 aspect-square overflow-hidden rounded-3xl flex items-center justify-center">
        <img
          src="/landscape/lan2.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />

        <div className="relative z-10 m-5 md:m-8 overflow-hidden rounded-2xl bg-white shadow-lg max-w-[340px] w-full">
          {/* Card header */}
          <div className="flex items-center justify-between px-8 pt-8 pb-3">
            <div className="flex items-center gap-2.5">
              <Calendar className="h-5 w-5 text-primary" strokeWidth={2} />
              <h4 className="text-[15px] font-semibold text-neutral-800">
                Meeting Prep
              </h4>
            </div>
            <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
              Today
            </span>
          </div>

          {/* Task items */}
          <div className="flex flex-col gap-2.5 px-8 pb-3">
            {tasks.map((task, i) => (
              <div key={i} className="rounded-xl bg-neutral-100 px-4 py-3">
                <p className="text-sm font-medium text-neutral-800">
                  {task.title}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {task.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Add new task */}
          <div className="flex items-center justify-center gap-1.5 px-8 pb-8 pt-2">
            <Plus className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
            <span className="text-sm font-medium text-primary">
              Add New Task
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
