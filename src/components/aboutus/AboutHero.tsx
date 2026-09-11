import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6 py-12">
      {/* Text Section */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex items-start">
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Redefining Cool</h3>
          <p className="leading-relaxed text-gray-600">
            Vaayu Aircon engineers next-generation Hybrid AHUs that cut energy consumption by up to
            80% and water use by 60%, without compromising on performance.
          </p>
          <p className="mt-7 leading-relaxed text-gray-600">
            While the industry keeps building bigger, thirstier systems, we&apos;re building smarter
            ones — sustainable, scalable cooling technology engineered for the businesses and
            buildings of tomorrow.
          </p>
          <p className="mt-7 leading-relaxed text-gray-600">
            Less energy. Less water. More cool. This is climate-conscious cooling, built for scale.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-7">
        <Image
          src="/images/about/team-trophy.png"
          alt="Vaayu team with awards"
          width={1200}
          height={700}
          className="w-full rounded-xl object-cover shadow-lg"
        />
      </div>

      <div className="mt-11">
        <div className="flex items-start">
          <h3 className="text-4xl font-bold text-gray-900">Who We Are</h3>
        </div>

        <div>
          <p className="leading-relaxed text-gray-600">
            Vaayu Aircon designs and manufactures energy-efficient hybrid air cooling systems for
            commercial, industrial, and institutional spaces. With over 10 years of engineering
            expertise, we&apos;ve delivered reliable cooling solutions across factories, warehouses,
            offices, schools, and public facilities throughout India.
          </p>

          <p className="mt-7 leading-relaxed text-gray-600">
            Our in-house engineering team is focused on one thing: building systems that perform
            under real-world demands — not just in a spec sheet.
          </p>

          <p className="mt-7 leading-relaxed text-gray-600">
            Fresh-air circulation — not recycled indoor air
            <br />
            Up to 20°C temperature difference in cooled spaces
            <br /> Up to 80% lower power consumption than traditional systems
          </p>
          <p className="mt-7 leading-relaxed text-gray-600">
            For large-format spaces, this isn&apos;t just an upgrade — it&apos;s a smarter category
            of cooling altogether.
          </p>
        </div>
      </div>
      <div className="mt-7">
        <Image
          src="/images/about/abouthero.jpeg"
          alt="Vaayu team with awards"
          width={1200}
          height={700}
          className="w-full rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
