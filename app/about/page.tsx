import Link from "next/link";
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

        {/* CTA — Join Us */}
        <section className="relative overflow-hidden bg-grey-9 dark:bg-grey-0">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white dark:text-text-0 leading-[1.1] tracking-tight mb-5">
                Help us build
                <br />
                the memory layer
              </h2>
              <p className="text-base text-white/60 dark:text-text-2 mb-10 max-w-md leading-relaxed">
                We&apos;re looking for curious, driven people who want to give
                AI a memory worth trusting.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                View Open Positions
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Decorative pull-quote */}
            <div className="hidden lg:block">
              <blockquote className="border-l-2 border-primary pl-6">
                <p className="text-xl text-white/80 dark:text-text-1 font-serif leading-relaxed italic">
                  &ldquo;An AI without memory is just a tool.
                  <br />
                  An AI with memory becomes an assistant.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
