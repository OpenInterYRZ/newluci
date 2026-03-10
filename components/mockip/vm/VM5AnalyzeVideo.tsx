"use client";

import { useEffect, useState } from "react";
import {
  Play,
  SkipForward,
  Volume2,
  Settings,
  Maximize,
  Square,
} from "lucide-react";
import ShinyText from "@/components/ui/ShinyText";
import VM7AnalysisReport from "./VM7AnalysisReport";

const ANALYSIS_PHASES = [
  "✨ Extracting keywords…",
  "✨ Transcribing audio…",
  "✨ Analyzing sentiment…",
  "✨ Generating summary…",
  "✨ Identifying action items…",
  "✨ Computing embeddings…",
];

function RotatingStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANALYSIS_PHASES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <ShinyText
      text={ANALYSIS_PHASES[index]}
      speed={2}
      delay={0}
      color="#4f4f4f"
      shineColor="#b3b3b3"
      spread={120}
      direction="left"
      yoyo={false}
      pauseOnHover={false}
      disabled={false}
    />
  );
}

/* ─── sub-components ──────────────────────────── */

function EmbeddingBar({ width, delay }: { width: string; delay: string }) {
  return (
    <div className="h-[18px] w-full rounded-full bg-[#F0ECE8]">
      <div
        className="h-full rounded-full animate-pulse"
        style={{
          width,
          animationDelay: delay,
          background:
            "linear-gradient(90deg, #E8713A 0%, #F4A76E 40%, #FCDCC8 85%, #FFF0E4 100%)",
        }}
      />
    </div>
  );
}

/* ─── main ────────────────────────────────────── */

export default function VM5AnalyzeVideo() {
  return (
    <div className="flex gap-5 p-5 w-full h-full  bg-[#F7F6F3]">
      {/* ── Left Column ── */}
      <div className="flex flex-col gap-5 min-w-0">
        {/* Video Player */}
        <div className="relative w-full rounded-2xl bg-text-0 aspect-video overflow-hidden min-h-[280px]">
          {/* Placeholder video area */}
          <div className="absolute inset-0 bg-gradient-to-b from-text-1 via-text-2 to-text-0" />

          {/* Center play button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
              <Play
                size={26}
                className="text-white ml-1"
                fill="white"
                fillOpacity={0.9}
              />
            </div>
          </div>

          {/* Bottom controls overlay */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 px-5 pb-4 pt-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            {/* Progress bar */}
            <div className="relative w-full h-1 bg-white/25 rounded-full group cursor-pointer">
              <div className="h-full rounded-full bg-white w-[35%]" />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md"
                style={{ left: "35%" }}
              />
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <Play
                  size={18}
                  className="text-white cursor-pointer hover:text-white/80"
                  fill="white"
                  fillOpacity={0.9}
                />
                <SkipForward
                  size={16}
                  className="text-white cursor-pointer hover:text-white/80"
                />
                <Volume2
                  size={16}
                  className="text-white cursor-pointer hover:text-white/80"
                />
              </div>
              <div className="flex items-center gap-3.5">
                <Settings
                  size={15}
                  className="text-white/60 cursor-pointer hover:text-white/80"
                />
                <Square
                  size={15}
                  className="text-white/60 cursor-pointer hover:text-white/80"
                />
                <Maximize
                  size={15}
                  className="text-white/60 cursor-pointer hover:text-white/80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Loading / Embedding State */}
        <div className="flex flex-col gap-5 rounded-2xl bg-bg-0 p-6 border border-grey-2">
          <RotatingStatus />
        </div>
      </div>

      {/* ── Right Column — Analysis Report ── */}
      <div className="flex-1 w-[42%] min-w-[360px] shrink-0 overflow-hidden">
        <VM7AnalysisReport />
      </div>
    </div>
  );
}
