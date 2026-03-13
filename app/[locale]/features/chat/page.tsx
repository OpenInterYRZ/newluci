import FeatureHero from "@/components/features/FeatureHero";
import FeatureChannels from "@/components/features/chat/FeatureChannels";
import FeatureVideoSearch from "@/components/features/chat/FeatureVideoSearch";
import FeatureAction from "@/components/features/chat/FeatureAction";
import Footer from "@/components/Footer";
import HowToGetStarted from "@/components/features/chat/HowToGetStarted";
import ChatFAQ from "@/components/features/chat/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";
export default function Page() {
  return (
    <div>
      <FeatureHero
        heading="Chat with LUCI"
        description="Chat with LUCI to get things done."
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
