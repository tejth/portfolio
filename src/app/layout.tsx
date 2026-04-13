// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Script from "next/script";

// Display font — elegant serif for headings
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Body font — clean sans-serif
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Monospace font — code snippets
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Developer & Designer",
  description:
    "Personal portfolio of Alex Morgan, a Senior Full-Stack Developer and UI/UX Designer based in San Francisco. Building beautiful, scalable web applications.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "UI/UX Designer", "Portfolio"],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "Alex Morgan — Full-Stack Developer & Designer",
    description: "Building digital experiences that inspire, scale, and endure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Developer",
    description: "Building digital experiences that inspire, scale, and endure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <Script
  src="https://supportai-lac.vercel.app/chatBot.js"
  data-owner-id="usr_120767135516460315"
  strategy="afterInteractive"
/>
      <body
        className={`${dmSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased bg-navy-900 text-white`}
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
