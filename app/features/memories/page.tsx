import FeatureHero from "@/components/features/FeatureHero";
import Footer from "@/components/Footer";
import FeatureChannels from "@/components/features/memories/FeatureChannels";
import FeatureVideoSearch from "@/components/features/memories/FeatureVideoSearch";
import FeatureAction from "@/components/features/memories/FeatureAction";
import HowToGetStarted from "@/components/features/memories/HowToGetStarted";
import ChatFAQ from "@/components/features/memories/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";
export default function MemoriesPage() {
  return (
    <div>
      <FeatureHero
        heading={["Memories"]}
        description="Consolidate your video assets in one place, extract transcripts and summaries to cut review time, and get proactive reminders before meetings so you walk in with full context."
      />
      <FeatureChannels />
      <FeatureVideoSearch />
      <FeatureAction />
      <HowToGetStarted />
      <ChatFAQ />
      <div className="w-full bg-web-bg-0 py-14 px-6 sm:px-12">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
