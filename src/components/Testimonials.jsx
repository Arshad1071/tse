import { testimonials } from '../data/content'
import { StarRating } from './Icons'

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="testimonials-bg" aria-hidden="true" />
      <div className="container">
        <header className="section-header section-header--center">
          <p className="section-label">Client testimonials</p>
          <h2>What our clients say</h2>
        </header>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <StarRating />
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              <footer>
                <img src={item.avatar} alt="" width={48} height={48} />
                <div>
                  <cite>{item.name}</cite>
                  <span>{item.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
