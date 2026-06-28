import { useParams, Link } from "react-router-dom";
import {
  FaStar,
  FaClock,
  FaRedo,
  FaCheckCircle
} from "react-icons/fa";

import services from "../data/servicesData";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "../components/ServiceDetails/ServiceDetails.css";

function ServiceDetails() {

  const { id } = useParams();

  const service = services.find(
    service => service.id === Number(id)
  );

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="service-hero">

        <img
          src={service.image}
          alt={service.title}
        />

      </section>

      <section className="service-container">

        <div className="service-left">

          <h1>{service.title}</h1>

          <p className="description">
            {service.description}
            This service is designed to
            provide premium quality work,
            excellent communication and
            professional delivery.
          </p>

          <div className="features-grid">

            <div>
              <FaCheckCircle />
              Professional Work
            </div>

            <div>
              <FaCheckCircle />
              Fast Delivery
            </div>

            <div>
              <FaCheckCircle />
              Modern Design
            </div>

            <div>
              <FaCheckCircle />
              Support Included
            </div>

          </div>

          <div className="reviews">

            <h2>Client Reviews</h2>

            <div className="review-card">

              <h4>Ahmed Khan</h4>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                Outstanding quality and
                excellent communication.
              </p>

            </div>

            <div className="review-card">

              <h4>Sarah Malik</h4>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                Delivered exactly what I
                wanted. Highly recommended.
              </p>

            </div>

          </div>

        </div>

        <div className="service-right">

          <div className="pricing-card">

            <h2>{service.price}</h2>

            <div className="info-row">
              <FaClock />
              3 Days Delivery
            </div>

            <div className="info-row">
              <FaRedo />
              Unlimited Revisions
            </div>

            <button>
              Continue
            </button>

            <Link
              to={`/seller/${service.sellerId}`}
              className="seller-link"
            >
              View Seller Profile
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ServiceDetails;