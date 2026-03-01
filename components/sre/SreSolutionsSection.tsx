'use client'

import Link from 'next/link'

export function SreSolutionsSection() {
  const solutions = [
    {
      title: 'Purpose-Built for Hybrid Teams.',
      description: 'Geography and time zones won\'t slow momentum. SRE.ai ensures that work flows seamlessly between team members, regardless of when or where they\'re working, maintaining context across handoffs.',
      tags: ['Monitor', 'Document', 'Build'],
    },
    {
      title: 'Intelligence at Your Fingertips.',
      description: 'Information chaos becomes organized intelligence. SRE.ai processes, organizes, and routes incoming engineering processes, flagged bugs, deployment requests, and other DevOps elements.',
      tags: ['Monitor', 'Document', 'Protect'],
    },
    {
      title: 'Enterprise-Grade Reliability Without Enterprise Complexity.',
      description: 'Enterprise complexity doesn\'t have to mean enterprise chaos. SRE.ai acts as an intelligent safety net, automatically identifying compliance issues, policy violations, and approval gaps before they become problems.',
      tags: ['Protect', 'Test', 'Release'],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl">
            Automate reliability. <br />
            Accelerate innovation.
          </h2>
          <Link
            href="/salesforce"
            className="hidden md:inline-block px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Solutions
          </Link>
        </div>

        {/* Solutions - Sticky Scroll Effect */}
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center py-12"
            >
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">
                  {solution.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {solution.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {solution.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20"
                    >
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                      <span className="text-sm font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animation Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full"></div>
                  <p className="text-sm text-gray-400">Solution Animation {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
