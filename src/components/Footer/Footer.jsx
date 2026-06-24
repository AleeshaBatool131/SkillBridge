import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <div className="footer-logo">

            <div className="footer-logo-box">
              <img src="/images/skillBridgeLogo.png"
              alt="logo"
              />
            </div>

            <h3>Skill Bridge</h3>

          </div>

          <p>
            Connecting businesses with talented
            freelancers worldwide.
          </p>

        </div>

        <div className="footer-column">

          <h4>Quick Links</h4>

          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">About</a>
          <a href="/">Contact</a>

        </div>

        <div className="footer-column">

          <h4>Contact</h4>

          <p>info@freelancehub.com</p>
          <p>+92 300 1234567</p>
          <p>Lahore, Pakistan</p>

        </div>

        <div className="footer-column">

          <h4>Follow Us</h4>

          <div className="social-icons">

            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FreelanceHub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;