'use client';

import { motion } from 'framer-motion';

export default function LindyFooter() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: 'Careers', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Trust Center', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
    social: [
      { name: 'Twitter', icon: '𝕏', href: '#' },
      { name: 'LinkedIn', icon: 'in', href: '#' },
      { name: 'YouTube', icon: '▶', href: '#' },
    ],
  };

  return (
    <footer className="relative py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl">
                🤖
              </div>
              <span className="text-2xl font-bold">Lindy</span>
            </div>
            <p className="text-gray-400">
              Your AI assistant that actually gets things done.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Compliance */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-2">
              {['GDPR', 'SOC 2', 'HIPAA'].map((badge) => (
                <div
                  key={badge}
                  className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lindy AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with 💜 for productivity
          </p>
        </div>
      </div>
    </footer>
  );
}
