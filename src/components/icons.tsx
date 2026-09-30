type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.3-.4v-.4c0-.1-.5-1.4-.7-1.9s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2A5.2 5.2 0 0 0 8.2 13a11.9 11.9 0 0 0 4.5 4 8.4 8.4 0 0 0 1.5.5 3.6 3.6 0 0 0 1.7.1 2.8 2.8 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.2-.4-.3Z" />
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

export function GearSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3 2.3a1.4 1.4 0 0 1 1.3-.9h.8a1.4 1.4 0 0 1 1.3.9l.4 1a8 8 0 0 1 1.4.6l1-.4a1.4 1.4 0 0 1 1.6.3l.6.6a1.4 1.4 0 0 1 .3 1.6l-.4 1a8 8 0 0 1 .6 1.4l1 .4a1.4 1.4 0 0 1 .9 1.3v.8a1.4 1.4 0 0 1-.9 1.3l-1 .4a8 8 0 0 1-.6 1.4l.4 1a1.4 1.4 0 0 1-.3 1.6l-.6.6a1.4 1.4 0 0 1-1.6.3l-1-.4a8 8 0 0 1-1.4.6l-.4 1a1.4 1.4 0 0 1-1.3.9h-.8a1.4 1.4 0 0 1-1.3-.9l-.4-1a8 8 0 0 1-1.4-.6l-1 .4a1.4 1.4 0 0 1-1.6-.3l-.6-.6a1.4 1.4 0 0 1-.3-1.6l.4-1a8 8 0 0 1-.6-1.4l-1-.4a1.4 1.4 0 0 1-.9-1.3v-.8a1.4 1.4 0 0 1 .9-1.3l1-.4a8 8 0 0 1 .6-1.4l-.4-1a1.4 1.4 0 0 1 .3-1.6l.6-.6a1.4 1.4 0 0 1 1.6-.3l1 .4a8 8 0 0 1 1.4-.6l.4-1ZM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Z"
      />
    </svg>
  );
}

export function WrenchSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M21.3 6.4a.8.8 0 0 0-1.3-.4l-2.4 2.4-2-2 2.4-2.4a.8.8 0 0 0-.4-1.3 6 6 0 0 0-7.2 7.6L3.6 16.9a2.9 2.9 0 0 0 4.1 4.1l6.6-6.7a6 6 0 0 0 7-7.9ZM6.4 19.3a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z" />
    </svg>
  );
}

export function ShieldSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.8 3.8 5.3v6.1c0 5 3.4 9.6 8.2 10.9 4.8-1.3 8.2-5.9 8.2-10.9V5.3L12 1.8Zm4.2 7.6a1 1 0 0 0-1.5-1.3l-3.6 4-1.7-1.7a1 1 0 1 0-1.4 1.4l2.5 2.5a1 1 0 0 0 1.4 0l4.3-4.9Z"
      />
    </svg>
  );
}

export function HeadsetSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12 2.2A8.6 8.6 0 0 0 3.4 10.8v1.4a2 2 0 0 0-.9 1.7v3a2 2 0 0 0 2 2h1.3a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-.4v-1.1a6.6 6.6 0 0 1 13.2 0v1.1h-.4a1 1 0 0 0-1 1v5a1 1 0 0 0 .5.9 3.3 3.3 0 0 1-2.4 1.1h-1.2a1.6 1.6 0 0 0-1.5-1.1h-1.3a1.6 1.6 0 1 0 0 3.2h1.3a1.6 1.6 0 0 0 1.5-1.1h1.2a5 5 0 0 0 4.8-3.7 2 2 0 0 0 .4-1.2v-3a2 2 0 0 0-.9-1.7v-1.4A8.6 8.6 0 0 0 12 2.2Z" />
    </svg>
  );
}
