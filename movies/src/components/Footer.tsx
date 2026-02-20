import "../App.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <h2 className="footer-logo">Movie</h2>

          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/player">Movies</Link>
            <Link to="/tv">TV Shows</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Movie. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}