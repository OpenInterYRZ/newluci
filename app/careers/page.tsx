import Link from "next/link";
import { jobs } from "@/data/careers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | LUCI",
  description:
    "Join the LUCI team. Explore open positions in AI research, engineering, product, and more.",
};

/* ── helpers ── */
const DEPARTMENT_ORDER = ["Research", "Engineer", "Product", "Business"] as const;

function groupByDepartment(items: typeof jobs) {
  const grouped: Record<string, typeof jobs> = {};
  for (const job of items) {
    (grouped[job.department] ??= []).push(job);
  }
  // return in defined order, skip any missing departments
  return DEPARTMENT_ORDER.filter((d) => grouped[d]).map((d) => ({
    department: d,
    jobs: grouped[d],
  }));
}

const DEPARTMENT_LABELS: Record<string, string> = {
  Research: "Research",
  Engineer: "Engineering",
  Product: "Product",
  Business: "Business",
};

function isRecent(dateStr: string) {
  const posted = new Date(dateStr);
  const now = new Date();
  const diffDays = (now.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays < 60;
}

export default function CareersPage() {
  const groups = groupByDepartment(jobs);

  return (
    <div className="w-full min-h-screen bg-web-bg-0">
      {/* ── Hero ── */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          Open Positions
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-0 leading-[1.08] max-w-4xl">
          Build the future of personal&nbsp;AI
        </h1>
        <p className="mt-6 text-grey-5 text-lg leading-relaxed max-w-2xl">
          We&apos;re a small, focused team turning ambitious research into
          products people rely on every day. If you thrive on hard problems
          and care about craft, we&apos;d love to&nbsp;hear from you.
        </p>
        <div className="mt-10 flex items-center gap-3 text-sm text-grey-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            {jobs.length} open roles
          </span>
          <span className="text-grey-2">·</span>
          <span>All positions worldwide</span>
        </div>
      </section>

      {/* ── Job Listings by Department ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pb-28">
        <div className="flex flex-col gap-16">
          {groups.map(({ department, jobs: deptJobs }) => (
            <div key={department}>
              {/* Department header */}
              <div className="flex items-baseline gap-3 mb-6">
                <h2 className="font-serif text-2xl text-text-0">
                  {DEPARTMENT_LABELS[department] ?? department}
                </h2>
                <span className="text-sm text-grey-3">
                  {deptJobs.length} {deptJobs.length === 1 ? "role" : "roles"}
                </span>
              </div>

              {/* Job rows */}
              <div className="flex flex-col divide-y divide-grey-1">
                {deptJobs.map((job) => {
                  const recent = isRecent(job.releaseDate);

                  return (
                    <Link
                      key={job.id}
                      href={`/careers/${job.id}`}
                      className="group flex items-center justify-between gap-4 py-5 md:py-6 transition-colors hover:bg-grey-0/60 -mx-4 px-4 rounded-lg"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-text-0 group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          {recent && (
                            <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              New
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-sm text-grey-4">
                          <span>{job.type}</span>
                          <span className="text-grey-2">·</span>
                          <span>{job.location}</span>
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <svg
                        className="w-5 h-5 text-grey-3 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
