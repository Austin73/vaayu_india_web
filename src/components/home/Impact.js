"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Impact() {
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
          <h2 className="mb-4 text-4xl leading-snug font-bold text-gray-900 md:text-5xl">
            Real Impact. <br />
            Reliable Results.
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            See how businesses across the globe have transformed their spaces with Vaayu Aircon’s
            sustainable cooling solutions.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/home/impact/videoThumbnail1.png"
              alt="Mushroom Farm"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-2xl"
              >
                ▶
              </motion.button>
            </div>
            {/* Label */}
            <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
              Mushroom Farm
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/home/impact/videoThumbnail2.png"
              alt="Institute"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-2xl"
              >
                ▶
              </motion.button>
            </div>
            <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
              Institute
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/home/impact/videoThumbnail3.png"
              alt="Showroom"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-2xl"
              >
                ▶
              </motion.button>
            </div>
            <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
              Showroom
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
