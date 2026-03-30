import React from "react";
import { Check } from "lucide-react";

const ProductCard = ({ productData }) => {
  console.log(productData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
      {productData.map((product) => {
        const { id, name, description, price, tag, features, icon } = product;
        return (
          <div
            key={id}
            className=" flex flex-col border-2 border-gray-300 p-10 bg-base-100 shadow-sm rounded-2xl space-y-5 relative"
          >
            <div className="badge absolute top-5 right-10">{tag}</div>
            <div className="space-y-5 flex-1">
              <img
                src={icon}
                alt=""
                className="p-2 rounded-full bg-base-100 shadow-sm"
              />
              <h1 className="text-4xl font-bold">{name}</h1>
              <p className="text-[#627382]">{description}</p>
              <h3 className="text-4xl font-extraboldbold">
                ${price}
                <span className="text-[#627382] text-lg">/Mo</span>{" "}
              </h3>
              {features.map((feature) => (
                <p
                  key={feature}
                  className="text-[#627382] flex items-center gap-2"
                >
                  <Check className="text-success shrink-0" size={22} />
                  {feature}
                </p>
              ))}
            </div>
            <button
              className="btn text-white text-lg font-semibold 
            bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] w-full rounded-4xl"
            >
              Buy Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
