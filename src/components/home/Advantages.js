"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Advantages() {
  const advantages = [
    {
      image: "/images/home/advantages/advantage1.png",
      title: "Shudh Vaayu Technology For Pure, Fresh Air Circulation",
      desc: "Experience truly fresh air with every breath. Unlike commercial ACs that simply recirculate stale indoor air, our Shudh Vaayu technology ensures a constant supply of purified, outdoor air, filtered and cooled for your comfort. This not only improves air quality but also promotes a healthier indoor environment for you and your loved ones.",
    },
    {
      image: "/images/home/advantages/advantage2.png",
      title: "High Energy Efficiency That Slash Your Energy Bills",
      desc: "Revolutionize your energy consumption with our advanced systems. By leveraging state-of-the-art dual stage evaporative cooling technology, we drastically reduce your energy usage compared to traditional cooling methods, helping you save money while minimizing environmental impact.",
    },
    {
      image: "/images/home/advantages/advantage3.png",
      title: "Adaptive Features With Consistent Comfort Year-Round",
      desc: "Our intelligent cooling solutions automatically adapt to changing environmental conditions, ensuring consistent comfort throughout the year. Whether it's peak summer or the monsoon season, you enjoy optimal cooling and air quality, customized for your space.",
    },
    {
      image: "/images/home/advantages/advantage4.png",
      title: "Robust Build And All-Weather Guard",
      desc: "Engineered with durability in mind, our products are built to withstand harsh weather conditions and require minimal maintenance. The robust construction and weather-resistant materials ensure reliable performance and long-lasting value, year after year.",
    },
    {
      image: "/images/home/advantages/advantage5.png",
      title: "Carbon Footprint Reduction",
      desc: "Contribute to a greener planet by choosing our eco-friendly cooling technologies. Our systems are designed to significantly lower your carbon footprint, using sustainable methods that reduce greenhouse gas emissions and conserve energy resources.",
    },
    {
      image: "/images/home/advantages/advantage6.png",
      title: "Whisper-Quiet Cooling",
      desc: "Enjoy a peaceful environment thanks to our whisper-quiet cooling systems. Designed for silent operation, our solutions let you work, relax, or sleep without disruptive background noise, making comfort truly effortless.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:px-12">
      <div className="mx-auto mb-12 max-w-6xl">
        <h2 className="mb-4 text-4xl font-bold text-black">Vaayu Advantages</h2>
        <p className="text-xl text-black">The Smart and Sustainable Choice.</p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {advantages.map((adv, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg bg-white"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Image
              src={adv.image}
              alt={adv.title}
              width={500}
              height={350}
              className="mb-4 w-full object-cover"
              priority={true}
            />
            {/* Overlay with title - visible initially */}
            <motion.div
              className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black p-4"
              variants={{
                rest: { opacity: 0.95 },
                hover: { opacity: 0, transition: { duration: 0.4 } },
              }}
            >
              <h3 className="text-center text-lg font-bold text-white">{adv.title}</h3>
            </motion.div>

            {/* Card content - image already rendered above, content below */}
            <div className="p-6">
              <h3 className="mb-2 text-base leading-snug font-bold text-black underline">
                {adv.title}
              </h3>
              <p className="text-sm leading-relaxed text-black">
                {adv.desc}
                <a href="#" className="text-gray-600 underline hover:text-gray-800">
                  read more.
                </a>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
