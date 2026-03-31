import { Mail, MapPin, Globe, Send } from 'lucide-react'
import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  const sectionRef = useScrollReveal()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section section-alt" ref={sectionRef}>
      <div className="contact__grid">
        <div className="contact__info fade-in">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">
            Let's Connect & <br />
            <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Interested in my research, potential collaboration, or speaking engagements?
            I'd love to hear from you. Reach out and let's discuss how we can work together
            to improve adolescent mental health care.
          </p>

          <div className="contact__details">
            <a href="mailto:your.email@university.edu" className="contact__detail">
              <div className="contact__detail-icon">
                <Mail size={20} />
              </div>
              <div>
                <span className="contact__detail-label">Email</span>
                <span className="contact__detail-value">your.email@university.edu</span>
              </div>
            </a>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <MapPin size={20} />
              </div>
              <div>
                <span className="contact__detail-label">Location</span>
                <span className="contact__detail-value">University Department, City</span>
              </div>
            </div>

            <a href="#" className="contact__detail">
              <div className="contact__detail-icon">
                <Globe size={20} />
              </div>
              <div>
                <span className="contact__detail-label">LinkedIn</span>
                <span className="contact__detail-value">Connect with me professionally</span>
              </div>
            </a>
          </div>
        </div>

        <form className="contact__form fade-in" onSubmit={handleSubmit} style={{ transitionDelay: '150ms' }}>
          <div className="contact__form-row">
            <div className="contact__form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact__form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Research Collaboration"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your interest in my research..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary contact__submit">
            <Send size={18} />
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
