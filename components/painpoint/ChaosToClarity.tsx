"use client";
import FeatureCards from "./ProductCarousel";

export default function ChaosToClarity() {
  return (
    <section className="relative w-full pt-40 pb-20 px-4 bg-web-bg-0">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-20">
        <div className="text-center">
          <h2 className="text-text-0 text-4xl md:text-5xl font-semibold leading-[1.15]">
            How LUCI works
          </h2>
          <p className="text-text-2 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Three simple steps to see, remember, and act.
          </p>
        </div>
        <div className="w-full">
          <FeatureCards />
        </div>
      </div>
    </section>
  );
}
