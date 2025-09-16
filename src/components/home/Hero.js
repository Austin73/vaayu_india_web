"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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

  const headlineControls = useAnimation();
  const carbonWatchControls = useAnimation();
  const bottomCardsControls = useAnimation();

  useEffect(() => {
    headlineControls.start("visible");
    carbonWatchControls.start("visible");
    bottomCardsControls.start("visible");
  }, [headlineControls, carbonWatchControls, bottomCardsControls]);

  return (
    <section className="relative min-h-[92vh] overflow-x-hidden md:min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 min-h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero/background.png)" }}
      />
      {/* Headline + CTA (center) */}
      <motion.div
        className="relative mx-auto max-w-[1100px] px-4 pt-20 text-center md:pt-48 lg:pt-56"
        initial="hidden"
        animate={headlineControls}
        transition={{ duration: 1 }}
        variants={animationVariants}
      >
        <h1 className="font-500 text-[32px] leading-tight text-black sm:text-[40px] lg:text-[58px]">
          Cool Innovation
          <br />
          Efficient <span className="font-serif italic">Sustainability</span>
        </h1>

        <motion.button
          className="bg-primary mt-6 inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white shadow-md hover:shadow-lg"
          initial="hidden"
          animate={headlineControls}
          transition={{ duration: 1, delay: 0.2 }}
          variants={animationVariants}
          onClick={() => {
            openModal();
          }}
        >
          Book A Call With Expert
        </motion.button>
      </motion.div>
      {/* Carbon Watch (right) */}
      <motion.div
        className="mx-auto mt-8 block w-[240px] md:absolute md:top-[40%] md:right-20 md:block md:-translate-y-1/2"
        initial="hidden"
        animate={carbonWatchControls}
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

      {/* Bottom Cards (frosted) */}
      <motion.div
        className="mx-auto mt-8 mb-4 flex max-w-[1100px] flex-col gap-4 px-4 md:absolute md:bottom-6 md:h-[240px] md:flex-row md:gap-4 md:justify-self-center"
        initial="hidden"
        animate={bottomCardsControls}
        transition={{ duration: 1, delay: 0.4 }}
        variants={animationVariants}
      >
        {/* Card 1 */}
        <div className="flex w-full items-center rounded-2xl border border-white/30 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md md:w-[610px]">
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
        <div className="flex w-full flex-col justify-center rounded-2xl border border-white/30 bg-white/10 px-1 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm md:w-auto md:flex-col">
          <div className="mb-2 flex -space-x-3 self-center py-2">
            <Image
              src="/images/hero/person2.png"
              alt="avatar"
              width={55}
              height={55}
              className="rounded-full object-cover ring-1 ring-white"
            />
            <Image
              src="/images/hero/person3.png"
              alt="avatar"
              width={55}
              height={55}
              className="rounded-full object-cover ring-1 ring-gray-200"
            />
            <Image
              src="/images/hero/person4.png"
              alt="avatar"
              width={55}
              height={55}
              className="rounded-full object-cover ring-1 ring-gray-200"
            />
            <Image
              src="/images/hero/person5.png"
              alt="avatar"
              width={55}
              height={55}
              className="rounded-full object-cover ring-1 ring-gray-200"
            />
          </div>
          <div className="text-center">
            <div className="text-[38px] leading-none font-[500] text-white">10M+</div>
            <p className="text-[20px] font-[500] text-white/90">Energy Warrior Customers</p>
            <a
              href="#"
              className="mt-1 inline-block text-sm font-[400] text-white/95 underline underline-offset-4"
            >
              See What Our Customers Saying
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm">
          <div className="text-primary mb-6 grid h-15 w-15 place-items-center rounded-full bg-white text-[12px] font-semibold">
            CO₂
          </div>
          <p className="font-bold text-white">Positive Carbon Footprints Reduction</p>
          <p className="mt-3 text-sm text-white">Acclaimed reduction in carbon emissions by 80%.</p>
        </div>
      </motion.div>
    </section>
  );
}
