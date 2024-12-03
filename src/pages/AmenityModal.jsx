import React from 'react';
import { FaTimes, FaSpa, FaUtensils, FaBriefcase, 
  FaParking, FaSwimmingPool, FaPlane, FaBus, FaDumbbell,
  FaUmbrellaBeach, FaChild, FaChargingStation, FaCar,
  FaBed, FaCoffee, FaWifi, FaDog } from 'react-icons/fa';
import '../styles/AmenityModal.css';

const amenityIcons = {
  "Spa": FaSpa,
  "Restaurant": FaUtensils,
  "Business center": FaBriefcase,
  "24-hour front desk": FaBriefcase,
  "Parking": FaParking,
  "Swimming pool": FaSwimmingPool,
  "Airport shuttle": FaPlane,
  "Area shuttle": FaBus,
  "Fitness center": FaDumbbell,
  "Beach access": FaUmbrellaBeach,
  "Children activities": FaChild,
  "Electric vehicle charging": FaChargingStation,
  "Valet parking": FaCar,
  "Room service": FaBed,
  "Coffee shop": FaCoffee,
  "High-speed WiFi": FaWifi,
  "Pet friendly": FaDog
};

const AmenityModal = ({ 
  showFilter, 
  setShowFilter, 
  hotelAmenities, 
  selectedAmenities, 
  handleAmenityChange, 
  unselectAll, 
  applyFilters 
}) => {
  if (!showFilter) return null;

  return (
    <div className="filter-modal-overlay">
      <div className="filter-modal">
        <div className="filter-modal-header">
          <h2>Amenities</h2>
          <div className="modal-actions">
            <button className="unselect-all" onClick={unselectAll}>
              Unselect all
            </button>
            <button className="close-modal" onClick={() => setShowFilter(false)}>
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="amenities-container">
          {Object.entries(hotelAmenities).map(([category, amenities]) => (
            <div key={category} className="amenity-category">
              <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <div className="amenity-list">
                {amenities.map(amenity => {
                  const IconComponent = amenityIcons[amenity] || FaConciergebell;
                  return (
                    <label key={amenity} className="amenity-item">
                      <input
                        type="checkbox"
                        checked={selectedAmenities[amenity] || false}
                        onChange={() => handleAmenityChange(amenity)}
                      />
                      <IconComponent className="amenity-icon" />
                      <span>{amenity}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <button className="apply-button" onClick={applyFilters}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default AmenityModal;
