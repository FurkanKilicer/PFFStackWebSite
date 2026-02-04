import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mobile Tech & Quality View | PPF Tech",
  description:
    "Premium PPF kaplama ile aracınızın değerini ve parlaklığını ilk günkü gibi koruyun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`dark ${spaceGrotesk.variable}`} lang="tr">
      <body className="text-white selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
