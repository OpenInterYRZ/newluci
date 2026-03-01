'use client'

export default function BirdFeatureBenefits() {
  return (
    <section className="bg-[#F5F1E8] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center font-serif text-4xl font-normal lg:text-5xl">
          How Littlebird works
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-serif text-xl">Observes</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Littlebird watches what you do across all of your apps and meetings
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-serif text-xl">Remembers</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Stores context securely so you can recall any detail instantly
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-serif text-xl">Assists</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Answers questions and helps you work faster with full context
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
