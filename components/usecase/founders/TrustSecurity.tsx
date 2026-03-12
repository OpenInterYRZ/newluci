import { FileText, Scale } from "lucide-react";

const badges = [
  {
    icon: "/soc2.svg",
    title: "SOC 2 Type II",
    desc: "Audited annually for security, availability, and confidentiality controls.",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    icon: "/gdpr.svg",
    title: "GDPR Compliant",
    desc: "Full data processing agreements, right to erasure, and EU data residency options.",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Privacy Policy",
    desc: "Transparent data practices. We never sell your data or train on your content.",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Terms of Service",
    desc: "Clear, fair terms. You own your data — we just help you understand it.",
    color: "#E8622C",
    bg: "#FFF7ED",
  },
];

export default function TrustSecurity() {
  return (
    <section className="w-full">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Trust & Security
          </span>
          <h2 className="mt-3 text-[28px] md:text-[40px] font-semibold leading-tight text-text-0">
            Enterprise-grade security, built in
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-text-2 max-w-[560px] mx-auto">
            Your team&apos;s data is sensitive. LUCI is built from the ground up
            with security and compliance at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                {typeof item.icon === "string" ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 object-contain"
                  />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="text-[16px] font-semibold text-text-0">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
