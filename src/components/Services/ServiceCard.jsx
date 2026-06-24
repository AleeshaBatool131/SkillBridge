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

      </div>

    </div>
  );
}

export default ServiceCard;