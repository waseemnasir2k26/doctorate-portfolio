import { Target, Lightbulb, Shield, TrendingUp } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Project.css'

const highlights = [
  {
    icon: <Target size={24} />,
    title: 'Research Question',
    text: 'How can evidence-based interventions be tailored to effectively address the rising mental health challenges among adolescents aged 12-18?',
    color: 'indigo',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Innovation',
    text: 'Developing a holistic framework that integrates digital tools, peer support, and clinical best practices for adolescent mental health care.',
    color: 'teal',
  },
  {
    icon: <Shield size={24} />,
    title: 'Ethical Foundation',
    text: 'All research conducted with rigorous ethical oversight, prioritizing participant safety, informed consent, and data confidentiality.',
    color: 'rose',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Expected Impact',
    text: 'Creating scalable, accessible intervention models that can be adopted by schools, clinics, and community organizations.',
    color: 'amber',
  },
]

export default function Project() {
  const sectionRef = useScrollReveal()

  return (
    <section id="project" className="section" ref={sectionRef}>
      <div className="project__header fade-in">
        <p className="section-label">The Research</p>
        <h2 className="section-title">
          Understanding the Crisis, <br />
          <span className="gradient-text">Building Solutions</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Adolescent mental health represents one of the most pressing challenges of our
          time. My doctorate project investigates innovative, evidence-based approaches to
          bridge the gap between growing need and available care.
        </p>
      </div>

      <div className="project__overview fade-in" style={{ transitionDelay: '150ms' }}>
        <div className="project__overview-content">
          <h3>Project Overview</h3>
          <p>
            This dissertation examines the effectiveness of integrated mental health
            interventions for adolescents, combining quantitative outcome measures with
            qualitative narratives to create a comprehensive understanding of what works,
            for whom, and under what conditions. The research spans multiple settings
            including schools, community centers, and clinical environments.
          </p>
          <p>
            Through a mixed-methods approach, the project aims to develop and validate an
            intervention framework that is not only clinically effective but also culturally
            responsive and practically implementable in resource-constrained settings.
          </p>
        </div>
        <div className="project__overview-visual">
          <div className="project__overview-chart">
            <div className="project__chart-bar" style={{ height: '40%' }}>
              <span>2020</span>
            </div>
            <div className="project__chart-bar project__chart-bar--accent" style={{ height: '55%' }}>
              <span>2022</span>
            </div>
            <div className="project__chart-bar project__chart-bar--highlight" style={{ height: '75%' }}>
              <span>2024</span>
            </div>
            <div className="project__chart-bar project__chart-bar--peak" style={{ height: '90%' }}>
              <span>2026</span>
            </div>
          </div>
          <p className="project__chart-label">Adolescent Mental Health Demand Growth</p>
        </div>
      </div>

      <div className="project__highlights">
        {highlights.map((item, i) => (
          <div
            key={i}
            className={`project__highlight project__highlight--${item.color} fade-in`}
            style={{ transitionDelay: `${(i + 2) * 100}ms` }}
          >
            <div className="project__highlight-icon">{item.icon}</div>
            <h3 className="project__highlight-title">{item.title}</h3>
            <p className="project__highlight-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
