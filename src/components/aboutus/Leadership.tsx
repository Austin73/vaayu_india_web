import React from "react";
import Image from "next/image";

export default function Leadership() {
  return (
    <section className="mx-auto max-w-7xl space-y-20 px-6 py-16">
      {/* Priyanka */}
      <div className="grid items-center gap-10 space-y-10 md:grid-cols-2 md:gap-16 md:space-y-0">
        <Image
          src="/images/about/priyanka.png"
          alt="Dr. Priyanka Mokshmar"
          width={800}
          height={900}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full rounded-2xl shadow-md"
        />
        <div className="max-w-prose">
          <h3 className="text-2xl font-semibold text-gray-900">Dr. Priyanka Mokshmar</h3>
          <p className="text-gray-500">Founder & CMD, Vaayu Aircon</p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Meet the force revolutionizing HVAC. With 12+ years of expertise, Dr. Mokshmar founded
            Vaayu to build what&apos;s next: intelligent, sustainable air solutions.
          </p>
          <ul className="mt-4 ml-5 list-disc space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Innovator:</span> Her vision has led Vaayu Aircon to win the
              SKOCH Award, be named a Top 100 SME, and secure her a spot as a Top Woman in Tech.
            </li>
            <li>
              <span className="font-medium">Global Ambassador:</span> She represents Indian
              ingenuity on the world stage.
            </li>
            <li>
              <span className="font-medium">Mentor:</span> She&apos;s igniting the future for women
              in tech via platforms like NITI Aayog and Goldman Sachs.
            </li>
          </ul>
        </div>
      </div>

      {/* Pranav */}
      <div className="grid items-center gap-10 space-y-10 md:grid-cols-2 md:gap-16 md:space-y-0">
        <div className="max-w-prose">
          <h3 className="text-2xl font-semibold text-gray-900">Mr. Pranav Mokshmar</h3>
          <p className="text-gray-500">Managing Director, Vaayu Aircon</p>
          <p className="mt-1 text-sm text-gray-500 italic">
            Hybrid AHU Visionary • Sustainable Cooling Advocate • HVAC Innovator
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Pranav Mokshmar, a pioneer in Hybrid AHU technology, combines deep engineering expertise
            with a mission for sustainability. His work is redefining the way cooling systems
            balance performance and environmental impact.
          </p>
        </div>
        <Image
          src="/images/about/pranav.png"
          alt="Mr. Pranav Mokshmar"
          width={800}
          height={900}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full rounded-2xl shadow-md"
        />
      </div>
    </section>
  );
}
