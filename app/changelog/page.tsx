import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Changelog — What's New in LUCI",
  description:
    "See the latest updates, new features, and improvements to LUCI. Follow our product development journey.",
  openGraph: {
    title: "LUCI Changelog — Latest Updates & New Features",
    description:
      "See the latest updates, new features, and improvements to LUCI.",
    url: "/changelog",
  },
  twitter: {
    title: "LUCI Changelog — Latest Updates & New Features",
    description:
      "See the latest updates, new features, and improvements to LUCI.",
  },
  alternates: {
    canonical: "/changelog",
  },
};

/* ─── sample data ─── */
const changelog = [
  {
    date: "Mar 3, 2026",
    title: "Custom Views + Platform Improvements",
    sections: [
      {
        heading: "Custom Views (Data Tables)",
        body: "Create workspace-level data tables that aggregate task outputs into queryable views. Build custom interfaces on top of Beam without external databases.",
        bullets: [
          "Create views with columns mapped to agent node inputs/outputs",
          "Link views together with Has-Many and Many-to-Many relationships",
          "Export data to CSV for use in Excel or Google Sheets",
        ],
        image: "/images/changelog/views.png",
      },
      {
        heading: "Improvements",
        bullets: [
          "Error Types configuration added to Auto-run settings — define which error codes trigger retries",
          "Linked variable dropdown now shows step identifier for clarity",
          "Search functionality added to workspace switcher",
          "Copy to clipboard icon added on form fields (task data, step I/O, summary)",
        ],
      },
    ],
  },
  {
    date: "Feb 18, 2026",
    title: "Memories & Context Engine",
    sections: [
      {
        heading: "Long-term Memory",
        body: "Agents can now persist and recall information across conversations using a built-in memory store, enabling continuity without re-prompting.",
        bullets: [
          "Automatic memory extraction from conversations",
          "Scoped recall with relevance ranking",
          "Manual memory management in workspace settings",
        ],
      },
      {
        heading: "Bug Fixes",
        bullets: [
          "Fixed intermittent timeout on large file uploads",
          "Resolved duplicate webhook events on rapid task completion",
          "Corrected timezone handling in scheduled triggers",
        ],
      },
    ],
  },
  {
    date: "Feb 3, 2026",
    title: "Integrations Hub & Workflow Templates",
    sections: [
      {
        heading: "Integrations Hub",
        body: "Browse, install, and configure third-party integrations from a centralized hub. Connect Slack, Notion, Google Sheets, and more with one click.",
        bullets: [
          "OAuth-based auth flow for supported services",
          "Per-workspace integration permissions",
          "Activity logs for every integration call",
        ],
      },
      {
        heading: "Workflow Templates",
        body: "Kickstart new agents with pre-built workflow templates. Each template includes configured nodes, sample prompts, and recommended integrations.",
        bullets: [
          "12 templates across support, sales, and ops categories",
          "One-click clone and customize",
          "Community-contributed template submissions",
        ],
      },
    ],
  },
  {
    date: "Jan 20, 2026",
    title: "Performance & Reliability Update",
    sections: [
      {
        heading: "Faster Execution",
        body: "Task execution latency reduced by 40% through infrastructure optimizations and smarter batching of LLM calls.",
        bullets: [
          "Parallel node execution where dependency graph allows",
          "Connection pooling for external API calls",
          "Streaming output for long-running steps",
        ],
      },
      {
        heading: "Improvements",
        bullets: [
          "Dashboard load time reduced by 60%",
          "Workspace search now indexes node configurations",
          "Improved error messages with suggested fixes",
          "Added bulk task retry from the task history view",
        ],
      },
    ],
  },
];

/* ─── page ─── */
const changelogJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LUCI Changelog",
  description: "Latest updates, new features, and improvements to LUCI.",
  url: "https://luci.ai/changelog",
  isPartOf: {
    "@type": "WebSite",
    name: "LUCI",
    url: "https://luci.ai",
  },
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-web-bg-0 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(changelogJsonLd) }}
      />
      {/* header */}
      <div className="mx-auto max-w-3xl px-6 mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-text-0">
          Changelog
        </h1>
        <p className="mt-3 text-text-2 text-lg">
          New updates and improvements.
        </p>
      </div>

      {/* timeline */}
      <div className="mx-auto max-w-5xl px-6">
        {changelog.map((entry, i) => (
          <article
            key={i}
            className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-x-8 md:gap-x-12"
          >
            {/* left: date + line */}
            <div className="relative flex flex-col items-end">
              <time className="text-sm text-text-2 pt-1 sticky top-32">
                {entry.date}
              </time>
              {/* vertical line */}
              <div className="absolute right-[-17px] md:right-[-25px] top-0 bottom-0 w-px bg-grey-1" />
            </div>

            {/* right: content */}
            <div
              className={`pb-16 ${
                i < changelog.length - 1 ? "border-b-0" : ""
              }`}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-text-0 leading-snug">
                {entry.title}
              </h2>

              {entry.sections.map((section, j) => (
                <div key={j} className="mt-8">
                  <h3 className="font-semibold text-lg text-text-0">
                    {section.heading}
                  </h3>

                  {section.body && (
                    <p className="mt-2 text-text-1 leading-relaxed">
                      {section.body}
                    </p>
                  )}

                  {section.bullets && (
                    <ul className="mt-3 space-y-1.5 text-text-1 list-disc pl-5">
                      {section.bullets.map((b, k) => (
                        <li key={k} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* {section.image && (
                    <div className="mt-6 rounded-xl overflow-hidden border border-grey-1">
                      <Image
                        src={section.image}
                        alt={section.heading}
                        width={800}
                        height={450}
                        className="w-full h-auto"
                      />
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
