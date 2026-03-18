"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
  image: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
};

type HomeHeroSliderProps = {
  slides: HeroSlide[];
};

const AUTOPLAY_INTERVAL_MS = 6500;

export function HomeHeroSlider({ slides }: HomeHeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;

  const goTo = (index: number) => {
    if (slideCount === 0) return;
    const normalized = ((index % slideCount) + slideCount) % slideCount;
    setActiveIndex(normalized);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (slideCount <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [slideCount]);

  const activeSlide = slides[activeIndex];

  if (!activeSlide) return null;

  return (
    <section
      className="relative overflow-hidden rounded-[2rem] border border-brand-gray/40 bg-base-black shadow-soft"
      aria-label="Resumen destacado de Dosmas Grup"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrev();
        }
      }}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition duration-700 ease-out",
              index === activeIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-base-black/60" />
        <div className="absolute inset-y-0 right-0 hidden w-[32%] bg-brand-purple lg:block" />
      </div>

      <div className="relative grid min-h-[560px] gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow">{activeSlide.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {activeSlide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">{activeSlide.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={activeSlide.ctaHref}
              className="inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {activeSlide.ctaLabel}
            </Link>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Slide anterior"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-brand-gray text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-brand-gray text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <aside className="grid content-end gap-4 sm:grid-cols-2 lg:grid-cols-1" aria-label="Indicadores de empresa">
          {activeSlide.metrics.map((metric) => (
            <article
              key={`${activeSlide.id}-${metric.label}`}
              className="rounded-2xl border border-white/20 bg-white p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gray">{metric.label}</p>
              <p className="mt-2 text-3xl font-bold text-brand-purple">{metric.value}</p>
            </article>
          ))}
        </aside>
      </div>

      <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between sm:left-10 sm:right-10 lg:left-14 lg:right-14">
        <div className="flex items-center gap-2" role="tablist" aria-label="Selector de slides">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Mostrar slide ${index + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                index === activeIndex ? "w-9 bg-brand-yellow" : "w-2.5 bg-white hover:bg-brand-gray"
              )}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
          {String(activeIndex + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
