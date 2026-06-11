import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Self-hosted via next/font — the CSS references these families by name
// ("Inter", "Space Grotesk", "JetBrains Mono") through theme variables.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const description =
  "A responsive, dark-mode personal portfolio website showcasing Himanshu Arora's expertise in technical training, cloud, and AI.";

export const metadata: Metadata = {
  title: "Himanshu Arora — Technical Training Lead | Cloud, AI & Automation",
  description,
  authors: [{ name: "Himanshu Arora" }],
  openGraph: {
    title: "Himanshu Arora — Technical Training Lead",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Himanshu Arora — Technical Training Lead",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
