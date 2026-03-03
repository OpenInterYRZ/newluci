"use client";
import React, { useRef } from "react";
import Badge from "../Badge";
import { LuciHub } from "./LuciHub";
import { OrganizedZone } from "./OrganizedZone";
import { NotionWindow } from "./NotionWindow";
import { ChatGPTWindow } from "./ChatGPTWindow";
import { ZoomWindow } from "./ZoomWindow";
import { SlackWindow } from "./SlackWindow";
import { GmailWindow } from "./GmailWindow";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export default function PainPointsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const notionRef = useRef<HTMLDivElement>(null);
  const chatgptRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const slackRef = useRef<HTMLDivElement>(null);
  const gmailRef = useRef<HTMLDivElement>(null);
  const luciRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full flex flex-col gap-12 md:gap-14 lg:gap-16 py-16 md:py-20 lg:py-24 px-12 md:px-16 lg:px-20 max-w-[1800px] mx-auto">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-text-0 text-3xl font-bold md:text-4xl lg:text-5xl text-center">
          You&apos;re drowning in info. But starving for insight.
        </h2>
        <p className="text-text-2 text-base md:text-lg text-center">
          Your calendar is packed. Slack won&apos;t stop. Even when everything
          is captured, nothing connects. <br />
          You don&apos;t need another tool. You need understanding.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative flex gap-24 md:gap-32 lg:gap-40 w-full items-center justify-center"
      >
        {/* Left side - Individual cards */}
        <div className="grid grid-cols-2 gap-6 items-center justify-items-center">
          <div
            ref={notionRef}
            className="w-40 h-24 md:w-44 md:h-28 lg:w-48 lg:h-30"
          >
            <NotionWindow />
          </div>
          <div
            ref={chatgptRef}
            className="w-40 h-24 md:w-44 md:h-28 lg:w-48 lg:h-30"
          >
            <ChatGPTWindow />
          </div>
          <div
            ref={zoomRef}
            className="w-40 h-24 md:w-44 md:h-28 lg:w-48 lg:h-30"
          >
            <ZoomWindow />
          </div>
          <div
            ref={slackRef}
            className="w-40 h-24 md:w-44 md:h-28 lg:w-48 lg:h-30"
          >
            <SlackWindow />
          </div>
          <div
            ref={gmailRef}
            className="w-40 h-24 md:w-44 md:h-28 lg:w-48 lg:h-30 col-span-2 justify-self-center"
          >
            <GmailWindow />
          </div>
        </div>

        {/* Middle - LuciHub */}
        <div
          ref={luciRef}
          className="flex flex-col items-center justify-center p-4"
        >
          <LuciHub />
        </div>

        {/* Right side - OrganizedZone */}
        <OrganizedZone />

        {/* Animated Beams connecting cards to LuciHub */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={notionRef}
          toRef={luciRef}
          curvature={20}
          pathColor="gray"
          pathOpacity={0.2}
          gradientStartColor="#ffaa40"
          gradientStopColor="#9c40ff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={chatgptRef}
          toRef={luciRef}
          curvature={10}
          pathColor="gray"
          pathOpacity={0.2}
          gradientStartColor="#ffaa40"
          gradientStopColor="#9c40ff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={zoomRef}
          toRef={luciRef}
          curvature={0}
          pathColor="gray"
          pathOpacity={0.2}
          gradientStartColor="#ffaa40"
          gradientStopColor="#9c40ff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={slackRef}
          toRef={luciRef}
          curvature={-10}
          pathColor="gray"
          pathOpacity={0.2}
          gradientStartColor="#ffaa40"
          gradientStopColor="#9c40ff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={gmailRef}
          toRef={luciRef}
          curvature={-20}
          pathColor="gray"
          pathOpacity={0.2}
          gradientStartColor="#ffaa40"
          gradientStopColor="#9c40ff"
        />
      </div>
    </section>
  );
}
