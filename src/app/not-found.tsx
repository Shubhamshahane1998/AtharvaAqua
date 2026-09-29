import Link from "next/link";
import { CallButton, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="text-6xl font-extrabold text-brand-200">404</p>
      <h1 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted">
        That page doesn&apos;t exist. You can browse our services, or call us and we&apos;ll help
        you directly.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/services"
          className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700"
        >
          View services
        </Link>
        <CallButton />
      </div>
    </Section>
  );
}
