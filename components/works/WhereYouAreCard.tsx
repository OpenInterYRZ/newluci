import Image from "next/image";

const platforms = [
  { name: "WhatsApp", slug: "whatsapp", color: "#25D366" },
  { name: "Telegram", slug: "telegram", color: "#26A5E4" },
  { name: "Messenger", slug: "messenger", color: "#0084FF" },
  { name: "Discord", slug: "discord", color: "#5865F2" },
  { name: "Signal", slug: "signal", color: "#3A76F0" },
  { name: "WeChat", slug: "wechat", color: "#07C160" },
  { name: "Viber", slug: "viber", color: "#7360F2" },
  { name: "LINE", slug: "line", color: "#00C300" },
];

export default function WhereYouAreCard() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-end gap-6 md:gap-10">
      {/* ─── Title + Desc ─── */}
      <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
        <h3 className="text-[28px] font-bold leading-tight text-text-0">
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
            {platforms.map((p, i) => (
              <div
                key={p.name}
                className="group flex flex-col items-center gap-2.5"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: p.color }}
                >
                  <Image
                    src={`https://cdn.simpleicons.org/${p.slug}/white`}
                    alt={p.name}
                    width={28}
                    height={28}
                    unoptimized
                  />
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
