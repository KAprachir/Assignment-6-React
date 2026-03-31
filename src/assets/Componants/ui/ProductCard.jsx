import React from "react";
import Card from "./Card";

const ProductCard = ({ productData, selectProduct, setSelectProduct }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
      {productData.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
            setSelectProduct={setSelectProduct}
            selectProduct={selectProduct}
          ></Card>
        );
      })}
    </div>
  );
};

export default ProductCard;
