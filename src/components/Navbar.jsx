import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#project' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Findings', href: '#findings' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">Dr</span>
          <span className="navbar__logo-text">Portfolio</span>
        </a>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary navbar__cta" onClick={() => setMobileOpen(false)}>
            Get in Touch
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
