import Badge from './Badge';
import StatCard from './StatCard';
import TrustCard from './TrustCard';

export default function TrustSection() {
  const trustItems = [
    { iconColor: '#22C55E', title: 'E2E Encryption', description: 'End-to-end encryption' },
    { iconColor: '#785DE1', title: 'GDPR Compliant', description: 'EU data regulation compliant' },
    { iconColor: '#FF5C00', title: 'Open Source', description: 'Built on OpenClaw' },
    { iconColor: '#22C55E', title: 'SOC 2 Certified', description: 'Enterprise-grade security' },
    { iconColor: '#785DE1', title: 'Zero-Knowledge', description: 'Platform cannot access your data' },
  ];

  return (
    <section className="bg-bg-0 w-full flex flex-col items-center gap-[60px] py-[100px] px-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[24px]">
        <Badge
          text="Trust & Security"
          dotColor="#22C55E"
          textColor="#22C55E"
          bgColor="#22C55E15"
        />
        <h2 className="text-text-0 font-serif text-[48px] tracking-[-1px] text-center">
          Data & Trust
        </h2>
        <p className="text-text-1 font-sans text-[18px] leading-[1.6] text-center">
          Enterprise-grade security, full transparency over your data
        </p>
      </div>

      {/* Stats Row */}
      <div className="flex justify-center gap-[60px] w-full">
        <StatCard number="100%" label="Data Sovereignty" color="#22C55E" />
        <StatCard number="∞" label="Skills Extensions" color="#785DE1" />
        <StatCard number="3min" label="To Get Started" color="#FF5C00" />
      </div>

      {/* Marquee Label */}
      <div className="text-text-3 font-mono text-[13px] font-medium text-center">
        [ Marquee area — recommend using React Marquee component ]
      </div>

      {/* Trust Cards Container */}
      <div className="bg-bg-1 rounded-[12px] p-[24px] w-full">
        <div className="flex justify-center gap-[32px] flex-wrap">
          {trustItems.map((item, index) => (
            <TrustCard
              key={index}
              iconColor={item.iconColor}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
