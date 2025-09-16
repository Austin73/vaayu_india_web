"use client";

import { motion } from "framer-motion";

export default function Performance() {
  return (
    <section className="px-4 py-8 sm:py-12 md:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Text */}
          <motion.div
            className="bg-white-200 flex flex-col justify-center px-4 pt-16 pb-4 sm:px-6 sm:pt-20 md:px-8 md:pt-28"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-3 text-2xl leading-snug font-medium text-black sm:text-3xl md:text-4xl">
              Performance &amp; <br /> Sustainability
            </h2>
            <p className="text-justify text-sm leading-relaxed text-black sm:text-base md:text-lg">
              Vaayu Aircon delivers high-performance cooling engineered for exceptional energy
              efficiency. This ensures optimal comfort while significantly reducing electricity
              consumption. Committed to sustainability, the systems utilize eco-friendly
              refrigerants to minimize environmental impact. In a crux, Vaayu offers a powerful and
              responsible cooling solution with a lower carbon footprint thereby combining high
              value products and services.
            </p>
          </motion.div>

          {/* Right Side - Years */}
          <motion.div
            className="bg-primary-700 flex flex-col items-center justify-center px-2 sm:px-4 md:px-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex h-full w-full items-end justify-start pb-2">
              <span className="text-[80px] leading-none font-[900] text-white sm:text-[120px] md:text-[180px]">
                15
              </span>
              <span className="mb-16 ml-1.5 text-base font-bold text-white sm:mb-20 sm:text-lg md:mb-28 md:text-xl">
                Years Of <br />
                Innovation
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
