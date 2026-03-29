import "./App.css";
import Count from "./assets/Componants/Count/Count";
import Hero from "./assets/Componants/Hero/Hero";
import Navbar from "./assets/Componants/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Count></Count>
      </div>
    </>
  );
}

export default App;
