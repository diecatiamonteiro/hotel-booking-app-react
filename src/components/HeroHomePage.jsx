import React from 'react';
import SearchBar from './SearchBar';
import '../styles/HeroHomePage.css';

const HeroHomePage = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Stay</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroHomePage;