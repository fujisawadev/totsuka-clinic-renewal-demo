import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 既存の内部リンク・sitemap・vercel.json のリダイレクト先はすべて末尾スラッシュ付きのため維持する
  trailingSlash: true,
};

export default nextConfig;
