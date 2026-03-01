'use client'

export default function BirdTestimonials() {
  return (
    <section className="bg-[#F5F1E8] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center font-serif text-4xl font-normal lg:text-5xl">
          What our users say
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Sarah Chen', role: 'Product Manager', quote: 'Finally, an AI that actually remembers our product decisions. Game changer.' },
            { name: 'Michael Rodriguez', role: 'Engineering Lead', quote: 'It\'s like having perfect recall of every technical discussion we\'ve had.' },
            { name: 'Emma Thompson', role: 'Sales Director', quote: 'Never forget a client detail again. Littlebird keeps everything accessible.' },
            { name: 'David Park', role: 'Founder', quote: 'This is the personal assistant I\'ve always wanted but never could afford.' },
            { name: 'Jessica Wu', role: 'Marketing Manager', quote: 'Context switching used to kill my productivity. Not anymore.' },
            { name: 'Alex Johnson', role: 'Designer', quote: 'It finds references from months ago that I completely forgot existed.' },
          ].map((testimonial, i) => (
            <div key={i} className="rounded-2xl border border-gray-300 bg-white p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
                <div>
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
