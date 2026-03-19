"use client";

import GradientButton from "../ui/GradientButton";

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
        className="relative w-full overflow-hidden rounded-[24px] mx-auto max-w-[1300px]"
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
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-text-0 max-w-3xl mb-4">
            {heading}
          </h2>

          {/* Subtext */}
          <p className="text-[16px] leading-relaxed text-text-2 max-w-[480px] mb-10">
            {subtext}
          </p>

          <GradientButton href="/download" text="Download for Mac" download />
        </div>
      </section>
    </div>
  );
}
