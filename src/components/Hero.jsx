import { ArrowDown, BookOpen, Heart } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Ambient background */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <Heart size={14} />
          <span>Doctorate Research Portfolio</span>
        </div>

        <h1 className="hero__title">
          Transforming{' '}
          <span className="hero__title-accent">Adolescent</span>
          <br />
          Mental Health Care
        </h1>

        <p className="hero__subtitle">
          An evidence-based exploration of innovative interventions, systemic approaches,
          and measurable outcomes in adolescent mental health — bridging the gap between
          research and practice.
        </p>

        <div className="hero__actions">
          <a href="#project" className="btn-primary">
            <BookOpen size={18} />
            Explore My Research
          </a>
          <a href="#about" className="btn-outline">
            Learn About Me
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">3+</span>
            <span className="hero__stat-label">Years of Research</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">200+</span>
            <span className="hero__stat-label">Participants Studied</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">5</span>
            <span className="hero__stat-label">Publications</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
