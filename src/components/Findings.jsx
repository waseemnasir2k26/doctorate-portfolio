import { TrendingUp, Heart, Brain, Zap } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Findings.css'

const findings = [
  {
    metric: '67%',
    label: 'Improvement in Well-being Scores',
    desc: 'Participants showed significant improvement in standardized well-being assessments after completing the intervention program.',
    icon: <TrendingUp size={20} />,
    color: 'indigo',
  },
  {
    metric: '82%',
    label: 'Engagement Rate',
    desc: 'High program engagement rates demonstrate the intervention\'s relevance and appeal to adolescent participants.',
    icon: <Heart size={20} />,
    color: 'rose',
  },
  {
    metric: '3.2x',
    label: 'Better Coping Skills',
    desc: 'Participants developed significantly stronger coping mechanisms compared to the control group over the study period.',
    icon: <Brain size={20} />,
    color: 'teal',
  },
  {
    metric: '91%',
    label: 'Would Recommend',
    desc: 'Overwhelming majority of participants reported they would recommend the program to peers facing similar challenges.',
    icon: <Zap size={20} />,
    color: 'amber',
  },
]

export default function Findings() {
  const sectionRef = useScrollReveal()

  return (
    <section id="findings" className="section section-indigo" ref={sectionRef}>
      <div className="findings__header fade-in">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Key Findings</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>
          Research Outcomes That <br />
          Speak Volumes
        </h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
          Preliminary findings demonstrate the significant potential of integrated
          intervention approaches for adolescent mental health care.
        </p>
      </div>

      <div className="findings__grid">
        {findings.map((item, i) => (
          <div
            key={i}
            className={`findings__card findings__card--${item.color} fade-in`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="findings__card-icon">{item.icon}</div>
            <div className="findings__card-metric">{item.metric}</div>
            <h3 className="findings__card-label">{item.label}</h3>
            <p className="findings__card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
