// components/ContactMap.tsx
import { Globe, ShieldCheck, Snowflake } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function ContactMap() {
  const features = [
    {
      img: "/images/contactus/globe_location_pin.png", // place inside /public/icons/
      text: "Installed in 15+ countries",
    },

    {
      img: "/images/contactus/handshake.png",
      text: "Trusted by industry leaders",
    },
    {
      img: "/images/contactus/ac_unit.png",
      text: "Built for diverse climates",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        See Vaayu Across <br /> The Globe
      </h2>
      <p className="mt-2 max-w-2xl text-gray-600">
        From homes in Himachal to factories in the Middle East — Vaayu&apos;s natural cooling
        systems are making a difference worldwide
      </p>

      {/* Map Section */}
      <div className="mt-10 rounded-2xl bg-indigo-50 p-6 shadow-md">
        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            src="/images/contactus/world-map.png"
            alt="World Map"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Features Row */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 rounded-lg border p-4">
            {/* Circle wrapper for image */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50">
              <Image
                src={feature.img}
                alt={feature.text}
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </div>

            <p className="text-gray-700">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
