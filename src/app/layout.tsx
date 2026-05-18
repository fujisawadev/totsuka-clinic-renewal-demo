import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: "矯正歯科クリニック | デモサイト",
  description: "歯科医院ホームページ デモ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={shippori.variable}>
      <body className="font-[var(--font-mincho)] bg-white text-[#222]">
        {children}
      </body>
    </html>
  );
}
