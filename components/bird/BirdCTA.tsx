'use client'

export default function BirdCTA() {
  return (
    <section className="bg-[#F5F1E8] px-6 py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-12 text-center text-white">
        <h2 className="mb-4 font-serif text-4xl font-normal lg:text-5xl">
          Ready to work smarter with<br />Littlebird?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/90">
          Join thousands of professionals who never forget important details
        </p>
        <button className="rounded-full bg-white px-6 py-3 text-sm text-black hover:bg-gray-100">
          Download for Mac
        </button>
      </div>
    </section>
  )
}
