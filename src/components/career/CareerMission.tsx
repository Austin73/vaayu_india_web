import React from "react";
import Image from "next/image";

export default function CareerMission() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-12 text-left text-3xl font-semibold text-gray-900 md:text-4xl">
        At Vaayu, Every Role Contributes
        <br />
        To A Bigger Mission
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="to-secondary-100 flex h-60 flex-col justify-between rounded-xl border border-gray-200 bg-gradient-to-b from-white p-6 shadow-md">
          <div className="bg-white-100 flex h-15 w-15 items-center justify-center rounded-full">
            <Image
              src="/images/career/energy_savings_leaf.svg"
              alt="Ac Unit"
              width={28}
              height={28}
              className="h-auto w-auto object-contain"
            />
          </div>
          <p className="font-medium text-gray-800">Reducing environmental impact</p>
        </div>

        {/* Card 2 */}
        <div className="to-primary-100 flex h-60 flex-col justify-between rounded-xl border border-gray-200 bg-gradient-to-b from-white p-6 shadow-md">
          <div className="bg-white-100 flex h-15 w-15 items-center justify-center rounded-full">
            <Image
              src="/images/career/ac_unit.svg"
              alt="Ac Unit"
              width={28}
              height={28}
              className="h-auto w-auto object-contain"
            />
          </div>
          <p className="font-medium text-gray-800">Rethinking air cooling for tomorrow</p>
        </div>

        {/* Card 3 */}
        <div className="to-secondary-100 flex h-60 flex-col justify-between rounded-xl border border-gray-200 bg-gradient-to-b from-white p-6 shadow-md">
          <div className="bg-white-100 flex h-15 w-15 items-center justify-center rounded-full">
            <Image
              src="/images/career/emoji_objects.svg"
              alt="Ac Unit"
              width={28}
              height={28}
              className="h-auto w-auto object-contain"
            />
          </div>
          <p className="font-medium text-gray-800">Creating change through innovation</p>
        </div>
      </div>
    </section>
  );
}
