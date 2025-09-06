"use client";

import Image from "next/image";
import ProductInfoCard from "@/components/common/ProductInfoCard";

export default function TraditionalCooling() {
  return (
    <section className="relative h-screen w-full bg-[url('/images/home/traditionalcooling/traditionalcooling.png')] bg-cover bg-center">
      {/* Overlay Layer */}
      <div className="absolute inset-0 flex flex-col">
        {/* Heading & Description (Top Left) */}
        <div className="absolute top-16 left-8 max-w-md md:top-20 md:left-16">
          <h2 className="mb-4 text-3xl leading-snug font-bold text-white md:text-4xl">
            Better Than <br /> Traditional Cooling
          </h2>
          <p className="text-base leading-relaxed text-white/90">
            Experience more savings, more efficiency, and more comfort — all with less water,
            energy, and maintenance.
          </p>
        </div>

        {/* Card Top Right */}
        <div className="absolute top-24 right-40">
          <ProductInfoCard
            title="Power Input (Watts) Per Machine"
            leftTitle="1650"
            leftSubtitle="Vaayu Air Cooler"
            rightTitle="10,000"
            rightSubtitle="Regular AC"
            icon="/images/home/traditionalcooling/bolt.svg"
            iconAlt="bolt"
            backdropBlur
          />
        </div>

        {/* Card Bottom Left */}
        <div className="absolute bottom-16 left-60">
          <ProductInfoCard
            title="Monthly Bill (Approx)"
            leftTitle="3,465"
            leftSubtitle="Vaayu Air Cooler"
            rightTitle="21,000"
            rightSubtitle="Regular AC"
            icon="/images/home/traditionalcooling/rupee.svg"
            iconAlt="rupee"
            backdropBlur
          />
        </div>
      </div>
    </section>
  );
}
