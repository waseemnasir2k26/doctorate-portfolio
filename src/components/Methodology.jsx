import { Search, BarChart3, FileText, Users } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Methodology.css'

const methods = [
  {
    step: '01',
    icon: <Search size={24} />,
    title: 'Literature Review',
    desc: 'Comprehensive analysis of existing research on adolescent mental health interventions, identifying gaps and opportunities for novel approaches.',
    tags: ['Systematic Review', 'Meta-Analysis', '500+ Sources'],
  },
  {
    step: '02',
    icon: <Users size={24} />,
    title: 'Qualitative Research',
    desc: 'In-depth interviews and focus groups with adolescents, caregivers, and mental health professionals to understand lived experiences and needs.',
    tags: ['Semi-Structured Interviews', 'Thematic Analysis', 'Grounded Theory'],
  },
  {
    step: '03',
    icon: <BarChart3 size={24} />,
    title: 'Quantitative Analysis',
    desc: 'Rigorous statistical analysis of intervention outcomes using validated assessment tools and longitudinal tracking measures.',
    tags: ['RCT Design', 'Statistical Modeling', 'Effect Sizes'],
  },
  {
    step: '04',
    icon: <FileText size={24} />,
    title: 'Framework Development',
    desc: 'Synthesis of findings into an actionable intervention framework with clear implementation guidelines and evaluation criteria.',
    tags: ['Evidence Synthesis', 'Clinical Guidelines', 'Policy Recommendations'],
  },
]

export default function Methodology() {
  const sectionRef = useScrollReveal()

  return (
    <section id="methodology" className="section section-alt" ref={sectionRef}>
      <div className="methodology__header fade-in">
        <p className="section-label">Methodology</p>
        <h2 className="section-title">
          Rigorous Research, <br />
          <span className="gradient-text">Meaningful Results</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          A mixed-methods approach ensuring both depth and breadth of understanding,
          combining the best of qualitative insight with quantitative rigor.
        </p>
      </div>

      <div className="methodology__steps">
        {methods.map((method, i) => (
          <div
            key={i}
            className="methodology__step fade-in"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="methodology__step-number">{method.step}</div>
            <div className="methodology__step-line" />
            <div className="methodology__step-content">
              <div className="methodology__step-icon">{method.icon}</div>
              <h3>{method.title}</h3>
              <p>{method.desc}</p>
              <div className="methodology__tags">
                {method.tags.map((tag, j) => (
                  <span key={j} className="methodology__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
