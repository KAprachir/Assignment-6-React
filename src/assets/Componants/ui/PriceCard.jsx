import { Check } from "lucide-react";
import React from "react";

const PriceCard = ({ card }) => {
  const isHighlighted = card.highlighted;

  return (
    <div
      className={`group flex flex-col p-8 rounded-3xl border transition-all duration-300 h-full relative 
      ${
        isHighlighted
          ? "bg-linear-to-b from-[#4f39f6] to-[#9514fa] text-white scale-105 z-10 shadow-[0_20px_50px_rgba(79,57,246,0.3)] border-transparent"
          : "bg-white text-slate-800 border-slate-100 hover:border-fuchsia-200 shadow-sm hover:shadow-xl"
      }`}
    >
      {card.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
          {card.badge}
        </span>
      )}

      <div className="mb-8">
        <h3
          className={`text-2xl font-bold mb-1 ${isHighlighted ? "text-white" : "text-slate-900"}`}
        >
          {card.name}
        </h3>
        <p
          className={`text-sm font-medium ${isHighlighted ? "text-white/80" : "text-slate-500"}`}
        >
          {card.tagline}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black">${card.price.amount}</span>
          <span
            className={`text-lg font-medium ${isHighlighted ? "text-white/60" : "text-slate-400"}`}
          >
            /{card.price.period}
          </span>
        </div>
      </div>

      <div className="grow space-y-4 mb-10">
        {card.features.map((feature, index) => (
          <div key={index} className="flex gap-3 items-start">
            <div
              className={`mt-1 p-0.5 rounded-full ${isHighlighted ? "bg-white/20" : "bg-fuchsia-50"}`}
            >
              <Check
                className={isHighlighted ? "text-white" : "text-fuchsia-600"}
                size={14}
                strokeWidth={3}
              />
            </div>
            <span
              className={`text-sm leading-tight ${isHighlighted ? "text-white/90" : "text-slate-600"}`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-md
        ${
          isHighlighted
            ? "bg-white text-[#4f39f6] hover:bg-slate-50"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {card.cta.label}
      </button>
    </div>
  );
};

export default PriceCard;
