import React from "react";
import { Check } from "lucide-react";
import { Bounce, toast } from "react-toastify";

const Card = ({ product, selectProduct, setSelectProduct, setTotal }) => {
  const { id, name, description, price, tag, features, icon } = product;

  const isAlreadyInCart = selectProduct.some((p) => p.id === id);

  const buyBtnHandle = () => {
    if (isAlreadyInCart) {
      toast.info(`${name} is already in your cart`, { theme: "colored" });
      return;
    }

    setSelectProduct([...selectProduct, product]);
    setTotal((prevTotal) => prevTotal + price);

    toast.success(`${name} added to cart!`, {
      position: "top-center",
      transition: Bounce,
      autoClose: 3000,
    });
  };

  return (
    <div className="group flex flex-col border border-gray-200 p-8 bg-white hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-xl rounded-3xl space-y-6 relative">
      {tag && (
        <div
          className={`absolute top-5 right-6 badge border-none text-white font-bold p-3 ${
            tag === "Best Seller"
              ? "bg-orange-500"
              : tag === "Popular"
                ? "bg-blue-500"
                : "bg-purple-500"
          }`}
        >
          {tag}
        </div>
      )}

      <div className="flex-1 space-y-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 shadow-inner group-hover:bg-indigo-50 transition-colors">
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
            {name}
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
        </div>

        <div className="py-2">
          <h3 className="text-4xl font-black text-slate-900">
            ${price}
            <span className="text-gray-400 text-lg font-normal">/mo</span>
          </h3>
        </div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-gray-600"
            >
              <Check
                className="text-emerald-500 shrink-0"
                size={18}
                strokeWidth={3}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={buyBtnHandle}
        disabled={isAlreadyInCart}
        className={`w-full py-4 rounded-2xl text-lg font-bold transition-all transform active:scale-95 shadow-md
            ${
              isAlreadyInCart
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white hover:opacity-90 hover:shadow-lg"
            }`}
      >
        {isAlreadyInCart ? "In Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Card;
