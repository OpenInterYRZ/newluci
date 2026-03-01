'use client'

export default function BirdProductDemo() {
  return (
    <section className="bg-[#F5F1E8] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center font-serif text-4xl font-normal lg:text-5xl">
          Make every day<br />more productive
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Chat Card */}
          <div className="group overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white">
            <div className="mb-6">
              <h3 className="mb-2 font-serif text-2xl">Chat</h3>
              <p className="text-sm text-white/90">
                Query across all of your work without catching AI up on context
              </p>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/10 backdrop-blur-sm" />
          </div>

          {/* Meeting Notes Card */}
          <div className="overflow-hidden rounded-3xl bg-black p-8 text-white">
            <div className="mb-6">
              <h3 className="mb-2 font-serif text-2xl">Meeting notes</h3>
              <p className="text-sm text-white/80">
                Auto-transcribed, summarized, and searchable
              </p>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/5" />
          </div>

          {/* Routines Card */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-lime-400 to-green-500 p-8 text-black">
            <div className="mb-6">
              <h3 className="mb-2 font-serif text-2xl">Routines</h3>
              <p className="text-sm text-black/80">
                Personalized insights delivered on your schedule
              </p>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl bg-black/5" />
          </div>

          {/* Watch Video Card */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-sky-300 to-blue-400">
              <div className="flex h-full items-center justify-center">
                <button className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition hover:scale-110">
                  <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium">Watch video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
