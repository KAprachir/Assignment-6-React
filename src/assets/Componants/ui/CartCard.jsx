import React from "react";
import { Trash2 } from "lucide-react";

const CartCard = ({ product, handleRemoveProduct }) => {
  const { name, price, icon } = product;

  return (
    <div className="flex flex-row items-center justify-between bg-white border border-slate-100 p-4 mb-3 rounded-2xl transition-all hover:border-fuchsia-100 hover:shadow-md group">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-fuchsia-50 transition-colors">
          <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            {name}
          </h3>
          <p className="text-fuchsia-600 font-bold text-base">${price}</p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveProduct(product)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
      >
        <Trash2 size={16} />
        <span className="hidden sm:inline">Remove</span>
      </button>
    </div>
  );
};

export default CartCard;
