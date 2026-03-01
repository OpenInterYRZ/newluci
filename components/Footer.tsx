export default function Footer() {
  return (
    <footer className="bg-bg-0 w-full">
      <div className="py-[60px] px-[80px] flex flex-col gap-[40px]">
        {/* Footer Top */}
        <div className="flex gap-[80px]">
          {/* Footer Brand */}
          <div className="w-[300px] flex flex-col gap-[16px]">
            <div className="text-primary font-mono text-[24px] font-bold tracking-[2px]">
              LUCI
            </div>
            <p className="text-text-3 font-sans text-[13px] leading-[1.6]">
              See, Remember & Act<br />
              Remember everything, get things done
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex-1 flex gap-[60px]">
            {/* Column 1 - Product */}
            <div className="flex-1 flex flex-col gap-[12px]">
              <h3 className="text-text-0 font-sans text-[14px] font-semibold">
                Product
              </h3>
              <a href="#features" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Pricing
              </a>
              <a href="#download" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Download
              </a>
              <a href="#changelog" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Changelog
              </a>
            </div>

            {/* Column 2 - Resources */}
            <div className="flex-1 flex flex-col gap-[12px]">
              <h3 className="text-text-0 font-sans text-[14px] font-semibold">
                Resources
              </h3>
              <a href="#docs" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Docs
              </a>
              <a href="#api" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                API Reference
              </a>
              <a href="#community" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Community
              </a>
              <a href="#blog" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Blog
              </a>
            </div>

            {/* Column 3 - Company */}
            <div className="flex-1 flex flex-col gap-[12px]">
              <h3 className="text-text-0 font-sans text-[14px] font-semibold">
                Company
              </h3>
              <a href="#about" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                About
              </a>
              <a href="#team" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Team
              </a>
              <a href="#careers" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Careers
              </a>
              <a href="#contact" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center gap-[40px] pt-[20px] border-t border-grey-2">
          <span className="text-text-3 font-sans text-[13px]">
            © 2026 LUCI. All rights reserved.
          </span>
          <div className="flex gap-[20px] ml-auto">
            <a href="#twitter" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
              Twitter
            </a>
            <a href="#github" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
              GitHub
            </a>
            <a href="#discord" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
              Discord
            </a>
            <a href="#linkedin" className="text-text-1 font-sans text-[13px] hover:text-text-0 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
