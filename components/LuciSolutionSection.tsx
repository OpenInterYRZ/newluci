import TimelineStep from './solution/TimelineStep';

const steps = [
  {
    number: '01',
    title: 'See',
    description: 'Auto-record video\nand dialogue during meetings',
    videoSrc: '/videos/see-demo.mp4',
  },
  {
    number: '02',
    title: 'Remember',
    description: 'Extract key information\nand store in knowledge base',
    videoSrc: '/videos/remember-demo.mp4',
  },
  {
    number: '03',
    title: 'Act',
    description: 'Execute tasks automatically\nbased on meeting outcomes',
    videoSrc: '/videos/act-demo.mp4',
  },
  {
    number: '04',
    title: 'Notify',
    description: 'Send updates and reminders\nto relevant team members',
    videoSrc: '/videos/notify-demo.mp4',
  },
];

export default function LuciSolutionSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-0 mb-4">
            How LUCI Works
          </h2>
          <p className="font-sans text-lg md:text-xl text-text-1">
            Fully automated workflow
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent/25 -translate-x-1/2" />

          {/* Vertical Timeline Line - Mobile/Tablet */}
          <div className="lg:hidden absolute left-5 md:left-10 top-0 bottom-0 w-[1px] bg-accent/25" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                step={step}
                position={index % 2 === 0 ? 'left' : 'right'}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
