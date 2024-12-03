import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { SiHiltonhotelsandresorts } from "react-icons/si";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" id="logo">
        <SiHiltonhotelsandresorts />
        Hotel Booking
      </Link>
      <Link to="/destinations">Destinations</Link>
      <Link to="/offers">Offers</Link>
    </nav>
  );
}
