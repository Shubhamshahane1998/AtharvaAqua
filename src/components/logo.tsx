import Image from "next/image";
import Link from "next/link";
import { asset, site } from "@/lib/site";

/** `minimal` drops the mark and sub-label; the footer shows the wordmark alone. */
export function Logo({ light = false, minimal = false }: { light?: boolean; minimal?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.shortName} home`}>
      {!minimal && (
        <Image
          src={asset("/images/logo-mark.png")}
          alt=""
          aria-hidden="true"
          width={120}
          height={120}
          priority
          className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
        />
      )}
      <span className="leading-tight">
        <span
          className={`block text-[15px] font-extrabold tracking-tight sm:text-base lg:text-xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Atharva Aqua
        </span>
        {!minimal && (
          <span
            className={`block text-[8px] font-bold uppercase tracking-[0.16em] sm:text-[9px] ${
              light ? "text-brand-100" : "text-mint"
            }`}
          >
            Sales &amp; Services
          </span>
        )}
      </span>
    </Link>
  );
}
