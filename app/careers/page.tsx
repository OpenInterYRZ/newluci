import Link from 'next/link';
import { jobs } from '@/data/careers';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Careers | LUCI',
  description:
    'Join the LUCI team. Explore open positions in AI research, engineering, product, and more.',
};

export default function CareersPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-sm font-semibold tracking-[3px] text-[var(--primary)] uppercase">
          CAREERS
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold font-['DM_Serif_Display',serif] text-grey-9">
          Build What&apos;s Next
        </h1>
        <p className="mt-4 text-lg text-grey-5 max-w-xl mx-auto">
          We&apos;re looking for exceptional people to shape the future of AI.
        </p>
        <p className="mt-6 text-sm text-grey-4">
          {jobs.length} Positions
        </p>
      </section>

      {/* Job List */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-grey-9 mb-8">
          Recruiting Positions
        </h2>
        <div className="flex flex-col gap-3">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              className="group flex items-center justify-between p-5 rounded-xl border border-grey-1 hover:bg-grey-0 transition-colors"
            >
              <div>
                <h3 className="text-base font-semibold text-grey-9 group-hover:text-[var(--primary)] transition-colors">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-grey-4">
                  {job.department} · {job.type} · {job.location}
                </p>
              </div>
              <span className="text-grey-3 group-hover:translate-x-1 transition-transform text-lg">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
