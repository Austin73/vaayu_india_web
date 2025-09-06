import Support from "@/components/common/Support";
import Testimonials from "@/components/common/Testimonials";
import WhyVaayu from "@/components/common/WhyVaayu";
import Features from "@/components/product/Features";
import PowerCooling from "@/components/product/PowerCooling";
import Questions from "@/components/product/Questions";
import Sustainable from "@/components/product/Sustainable";
import { WHY_VAAYU_CARD_DATA } from "@/constants/homeConstants";

export default function Product() {
  return (
    <>
      <PowerCooling />
      <WhyVaayu heading="Key Benefits at a Glance" cardData={WHY_VAAYU_CARD_DATA} />
      <Sustainable />
      <Features />
      <Testimonials />
      <Questions />
      <Support />
    </>
  );
}
