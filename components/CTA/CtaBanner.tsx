"use client";

export type CtaBannerConfig = {
  heading?: string;
  subtext?: string | React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
};

const defaultConfig: Required<Omit<CtaBannerConfig, "subtext">> & {
  subtext: string | React.ReactNode;
} = {
  heading: "Get started with LUCI",
  subtext: (
    <>
      Download LUCI for free and start accelerating your work.
      <br /> No setup or integrations required.
    </>
  ),
  buttonText: "Download for Mac",
  buttonHref: "#",
};

export default function CtaBanner(props?: CtaBannerConfig) {
  const { heading, subtext, buttonText, buttonHref } = {
    ...defaultConfig,
    ...props,
  };

  return (
    <div className="w-full bg-web-bg-0 ">
      <section
        className="relative w-full overflow-hidden rounded-[24px] mx-auto max-w-[1360px]"
        style={{
          backgroundImage: "url(/landscape/lan8.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/30" />

        <div className="relative flex flex-col items-center px-10 py-24 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-5xl font-semibold leading-tight text-text-0 max-w-3xl mb-4">
            {heading}
          </h2>

          {/* Subtext */}
          <p className="text-[16px] leading-relaxed text-text-2 max-w-[480px] mb-10">
            {subtext}
          </p>

          {/* Download button */}
          <a
            href={buttonHref}
            className="inline-flex items-center gap-2.5 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-xl px-6 py-3.5 text-[15px] font-medium transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {buttonText}
          </a>
        </div>
      </section>
    </div>
  );
}
