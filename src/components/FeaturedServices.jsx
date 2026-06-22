const services = [
  {
    title: "Web Development",
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Graphic Design",
    price: "$30",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d"
  },
  {
    title: "UI/UX Design",
    price: "$40",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766"
  },
  {
    title: "Video Editing",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
  },
  {
    title: "Content Writing",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a"
  },
  {
    title: "Digital Marketing",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Mobile Apps",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
  },
  {
    title: "AI Services",
    price: "$70",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  }
];

function FeaturedServices() {
  return (
    <section className="services">

      <h2>Popular Services</h2>
      <p>
        Explore the most requested freelance services.
      </p>

      <div className="service-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <img
              src={service.image}
              alt={service.title}
            />

            <h3>{service.title}</h3>

            <p>Starting from {service.price}</p>

            <span>⭐⭐⭐⭐⭐</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedServices;