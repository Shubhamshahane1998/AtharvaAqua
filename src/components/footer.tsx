import Link from "next/link";
import { Logo } from "./logo";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";
import { services, site, telLink } from "@/lib/site";

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    path: "M13.5 21v-7.3h2.5l.4-2.9h-2.9V9c0-.8.2-1.4 1.4-1.4h1.6V5a20 20 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v2.9h2.5V21h3.2Z",
  },
  {
    label: "X",
    href: "https://x.com/",
    path: "M17.2 4h2.7l-5.9 6.8L21 20h-5.4l-4.2-5.5L6.5 20H3.8l6.3-7.2L3.4 4h5.6l3.8 5 4.4-5Zm-1 14.3h1.5L8.9 5.6H7.3l8.9 12.7Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    path: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.8-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 8.8c0-1.5-.4-2.8-1.4-3.8s-2.3-1.4-3.8-1.4H8.2C6.7 3.6 5.4 4 4.4 5S3 7.3 3 8.8v6.4c0 1.5.4 2.8 1.4 3.8s2.3 1.4 3.8 1.4h7.6c1.5 0 2.8-.4 3.8-1.4s1.4-2.3 1.4-3.8V8.8Zm-1.9 7.6c-.3.7-.9 1.3-1.6 1.6-1.1.4-3.8.3-5 .3s-3.9.1-5-.3c-.7-.3-1.3-.9-1.6-1.6-.4-1.1-.3-3.8-.3-5s-.1-3.9.3-5c.3-.7.9-1.3 1.6-1.6 1.1-.4 3.8-.3 5-.3s3.9-.1 5 .3c.7.3 1.3.9 1.6 1.6.4 1.1.3 3.8.3 5s.1 3.9-.3 5Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    path: "M6.9 20H3.8V9.7h3.1V20ZM5.3 8.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM20.2 20h-3.1v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V20H10.4V9.7h3v1.4h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V20Z",
  },
];

export function Footer() {
  return (
    <footer className="mt-0 bg-footer text-blue-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100/85">
            Delivering fresh, pure, and mineral-balanced water right to your doorstep — ensuring
            your family&apos;s health every day.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/25"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold text-white">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-blue-100/85">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/service-areas" className="hover:text-white">Service Areas</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Support</Link></li>
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h2 className="text-sm font-bold text-white">Our Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-blue-100/85">
            {services.map((s) => (
              <li key={s.slug}>
                {/* Plain anchor on purpose: next/link intercepts a same-page hash
                    and skips the scroll, so the section never comes into view. */}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/#services" className="hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-white">Contact Info</h2>
          <ul className="mt-5 space-y-4 text-sm text-blue-100/85">
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={telLink} className="hover:text-white">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Pune, Pimpri-Chinchwad Maharashtra</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t border-white/15 py-6">
          <p className="text-xs text-blue-100/70">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
