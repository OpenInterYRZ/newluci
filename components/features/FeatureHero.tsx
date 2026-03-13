"use client";

import { Apple } from "lucide-react";
import GradientButton from "../ui/GradientButton";
interface FeatureHeroProps {
  heading: string | string[];
  description: string;
  bgColor?: string;
  className?: string;
}

export default function FeatureHero({
  heading,
  description,
  bgColor = "bg-web-bg-0",
  className,
}: FeatureHeroProps) {
  const lines = Array.isArray(heading) ? heading : heading.split("\n");

  return (
    <section
      className={`flex w-full flex-col items-center justify-center px-6 py-24 md:py-32 ${className ?? ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-center text-4xl font-black leading-tight tracking-tight md:text-4xl lg:text-5xl">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>

      <p className="mt-6 max-w-3xl text-center text-base leading-relaxed text-text-1 md:text-lg">
        {description}
      </p>

      <div className="mt-10">
        <GradientButton href="/download" text="Download for macOS" download />
      </div>
    </section>
  );
}
