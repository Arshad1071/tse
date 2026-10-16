import { packages } from '../data/content'

function formatPrice(pkg) {
  if (pkg.customPrice) return pkg.customPrice
  return `$${pkg.price.toLocaleString()}`
}

export default function Packages() {
  return (
    <section id="packages" className="packages section">
      <div className="container">
        <header className="section-header section-header--center">
          <p className="section-label">Our packages</p>
          <h2>Choose the perfect package</h2>
          <p className="section-sub">
            Flexible planning tiers for weddings, corporate events, and private
            celebrations.
          </p>
        </header>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`package-card ${pkg.popular ? 'package-card--popular' : ''}`}
            >
              {pkg.popular && <span className="package-badge">Most popular</span>}
              <h3>{pkg.name}</h3>
              <p className="package-price">
                {formatPrice(pkg)}
                {!pkg.customPrice && <span>/ event</span>}
              </p>
              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="btn btn-secondary" href="#contact">Choose plan</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
