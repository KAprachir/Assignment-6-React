import { toast } from "react-toastify";
import CartCard from "./CartCard";

const Cart = ({ selectProduct, setSelectProduct, total, setTotal }) => {
  const handleRemoveProduct = (product) => {
    const fiterProduct = selectProduct.filter((item) => item.id != product.id);
    setSelectProduct(fiterProduct);
    setTotal(total - product.price);
  };
  const handleCheckout = () => {
    setSelectProduct([]);
    setTotal(0);
    toast.success("Thank you for your purchase!");
  };
  return (
    <div className="w-10/12 mx-auto p-5 bg-base-100 shadow-sm rounded-2xl">
      <h1 className="text-2xl">Your Cart</h1>

      {selectProduct.length === 0 ? (
        <div className=" p-10 bg-base-200 shodow">
          <div className="flex flex-col items-center justify-center p-5">
            <h1 className="text-5xl font-bold text-center">
              No Product is Added
            </h1>
            <p className="text-xl font-bold text-center">
              Go to the Product Tab and Buy Now
            </p>
          </div>
        </div>
      ) : (
        selectProduct.map((product) => (
          <CartCard
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></CartCard>
        ))
      )}
      <div className="flex justify-between items-center my-4 mx-4">
        <h3 className="text-xl">Total</h3>
        <p className="text-2xl font-bold">${total}</p>
      </div>
      <button
        onClick={() => handleCheckout()}
        className="btn w-full p-2 bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-lg font-bold text-amber-50 rounded-4xl"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
