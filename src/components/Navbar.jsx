import { Link } from "react-router-dom";
import { useState } from "react";
import { SiHiltonhotelsandresorts } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <Link to="/" id="logo">
        <SiHiltonhotelsandresorts />
        Hotel Booking
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>Destinations</Link>
        <Link to="/offers" onClick={() => setIsMenuOpen(false)}>Offers</Link>
      </div>
    </nav>
  );
}
