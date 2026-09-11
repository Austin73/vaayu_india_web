"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Helper function to extract text content from JSX elements
const extractTextFromJSX = (element) => {
  if (typeof element === "string") return element;
  if (!element) return "";
  if (Array.isArray(element)) {
    return element.map(extractTextFromJSX).join("");
  }
  if (element.props && element.props.children) {
    if (Array.isArray(element.props.children)) {
      return element.props.children.map(extractTextFromJSX).join("");
    }
    return extractTextFromJSX(element.props.children);
  }
  return "";
};

// Helper function to truncate JSX while preserving formatting
const truncateJSX = (element, wordLimit = 16) => {
  let wordCount = 0;
  const maxWords = wordLimit;

  const processElement = (el) => {
    if (wordCount >= maxWords) return null;

    if (typeof el === "string") {
      const words = el.split(" ");
      const availableWords = maxWords - wordCount;
      const truncatedWords = words.slice(0, availableWords);
      wordCount += truncatedWords.length;
      return truncatedWords.join(" ");
    }

    if (Array.isArray(el)) {
      return el.map(processElement).filter(Boolean);
    }

    if (el?.type) {
      const children = el.props?.children;
      if (!children) return null;

      const processedChildren = Array.isArray(children)
        ? children.map(processElement).filter(Boolean)
        : processElement(children);

      if (
        !processedChildren ||
        (Array.isArray(processedChildren) && processedChildren.length === 0)
      ) {
        return null;
      }

      return <el.type {...el.props}>{processedChildren}</el.type>;
    }

    return el;
  };

  return processElement(element);
};

export default function Advantages() {
  const advantages = [
    {
      image: "/images/home/advantages/advantage1.png",
      title: "Fresh & Clean Air Circulation",
      desc: (
        <>
          Unlike traditional ACs that reuse the same indoor air, Vaayu systems bring in{" "}
          <strong>fresh outdoor air,</strong> improving air quality and creating a healthier
          environment for people and equipment.
        </>
      ),
    },
    {
      image: "/images/home/advantages/advantage2.png",
      title: "Up to 80% Lower Energy Consumption",
      desc: (
        <>
          Our hybrid cooling technology uses significantly less electricity than conventional air
          conditioners, helping businesses <strong>reduce energy bills and operating costs</strong>{" "}
          every month.
        </>
      ),
    },
    {
      image: "/images/home/advantages/advantage3.png",
      title: "Reliable Cooling in All Conditions",
      desc: (
        <>
          Designed for Indian climates, Vaayu systems deliver{" "}
          <strong>consistent cooling performance</strong> even in high temperatures, making them
          ideal for factories, warehouses, and commercial spaces.
        </>
      ),
    },
    {
      image: "/images/home/advantages/advantage4.png",
      title: "Robust Build & All-Weather Protection",
      desc: "Built with industrial-grade materials and tested for extreme conditions, our cooling systems are designed to perform reliably in heat, rain, dust, and humidity. Backed by proven engineering and years of field experience, our solutions ensure long-lasting performance with minimal maintenance — giving you peace of mind in every season.",
    },
    {
      image: "/images/home/advantages/advantage5.png",
      title: "Energy-Efficient & Low Carbon Footprint",
      desc: "Our eco-conscious cooling solutions are engineered to reduce energy consumption without compromising performance. By using advanced airflow design and high-efficiency components, we help businesses and homes lower their carbon footprint and operational costs — contributing to a greener, more sustainable future.",
    },
    {
      image: "/images/home/advantages/advantage6.png",
      title: "Whisper-Quiet Cooling Comfort",
      desc: "Enjoy powerful cooling with near-silent operation. Our systems are designed using noise-reduction technology and precision engineering to maintain a calm, comfortable environment — ideal for homes, offices, hospitals, and commercial spaces where silence matters.",
    },
  ];

  const [revealedIndex, setRevealedIndex] = useState(null); // controls overlay reveal
  const [expandedIndex, setExpandedIndex] = useState(null); // controls full description

  const handleRevealClick = (index) => {
    setRevealedIndex((prev) => (prev === index ? null : index));
  };

  const handleReadMoreClick = (index, e) => {
    e.stopPropagation(); // prevent overlay toggle
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-20 md:px-12">
      <div className="mx-auto mb-12 max-w-6xl">
        <h2 className="mb-4 text-4xl font-bold text-black">Why Choose Vaayu?</h2>
        <p className="text-xl text-black">The Smart and Sustainable Choice.</p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {advantages.map((adv, index) => {
          const isRevealed = revealedIndex === index;
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg bg-white"
              onClick={(e) => {
                handleRevealClick(index);
                handleReadMoreClick(index, e);
              }}
            >
              {/* Overlay covering the entire card */}
              {/* <motion.div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg bg-black"
                initial={{ clipPath: "circle(100% at 50% 50%)", opacity: 0.95 }}
                animate={{
                  clipPath: isRevealed ? "circle(0% at 50% 50%)" : "circle(100% at 50% 50%)",
                  opacity: isRevealed ? 0 : 0.95,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h3 className="px-4 text-center text-lg font-bold text-white">{adv.title}</h3>
              </motion.div> */}

              {/* Card content */}
              <div className="relative z-0 p-6">
                <Image
                  src={adv.image}
                  alt={adv.title}
                  width={500}
                  height={350}
                  className="mb-4 w-full object-cover"
                  priority
                />
                <h3 className="mb-2 text-base leading-snug font-bold text-black underline">
                  {adv.title}
                </h3>
                <div className="text-justify text-sm leading-relaxed text-black">
                  {isExpanded ? adv.desc : truncateJSX(adv.desc, 16)}
                  {!isExpanded && "..."}
                  <button
                    type="button"
                    onClick={(e) => handleReadMoreClick(index, e)}
                    className="ml-1 text-gray-600 underline hover:text-gray-800"
                  >
                    {isExpanded ? "read less" : "read more"}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
