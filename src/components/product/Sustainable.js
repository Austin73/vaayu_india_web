"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";

export default function Sustainable() {
  const { openModal } = useModal();
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="mb-10 text-4xl leading-tight font-semibold text-black md:text-5xl">
          Smart. Sustainable. <br /> Built To Perform.
        </h2>

        {/* Images Row */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl">
            <Image
              src="/images/product/sustainableleft.png"
              alt="Vaayu Hybrid Aircooling Machine"
              width={600}
              height={500}
              className="mx-auto h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="rounded-2xl">
            <Image
              src="/images/product/sustainableright.png"
              alt="Office with Vaayu Hybrid Aircooling"
              width={600}
              height={500}
              className="mx-auto h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Description and CTA */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            Explore the Vaayu Hybrid Aircooling System — designed with precision, durability, and
            eco-efficiency in mind. From its compressor-free architecture to streamlined airflow
            design, every detail is crafted for performance and planet.
          </p>
          <button
            className="border-primary text-primary hover:bg-primary-700 self-end-safe rounded-full border px-6 py-2 text-sm font-medium transition hover:text-white"
            onClick={() => {
              openModal();
            }}
          >
            Talk to Expert
          </button>
        </div>
      </div>
    </section>
  );
}
