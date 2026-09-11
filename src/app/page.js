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
import Gallery from "@/components/home/Gallery";
import GalleryDemo from "@/components/home/GalleryDemo";

export default function Home() {
  const { openModal } = useModal();
  const supportCardsData = [
    {
      title: "Need Help Choosing the Right Cooling System?",
      description:
        "Talk to our cooling engineers for expert guidance, system selection, and customized solutions for your space.Let us know what went wrong — our support team is ready to resolve your issue quickly and fairly.",
      button: "Get a Free Cooling Assessment",
      bg: "bg-gray-50",
      text: "text-black",
      btnStyle: "bg-primary text-white hover:bg-primary-700",
      onClick: () => {
        openModal();
      },
    },
    {
      title: "Already Using Vaayu? We’re Here to Help",
      description:
        "Our support team quickly resolves service requests, maintenance issues, and technical questions.",
      button: "Contact Support",
      bg: "bg-primary-700",
      text: "text-white",
      btnStyle: "bg-white text-black hover:bg-gray-200 border border-transparent",
      onClick: () => {
        openModal();
      },
    },
    {
      title: "Become a Vaayu Dealer",
      description:
        "Partner with us to offer energy-efficient cooling solutions and grow your business with a trusted brand.",
      button: "Apply for Dealership",
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
      {/* <CustomApplications />
      <Performance />
      <Efficiency /> */}
      <GalleryDemo />
      <TraditionalCooling />
      <Impact />
      <Partners />
      {/* <WhyVaayu
        heading="Why Choose Vaayu"
        description="Vaayu delivers energy-efficient hybrid air-cooling solutions designed to reduce operating costs, improve air quality, and support sustainable performance in commercial and industrial spaces."
        cardData={WHY_VAAYU_CARD_DATA}
        animationProps={{ initial: true, whileInView: true, viewport: { once: true, amount: 0.3 } }}
      /> */}
      <Testimonials />
      <Support cardsData={supportCardsData} />
    </>
  );
}
