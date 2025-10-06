"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Impact() {
  const videos = [
    {
      src: "/images/home/impact/videoThumbnail1.png",
      alt: "Mushroom Farm",
      label: "Mushroom Farm",
      videoSrc: "https://drive.google.com/uc?export=download&id=1oULDlRTl0lPr8vHw-ebowjrbXYxSMQs6",
    },
    {
      src: "/images/home/impact/videoThumbnail2.png",
      alt: "Institute",
      label: "Institute",
      videoSrc: "https://drive.google.com/uc?export=preview&id=1uL-etBjS2r_pAFV41w52BQqRXPHajUO1",
    },
    {
      src: "/images/home/impact/videoThumbnail3.png",
      alt: "Showroom",
      label: "Showroom",
      videoSrc: "https://drive.google.com/uc?export=preview&id=1W23kReYwMEBzNeDg2aV5n7rweogQAYvI",
    },
    {
      src: "/images/home/impact/videoThumbnail4.png",
      alt: "Covid Care Centre",
      label: "Covid Care Centre",
      videoSrc: "https://drive.google.com/uc?export=preview&id=1-b5naLNd_C7wSsW9iOtzYk279Cel1u3H",
    },
    {
      src: "/images/home/impact/videoThumbnail5.png",
      alt: "Made with FlexClip",
      label: "Made with FlexClip",
      videoSrc: "https://drive.google.com/uc?export=preview&id=14DpoyWpqpgh3TVr206VtlVmCiWr8E45G",
    },
    {
      src: "/images/home/impact/videoThumbnail6.png",
      alt: "RESTAURANT",
      label: "RESTAURANT",
      videoSrc: "https://drive.google.com/uc?export=preview&id=1vKvHtH4-oe7YmZTOyoxKUkKweCnBT4pK",
    },
  ];

  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-3xl leading-snug font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Real Impact. <br />
            Reliable Results.
          </h2>
          <p className="text-justify text-base leading-relaxed text-gray-700 sm:text-lg md:text-lg">
            See how businesses across the globe have transformed their spaces with Vaayu Aircon’s
            sustainable cooling solutions.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="scrollbar-hide mt-12 flex space-x-6 overflow-x-auto pb-4">
          {videos.map((card, index) => (
            <motion.div
              key={index}
              className={`relative aspect-square min-w-[300px] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 sm:min-w-[320px] md:min-w-[360px] ${
                playingIndex === index ? "z-10 scale-105" : ""
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {playingIndex === index ? (
                <video
                  src={card.videoSrc}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                <Image src={card.src} alt={card.alt} fill className="object-cover" />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-2xl"
                  onClick={() => setPlayingIndex(playingIndex === index ? null : index)}
                >
                  {playingIndex === index ? "⏸" : "▶"}
                </motion.button>
              </div>
              <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
