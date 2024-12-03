import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/HotelCard.css';

const HotelCard = ({ image, name, city, amenities, price, starRating }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="hotel-info">
        <h2 className="hotel-name">{name}</h2>
        <div className="star-rating">
          {[...Array(starRating)].map((_, index) => (
            <FaStar key={index} className="star-icon" />
          ))}
        </div>
        <p className="hotel-city">{city}</p>
        
        <div className="hotel-amenities">
          {Object.values(amenities).map((amenity, index) => (
            amenity && <span key={index} className="amenity">{amenity}</span>
          ))}
        </div>
      </div>

      <div className="hotel-price-section">
        <div className="price-container">
          <span className="price-amount">{price}</span>
          <span className="price-currency">EUR</span>
          <span className="price-period">per night</span>
          <span className="price-taxes">Includes taxes and fees</span>
        </div>
        <button className="select-button">Select Hotel</button>
      </div>
    </div>
  );
};

export default HotelCard; 