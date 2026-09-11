import React from "react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function CallToAction() {
  return (
    <section className="mx-auto mb-12 max-w-7xl rounded-2xl bg-gradient-to-b from-black to-blue-900 px-16 py-20 text-center">
      <h2 className="mb-6 text-xl font-semibold text-white md:text-2xl">
        Let’s Meet And Talk About The Future <br /> Over A Cup Of Coffee!
      </h2>
      <div className="mt-6 flex justify-center">
        <WhatsAppButton />
      </div>
    </section>
  );
}
