"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EnergyConsiderations() {
  const router = useRouter();
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
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
      <div className="mx-auto max-w-6xl">
        {/* Heading Row - always 2 lines, full width */}
        <motion.h2
          className="mb-10 leading-tight font-[500] text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-[clamp(1.5rem,3.6vw,3rem)]">
            Patented Cooling Technology for
          </span>
          <span className="block text-[clamp(1.5rem,3.6vw,3rem)]">
            Industrial &amp; Commercial Spaces
          </span>
        </motion.h2>

        {/* Image + Description Row */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Left side: Image */}
          <motion.div
            className="relative flex min-w-0 flex-col items-start"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-auto w-full max-w-[500px] md:h-[400px]">
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
                className="h-auto w-full md:h-full"
              >
                <Image
                  src="/images/home/cooler.webp"
                  alt="Cooling System"
                  width={500}
                  height={400}
                  className="mt-20 h-auto w-full rounded-lg object-contain md:h-full"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side: Description */}
          <motion.div
            className="flex flex-col"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-0 text-justify text-xl leading-relaxed text-black">
              With over 10 years of expertise in industrial and commercial cooling, Vaayu has
              pioneered innovative, energy-efficient solutions designed for demanding large spaces.
              Our strength lies in understanding the unique cooling challenges of factories,
              warehouses, workshops, commercial facilities, and other high-occupancy
              environments—and engineering solutions that deliver reliable performance with
              significantly lower energy consumption.
              <br />
              <br />
              At the heart of Vaayu is our patented hybrid cooling technology, combining
              refrigeration and evaporative cooling to deliver powerful, efficient cooling with
              continuous fresh-air circulation. As a manufacturer with proprietary technology, Vaayu
              offers a distinct technological and business advantage, delivering scalable cooling
              solutions that help customers improve comfort, reduce operating costs, and move
              towards a more sustainable future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
