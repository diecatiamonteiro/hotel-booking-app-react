import React from 'react';
import { Link } from 'react-router-dom';
import { generateHotelsForCity } from '../data/hotels';
import '../styles/HomeSpecialOffers.css';

const HomeSpecialOffers = () => {
  const searchParams = {
    checkIn: new Date().toISOString(),
    checkOut: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    guests: 2,
    filters: {}
  };

  // Get some luxury hotels for special offers
  const luxuryHotels = generateHotelsForCity('Paris', searchParams)
    .filter(hotel => hotel.starRating >= 4);

  return (
    <section className="special-offers">
      <div className="offers-header">
        <h2>Exclusive Deals</h2>
        <p>Book now and save up to 25% on your stay</p>
      </div>

      <div className="offers-container">
        {luxuryHotels.slice(0, 3).map((hotel, index) => (
          <div key={index} className="offer-item">
            <div className="offer-image">
              <img src={hotel.media[0]?.uri} alt={hotel.name} />
              <span className="discount-badge">25% OFF</span>
            </div>
            <div className="offer-details">
              <h3>{hotel.name}</h3>
              <div className="offer-features">
                <span>✓ Free cancellation</span>
                <span>✓ Breakfast included</span>
                <span>✓ Spa access</span>
              </div>
              <div className="price-container">
                <div className="price">
                  <span className="original-price">${Math.round(hotel.rooms.classic.basePrice * 1.25)}</span>
                  <span className="discounted-price">${hotel.rooms.classic.basePrice}</span>
                  <span className="per-night">per night</span>
                </div>
                <Link to="/offers" className="view-deal-btn">View Deal</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all-offers">
        <Link to="/offers" className="view-all-btn">View All Offers</Link>
      </div>
    </section>
  );
};

export default HomeSpecialOffers; 
