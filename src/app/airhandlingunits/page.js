"use client";

import { useModal } from "@/hooks/useModal";
import Support from "@/components/common/Support";
import Testimonials from "@/components/common/Testimonials";
import WhyVaayu from "@/components/common/WhyVaayu";
import Features from "@/components/product/Features";
import PowerCooling from "@/components/product/PowerCooling";
import Questions from "@/components/product/Questions";
import Sustainable from "@/components/product/Sustainable";
import ValueEditServices from "@/components/product/ValueEditServices";
import { AIR_HANDLING_UNITS_KEY_BENEFITS_DATA } from "@/constants/airHandlingUnitsConstants";

export default function Product() {
  const { openModal } = useModal();
  const supportCardsData = [
    {
      title: "Not Happy? We're Here To Fix It.",
      description:
        "Let us know what went wrong — our support team is ready to resolve your issue quickly and fairly.",
      button: "Report a Problem",
      bg: "bg-gray-50",
      text: "text-black",
      btnStyle: "bg-primary text-white hover:bg-primary-700",
      onClick: () => {
        openModal();
      },
    },
    {
      title: "Need Guidance? Talk To Experts",
      description:
        "Our experts are here to help you choose the right system, solve technical questions, or customize a solution for your space.",
      button: "Speak to an Expert",
      bg: "bg-primary-700",
      text: "text-white",
      btnStyle: "bg-white text-black hover:bg-gray-200 border border-transparent",
      onClick: () => {
        openModal();
      },
    },
    {
      title: "Have A Question? Let's Get You Answers.",
      description:
        "Whether you're curious about pricing, installation, or compatibility — we're just one form away.",
      button: "Submit Your Query",
      bg: "bg-gray-50",
      text: "text-black",
      btnStyle: "bg-primary text-white hover:bg-primary-700",
      onClick: () => {
        openModal();
      },
    },
  ];

  return (
    <>
      <PowerCooling
        heading="Precision Airflow. Superior Air Quality. Maximum Efficiency."
        description="Vaayu’s advanced Air Handling Units (AHUs) are engineered to deliver consistent airflow, efficient ventilation, and superior indoor air quality for industrial and commercial environments. Designed with energy-efficient components and intelligent airflow control, our AHUs ensure reliable temperature regulation, cleaner air distribution, and optimized HVAC performance — without compromise."
      />
      <ValueEditServices />
      <WhyVaayu heading="Key Benefits at a Glance" cardData={AIR_HANDLING_UNITS_KEY_BENEFITS_DATA} />
      <Sustainable
        heading="Why Choose Vaayu Air Handling Units?"
        description={<p>Vaayu’s <strong>Air Handling Units (AHUs)</strong> are designed for businesses that demand performance, reliability, and efficiency from their HVAC systems. With advanced airflow engineering, high-efficiency filtration, and robust construction, Vaayu AHUs deliver consistent climate control and superior indoor air quality across industrial and commercial environments.
          <br /><br />Our systems are built for long-term value — offering energy-efficient operation, low maintenance requirements, and dependable performance even in demanding conditions. Backed by expert engineering and customized solutions, Vaayu ensures smarter air management tailored to your facility’s needs.
        </p>}
      />
      <Features />
      <Testimonials />
      <Questions />
      <Support cardsData={supportCardsData} />
    </>
  );
}
