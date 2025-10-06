"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/latestpressrelease1.png",
  },
];

export default function LatestPressRelease() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);
  return (
    <section className="bg-white px-18 py-24 md:px-30 lg:px-38">
      <h2 className="text-start text-3xl font-extrabold text-black md:text-4xl">
        Read Latest Press Release
      </h2>

      {/* Scrollable Container */}
      <div className="relative">
        <div
          className={`mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 overflow-hidden md:grid-cols-3 ${
            !showAll ? "max-h-[700px]" : "max-h-none"
          }`}
        >
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-white-100 m-2 flex flex-col overflow-hidden rounded-4xl p-4 text-center"
            >
              <Image
                src={service.img}
                alt={service.alt}
                width={500}
                height={600}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>
      <div className="mt-30 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="border-primary text-primary hover:bg-primary-700 rounded-full border px-6 py-2 text-sm font-medium transition hover:text-white"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
}
