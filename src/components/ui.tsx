import Link from "next/link";
import { PhoneSolidIcon, WhatsAppIcon, CheckIcon } from "./icons";
import { telLink, whatsappLink } from "@/lib/site";

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
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  /** Rendered in brand blue on its own line, as in "for Your Home & Business". */
  secondLine?: string;
  subtitle?: string;
  center?: boolean;
  /** Pages whose lead heading is a SectionHeading pass "h1"; a page with no h1 loses ranking signal. */
  as?: "h1" | "h2";
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{eyebrow}</p>
      )}
      <Tag className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-[32px] sm:leading-[1.25]">
        {title} {accent && <span className="text-brand-500">{accent}</span>}
        {secondLine && <span className="block text-brand-500">{secondLine}</span>}
      </Tag>
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
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors";

/**
 * Size is resolved here for the same reason as variant: a call-site override of
 * px/text would be decided by stylesheet order, not string order.
 *
 * `sm` keeps the hero CTAs compact enough to share one row at 375px. `md`
 * matches the design's full-width buttons, whose label measures ~16px against
 * an ~18px glyph.
 */
const buttonSizes = {
  sm: "gap-2 px-4 py-3 text-[13px] sm:px-6 sm:text-sm",
  md: "gap-2.5 px-5 py-3 text-[15px] sm:text-base sm:font-semibold",
} as const;

const iconSize = { sm: "h-4 w-4", md: "h-[18px] w-[18px]" } as const;

const callVariants = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  light: "bg-white text-brand-600 shadow-sm hover:bg-brand-50",
  outline:
    "border border-brand-200 bg-white text-brand-600 hover:border-brand-400 hover:bg-brand-50",
  deep: "bg-brand-800 text-white shadow-sm hover:bg-brand-700",
} as const;

export function CallButton({
  label = "Call Now",
  variant = "primary",
  size = "sm",
  className = "",
}: {
  label?: string;
  variant?: keyof typeof callVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
}) {
  return (
    <a
      href={telLink}
      className={`${buttonBase} ${buttonSizes[size]} ${callVariants[variant]} ${className}`}
    >
      <PhoneSolidIcon className={iconSize[size]} />
      {label}
    </a>
  );
}

const whatsappVariants = {
  primary: "bg-whatsapp text-white shadow-sm hover:brightness-95",
  outline:
    // Green outline on a phone, matching the label; the desktop design uses a
    // neutral border instead.
    "border border-whatsapp-outline bg-white text-whatsapp-outline shadow-[0_2px_10px_rgba(11,43,87,0.10)] hover:bg-green-50 sm:border-slate-300 sm:hover:border-whatsapp-outline",
} as const;

export function WhatsAppButton({
  label = "WhatsApp Now",
  message,
  variant = "primary",
  size = "sm",
  className = "",
}: {
  label?: string;
  message?: string;
  variant?: keyof typeof whatsappVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonBase} ${buttonSizes[size]} ${whatsappVariants[variant]} ${className}`}
    >
      <WhatsAppIcon className={size === "md" ? "h-[22px] w-[22px]" : "h-[18px] w-[18px]"} />
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
