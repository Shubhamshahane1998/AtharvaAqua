import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.shortName} home`}>
      <svg width="34" height="40" viewBox="0 0 34 40" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="dropGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3db5e6" />
            <stop offset="100%" stopColor="#1e63c8" />
          </linearGradient>
        </defs>
        <path
          d="M17 1.5 5.6 15.2a14.8 14.8 0 1 0 22.8 0L17 1.5Z"
          fill="url(#dropGrad)"
        />
        <path
          d="M20.8 12.6c-4.8 1.2-8.4 4.6-9 9.6-.3 2.4.4 4.6 1.6 6.2 0-6.3 3.4-11.4 8.6-14.2-3.4 3.3-5.6 7.8-5.9 13.3 3.9-1.2 6.6-4.6 6.9-9.2.1-2.1-.6-4-2.2-5.7Z"
          fill="#8ed14f"
        />
      </svg>
      <span className="leading-tight">
        <span
          className={`block text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Atharva <span className={light ? "text-brand-300" : "text-brand-500"}>Aqua</span>
        </span>
        <span
          className={`block text-[9px] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-brand-100" : "text-muted"
          }`}
        >
          Sales and Services
        </span>
      </span>
    </Link>
  );
}
