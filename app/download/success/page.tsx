"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function BrowserMockup() {
  const [showComplete, setShowComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowComplete(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-[420px]">
      {/* Browser window */}
      <div className="rounded-xl border border-grey-1 bg-bg-0 shadow-lg overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-grey-1 bg-grey-0">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-grey-1 rounded-md px-4 py-1 text-[11px] text-text-2 font-medium">
              luci.com/setup
            </div>
          </div>
          {/* Download icon */}
          <svg
            className="w-4 h-4 text-text-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
            />
          </svg>
        </div>

        {/* Download bar */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 rounded-lg border border-grey-1 bg-grey-0 px-3 py-2.5">
            {/* DMG icon */}
            <div className="w-8 h-8 rounded-lg bg-grey-1 flex items-center justify-center shrink-0">
              <svg
                className="w-4 h-4 text-text-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-text-0 truncate">
                LUCI.dmg
              </p>
              <p
                className={`text-[11px] font-medium transition-colors duration-500 ${showComplete ? "text-[#28c840]" : "text-text-2"}`}
              >
                {showComplete ? "Download Complete" : "Downloading..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Installer window — offset below */}
      <div className="mt-4 ml-8 rounded-xl border border-grey-1 bg-bg-0 shadow-lg overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-grey-1 bg-grey-0">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="flex-1 text-center text-[11px] text-text-2 font-medium">
            LUCI Installer
          </p>
        </div>

        {/* Installer content */}
        <div className="flex items-center justify-center gap-6 px-8 py-10">
          {/* App icon placeholder */}
          <div className="w-14 h-14 rounded-2xl bg-grey-1 flex items-center justify-center shadow-sm">
            <Image
              src="/lucilogo-black.svg"
              alt="LUCI"
              width={32}
              height={32}
              className="dark:hidden"
            />
            <Image
              src="/lucilogo.svg"
              alt="LUCI"
              width={32}
              height={32}
              className="hidden dark:block"
            />
          </div>

          {/* Arrow */}
          <svg
            className="w-5 h-5 text-text-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>

          {/* Applications folder */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-14 h-14 rounded-2xl bg-[#1a9fff]/10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-[#1a9fff]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
              </svg>
            </div>
            <span className="text-[11px] text-text-2 font-medium">
              Applications
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DownloadSuccessPage() {
  const handleRetry = () => {
    const a = document.createElement("a");
    a.href = "/LUCI.dmg";
    a.download = "LUCI.dmg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-web-bg-0 flex">
      {/* Left column — instructions */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20">
        <div className="max-w-[460px]">
          {/* Logo */}
          <Link href="/" className="inline-block mb-16">
            <Image
              src="/lucilogo-black.svg"
              alt="LUCI"
              width={80}
              height={30}
              className="dark:hidden"
            />
            <Image
              src="/lucilogo.svg"
              alt="LUCI"
              width={80}
              height={30}
              className="hidden dark:block"
            />
          </Link>

          {/* Heading */}
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-text-0 tracking-tight">
            Open LUCI
            <br />
            in 3 steps:
          </h1>

          {/* Steps */}
          <div className="mt-10 flex flex-col gap-6">
            <Step num="01" text="Open your Downloads folder" />
            <Step num="02" text="Double-click LUCI.dmg" />
            <Step
              num="03"
              text="Wait for the window to open — then drag to install"
            />
          </div>

          {/* Retry */}
          <div className="mt-10 pt-6 border-t border-grey-1">
            <p className="text-[13px] text-text-2">
              Download didn&apos;t start?{" "}
              <button
                onClick={handleRetry}
                className="text-text-0 font-medium underline underline-offset-2 hover:opacity-70 transition-opacity cursor-pointer"
              >
                Try again
              </button>{" "}
              <span className="inline-block ml-0.5 text-text-2">&#x21bb;</span>
            </p>
          </div>

          {/* Platform note */}
          <div className="mt-4">
            <p className="text-[13px] text-text-2">
              Currently available for{" "}
              <span className="text-text-0 font-medium">Mac Silicon</span> only.
            </p>
          </div>
        </div>
      </div>

      {/* Right column — visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-grey-0 relative overflow-hidden">
        {/* Subtle decorative gradient */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-1/4 -right-20 w-80 h-80 rounded-full blur-[100px]"
            style={{ background: "var(--text-2)" }}
          />
          <div
            className="absolute bottom-1/4 -left-20 w-60 h-60 rounded-full blur-[80px]"
            style={{ background: "var(--text-2)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 px-8">
          <div className="text-center mb-4">
            <p className="text-[15px] text-text-2 mb-1">
              Complete setup to claim your
            </p>
            <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-text-0 underline underline-offset-4 decoration-2">
              1100 free credits Today
            </p>
          </div>

          <BrowserMockup />
        </div>
      </div>
    </div>
  );
}

function Step({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-baseline gap-5">
      <span className="text-[13px] tabular-nums text-text-2 font-medium shrink-0">
        {num}
      </span>
      <p className="text-[clamp(1rem,2vw,1.25rem)] font-medium text-text-0 leading-snug">
        {text}
      </p>
    </div>
  );
}
