"use client";

export function IssueSummaryBubble() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium leading-[1.5] text-text-0 font-[Manrope,sans-serif]">
        I see 2 issues to fix:
      </p>

      {/* Issue 1 */}
      <div className="flex gap-1.5">
        <span className="shrink-0 text-sm font-medium text-text-0 font-[Manrope,sans-serif]">
          1.
        </span>
        <div className="flex flex-col gap-0.5">
          <code className="text-xs font-semibold text-gradient-red font-[SF_Mono,monospace]">
            LegalLinks.tsx:34
          </code>
          <p className="text-xs font-normal leading-[1.5] text-text-1 font-[Manrope,sans-serif]">
            The WebView modal never receives the uri prop, so it opens an empty
            window view.
          </p>
        </div>
      </div>

      {/* Issue 2 */}
      <div className="flex gap-1.5">
        <span className="shrink-0 text-sm font-medium text-text-0 font-[Manrope,sans-serif]">
          2.
        </span>
        <div className="flex flex-col gap-0.5">
          <code className="text-xs font-semibold text-gradient-red font-[SF_Mono,monospace]">
            urls.ts:12
          </code>
          <p className="text-xs font-normal leading-[1.5] text-text-1 font-[Manrope,sans-serif]">
            Terms URL is /terms-conditions but should be /terms-and-conditions
          </p>
        </div>
      </div>

      <p className="text-xs font-normal leading-[1.5] text-text-1 font-[Manrope,sans-serif]">
        I&apos;ll fix all issues. The WebView prop, correct the URL, and move
        &lt;LegalLinks /&gt; have all been moved to the purchase button.
      </p>
    </div>
  );
}
