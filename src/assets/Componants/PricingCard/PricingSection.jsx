import React, { use } from "react";
import PriceCard from "../ui/PriceCard";

const PricingSection = ({ pricePromise }) => {
  const cardsData = use(pricePromise);

  return (
    <section className="w-11/12 max-w-7xl mx-auto py-16 md:py-24">
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cardsData.map((card, ind) => (
          <div
            key={card.name}
            className="transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-2xl rounded-3xl"
          >
            <PriceCard card={card} ind={ind} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
