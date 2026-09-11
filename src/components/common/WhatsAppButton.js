"use client";

import { useState } from "react";
import { X } from "lucide-react";

const PHONE_NUMBER = "919685090174";
const DEFAULT_MESSAGE =
  "Hi Vaayu India! I'm interested in learning more about your energy-efficient air cooling solutions. Could you help me with more details?";

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.616c-.388 1.094-1.938 2.004-3.164 2.268-.84.178-1.936.32-5.628-1.21-4.726-1.956-7.766-6.748-8.002-7.062-.226-.314-1.9-2.53-1.9-4.826s1.2-3.424 1.628-3.892c.388-.424.912-.614 1.206-.614.15 0 .284.008.404.014.428.018.642.044.924.714.352.838 1.21 2.948 1.316 3.164.108.216.214.504.068.804-.136.308-.256.444-.472.696-.216.25-.422.442-.638.71-.198.234-.422.484-.176.912.244.428 1.09 1.796 2.338 2.91 1.608 1.434 2.924 1.896 3.396 2.092.354.148.776.112 1.03-.152.322-.336.72-.892 1.124-1.44.286-.39.648-.44 1.036-.296.394.138 2.494 1.176 2.922 1.39.428.216.714.322.818.5.108.178.108 1.028-.28 2.122z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {tooltipVisible && (
        <div className="animate-fade-in shadow-two relative flex items-center gap-2 rounded-xl bg-white px-4 py-3">
          <p className="text-dark max-w-[200px] text-sm font-medium">
            Need help? Chat with us on WhatsApp!
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTooltipVisible(false);
            }}
            className="shrink-0 rounded-full p-0.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute right-6 -bottom-1.5 h-3 w-3 rotate-45 bg-white shadow-sm" />
        </div>
      )}

      {/* WhatsApp FAB */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        className="group flex h-16 items-center gap-3 rounded-full bg-[#128C7E] px-5 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
      >
        <WhatsAppIcon className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        <span className="text-base font-semibold whitespace-nowrap">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
