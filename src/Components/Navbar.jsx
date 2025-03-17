import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Booking" className="nav-link">Booking</Link>
        <Link to="/Login" className="nav-link login-btn">Login</Link>
      </div>
    </nav>
  );
}
