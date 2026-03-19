"use client";

import Image from "next/image";
import { useState } from "react";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const team = [
  {
    photo: "/p1.webp",
    name: "Shawn Shen",
    title: "Founder & CEO",
    desc: ["University of Cambridge, PhD", "Research Scientist"],
    linkedin: "https://www.linkedin.com/in/junxiao-shen-86536198/",
    x: "https://x.com/shawnshenjx",
  },
  {
    photo: "/p2.webp",
    name: "Ben Zhou",
    title: "Co-Founder & CTO",
    desc: ["ML Engineer", "Lead in On-Device Perception"],
    linkedin: "https://www.linkedin.com/in/enmin-zhou/",
  },
  {
    photo: "/p3.webp",
    name: "Eddy Wu",
    title: "Chief AI Officer",
    desc: [
      "Principle Research Scientist",
      "Meta Superintelligence Lab",
      "Lead in Multi-Modal AI",
    ],
    linkedin: "https://www.linkedin.com/in/chi-hao-eddy-wu-698b8367/",
  },
];

export default function TeamGallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-24 sm:py-32 bg-web-bg-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-text-2 mb-5">
            The Team
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-text-0 leading-[1.08] tracking-tight max-w-2xl">
            Meet the Minds Behind <span className="text-primary">LUCI</span>
          </h2>
          <p className="mt-5 text-base text-text-2 max-w-lg leading-relaxed">
            World-class researchers from Meta, Cambridge, and beyond — building
            the future of visual memory and perception.
          </p>
        </div>

        {/* Content: List + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          {/* Team list */}
          <div className="flex flex-col">
            {team.map((member, i) => (
              <button
                key={member.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 py-5 border-b border-border-0 text-left transition-colors ${
                  active === i ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                <span className="text-xs font-mono text-text-2 w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                    active === i ? "text-primary" : "text-text-0"
                  }`}
                >
                  {member.name}
                </span>
                <span className="ml-auto text-sm text-text-2">
                  {member.title}
                </span>
                {active === i && (
                  <ArrowUpRight className="text-primary shrink-0" size={16} />
                )}
              </button>
            ))}

            {/* Description + social links of active member */}
            <div className="mt-4 flex items-center gap-6">
              <div className="flex gap-3 shrink-0">
                {team[active].linkedin && (
                  <a
                    href={team[active].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="hidden lg:flex items-start justify-end">
            <div className="relative w-72 h-72 rounded-full overflow-hidden">
              <Image
                src={team[active].photo}
                alt={team[active].name}
                fill
                className="object-cover transition-all duration-500"
                key={team[active].photo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
