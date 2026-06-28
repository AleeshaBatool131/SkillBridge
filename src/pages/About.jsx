import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import team from "../data/teamData";

import "../components/About/About.css";
import useScrollReveal from "../hooks/useScrollReveal";

function About() {
    useScrollReveal();
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="about-hero reveal">

        <div className="about-overlay">

          <h1>About Skill Bridge</h1>

          <p>
            Connecting talented freelancers with businesses around the world.
          </p>

        </div>

      </section>

      {/* Company */}

      <section className="company-section reveal">

        <div className="company-left">

          <h2>Who We Are</h2>

          <p>
            Skill Bridge is a modern freelance marketplace
            designed to connect clients with skilled
            professionals from different industries.

            Whether you need a website, logo,
            marketing campaign or mobile application,
            our platform makes finding the right
            freelancer simple and secure.
          </p>

        </div>

        <div className="company-right">

          <div className="info-card">

            <h3>Our Purpose</h3>

            <p>
              Build a trusted marketplace where
              talent meets opportunity.
            </p>

          </div>

          <div className="info-card">

            <h3>Business Goal</h3>

            <p>
              Empower freelancers while helping
              businesses complete projects faster.
            </p>

          </div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="mission-section reveal">

        <div className="mission-card">

          <h2>Mission</h2>

          <p>
            To create opportunities for freelancers
            and provide businesses with high-quality
            professional services.
          </p>

        </div>

        <div className="mission-card">

          <h2>Vision</h2>

          <p>
            Become one of the world's most trusted
            freelance marketplaces through innovation,
            transparency and excellence.
          </p>

        </div>

      </section>

      {/* Statistics */}

      <section className="about-stats reveal">

        <div>

          <h1>15K+</h1>

          <p>Happy Clients</p>

        </div>

        <div>

          <h1>6K+</h1>

          <p>Freelancers</p>

        </div>

        <div>

          <h1>20K+</h1>

          <p>Projects</p>

        </div>

        <div>

          <h1>95%</h1>

          <p>Success Rate</p>

        </div>

      </section>

      {/* Team */}

      <section className="team-section reveal">

        <h2>Meet Our Team</h2>

        <div className="team-grid">

          {team.map((member) => (

            <div
              key={member.id}
              className="team-card"
            >

              <img
                src={member.image}
                alt={member.name}
              />

              <h3>{member.name}</h3>

              <span>{member.role}</span>

              <p>{member.description}</p>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;