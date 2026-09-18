"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { AirVent, ZapOff, Droplets, Wind, Thermometer, Leaf, Award } from "lucide-react";

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

  const fadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const headlineControls = useAnimation();
  const carbonWatchControls = useAnimation();
  const featureBoxesControls = useAnimation();

  useEffect(() => {
    headlineControls.start("visible");
    carbonWatchControls.start("visible");
    featureBoxesControls.start("visible");
  }, [headlineControls, carbonWatchControls, featureBoxesControls]);

  const features = [
    {
      icon: AirVent,
      label: "Compressor based unique cooling tech",
    },
    {
      icon: ZapOff,
      label: "Reduce Power Consumption by 80%",
    },
    {
      icon: Droplets,
      label: "Reduce Water Consumption by 60%",
    },
    {
      icon: Wind,
      label: "100% Fresh Air",
    },
    {
      icon: Thermometer,
      label: "20° temperature drop",
    },
    {
      icon: Leaf,
      label: "Eco friendly",
    },
    {
      icon: Award,
      label: "Generates Carbon Credits",
    },
  ];

  return (
    <section className="relative min-h-[92vh] overflow-hidden md:min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/hero/background.webp)",
        }}
      />

      {/* Headline */}
      <motion.div
        className="relative z-10 mx-auto max-w-[1100px] px-4 pt-20 text-center md:pt-48 lg:pt-56"
        initial="hidden"
        animate={headlineControls}
        transition={{ duration: 1 }}
        variants={animationVariants}
      >
        <h1 className="font-500 text-[15px] leading-tight text-black sm:text-[23px] lg:text-[41px]">
          Smart Air Cooling System that
          <br />
          Cuts Energy Cost by Up to 80%
        </h1>
      </motion.div>

      {/* Carbon Watch */}
      <motion.div
        className="mx-auto mt-8 block w-[200px] md:absolute md:top-[40%] md:right-20 md:w-[240px] md:-translate-y-1/2"
        initial="hidden"
        animate={carbonWatchControls}
        transition={{ duration: 1 }}
        variants={rightAnimationVariants}
      >
        <Image
          src="/images/hero/carbonwatch.svg"
          alt="Reduce Carbon Emission"
          width={240}
          height={240}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Feature Cards - Almost at the bottom of Hero */}
      <motion.div
        className="absolute bottom-5 left-1/2 z-10 grid w-[calc(100%-40px)] max-w-[1550px] -translate-x-1/2 grid-cols-7 gap-4"
        initial="hidden"
        animate={featureBoxesControls}
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={fadeUpVariants}
      >
        {features.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex min-h-[190px] flex-col items-center justify-center gap-6 rounded-3xl border border-white/30 bg-white/10 px-5 py-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md"
          >
            {/* Icon */}
            <div className="text-primary grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white">
              <Icon size={28} strokeWidth={2} />
            </div>

            {/* Text */}
            <p className="text-base leading-snug font-semibold text-white">{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
