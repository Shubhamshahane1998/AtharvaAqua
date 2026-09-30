type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};


/**
 * Official WhatsApp mark: the bubble is filled with `currentColor` and the
 * handset is knocked out with evenodd, so whatever sits behind the icon shows
 * through it — a green bubble with a white handset on the white button, and a
 * white bubble with a green handset on the solid green one.
 */
export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7 1 3.7 1.5 5.8 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0Zm5.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.4} {...props} aria-hidden="true">
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 2.7 6.9 8.4a7 7 0 1 0 10.2 0L12 2.7Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 2.5 4.5 5.7v5.7c0 4.6 3.1 8.8 7.5 10.1 4.4-1.3 7.5-5.5 7.5-10.1V5.7L12 2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ToolIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M21 5.5a6 6 0 0 1-7.8 7.8l-7.7 7.7a2.1 2.1 0 0 1-3-3l7.7-7.7A6 6 0 0 1 18 2.5l-4 4 3.5 3.5 3.5-4.5Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4m8-4v4" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M19.5 19v.5a2.5 2.5 0 0 1-2.5 2.5h-3" />
    </svg>
  );
}

export const whyIcons = [
  DropletIcon,
  ShieldIcon,
  ToolIcon,
  CalendarIcon,
  ClockIcon,
  HeadsetIcon,
];

export function WrenchesIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M7.5 3.5a3.5 3.5 0 0 0-3 5.3L3 10.3a1.5 1.5 0 0 0 0 2.1l1.1 1.1" />
      <path d="M14.5 6.5a3.8 3.8 0 0 0 5 5l-9.5 9.5a2.8 2.8 0 0 1-4-4L15.5 7.5" />
    </svg>
  );
}

export function ScrewdriverIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M14 10 5.6 18.4a2 2 0 0 0 2.8 2.8L16.8 13" />
      <path d="m13 5.5 5.5 5.5 2.2-2.2a2.5 2.5 0 0 0 0-3.5l-2-2a2.5 2.5 0 0 0-3.5 0L13 5.5Z" />
    </svg>
  );
}

export function RefreshIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" />
      <path d="M20.5 4v5h-5" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="4" y="4" width="16" height="17" rx="2" />
      <path d="M9 3h6v3H9zM8.5 11h7M8.5 15h4" />
    </svg>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3" />
      <path d="M9 3h6M7.5 15h9" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" />
      <path d="m12 5.8 1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3 1-2Z" />
      <path d="m8.5 13.8-1.5 6.7 5-2.5 5 2.5-1.5-6.7" />
    </svg>
  );
}

export function ThumbUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M7 21V10l4.5-7a2 2 0 0 1 2.9 2.4L13 10h5.5a2 2 0 0 1 2 2.5l-1.6 6.5a2.5 2.5 0 0 1-2.4 2H7Z" />
      <rect x="2.5" y="10" width="4.5" height="11" rx="1" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 2.5 4.5 5.7v5.7c0 4.6 3.1 8.8 7.5 10.1 4.4-1.3 7.5-5.5 7.5-10.1V5.7L12 2.5Z" />
      <rect x="8.5" y="10.5" width="7" height="6" rx="1" />
      <path d="M10 10.5V8.7a2 2 0 0 1 4 0v1.8" />
    </svg>
  );
}

/** Icons for the assurance strip under "Why choose us". */
export const assuranceIcons = [MedalIcon, DropletIcon, ThumbUpIcon, LockIcon];

export function SettingsIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 14a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V20a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H4a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H10a1.6 1.6 0 0 0 1-1.5V4a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V10a1.6 1.6 0 0 0 1.5 1H20a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
    </svg>
  );
}

/* --- Solid glyphs for the "Need help choosing" tiles. Outline strokes read
   too faint at tile size; the design uses filled marks. --- */

/* --- "Need help choosing" tiles. All four are stroked outlines in the
   design, at a slightly heavier weight than the body icons. --- */

const help = { ...base, strokeWidth: 1.9 };

export function HelpGearIcon(props: IconProps) {
  return (
    <svg {...help} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="3.1" />
      <path d="M19.4 14.2a1.5 1.5 0 0 0 .3 1.7l.1.1a1.9 1.9 0 1 1-2.7 2.7l-.1-.1a1.5 1.5 0 0 0-1.7-.3 1.5 1.5 0 0 0-.9 1.4v.3a1.9 1.9 0 1 1-3.8 0v-.2a1.5 1.5 0 0 0-1-1.4 1.5 1.5 0 0 0-1.7.3l-.1.1a1.9 1.9 0 1 1-2.7-2.7l.1-.1a1.5 1.5 0 0 0 .3-1.7 1.5 1.5 0 0 0-1.4-.9h-.3a1.9 1.9 0 1 1 0-3.8h.2a1.5 1.5 0 0 0 1.4-1 1.5 1.5 0 0 0-.3-1.7l-.1-.1a1.9 1.9 0 1 1 2.7-2.7l.1.1a1.5 1.5 0 0 0 1.7.3h.1a1.5 1.5 0 0 0 .9-1.4v-.3a1.9 1.9 0 1 1 3.8 0v.2a1.5 1.5 0 0 0 .9 1.4 1.5 1.5 0 0 0 1.7-.3l.1-.1a1.9 1.9 0 1 1 2.7 2.7l-.1.1a1.5 1.5 0 0 0-.3 1.7v.1a1.5 1.5 0 0 0 1.4.9h.3a1.9 1.9 0 1 1 0 3.8h-.2a1.5 1.5 0 0 0-1.4.9Z" />
    </svg>
  );
}

export function HelpWrenchIcon(props: IconProps) {
  return (
    <svg {...help} {...props} aria-hidden="true">
      <path d="M15.6 3.4a5 5 0 0 0-4.2 7.1L4.2 17.7a2.1 2.1 0 0 0 3 3l7.2-7.2a5 5 0 0 0 6.1-6.7l-2.8 2.8-2.6-2.6 2.8-2.8a5 5 0 0 0-2.3-.8Z" />
    </svg>
  );
}

export function HelpShieldIcon(props: IconProps) {
  return (
    <svg {...help} {...props} aria-hidden="true">
      <path d="M12 2.6 4.9 5.6v5.5c0 4.4 3 8.5 7.1 9.7 4.1-1.2 7.1-5.3 7.1-9.7V5.6L12 2.6Z" />
      <path d="m9.2 11.8 2 2 3.6-3.9" />
    </svg>
  );
}

export function HelpHeadsetIcon(props: IconProps) {
  return (
    <svg {...help} {...props} aria-hidden="true">
      <path d="M4.2 13.4v-1.2a7.8 7.8 0 0 1 15.6 0v1.2" />
      <rect x="2.4" y="12.9" width="4.1" height="6.5" rx="2" />
      <rect x="17.5" y="12.9" width="4.1" height="6.5" rx="2" />
      <path d="M19.5 19.4v.4a2.6 2.6 0 0 1-2.6 2.6h-2.1" />
    </svg>
  );
}


/** Filled call handset, used for every phone mark on the site. */
export function PhoneSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1.02 1.02 0 0 1 1.05-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.73-.25 1.02l-2.23 2.2Z" />
    </svg>
  );
}

