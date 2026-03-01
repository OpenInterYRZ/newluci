'use client'

export function SreValueProposition() {
  const benefits = [
    {
      number: '1',
      title: 'Unify control in a singular Command Center.',
    },
    {
      number: '2',
      title: 'Predict and prevent errors.',
    },
    {
      number: '3',
      title: 'De-risk deployments across any environment.',
    },
    {
      number: '4',
      title: 'Streamline collaboration with seamless integration.',
    },
    {
      number: '5',
      title: 'Prepare for continuity and protect against loss.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16">
          Why SRE.ai?
        </h2>

        <div className="space-y-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="group relative border border-gray-300 rounded-2xl overflow-hidden hover:border-black transition-all duration-300"
            >
              <div className="flex items-start gap-6 p-6 md:p-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {benefit.number}
                  </div>
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {benefit.title}
                  </h3>
                </div>

                {/* Animation Placeholder */}
                <div className="hidden lg:block w-64 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Lottie Animation</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
