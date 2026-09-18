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

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
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
          <h2 className="relative z-10 w-full leading-tight font-[500] text-black">
            <span className="block text-[clamp(1.1rem,3.6vw,3rem)] whitespace-nowrap">
              Patented Cooling Technology for
            </span>
            <span className="block text-[clamp(1.1rem,3.6vw,3rem)] whitespace-nowrap">
              Industrial &amp; Commercial Spaces
            </span>
          </h2>
          <div className="relative mt-6 h-auto w-full max-w-[500px] md:h-[400px]">
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
                src="/images/home/cooler.png"
                alt="Cooling System"
                width={500}
                height={400}
                className="h-auto w-full rounded-lg object-cover md:h-full"
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
          <p className="mb-0 text-justify text-xl leading-relaxed text-black">
            With over <bold>10 years of expertise in industrial and commercial cooling</bold>, 
          Vaayu has pioneered innovative, energy-efficient solutions designed for demanding large spaces. 
            Our strength lies in understanding the unique cooling challenges of factories, warehouses, workshops, commercial facilities, 
            and other high-occupancy environments—and engineering solutions that deliver reliable performance with significantly lower energy consumption.
            <br />
            <br />
           At the heart of Vaayu is our *patented hybrid cooling technology, combining refrigeration and evaporative cooling to deliver powerful, 
            efficient cooling with continuous fresh-air circulation. As a manufacturer with proprietary technology, Vaayu offers a **distinct technological and business advantage*, delivering scalable cooling solutions that help customers improve comfort, reduce operating costs, 
            and move towards a more sustainable future.
          </p>
          {/* <motion.button
            className="bg-primary w-full max-w-[144px] rounded-full px-6 py-2 text-sm text-white transition md:w-36"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={() => router.push("/product")}
          >
            Know More
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}
