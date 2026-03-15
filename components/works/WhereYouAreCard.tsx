import Image from "next/image";

function SlackIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

const platforms = [
  { name: "WhatsApp", slug: "whatsapp", color: "#25D366" },
  { name: "Telegram", slug: "telegram", color: "#26A5E4" },
  { name: "Messenger", slug: "messenger", color: "#0084FF" },
  { name: "Discord", slug: "discord", color: "#5865F2" },
  { name: "Signal", slug: "signal", color: "#3A76F0" },
  { name: "Slack", slug: "slack", color: "#4A154B" },
  { name: "Viber", slug: "viber", color: "#7360F2" },
  { name: "LINE", slug: "line", color: "#00C300" },
];

export default function WhereYouAreCard() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-end gap-6 md:gap-10">
      {/* ─── Title + Desc ─── */}
      <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
        <h3 className="text-2xl md:text-[28px] font-semibold md:font-bold leading-tight text-text-0">
          Where You Already Are
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          No new app to download. LUCI lives inside the messaging platforms you
          already use every day — just start chatting.
        </p>
      </div>

      {/* ─── Mockup: Icon Grid ─── */}
      <div
        className="flex flex-1 items-center justify-center overflow-hidden rounded-[20px] p-5 md:p-10"
        style={{
          backgroundImage: "url(/pb.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 400,
        }}
      >
        <div className="rounded-2xl bg-web-bg-0 px-10 py-8 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col items-center gap-2.5"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: p.color }}
                >
                  {p.slug === "slack" ? (
                    <SlackIcon />
                  ) : (
                    <Image
                      src={`https://cdn.simpleicons.org/${p.slug}/white`}
                      alt={p.name}
                      width={28}
                      height={28}
                      unoptimized
                    />
                  )}
                </div>
                <span className="text-xs font-medium text-text-0">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
