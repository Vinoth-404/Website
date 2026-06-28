import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToSection = (sectionId) => {
    closeMenu();

    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="brand">
        <Link to="/" onClick={closeMenu}>
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

        <button
          className="nav-btn"
          onClick={() => goToSection("solutions")}
        >
          Solutions
        </button>

        <button
          className="nav-btn"
          onClick={() => goToSection("services")}
        >
          What We Do
        </button>

        <button
          className="nav-btn"
          onClick={() => goToSection("why-choose")}
        >
          Why Us
        </button>

        <button
          className="nav-btn"
          onClick={() => goToSection("process")}
        >
          Process
        </button>

        <Link to="/about" onClick={closeMenu}>
          Who We Are
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

      </div>

      {/* CTA */}
      <Link to="/contact" onClick={closeMenu}>
        <button className="cta-btn">
          Let's Talk
        </button>
      </Link>

    </nav>
  );
}