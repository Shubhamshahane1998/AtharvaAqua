import Link from "next/link";
import { PhoneIcon, WhatsAppIcon, CheckIcon } from "./icons";
import { site, telLink, whatsappLink } from "@/lib/site";

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  secondLine,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  /** Rendered in brand blue on its own line, as in "for Your Home & Business". */
  secondLine?: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-[32px] sm:leading-[1.25]">
        {title} {accent && <span className="text-brand-500">{accent}</span>}
        {secondLine && <span className="block text-brand-500">{secondLine}</span>}
      </h2>
      {subtitle && <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p>}
    </div>
  );
}

/**
 * Variants are resolved here rather than by appending overrides from the call
 * site: two conflicting utilities (bg-brand-600 + bg-white) are decided by
 * stylesheet order, not string order, which silently produced white-on-white.
 */
const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-colors";

const callVariants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  light: "bg-white text-brand-600 hover:bg-brand-50",
  outline:
    "border border-brand-200 bg-white text-brand-600 shadow-none hover:border-brand-400 hover:bg-brand-50",
  deep: "bg-brand-800 text-white hover:bg-brand-700",
} as const;

export function CallButton({
  label = "Call Now",
  variant = "primary",
  className = "",
}: {
  label?: string;
  variant?: keyof typeof callVariants;
  className?: string;
}) {
  return (
    <a
      href={telLink}
      className={`${buttonBase} ${callVariants[variant]} ${className}`}
    >
      <PhoneIcon className="h-4 w-4" />
      {label}
    </a>
  );
}

const whatsappVariants = {
  primary: "bg-whatsapp text-white hover:brightness-95",
  outline:
    "border border-slate-200 bg-white text-whatsapp shadow-none hover:border-whatsapp hover:bg-green-50",
} as const;

export function WhatsAppButton({
  label = "WhatsApp Now",
  message,
  variant = "primary",
  className = "",
}: {
  label?: string;
  message?: string;
  variant?: keyof typeof whatsappVariants;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonBase} ${whatsappVariants[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}

export function TickList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StickyActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-slate-200 bg-slate-200 md:hidden">
      <a
        href={telLink}
        className="flex items-center justify-center gap-2 bg-brand-600 py-4 text-sm font-semibold text-white"
      >
        <PhoneIcon className="h-4 w-4" />
        Call {site.phoneDisplay.replace("+91 ", "")}
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-semibold text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}

export function CtaBand({
  title = "Need your water purifier fixed today?",
  subtitle = "Certified technicians across Pune & Pimpri-Chinchwad, with a 2-hour response time and genuine spare parts.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand-700">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-brand-100">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <CallButton label={`Call ${site.phoneDisplay}`} variant="light" />
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ trail }: { trail: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
        {trail.map((t, i) => (
          <li key={t.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? (
              <span className="font-medium text-ink">{t.label}</span>
            ) : (
              <Link href={t.href} className="hover:text-brand-600">
                {t.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
