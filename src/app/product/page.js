"use client";

import { useModal } from "@/hooks/useModal";
import Support from "@/components/common/Support";
import Testimonials from "@/components/common/Testimonials";
import WhyVaayu from "@/components/common/WhyVaayu";
import Features from "@/components/product/Features";
import PowerCooling from "@/components/product/PowerCooling";
import Questions from "@/components/product/Questions";
import Sustainable from "@/components/product/Sustainable";
import { WHY_VAAYU_CARD_DATA } from "@/constants/homeConstants";
import ValueEditServices from "@/components/product/ValueEditServices";

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
      <PowerCooling />
      <ValueEditServices />
      <WhyVaayu heading="Key Benefits at a Glance" cardData={WHY_VAAYU_CARD_DATA} />
      <Sustainable />
      <Features />
      <Testimonials />
      <Questions />
      <Support cardsData={supportCardsData} />
    </>
  );
}
