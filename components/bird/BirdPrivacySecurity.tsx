'use client'

export default function BirdPrivacySecurity() {
  return (
    <section className="bg-[#F5F1E8] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-serif text-4xl font-normal lg:text-5xl">
          Your privacy. Our priority.
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-sm leading-relaxed text-gray-700">
          Enterprise-grade security with complete transparency
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Privacy Card 1 */}
          <div className="rounded-2xl border border-gray-300 bg-white p-8">
            <div className="mb-4 text-2xl">🔒</div>
            <h3 className="mb-2 font-serif text-lg">End-to-end encrypted</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Your data is encrypted both at rest and in transit
            </p>
          </div>

          {/* Privacy Card 2 */}
          <div className="rounded-2xl border border-gray-300 bg-white p-8">
            <div className="mb-4 text-2xl">👤</div>
            <h3 className="mb-2 font-serif text-lg">You're in control</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Choose exactly what Littlebird can and cannot see
            </p>
          </div>

          {/* Privacy Card 3 */}
          <div className="rounded-2xl border border-gray-300 bg-white p-8">
            <div className="mb-4 text-2xl">🚫</div>
            <h3 className="mb-2 font-serif text-lg">Never sold or shared</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Your data stays yours and is never used for AI training
            </p>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium">
            SOC 2 Type II
          </div>
          <div className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium">
            GDPR Compliant
          </div>
          <div className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium">
            CCPA Compliant
          </div>
        </div>
      </div>
    </section>
  )
}
