"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectGallerySliderProps = {
  images: string[];
  label: string;
};

export function ProjectGallerySlider({ images, label }: ProjectGallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];

  const goTo = (index: number) => {
    const normalized = ((index % images.length) + images.length) % images.length;
    setActiveIndex(normalized);
  };

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-[2rem] border border-brand-gray/35 bg-base-black shadow-soft">
        <div className="relative aspect-[16/9]">
          <Image
            src={activeImage}
            alt={`${label} ${activeIndex + 1}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 80vw, 100vw"
            priority
          />
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Imagen anterior"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-brand-purple text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="rounded-full bg-base-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Siguiente imagen"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-brand-yellow text-base-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => goTo(index)}
            className={cn(
              "relative overflow-hidden rounded-2xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
              index === activeIndex ? "border-brand-purple shadow-soft" : "border-brand-gray/30"
            )}
            aria-label={`Mostrar imagen ${index + 1}`}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image}
                alt={`${label} miniatura ${index + 1}`}
                fill
                className={cn("object-cover transition", index === activeIndex ? "opacity-100" : "opacity-85 hover:opacity-100")}
                sizes="(min-width: 1024px) 12vw, (min-width: 640px) 22vw, 30vw"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
