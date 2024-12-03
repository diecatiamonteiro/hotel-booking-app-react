import React from 'react';
import { hotelTemplates } from '../data/hotels';
import '../styles/HotelDetails.css';
import { FaSpa, FaUtensils, FaBriefcase, FaConciergeBell, FaParking } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';


const getAmenityIcon = (category) => {
  switch (category) {
    case 'wellness':
      return <FaSpa />;
    case 'dining':
      return <FaUtensils />;
    case 'business':
      return <FaBriefcase />;
    case 'services':
      return <FaConciergeBell />;
    case 'facilities':
      return <FaParking />;
    default:
      return null;
  }
};

const HotelDetails = () => {
  return (
    <div className="hotel-details-container">
      {hotelTemplates.map((hotel) => (
        <div key={hotel.name} className="hotel-card">
          <div className="hotel-images">
            <div className="main-image">
              <img src={hotel.media[0].uri} alt={hotel.name} />
            </div>
            <div className="thumbnail-image">
              <img src={hotel.media[1].uri} alt={`${hotel.name} room`} />
            </div>
          </div>

          <div className="hotel-content">
            <div className="hotel-info">
              <h2 className="hotel-name">{hotel.name}</h2>
              <p className="hotel-description">{hotel.description}</p>
              
              <div className="amenities-section">
                <h3>Hotel Amenities</h3>
                <div className="amenities-list">
                  {Object.entries(hotel.amenities).map(([category, amenities]) => (
                    <div key={category} className="amenity-item">
                      {getAmenityIcon(category)}
                      <span>{amenities[0]}</span>
                    </div>
                  ))}
                </div>

                <div className="additional-info">
                  <div className="parking-info">
                    <FaParking />
                    <span>Parking Available</span>
                  </div>
                  <div className="pet-policy">
                    <MdPets />
                    <span>{hotel.policies.pets}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="price-section">
              <div className="price">
                <span className="currency">€</span>
                <span className="amount">{hotel.rooms.classic.basePrice}</span>
                <span className="per-night">/night</span>
              </div>
              <button className="select-button">Select Room</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelDetails;