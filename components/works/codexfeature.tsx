import MeetingContextCard from "./MeetingContextCard";
import MemoryChatCard from "./MemoryChatCard";
import VideoMemoryCard from "./VideoMemoryCard";
import RecordToExecuteCard from "./RecordToExecuteCard";
import WhereYouAreCard from "./WhereYouAreCard";
import SkillsCard from "./SkillsCard";

export default function CodexFeature() {
  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1300px] mx-auto px-5  py-16 md:py-28">
        {/* ─── Header ─── */}
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.15] text-center text-text-0">
            Your AI-Powered Second Brain for Work
          </h2>
          <p className="text-base text-text-2 max-w-2xl mx-auto text-center leading-relaxed">
            LUCI integrates fragmented information into structured memory,
            turning every conversation and every video into reusable knowledge
            assets.
          </p>
        </div>

        {/* ─── Feature Cards ─── */}
        <div className="flex flex-col gap-16 md:gap-32">
          <MeetingContextCard />
          <VideoMemoryCard />
          <SkillsCard />
          <WhereYouAreCard />
        </div>
      </div>
    </section>
  );
}
