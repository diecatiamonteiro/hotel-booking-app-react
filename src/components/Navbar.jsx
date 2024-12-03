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

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" id="logo" onClick={handleLogoClick}>
        <SiHiltonhotelsandresorts />
        Hotel Booking
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/destinations" onClick={handleNavClick}>
          Destinations
        </Link>
        <Link to="/offers" onClick={handleNavClick}>
          Offers
        </Link>
      </div>
    </nav>
  );
}
