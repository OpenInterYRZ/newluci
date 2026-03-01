'use client'

import Link from 'next/link'

export function SreFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Run reliability on autopilot. Turn uptime into upside.
              </h2>

              <div className="space-y-4">
                <Link
                  href="#"
                  className="inline-block px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Schedule a Deep Dive
                </Link>

                <div className="flex items-center gap-4 pt-4">
                  <span className="text-sm font-medium text-gray-700">Stay Updated</span>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-black"
                    />
                    <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/50 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">CTA Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Solutions */}
            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/salesforce" className="text-gray-400 hover:text-white transition-colors">
                    Salesforce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/command-center" className="text-gray-400 hover:text-white transition-colors">
                    Command Center
                  </Link>
                </li>
                <li>
                  <Link href="/agent-assist" className="text-gray-400 hover:text-white transition-colors">
                    Agent Assist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://docs.sre.ai/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    Technical Docs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:info@sre.ai" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-800">
            <Link href="https://www.ycombinator.com/companies/sre-ai" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              Y Combinator
            </Link>
            <Link href="https://www.linkedin.com/company/sreai/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="https://x.com/sreai_team" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              X
            </Link>
            <Link href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              Slack
            </Link>
          </div>

          {/* Bottom Fine Print */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>©RealSite Inc. 2025</p>
            <div className="flex items-center gap-4">
              <Link href="https://trust.sre.ai/" target="_blank" className="hover:text-white transition-colors">
                AICPA SOC 2
              </Link>
              <span>•</span>
              <span>HIPAA Compliant</span>
            </div>
          </div>
        </div>

        {/* Footer Gradient Bar */}
        <div className="mt-12 bg-gradient-to-r from-[#FF00FF] via-[#D4FF00] to-[#80D4FF] h-2"></div>
        <div className="bg-gray-900 py-4">
          <div className="container mx-auto px-6 flex items-center justify-center gap-4">
            <span className="text-sm text-gray-400">AI-Powered Reliability for Modern Enterprise Software Teams</span>
            <div className="w-6 h-6 bg-white rounded-sm"></div>
          </div>
        </div>
      </footer>
    </>
  )
}
