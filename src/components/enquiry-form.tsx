"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./icons";
import { services, whatsappLink } from "@/lib/site";

const field =
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

/**
 * No backend is wired up yet, so the form hands the enquiry to WhatsApp with
 * everything pre-filled. Swap `onSubmit` for a server action when an inbox or
 * CRM endpoint exists.
 */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      `New service enquiry`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Area: ${data.get("area")}`,
      `Service: ${data.get("service")}`,
      `Details: ${data.get("details") || "-"}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-ink">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s-]{10,15}"
            className={field}
            placeholder="10-digit mobile number"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="area" className="mb-1.5 block text-xs font-semibold text-ink">
            Your area
          </label>
          <input id="area" name="area" required className={field} placeholder="e.g. Wakad, Pune" />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-ink">
            Service needed
          </label>
          <select id="service" name="service" className={field} defaultValue={services[0].title}>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="mb-1.5 block text-xs font-semibold text-ink">
          Describe the problem <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className={field}
          placeholder="Purifier brand, and what's going wrong"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Send enquiry on WhatsApp
      </button>

      <p aria-live="polite" className="text-xs text-muted">
        {sent
          ? "Your enquiry has been opened in WhatsApp — press send there and we'll call you back."
          : "We reply within business hours, usually in a few minutes."}
      </p>
    </form>
  );
}
