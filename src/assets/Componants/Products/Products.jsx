import React, { use, useState } from "react";
import ProductCard from "../ui/ProductCard";
import Cart from "../ui/Cart";

const Products = ({ productPromise, selectProduct, setSelectProduct }) => {
  const productData = use(productPromise);
  const [activeTab, setActiveTab] = useState("product");
  const [total, setTotal] = useState(0);

  return (
    <section className="w-11/12 max-w-7xl mx-auto py-20">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mt-4 mb-8 leading-relaxed">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="inline-flex p-1.5 bg-gray-100 rounded-full border border-gray-200">
          <button
            onClick={() => setActiveTab("product")}
            className={`px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
              activeTab === "product"
                ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-lg"
                : "text-gray-500 hover:text-slate-900"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-2 ${
              activeTab === "cart"
                ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-lg"
                : "text-gray-500 hover:text-slate-900"
            }`}
          >
            Your Cart
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === "cart"
                  ? "bg-white/20 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {selectProduct.length}
            </span>
          </button>
        </div>
      </div>

      <div className="mt-4 transition-all duration-500 ease-in-out">
        {activeTab === "product" ? (
          <ProductCard
            productData={productData}
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
            total={total}
            setTotal={setTotal}
          />
        ) : (
          <Cart
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
            total={total}
            setTotal={setTotal}
          />
        )}
      </div>
    </section>
  );
};

export default Products;
