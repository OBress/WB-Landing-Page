import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./content/pages/Landing";
import TopBar from "./content/TopBar";
import Pricing from "./content/pages/PricingPage/Pricing";
import Footer from "./content/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50">
          <TopBar />
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
