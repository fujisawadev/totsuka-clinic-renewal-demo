"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * GA4 計測タグ。
 * NEXT_PUBLIC_GA_ID（例: G-XXXXXXXXXX）が設定されている環境でのみ読み込む。
 * `<a data-ga-event="reserve_click">` のようにマークした要素のクリックをイベント送信する。
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.("a[data-ga-event]") as HTMLAnchorElement | null;
      if (!anchor) return;
      window.gtag?.("event", anchor.dataset.gaEvent, {
        link_url: anchor.getAttribute("href") ?? "",
        link_text: anchor.textContent?.replace(/\s+/g, " ").trim() ?? "",
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
