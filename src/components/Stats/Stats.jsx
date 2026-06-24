import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Projects Completed",
    },
    {
      number: "5K+",
      title: "Freelancers",
    },
    {
      number: "15K+",
      title: "Happy Clients",
    },
    {
      number: "120+",
      title: "Categories",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;