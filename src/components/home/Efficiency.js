"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Efficiency() {
  const router = useRouter();
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="overflow-hidden rounded-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/images/home/efficiency/efficiency.png"
            alt="Vaayu Cooling System"
            width={525}
            height={900}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="mb-3 text-3xl leading-snug font-medium text-black">
            High Cooling Efficiency, <br /> Lower Energy Bills
          </h2>
          <p className="mb-3 text-base leading-relaxed text-black">
            Experience superior comfort with Vaayu Aircon, your specialist in high-efficiency
            cooling solutions. Our advanced technology, centered around innovative Air Handling
            Units (AHUs) and Air Washers, delivers powerful cooling while significantly reducing
            power consumption.
          </p>

          <p className="mb-3 text-lg font-bold text-black">Our product range includes:</p>

          <ul className="mb-6 space-y-4">
            <li className="border-b border-gray-200 pb-2">
              <p className="font-semibold text-black">Single Stage Evaporative Cooling</p>
              <p className="text-xs text-black">For reliable and cost-effective performance.</p>
            </li>
            <li className="border-b border-gray-200 pb-3">
              <p className="font-semibold text-black">Dual Stage Evaporative Cooling</p>
              <p className="text-xs text-black">
                Offering maximum cooling efficiency and enhanced comfort.
              </p>
            </li>
            <li className="border-b border-gray-200 pb-3">
              <p className="font-semibold text-black">Hybrid Air Washer</p>
              <p className="text-xs text-black">
                A state-of-the-art system combining technologies for optimal performance.
              </p>
            </li>
            <li className="border-b border-gray-200 pb-3">
              <p className="font-semibold text-black">
                Treated Fresh Air (TFAs) &amp; Fresh Air Handling Units (FAHUs)
              </p>
              <p className="text-xs text-black">
                Designed to deliver 100% fresh, clean, and cool air.
              </p>
            </li>
          </ul>

          <p className="mb-4 text-sm leading-none text-black">
            By leveraging these systems, you can enjoy a perfectly cool environment without worrying
            about high electricity costs. Choose Vaayu Aircon for smarter cooling and enjoy
            noticeably lower energy bills
          </p>

          <button
            className="bg-primary rounded-full px-5 py-2 font-medium text-white transition hover:scale-105"
            onClick={() => router.push("/product")}
          >
            Explore Our Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
