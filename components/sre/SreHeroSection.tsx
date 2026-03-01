'use client'

import Link from 'next/link'

export function SreHeroSection() {
  return (
    <>
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Nav */}
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold">SRE.ai</span>
                <div className="flex gap-1">
                  {/* Logo symbols - simplified geometric shapes */}
                  <div className="w-5 h-5 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                  <div className="w-5 h-5 bg-black rotate-45"></div>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-8">
                <button className="text-sm font-medium hover:text-gray-600">Platform</button>
                <button className="text-sm font-medium hover:text-gray-600">Solutions</button>
                <button className="text-sm font-medium hover:text-gray-600">Resources</button>
              </nav>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm font-medium hover:text-gray-600">
                Sign In
              </Link>
              <Link href="#" className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                Get Access
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-[1094px] mx-auto">
            {/* Bordered Header */}
            <div className="border border-black rounded-t-2xl p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Run reliability on autopilot. <br />
                Free your teams for what&apos;s next.
              </h1>
            </div>

            {/* Video Container with Grid Background */}
            <div className="border border-t-0 border-black rounded-b-2xl p-0 relative overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 grid grid-cols-7 grid-rows-3">
                {Array.from({ length: 21 }).map((_, i) => (
                  <div key={i} className="border border-gray-200"></div>
                ))}
              </div>

              {/* Video Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center z-10">
                  <div className="w-32 h-32 mx-auto mb-4 bg-black/5 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-black/20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400">Hero Video Animation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner - Funding Announcement */}
          <div className="mt-8 max-w-[1094px] mx-auto">
            <div className="bg-[#D4FF00] border border-black rounded-full px-6 py-4 flex items-center justify-between flex-wrap gap-4">
              <div className="text-sm font-medium">
                SRE.ai has raised a $7.2M seed round, led by Salesforce Ventures!
              </div>
              <Link
                href="#"
                className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
