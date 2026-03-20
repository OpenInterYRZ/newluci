import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download LUCI — AI Agent for macOS",
  description:
    "Download LUCI for Mac. AI agent with video understanding and persistent memory. macOS 13+ Apple Silicon required.",
  openGraph: {
    title: "Download LUCI — AI Agent for macOS",
    description:
      "Download the LUCI desktop app. Video understanding, persistent memory, and automated execution.",
    url: "/download",
  },
  twitter: {
    title: "Download LUCI — AI Agent for macOS",
    description:
      "Download the LUCI desktop app. Video understanding, persistent memory, and automated execution.",
  },
  alternates: {
    canonical: "/download",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
