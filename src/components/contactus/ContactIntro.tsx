import React from "react";

export default function ContactIntro() {
  return (
    <div className="space-y-4">
      <p
        className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium"
        style={{ fontFamily: "Satoshi" }}
      >
        Let's Talk Cooling That Cares
      </p>
      <h2
        className="text-[50px] leading-[100%] font-[500] tracking-[0] text-gray-900 capitalize"
        style={{ fontFamily: "Satoshi" }}
      >
        Have A Question? Need <br /> A Custom Solution?
      </h2>
      <p
        className="align-middle text-[19px] leading-[100%] font-[400] tracking-[0] text-gray-600"
        style={{ fontFamily: "Satoshi" }}
      >
        Our team is just a message away. Whether it’s product info, installation support, or expert
        guidance. We’re here to help.
      </p>
    </div>
  );
}
