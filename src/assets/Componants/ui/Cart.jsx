import { Bounce, toast } from "react-toastify";
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
    toast.success("Thank you for your purchase!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-10 bg-white border border-gray-100 shadow-xl rounded-3xl">
      <h2 className="text-3xl font-black text-slate-900 mb-8 px-2">
        Your Cart
      </h2>

      <div className="space-y-4 mb-8">
        {selectProduct.length === 0 ? (
          <div className="py-16 px-6 border-2 border-dashed border-gray-100 rounded-3xl bg-slate-50/50">
            <div className="flex flex-col items-center justify-center space-y-3">
              <h3 className="text-3xl font-extrabold text-slate-400 text-center">
                Your cart is empty
              </h3>
              <p className="text-gray-400 font-medium text-center">
                Go to the Product Tab to add some premium tools.
              </p>
            </div>
          </div>
        ) : (
          selectProduct.map((product) => (
            <CartCard
              key={product.id}
              product={product}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))
        )}
      </div>

      <div className="border-t border-gray-100 pt-6 px-4">
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold text-gray-500">Order Total</span>
          <span className="text-4xl font-black text-slate-900 tracking-tight">
            ${total.toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleCheckout}
          disabled={selectProduct.length === 0}
          className={`w-full py-4 text-lg font-bold text-white rounded-2xl transition-all shadow-lg active:scale-[0.98] 
            ${
              selectProduct.length === 0
                ? "bg-gray-200 cursor-not-allowed text-gray-400 shadow-none"
                : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:opacity-90 hover:shadow-indigo-200"
            }`}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
