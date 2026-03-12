import AboutVideoHero from "@/components/about/AboutVideoHero";
import WhyLuci from "@/components/about/WhyLuci";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="w-full h-full mx-auto">
      {/* Hero — takes up one viewport, video is fixed behind */}
      <AboutVideoHero />

      {/* Content slides up over the darkened hero */}
      <div className="relative z-10 bg-web-bg-0 rounded-t-[2rem] shadow-[0_-10px_60px_rgba(0,0,0,0.3)]">
        <WhyLuci />
        <Footer />
      </div>
    </div>
  );
}
