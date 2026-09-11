"use client";

import ProductInfoCard from "@/components/common/ProductInfoCard";
import { motion } from "framer-motion";
import SavingsCalculator from "./SavingsCalculator";

export default function TraditionalCooling() {
  return (
    <section className="relative min-h-screen w-full bg-[url('/images/home/traditionalcooling/traditionalcooling.png')] bg-cover bg-center">
      {/* Overlay Layer */}
      <div className="absolute inset-0 flex flex-col">
        {/* Heading & Description (Top Left) */}
        <motion.div
          className="m-2 md:absolute md:top-20 md:left-16 md:max-w-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-3xl leading-snug font-bold text-white md:text-4xl">
            More Efficient Than Traditional Air Conditioning
          </h2>
          <p className="text-justify text-base leading-relaxed text-white/90">
            Vaayu hybrid air cooling systems deliver powerful cooling while using significantly less
            electricity than conventional air conditioners. That means lower energy bills, reduced
            operating costs, and more sustainable performance for your business.
            <br />
            Enjoy fresh air circulation, reliable comfort, and up to 80% lower power consumption —
            without the high costs of traditional AC systems.
          </p>
        </motion.div>

        {/* Card + Calculator stack (Top Right) */}
        <motion.div
          className="m-2 flex flex-col gap-6 md:absolute md:top-16 md:right-16"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* <ProductInfoCard
            title="Power Consumption per Machine"
            leftTitle="1650 Watts"
            leftSubtitle="Vaayu Hybrid Air Cooler"
            rightTitle="10,000 Watts"
            rightSubtitle="Regular AC"
            icon="/images/home/traditionalcooling/bolt.svg"
            iconAlt="bolt"
            backdropBlur
          /> */}

          <SavingsCalculator />
        </motion.div>

        {/* Card Bottom Left */}
        <motion.div
          className="m-2 md:absolute md:bottom-12 md:left-60"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <ProductInfoCard
            title="Estimated Monthly Electricity Cost"
            leftTitle="₹3,465"
            leftSubtitle="Vaayu Hybrid Air Cooler"
            rightTitle="₹21,000"
            rightSubtitle="Regular AC"
            icon="/images/home/traditionalcooling/rupee.svg"
            iconAlt="rupee"
            backdropBlur
          />
        </motion.div>
      </div>
    </section>
  );
}
