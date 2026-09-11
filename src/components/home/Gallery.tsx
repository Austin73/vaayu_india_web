"use client";

import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface GalleryImage {
  id: string;
  src: string;
  alt?: string;
  /** Show the small play-button overlay (use for video thumbnails). */
  hasVideo?: boolean;
  /** Caption shown on the centered card. Falls back to the category label when omitted. */
  label?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
  images: GalleryImage[];
}

export interface GalleryProps {
  /** Heading rendered above the tabs, e.g. "Applications". Omit to hide it. */
  title?: string;
  categories: GalleryCategory[];
  /** id of the category selected on first render (defaults to the first one). */
  defaultCategoryId?: string;
  /** Controlled active category — pass this + onCategoryChange to control it from outside. */
  activeCategoryId?: string;
  /** Fired whenever a tab is clicked. Use this to lazy-load real images later. */
  onCategoryChange?: (categoryId: string) => void;
  /** Fired when the "View More" pill is clicked. Hidden if omitted. */
  onViewMore?: () => void;
  /** Show a loading state instead of the carousel (e.g. while fetching real images). */
  isLoading?: boolean;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

// How each card looks based on its distance from the active (centered) card.
// Distance 0 = active card. Anything beyond MAX_OFFSET is not rendered.
const MAX_OFFSET = 2;

const CARD_STYLES: Record<
  number,
  { width: string; height: string; translateX: string; opacity: number; z: number }
> = {
  0: {
    width: "clamp(220px, 26vw, 360px)",
    height: "clamp(280px, 34vw, 460px)",
    translateX: "0%",
    opacity: 1,
    z: 30,
  },
  1: {
    width: "clamp(200px, 24vw, 340px)",
    height: "clamp(240px, 30vw, 400px)",
    translateX: "78%",
    opacity: 1,
    z: 20,
  },
  2: {
    width: "clamp(170px, 21vw, 300px)",
    height: "clamp(200px, 26vw, 330px)",
    translateX: "148%",
    opacity: 0.9,
    z: 10,
  },
};

/* ------------------------------------------------------------------ */
/*  Icons (inline, no extra dependency)                                */
/* ------------------------------------------------------------------ */

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Gallery({
  title,
  categories,
  defaultCategoryId,
  activeCategoryId,
  onCategoryChange,
  onViewMore,
  isLoading = false,
  className = "",
}: GalleryProps) {
  const [internalCategoryId, setInternalCategoryId] = useState(
    defaultCategoryId ?? categories[0]?.id
  );
  const currentCategoryId = activeCategoryId ?? internalCategoryId;

  const currentCategory = categories.find((c) => c.id === currentCategoryId) ?? categories[0];

  const images = currentCategory?.images ?? [];

  const [activeIndex, setActiveIndex] = useState(() => Math.floor((images.length - 1) / 2));

  // Keep the centered card in range whenever the category (and thus image count) changes.
  const safeActiveIndex = useMemo(() => {
    if (images.length === 0) return 0;
    return ((activeIndex % images.length) + images.length) % images.length;
  }, [activeIndex, images.length]);

  function handleTabClick(categoryId: string) {
    if (activeCategoryId === undefined) {
      setInternalCategoryId(categoryId);
    }
    const cat = categories.find((c) => c.id === categoryId);
    setActiveIndex(Math.floor(((cat?.images.length ?? 1) - 1) / 2));
    onCategoryChange?.(categoryId);
  }

  function goTo(step: number) {
    if (images.length === 0) return;
    setActiveIndex((prev) => {
      const next = (((prev + step) % images.length) + images.length) % images.length;
      return next;
    });
  }

  return (
    <section className={`w-full ${className}`}>
      {title && (
        <h2 className="mb-8 text-center text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
      )}

      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((category) => {
          const isActive = category.id === currentCategoryId;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => handleTabClick(category.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
              }`}
            >
              {category.label}
            </button>
          );
        })}

        {onViewMore && (
          <button
            type="button"
            onClick={onViewMore}
            className="flex items-center gap-1.5 rounded-full border border-slate-900 px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
          >
            View More
            <ArrowIcon direction="right" />
          </button>
        )}
      </div>

      {/* Carousel */}
      <div className="relative h-[clamp(300px,38vw,520px)] w-full overflow-hidden">
        {isLoading || images.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-400">
            {isLoading ? "Loading images…" : "No images yet"}
          </div>
        ) : (
          images.map((image, index) => {
            // Shortest signed distance from the active card, wrapping around.
            const half = images.length / 2;
            let offset = index - safeActiveIndex;
            if (offset > half) offset -= images.length;
            if (offset < -half) offset += images.length;

            if (Math.abs(offset) > MAX_OFFSET) return null;

            const style = CARD_STYLES[Math.abs(offset)];
            const sign = Math.sign(offset);

            return (
              <div
                key={image.id}
                className="absolute top-1/2 left-1/2 overflow-hidden rounded-3xl bg-slate-100 shadow-xl transition-all duration-500 ease-out"
                style={{
                  width: style.width,
                  height: style.height,
                  zIndex: style.z,
                  opacity: style.opacity,
                  transform: `translate(-50%, -50%) translateX(${
                    sign === 0 ? "0%" : `${sign > 0 ? style.translateX : `-${style.translateX}`}`
                  })`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt ?? ""}
                  className="h-full w-full object-cover"
                  draggable={false}
                />

                {image.hasVideo && (
                  <span className="absolute right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md">
                    <PlayIcon />
                  </span>
                )}

                {/* Caption for the centered card only */}
                {offset === 0 && (
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold whitespace-nowrap text-slate-900 shadow-md">
                    {image.label ?? currentCategory?.label}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Prev / next controls */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous image"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next image"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
