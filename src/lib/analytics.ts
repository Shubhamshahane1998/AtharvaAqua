/**
 * Google Ads conversion tracking, driven entirely by environment variables.
 *
 * With nothing set, no script loads and no network request is made — the site
 * behaves exactly as it does today. Fill these in once the campaign exists and
 * tracking starts working without a code change.
 *
 *   NEXT_PUBLIC_GOOGLE_ADS_ID             AW-XXXXXXXXX
 *   NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL     the label from the "Phone call" conversion
 *   NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL the label from the WhatsApp conversion
 *   NEXT_PUBLIC_GA_ID                     G-XXXXXXXXXX, optional
 */
/** The account tag. Not a secret — it is visible in the page source either way. */
export const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18486860456";
export const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";

const callLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL ?? "";
const whatsappLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL ?? "";

/** A conversion only fires when both the account id and that action's label exist. */
export const conversionIds = {
  call: adsId && callLabel ? `${adsId}/${callLabel}` : "",
  whatsapp: adsId && whatsappLabel ? `${adsId}/${whatsappLabel}` : "",
} as const;

export const analyticsEnabled = Boolean(adsId || gaId);

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

/**
 * Reports a conversion. Safe to call when tracking is off or the script has not
 * loaded — it simply does nothing, so callers never need to guard.
 */
export function trackConversion(action: keyof typeof conversionIds) {
  const sendTo = conversionIds[action];
  if (!sendTo || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: sendTo });
}
