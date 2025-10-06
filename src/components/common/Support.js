"use client";

import { motion } from "framer-motion";

export default function Support(props) {
  const { cardsData } = props;
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Different animation variants for each card:
  const cardVariantsArr = [
    {
      // Card 1: slide in from left + fade
      hidden: { opacity: 0, x: -60, scale: 0.97 },
      visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.55 } },
    },
    {
      // Card 2: slide in from bottom + fade
      hidden: { opacity: 0, y: 60, scale: 0.97 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
    },
    {
      // Card 3: slide in from right + fade
      hidden: { opacity: 0, x: 60, scale: 0.97 },
      visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.55 } },
    },
  ];

  return (
    <section className="relative w-full bg-white px-6 py-20 md:px-30">
      <motion.div
        className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cardsData.map((card, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col justify-between rounded-2xl ${card.bg} ${card.text} min-h-[450px] border border-gray-200 p-8 shadow-sm`}
            variants={cardVariantsArr[idx]}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 className="mb-4 text-2xl leading-snug font-bold">{card.title}</h3>
              <p className="text-justify text-base leading-relaxed">{card.description}</p>
            </div>
            <div className="mt-8">
              <button
                className={`rounded-full px-6 py-2 text-sm font-medium ${card.btnStyle}`}
                onClick={card.onClick}
              >
                {card.button}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
