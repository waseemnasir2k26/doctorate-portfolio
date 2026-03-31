import { Heart } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">Dr</span>
              <span className="footer__logo-text">Portfolio</span>
            </div>
            <p className="footer__tagline">
              Advancing adolescent mental health through evidence-based research and compassionate care.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4>Navigate</h4>
              <a href="#about">About Me</a>
              <a href="#project">Research</a>
              <a href="#methodology">Methodology</a>
              <a href="#findings">Findings</a>
            </div>
            <div className="footer__col">
              <h4>More</h4>
              <a href="#impact">Impact</a>
              <a href="#contact">Contact</a>
              <a href="#">LinkedIn</a>
              <a href="#">ResearchGate</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} All rights reserved.</p>
          <p className="footer__credit">
            Designed & Developed by{' '}
            <a href="https://www.skynetjoe.com" target="_blank" rel="noopener noreferrer" className="footer__skynet">
              SkynetLabs
            </a>{' '}
            <Heart size={12} className="footer__heart" />
          </p>
        </div>
      </div>
    </footer>
  )
}
