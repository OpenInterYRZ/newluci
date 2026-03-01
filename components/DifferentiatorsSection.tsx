import Badge from "./Badge";
import FeatureCard from "./FeatureCard";
import VideoMemoryScene from "./scenes/VideoMemoryScene";
import AutoExecuteScene from "./scenes/AutoExecuteScene";
import DataSovereigntyScene from "./scenes/DataSovereigntyScene";
import ConnectorScene from "./scenes/ConnectorScene";
import SkillsScene from "./scenes/SkillsScene";

export default function DifferentiatorsSection() {
  return (
    <section className=" w-full flex flex-col gap-12 md:gap-14 lg:gap-16 py-16 md:py-20 lg:py-24 px-12 md:px-16 lg:px-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-6">
        <Badge
          text="Core Advantages"
          dotColor="#785DE1"
          textColor="#785DE1"
          bgColor="#785DE115"
        />
        <h2 className="text-text-0 text-3xl md:text-4xl lg:text-5xl tracking-tight text-center">
          Five Core Differentiators
        </h2>
        <p className="text-text-1 font-sans text-base md:text-lg leading-relaxed text-center">
          Not just a tool upgrade — a fundamental change in how you work
        </p>
      </div>

      {/* Row 1: 3 cards */}
      <div className="flex gap-6 w-full">
        <FeatureCard
          scene={<VideoMemoryScene />}
          title="Video Memory, Not Just Text"
          description="Record meetings, fitness moves — LUCI understands video and builds memory."
        />

        <FeatureCard
          scene={<AutoExecuteScene />}
          title="Auto-Execute, Not Just Record"
          description="Agents auto-invoked from memory — no manual steps needed."
        />

        <FeatureCard
          scene={<DataSovereigntyScene />}
          title="Your Data, Your Rules"
          description="Cloud VM or self-hosted, built on open source OpenClaw."
        />
      </div>

      {/* Row 2: 2 cards */}
      <div className="flex gap-6 w-full">
        <FeatureCard
          scene={<ConnectorScene />}
          title="Massive Integrations"
          description="Connect all your work & daily apps from one hub."
        />

        <FeatureCard
          scene={<SkillsScene />}
          title="Skill Ecosystem"
          description="Built-in core skills + community open source, install skills like apps."
        />
      </div>
    </section>
  );
}
