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
  title: "ささき矯正歯科クリニック｜横浜市戸塚区の矯正歯科｜日本矯正歯科学会認定医",
  description:
    "ささき矯正歯科クリニックは、横浜市戸塚区の矯正治療専門の歯科医院です。戸塚駅東口より徒歩3分。日本矯正歯科学会認定医による安心の矯正治療を提供しています。初診相談は無料。",
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
