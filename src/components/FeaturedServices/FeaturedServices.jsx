import "./FeaturedServices.css";
import services from "../../data/services";
import ServiceCard from "./ServiceCard";

function FeaturedServices() {
  return (
    <section className="featured-services reveal">

      <div className="section-header">
        <h2>Featured Services</h2>

        <p>
          Explore the most popular freelance services
          offered by top professionals.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedServices;