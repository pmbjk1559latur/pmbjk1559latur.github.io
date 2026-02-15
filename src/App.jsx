import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Hero from "./components/sections/Hero";
import StoreInfo from "./components/sections/StoreInfo";
import PriceComparison from "./components/sections/PriceComparison";
import Footer from "./components/sections/Footer";
import Container from "./components/Container";

const HeavyPage = lazy(() => import("./components/sections/HeavyPage"));

function HomePage() {
  return (
    <div className="bg-slate-50">
      <Container>
        <Hero />
        <StoreInfo />
        <PriceComparison />
        <Footer />
      </Container>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/heavy" element={<HeavyPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
