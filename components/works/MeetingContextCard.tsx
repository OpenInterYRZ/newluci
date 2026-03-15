import Image from "next/image";

const contextItems = [
  "Discussed Q4 budget allocation last Tuesday — Alex proposed shifting 20% to digital campaigns.",
  "Open action item: Alex to send revised proposal by Friday. Not yet received.",
  "Last meeting flagged a risk: potential vendor delay impacting launch timeline.",
];

export default function MeetingContextCard() {
  return (
    <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
      {/* ─── Left: Title + Desc ─── */}{" "}
      <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
        <h3 className="text-2xl md:text-[28px] font-semibold md:font-bold leading-tight text-text-0">
          Context-Aware Meeting Prep
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          LUCI surfaces relevant past context before every meeting — decisions,
          action items, and open threads — so you walk in fully prepared.
        </p>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-3xl flex items-center justify-center">
        <Image
          src="/landscape/lan10.webp"
          alt=""
          fill
          className="object-cover"
        />

        <div className="relative z-10 m-5 md:m-6 overflow-hidden rounded-2xl bg-bg-0 shadow-lg p-5 max-w-100">
          <h4 className="text-base font-semibold text-text-0">
            Sales Review with Alex
          </h4>
          <p className="mt-1 text-sm text-neutral-400">10:30–11:30 AM</p>

          <div className="my-4 h-px bg-neutral-100" />

          <p className="text-sm font-medium text-neutral-700">Past Context</p>

          <ul className="mt-3 flex flex-col gap-3">
            {contextItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-neutral-600"
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-amber-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* ─── Right: Card with background ─── */}
    </div>
  );
}
