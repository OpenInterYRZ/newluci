import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases — One AI Agent, Built for How You Work",
  description:
    "See how LUCI adapts to founders, investors, sales leaders, managers, creators, and knowledge workers. Automate meeting notes, deal tracking, video analysis and more.",
  openGraph: {
    title: "LUCI Use Cases — AI Agent for Every Workflow",
    description:
      "From deal flow tracking to meeting memory, see how LUCI automates the tasks that slow you down.",
    url: "/use-cases",
  },
  twitter: {
    title: "LUCI Use Cases — AI Agent for Every Workflow",
    description:
      "From deal flow tracking to meeting memory, see how LUCI automates the tasks that slow you down.",
  },
  alternates: {
    canonical: "/use-cases",
  },
};

const useCases = [
  {
    slug: "founders",
    label: "Founders",
    title: "Never lose client context, keep your lean team aligned",
    description:
      "LUCI remembers every client detail, keeps your small team in sync, and makes sure nothing falls through the cracks.",
    image: "/usecases/Founders.webp",
    agents: ["Client Context Agent", "Team Alignment Agent", "Quick Recap Agent", "Priority Focus Agent"],
  },
  {
    slug: "investors",
    label: "Investors",
    title: "Deal flow tracking, portfolio insights, due diligence at scale",
    description:
      "LUCI organizes pitch decks, tracks portfolio updates, and surfaces the signals that matter — so you never miss a great opportunity.",
    image: "/usecases/Investors.webp",
    agents: ["Deal Flow Agent", "Portfolio Monitor", "Due Diligence Agent", "Market Signal Agent"],
  },
  {
    slug: "sales-leaders",
    label: "Sales Leaders",
    title: "Pipeline visibility, call insights, rep coaching on autopilot",
    description:
      "LUCI captures every call, highlights buying signals, and gives your reps personalized coaching — turning conversations into revenue.",
    image: "/usecases/sales.webp",
    agents: ["Call Insight Agent", "Pipeline Tracker", "Rep Coaching Agent", "Deal Risk Agent"],
  },
  {
    slug: "managers",
    label: "Managers",
    title: "Transform video chaos into a searchable knowledge base",
    description:
      "Stop wasting hours sifting through footage. LUCI automates video understanding, so your team can focus on insights, not playback.",
    image: "/usecase-manage/mana1.webp",
    agents: ["Video Summary Agent", "Meeting Search Agent", "Knowledge Base Agent", "Integration Agent"],
  },
  {
    slug: "creators",
    label: "Creators",
    title: "Stop scrubbing through the same video again",
    description:
      "LUCI watches your content so you don't have to. Get instant summaries, competitor analysis, and trend insights.",
    image: "/usecases/creator/CreatorHero.webp",
    agents: ["Content Analysis Agent", "Trend Spotter Agent", "Competitor Watch Agent", "Repurpose Agent"],
  },
  {
    slug: "knowledge-workers",
    label: "Knowledge Workers",
    title: "Never lose a detail — your AI-powered second brain",
    description:
      "Every meeting, note, and conversation automatically indexed. Search anything in plain language and get instant answers.",
    image: "/usecases/konw/Knowledgewor.webp",
    agents: ["Memory Agent", "Search Agent", "Summary Agent", "Action Item Agent"],
  },
];

export default function UseCasesPage() {
  return (
    <div className="w-full h-full mx-auto">
      <section className="relative w-full bg-web-bg-0 overflow-hidden">
        <div className="max-w-[1300px] mx-auto pt-32 pb-20 px-6 md:px-20">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-grey-1 bg-grey-0 px-4 py-1.5 text-[12px] font-medium text-text-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Use Cases
            </span>

            <h1 className="mt-6 text-[40px] md:text-[56px] font-semibold leading-[1.08] tracking-tight text-text-0 max-w-3xl">
              One AI Agent,
              <br />
              Built for How You Work
            </h1>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-text-2 max-w-[600px]">
              Whether you&apos;re closing deals, managing a portfolio, or
              building a company — LUCI adapts to your workflow and automates
              the tasks that slow you down.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <Link
                key={uc.slug}
                href={`/use-cases/${uc.slug}`}
                className="group relative flex flex-col rounded-[20px] border border-grey-1 bg-bg-0 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(255,92,0,0.08)]"
              >
                {/* Top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={uc.image}
                    alt={uc.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-text-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {uc.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="text-[17px] font-semibold text-text-0 leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-2 flex-1">
                    {uc.description}
                  </p>

                  {/* Agent pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {uc.agents.map((agent) => (
                      <span
                        key={agent}
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand-0 px-2.5 py-1 text-[10px] font-medium text-text-1"
                      >
                        <span className="size-1 shrink-0 rounded-full bg-primary" />
                        {agent}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-[13px] font-medium text-primary mt-1">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
