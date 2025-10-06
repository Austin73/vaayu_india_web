import Image from "next/image";

export default function PressMedia() {
  return (
    <section className="mt-15 bg-white px-8 py-24 md:px-20 lg:px-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        {/* Top Section - Title + Description */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <h2 className="text-5xl leading-snug font-medium text-black md:w-1/3">Press & Media</h2>
          <p className="max-w-md text-[15px] leading-relaxed text-gray-700 md:w-2/3 md:text-[16px]">
            Stay updated with the latest news, announcements, and stories about Vaayu’s journey in
            sustainable cooling. From product launches to global recognitions, explore how we’re
            making headlines across industries and borders.
          </p>
        </div>

        {/* Bottom Section - Image */}
        <div className="relative h-[460px] w-full overflow-hidden rounded-2xl md:h-[560px]">
          <Image
            src="/images/pressrelease/pressmedia.png"
            alt="Press and Media"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
