const beliefs = [
  {
    number: "01",
    title: "Memory Is the Foundation, Not a Feature",
    body: "An AI without memory is just a tool. An AI with memory becomes an assistant. LUCI unifies your meetings, videos, notes, and conversations into a long-term memory that keeps growing.",
  },
  {
    number: "02",
    title: "Your Data Is Yours. No Exceptions.",
    body: "Every LUCI user gets their own dedicated VM instance. Your memory lives on your disk, shared with no one, never used to train models. Trust comes from transparency, not promises.",
  },
  {
    number: "03",
    title: "AI Should Come to You",
    body: "LUCI plugs directly into Telegram, WhatsApp, and the platforms you already use. No extra app to install, no habits to change.",
  },
  {
    number: "04",
    title: "Understanding Is the Start. Execution Is the Goal.",
    body: "Most AI stops at \u201Chere\u2019s a suggestion.\u201D LUCI goes all the way: from capture to comprehension, from comprehension to task, from task to done.",
  },
];

export default function OurBeliefs() {
  return (
    <section className="px-6 py-28 sm:py-20 bg-web-bg-0">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-text-2 mb-5">
          03 &mdash; Our Beliefs
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-0 leading-[1.08] tracking-tight max-w-2xl mb-16">
          A Few Things We Hold True
        </h2>

        {/* Stacked belief rows */}
        <div className="space-y-0 divide-y divide-grey-1">
          {beliefs.map((b) => (
            <div
              key={b.number}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1.4fr] gap-4 md:gap-8 py-10 first:pt-0 last:pb-0 items-baseline"
            >
              {/* Number */}
              <span className="text-[2rem] font-bold text-grey-2 font-mono leading-none md:pt-1 transition-colors duration-300 group-hover:text-primary">
                {b.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-0 leading-snug">
                {b.title}
              </h3>

              {/* Body */}
              <p className="text-[0.95rem] text-text-1 leading-[1.8]">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
