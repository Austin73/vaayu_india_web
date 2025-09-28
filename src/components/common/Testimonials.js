"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      clientImg: "/images/home/testimonials/client1.png",
      clientAlt: "Client 1",
      logo: "/images/home/testimonials/logo1.svg",
      logoAlt: "Sooch Group",
      title: "Educational Institution",
      quote:
        "We recently had a new air conditioning system installed by Vaayu Aircon, and the experience was fantastic from start to finish. The team was professional, punctual, and incredibly knowledgeable. They helped us choose the perfect unit for our home, and the installation was seamless. We've been enjoying a cool and comfortable home ever since, and we've already noticed a difference in our energy bills. Highly recommended!.",
      author: "— Principal, Saraswati Coaching Institute",
    },
    {
      clientImg: "/images/home/testimonials/client2.png",
      clientAlt: "Client 2",
      logo: "/images/home/testimonials/logo2.svg",
      logoAlt: "PMC Valley",
      title: "Industrial Client",
      quote:
        "Our manufacturing facility had been struggling with cooling with humidity issues for a while. We reached out to Vaayu Aircon for their expertise in fresh air cooling and hybrid evaporative cooling. Their team designed and implemented a custom solution that has completely transformed our workspace. The air quality has improved dramatically, creating a safer and more productive environment for our employees. Their technical know-how and commitment to quality are truly impressive.",
      author: "— Operations Head, JVS Textiles Pvt. Ltd.",
    },
  ];

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const testimonialParent = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };
  const testimonialItem = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-4xl leading-snug font-bold text-gray-900 md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-justify text-lg leading-relaxed text-gray-700">
            From manufacturing giants to educational institutions, our clients rely on Vaayu to
            deliver sustainable cooling solutions that perform.
          </p>
        </motion.div>

        {/* Testimonials Grid Layout */}
        <div className="flex flex-col gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="grid gap-6 md:grid-cols-4 md:items-stretch"
              variants={testimonialParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {idx % 2 === 0 ? (
                <>
                  {/* Client Photo */}
                  <motion.div className="overflow-hidden rounded-2xl" variants={testimonialItem}>
                    <Image
                      src={t.clientImg}
                      alt={t.clientAlt}
                      width={300}
                      height={330}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  {/* Logo */}
                  <motion.div
                    className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6"
                    variants={testimonialItem}
                  >
                    <Image
                      src={t.logo}
                      alt={t.logoAlt}
                      width={140}
                      height={80}
                      className="h-auto w-auto object-contain"
                    />
                  </motion.div>
                  {/* Text */}
                  <motion.div
                    className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-gray-50 p-6 md:col-span-2"
                    variants={testimonialItem}
                  >
                    <h3 className="mb-3 text-base font-bold text-gray-900">{t.title}</h3>
                    <p className="mb-4 text-justify text-gray-700">&quot;{t.quote}&quot;</p>
                    <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Text */}
                  <motion.div
                    className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-gray-50 p-6 md:col-span-2"
                    variants={testimonialItem}
                  >
                    <h3 className="mb-3 text-base font-bold text-gray-900">{t.title}</h3>
                    <p className="mb-4 text-justify text-gray-700">&quot;{t.quote}&quot;</p>
                    <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  </motion.div>
                  {/* Logo */}
                  <motion.div
                    className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6"
                    variants={testimonialItem}
                  >
                    <Image
                      src={t.logo}
                      alt={t.logoAlt}
                      width={140}
                      height={80}
                      className="h-auto w-auto object-contain"
                    />
                  </motion.div>
                  {/* Client Photo */}
                  <motion.div className="overflow-hidden rounded-2xl" variants={testimonialItem}>
                    <Image
                      src={t.clientImg}
                      alt={t.clientAlt}
                      width={300}
                      height={330}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
