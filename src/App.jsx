import { Suspense } from "react";
import "./App.css";
import Count from "./assets/Componants/Count/Count";
import GetStart from "./assets/Componants/GetStart/GetStart";
import Hero from "./assets/Componants/Hero/Hero";
import Navbar from "./assets/Componants/Navbar/Navbar";
import PricingSection from "./assets/Componants/PricingCard/PricingSection";

const fetchPrice = async () => {
  const res = await fetch("Pricing.json");
  return res.json();
};
function App() {
  const pricePromise = fetchPrice();
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Count></Count>
        <GetStart></GetStart>
        <Suspense fallback={"data is loading"}>
          <PricingSection pricePromise={pricePromise}></PricingSection>
        </Suspense>
      </div>
    </>
  );
}

export default App;
