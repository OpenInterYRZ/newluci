'use client'

import { useState } from 'react'

export default function BirdFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How does Littlebird access my data?',
      answer: 'Littlebird runs locally on your device and only observes applications you explicitly give it permission to access. You have complete control over what it can see.',
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes. All data is encrypted end-to-end, both at rest and in transit. We\'re SOC 2 Type II certified and comply with GDPR and CCPA regulations.',
    },
    {
      question: 'What platforms does Littlebird support?',
      answer: 'Littlebird is currently available for macOS. Windows and Linux support are in development.',
    },
    {
      question: 'Can I use Littlebird offline?',
      answer: 'Core features work offline, though some AI capabilities require an internet connection for processing.',
    },
    {
      question: 'How much does it cost?',
      answer: 'We offer a free tier with basic features, and premium plans starting at $20/month for advanced capabilities and unlimited history.',
    },
    {
      question: 'Do you train AI models on my data?',
      answer: 'Never. Your data is yours alone and is never used to train AI models or shared with third parties.',
    },
    {
      question: 'Can I delete my data?',
      answer: 'Yes. You can delete specific memories or your entire data history at any time from the settings.',
    },
    {
      question: 'How is this different from ChatGPT?',
      answer: 'Unlike ChatGPT, Littlebird has continuous context about your work across all your apps. You don\'t need to manually provide background information - it already knows.',
    },
  ]

  return (
    <section className="bg-[#F5F1E8] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center font-serif text-4xl font-normal lg:text-5xl">
          Frequently asked<br />questions
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-sm leading-relaxed text-gray-700">
          Everything you need to know about Littlebird
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-2xl border border-gray-300 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition hover:bg-gray-50"
              >
                <span className="font-serif text-base">{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-gray-200 bg-gray-50 px-6 py-5">
                  <p className="text-sm leading-relaxed text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
