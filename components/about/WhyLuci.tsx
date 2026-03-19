import Image from "next/image";

const painPoints = [
  {
    text: "Last week\u2019s meeting notes? Gone. Buried in some app you\u2019ve already forgotten about.",
    label: "Lost context",
    image: "/about/card1.webp",
    accent: false,
  },
  {
    text: "AI is brilliant \u2014 yet every conversation starts at zero. Like a genius with amnesia.",
    label: "No memory",
    image: "/about/card2.webp",
    accent: false,
  },
  {
    text: "You\u2019d love AI to truly know you. But hand over all your data to a black box? No thanks.",
    label: "No trust",
    image: "/about/card3.webp",
    accent: true,
  },
];

export default function WhyLuci() {
  return (
    <section className="px-6 py-28 sm:py-20 bg-web-bg-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-text-2 mb-5">
            Why we built LUCI
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-text-0 leading-[1.08] tracking-tight">
            The Problem Is Simple
          </h2>
        </div>

        {/* Narrative + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — narrative */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <p className="text-[1.05rem] text-text-1 leading-[1.9]">
              Every day you produce ideas, conversations, meetings, and
              notes&nbsp;&mdash; scattered across a dozen apps, eventually
              forgotten.
            </p>
            <p className="mt-5 text-[1.05rem] text-text-1 leading-[1.9]">
              Today&rsquo;s AI assistants are powerful, but they don&rsquo;t
              know <em className="text-text-0 not-italic font-semibold">you</em>
              . Every chat resets to a blank slate.
            </p>
            <div className="mt-8 w-12 h-0.5 bg-[#C41E3A]" />
          </div>

          {/* Right — pain-point cards */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="group relative flex items-center rounded-xl bg-bg-0 border border-grey-1 overflow-hidden transition-shadow duration-300 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Image */}
                <div className="relative w-40 h-[140px] shrink-0">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 px-6 py-5 flex flex-col gap-2">
                  <span
                    className={`self-start rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white ${
                      item.accent ? "bg-[#C41E3A]" : "bg-[#0F0F0F]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <p className="text-sm text-text-1 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
