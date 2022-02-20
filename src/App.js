import "./App.css";
import React from "react";
import Header from "./Layout/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
