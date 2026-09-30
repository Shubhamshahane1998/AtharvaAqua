import Image from "next/image";
import Link from "next/link";
import { asset, site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.shortName} home`}>
      <Image
        src={asset("/images/logo-mark.png")}
        alt=""
        aria-hidden="true"
        width={120}
        height={120}
        priority
        className="h-10 w-10 shrink-0 object-contain"
      />
      <span className="leading-tight">
        <span
          className={`block text-lg font-extrabold tracking-tight sm:text-xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Atharva Aqua
        </span>
        <span
          className={`block text-[9px] font-bold uppercase tracking-[0.16em] ${
            light ? "text-brand-100" : "text-mint"
          }`}
        >
          Sales &amp; Services
        </span>
      </span>
    </Link>
  );
}
