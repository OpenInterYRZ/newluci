import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://luci.ai"),
  title: {
    default: "LUCI — AI Agent with Video Understanding & Memory | See. Remember. Act.",
    template: "%s | LUCI",
  },
  description:
    "LUCI is a personal AI agent that understands your videos and meetings, builds persistent memory, and automatically executes tasks. Open source, self-hosted, data sovereign. Try free.",
  keywords: [
    "AI agent",
    "AI personal agent",
    "video understanding",
    "AI memory",
    "AI assistant",
    "automated execution",
    "screen understanding",
    "AI productivity",
    "AI meeting assistant",
    "video AI agent",
    "AI agent with memory",
    "personal AI with long-term memory",
    "meeting transcription AI",
    "action items automation",
    "self-hosted AI agent",
    "open source AI agent",
    "AI that remembers",
    "Limitless AI alternative",
    "Rewind AI alternative",
    "video to knowledge base",
    "AI task automation",
    "persistent memory AI",
    "data sovereign AI",
  ],
  authors: [{ name: "LUCI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LUCI",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Manrope:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased bg-web-bg-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          {/* <ChatWidget /> */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
