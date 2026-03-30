import React, { use } from "react";
import PriceCard from "../ui/PriceCard";

const PricingSection = ({ pricePromise }) => {
  const cardsData = use(pricePromise);
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-extrabold">Simple, Transparent Pricing</h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-15">
        {cardsData.map((card, ind) => (
          <PriceCard key={card.name} card={card} ind={ind}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
