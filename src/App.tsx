import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./content/pages/Landing";
import TopBar from "./content/TopBar";
import Pricing from "./content/pages/Pricing";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
