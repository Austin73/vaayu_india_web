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
      <Support />
    </>
  );
}
