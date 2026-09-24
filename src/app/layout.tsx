import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { IS_DEMO, SITE_NAME, SITE_URL } from "@/lib/site";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mincho",
  display: "swap",
});

const TITLE = "ささき矯正歯科クリニック｜横浜市戸塚区の矯正歯科｜日本矯正歯科学会認定医";
const DESCRIPTION =
  "ささき矯正歯科クリニックは、横浜市戸塚区の矯正治療専門の歯科医院です。戸塚駅東口より徒歩3分。日本矯正歯科学会認定医による安心の矯正治療を提供しています。初診相談は無料。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // 各ページの URL をそのまま正規 URL にする（末尾スラッシュ付き）
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    url: "./",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image" },
  // デモ環境（GitHub Pages）は検索結果に載せない
  ...(IS_DEMO ? { robots: { index: false, follow: false } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={shippori.variable}>
      <body className="font-[var(--font-mincho)] bg-white text-[#222]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
