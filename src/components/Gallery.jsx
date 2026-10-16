import { galleryImages } from '../data/content'

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section section--soft">
      <div className="container">
        <header className="section-header section-header--center">
          <p className="section-label">Our gallery</p>
          <h2>Moments we&apos;ve crafted</h2>
        </header>
        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <figure key={img.src} className="gallery-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
        <div className="gallery-cta">
          <a className="btn btn-primary" href="#contact">View more photos</a>
        </div>
      </div>
    </section>
  )
}
