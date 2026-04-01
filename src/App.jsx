import { Suspense, useState } from "react";
import "./App.css";
import Count from "./assets/Componants/Count/Count";
import GetStart from "./assets/Componants/GetStart/GetStart";
import Hero from "./assets/Componants/Hero/Hero";
import Navbar from "./assets/Componants/Navbar/Navbar";
import PricingSection from "./assets/Componants/PricingCard/PricingSection";
import Products from "./assets/Componants/Products/Products";
import { ToastContainer } from "react-toastify";

const fetchPrice = async () => {
  const res = await fetch("Pricing.json");
  return res.json();
};
const pricePromise = fetchPrice();

const fetchProduct = async () => {
  const res = await fetch("products.json");
  return res.json();
};
const productPromise = fetchProduct();

function App() {
  const [selectProduct, setSelectProduct] = useState([]);

  return (
    <>
      <div>
        <Navbar selectProduct={selectProduct}></Navbar>
        <Hero></Hero>
        <Count></Count>
        <Suspense
          fallback={<span class="$$loading $$loading-bars $$loading-xl"></span>}
        >
          <Products
            productPromise={productPromise}
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
          ></Products>
        </Suspense>
        <GetStart></GetStart>
        <Suspense
          fallback={<span class="$$loading $$loading-bars $$loading-xl"></span>}
        >
          <PricingSection pricePromise={pricePromise}></PricingSection>
        </Suspense>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
