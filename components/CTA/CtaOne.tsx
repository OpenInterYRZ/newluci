"use client";

import Grainient from "../ui/Grainient";
import GradientButton from "../ui/GradientButton";

export default function CtaOne() {
  return (
    <section className="w-full flex items-center justify-center max-w-[1400px] mx-auto rounded-[32px] overflow-hidden my-10">
      {/* CTA Background with Grainient effect */}

      <div className="bg-bg-1 w-full flex flex-col items-center gap-8 py-30 px-20 relative overflow-hidden ">
        {/* Grainient Background */}
        <div className="absolute inset-0 opacity-60">
          <Grainient
            color1="#FF9FFC"
            color2="#5227FF"
            color3="#B19EEF"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1.3}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        {/* CTA Content */}
        <div className="flex flex-col items-center my-auto gap-6 relative z-10 max-w-3xl">
          {/* Title */}
          <h2 className="text-text-0 font-bold text-6xl tracking-tight text-center">
            Get Started in 3 Minutes
          </h2>

          {/* Subtitle */}
          <p className="text-text-1 font-sans text-xl leading-relaxed text-center">
            Cloud-hosted or self-hosted — choose what works best for you
          </p>

          {/* Button Row */}
          <div className="flex items-center gap-5">
            <GradientButton href="/signup" text="Try Cloud Free" />
            <button className="bg-transparent border-2 border-text-0/20 rounded-xl py-4 px-8 hover:border-text-0/40 transition-colors">
              <span className="text-text-0 font-sans text-base font-semibold">
                Download Local
              </span>
            </button>
          </div>

          {/* Trust Row */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1.5">
              <span className="text-[#22C55E] font-mono text-sm font-bold">
                ✓
              </span>
              <span className="text-text-1 font-sans text-xss">
                No credit card required
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#22C55E] font-mono text-sm font-bold">
                ✓
              </span>
              <span className="text-text-1 font-sans text-xss">
                Cancel anytime
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#22C55E] font-mono text-sm font-bold">
                ✓
              </span>
              <span className="text-text-1 font-sans text-xss">
                Export data anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
