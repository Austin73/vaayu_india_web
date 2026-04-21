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
import { INDUSTRIAL_AIR_COOLERS_KEY_BENEFITS_DATA } from "@/constants/industrialAirCoolersConstants";

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
        heading="Powerful Cooling for Large Spaces. Maximum Efficiency."
        description={<p>Vaayu’s high-performance <strong>industrial air coolers</strong> are designed to deliver powerful, uniform cooling for large industrial and commercial environments. Built for efficiency and durability, our systems provide rapid temperature reduction, consistent airflow, and superior ventilation — even in extreme working conditions.
          <br /><br />With significantly lower power consumption compared to traditional air conditioning systems, Vaayu air coolers offer a cost-effective and sustainable cooling solution for factories, warehouses, and production units.
        </p>} />
      <ValueEditServices />
      <WhyVaayu heading="Key Benefits at a Glance" cardData={INDUSTRIAL_AIR_COOLERS_KEY_BENEFITS_DATA} />
      <Sustainable
        heading="Why Choose Vaayu Industrial Air Coolers?"
        description={<p>Vaayu’s <strong>industrial air coolers</strong> are built for businesses that require reliable, high-performance cooling in demanding environments. Our systems combine powerful airflow, energy efficiency, and durable construction to ensure consistent performance across large industrial and commercial spaces.
          <br /><br />Unlike conventional cooling systems, Vaayu coolers provide fresh air circulation, lower energy consumption, and reduced maintenance requirements — making them a smart and sustainable choice. With customized solutions and expert support, Vaayu ensures your cooling system is optimized for maximum efficiency and long-term value.
        </p>}
      />
      <Features />
      <Testimonials />
      <Questions />
      <Support cardsData={supportCardsData} />
    </>
  );
}
