import { useState } from 'react'
import { navLinks } from '../data/content'
import { LogoMark } from './Icons'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          <LogoMark />
          <div>
            <span className="brand-name">Town Square Events</span>
            <span className="brand-tagline">We plan. You celebrate.</span>
          </div>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Main">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-nav" href="#contact">
            Book a consultation
          </a>
        </nav>
      </div>
    </header>
  )
}
