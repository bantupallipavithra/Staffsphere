import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id = "contact">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h4>StaffSphere</h4>
          <p>Modern Workforce Management Platform</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h5>Contact</h5>
          <a href="mailto:bantupalli302@gmail.com">
            📧 bantupalli302@gmail.com
          </a>
          <a href="tel:+919876543210">
            📞 +91 98765 43210
          </a>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h5>Connect</h5>
          <a
            href="https://github.com/bantupallipavithra"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pavithra-bantupalli-270b05267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} StaffSphere. All rights reserved. | @Pavithra
      </div>
    </footer>
  );
};

export default Footer;
