import { Bookmark, TrendingUp, Play, Circle } from "lucide-react";

export default function VideoMemoryCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      {/* ─── Left: Visual with floating cards ─── */}
      <div className="relative flex-1 aspect-square overflow-hidden rounded-3xl flex items-center justify-center">
        <img
          src="/pb.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />

        {/* Organic floating cards */}
        <div className="relative z-10 w-full h-full p-6 md:p-10">
          {/* Card 1: Key Themes — top-left, largest */}
          <div
            className="absolute left-6 top-[12%] md:left-10 md:top-[14%] w-[44%] rounded-2xl bg-white px-5 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            style={{ transform: "rotate(-1deg)" }}
          >
            <div className="mb-3 w-full overflow-hidden rounded-lg bg-neutral-100">
              <div className="relative aspect-video">
                <img
                  src="/hero/lib1.webp"
                  alt="Video thumbnail"
                  className="size-full object-cover"
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                    <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </div>
              {/* Progress bar with key segment markers */}
              <div className="relative h-1.5 w-full bg-neutral-200">
                <div className="absolute inset-y-0 left-0 w-[35%] bg-neutral-400 rounded-r-full" />
                {/* Key segments — thicker highlights */}
                <div className="absolute -top-[1px] h-[calc(100%+2px)] left-[12%] w-[8%] rounded-full bg-emerald-500" />
                <div className="absolute -top-[1px] h-[calc(100%+2px)] left-[52%] w-[6%] rounded-full bg-emerald-500" />
                <div className="absolute -top-[1px] h-[calc(100%+2px)] left-[78%] w-[10%] rounded-full bg-emerald-500" />
              </div>
            </div>
            <p className="text-[14px] font-semibold text-neutral-800 mb-3 leading-snug">
              Key Themes Identified
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[10px] font-semibold text-emerald-600 tracking-wide">
                SCALABILITY
              </span>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[10px] font-semibold text-emerald-600 tracking-wide">
                UX FLOW
              </span>
            </div>
          </div>

          {/* Card 2: Transcribing — top-right, offset down */}
          <div
            className="absolute right-6 top-[18%] md:right-10 md:top-[20%] w-[44%] rounded-2xl bg-white px-5 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            style={{ transform: "rotate(0.5deg)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-[11px] font-bold tracking-wider text-neutral-700 uppercase">
                Transcribing…
              </span>
            </div>
            <p className="text-[12px] leading-[1.7] text-neutral-400">
              &ldquo;We need to focus on the curation aspect of the editorial…&rdquo;
            </p>
          </div>

          {/* Card 3: Saved Moments — bottom-left */}
          <div
            className="absolute left-6 bottom-[16%] md:left-10 md:bottom-[18%] w-[38%] rounded-2xl bg-white px-5 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            style={{ transform: "rotate(0.5deg)" }}
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
              <Bookmark className="size-[18px] text-neutral-500" strokeWidth={1.5} />
            </div>
            <p className="text-[14px] font-semibold text-neutral-800 leading-snug">
              Saved Moments (12)
            </p>
          </div>

          {/* Card 4: Engagement Metrics — bottom-right */}
          <div
            className="absolute right-6 bottom-[12%] md:right-10 md:bottom-[14%] w-[44%] rounded-2xl bg-white px-5 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
              <TrendingUp className="size-[18px] text-neutral-500" strokeWidth={1.5} />
            </div>
            <p className="text-[14px] font-semibold text-neutral-800 leading-snug">
              Engagement Metrics
            </p>
          </div>
        </div>
      </div>

      {/* ─── Right: Title + Desc ─── */}
      <div className="flex w-full flex-1 md:shrink-0 flex-col gap-4 pb-0 md:pb-6">
        <span className="text-[11px] font-semibold tracking-widest text-emerald-600 uppercase">
          Memory
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-text-0">
          Video Understanding Memory
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Stop scrubbing through hours of footage. Our AI watches, listens, and
          indexes your visual meetings, transforming video data into searchable,
          actionable knowledge bites.
        </p>

        {/* Feature bullets */}
        <div className="grid grid-cols-2 gap-6 mt-2">
          <div>
            <h4 className="text-sm font-bold text-neutral-900 mb-1">
              Instant Summaries
            </h4>
            <p className="text-[12px] leading-relaxed text-text-2">
              Get the gist of any 60‑minute video in under 60 seconds.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900 mb-1">
              Visual Search
            </h4>
            <p className="text-[12px] leading-relaxed text-text-2">
              Search for moments where specific slides or people appeared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
