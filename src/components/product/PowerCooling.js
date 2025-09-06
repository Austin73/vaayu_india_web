"use client";

import ProductInfoCard from "@/components/common/ProductInfoCard";
import { useModal } from "@/hooks/useModal";

export default function PowerCooling() {
  const { openModal } = useModal();
  return (
    <section className="relative w-full bg-white py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading and description */}
        <div className="flex items-start justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-4xl leading-tight font-semibold text-black">
              Powerful Cooling. 80% Less Energy.
            </h2>
            <p className="text-lg leading-relaxed text-black">
              Vaayu’s patented Hybrid Aircooling Systems deliver clean, consistent, and
              energy-efficient cooling — without compressors, without compromise.
            </p>
          </div>
          <div className="self-end">
            <button
              className="border-primary text-primary hover:bg-primary-700 rounded-full border px-6 py-2 text-sm font-medium transition hover:text-white"
              onClick={() => {
                openModal();
              }}
            >
              Book a call
            </button>
          </div>
        </div>

        {/* Product image with overlays */}
        <div className="relative mt-12 flex h-screen w-full justify-center bg-[url('/images/product/powercooling.png')] bg-contain bg-center bg-no-repeat">
          {/* Left overlay - positioned relative to the image container using percentages for stable alignment */}
          <div className="absolute top-18 left-4">
            <ProductInfoCard
              title="Power Input (Watts) Per Machine"
              leftTitle="1650"
              leftSubtitle="Vaayu Air Cooler"
              rightTitle="10,000"
              rightSubtitle="Regular AC"
              icon="/images/home/traditionalcooling/bolt.svg"
              iconAlt="bolt"
              backgroundColor="bg-primary-700"
            />
          </div>

          {/* Right overlay - positioned relative to the image container using percentages for stable alignment */}
          <div className="absolute right-1 bottom-18">
            <ProductInfoCard
              title="Monthly Bill (Approx)"
              leftTitle="3,465"
              leftSubtitle="Vaayu Air Cooler"
              rightTitle="21,000"
              rightSubtitle="Regular AC"
              icon="/images/home/traditionalcooling/rupee.svg"
              iconAlt="rupee"
              backgroundColor="bg-primary-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
