import React from "react";

const CartCard = ({ product, handleRemoveProduct }) => {
  const { id, name, price, icon } = product;
  return (
    <div
      key={id}
      className="flex flex-col md:flex-row gap-5 justify-between items-center bg-base-200 shadow rounded-2xl p-5 mb-4"
    >
      <div className="flex">
        <img
          src={icon}
          alt=""
          className="p-2 rounded-full bg-base-100 shadow-sm"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold ">{name} </h2>
          <p className="text-lg">${price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemoveProduct(product)}
          className="btn text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
