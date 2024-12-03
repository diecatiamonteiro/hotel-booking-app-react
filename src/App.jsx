import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import Offers from "./pages/Offers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
