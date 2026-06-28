import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      title: "Verified Professionals",
      text: "Work with trusted and experienced freelancers."
    },
    {
      title: "Secure Payments",
      text: "Safe and transparent payment system."
    },
    {
      title: "Fast Delivery",
      text: "Get projects completed on time."
    }
  ];

  return (
    <section className="why-choose reveal">

      <h2>Why Choose Us</h2>

      <div className="features">

        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;