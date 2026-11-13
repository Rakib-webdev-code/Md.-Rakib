import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import ScrollBar from "../components/ScrollBar";
import Navbar from "../components/Navbar";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--f-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--f-serif" });

export const metadata: Metadata = {
  title: "Md Rakib | Full-stack developer",
  description: "Portfolio of Md Rakib, a full-stack developer building with Next.js, TypeScript and MongoDB.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <body id="top" className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
