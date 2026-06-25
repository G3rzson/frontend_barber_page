"use client";

import { GALLERY_IMAGES } from "@/constants/data";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = GALLERY_IMAGES.length;

  function goToPrev() {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }

  function goToNext() {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }

  return (
    <section className="section" id="works">
      <h2 className="section-title">Munkáink</h2>

      <div className="mx-auto w-full max-w-4xl">
        <div className="relative overflow-hidden rounded-lg border border-amber-400 bg-black/50">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {GALLERY_IMAGES.map((image) => (
              <div key={image.id} className="min-w-full">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={`Gallery image ${image.id}`}
                    fill
                    sizes="(min-width: 1024px) 64rem, 100vw"
                    className="object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goToPrev}
            aria-label="Előző kép"
            className="absolute left-3 top-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-amber-400 transition hover:bg-black"
          >
            <ArrowBigLeft />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Következő kép"
            className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-amber-400 transition hover:bg-black"
          >
            <ArrowBigRight />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${index + 1}. kép`}
              className={`h-2.5 w-2.5 rounded-full transition cursor-pointer ${
                activeIndex === index
                  ? "bg-amber-400"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
