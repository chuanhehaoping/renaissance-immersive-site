import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { SceneCanvas } from "@/components/canvas/SceneCanvas";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier Lunes — A Quiet Renaissance",
  description:
    "An immersive editorial brand experience that translates the language of European classical art into modern web craft.",
  openGraph: {
    title: "Atelier Lunes — A Quiet Renaissance",
    description:
      "An immersive editorial brand experience that translates the language of European classical art into modern web craft.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F6F1E7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-ivory text-ink font-sans antialiased">
        <SceneCanvas />
        <SmoothScroll>
          <SiteHeader />
          <main className="section-shell">{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
