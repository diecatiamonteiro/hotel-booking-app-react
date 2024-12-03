import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import Offers from "./pages/Offers";
import ScrollToTop from "./components/ScrollToTop";
import HotelsList from './pages/HotelsList';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/hotels" element={<HotelsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
