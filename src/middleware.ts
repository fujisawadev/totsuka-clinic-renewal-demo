import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 検索エンジン対策。
 * Vercel の自動ドメイン（*.vercel.app）で配信されている場合のみ
 * X-Robots-Tag: noindex, nofollow を付与し、本番ドメイン（sasakikyousei.com）と
 * 内容が重複して検索結果に出るのを防ぐ。
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  if (host.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  // Next.js 内部のビルド成果物（JS/CSS）以外のすべてのリクエストに適用する
  matcher: ["/((?!_next/static|_next/image).*)"],
};
