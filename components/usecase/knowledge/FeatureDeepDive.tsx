import {
  Play,
  Volume2,
  Circle,
  Contrast,
  LayoutGrid,
  Settings,
  Maximize,
  CheckCircle2,
} from "lucide-react";
import ChatVisual from "./ChatVisual";

const features = [
  {
    title: "You Saw It Once. Never Hunt for It Again.",
    desc: "You know you read that growth number somewhere — but was it a report? A slide deck? A video? Instead of re-opening every file, just describe what you vaguely remember in plain language. LUCI pinpoints the exact source, page, and paragraph so you never waste time retracing your steps.",
    bg: "/landscape/lan2.webp",
  },
  {
    title: "Capture a Thought. Use It When It Matters.",
    desc: "A spark during your commute podcast, a line worth flagging mid-meeting, a late-night connection between two ideas — these used to vanish or rot in a note app you'd never reopen. Now just drop a message in Telegram or WhatsApp. LUCI tags it with context and writes it into long-term memory, searchable whenever you need it.",
    bg: "/landscape/lan7.webp",
    reverse: true,
  },
  {
    title: "Scattered Pieces, Automatically Connected",
    desc: "The same topic lives in a meeting recording, two emails, a PDF, and a quick note you fired off in Telegram. You used to piece it together yourself. Now LUCI recognizes these fragments belong to the same context — search from any entry point and the entire information chain surfaces.",
    bg: "/landscape/lan4.webp",
  },
  {
    title: "All Your Sources, One Knowledge Hub",
    desc: "Pull insights from YouTube, online courses, podcasts, and research recordings into a single, organized knowledge base. No more scattered bookmarks and half-finished notes.",
    bg: "/landscape/lan9.webp",
    reverse: true,
  },
];

/* slug = simple-icons CDN name, color = brand hex */
const tools = [
  [
    { name: "Google Drive", slug: "googledrive", color: "4285F4" },
    { name: "Notion", slug: "notion", color: "000000" },
    { name: "Zoom", slug: "zoom", color: "0B5CFF" },
    { name: "Gmail", slug: "gmail", color: "EA4335" },
    { name: "Google Calendar", slug: "googlecalendar", color: "4285F4" },
  ],
  [
    { name: "TikTok", slug: "tiktok", color: "000000" },
    { name: "YouTube", slug: "youtube", color: "FF0000" },
    { name: "Loom", slug: "loom", color: "625DF5" },
    { name: "Figma", slug: "figma", color: "F24E1E" },
    { name: "GitHub", slug: "github", color: "181717" },
  ],
  [
    { name: "Jira", slug: "jira", color: "0052CC" },
    { name: "Linear", slug: "linear", color: "5E6AD2" },
    { name: "Dropbox", slug: "dropbox", color: "0061FF" },
    { name: "Asana", slug: "asana", color: "F06A6A" },
  ],
];

const siUrl = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

function ToolsGridMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="flex flex-col w-full max-w-[480px] gap-6 items-center justify-center bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
        <h4 className="text-[17px] font-semibold text-text-0">
          Connect the tools you already use
        </h4>
        <div className="w-full h-px bg-grey-1" />
        {tools.map((row, ri) => (
          <div key={ri} className="flex flex-wrap justify-center gap-3">
            {row.map((t) => (
              <div
                key={t.slug}
                className="flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-grey-1 shadow-sm"
                title={t.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={siUrl(t.slug, t.color)}
                  alt={t.name}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const actionItems = [
  { text: "Review notes on attention mechanism basics", done: true },
  { text: "Compare transformer vs RNN performance benchmarks", done: true },
  { text: "Read the referenced Vaswani et al. 2017 paper", done: false },
  { text: "Try fine-tuning exercise from the tutorial", done: false },
];

/* ─── Video Player + Summary Mockup ─── */
function VideoSummaryMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="flex flex-col md:flex-row w-full max-w-[720px] gap-3 overflow-hidden rounded-xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
        {/* Left: Video area */}
        <div
          className="relative md:w-1/2 shrink-0 aspect-[16/9] md:aspect-auto bg-grey-8 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero/me3.webp)" }}
        >
          {/* Recording dot */}
          <div className="absolute bottom-8 left-3 h-2 w-2 rounded-full bg-red-500" />

          {/* Bottom controls bar */}
          <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center gap-2">
              <Play className="h-3 w-3 text-white fill-white" />
              <Volume2 className="h-3 w-3 text-white/80" />
              <span className="text-[10px] text-white/80 font-medium tabular-nums">
                0:01<span className="text-white/50">ₐ</span> / 11:59:59
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Contrast className="h-3 w-3 text-white/70" />
              <LayoutGrid className="h-3 w-3 text-white/70" />
              <Settings className="h-3 w-3 text-white/70" />
              <Circle className="h-3 w-3 text-white/70" />
              <Maximize className="h-3 w-3 text-white/70" />
            </div>
          </div>
        </div>

        {/* Right: Tabs + Summary */}
        <div className="flex flex-col md:w-1/2 min-h-0 overflow-y-auto">
          {/* Tabs */}
          <div className="flex gap-0 border-b border-grey-1 px-4 pt-1">
            <button className="px-3 py-2 text-[11px] text-text-3">
              Transcription
            </button>
            <button className="px-3 py-2 text-[11px] font-medium text-text-0 border-b-2 border-primary">
              Summary &amp; Action Items
            </button>
          </div>

          {/* Summary content */}
          <div className="flex flex-col gap-3 px-4 py-3">
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold text-text-3 uppercase tracking-wide">
                Summary
              </span>
              <p className="text-[11px] leading-relaxed text-text-1">
                This lecture covered the fundamentals of transformer
                architectures, focusing on attention mechanisms and positional
                encoding. Key topics included self-attention vs cross-attention
                and practical tips for fine-tuning pre-trained models on
                domain-specific data.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold text-text-3 uppercase tracking-wide">
                Action Items
              </span>
              <div className="flex flex-col gap-1">
                {actionItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {item.done ? (
                      <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                    ) : (
                      <div className="h-3 w-3 rounded-full border-[1.5px] border-grey-2 shrink-0" />
                    )}
                    <span
                      className={`text-[11px] ${item.done ? "text-text-1" : "text-text-2"}`}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureDeepDive() {
  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-28">
        {/* ─── Header ─── */}
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-center text-text-0">
            How LUCI Empowers Knowledge Workers
          </h2>
          <p className="text-base text-text-2 max-w-2xl mx-auto text-center leading-relaxed">
            From auto-summarized lectures to cross-source knowledge linking,
            LUCI handles the grunt work so you can focus on deep thinking.
          </p>
        </div>

        {/* ─── Feature Cards ─── */}
        <div className="flex flex-col gap-16 md:gap-32">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col ${f.reverse ? "xl:flex-row-reverse" : "xl:flex-row"} xl:items-end gap-6 xl:gap-10`}
            >
              {/* Text */}
              <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
                <h3 className="text-[28px] font-bold leading-tight text-text-0">
                  {f.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-text-2">
                  {f.desc}
                </p>
              </div>

              {/* Visual */}
              <div
                className="relative flex flex-1 overflow-hidden rounded-[20px] min-h-[420px]"
                style={{
                  backgroundImage: `url(${f.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {i === 0 && <VideoSummaryMockup />}
                {i === 3 && <ToolsGridMockup />}
                {i === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/usecase-manage/vidmem.webp"
                      alt="Feature"
                      className="w-160  "
                    />
                  </div>
                )}
                {i === 1 && <ChatVisual />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
