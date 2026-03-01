"use client";

import LightPillar from "../ui/LightPillar";

export default function PillarHero() {
  return (
    <section className="bg-bg-0 relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center gap-12 py-25 px-20">
      <LightPillar
        className="pointer-events-none"
        topColor="#fd7e08"
        bottomColor="#e175ff"
        intensity={1}
        rotationSpeed={0.4}
        glowAmount={0.002}
        pillarWidth={3.4}
        pillarHeight={0.3}
        noiseIntensity={0}
        pillarRotation={112}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />
      {/* Black overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-[5]" />
      <div className="relative z-10 w-full flex flex-col items-center gap-12">
        {/* Hero Title */}
        <h1 className="text-text-0 text-7xl font-bold tracking-tight text-center">
          See, Remember & Act
        </h1>

        {/* Hero Subtitle */}
        <p className="text-text-1 font-sans text-xl leading-relaxed text-center max-w-3xl">
          LUCI remembers everything, then gets things done automatically.
          <br />
          Not just a note-taking tool — it&apos;s a personal AI assistant that
          builds memory and executes tasks.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          {/* Primary CTA */}
          <div className="bg-primary rounded-lg py-3.5 px-8 flex gap-2 hover:bg-primary-hover transition-colors cursor-pointer">
            <span className="text-white font-sans text-base font-medium">
              Sign Up for Cloud
            </span>
            <span className="text-white font-sans text-base font-medium">
              →
            </span>
          </div>

          {/* Secondary CTA */}
          <div className="rounded-lg py-3.5 px-8 flex gap-2 hover:bg-bg-1 transition-colors cursor-pointer border border-grey-2">
            <span className="text-text-1 font-sans text-base font-medium">
              Download Local
            </span>
            <span className="text-text-1 font-sans text-base font-medium">
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
