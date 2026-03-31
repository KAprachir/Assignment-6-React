import React, { use, useState } from "react";
import ProductCard from "../ui/ProductCard";
import Cart from "../ui/Cart";

const Products = ({ productPromise }) => {
  const productData = use(productPromise);

  const [activeTab, setActiveTab] = useState("product");

  const [selectProduct, setSelectProduct] = useState([]);

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
        <div className="flex gap-1 bg-base-200 p-2 rounded-4xl">
          <button
            onClick={() => setActiveTab("product")}
            className={`btn text-lg rounded-4xl ${activeTab === "product" ? "text-white bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)]" : "bg-base-100"}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`btn text-lg rounded-4xl ${activeTab === "cart" ? "text-white bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)]" : "bg-base-100"}`}
          >
            Cart <span>(0)</span>
          </button>
        </div>
      </div>

      {activeTab === "product" ? (
        <ProductCard
          productData={productData}
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
        ></ProductCard>
      ) : (
        <Cart
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
        ></Cart>
      )}
    </div>
  );
};

export default Products;
