import { footerServices, navLinks } from '../data/content'
import { LogoMark } from './Icons'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand brand--light">
            <LogoMark />
            <div>
              <span className="brand-name">Town Square Events</span>
              <span className="brand-tagline">Creating gatherings that matter.</span>
            </div>
          </a>
          <p>
            Wedding, corporate, and birthday planning across the region. Let&apos;s
            bring your vision to the town square.
          </p>
          <div className="social-links" aria-label="Social media">
            <a href="#" aria-label="Facebook">Fb</a>
            <a href="#" aria-label="Instagram">Ig</a>
            <a href="#" aria-label="LinkedIn">In</a>
          </div>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {footerServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact us</h4>
          <ul className="contact-list">
            <li>
              <a href="tel:+15551234567">(555) 123-4567</a>
            </li>
            <li>
              <a href="mailto:hello@townsquareevents.com">
                hello@townsquareevents.com
              </a>
            </li>
            <li>42 Market Street, Suite 200</li>
            <li>Mon – Sat: 9:00 AM – 6:00 PM</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Event inspiration and planning tips, monthly.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Town Square Events. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy policy</a>
            <a href="#">Terms &amp; conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
