import { useParams } from "react-router-dom";
import { FaStar, FaEnvelope, FaBriefcase } from "react-icons/fa";

import sellers from "../data/sellersData";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "../components/SellerProfile/SellerProfile.css";

function SellerProfile() {
  const { id } = useParams();

  const seller = sellers.find(
    (seller) => seller.id === Number(id)
  );

  if (!seller) {
    return <h1>Seller Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="seller-banner">
        <div className="banner-overlay">
          <img
            src={seller.image}
            alt={seller.name}
            className="profile-img"
          />

          <h1>{seller.name}</h1>

          <h3>{seller.title}</h3>

          <div className="seller-stats">
            <span>
              <FaStar /> 4.9 Rating
            </span>

            <span>
              <FaBriefcase /> {seller.experience}
            </span>
          </div>

          <button className="contact-btn">
            <FaEnvelope />
            Contact Seller
          </button>
        </div>
      </section>

      <section className="seller-content">

        <div className="about-card">
          <h2>About Me</h2>

          <p>
            Experienced freelancer dedicated to
            delivering high-quality work with
            attention to detail and client
            satisfaction.
          </p>
        </div>

        <div className="skills-card">
          <h2>Skills</h2>

          <div className="skills">
            {seller.skills.map((skill, index) => (
              <span key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="portfolio-card">
          <h2>Portfolio</h2>

          <div className="portfolio-grid">
            {seller.portfolio.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="portfolio"
              />
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default SellerProfile;