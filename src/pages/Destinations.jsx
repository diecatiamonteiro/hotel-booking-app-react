import React from 'react';
import { generateHotelsForCity } from '../data/hotels';
import '../styles/Destinations.css';

const Destinations = () => {
  const searchParams = {
    checkIn: new Date().toISOString(),
    checkOut: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    guests: 2,
    filters: {}
  };

  const cities = ['Paris', 'London', 'Rome'];
  const hotelsByCity = cities.map(city => ({
    city,
    hotels: generateHotelsForCity(city, searchParams)
  }));

  return (
    <div className="destinations-page">
      <h1>Explore Our Destinations</h1>
      {hotelsByCity.map(({ city, hotels }) => (
        <section key={city} className="city-section">
          <h2>{city}</h2>
          <div className="hotel-list">
            {hotels.map((hotel, index) => (
              <div key={index} className="hotel-card">
                <img src={hotel.media[0]?.uri} alt={hotel.name} />
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  <p>{hotel.description}</p>
                  <p>From ${hotel.rooms.classic.basePrice} per night</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Destinations;
