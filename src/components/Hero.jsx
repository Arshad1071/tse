import { StarRating } from './Icons'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=900&fit=crop'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Every celebration deserves the spotlight ✨</p>
          <h1>Make Every Event Unforgettable</h1>
          <p className="hero-lead">
            Town Square Events plans weddings, corporate gatherings, and birthday
            celebrations with style, heart, and flawless execution—from first
            idea to final toast.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Plan my event</a>
            <a className="btn btn-outline" href="#packages">View packages</a>
          </div>
          <div className="hero-trust">
            <div className="avatar-stack" aria-hidden="true">
              <img src="https://i.pravatar.cc/48?img=32" alt="" />
              <img src="https://i.pravatar.cc/48?img=27" alt="" />
              <img src="https://i.pravatar.cc/48?img=44" alt="" />
            </div>
            <div>
              <p className="trust-label">Trusted by 500+ happy clients</p>
              <p className="trust-rating">
                <StarRating /> <span>4.9 (180 reviews)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src={HERO_IMAGE} alt="Elegant event table setting" />
          </div>
          <div className="hero-blob hero-blob--1" aria-hidden="true" />
          <div className="hero-blob hero-blob--2" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
