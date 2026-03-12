interface ChatMessage {
  type: "user" | "assistant";
  text: string;
  isTaskResult?: boolean;
  linkText?: string;
  hasImages?: boolean;
}

const CHAT_MESSAGES: ChatMessage[] = [
  {
    type: "user",
    text: "What did the speaker say about attention heads in the last lecture?",
  },
  {
    type: "assistant",
    text: "Found him in these clips:",
  },
  {
    type: "assistant",
    text: "",
    hasImages: true,
  },
];

export default function ChatVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
      <div className="flex flex-col w-full max-w-[420px] rounded-xl border border-grey-1 bg-white/90 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
        {/* Messages */}
        <div className="px-5 py-4 flex flex-col gap-3">
          {CHAT_MESSAGES.map((msg, i) => (
            <div key={i}>
              {msg.type === "user" ? (
                <div className="flex justify-end">
                  <div className="bg-primary text-white text-[13px] leading-relaxed rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                    {msg.text}
                  </div>
                </div>
              ) : msg.hasImages ? (
                <div className="flex gap-2.5">
                  {["/hero/me1.webp", "/hero/me2.webp", "/hero/me3.webp"].map(
                    (src, n) => (
                      <img
                        key={n}
                        src={src}
                        alt=""
                        className="w-[80px] h-[80px] rounded-lg object-cover flex-shrink-0"
                      />
                    ),
                  )}
                </div>
              ) : (
                <div className="text-[13px] leading-relaxed text-text-1">
                  {msg.isTaskResult ? (
                    <span>
                      {msg.text}{" "}
                      <span className="text-primary underline cursor-pointer">
                        {msg.linkText}
                      </span>
                    </span>
                  ) : (
                    msg.text
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
