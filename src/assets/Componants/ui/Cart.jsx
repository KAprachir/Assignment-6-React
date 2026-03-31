import React from "react";

const Cart = ({ selectProduct, setSelectProduct }) => {
  console.log(selectProduct);
  return (
    <>
      <div className=" p-10 bg-base-200 shodow">
        <h1 className="text-2xl">Your Cart</h1>
        <div className="flex flex-col items-center justify-center p-5">
          <h1 className="text-5xl font-bold text-center">
            No Product is Added
          </h1>
          <p className="text-xl font-bold text-center">
            Go to the Product Tab and Buy Now
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
