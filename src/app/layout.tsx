import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Manish Lakhiwal | Portfolio",
  description:
    "Full Stack Developer & ML Engineer @ Finworks360 · IEEE Researcher",
  icons: {
    icon: "/seo/visual-studio-code-icon.webp",
  },
  openGraph: {
    title: "Manish Lakhiwal — Portfolio",
    description: "Full Stack Developer & ML Engineer · Java/Spring · Django · Flutter · ML",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
