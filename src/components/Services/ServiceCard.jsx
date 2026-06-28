import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img
        src={service.image}
        alt={service.title}
      />

      <div className="service-content">
        <h3>{service.title}</h3>

        <h4>{service.freelancer}</h4>

        <p>{service.description}</p>

        <div className="service-footer">
          <span className="price">
            {service.price}
          </span>

          <span className="rating">
            <FaStar />
            {service.rating}
          </span>
        </div>

        <div className="card-buttons">
          <Link
            to={`/service/${service.id}`}
            className="details-btn"
          >
            View Details
          </Link>

          <Link
            to={`/seller/${service.sellerId}`}
            className="seller-btn"
          >
            View Seller
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;