"use client";

import { useModal } from "@/hooks/useModal";

export default function Support() {
  const { openModal } = useModal();
  const cards = [
    {
      title: "Not Happy? We're Here To Fix It.",
      description:
        "Let us know what went wrong — our support team is ready to resolve your issue quickly and fairly.",
      button: "Report a Problem",
      bg: "bg-gray-50",
      text: "text-black",
      btnStyle: "bg-primary text-white hover:bg-primary-700",
      onClick: () => {},
    },
    {
      title: "Need Guidance? Talk To Experts",
      description:
        "Our experts are here to help you choose the right system, solve technical questions, or customize a solution for your space.",
      button: "Speak to an Expert",
      bg: "bg-primary-700",
      text: "text-white",
      btnStyle: "bg-white text-black hover:bg-gray-100 border border-transparent",
      onClick: () => {
        openModal();
      },
    },
    {
      title: "Have A Question? Let's Get You Answers.",
      description:
        "Whether you're curious about pricing, installation, or compatibility — we're just one form away.",
      button: "Submit Your Query",
      bg: "bg-gray-50",
      text: "text-black",
      btnStyle: "bg-primary text-white hover:bg-primary-700",
      onClick: () => {},
    },
  ];

  return (
    <section className="relative w-full bg-white px-6 py-20 md:px-30">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between rounded-2xl ${card.bg} ${card.text} min-h-[450px] border border-gray-200 p-8 shadow-sm`}
          >
            <div>
              <h3 className="mb-4 text-2xl leading-snug font-bold">{card.title}</h3>
              <p className="text-base leading-relaxed">{card.description}</p>
            </div>
            <div className="mt-8">
              <button
                className={`rounded-full px-6 py-2 text-sm font-medium ${card.btnStyle}`}
                onClick={card.onClick}
              >
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
