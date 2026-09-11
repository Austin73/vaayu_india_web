"use client";

import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Constants (from the original calculator)                           */
/* ------------------------------------------------------------------ */

const AC_WATTS_PER_TR = 1000; // conventional AC draw
const VAAYU_WATTS_PER_TR = 165; // Vaayu Hybrid AHU draw

const ACCENT_TEAL = "#1BADA0";
const ACCENT_ORANGE = "#D85A30";
const ACCENT_YELLOW = "#FFC845";

function formatINR(n: number) {
  return Math.round(n).toLocaleString("en-IN");
}

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function BoltBadge() {
  return (
    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F2A6B" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}

function Slider({ label, value, min, max, step, unit, onChange }: SliderProps) {
  return (
    <div>
      <label className="block text-xs text-white/70 mb-2">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#1BADA0]"
      />
      <div className="mt-1.5 text-sm font-semibold text-white">
        {value} {unit}
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  success?: boolean;
}

function StatCard({ label, value, success }: StatCardProps) {
  return (
    <div className={`rounded-xl p-3.5 ${success ? "bg-emerald-400/20" : "bg-white/10"}`}>
      <p className={`text-[11px] mb-1 ${success ? "text-emerald-200" : "text-white/60"}`}>{label}</p>
      <p className={`text-lg font-bold ${success ? "text-emerald-200" : "text-white"}`}>{value}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export interface SavingsCalculatorProps {
  whatsappNumber?: string;
  className?: string;
}

export default function SavingsCalculator({
  whatsappNumber = "919685090174",
  className = "",
}: SavingsCalculatorProps) {
  const [tr, setTr] = useState(10);
  const [hours, setHours] = useState(10);
  const [days, setDays] = useState(30);
  const [rate, setRate] = useState(7);

  const { acCost, vaayuCost, savings, savingsPct, vaayuBarPct } = useMemo(() => {
    const acPowerW = tr * AC_WATTS_PER_TR;
    const vaayuPowerW = tr * VAAYU_WATTS_PER_TR;

    const acUnits = (acPowerW * hours * days) / 1000;
    const vaayuUnits = (vaayuPowerW * hours * days) / 1000;

    const acCost = acUnits * rate;
    const vaayuCost = vaayuUnits * rate;
    const savings = acCost - vaayuCost;
    const savingsPct = acCost > 0 ? (savings / acCost) * 100 : 0;
    const vaayuBarPct = acCost > 0 ? Math.max(4, (vaayuCost / acCost) * 100) : 0;

    return { acCost, vaayuCost, savings, savingsPct, vaayuBarPct };
  }, [tr, hours, days, rate]);

  return (
    <div
      className={`w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <BoltBadge />
        <h3 className="text-base font-bold text-white leading-tight">
          Vaayu Hybrid AHU Savings Calculator
        </h3>
      </div>
      <p className="text-xs text-white/70 mb-6 ml-12">
        See how much you save switching from conventional AC
      </p>

      {/* Sliders */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-6">
        <Slider label="Cooling load (TR)" value={tr} min={5} max={50} step={1} unit="TR" onChange={setTr} />
        <Slider label="Hours per day" value={hours} min={4} max={24} step={1} unit="hrs" onChange={setHours} />
        <Slider label="Days per month" value={days} min={10} max={31} step={1} unit="days" onChange={setDays} />
        <Slider label="Electricity rate" value={rate} min={4} max={14} step={0.5} unit="Rs/unit" onChange={setRate} />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <StatCard label="Conventional AC / month" value={`Rs ${formatINR(acCost)}`} />
        <StatCard label="Vaayu Hybrid AHU / month" value={`Rs ${formatINR(vaayuCost)}`} success />
        <StatCard label="Monthly savings" value={`Rs ${formatINR(savings)}`} />
        <StatCard label="Savings vs conventional AC" value={`${Math.round(savingsPct)}%`} />
      </div>

      {/* Bars */}
      <div className="space-y-3 mb-5">
        <div>
          <div className="flex justify-between text-xs text-white/70 mb-1">
            <span>Conventional AC</span>
            <span>Rs {formatINR(acCost)}</span>
          </div>
          <div className="h-3.5 rounded-full bg-white/15 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "100%", background: ACCENT_ORANGE }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-white/70 mb-1">
            <span>Vaayu Hybrid AHU</span>
            <span>Rs {formatINR(vaayuCost)}</span>
          </div>
          <div className="h-3.5 rounded-full bg-white/15 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${vaayuBarPct}%`, background: ACCENT_TEAL }}
            />
          </div>
        </div>
      </div>

      <p className="text-[11px] leading-relaxed text-white/50 mb-5">
        Based on typical draw of ~1000W/TR for conventional AC vs ~165W/TR for Vaayu Hybrid AHU
        (per product specifications). Actual savings vary by site conditions, humidity, and
        equipment condition.
      </p>

      <div className="rounded-xl bg-white/10 p-3.5 text-center text-sm text-white">
        Want a custom quote for your facility?{" "}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
          style={{ color: ACCENT_YELLOW }}
        >
          Message us on WhatsApp
        </a>
      </div>
    </div>
  );
}
