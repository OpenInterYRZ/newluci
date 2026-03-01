'use client'

import Link from 'next/link'

export function SreCredibilitySection() {
  const alumni = [
    { name: 'Google', logo: 'G' },
    { name: 'Microsoft', logo: 'M' },
    { name: 'Deloitte', logo: 'D' },
  ]

  const investors = [
    { name: 'Salesforce Ventures', logo: 'SF' },
    { name: 'Crane Venture Partners', logo: 'CV' },
    { name: 'Y Combinator', logo: 'YC' },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl">
            Built by engineers for engineers. Backed by leading investors.
          </h2>
          <Link
            href="https://www.linkedin.com/company/sreai"
            target="_blank"
            className="hidden md:inline-block px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Our Team
          </Link>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Alumni */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-sm font-medium">Alumni</span>
            </div>

            <div className="space-y-4">
              {alumni.map((company) => (
                <div key={company.name} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">{company.logo}</span>
                  </div>
                  <span className="text-lg font-medium">{company.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Investment */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-sm font-medium">Investment</span>
            </div>

            <div className="space-y-4">
              {investors.map((investor) => (
                <div key={investor.name} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">{investor.logo}</span>
                  </div>
                  <span className="text-lg font-medium">{investor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
