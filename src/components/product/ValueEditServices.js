import Image from "next/image";

const services = [
  {
    title: "Cooling Audits",
    img: "/images/product/valueeditservices/services1.png",
  },
  {
    title: "IoT Smart Cooling Dashboard",
    img: "/images/product/valueeditservices/services2.png",
  },
  {
    title: "Green Certification Partnerships",
    img: "/images/product/valueeditservices/services3.png",
  },
  {
    title: "Solar + HVACS Combo 100% green",
    img: "/images/product/valueeditservices/services4.png",
  },
  {
    title: "AMC with smart audits",
    img: "/images/product/valueeditservices/services5.png",
  },
];

export default function ValueEditServices() {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-center text-3xl font-extrabold text-black md:text-4xl">
        Value edit services
      </h2>

      {/* Scrollable Container */}
      <div className="scrollbar-hide mt-10 flex space-x-6 overflow-x-auto pb-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex min-w-[250px] flex-shrink-0 flex-col items-start text-center md:min-w-[270px] lg:min-w-[290px]"
          >
            <div className="relative h-[250px] w-full overflow-hidden rounded-xl shadow-md">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="mt-3 text-[15px] leading-tight font-semibold text-black">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
