import Badge from './Badge';
import StepCard from './StepCard';
import SeeScene from './scenes/SeeScene';
import RememberScene from './scenes/RememberScene';
import ActScene from './scenes/ActScene';
import NotifyScene from './scenes/NotifyScene';

export default function HowItWorksSection() {
  return (
    <section className="bg-bg-0 w-full flex flex-col gap-[60px] py-[100px] px-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[24px]">
        <Badge
          text="How It Works"
          dotColor="#785DE1"
          textColor="#785DE1"
          bgColor="#785DE118"
        />
        <h2 className="text-text-0 font-serif text-[48px] text-center">
          How LUCI Works
        </h2>
        <p className="text-text-2 font-sans text-[18px] text-center">
          Fully automated from meeting end to task completion
        </p>
      </div>

      {/* Steps Row */}
      <div className="flex gap-[0px] w-full items-start">
        <StepCard
          stepNumber="01"
          title="See"
          description="Auto-record video\nand dialogue during meetings"
          scene={<SeeScene />}
        />

        {/* Arrow */}
        <div className="w-[40px] h-[40px] flex items-center justify-center mt-[120px] flex-shrink-0">
          <span className="text-[#785DE160] text-[20px] font-bold">→</span>
        </div>

        <StepCard
          stepNumber="02"
          title="Remember"
          description="Build memory vault from\nvideo, extract key insights"
          scene={<RememberScene />}
        />

        {/* Arrow */}
        <div className="w-[40px] h-[40px] flex items-center justify-center mt-[120px] flex-shrink-0">
          <span className="text-[#785DE160] text-[20px] font-bold">→</span>
        </div>

        <StepCard
          stepNumber="03"
          title="Act"
          description="Auto-invoke Agents\nto complete tasks"
          scene={<ActScene />}
        />

        {/* Arrow */}
        <div className="w-[40px] h-[40px] flex items-center justify-center mt-[120px] flex-shrink-0">
          <span className="text-[#785DE160] text-[20px] font-bold">→</span>
        </div>

        <StepCard
          stepNumber="04"
          title="Notify"
          description="Notify you via chat\nwhen tasks are done"
          scene={<NotifyScene />}
        />
      </div>
    </section>
  );
}
