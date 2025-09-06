// components/Partners.tsx
import Image from "next/image";
import React from "react";

const partners = [
  { src: "/images/partners/drdo.png", alt: "DRDO" },
  { src: "/images/partners/hero.png", alt: "Hero" },
  { src: "/images/partners/wipro.png", alt: "Wipro" },
  { src: "/images/partners/army.png", alt: "Indian Army" },
  { src: "/images/partners/mondelez.png", alt: "Mondelez" },
  { src: "/images/partners/tourism.png", alt: "Incredible India" },
  { src: "/images/partners/greatgalleon.png", alt: "Great Galleon Ventures" },
  { src: "/images/partners/mcdonalds.png", alt: "McDonalds" },
  { src: "/images/partners/railways.png", alt: "Indian Railways" },
];

export default function Partners() {
  return (
    <section className="mx-auto mb-10 max-w-7xl px-6">
      <h2 className="font-semi-bold text-3xl text-gray-900">The A-List Of Cool.</h2>
      <p
        className="mt-2 font-[Satoshi] text-[20px] leading-[100%] font-normal text-gray-600"
        style={{ letterSpacing: "0%", verticalAlign: "middle" }}
      >
        From agile innovators to market leaders, <br />
        our partners have one thing in common: <br />a commitment to a better-cooled future for
        everyone, everywhere.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {partners.map((p, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm"
          >
            <Image src={p.src} alt={p.alt} width={150} height={80} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
