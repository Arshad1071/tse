import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="services section section--soft">
      <div className="container">
        <header className="section-header">
          <p className="section-label">Our services</p>
          <h2>Celebrations for every chapter</h2>
        </header>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <img src={service.image} alt={service.title} loading="lazy" />
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
