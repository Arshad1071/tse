export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="section-label">About us</p>
          <h2>We Plan. You Celebrate. We Make It Perfect.</h2>
          <p>
            For over a decade, Town Square Events has brought people together
            in the heart of the community—crafting weddings that feel timeless,
            corporate events that impress, and birthdays that spark joy.
          </p>
          <p>
            Our team blends creative design with calm, professional coordination
            so your event runs smoothly while you stay present for what matters.
          </p>
          <a className="btn btn-primary" href="#contact">About our story</a>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <strong>12+</strong>
            <span>Years of experience</span>
          </div>
          <div className="stat-card">
            <strong>500+</strong>
            <span>Events delivered</span>
          </div>
          <div className="stat-card stat-card--accent">
            <strong>98%</strong>
            <span>Client satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
