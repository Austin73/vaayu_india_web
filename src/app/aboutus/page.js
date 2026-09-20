import AboutHero from "@/components/aboutus/AboutHero";
import QuoteSection from "@/components/aboutus/QuoteSection";
import MissionVision from "@/components/aboutus/MissionVision";
import Roadmap from "@/components/aboutus/Roadmap";
import Leadership from "@/components/aboutus/Leadership";
import CallToAction from "@/components/aboutus/CallToAction";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      {/* <QuoteSection />
      <MissionVision /> */}
      {/* <Roadmap /> */}
      {/* <Leadership /> */}
      <CallToAction />
    </div>
  );
}
