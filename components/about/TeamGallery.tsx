import Image from "next/image";

const photos = [
  { src: "/about/about1.webp", alt: "Team outing" },
  { src: "/about/about2.webp", alt: "Conference talk" },
  { src: "/about/about4.webp", alt: "Team event" },
];

const stats = [
  { value: "30+", label: "Team Members" },
  { value: "2", label: "Countries" },
  { value: "1", label: "Mission" },
];

export default function TeamGallery() {
  return (
    <section className="px-6 py-24 sm:py-32 bg-web-bg-0">
      <div className="max-w-6xl mx-auto">
        {/* Header + stats inline */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-text-2 mb-5">
              04 &mdash; The Team
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-0 leading-[1.08] tracking-tight">
              About the Team
            </h2>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-right">
                <span className="block text-3xl sm:text-4xl font-bold text-text-0 tracking-tight leading-none">
                  {s.value}
                </span>
                <span className="mt-1.5 block text-xs font-medium uppercase tracking-wider text-text-2">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo mosaic — asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Large hero photo */}
          <div className="sm:col-span-7 relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Right column — two stacked photos */}
          <div className="sm:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] flex-1">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] flex-1">
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
