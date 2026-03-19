import FeatureHero from "@/components/features/FeatureHero";
import FeatureChannels from "@/components/features/integrations/FeatureChannels";
import FeatureVideoSearch from "@/components/features/integrations/FeatureVideoSearch";
import FeatureAction from "@/components/features/integrations/FeatureAction";
import HowToGetStarted from "@/components/features/integrations/HowToGetStarted";
import ChatFAQ from "@/components/features/integrations/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";


export default function IntegrationsPage() {
  return (
    <div>
      <FeatureHero
        heading="Integrations"
        description="Migrate your existing memories, connect the tools where work already happens, and extend behavior with custom skills."
      />
      <FeatureChannels />
      <FeatureVideoSearch />
      <FeatureAction />
      <HowToGetStarted />
      <ChatFAQ />
      <div className="w-full bg-web-bg-0 py-14 px-6 sm:px-12">
        <CtaBanner />
      </div>

    </div>
  );
}
