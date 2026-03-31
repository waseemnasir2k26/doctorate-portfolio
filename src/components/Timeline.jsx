import { useScrollReveal } from '../hooks/useScrollReveal'
import './Timeline.css'

const milestones = [
  {
    year: 'Year 1',
    title: 'Foundation & Literature Review',
    desc: 'Comprehensive literature review, research design development, ethics approval, and pilot study preparation.',
    status: 'complete',
  },
  {
    year: 'Year 2',
    title: 'Data Collection & Analysis',
    desc: 'Implementation of mixed-methods research, conducting interviews, surveys, and intervention pilots across multiple sites.',
    status: 'complete',
  },
  {
    year: 'Year 3',
    title: 'Framework Development',
    desc: 'Synthesizing findings into an actionable intervention framework, developing implementation guidelines, and policy recommendations.',
    status: 'current',
  },
  {
    year: 'Year 4',
    title: 'Dissertation & Dissemination',
    desc: 'Completing the dissertation, publishing findings in peer-reviewed journals, and presenting at national conferences.',
    status: 'upcoming',
  },
]

export default function Timeline() {
  const sectionRef = useScrollReveal()

  return (
    <section className="section section-alt" ref={sectionRef}>
      <div className="timeline__header fade-in">
        <p className="section-label">Research Journey</p>
        <h2 className="section-title">
          The Path to <br />
          <span className="gradient-text">Discovery</span>
        </h2>
      </div>

      <div className="timeline">
        {milestones.map((item, i) => (
          <div
            key={i}
            className={`timeline__item timeline__item--${item.status} fade-in`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="timeline__marker">
              <div className="timeline__dot" />
              {i < milestones.length - 1 && <div className="timeline__connector" />}
            </div>
            <div className="timeline__content">
              <span className="timeline__year">{item.year}</span>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__desc">{item.desc}</p>
              {item.status === 'current' && (
                <span className="timeline__badge">In Progress</span>
              )}
              {item.status === 'complete' && (
                <span className="timeline__badge timeline__badge--complete">Completed</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
