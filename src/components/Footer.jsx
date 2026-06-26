import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-col">

          <img
            src="/images/logo.png"
            alt="CrackOne"
            className="footer-logo"
          />

          <h3>CrackOne Technologies</h3>

          <p>
            Building innovative software solutions that empower
            businesses through technology, automation and digital
            transformation.
          </p>

          <div className="footer-social">

            <a
              href="https://www.linkedin.com/company/crackone-technologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="https://www.instagram.com/crackonetechnologies?igsh=Zm84emV6dTdqbGFj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* Services */}

        <div className="footer-col">

          <h4>Services</h4>

          <div className="footer-services">
            
           <h2> Web Development</h2>
          
         
        
            <h2>Mobile Apps</h2>
        

         
            <h2>Cloud Solutions</h2>
         
            <h2>Digital Marketing</h2>

            <h2>Custom Software Development</h2>

            <h2>Saas Platform Development</h2>

            <h2>UI/UX Design</h2>


          
            
          
        </div>
        </div>

        {/* Contact */}

        <div className="footer-col">

          <h4>Contact</h4>

          <div className="footer-contact">

            <Mail size={18} />
            <span>admin@crackonetechnologies.xyz</span>

          </div>

          <div className="footer-contact">

            <Phone size={18} />
            <span>+91 93614 13816</span>

          </div>

          <div className="footer-contact">

            <MapPin size={18} />
            <span>Tamil Nadu, India</span>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 CrackOne Technologies. All Rights Reserved.

      </div>
      

    </footer>
  );
}