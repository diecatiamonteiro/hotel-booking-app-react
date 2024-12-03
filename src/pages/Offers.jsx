import React from 'react';
import { generateHotelsForCity } from '../data/hotels';
import '../styles/Offers.css';

const Offers = () => {
  const searchParams = {
    checkIn: new Date().toISOString(),
    checkOut: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    guests: 2,
    filters: {}
  };

  const luxuryHotels = generateHotelsForCity('Paris', searchParams)
    .filter(hotel => hotel.starRating >= 4);

  return (
    <div className="offers-page">
      <h1>Special Offers</h1>
      <div className="offers-list">
        {luxuryHotels.map((hotel, index) => (
          <div key={index} className="offer-card">
            <img src={hotel.media[0]?.uri} alt={hotel.name} />
            <div className="offer-info">
              <h3>{hotel.name}</h3>
              <p>Enjoy a luxurious stay with exclusive discounts</p>
              <p>Original Price: ${Math.round(hotel.rooms.classic.basePrice * 1.25)}</p>
              <p>Discounted Price: ${hotel.rooms.classic.basePrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
