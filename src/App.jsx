import "./App.css";
import Count from "./assets/Componants/Count/Count";
import GetStart from "./assets/Componants/GetStart/GetStart";
import Hero from "./assets/Componants/Hero/Hero";
import Navbar from "./assets/Componants/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Count></Count>
        <GetStart></GetStart>
      </div>
    </>
  );
}

export default App;
