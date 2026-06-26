import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY + 10) {
        setShowNavbar(false);
      } else if (window.scrollY < lastScrollY - 10) {
        setShowNavbar(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>

      {/* Logo */}

      <div className="brand">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="CrackOne"
            className="logo"
          />
        </Link>

        <span>CrackOne Technologies</span>
      </div>

      {/* Mobile Menu */}

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        {/* Home page sections */}

        {location.pathname === "/" ? (
          <>
            <a href="#solutions">Solutions</a>
            <a href="#services">What We Do</a>
            <a href="#why-choose">Why Us</a>
            <a href="#process">Process</a>
          </>
        ) : (
          <>
            <Link to="/#solutions">Solutions</Link>
            <Link to="/#services">What We Do</Link>
            <Link to="/#why-choose">Why Us</Link>
            <Link to="/#process">Process</Link>
          </>
        )}

        {/* Separate Pages */}

        <Link to="/about">Who We Are</Link>

        <Link to="/contact">Contact</Link>

      </div>

      {/* CTA */}

      <Link to="/contact">
        <button className="cta-btn">
          Let's Talk
        </button>
      </Link>

    </nav>
  );
}