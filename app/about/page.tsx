import AboutVideoHero from "@/components/about/AboutVideoHero";
import WhyLuci from "@/components/about/WhyLuci";
import WhatIsLuci from "@/components/about/WhatIsLuci";
import OurBeliefs from "@/components/about/OurBeliefs";
import TeamGallery from "@/components/about/TeamGallery";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="w-full h-full mx-auto">
      <AboutVideoHero />

      <div className="relative bg-web-bg-0">
        <WhyLuci />
        <WhatIsLuci />
        <OurBeliefs />
        <TeamGallery />
        <Footer />
      </div>
    </div>
  );
}
