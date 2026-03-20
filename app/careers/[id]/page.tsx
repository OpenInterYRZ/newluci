import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { jobs, getJobById } from "@/data/careers";
import Sidebar from "./Sidebar";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) return {};

  return {
    title: `${job.title} — Careers`,
    description: `${job.title} - ${job.type} position in ${job.department} at LUCI. ${job.location}. Apply now and build the future of personal AI.`,
    openGraph: {
      title: `${job.title} — LUCI Careers`,
      description: `${job.type} position in ${job.department}. ${job.location}.`,
      url: `/careers/${id}`,
    },
    twitter: {
      title: `${job.title} — LUCI Careers`,
      description: `${job.type} position in ${job.department}. ${job.location}.`,
    },
    alternates: {
      canonical: `/careers/${id}`,
    },
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) notFound();

  const postedDate = new Date(job.releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <Link
          href="/careers"
          className="text-sm text-grey-4 hover:text-grey-9 transition-colors"
        >
          ← Back to all positions
        </Link>

        <div className="mt-8 flex flex-col lg:flex-row gap-12">
          {/* JD Content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl md:text-4xl font-bold text-grey-9">
              {job.title}
            </h1>
            <div className="mt-8 max-w-none [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-grey-9 [&_h4]:mt-8 [&_h4]:mb-3 [&_p]:text-grey-6 [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-grey-6 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mb-4 [&_strong]:text-grey-8">
              <MDXRemote source={job.md} />
            </div>
          </div>

          <Sidebar
            department={job.department}
            type={job.type}
            location={job.location}
            postedDate={postedDate}
            jobTitle={job.title}
          />
        </div>
      </div>
    </div>
  );
}
