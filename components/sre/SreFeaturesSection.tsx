'use client'

import Link from 'next/link'
import { useState } from 'react'

export function SreFeaturesSection() {
  const features = [
    {
      title: 'Document',
      label: 'Document',
      description: 'Auto-generate documentation from actions and changes. Update tickets, summarize deployments, and make everything searchable via chat.',
      color: 'magenta',
      bgColor: 'bg-[#FF00FF]',
    },
    {
      title: 'Build',
      label: 'Build',
      description: 'Real-time guidance prevents technical debt and ensures clean, maintainable code from Day One.',
      color: 'apricot',
      bgColor: 'bg-[#FFAA80]',
    },
    {
      title: 'Monitor',
      label: 'Monitor',
      description: 'Track deployments, system health, and performance metrics. Surface actionable insights before issues become incidents.',
      color: 'lilac',
      bgColor: 'bg-[#C8A2FF]',
    },
    {
      title: 'Release',
      label: 'Release',
      description: 'Automate checks, rollback protection, and release orchestration across environments for safe, consistent deployments every time.',
      color: 'lime',
      bgColor: 'bg-[#D4FF00]',
    },
    {
      title: 'Protect',
      label: 'Protect',
      description: 'Stop problems before they impact users or business operations with proactive issue detection and resolution.',
      color: 'sky',
      bgColor: 'bg-[#80D4FF]',
    },
    {
      title: 'Test',
      label: 'Test',
      description: 'Maintain coverage, catch regressions, and get guidance on test strategy with automated testing and ephemeral environments.',
      color: 'clay',
      bgColor: 'bg-[#FFCC99]',
    },
  ]

  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Meet your new AI teammates that learn fast, act responsibly, and always deliver.
          </h2>
          <Link
            href="/agent-assist"
            className="hidden md:inline-block px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Platform
          </Link>
        </div>
      </div>

      {/* Horizontal Scrolling Slider */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 pb-6" style={{ width: 'max-content' }}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="w-[90vw] md:w-[600px] flex-shrink-0"
              onMouseEnter={() => setActiveSlide(index)}
            >
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400">{feature.title} Video</p>
                </div>
              </div>

              {/* Banner */}
              <div className={`${feature.bgColor} text-black rounded-2xl p-6 mb-4`}>
                <div className="font-bold text-lg mb-2">{feature.label}</div>
                <div className="text-sm mb-4">{feature.description}</div>
                <Link
                  href="/agent-assist"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 12 13" fill="none">
                    <path d="M0.028759 6.4712L11.0286 6.52922M11.0286 6.52922L5.55769 1.00028M11.0286 6.52922L5.49967 12.0001" stroke="currentColor" strokeWidth="1.25"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
