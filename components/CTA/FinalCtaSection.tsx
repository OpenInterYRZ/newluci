export default function FinalCtaSection() {
  return (
    <section className="bg-bg-0 w-full flex items-center justify-center">
      {/* CTA Background with gradient effect */}
      <div className="bg-bg-1 w-full flex flex-col items-center gap-[32px] py-[120px] px-[80px] relative overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-[#785DE140] blur-3xl" />

        {/* CTA Content */}
        <div className="flex flex-col items-center gap-[24px] relative z-10 max-w-[900px]">
          {/* Tag */}
          <div className="bg-[#FF5C0020] rounded-[20px] py-[8px] px-[20px]">
            <span className="text-primary font-mono text-[13px] font-semibold tracking-[1px]">
              Start Your AI Assistant Journey
            </span>
          </div>

          {/* Title */}
          <h2 className="text-text-0 font-serif text-[64px] tracking-[-2px] text-center">
            Get Started in 3 Minutes
          </h2>

          {/* Subtitle */}
          <p className="text-text-1 font-sans text-[20px] leading-[1.6] text-center">
            Cloud-hosted or self-hosted — choose what works best for you
          </p>

          {/* Button Row */}
          <div className="flex items-center gap-[20px]">
            <button className="bg-primary rounded-[12px] py-[16px] px-[32px] hover:bg-primary-hover transition-colors">
              <span className="text-white font-sans text-[16px] font-bold">
                Try Cloud Free
              </span>
            </button>
            <button className="bg-transparent border-2 border-text-0/20 rounded-[12px] py-[16px] px-[32px] hover:border-text-0/40 transition-colors">
              <span className="text-text-0 font-sans text-[16px] font-semibold">
                Download Local
              </span>
            </button>
          </div>

          {/* Trust Row */}
          <div className="flex items-center gap-[32px]">
            <div className="flex items-center gap-[6px]">
              <span className="text-[#22C55E] font-mono text-[14px] font-bold">✓</span>
              <span className="text-text-1 font-sans text-[13px]">No credit card required</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <span className="text-[#22C55E] font-mono text-[14px] font-bold">✓</span>
              <span className="text-text-1 font-sans text-[13px]">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <span className="text-[#22C55E] font-mono text-[14px] font-bold">✓</span>
              <span className="text-text-1 font-sans text-[13px]">Export data anytime</span>
            </div>
          </div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] rounded-full bg-[#22C55E30] blur-3xl" />
      </div>
    </section>
  );
}
