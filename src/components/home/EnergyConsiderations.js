"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EnergyConsiderations() {
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 15 } },
  };

  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-white px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left side: Heading + Image */}
        <motion.div
          className="relative flex flex-col items-start"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="line- relative z-10 text-5xl font-[500] text-black">
            Elevated Cooling <br /> Energy Considerations
          </h2>
          <div className="relative mt-6 h-[400px] w-[500px]">
            {/* Airflow animated gradient behind the image */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-lg"
              style={{
                background:
                  "linear-gradient(270deg, rgba(135,206,250,0.3), rgba(173,216,230,0.3), rgba(135,206,250,0.3))",
                backgroundSize: "600% 600%",
              }}
              initial={{ backgroundPosition: "0% 50%" }}
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              viewport={{ once: true, amount: 0.3 }}
            />
            <motion.div
              variants={floatingVariants}
              initial={{ y: 0 }}
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="h-full w-full"
            >
              <Image
                src="/images/home/cooler.png"
                alt="Cooling System"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right side: Description + Button */}
        <motion.div
          className="flex flex-col self-end-safe"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-6 text-justify text-xl leading-relaxed text-black">
            At Vaayu Aircool, we create fresh air-based cooling systems that strike a balance
            between environmental responsibility, energy efficiency, and performance. Our innovative
            technology is revolutionizing what it means to effectively cool data centers, industrial
            units, archival rooms, and other public as well as private spaces.
          </p>
          <motion.button
            className="bg-primary w-36 rounded-full px-6 py-2 text-sm text-white transition"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Know More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
