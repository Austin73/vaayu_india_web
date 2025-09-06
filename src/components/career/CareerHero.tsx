import React from "react";
import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="relative mx-auto mt-10 max-w-7xl px-6 py-16 text-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-t from-blue-100 via-white to-white"></div>

      <p className="mb-4 text-sm font-medium text-gray-500">Join our team</p>
      <h1 className="text-4xl font-semibold text-gray-900 md:text-5xl">
        Join Us In Cooling The Future
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
        We&apos;re not just building cooling systems. We&apos;re building a cooler, cleaner planet.
      </p>
      <a
        href="#open-roles"
        className="bg-primary hover:bg-primary-700 mt-6 inline-block rounded-full px-6 py-3 font-medium text-white shadow-md transition"
      >
        Explore the open positions
      </a>

      {/* Images Row */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="h-80 w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src="/images/career/profile1.png"
            alt="Team member"
            width={400}
            height={320}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-80 w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src="/images/career/team-meeting.png"
            alt="Team meeting"
            width={400}
            height={320}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-80 w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src="/images/career/profile2.png"
            alt="Team member"
            width={400}
            height={320}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
