import React, { useState, useRef, useEffect } from "react";
import { generateHotelsForCity } from "../data/hotels";
import "../styles/SearchBar.css";

export default function SearchBar() {
  const [hotels, setHotels] = useState([]);
  const [isGuestsPanelOpen, setIsGuestsPanelOpen] = useState(false);
  const guestsPanelRef = useRef(null);
  const guestsTriggerRef = useRef(null);

  const [searchParams, setSearchParams] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    rooms: 1,
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        guestsPanelRef.current && 
        !guestsPanelRef.current.contains(event.target) &&
        !guestsTriggerRef.current.contains(event.target)
      ) {
        setIsGuestsPanelOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGuestsClick = () => {
    setIsGuestsPanelOpen(!isGuestsPanelOpen);
  };

  const updateGuests = (type, operation) => {
    setSearchParams(prev => ({
      ...prev,
      [type]: operation === 'increment' 
        ? prev[type] + 1 
        : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1)
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const results = generateHotelsForCity(searchParams.city, searchParams);
    setHotels(results);
    setIsGuestsPanelOpen(false);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-inputs">
          <div className="input-container">
            <label htmlFor="city">Destination</label>
            <input
              type="text"
              placeholder="Eg. Amsterdam"
              value={searchParams.city}
              onChange={(e) =>
                setSearchParams({ ...searchParams, city: e.target.value })
              }
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="checkIn">Check-in</label>
            <input
              type="date"
              value={searchParams.checkIn}
              onChange={(e) =>
                setSearchParams({ ...searchParams, checkIn: e.target.value })
              }
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="checkOut">Check-out</label>
            <input
              type="date"
              value={searchParams.checkOut}
              onChange={(e) =>
                setSearchParams({ ...searchParams, checkOut: e.target.value })
              }
              required
            />
          </div>

          <div className="input-container guests-input">
            <label>Guests & Rooms</label>
            <div 
              ref={guestsTriggerRef}
              className="guests-summary" 
              onClick={handleGuestsClick}
            >
              {searchParams.adults} Adults, {searchParams.children} Children, {searchParams.rooms} Room
            </div>
            
            {isGuestsPanelOpen && (
              <div ref={guestsPanelRef} className="guests-panel">
                <div className="guest-type">
                  <span>Adults</span>
                  <div className="quantity-controls">
                    <button 
                      type="button" 
                      onClick={() => updateGuests('adults', 'decrement')}
                      disabled={searchParams.adults <= 1}
                    >-</button>
                    <span>{searchParams.adults}</span>
                    <button 
                      type="button" 
                      onClick={() => updateGuests('adults', 'increment')}
                    >+</button>
                  </div>
                </div>

                <div className="guest-type">
                  <span>Children</span>
                  <div className="quantity-controls">
                    <button 
                      type="button" 
                      onClick={() => updateGuests('children', 'decrement')}
                      disabled={searchParams.children <= 0}
                    >-</button>
                    <span>{searchParams.children}</span>
                    <button 
                      type="button" 
                      onClick={() => updateGuests('children', 'increment')}
                    >+</button>
                  </div>
                </div>

                <div className="guest-type">
                  <span>Rooms</span>
                  <div className="quantity-controls">
                    <button 
                      type="button" 
                      onClick={() => updateGuests('rooms', 'decrement')}
                      disabled={searchParams.rooms <= 1}
                    >-</button>
                    <span>{searchParams.rooms}</span>
                    <button 
                      type="button" 
                      onClick={() => updateGuests('rooms', 'increment')}
                    >+</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button type="submit" className="search-button">Search Hotels</button>
      </form>
    </div>
  );
}
