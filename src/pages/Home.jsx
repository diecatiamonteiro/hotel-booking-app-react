import React, { useState } from 'react';
import { generateHotelsForCity } from '../data/hotels';
import '../styles/Home.css';


const Home = () => {
  const [searchParams, setSearchParams] = useState({
    city: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });
  const [hotels, setHotels] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = generateHotelsForCity(searchParams.city, searchParams);
    setHotels(results);
  };

  return (
    <div className="hotel-search">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-inputs">
          <input
            type="text"
            placeholder="Enter city"
            value={searchParams.city}
            onChange={(e) => setSearchParams({...searchParams, city: e.target.value})}
            required
          />
          <input
            type="date"
            value={searchParams.checkIn}
            onChange={(e) => setSearchParams({...searchParams, checkIn: e.target.value})}
            required
          />
          <input
            type="date"
            value={searchParams.checkOut}
            onChange={(e) => setSearchParams({...searchParams, checkOut: e.target.value})}
            required
          />
          <input
            type="number"
            min="1"
            value={searchParams.guests}
            onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
            required
          />
        </div>
        <button type="submit">Search Hotels</button>
      </form>
      {/* This is someone else's job */}
      <div className="hotel-list">
        {hotels.map(hotel => (
          <div key={hotel.hotelId} className="hotel-card">
            <h3>{hotel.name}</h3>
            <p>{hotel.address.cityName}</p>
            <p>Rating: {'⭐'.repeat(hotel.starRating)}</p>
            <p>Price: €{hotel.rooms.classic.basePrice} per night</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 