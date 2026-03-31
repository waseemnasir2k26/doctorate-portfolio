import { School, Stethoscope, Building2, Globe } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Impact.css'

const impacts = [
  {
    icon: <School size={28} />,
    title: 'School-Based Programs',
    desc: 'Framework adapted for implementation in educational settings, providing early intervention and ongoing support within existing school infrastructure.',
    stat: '12 Schools',
    statLabel: 'Pilot Programs',
  },
  {
    icon: <Stethoscope size={28} />,
    title: 'Clinical Practice',
    desc: 'Evidence-based guidelines developed for clinicians working with adolescents, improving treatment protocols and patient outcomes.',
    stat: '30+ Clinicians',
    statLabel: 'Trained',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Policy Recommendations',
    desc: 'Research findings translated into actionable policy recommendations for healthcare organizations and government agencies.',
    stat: '3 Policy Briefs',
    statLabel: 'Published',
  },
  {
    icon: <Globe size={28} />,
    title: 'Community Outreach',
    desc: 'Public awareness campaigns and community workshops designed to destigmatize adolescent mental health and promote help-seeking behaviors.',
    stat: '2,000+',
    statLabel: 'People Reached',
  },
]

export default function Impact() {
  const sectionRef = useScrollReveal()

  return (
    <section id="impact" className="section" ref={sectionRef}>
      <div className="impact__header fade-in">
        <p className="section-label">Real-World Impact</p>
        <h2 className="section-title">
          From Research to <br />
          <span className="gradient-text">Real Change</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Translating academic findings into tangible improvements in adolescent
          mental health care across multiple sectors and communities.
        </p>
      </div>

      <div className="impact__grid">
        {impacts.map((item, i) => (
          <div
            key={i}
            className="impact__card fade-in"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="impact__card-icon">{item.icon}</div>
            <h3 className="impact__card-title">{item.title}</h3>
            <p className="impact__card-desc">{item.desc}</p>
            <div className="impact__card-stat">
              <span className="impact__card-stat-number">{item.stat}</span>
              <span className="impact__card-stat-label">{item.statLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
