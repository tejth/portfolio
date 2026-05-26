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
  title: "Tej — Aspiring AI Engineer",
  description:
    "Personal portfolio of Tejendra, a Senior Full-Stack Developer and UI/UX Designer based in India. Building beautiful, scalable web applications.",
  keywords: ["Aspiring A.I Engineer","Full-Stack Developer", "React", "Next.js", "TypeScript", "UI/UX Designer"],
  authors: [{ name: "Tejendra" }],
   icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Tejendra — Full-Stack Developer & Designer",
    description: "Building digital experiences that inspire, scale, and endure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejendra — Full-Stack Developer",
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
     
      <body
        className={`${dmSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased bg-navy-900 text-white`}
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
        <script src="https://supportai-lac.vercel.app/chatBot.js"
    data-owner-id="usr_113570581026178064"></script>
      </body>
    </html>
  );
}
