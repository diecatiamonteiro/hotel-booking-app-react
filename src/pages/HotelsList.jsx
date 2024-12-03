import React, { useState } from 'react';
import HotelCard from '../components/HotelCard.jsx';    
import AmenityModal from '../pages/AmenityModal.jsx';
import { hotelTemplates, hotelAmenities } from '../data/hotels';
import '../styles/HotelsList.css';

const HotelsList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState({});
  const [filteredHotels, setFilteredHotels] = useState(hotelTemplates);

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities(prev => ({
      ...prev,
      [amenity]: !prev[amenity]
    }));
  };

  const unselectAll = () => {
    setSelectedAmenities({});
  };

  const applyFilters = () => {
    const selectedAmenitiesList = Object.entries(selectedAmenities)
      .filter(([_, isSelected]) => isSelected)
      .map(([amenity]) => amenity);

    if (selectedAmenitiesList.length === 0) {
      setFilteredHotels(hotelTemplates);
    } else {
      const filtered = hotelTemplates.filter(hotel => {
        const hotelAmenitiesList = Object.values(hotel.amenities).flat();
        return selectedAmenitiesList.every(amenity => 
          hotelAmenitiesList.includes(amenity)
        );
      });
      setFilteredHotels(filtered);
    }
    setShowFilter(false);
  };

  return (
    <div className="hotels-page">
      <h1>Select a hotel</h1>
      
      <div className="filters-section">
        <button 
          className="filter-button"
          onClick={() => setShowFilter(true)}
        >
          Amenities
        </button>
      </div>

      <AmenityModal 
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        hotelAmenities={hotelAmenities}
        selectedAmenities={selectedAmenities}
        handleAmenityChange={handleAmenityChange}
        unselectAll={unselectAll}
        applyFilters={applyFilters}
      />

      <div className="hotels-list-container">
        {filteredHotels.map((hotel, index) => (
          <HotelCard 
            key={index}
            image={hotel.media[0].uri}
            name={hotel.name}
            city={hotel.city || 'Berlin'}
            amenities={{
              wellness: hotel.amenities.wellness[0],
              dining: hotel.amenities.dining[0],
              business: hotel.amenities.business[0],
              services: hotel.amenities.services[0],
              facilities: hotel.amenities.facilities[0]
            }}
            price={hotel.rooms.classic.basePrice}
            starRating={hotel.starRating}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelsList; 