import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Top Destinations Sections */}
        <div className="destinations-section-footer">
          <div className="destination-column">
            <h4>Top Destinations in the US</h4>
            <ul>
              <li><Link to="/">Austin</Link></li>
              <li><Link to="/">Chicago</Link></li>
              <li><Link to="/">Las Vegas</Link></li>
              <li><Link to="/">Miami</Link></li>
              <li><Link to="/">New York City</Link></li>
            </ul>
          </div>

          <div className="destination-column">
            <h4>Top International Destinations</h4>
            <ul>
              <li><Link to="/">Dubai</Link></li>
              <li><Link to="/">London</Link></li>
              <li><Link to="/">Paris</Link></li>
              <li><Link to="/">Rome</Link></li>
              <li><Link to="/">Tokyo</Link></li>
            </ul>
          </div>

          <div className="destination-column">
            <h4>Top Destinations by Region</h4>
            <ul>
              <li><Link to="/">Caribbean</Link></li>
              <li><Link to="/">Europe</Link></li>
              <li><Link to="/">Mexico</Link></li>
              <li><Link to="/">United Arab Emirates</Link></li>
              <li><Link to="/">United States</Link></li>
            </ul>
          </div>
        </div>

        {/* Company Links Section */}
        <div className="company-links">
          <div className="links-row">
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investor Relations</Link>
            <Link to="/">Travel Professionals</Link>
            <Link to="/">Hotel Development</Link>
          </div>
          <div className="links-row">
            <Link to="/">Sustainability</Link>
            <Link to="/">Press Center</Link>
            <Link to="/">Safety & Security</Link>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>

        {/* Social Media and App Section */}
        <div className="social-section">
          <div className="social-links">
            <Link to="/"><FaFacebookF /></Link>
            <Link to="/"><FaTwitter /></Link>
            <Link to="/"><FaInstagram /></Link>
          </div>
          <div className="app-download">
            <p>Download our mobile app</p>
            <div className="app-buttons">
              <Link to="/" className="app-store">App Store</Link>
              <Link to="/" className="play-store">Google Play</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2024 Hotel Booking. All rights reserved.</p>
          <p>Most hotels are independently owned and operated.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 