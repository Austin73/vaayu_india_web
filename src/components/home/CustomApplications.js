"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomApplications() {
  return (
    <section className="bg-white px-6 py-20 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-2 text-4xl leading-snug font-medium text-black">
            One Product. Customized <br /> For Hundreds Of <br /> Applications.
          </h2>
        </motion.div>
        {/* Right Image */}
        <motion.div
          className="relative -mt-10 flex flex-col items-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          style={{ zIndex: 10 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Airflow gradient behind the image */}
          <div
            className="absolute -top-10 -left-10 h-[470px] w-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,123,255,0.15), transparent 70%)",
              filter: "blur(80px)",
              zIndex: -1,
            }}
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/home/customapplications/cooler.png"
              alt="Vaayu Product"
              width={500}
              height={450}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-between"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-black">
            Vaayu effortlessly fits into variegated settings where air quality and sustainability
            are of utmost importance, ranging from food processing facilities and textile
            manufacturing plants to coaching centers and hospitality venues. Simply, easy to buy!
          </p>
          <motion.div
            className="mt-6 self-end"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button className="bg-primary rounded-full px-6 py-2 text-white transition hover:scale-105">
              Explore Applications
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
