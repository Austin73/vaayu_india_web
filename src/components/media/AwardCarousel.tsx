"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface AwardCarouselItem {
  image: string;
  caption: string;
}

interface AwardCarouselProps {
  items: AwardCarouselItem[];
}

export default function AwardCarousel({ items }: AwardCarouselProps) {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full">
      {/* Header with title + controls */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold md:text-3xl">Recognition That Inspires</h3>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="rounded-full border p-2 transition hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full border p-2 transition hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Image + caption */}
      <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl shadow-md md:grid-cols-[60%_40%]">
        {/* Image */}
        <div>
          <Image
            src={items[index].image}
            alt={items[index].caption}
            width={1000}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* Caption */}
        <div className="flex p-4 md:items-end">
          <p className="text-base text-gray-700 md:text-lg">{items[index].caption}</p>
        </div>
      </div>
    </div>
  );
}
