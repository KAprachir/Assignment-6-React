import React, { use, useState } from "react";
import ProductCard from "../ui/ProductCard";

const Products = ({ productPromise }) => {
  const productData = use(productPromise);

  const [activeTab, setActiveTab] = useState("product");

  return (
    <div className="w-10/12 mx-auto my-20">
      {/* card Header */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
        <p className="my-5">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
        <div>
          <button
            onClick={() => setActiveTab("product")}
            className={`btn text-white font-bold rounded-4xl ${activeTab === "product" ? "bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)]" : "btn-soft"}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`btn text-white font-bold rounded-4xl ${activeTab === "cart" ? "bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)]" : "btn-soft"}`}
          >
            Cart <span>(0)</span>
          </button>
        </div>
      </div>
      <ProductCard productData={productData}></ProductCard>
    </div>
  );
};

export default Products;
