import React from "react";
import { Link } from "react-router-dom";
import { generateHotelsForCity } from "../data/hotels";
import "../styles/HomePopularDestinations.css";

const HomePopularDestinations = () => {
  // Create dummy search params for the sample data
  const searchParams = {
    checkIn: new Date().toISOString(),
    checkOut: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    guests: 2,
    filters: {},
  };

  // Generate some sample hotels for popular destinations
  const parisHotels = generateHotelsForCity("Paris", searchParams);
  const londonHotels = generateHotelsForCity("London", searchParams);
  const romeHotels = generateHotelsForCity("Rome", searchParams);

  return (
    <div className="home-content">
      {/* Popular Destinations Section */}
      <section className="destinations-section">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          <Link to="/destinations" className="destination-card">
            <img src={parisHotels[0]?.media[0]?.uri} alt="Paris Hotels" />
            <div className="card-content">
              <h3>Paris</h3>
              <p>Discover luxury stays in the City of Light</p>
            </div>
          </Link>
          <Link to="/destinations" className="destination-card">
            <img src={londonHotels[0]?.media[0]?.uri} alt="London Hotels" />
            <div className="card-content">
              <h3>London</h3>
              <p>Explore the vibrant capital of England</p>
            </div>
          </Link>
          <Link to="/destinations" className="destination-card">
            <img src={romeHotels[0]?.media[0]?.uri} alt="Rome Hotels" />
            <div className="card-content">
              <h3>Rome</h3>
              <p>Experience the ancient history and culture</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePopularDestinations;
