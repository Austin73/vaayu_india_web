"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  { alt: "latestpressrelease45", img: "/images/pressrelease/045.jpeg" },
  { alt: "latestpressrelease47", img: "/images/pressrelease/047.jpeg" },
  { alt: "latestpressrelease48", img: "/images/pressrelease/048.jpeg" },
  { alt: "latestpressrelease49", img: "/images/pressrelease/049.jpeg" },
  { alt: "latestpressrelease50", img: "/images/pressrelease/050.jpeg" },
  { alt: "latestpressrelease51", img: "/images/pressrelease/051.jpeg" },
  { alt: "latestpressrelease52", img: "/images/pressrelease/052.jpeg" },
  { alt: "latestpressrelease53", img: "/images/pressrelease/053.jpeg" },
  { alt: "latestpressrelease54", img: "/images/pressrelease/054.jpeg" },
  { alt: "latestpressrelease55", img: "/images/pressrelease/055.jpeg" },
  { alt: "latestpressrelease56", img: "/images/pressrelease/056.jpeg" },
  { alt: "latestpressrelease57", img: "/images/pressrelease/057.jpeg" },
  { alt: "latestpressrelease58", img: "/images/pressrelease/058.jpeg" },
  { alt: "latestpressrelease59", img: "/images/pressrelease/059.jpeg" },
  { alt: "latestpressrelease60", img: "/images/pressrelease/060.jpeg" },
  { alt: "latestpressrelease61", img: "/images/pressrelease/061.jpeg" },
  { alt: "latestpressrelease62", img: "/images/pressrelease/062.jpeg" },
  { alt: "latestpressrelease63", img: "/images/pressrelease/063.jpeg" },
  { alt: "latestpressrelease64", img: "/images/pressrelease/064.jpeg" },
  { alt: "latestpressrelease65", img: "/images/pressrelease/065.jpeg" },
  { alt: "latestpressrelease66", img: "/images/pressrelease/066.jpeg" },
  { alt: "latestpressrelease67", img: "/images/pressrelease/067.jpeg" },
  { alt: "latestpressrelease68", img: "/images/pressrelease/068.jpeg" },
  { alt: "latestpressrelease69", img: "/images/pressrelease/069.jpeg" },
  { alt: "latestpressrelease70", img: "/images/pressrelease/070.jpeg" },
  { alt: "latestpressrelease71", img: "/images/pressrelease/071.jpeg" },
  { alt: "latestpressrelease72", img: "/images/pressrelease/072.jpeg" },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/005.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/006.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/007.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/008.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/009.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/010.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/011.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/012.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/013.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/014.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/027.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/028.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/029.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/030.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/031.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/032.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/033.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/034.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/035.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/036.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/037.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/038.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/039.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/040.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/042.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/043.jpg",
  },
  {
    alt: "latestpressrelease1",
    img: "/images/pressrelease/044.jpg",
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
