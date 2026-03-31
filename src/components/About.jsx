import { GraduationCap, Award, Users, Briefcase } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const credentials = [
  {
    icon: <GraduationCap size={22} />,
    title: 'Doctorate Candidate',
    desc: 'Specializing in adolescent mental health and evidence-based interventions',
  },
  {
    icon: <Award size={22} />,
    title: 'Clinical Experience',
    desc: 'Extensive clinical practice with adolescent populations across diverse settings',
  },
  {
    icon: <Users size={22} />,
    title: 'Community Advocate',
    desc: 'Committed to destigmatizing mental health care for young people',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Interdisciplinary Approach',
    desc: 'Integrating psychology, education, and public health perspectives',
  },
]

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section id="about" className="section section-alt" ref={sectionRef}>
      <div className="about__grid">
        <div className="about__left fade-in">
          <div className="about__portrait">
            <div className="about__portrait-placeholder">
              <GraduationCap size={48} strokeWidth={1.5} />
              <span>Your Photo</span>
            </div>
            <div className="about__portrait-decoration" />
          </div>
        </div>

        <div className="about__right">
          <div className="fade-in">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Dedicated to Improving <br />
              <span className="gradient-text">Young Lives</span>
            </h2>
            <p className="section-subtitle">
              As a doctorate candidate in mental health care, my work centers on understanding
              and addressing the unique challenges faced by adolescents. My research combines
              rigorous methodology with genuine compassion, aiming to create interventions
              that make a real difference in young people's lives.
            </p>
          </div>

          <div className="about__credentials">
            {credentials.map((item, i) => (
              <div
                key={i}
                className="about__credential fade-in"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="about__credential-icon">{item.icon}</div>
                <div>
                  <h3 className="about__credential-title">{item.title}</h3>
                  <p className="about__credential-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
