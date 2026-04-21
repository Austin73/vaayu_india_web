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
import { VIBRANIUM_COOLING_KEY_BENEFITS_DATA } from "@/constants/vibraniumCoolingConstants";

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
        heading="Next-Gen Cooling with Unmatched Efficiency & Performance"
        description={<p>
          Vaayu’s <strong>Vibranium Cooling Solution</strong> represents the future of industrial cooling — combining advanced engineering with high-efficiency performance to deliver superior temperature control in demanding environments. Designed for large industrial and commercial spaces, this solution ensures powerful airflow, rapid cooling, and consistent performance while significantly reducing energy consumption.
          <br /><br />Built with cutting-edge technology and durable components, the Vibranium system offers long-term reliability, optimized airflow distribution, and a sustainable approach to modern cooling requirements.
        </p>}
      />
      <ValueEditServices />
      <WhyVaayu heading="Key Benefits at a Glance" cardData={VIBRANIUM_COOLING_KEY_BENEFITS_DATA} />
      <Sustainable
        heading="Why Choose Vaayu Vibranium Cooling Solution?"
        description={<p>
          Vaayu’s <strong>Vibranium Cooling Solution</strong> is designed for industries that demand superior performance, efficiency, and reliability from their cooling systems. With advanced airflow engineering and energy-optimized operation, it delivers consistent cooling while minimizing power consumption and maintenance requirements.
          <br /><br />Unlike conventional cooling systems, the Vibranium solution provides enhanced airflow control, better coverage, and long-term cost efficiency — making it a smart investment for modern industrial and commercial spaces. Backed by Vaayu’s expertise and customized approach, it ensures optimal cooling performance tailored to your specific needs.
        </p>}
      />
      <Features />
      <Testimonials />
      <Questions />
      <Support cardsData={supportCardsData} />
    </>
  );
}
