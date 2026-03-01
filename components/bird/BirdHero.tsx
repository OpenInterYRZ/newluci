'use client'

export default function BirdHero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F1E8] px-6 pb-0 pt-4">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
          <span className="font-serif text-lg font-medium">Littlebird</span>
        </div>
        <div className="hidden gap-8 md:flex">
          <button className="text-sm hover:opacity-70">Features ▼</button>
          <button className="text-sm hover:opacity-70">Use Cases ▼</button>
          <button className="text-sm hover:opacity-70">Company ▼</button>
          <button className="text-sm hover:opacity-70">Pricing</button>
          <button className="text-sm hover:opacity-70">FAQ</button>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50">
            Sign in
          </button>
          <button className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
            Download
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-3xl pb-8 pt-20 text-center">
        <h1 className="mb-6 font-serif text-5xl font-normal leading-tight lg:text-6xl">
          The AI assistant that
          <br />
          thinks like you
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-700">
          Recall any detail across all of your meetings, documents, and emails.
          <br />
          Perfect memory. Full context. Zero effort.
        </p>
        <button className="rounded-full bg-black px-6 py-3 text-sm text-white hover:bg-gray-800">
          Download for Mac
        </button>
      </div>

      {/* Hero Image */}
      <div className="mx-auto max-w-6xl">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-t-3xl bg-gradient-to-b from-sky-300 to-sky-400">
          {/* Placeholder for outdoor scene - blue sky, clouds, grass */}
          <div className="relative h-full w-full">
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-green-500 to-green-400" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2xvdWRzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGVsbGlwc2UgY3g9IjUwIiBjeT0iNTAiIHJ4PSI0MCIgcnk9IjI1IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45Ii8+PGVsbGlwc2UgY3g9IjE1MCIgY3k9IjMwIiByeD0iNTAiIHJ5PSIzMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjbG91ZHMpIi8+PC9zdmc+')] opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
