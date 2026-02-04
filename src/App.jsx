import "./App.css";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import StoreInfo from "./components/sections/StoreInfo";
import PriceComparison from "./components/sections/PriceComparison";
import Container from "./components/Container";

function App() {
  return (
    <>
      <div className="bg-slate-50 overflow-x-hidden">
        <Container>
          <Hero />
          <StoreInfo />
          <PriceComparison />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
