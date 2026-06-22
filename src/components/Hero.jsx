function Hero() {
  return (
    <>
    <section className="hero">
      <div className="hero-left">

        <h1>
          Find Expert Freelancers
          <span> For Any Job, Anytime.</span>
        </h1>

        <p>
          Connect with talented professionals,
          hire top-rated freelancers,
          or start earning by offering your skills.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Web Development, Design..."
          />
          <button>Search</button>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            Hire Talent
          </button>

          <button className="secondary-btn">
            Become a Seller
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
  alt="freelancers"
/>
      </div>
    </section>
    <div className="stats-container">
    <div className="stats">
          <div>
            <h3>50K+</h3>
            <span>Freelancers</span>
          </div>

          <div>
            <h3>20K+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>98%</h3>
            <span>Satisfaction</span>
          </div>
        </div>
    </div>
    </>
  );
}

export default Hero;