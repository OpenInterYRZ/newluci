import { ArrowDown } from "lucide-react";

export default function InvestorsHero() {
  return (
    <section className="relative w-full bg-web-bg-0 overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center pt-32 pb-20 px-6 md:px-20">
        <div className="flex flex-col items-center text-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-grey-1 bg-grey-0 px-4 py-1.5 text-[12px] font-medium text-text-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              LUCI for Investors
            </span>
          </div>

          <h1 className="mt-6 text-[40px] md:text-[56px] font-semibold leading-[1.08] tracking-tight text-text-0 max-w-3xl">
            Deal Flow Tracking,
            <br />
            Portfolio Insights at Scale
          </h1>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-text-2 max-w-[600px]">
            Stay on top of every deal without drowning in data. LUCI organizes
            pitch decks, tracks portfolio updates, and surfaces the signals that
            matter — so you never miss a great opportunity.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Start for Free
            </a>
            <a
              href="/contact-sales"
              className="inline-flex items-center gap-2 rounded-full border border-grey-1 bg-white px-6 py-2.5 text-[14px] font-semibold text-text-0 transition-colors hover:bg-grey-0"
            >
              Request a Demo
            </a>
          </div>
          <img
            src="/usecases/Investors.webp"
            alt="Investors Hero"
            className="w-full h-full object-cover mt-10"
          />
          <div className="mt-12 flex flex-col items-center gap-2 text-text-2">
            <span className="text-[12px] tracking-wide">Scroll to explore</span>
            <div>
              <ArrowDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
