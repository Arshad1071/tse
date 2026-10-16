import { features } from '../data/content'
import { FeatureIcon } from './Icons'

export default function Features() {
  return (
    <section className="features" aria-label="Why choose us">
      <div className="container features-grid">
        {features.map((item) => (
          <article key={item.title} className="feature-card">
            <div className="feature-icon">
              <FeatureIcon name={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
