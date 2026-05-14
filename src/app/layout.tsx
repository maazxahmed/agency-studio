import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AmbientBlobs } from "@/components/layout/AmbientBlobs";
import { Header } from "@/components/layout/Header";
import { CustomGradientCursor } from "@/components/layout/CustomGradientCursor";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enterprise Agency Systems",
  description:
    "Digital systems that align strategy, acquisition, product execution, automation, and operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-black text-[var(--color-text)]"
        suppressHydrationWarning
      >
        <AmbientBlobs />
        <Header />
        <main className="relative z-10 flex-1 bg-black">{children}</main>
        <Footer />
        <CustomGradientCursor />
        <div className="fixed inset-x-0 bottom-0 z-30 bg-black p-3 md:hidden">
          <Button href="/book-strategy-call">Book a Strategy Call</Button>
        </div>
      </body>
    </html>
  );
}
