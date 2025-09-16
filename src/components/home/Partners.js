"use client";

import Image from "next/image";

function PartnerCard({ src, alt }) {
  return (
    <div className="flex h-[160px] w-[295px] flex-none items-center justify-center rounded-md bg-gray-50 p-6 shadow-sm">
      <Image src={src} alt={alt} width={170} height={170} className="w-auto object-contain" />
    </div>
  );
}

export default function Partners() {
  const partners = [
    { src: "/images/home/partners/drdo.png", alt: "DRDO" },
    { src: "/images/home/partners/hero.png", alt: "Hero" },
    { src: "/images/home/partners/wipro.png", alt: "Wipro" },
    { src: "/images/home/partners/army-war-college.png", alt: "Indian Army" },
    { src: "/images/home/partners/mondelez.png", alt: "Mondelez" },
    { src: "/images/home/partners/mp-tourism.png", alt: "Madhya Pradesh Tourism" },
    { src: "/images/home/partners/great-galleon.png", alt: "Great Galleon Ventures" },
    { src: "/images/home/partners/mcd.png", alt: "McDonalds" },
    { src: "/images/home/partners/indian-railways.png", alt: "Indian Railways" },
  ];

  const ROW1_COUNT = 5;
  const row1 = partners.slice(0, ROW1_COUNT);
  const row2 = partners.slice(ROW1_COUNT);

  const Strip = () => (
    <div className="flex flex-col gap-6 pr-6">
      <div className="flex gap-6">
        {row1.map((p, i) => (
          <PartnerCard key={`r1-${i}-${p.alt}`} src={p.src} alt={p.alt} />
        ))}
      </div>
      <div className="ml-40 flex gap-6">
        {row2.map((p, i) => (
          <PartnerCard key={`r2-${i}-${p.alt}`} src={p.src} alt={p.alt} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-full">
        {/* Heading */}
        <div className="mb-12 max-w-3xl px-6 md:px-20">
          <h2 className="mb-4 text-4xl leading-snug font-medium text-black">The A-List Of Cool.</h2>
          <p className="text-justify text-lg leading-relaxed text-black">
            From agile innovators to market leaders, our partners have one thing in common: a
            commitment to a better-cooled future for everyone, everywhere.
          </p>
        </div>

        {/* Marquee (infinite autoplay) */}
        <div className="relative overflow-hidden">
          <div className="animate-partners-marquee flex w-max will-change-transform">
            <Strip />
            <div aria-hidden="true">
              <Strip />
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes + class for the marquee */}
      <style jsx global>{`
        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-partners-marquee {
          animation: partners-marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
