import { Check } from "lucide-react";
import React from "react";

const PriceCard = ({ card }) => {
  const isHighlighted = card.highlighted;

  return (
    <div
      className={`flex flex-col p-8 rounded-2xl shadow-sm border border-base-300 h-full relative transition-all ${
        isHighlighted
          ? "bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white scale-105 z-10 shadow-xl"
          : "bg-base-200 text-base-content"
      }`}
    >
      {card.badge && (
        <div className="badge badge-soft badge-warning text-red-600 p-3 font-bold absolute -top-3 left-1/2 -translate-x-1/2 z-20 shadow-md whitespace-nowrap">
          {card.badge}
        </div>
      )}

      <div className="mb-6">
        <h1 className="text-2xl font-bold">{card.name}</h1>
        <p className="text-sm opacity-70">{card.tagline}</p>
      </div>

      <div className="flex-1">
        <h2 className="text-4xl font-black mb-6">
          ${card.price.amount}
          <span className="text-base font-normal opacity-60">
            /{card.price.period}
          </span>
        </h2>

        <div className="space-y-3 mb-8">
          {card.features.map((feature, index) => (
            <p key={index} className="flex gap-3 items-start text-sm">
              <Check className="text-success shrink-0" size={18} />
              {feature}
            </p>
          ))}
        </div>
      </div>

      <button
        className={`btn w-full ${
          card.cta.type === "primary" ? "btn-primary" : "btn-outline"
        }`}
      >
        {card.cta.label}
      </button>
    </div>
  );
};

export default PriceCard;
