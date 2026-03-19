import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "LUCI - See, Remember & Act",
  description:
    "LUCI remembers everything and gets things done automatically. Not just a recording tool — a personal AI assistant that builds memory and automates execution.",
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
