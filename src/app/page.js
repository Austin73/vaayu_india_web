"use client";

import { useModal } from "@/hooks/useModal";
import Hero from "@/components/home/Hero";
import EnergyConsiderations from "@/components/home/EnergyConsiderations";
import Advantages from "@/components/home/Advantages";
import CustomApplications from "@/components/home/CustomApplications";
import Performance from "@/components/home/Performance";
import Efficiency from "@/components/home/Efficiency";
import TraditionalCooling from "@/components/home/TraditionalCooling";
import Impact from "@/components/home/Impact";
import Partners from "@/components/home/Partners";
import WhyVaayu from "@/components/common/WhyVaayu";
import Testimonials from "@/components/common/Testimonials";
import Support from "@/components/common/Support";
import { WHY_VAAYU_CARD_DATA } from "@/constants/homeConstants";

export default function Home() {
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
      title: "Become A dealer",
      description:
        "Whether you're curious about pricing, installation, or compatibility — we’re just one form away.",
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
      <Hero />
      <EnergyConsiderations />
      <Advantages />
      <CustomApplications />
      <Performance />
      <Efficiency />
      <TraditionalCooling />
      <Impact />
      <Partners />
      <WhyVaayu
        heading="Why Vaayu? Our Chill Changes Things."
        description="It's not just about feeling cool, it's about protecting our world — We're
            here to save resources and shrink our carbon footprint for generations to come."
        cardData={WHY_VAAYU_CARD_DATA}
        animationProps={{ initial: true, whileInView: true, viewport: { once: true, amount: 0.3 } }}
      />
      <Testimonials />
      <Support cardsData={supportCardsData} />
    </>
  );
}
