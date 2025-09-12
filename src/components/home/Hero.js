"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const { openModal } = useModal();

  const animationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightAnimationVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden md:min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero/background.png)" }}
      />
      {/* Carbon Watch (right) */}
      <motion.div
        className="absolute top-[40%] right-20 hidden -translate-y-1/2 md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        variants={rightAnimationVariants}
      >
        <Image
          src="/images/hero/carbonwatch.png"
          alt="Reduce Carbon Emission by 80%"
          width={240}
          height={240}
          className="object-contain"
          priority
        />
      </motion.div>
      {/* Headline + CTA (center) */}
      <motion.div
        className="relative mx-auto max-w-[1100px] px-4 pt-36 text-center md:pt-48 lg:pt-56"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        variants={animationVariants}
      >
        <h1 className="font-500 text-[40px] leading-tight text-black sm:text-[52px] lg:text-[58px]">
          Cool Innovation
          <br />
          Efficient <span className="font-serif italic">Sustainability</span>
        </h1>

        <motion.button
          className="bg-primary mt-6 inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white shadow-md hover:shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={animationVariants}
          onClick={() => {
            openModal();
          }}
        >
          Book A Call With Expert
        </motion.button>
      </motion.div>

      {/* Bottom Cards (frosted) */}
      <motion.div
        className="absolute bottom-6 flex h-[240px] gap-4 justify-self-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.4 }}
        variants={animationVariants}
      >
        {/* Card 1 */}
        <div className="flex w-[610px] items-center rounded-2xl border border-white/30 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md">
          {/* Left Image */}
          <div className="self-center">
            <Image
              src="/images/hero/person1.png"
              alt="Customer enjoying cool air"
              width={320}
              height={200}
              className="object-scale-down p-2"
            />
          </div>
          {/* Right Content */}
          <div className="flex flex-col self-end-safe p-6">
            <p className="text-lg leading-snug font-bold text-white">80% Slash On Energy Bills</p>
            <p className="mt-2 text-sm text-white/90">Your cool energy efficient Choice</p>
            <a
              href="#"
              className="mt-4 inline-block text-sm text-white underline underline-offset-4"
            >
              Explore Our Product
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center rounded-2xl border border-white/30 bg-white/10 px-1 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm">
          <div className="mb-4 flex -space-x-3 self-center">
            <Image
              src="/images/hero/person2.png"
              alt="avatar"
              width={60}
              height={60}
              className="rounded-full object-cover ring-1 ring-white"
            />
            <Image
              src="/images/hero/person3.png"
              alt="avatar"
              width={60}
              height={60}
              className="rounded-full object-cover ring-1 ring-gray-200"
            />
            <Image
              src="/images/hero/person4.png"
              alt="avatar"
              width={60}
              height={60}
              className="rounded-full object-cover ring-1 ring-gray-200"
            />
            <Image
              src="/images/hero/person5.png"
              alt="avatar"
              width={60}
              height={60}
              className="rounded-full object-cover ring-1 ring-gray-200"
            />
          </div>
          <div className="text-center">
            <div className="text-[42px] leading-none font-[500] text-white">10M+</div>
            <p className="text-[22px] font-[500] text-white/90">Energy Warrior Customers</p>
            <a
              href="#"
              className="mt-3 inline-block text-sm font-[400] text-white/95 underline underline-offset-4"
            >
              See What Our Customers
              <br className="hidden sm:block" /> Saying
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm">
          <div className="text-primary mb-6 grid h-15 w-15 place-items-center rounded-full bg-white text-[12px] font-semibold">
            CO₂
          </div>
          <p className="font-bold text-white">
            Positive Carbon Footprints
            <br /> Reduction
          </p>
          <p className="mt-3 text-sm text-white">
            Acclaimed reduction in carbon
            <br /> emissions by 80%.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
