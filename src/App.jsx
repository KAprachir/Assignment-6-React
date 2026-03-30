import { Suspense } from "react";
import "./App.css";
import Count from "./assets/Componants/Count/Count";
import GetStart from "./assets/Componants/GetStart/GetStart";
import Hero from "./assets/Componants/Hero/Hero";
import Navbar from "./assets/Componants/Navbar/Navbar";
import PricingSection from "./assets/Componants/PricingCard/PricingSection";
import Products from "./assets/Componants/Products/Products";

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
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Count></Count>
        <Suspense fallback={"data is loading"}>
          <Products productPromise={productPromise}></Products>
        </Suspense>
        <GetStart></GetStart>
        <Suspense fallback={"data is loading"}>
          <PricingSection pricePromise={pricePromise}></PricingSection>
        </Suspense>
      </div>
    </>
  );
}

export default App;
