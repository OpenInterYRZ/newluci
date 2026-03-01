import VideoPlayer from "./VideoPlayer";

interface Step {
  number: string;
  title: string;
  description: string;
  videoSrc: string;
}

interface TimelineStepProps {
  step: Step;
  position: "left" | "right";
  index: number;
}

export default function TimelineStep({
  step,
  position,
  index,
}: TimelineStepProps) {
  return (
    <div className="relative flex items-center justify-center min-h-96 md:min-h-112 lg:min-h-125">
      {/* Timeline Dot - Desktop */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-text-0 z-10" />

      {/* Timeline Dot - Mobile/Tablet */}
      <div className="lg:hidden absolute left-5 md:left-10 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent border-4 border-text-0 z-10" />

      {/* Card Container */}
      <div
        className={`
          w-full px-6 md:px-12 lg:px-0
          flex ${position === "left" ? "lg:justify-start" : "lg:justify-end"}
        `}
      >
        <div
          className="
            w-full max-w-125
            bg-bg-1 rounded-2xl p-6 md:p-8
            ml-12 md:ml-20 lg:ml-0
          "
        >
          {/* Step Number */}
          <div className="mb-6">
            <span className="font-mono text-4xl md:text-5xl text-text-0 font-bold">
              {step.number}
            </span>
          </div>

          {/* Video Player */}
          <div className="mb-6">
            <video src={step.videoSrc} />
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl md:text-3xl text-text-0 text-center mb-4">
            {step.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-sm md:text-base text-text-2 text-center leading-relaxed whitespace-pre-line">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
