"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon, CheckIcon } from "./icons";
import { asset, products, whatsappLink } from "@/lib/site";

const DESKTOP_PAGE_SIZE = 4;

export function ProductCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  /**
   * Four per page stacks four cards vertically on a phone and buries the rest
   * behind a horizontal swipe nobody looks for. One per page below `lg` gives
   * the ordinary mobile carousel instead.
   */
  const [pageSize, setPageSize] = useState(DESKTOP_PAGE_SIZE);
  const pageCount = Math.ceil(products.length / pageSize);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      setPageSize(mq.matches ? DESKTOP_PAGE_SIZE : 1);
      setPage(0);
      trackRef.current?.scrollTo({ left: 0 });
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(pageCount - 1, next));
      track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
      setPage(clamped);
    },
    [pageCount],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Keep the dots honest when the user swipes instead of using the arrows.
    const onScroll = () => {
      const width = track.clientWidth || 1;
      setPage(Math.round(track.scrollLeft / width));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative mt-12">
      <ul
        ref={trackRef}
        className="snap-row grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col overflow-x-auto overscroll-x-contain"
      >
        {Array.from({ length: pageCount }).map((_, p) => (
          <li key={p} className="snap-start">
            <ul className="grid gap-6 px-0.5 pb-2 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(p * pageSize, p * pageSize + pageSize).map((product) => (
                <li
                  key={product.slug}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-[0_2px_14px_rgba(11,43,87,0.08)]"
                >
                  <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-slate-50">
                    <Image
                      src={asset(product.image)}
                      alt={`${product.name} water purifier`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
                    <h3 className="text-lg font-bold text-ink">{product.name}</h3>
                    <p className="mt-1 text-sm text-muted">{product.tagline}</p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(
                        `Hi, I'd like to enquire about the ${product.name} water purifier.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                      Enquire Now
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {pageCount > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Previous products"
            className="absolute -left-2 top-[34%] hidden h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md transition-opacity hover:text-brand-600 disabled:opacity-0 lg:flex"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount - 1}
            aria-label="Next products"
            className="absolute -right-2 top-[34%] hidden h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md transition-opacity hover:text-brand-600 disabled:opacity-0 lg:flex"
          >
            <ArrowIcon className="h-4 w-4" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to product page ${i + 1}`}
                aria-current={i === page}
                className="group grid h-11 w-8 place-items-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === page ? "w-6 bg-brand-600" : "w-2 bg-brand-200 group-hover:bg-brand-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
