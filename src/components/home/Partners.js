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
    { src: "/images/home/partners/simplex.png", alt: "Simplex" },
    { src: "/images/home/partners/vijay-chat.png", alt: "Vijay Chat" },
    { src: "/images/home/partners/eagle.png", alt: "Eagle" },
    { src: "/images/home/partners/julite.png", alt: "Julite" },
    { src: "/images/home/partners/quest.png", alt: "Quest" },
    { src: "/images/home/partners/barbeque.png", alt: "Barbeque" },
    { src: "/images/home/partners/pmc.png", alt: "PMC" },
    { src: "/images/home/partners/dc.png", alt: "Db" },
    { src: "/images/home/partners/covestro.png", alt: "Covestro" },
    { src: "/images/home/partners/blue.png", alt: "blue" },
    { src: "/images/home/partners/yashoda.png", alt: "Yashoda" },
    { src: "/images/home/partners/sai.png", alt: "sai" },
    { src: "/images/home/partners/ajanta.png", alt: "ajanta" },
    { src: "/images/home/partners/porwal.png", alt: "Porwal" },
    { src: "/images/home/partners/pcpl.png", alt: "PCPl" },
    { src: "/images/home/partners/jj.png", alt: "JJ" },
    { src: "/images/home/partners/saims.png", alt: "SAIMS" },
    { src: "/images/home/partners/kankaria.png", alt: "kankaria" },
    { src: "/images/home/partners/sagar.png", alt: "sagar" },
    { src: "/images/home/partners/eicher.png", alt: "eicher" },
  ];

  // Alternate partners into two rows instead of slicing the first N vs. the rest,
  // so both rows stay evenly filled (no big empty stretch in either row).
  const row1 = partners.filter((_, i) => i % 2 === 0);
  const row2 = partners.filter((_, i) => i % 2 === 1);

  const Strip = ({ items }) => (
    <div className="flex gap-6 pr-6">
      {items.map((p, i) => (
        <PartnerCard key={`${i}-${p.alt}`} src={p.src} alt={p.alt} />
      ))}
    </div>
  );

  return (
    <section className="relative w-full bg-white py-20">
      {/* Heading — same mx-auto max-w-7xl + px-6 md:px-12 wrapper as Impact's heading,
          so the left edge lines up with "Real Impact. Reliable Results." above */}
      <div className="mx-auto mb-12 max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <h2 className="mb-4 text-4xl font-bold text-black">Our Prestigious Projects</h2>
        </div>
      </div>

      {/* Marquee (infinite autoplay) — kept full-bleed, outside the max-w-7xl wrapper */}
      <div className="relative overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="animate-partners-marquee flex w-max will-change-transform">
            <Strip items={row1} />
            <div aria-hidden="true">
              <Strip items={row1} />
            </div>
          </div>
          <div className="animate-partners-marquee-reverse flex w-max will-change-transform">
            <Strip items={row2} />
            <div aria-hidden="true">
              <Strip items={row2} />
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes + classes for the marquee */}
      <style jsx global>{`
        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes partners-marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-partners-marquee {
          animation: partners-marquee 28s linear infinite;
        }
        .animate-partners-marquee-reverse {
          animation: partners-marquee-reverse 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
