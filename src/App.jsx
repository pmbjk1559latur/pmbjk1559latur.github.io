import "./App.css";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import StoreInfo from "./components/sections/StoreInfo";
import PriceComparison from "./components/sections/PriceComparison";

function App() {
  return (
    <>
      <Hero />
      <StoreInfo />
      <PriceComparison />
      <Footer />
    </>
  );
}

export default App;
