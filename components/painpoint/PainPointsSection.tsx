import Badge from "../Badge";
import { ChaosZone } from "./ChaosZone";
import { LuciHub } from "./LuciHub";
import { OrganizedZone } from "./OrganizedZone";

export default function PainPointsSection() {
  return (
    <section className="bg-bg-0 w-full flex flex-col gap-[60px] py-[100px] px-[80px] max-w-[1800px] mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center gap-[24px]">
        <h2 className="text-text-0 font-serif text-[48px] text-center">
          Tired of switching between tools?
        </h2>
        <p className="text-text-2 font-sans text-[18px] text-center">
          Your day: juggling 5 tools, scattered memory, low efficiency
        </p>
      </div>

      {/* Three-zone layout with golden ratio */}
      <div className="flex gap-40 w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <ChaosZone />
        </div>

        <div className="flex flex-col items-center justify-center">
          <LuciHub />
        </div>

        <OrganizedZone />
      </div>
    </section>
  );
}
