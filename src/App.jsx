import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import HotelDetails from './pages/HotelDetails';




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HotelDetails" element={<HotelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
