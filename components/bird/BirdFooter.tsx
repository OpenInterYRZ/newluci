'use client'

export default function BirdFooter() {
  const footerLinks = {
    Product: ['Chat', 'Meeting notes', 'Routines', 'Pricing', 'Changelog'],
    Company: ['About', 'Careers', 'Blog', 'Press Kit'],
    Resources: ['Documentation', 'API', 'Support', 'Community'],
    Legal: ['Privacy', 'Terms', 'Security', 'DPA'],
  }

  return (
    <footer className="border-t border-gray-300 bg-[#F5F1E8] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="font-serif text-lg font-medium">Littlebird</span>
            </div>
            <p className="text-xs text-gray-600">
              The AI assistant that<br />thinks like you
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-medium">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-8 md:flex-row">
          <div className="text-xs text-gray-600">
            © 2026 Littlebird. All rights reserved.
          </div>

          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-gray-600 hover:text-gray-900"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
