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
    default: "LUCI — The AI Agent That Watches, Remembers, and Acts",
    template: "%s | LUCI",
  },
  description:
    "LUCI is an all-purpose AI agent that understands video, builds persistent memory, and automates execution. From screen activity to meetings, LUCI sees the full picture and takes action for you.",
  keywords: [
    "AI agent",
    "AI personal agent",
    "video understanding",
    "AI memory",
    "AI assistant",
    "automated execution",
    "screen understanding",
    "AI productivity",
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
