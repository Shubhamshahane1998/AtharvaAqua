"use client";

import Script from "next/script";
import { useEffect } from "react";
import { adsId, analyticsEnabled, gaId, trackConversion } from "@/lib/analytics";

/**
 * Loads gtag and reports a conversion whenever someone taps a phone or WhatsApp
 * link, anywhere on the site.
 *
 * The listener is delegated from the document rather than wired into each
 * button, so every call and WhatsApp link is covered — header, hero, cards,
 * footer, contact page — and new ones are covered automatically.
 *
 * Renders nothing until the environment variables exist, so the site ships no
 * third-party script and makes no request while tracking is unconfigured.
 */
export function Analytics() {
  useEffect(() => {
    if (!analyticsEnabled) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href) return;

      if (href.startsWith("tel:")) trackConversion("call");
      else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackConversion("whatsapp");
      }
    };

    // Capture phase: the conversion is recorded even if navigation starts first.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!analyticsEnabled) return null;

  const measurementId = adsId || gaId;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${adsId ? `gtag('config', '${adsId}');` : ""}
          ${gaId ? `gtag('config', '${gaId}');` : ""}
        `}
      </Script>
    </>
  );
}
