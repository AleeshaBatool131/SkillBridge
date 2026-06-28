import "./Hero.css";

function Hero() {
  return (
    <section className="hero reveal">

      <div className="hero-content">

        <span className="hero-tag">
          #1 Freelance Marketplace
        </span>

        <h1>
          Hire Top Freelancers For Every Project
        </h1>

        <p>
          Connect with talented professionals around the world.
          Get quality work delivered on time and within budget.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Services
          </button>

          <button className="secondary-btn">
            Become a Seller
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="/images/freelanceMarket.jpg"
          alt="Hero"
        />

      </div>

    </section>
  );
}

export default Hero;