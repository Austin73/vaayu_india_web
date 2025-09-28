"use client";

import Image from "next/image";

function FeatureCard({ text }) {
  return (
    <div className="flex flex-none items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-sm font-medium text-black shadow-sm">
      {text}
    </div>
  );
}

export default function Features() {
  const features = [
    "Cost Efficient",
    "Anti-Aging Body",
    "Water-Saving (Fuzzy Logic)",
    "No Direct Heat",
    "High Static",
    "Touch / Non-Touch Display",
    "Auto Dust Filter Clean",
    "No Brazing — German Lock Tool",
    "Auto Tank Clean",
    "UV Water Filtration",
    "Low-Noise & Sustainable",
  ];

  const ROW1_COUNT = Math.ceil(features.length / 2);
  const row1 = features.slice(0, ROW1_COUNT);
  const row2 = features.slice(ROW1_COUNT);

  const Strip = () => (
    <div className="flex flex-col gap-6 pr-6">
      <div className="flex gap-3">
        {row1.map((f, i) => (
          <FeatureCard key={`r1-${i}`} text={f} />
        ))}
      </div>
      <div className="ml-20 flex gap-3">
        {row2.map((f, i) => (
          <FeatureCard key={`r2-${i}`} text={f} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-white py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-4 text-3xl leading-snug font-semibold text-black md:text-4xl">
          Every Feature Built <br /> Around You
        </h2>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed font-medium text-black">
          From energy savings to self-cleaning, every detail is designed to make cooling effortless,
          sustainable, and reliable.
        </p>

        {/* Features Grid with Background */}
        <div className="bg-white-100 rounded-2xl py-8">
          <div className="overflow-hidden">
            <div className="animate-features-marquee flex w-max will-change-transform">
              <Strip />
              <div aria-hidden="true">
                <Strip />
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center">
            <Image
              src="/images/home/cooler.png"
              alt="Vaayu Feature Machine"
              width={600}
              height={500}
              className="h-auto w-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed font-medium text-gray-500">
          The unit displays temperature, power consumption, CFM usage, and error codes, with full
          installation support and reliable after-sales service.
        </p>
      </div>

      {/* Local keyframes + class for the marquee */}
      <style jsx global>{`
        @keyframes features-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-features-marquee {
          animation: features-marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
