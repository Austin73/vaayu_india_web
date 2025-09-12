"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyVaayu(props) {
  const { heading, description, cardData } = props;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  // Define multiple variants for different animations
  const cardVariantsArray = [
    {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
  ];

  return (
    <section className="bg-primary-700 relative w-full px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mb-12 max-w-3xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-4 text-4xl leading-snug font-bold text-white md:text-5xl">{heading}</h2>
          {description && <p className="text-lg leading-relaxed text-white/90">{description}</p>}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Cards */}
          {cardData.map((data, index) => {
            const variant = cardVariantsArray[index % cardVariantsArray.length];
            return (
              <motion.div
                key={data.id}
                className="rounded-2xl border border-gray-300 bg-gradient-to-b from-white/10 to-white/10 p-6 text-white shadow-md backdrop-blur-2xl"
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white-100 mb-6 flex h-14 w-14 items-center justify-center rounded-full">
                  <Image
                    src={data.icon}
                    alt={data.alt}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold">{data.title}</h3>
                <p className="text-sm text-white/80">{data.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
